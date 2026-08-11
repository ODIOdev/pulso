import { Header } from "@/components/Header";
import { Dashboard } from "@/components/Dashboard";
import { createAdminClient } from "@/lib/supabase/admin";
import type { PulseQuestion } from "@/lib/types";

async function getPublishedQuestion(): Promise<PulseQuestion | null> {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return null;
    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from("pulse_questions")
      .select("id,slug,question,status,category,options,published_at")
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error) throw error;
    return data as PulseQuestion | null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const question = await getPublishedQuestion();

  return (
    <>
      <Header />
      <Dashboard question={question} />
      <footer className="shell py-10 text-sm muted">
        <div className="border-t border-neutral-200 pt-6 flex flex-col md:flex-row justify-between gap-3">
          <span>© Pulso RD</span>
          <span>Opinión pública · Transparencia · Metodología</span>
        </div>
      </footer>
    </>
  );
}
