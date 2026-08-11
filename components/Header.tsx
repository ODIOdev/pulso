import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-black/5 bg-white/90 backdrop-blur sticky top-0 z-50">
      <div className="shell h-[72px] flex items-center justify-between gap-6">
        <Link href="/" className="font-black tracking-[-0.05em] text-xl">
          PULSO<span className="text-blue-600">RD</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-neutral-600">
          <Link href="#pulso">Pulso</Link>
          <Link href="#temas">Temas</Link>
          <Link href="#regiones">Regiones</Link>
          <Link href="#diaspora">Diáspora</Link>
          <Link href="/metodologia">Metodología</Link>
        </nav>
        <Link
          href="#participa"
          className="rounded-full bg-neutral-950 text-white px-4 py-2.5 text-sm font-bold"
        >
          Participa
        </Link>
      </div>
    </header>
  );
}
