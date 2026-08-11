import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export default function AcercaPage() {
  return (
    <SiteShell>
      <main className="shell py-10 md:py-16">
        <div className="card p-6 md:p-10 max-w-4xl">
          <div className="text-xs font-black tracking-[0.15em] text-blue-600">ACERCA</div>
          <h1 className="section-title mt-3">Pulso RD</h1>
          <p className="muted mt-4 leading-7 max-w-3xl">
            Plataforma de opinión pública para República Dominicana y la diáspora dominicana en EE.UU.
            Publicamos agregados, metodología y limitaciones — no vendemos números sin contexto.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="rounded-2xl border border-neutral-200 p-4">
              <div className="font-black">Transparencia</div>
              <p className="muted text-sm mt-2">Cada cifra debe explicar origen, muestra y método.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-4">
              <div className="font-black">Segmentación</div>
              <p className="muted text-sm mt-2">RD y diáspora se analizan como poblaciones separadas.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-4">
              <div className="font-black">Participación</div>
              <p className="muted text-sm mt-2">Las encuestas web son participación, no censo electoral.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/metodologia" className="rounded-full bg-neutral-950 text-white px-4 py-2.5 text-sm font-bold">
              Metodología
            </Link>
            <Link href="/preguntas" className="rounded-full border border-neutral-300 px-4 py-2.5 text-sm font-bold">
              Participa
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
