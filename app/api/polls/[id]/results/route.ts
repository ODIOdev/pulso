import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const supabase = createAdminClient();

    const { data: question, error: qError } = await supabase
      .from("pulse_questions")
      .select("id,options,status")
      .eq("id", id)
      .maybeSingle();

    if (qError || !question) {
      return NextResponse.json({ error: "Encuesta no encontrada." }, { status: 404 });
    }

    const { data: votes, error } = await supabase
      .from("pulse_votes")
      .select("option")
      .eq("question_id", id);

    if (error) throw error;

    const options = Array.isArray(question.options) ? question.options.map(String) : [];
    const counts = new Map(options.map((option) => [option, 0]));

    for (const vote of votes ?? []) {
      counts.set(vote.option, (counts.get(vote.option) ?? 0) + 1);
    }

    const total = [...counts.values()].reduce((sum, value) => sum + value, 0);
    const results = [...counts.entries()].map(([option, count]) => ({
      option,
      votes: count,
      percentage: total ? Math.round((count / total) * 1000) / 10 : 0,
    }));

    return NextResponse.json({ total, results });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error del servidor." }, { status: 500 });
  }
}
