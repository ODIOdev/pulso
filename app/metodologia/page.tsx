import Link from "next/link";

export default function MethodologyPage() {
  return (
    <main className="shell py-10 md:py-16">
      <Link href="/" className="text-sm font-bold">← Volver</Link>
      <article className="card p-6 md:p-10 mt-6 max-w-4xl">
        <div className="text-xs font-black tracking-[0.15em] text-blue-600">METODOLOGÍA</div>
        <h1 className="section-title mt-3">Cómo interpretar Pulso RD</h1>
        <div className="mt-7 grid gap-7 leading-7 text-neutral-700">
          <section>
            <h2 className="font-black text-neutral-950 text-lg">Encuestas web</h2>
            <p className="mt-2">
              Las respuestas voluntarias del sitio son datos de participación y no deben describirse automáticamente
              como una muestra representativa de la población dominicana.
            </p>
          </section>
          <section>
            <h2 className="font-black text-neutral-950 text-lg">Segmentación</h2>
            <p className="mt-2">
              Los resultados de República Dominicana y diáspora se mantienen como poblaciones analíticas separadas.
              Se publican únicamente agregados con tamaños de muestra suficientes.
            </p>
          </section>
          <section>
            <h2 className="font-black text-neutral-950 text-lg">Integridad</h2>
            <p className="mt-2">
              El backend aplica controles contra votos repetidos. Antes de producción se recomienda añadir CAPTCHA,
              rate limiting distribuido, auditoría y reglas de detección de tráfico coordinado.
            </p>
          </section>
          <section>
            <h2 className="font-black text-neutral-950 text-lg">Elecciones</h2>
            <p className="mt-2">
              Cualquier módulo de intención de voto, publicación de encuestas electorales, propaganda o datos de
              campaña debe activarse únicamente después de revisión legal y regulatoria aplicable.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
