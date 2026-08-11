import { AdminShell } from "@/components/admin/AdminShell";

export default function AdminAnalyticsPage() {
  return (
    <AdminShell title="Analytics" eyebrow="ANALYTICS">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card p-6 min-h-48">
          <div className="font-black">Participación</div>
          <p className="muted text-sm mt-2">Series diarias de votos agregados (próximo).</p>
        </div>
        <div className="card p-6 min-h-48">
          <div className="font-black">Temas</div>
          <p className="muted text-sm mt-2">Movimiento del issue tracker y sentiment.</p>
        </div>
      </div>
    </AdminShell>
  );
}
