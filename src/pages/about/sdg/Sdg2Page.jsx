import React from "react";
import { motion } from "framer-motion";

export default function Sdg2Page() {
  // ------- Texts (EN) -------
  const t = {
    title: "SDG 2 — Zero Hunger",
    figcaption:
      "Healthy Campus Canteen, Agro Research Hub, and Zero Food Waste — advancing food security.",
    p1: `AMU treats food security and healthy nutrition as key strategic priorities. On campus, the “Healthy Campus Canteen” project provides balanced meals for all students and staff, using eco-friendly, locally sourced ingredients.`,
    p2: `To accelerate agricultural innovation, the “Agro Research Hub” conducts research on water-saving irrigation, seed breeding, and yield monitoring.`,
    quote: `The annual “Food Security Forum” showcases applied research and solutions for food security.`,
    p3: `The “Zero Food Waste” program reduces food waste: surplus food is redirected to social canteens.`,
    p4: `Curricula include modules on healthy eating culture. AMU combines innovation, environmental awareness, and applied research to strengthen community resilience.`,
    facts: {
      aTop: "Campus",
      aMain: "Healthy Canteen",
      aSub: "Local & balanced menu",
      bTop: "Science & Innovation",
      bMain: "Agro Hub",
      bSub: "Irrigation, breeding, monitoring",
      cTop: "Sustainability",
      cMain: "Zero Food Waste",
      cSub: "Surplus to social canteens",
    },
    more: "Additional Initiatives",
    bullets: [
      "“Food Security Forum” — bridging academia and market practice.",
      "Healthy nutrition modules — forming habits and awareness.",
      "Partnerships with farmers — strengthening local supply chains.",
    ],
    tagsLabel: "Tags:",
    tag2: "FoodSecurity",
    tag3: "AgroResearch",
    tag4: "ZeroWaste",
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

      {/* Cover image (ALWAYS visible, 600×600) */}
      <section className="relative">
        <div className="mx-auto max-w-max px-4">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <img
              src="/sustainable/2.png"
              alt="SDG 2 — AMU initiatives for zero hunger"
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

      {/* Article body */}
      <main className="mx-auto max-w-3xl px-4 py-10">
        <article className="prose prose-slate md:prose-lg max-w-none">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <blockquote>{t.quote}</blockquote>
          <p>{t.p3}</p>
          <p>{t.p4}</p>

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

          <h3>{t.more}</h3>
          <ul>
            {t.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </article>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="text-sm text-slate-500">{t.tagsLabel}</span>
          <span className="rounded-full border border-slate-200 px-3 py-1 text-sm">
            SDG2
          </span>
          <span className="rounded-full border border-slate-200 px-3 py-1 text-sm">
            {t.tag2}
          </span>
          <span className="rounded-full border border-slate-200 px-3 py-1 text-sm">
            {t.tag3}
          </span>
          <span className="rounded-full border border-slate-200 px-3 py-1 text-sm">
            {t.tag4}
          </span>
        </div>
      </main>
    </div>
  );
}
