import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "node:crypto";
import { createAdminClient } from "@/lib/supabase/admin";

function getIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function fingerprint(ip: string, pollId: string) {
  const secret = process.env.VOTE_HASH_SECRET;
  if (!secret) throw new Error("Missing VOTE_HASH_SECRET");
  return createHmac("sha256", secret).update(`${pollId}:${ip}`).digest("hex");
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const option = String(body.option ?? "").trim();
    const audience = body.audience === "US" ? "US" : body.audience === "DR" ? "DR" : null;
    const region = body.region ? String(body.region).trim().slice(0, 80) : null;

    if (!option || !audience) {
      return NextResponse.json({ error: "Respuesta inválida." }, { status: 400 });
    }

    const supabase = createAdminClient();

    const { data: question, error: questionError } = await supabase
      .from("pulse_questions")
      .select("id,options,status")
      .eq("id", id)
      .maybeSingle();

    if (questionError || !question || question.status !== "published") {
      return NextResponse.json({ error: "Encuesta no disponible." }, { status: 404 });
    }

    const allowedOptions = Array.isArray(question.options) ? question.options.map(String) : [];
    if (!allowedOptions.includes(option)) {
      return NextResponse.json({ error: "Opción inválida." }, { status: 400 });
    }

    const ipHash = fingerprint(getIp(request), id);

    const { error } = await supabase.from("pulse_votes").insert({
      question_id: id,
      option,
      audience,
      region,
      ip_hash: ipHash,
      user_agent: request.headers.get("user-agent")?.slice(0, 300) ?? null,
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "Ya registramos una respuesta para esta pregunta desde esta conexión." },
          { status: 409 }
        );
      }
      throw error;
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error del servidor." }, { status: 500 });
  }
}
