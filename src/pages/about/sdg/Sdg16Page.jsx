import React from "react";
import { motion } from "framer-motion";

export default function Sdg16Page() {
  const t = {
    title: "SDG 16 — Peace, Justice and Strong Institutions",
    fig: "Peace & Integrity Forum, Legal Literacy Center, and Youth for Peace programs.",
    p1: `OXU treats justice, integrity, and a culture of peace as core values. The university hosts an annual “Peace and Integrity Forum” focused on anti-corruption education and institutional integrity.`,
    p2: `Curricula include a course on “Ethics and Social Responsibility,” strengthening students’ sense of justice and legal awareness. The “Legal Literacy Center” provides legal consultations to students and staff.`,
    p3: `University governance follows transparency principles — key information is published for the public. An “Anti-Corruption Policy” enables an anonymous whistleblowing mechanism.`,
    p4: `Together with international partners, OXU runs the “Youth for Peace” program with training on peacemaking, tolerance, and mediation. Through the “Debate Club,” students promote democracy and civic values.`,
    quote:
      "By involving student representatives in decision-making, OXU cultivates trust and accountability — a pathway to stronger institutions and a fairer society.",
    facts: {
      aTop: "Forum",
      aMain: "Peace & Integrity",
      aSub: "Dialogues on integrity and peace",
      bTop: "Center",
      bMain: "Legal Literacy",
      bSub: "Consultations and awareness",
      cTop: "Program",
      cMain: "Youth for Peace",
      cSub: "Tolerance and mediation training",
    },
    extrasTitle: "Additional initiatives",
    extras: [
      "Anonymous reporting system under the Anti-Corruption Policy.",
      "Transparent decision-making with student representation.",
      "Ethics and legal literacy courses to boost civic engagement.",
      "Debate Club — advancing democracy and a culture of justice.",
    ],
    tagsLabel: "Tags:",
    tags: ["SDG16", "Justice", "Peace", "Integrity"],
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
          id="sdg16-title"
        >
          {t.title}
        </motion.h1>
      </header>

      {/* Cover image (responsive up to 600px) */}
      <section className="relative" aria-labelledby="sdg16-title">
        <div className="mx-auto max-w-max px-4">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <img
              src="/sustainable/16.png"
              alt={t.title}
              className="block w-full max-w-[600px] h-auto"
              width={600}
              height={600}
              loading="eager"
              decoding="async"
            />
            <figcaption className="px-4 py-3 text-center text-xs text-slate-500">
              {t.fig}
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

          <h3 className="mt-8">{t.extrasTitle}</h3>
          <ul>
            {t.extras.map((item) => (
              <li key={item}>{item}</li>
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
