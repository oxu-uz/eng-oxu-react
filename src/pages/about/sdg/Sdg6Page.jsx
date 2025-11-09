import React from "react";
import { motion } from "framer-motion";

export default function Sdg6Page() {
  // ------- Texts (EN) -------
  const t = {
    title: "SDG 6 — Clean Water and Sanitation",
    figcaption: "AquaSave, drinking-water filters, and Water Awareness Week.",
    p1: `In 2023, AMU launched the “AquaSave” project, introducing a campus-wide water-saving system — up to 30% of non-potable water is reused.`,
    p2: `All campus buildings are equipped with drinking-water filtration, and laboratory testing is performed monthly. “Water Awareness Week” promotes a culture of responsible water use.`,
    p3: `Within the “Obi Hayot” initiative, university volunteers restored water-supply systems in four rural settlements. AMU improves sanitation and implements international hygiene standards while fostering environmental thinking among students.`,
    quote:
      "“Obi Hayot”: restoring water-supply systems — a practical contribution to resilient communities.",
    facts: {
      aTop: "Savings",
      aMain: "30%",
      aSub: "Non-potable water reused",
      bTop: "Monitoring",
      bMain: "Monthly",
      bSub: "Laboratory quality tests",
      cTop: "Communities",
      cMain: "4 villages",
      cSub: "Water systems restored",
    },
    more: "Additional Initiatives",
    bullets: [
      "Water Awareness Week — building responsible consumption habits.",
      "Filtration & monitoring — continuous quality control.",
      "Gender-sensitive sanitation zones — safety and comfort.",
    ],
    tagsLabel: "Tags:",
    tags: ["SDG6", "Water", "Sanitation", "AquaSave"],
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Title */}
      <header className="mx-auto max-w-3xl px-4 pt-8 pb-4">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
        >
          {t.title}
        </motion.h1>
      </header>

      {/* Cover image (600×600, always visible) */}
      <section className="relative">
        <div className="mx-auto max-w-max px-4">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <img
              src="/sustainable/6.png"
              alt="SDG 6 — AMU water & sanitation initiatives"
              className="block w-[600px] h-[600px]"
              loading="eager"
              decoding="async"
            />
            <figcaption className="px-4 py-3 text-center text-xs text-slate-500">
              {t.figcaption}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Article */}
      <main className="mx-auto max-w-3xl px-4 py-10">
        <article className="prose prose-slate md:prose-lg max-w-none">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
          <blockquote>{t.quote}</blockquote>

          {/* Fact cards */}
          <div className="not-prose mt-8 grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 md:grid-cols-3">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="text-xs uppercase tracking-wide text-slate-500">
                {t.facts.aTop}
              </div>
              <div className="mt-1 text-2xl font-bold text-slate-900">
                {t.facts.aMain}
              </div>
              <p className="mt-1 text-sm text-slate-600">{t.facts.aSub}</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="text-xs uppercase tracking-wide text-slate-500">
                {t.facts.bTop}
              </div>
              <div className="mt-1 text-2xl font-bold text-slate-900">
                {t.facts.bMain}
              </div>
              <p className="mt-1 text-sm text-slate-600">{t.facts.bSub}</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="text-xs uppercase tracking-wide text-slate-500">
                {t.facts.cTop}
              </div>
              <div className="mt-1 text-2xl font-bold text-slate-900">
                {t.facts.cMain}
              </div>
              <p className="mt-1 text-sm text-slate-600">{t.facts.cSub}</p>
            </div>
          </div>

          <h3 className="mt-8">{t.more}</h3>
          <ul>
            {t.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </article>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="text-sm text-slate-500">{t.tagsLabel}</span>
          {t.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
}
