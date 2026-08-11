import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { election2028Candidates } from "@/lib/candidates";

export default function AdminCandidatesPage() {
  return (
    <AdminShell title="Candidates 2028" eyebrow="ELECTIONS">
      <p className="muted mb-5">
        Directorio informativo público en{" "}
        <Link href="/elecciones/2028" className="font-bold">
          /elecciones/2028
        </Link>
        . Sin intención de voto ni ranking de campaña.
      </p>
      <div className="grid gap-3">
        {election2028Candidates.map((c) => (
          <div key={c.slug} className="card p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div className="font-black">{c.name}</div>
              <div className="muted text-sm mt-1">
                {c.party} · {c.role}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold">{c.status}</span>
              <Link href={`/elecciones/2028/${c.slug}`} className="text-sm font-bold">
                Ver →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
