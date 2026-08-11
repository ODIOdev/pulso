import { AdminShell } from "@/components/admin/AdminShell";
import { demoRegions } from "@/lib/demo";

export default function AdminRegionsPage() {
  return (
    <AdminShell title="Regions" eyebrow="REGIONS">
      <div className="card p-6">
        <p className="muted mb-6">Catálogo regional demo (RD). Normalizar provincias en una tabla propia más adelante.</p>
        <div className="grid gap-3">
          {demoRegions.map((region) => (
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
