"use client";

import { useEffect, useState } from "react";
import type { PollResult, PulseQuestion } from "@/lib/types";

type Props = {
  initialQuestion: PulseQuestion | null;
};

export function PollCard({ initialQuestion }: Props) {
  const [question, setQuestion] = useState<PulseQuestion | null>(initialQuestion);
  const [audience, setAudience] = useState<"DR" | "US">("DR");
  const [region, setRegion] = useState("");
  const [selected, setSelected] = useState("");
  const [results, setResults] = useState<PollResult[]>([]);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (question) loadResults(question.id);
  }, [question]);

  async function loadResults(questionId: string) {
    const res = await fetch(`/api/polls/${questionId}/results`, { cache: "no-store" });
    if (res.ok) {
      const json = await res.json();
      setResults(json.results ?? []);
    }
  }

  async function submitVote() {
    if (!question || !selected) return;
    setSubmitting(true);
    setMessage("");

    const res = await fetch(`/api/polls/${question.id}/vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        option: selected,
        audience,
        region: region.trim() || null,
      }),
    });

    const json = await res.json().catch(() => ({}));
    setSubmitting(false);

    if (!res.ok) {
      setMessage(json.error ?? "No pudimos registrar tu respuesta.");
      return;
    }

    setMessage("Respuesta registrada.");
    await loadResults(question.id);
  }

  if (!question) {
    return (
      <div className="card p-6">
        <div className="text-sm font-bold">PREGUNTA DEL DÍA</div>
        <p className="muted mt-3">No hay una pregunta publicada todavía.</p>
      </div>
    );
  }

  return (
    <div className="card p-5 md:p-7" id="participa">
      <div className="flex items-center justify-between gap-4 mb-5">
        <div>
          <div className="text-xs font-black tracking-[0.15em] text-blue-600">PREGUNTA DEL DÍA</div>
          <div className="text-xs muted mt-1">{question.category}</div>
        </div>
        <div className="flex rounded-full bg-neutral-100 p-1">
          {(["DR", "US"] as const).map((value) => (
            <button
              key={value}
              onClick={() => setAudience(value)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                audience === value ? "bg-white shadow-sm" : "text-neutral-500"
              }`}
            >
              {value === "DR" ? "🇩🇴 RD" : "🇺🇸 Diáspora"}
            </button>
          ))}
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-black tracking-[-0.04em] max-w-2xl">
        {question.question}
      </h2>

      <div className="grid gap-2 mt-6">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => setSelected(option)}
            className={`text-left rounded-2xl border p-4 font-bold transition ${
              selected === option
                ? "border-blue-600 bg-blue-50"
                : "border-neutral-200 bg-white hover:border-neutral-400"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-[1fr_auto] gap-3 mt-4">
        <input
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          placeholder={audience === "DR" ? "Provincia (opcional)" : "Estado de EE.UU. (opcional)"}
          className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none focus:border-blue-600"
        />
        <button
          onClick={submitVote}
          disabled={!selected || submitting}
          className="rounded-2xl bg-neutral-950 text-white px-6 py-3 font-black disabled:opacity-40"
        >
          {submitting ? "Enviando…" : "Enviar respuesta"}
        </button>
      </div>

      {message && <p className="mt-3 text-sm font-semibold">{message}</p>}

      {results.length > 0 && (
        <div className="mt-7 border-t border-neutral-100 pt-6">
          <div className="text-xs font-black tracking-[0.12em] muted mb-4">RESULTADOS AGREGADOS</div>
          <div className="grid gap-4">
            {results.map((result) => (
              <div key={result.option}>
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span>{result.option}</span>
                  <span>{result.percentage}%</span>
                </div>
                <div className="progress">
                  <span style={{ width: `${result.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
