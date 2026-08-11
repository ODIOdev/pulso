import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { getPublishedQuestions } from "@/lib/questions";

export default async function AdminPollsPage() {
  const questions = await getPublishedQuestions();

  return (
    <AdminShell title="Polls" eyebrow="POLLS">
      <div className="flex justify-between items-center gap-4 mb-4">
        <p className="muted text-sm">Preguntas publicadas desde Supabase.</p>
        <Link href="/admin/polls/create" className="rounded-full bg-neutral-950 text-white px-4 py-2.5 text-sm font-bold">
          Create poll
        </Link>
      </div>

      <div className="grid gap-3">
        {questions.length === 0 ? (
          <div className="card p-6 muted">No hay polls publicadas.</div>
        ) : (
          questions.map((q) => (
            <article key={q.id} className="card p-5">
              <div className="text-xs font-black tracking-[0.12em] text-blue-600">{q.status.toUpperCase()}</div>
              <h2 className="font-black text-lg mt-2">{q.question}</h2>
              <div className="muted text-sm mt-2">
                {q.category} · {q.slug} · {q.options.length} opciones
              </div>
            </article>
          ))
        )}
      </div>
    </AdminShell>
  );
}
