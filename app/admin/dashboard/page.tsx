import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { getPublishedQuestions } from "@/lib/questions";

export default async function AdminDashboardPage() {
  const questions = await getPublishedQuestions();

  return (
    <AdminShell title="Dashboard">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card p-5">
          <div className="muted text-sm font-bold">Polls publicadas</div>
          <div className="text-4xl font-black mt-3">{questions.length}</div>
        </div>
        <div className="card p-5">
          <div className="muted text-sm font-bold">Respuestas</div>
          <div className="text-4xl font-black mt-3">—</div>
        </div>
        <div className="card p-5">
          <div className="muted text-sm font-bold">Data quality</div>
          <div className="text-4xl font-black mt-3 text-emerald-700">OK</div>
        </div>
      </div>

      <div className="card p-6 mt-4">
        <h2 className="font-black text-lg">Accesos rápidos</h2>
        <div className="flex flex-wrap gap-3 mt-4">
          <Link href="/admin/polls/create" className="rounded-full bg-neutral-950 text-white px-4 py-2.5 text-sm font-bold">
            Crear poll
          </Link>
          <Link href="/admin/responses" className="rounded-full border border-neutral-300 px-4 py-2.5 text-sm font-bold">
            Ver responses
          </Link>
          <Link href="/admin/data-quality" className="rounded-full border border-neutral-300 px-4 py-2.5 text-sm font-bold">
            Data quality
          </Link>
        </div>
      </div>
    </AdminShell>
  );
}
