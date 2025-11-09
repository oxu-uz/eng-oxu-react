import React from "react";
import { motion } from "framer-motion";

export default function Sdg7Page() {
  // ------- Texts (EN) -------
  const t = {
    title: "SDG 7 — Affordable and Clean Energy",
    figcaption:
      "Solar panels, LED lighting, a Renewable Energy Lab, and energy auditing.",
    p1: `AMU is among the few universities that have adopted a sustainable energy policy. Campuses are equipped with solar panels that save around 180 MWh of energy annually.`,
    p2: `Under the “Green Space” program, LED fixtures were installed, reducing consumption by 25%. In the “Renewable Energy Lab,” students explore wind turbines and biogas technologies.`,
    p3: `AMU implements real-time energy-consumption monitoring and conducts energy audits across all faculties.`,
    quote:
      "By 2030, the university aims to transition fully to renewable energy sources.",
    facts: {
      aTop: "Solar panels",
      aMain: "180 MWh/yr",
      aSub: "Annual energy savings",
      bTop: "LED lighting",
      bMain: "−25%",
      bSub: "Energy consumption reduction",
      cTop: "Target",
      cMain: "2030",
      cSub: "100% renewable energy",
    },
    more: "Additional Initiatives",
    bullets: [
      "Renewable Energy Lab — wind and biogas technologies.",
      "Real-time energy monitoring.",
      "Pilot projects with local communities.",
    ],
    tagsLabel: "Tags:",
    tags: ["SDG7", "Renewables", "EnergyAudit", "LED"],
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

      {/* Cover image */}
      <section className="relative">
        <div className="mx-auto max-w-max px-4">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <img
              src="/sustainable/7.png"
              alt="SDG 7 — AMU energy initiatives"
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
