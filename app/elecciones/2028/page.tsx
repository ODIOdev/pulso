import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { election2028Candidates } from "@/lib/candidates";

export default function Elecciones2028Page() {
  const featured = election2028Candidates.filter((c) => c.featured);
  const rest = election2028Candidates.filter((c) => !c.featured);

  return (
    <SiteShell>
      <main className="shell py-10 md:py-16">
        <div className="text-xs font-black tracking-[0.15em] text-blue-600">ELECCIONES 2028</div>
        <h1 className="section-title mt-3">Posibles candidatos presidenciales</h1>
        <p className="muted mt-4 max-w-3xl leading-7">
          Directorio informativo de figuras mencionadas de cara a las elecciones generales de la República Dominicana
          en 2028. No es una boleta oficial ni una encuesta de intención de voto.
        </p>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950 font-medium mt-6 max-w-3xl">
          Pulso RD no publica aquí preferencia electoral ni ranking de campaña. Cualquier módulo de intención de voto
          requiere revisión legal previa. Ver{" "}
          <Link href="/metodologia" className="font-black underline">
            metodología
          </Link>
          .
        </div>

        <section className="mt-10">
          <h2 className="font-black text-xl">Destacados</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {featured.map((candidate) => (
              <Link
                key={candidate.slug}
                href={`/elecciones/2028/${candidate.slug}`}
                className="card p-6 hover:border-blue-300 transition-colors"
              >
                <div className="text-xs font-black tracking-[0.12em] text-blue-600">{candidate.party}</div>
                <h3 className="font-black text-2xl tracking-[-0.04em] mt-3">{candidate.name}</h3>
                <p className="muted text-sm mt-2">{candidate.role}</p>
                <div className="mt-4 inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold">
                  {candidate.status}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-black text-xl">Otros nombres en conversación</h2>
          <div className="grid md:grid-cols-2 gap-3 mt-4">
            {rest.map((candidate) => (
              <Link
                key={candidate.slug}
                href={`/elecciones/2028/${candidate.slug}`}
                className="card p-5 hover:border-blue-300 transition-colors flex items-start justify-between gap-4"
              >
                <div>
                  <div className="font-black text-lg">{candidate.name}</div>
                  <div className="muted text-sm mt-1">
                    {candidate.party} · {candidate.role}
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold">
                  {candidate.status}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
