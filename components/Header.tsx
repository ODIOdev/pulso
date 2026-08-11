import Link from "next/link";

const nav = [
  { href: "/pulso", label: "Pulso" },
  { href: "/temas", label: "Temas" },
  { href: "/mapa", label: "Mapa" },
  { href: "/diaspora", label: "Diáspora" },
  { href: "/elecciones/2028", label: "2028" },
  { href: "/metodologia", label: "Metodología" },
];

export function Header() {
  return (
    <header className="border-b border-black/5 bg-white/90 backdrop-blur sticky top-0 z-50">
      <div className="shell h-[72px] flex items-center justify-between gap-6">
        <Link href="/" className="font-black tracking-[-0.05em] text-xl">
          PULSO<span className="text-blue-600">RD</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-neutral-600">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/preguntas"
          className="rounded-full bg-neutral-950 text-white px-4 py-2.5 text-sm font-bold"
        >
          Participa
        </Link>
      </div>
    </header>
  );
}
