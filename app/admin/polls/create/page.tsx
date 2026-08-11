import { AdminShell } from "@/components/admin/AdminShell";

export default function AdminCreatePollPage() {
  return (
    <AdminShell title="Create poll" eyebrow="POLLS">
      <form className="card p-6 md:p-8 grid gap-5 max-w-3xl">
        <label className="grid gap-2">
          <span className="text-sm font-bold">Pregunta</span>
          <input className="rounded-xl border border-neutral-300 px-4 py-3" placeholder="¿Cuál debería ser la prioridad nacional?" disabled />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-bold">Slug</span>
          <input className="rounded-xl border border-neutral-300 px-4 py-3" placeholder="prioridad-nacional-002" disabled />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-bold">Categoría</span>
          <input className="rounded-xl border border-neutral-300 px-4 py-3" placeholder="Prioridades nacionales" disabled />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-bold">Opciones (una por línea)</span>
          <textarea className="rounded-xl border border-neutral-300 px-4 py-3 min-h-36" placeholder={"Costo de vida\nSeguridad\nEmpleo"} disabled />
        </label>
        <button type="button" className="rounded-full bg-neutral-950 text-white px-4 py-2.5 text-sm font-bold w-fit opacity-60" disabled>
          Guardar (próximo: API admin)
        </button>
      </form>
    </AdminShell>
  );
}
