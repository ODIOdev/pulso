import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { election2028Candidates, getCandidate } from "@/lib/candidates";

export function generateStaticParams() {
  return election2028Candidates.map((c) => ({ slug: c.slug }));
}

export default async function CandidatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const candidate = getCandidate(slug);
  if (!candidate) notFound();

  return (
    <SiteShell>
      <main className="shell py-10 md:py-16">
        <Link href="/elecciones/2028" className="text-sm font-bold">
          ← Elecciones 2028
        </Link>

        <article className="card p-6 md:p-10 mt-6 max-w-3xl">
          <div className="text-xs font-black tracking-[0.15em] text-blue-600">CANDIDATO POTENCIAL · 2028</div>
          <h1 className="section-title mt-3">{candidate.name}</h1>
          <p className="muted mt-3">
            {candidate.party} · {candidate.role}
          </p>
          <div className="mt-4 inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold">
            {candidate.status}
          </div>
          <p className="mt-7 leading-7 text-neutral-700">{candidate.summary}</p>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm muted mt-8">
            Perfil informativo. No implica respaldo, nominación oficial ni medición de intención de voto de Pulso RD.
          </div>
        </article>
      </main>
    </SiteShell>
  );
}
