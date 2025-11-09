import React from "react";
import { motion } from "framer-motion";

export default function Sdg5Page() {
  // ------- Texts (EN) -------
  const t = {
    title: "SDG 5 — Gender Equality",
    figcaption:
      "Women Leadership Program, Women in STEM, and a Family-Friendly Campus.",
    p1: `AMU actively advances gender equality across all levels. In 2024, the “Women Leadership Program” trained 60+ participants — students and staff alike.`,
    p2: `Women make up 45% of the university’s leadership. The “Women in STEM” initiative increased female participation in technical fields by 30%.`,
    p3: `A Gender Equity Office is being established to develop mechanisms that prevent discrimination and violence. The university also hosts the annual “Women in Science” forum.`,
    p4: `Curricula include modules on gender issues and human rights, along with mentorship programs for girls. A “Family-Friendly Campus” policy supports work–study–family balance.`,
    quote:
      "AMU creates an environment where every woman can realize her full potential.",
    facts: {
      aTop: "Leadership",
      aMain: "60+",
      aSub: "Women trained (2024)",
      bTop: "Management",
      bMain: "45%",
      bSub: "Women in leadership",
      cTop: "STEM",
      cMain: "+30%",
      cSub: "Growth in female participation",
    },
    more: "Additional Initiatives",
    bullets: [
      "Gender Equity Office — equal-opportunity safeguards and protection.",
      "Women in Science Forum — a network across science, business, and policy.",
      "Mentorship for female students — career guidance and support.",
      "Family-Friendly Campus — flexibility and supportive infrastructure.",
    ],
    tagsLabel: "Tags:",
    tags: ["SDG5", "GenderEquality", "WomenInSTEM", "FamilyFriendly"],
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
              src="/sustainable/5.png"
              alt="SDG 5 — AMU gender equality initiatives"
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
