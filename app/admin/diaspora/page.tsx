import { AdminShell } from "@/components/admin/AdminShell";
import { demoDiaspora } from "@/lib/demo";

export default function AdminDiasporaPage() {
  return (
    <AdminShell title="Diaspora" eyebrow="DIASPORA">
      <div className="card p-6">
        <p className="muted mb-6">Estados EE.UU. demo para segmentación de diáspora.</p>
        <div className="grid gap-3">
          {demoDiaspora.map((region) => (
            <div key={region.name} className="flex items-center justify-between rounded-2xl border border-neutral-200 px-4 py-3">
              <span className="font-bold">{region.name}</span>
              <span className="font-black">{region.score}</span>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
