import { AdminShell } from "@/components/admin/AdminShell";

export default function AdminContentPage() {
  return (
    <AdminShell title="Content" eyebrow="CONTENT">
      <div className="card p-6 grid gap-4">
        <p className="muted">Copy de metodología, acerca, y módulos editoriales.</p>
        {["/metodologia", "/acerca", "/temas", "/diaspora"].map((path) => (
          <div key={path} className="rounded-2xl border border-neutral-200 px-4 py-3 flex justify-between gap-3">
            <span className="font-bold">{path}</span>
            <span className="muted text-sm">Editable pronto</span>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
