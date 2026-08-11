import { AdminShell } from "@/components/admin/AdminShell";

export default function AdminSettingsPage() {
  return (
    <AdminShell title="Settings" eyebrow="SETTINGS">
      <div className="card p-6 grid gap-5 max-w-2xl">
        <div>
          <div className="font-black">Site URL</div>
          <div className="muted text-sm mt-1">{process.env.NEXT_PUBLIC_SITE_URL ?? "—"}</div>
        </div>
        <div>
          <div className="font-black">Supabase project</div>
          <div className="muted text-sm mt-1 break-all">{process.env.NEXT_PUBLIC_SUPABASE_URL ?? "—"}</div>
        </div>
        <div>
          <div className="font-black">Auth</div>
          <div className="muted text-sm mt-1">Pendiente: Supabase Auth + roles admin.</div>
        </div>
      </div>
    </AdminShell>
  );
}
