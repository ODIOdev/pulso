import { AdminShell } from "@/components/admin/AdminShell";

export default function AdminSentimentPage() {
  return (
    <AdminShell title="Sentiment" eyebrow="SENTIMENT">
      <div className="card p-6">
        <p className="muted">
          Ingesta y revisión de `sentiment_events`. Conectar fuentes aprobadas y reglas de confianza.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {["News", "Social approved", "Manual"].map((source) => (
            <div key={source} className="rounded-2xl border border-neutral-200 p-4">
              <div className="font-black">{source}</div>
              <div className="text-3xl font-black mt-3">0</div>
              <div className="muted text-sm mt-1">eventos</div>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
