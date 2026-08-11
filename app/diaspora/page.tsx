import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { demoDiaspora, demoDiasporaPages } from "@/lib/demo";

const featured = Object.entries(demoDiasporaPages);

export default function DiasporaPage() {
  return (
    <SiteShell>
      <main className="shell py-10 md:py-16">
        <div className="text-xs font-black tracking-[0.15em] text-blue-600">DIÁSPORA</div>
        <h1 className="section-title mt-3">Dominicanos en EE.UU.</h1>
        <p className="muted mt-4 max-w-2xl">
          Segmento analítico separado de República Dominicana. Datos demo por estado.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {featured.map(([slug, place]) => (
            <Link key={slug} href={`/diaspora/${slug}`} className="card p-6 hover:border-blue-300 transition-colors">
              <div className="font-black text-xl">{place.title}</div>
              <div className="text-4xl font-black tracking-[-0.05em] mt-5">{place.score}</div>
              <p className="muted text-sm mt-3">{place.summary}</p>
            </Link>
          ))}
        </div>

        <div className="card p-6 md:p-8 mt-6">
          <h2 className="font-black text-lg">Todos los estados demo</h2>
          <div className="grid gap-4 mt-7">
            {demoDiaspora.map((region) => (
              <div key={region.name}>
                <div className="flex justify-between text-sm font-bold mb-2">
                  {region.slug in demoDiasporaPages ? (
                    <Link href={`/diaspora/${region.slug}`}>{region.name}</Link>
                  ) : (
                    <span>{region.name}</span>
                  )}
                  <span>{region.score}</span>
                </div>
                <div className="progress">
                  <span style={{ width: `${region.score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
