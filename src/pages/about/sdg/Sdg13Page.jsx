import React from "react";
import { motion } from "framer-motion";

export default function Sdg13Page() {
  const t = {
    title: "SDG 13 — Climate Action",
    figcaption:
      "Green University strategy, tree-planting campaigns, and climate education.",
    p1: `OXU pursues an active climate policy and has adopted a “Green University” strategy. Through energy-efficiency measures, carbon emissions were reduced by 18% in 2024.`,
    p2: `Each year, within the “OXU Green Space” initiative, tree-planting campaigns are held — over the last three years, more than 1,000 saplings have been planted. In parallel, faculty and students conduct research on Uzbekistan’s climate model.`,
    p3: `The university is a member of the UNEP Climate Education Alliance and participates in global scientific exchanges. The curriculum includes a “Climate Policy and Adaptation” course where students develop adaptation strategies.`,
    p4: `Through the Youth for Climate Action club, students lead awareness and training on eco-leadership and climate diplomacy. University governance integrates climate security into decision-making.`,
    quote:
      "By uniting science, policy, and practice, OXU is taking leadership in combating climate change.",
    facts: {
      aTop: "Emissions",
      aMain: "−18%",
      aSub: "CO₂ reduction (2024)",
      bTop: "Tree planting",
      bMain: "1,000+",
      bSub: "Over the last 3 years",
      cTop: "Education",
      cMain: "Alliance",
      cSub: "UNEP Climate Education",
    },
    more: "Additional initiatives",
    bullets: [
      "Green University — energy-efficient infrastructure.",
      "Green Space — regular campus greening.",
      "Climate Policy & Adaptation — mitigation and adaptation.",
      "Youth for Climate Action — diplomacy and leadership.",
    ],
    tagsLabel: "Tags:",
    tags: ["SDG13", "ClimateAction", "GreenCampus", "UNEP"],
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
          id="sdg13-title"
        >
          {t.title}
        </motion.h1>
      </header>

      {/* Cover image (responsive up to 600px) */}
      <section className="relative" aria-labelledby="sdg13-title">
        <div className="mx-auto max-w-max px-4">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <img
              src="/sustainable/13.png"
              alt="SDG 13 — OXU climate action"
              className="block w-full max-w-[600px] h-auto"
              width={600}
              height={600}
              loading="eager"
              decoding="async"
            />
            <figcaption className="px-4 py-3 text-center text-xs text-slate-500">
              {t.figcaption}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Body */}
      <main className="mx-auto max-w-3xl px-4 py-10">
        <article className="prose prose-slate md:prose-lg max-w-none">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
          <p>{t.p4}</p>

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
        <div
          className="mt-10 flex flex-wrap items-center gap-3"
          aria-label="tags"
        >
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
