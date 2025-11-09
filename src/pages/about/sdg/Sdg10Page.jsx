import React from "react";
import { motion } from "framer-motion";

export default function Sdg10Page() {
  // ------- Texts (EN) -------
  const t = {
    title: "SDG 10 — Reduced Inequalities",
    figcaption:
      "Inclusive Education Program, International Student Office, and Equal Pay Policy.",
    p1: `OXU treats social justice and inclusion as a core principle. Through the Inclusive Education Program, students with disabilities are provided with assistive technologies such as audiobooks, captioned video lectures, and other adaptive tools.`,
    p2: `In 2025, 25 students with disabilities were admitted on partial grants. The university increased the share of international students to 10%, shaping a truly multicultural learning environment.`,
    p3: `OXU established an International Student Office to support ethnic, cultural, and social diversity. Free Uzbek-language courses are available to help international students integrate.`,
    p4: `An Equal Pay Policy is in force — employees in the same role receive equal compensation regardless of gender. Plans for a Social Equity Research Lab will enable rigorous study of inequality and evidence-based interventions.`,
    quote:
      "Through the Equality Ambassadors Club, students champion inclusive social projects — moving toward a fairer system via equal opportunities in education.",
    facts: {
      aTop: "Grant intake (2025)",
      aMain: "25",
      aSub: "Students with disabilities",
      bTop: "International students",
      bMain: "10%",
      bSub: "Multicultural environment",
      cTop: "Compensation",
      cMain: "Equal Pay",
      cSub: "Equal work — equal pay",
    },
    more: "Additional Initiatives",
    bullets: [
      "Inclusive Education — adaptive technologies and accessible content.",
      "International Student Office — support for multicultural inclusion.",
      "Free Uzbek courses — integration for international students.",
      "Social Equity Research Lab (planned) — data-driven equity research.",
    ],
    tagsLabel: "Tags:",
    tags: ["SDG10", "Inclusion", "EqualPay", "Diversity"],
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

      {/* Cover image (600×600) */}
      <section className="relative">
        <div className="mx-auto max-w-max px-4">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <img
              src="/sustainable/10.png"
              alt="SDG 10 — inclusion and equal opportunities"
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
