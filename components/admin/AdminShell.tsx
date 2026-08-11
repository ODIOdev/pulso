import Link from "next/link";
import type { ReactNode } from "react";

const nav = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/polls", label: "Polls" },
  { href: "/admin/polls/create", label: "Create poll" },
  { href: "/admin/sentiment", label: "Sentiment" },
  { href: "/admin/regions", label: "Regions" },
  { href: "/admin/diaspora", label: "Diaspora" },
  { href: "/admin/responses", label: "Responses" },
  { href: "/admin/data-quality", label: "Data quality" },
  { href: "/admin/analytics", label: "Analytics" },
  { href: "/admin/content", label: "Content" },
  { href: "/admin/candidates", label: "Candidates 2028" },
  { href: "/admin/settings", label: "Settings" },
];

export function AdminShell({
  title,
  eyebrow = "ADMIN",
  children,
}: {
  title: string;
  eyebrow?: string;
  children?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <div className="border-b border-black/5 bg-white">
        <div className="shell h-16 flex items-center justify-between gap-4">
          <Link href="/admin/dashboard" className="font-black tracking-[-0.05em] text-lg">
            PULSO<span className="text-blue-600">RD</span>{" "}
            <span className="text-neutral-400 font-bold text-sm tracking-normal">Admin</span>
          </Link>
          <Link href="/" className="text-sm font-bold text-neutral-600">
            ← Plataforma pública
          </Link>
        </div>
      </div>

      <div className="shell py-8 grid lg:grid-cols-[220px_1fr] gap-6">
        <aside className="card p-3 h-fit lg:sticky lg:top-6">
          <nav className="grid gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-blue-50 hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <section>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 font-medium mb-5">
            Consola admin sin autenticación todavía. Añadir auth/roles antes de producción.
          </div>
          <div className="text-xs font-black tracking-[0.15em] text-blue-600">{eyebrow}</div>
          <h1 className="section-title mt-2">{title}</h1>
          <div className="mt-6">{children}</div>
        </section>
      </div>
    </div>
  );
}
