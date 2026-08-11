import { demoDiaspora, demoRegions, demoTopics } from "@/lib/demo";
import type { PulseQuestion } from "@/lib/types";
import { PollCard } from "./PollCard";

export function Dashboard({ question }: { question: PulseQuestion | null }) {
  return (
    <main>
      <section className="shell py-10 md:py-16" id="pulso">
        <div className="grid lg:grid-cols-[1.08fr_.92fr] gap-5 items-stretch">
          <div className="card p-6 md:p-9 min-h-[390px] flex flex-col justify-between">
            <div>
              <div className="text-xs tracking-[0.16em] font-black text-blue-600">PULSO NACIONAL</div>
              <h1 className="text-4xl md:text-6xl font-black tracking-[-0.065em] mt-4 max-w-3xl">
                El pulso de los dominicanos, dentro y fuera del país.
              </h1>
              <p className="muted text-base md:text-lg mt-5 max-w-2xl">
                Opinión pública, prioridades ciudadanas y tendencias agregadas con metodología visible.
              </p>
            </div>
            <div className="flex items-end justify-between gap-5 mt-10">
              <div>
                <div className="metric">63.8</div>
                <div className="muted font-bold mt-2">Pulso Score · Demo</div>
              </div>
              <div className="rounded-full bg-emerald-50 text-emerald-700 font-black px-4 py-2 text-sm">
                ↑ 2.7
              </div>
            </div>
          </div>

          <PollCard initialQuestion={question} />
        </div>
      </section>

      <section className="shell py-6 md:py-12" id="temas">
        <div className="flex items-end justify-between gap-4 mb-5">
          <div>
            <div className="text-xs font-black tracking-[0.15em] text-blue-600">ISSUE TRACKER</div>
            <h2 className="section-title mt-2">Temas que están moviendo la conversación.</h2>
          </div>
          <span className="hidden md:block text-sm muted">Datos demo hasta conectar Supabase</span>
        </div>

        <div className="grid-auto">
          {demoTopics.map((topic) => (
            <article key={topic.name} className="card p-5">
              <div className="flex justify-between gap-3">
                <span className="font-black">{topic.name}</span>
                <span className={`text-sm font-black ${topic.delta >= 0 ? "text-emerald-700" : "text-red-600"}`}>
                  {topic.delta >= 0 ? "↑" : "↓"} {Math.abs(topic.delta)}
                </span>
              </div>
              <div className="text-4xl font-black tracking-[-0.05em] mt-7">{topic.score}</div>
              <div className="progress mt-4"><span style={{ width: `${topic.score}%` }} /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell py-10 md:py-14" id="regiones">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="card p-6 md:p-8">
            <div className="text-xs font-black tracking-[0.15em] text-blue-600">REPÚBLICA DOMINICANA</div>
            <h2 className="section-title mt-2">Pulso por región</h2>
            <div className="grid gap-4 mt-7">
              {demoRegions.map((region) => (
                <div key={region.name}>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span>{region.name}</span><span>{region.score}</span>
                  </div>
                  <div className="progress"><span style={{ width: `${region.score}%` }} /></div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6 md:p-8" id="diaspora">
            <div className="text-xs font-black tracking-[0.15em] text-blue-600">DIÁSPORA</div>
            <h2 className="section-title mt-2">Dominicanos en EE.UU.</h2>
            <div className="grid gap-4 mt-7">
              {demoDiaspora.map((region) => (
                <div key={region.name}>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span>{region.name}</span><span>{region.score}</span>
                  </div>
                  <div className="progress"><span style={{ width: `${region.score}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-8 md:py-16">
        <div className="rounded-[26px] bg-neutral-950 text-white p-7 md:p-10">
          <div className="text-xs tracking-[0.15em] font-black text-blue-400">DATA CONFIDENCE</div>
          <h2 className="section-title mt-3 max-w-3xl">Cada número debe poder explicar de dónde salió.</h2>
          <p className="text-neutral-400 mt-4 max-w-3xl leading-7">
            Publica tamaño de muestra, fechas de campo, método, segmentación, ponderación y limitaciones.
            No presentes respuestas web auto-seleccionadas como una encuesta representativa de toda la población.
          </p>
        </div>
      </section>
    </main>
  );
}
