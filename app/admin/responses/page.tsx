import { AdminShell } from "@/components/admin/AdminShell";

export default function AdminResponsesPage() {
  return (
    <AdminShell title="Responses" eyebrow="RESPONSES">
      <div className="card p-6">
        <p className="muted">
          Agregados de `pulse_votes` (nunca exponer filas crudas al cliente público). Aquí irá tabla admin con service role.
        </p>
        <div className="rounded-2xl border border-dashed border-neutral-300 p-8 mt-6 text-center muted">
          Sin respuestas agregadas para mostrar todavía.
        </div>
      </div>
    </AdminShell>
  );
}
