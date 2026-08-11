import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { PollCard } from "@/components/PollCard";
import { getPublishedQuestions } from "@/lib/questions";

export default async function PreguntasPage() {
  const questions = await getPublishedQuestions();
  const active = questions[0] ?? null;

  return (
    <SiteShell>
      <main className="shell py-10 md:py-16">
        <div className="text-xs font-black tracking-[0.15em] text-blue-600">PREGUNTAS</div>
        <h1 className="section-title mt-3">Participa en el pulso</h1>
        <p className="muted mt-4 max-w-2xl">
          Preguntas publicadas para República Dominicana y diáspora. Una respuesta por dispositivo.
        </p>

        <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-5 mt-8">
          <div className="card p-6">
            <h2 className="font-black text-lg">Publicadas</h2>
            <div className="mt-5 grid gap-3">
              {questions.length === 0 ? (
                <p className="muted text-sm">No hay preguntas publicadas todavía.</p>
              ) : (
                questions.map((q) => (
                  <div key={q.id} className="rounded-2xl border border-neutral-200 p-4">
                    <div className="text-xs font-black tracking-[0.12em] text-blue-600">{q.category}</div>
                    <div className="font-bold mt-2">{q.question}</div>
                  </div>
                ))
              )}
            </div>
            <Link href="/metodologia" className="inline-block mt-6 text-sm font-bold">
              Cómo interpretamos los resultados →
            </Link>
          </div>
          <PollCard initialQuestion={active} />
        </div>
      </main>
    </SiteShell>
  );
}
