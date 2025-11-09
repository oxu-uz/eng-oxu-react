import React from "react";
import { motion } from "framer-motion";

export default function Sdg17Page() {
  const t = {
    title: "SDG 17 — Partnerships for the Goals",
    fig: "Global Partnership: cooperation with government, business, NGOs, UN agencies, and research centers.",
    p1: `Responding to the UN’s Global Partnership for Sustainable Development, OXU treats international, regional, and local collaboration as a strategic priority.`,
    p2_title: "International partnership networks",
    p2: `As of 2025, OXU has signed 61+ MoUs with foreign universities. Active tracks include joint research, dual-degree programs, and academic exchanges (e.g., Kazan Federal University, University of Malaya, Istanbul Aydin, WUST).`,
    p3_title: "Cooperation with UN agencies",
    p3: `MoUs with UNDP, UNESCO, UNICEF, and UNEP. Inclusive Education programs with UNESCO are in planning.`,
    p4_title: "Public & private sectors",
    p4: `Joint grants with relevant ministries (Innovation, Higher Education, Ecology). Startup and internship programs with UzAuto Motors, Artel, and Aloqabank.`,
    p5_title: "Regional collaboration",
    p5: `Within the Community Development Program: projects on water, energy, and infrastructure; Service Learning connects coursework with social projects.`,
    p6_title: "Research & open data",
    p6: `The Research for SDGs platform connects partners and projects. Open Data Collaboration ensures transparent publication of results.`,
    p7_title: "Education & innovation",
    p7: `Erasmus+, DAAD, British Council, KOICA: staff/student exchanges. In 2024, 15 students completed overseas internships; ~10 new online courses were developed.`,
    p8_title: "NGO partnerships",
    p8: `Projects with Transparency International, Youth Union, EcoLife, and Save the Aral. In 2024, 500+ students volunteered in community initiatives.`,
    p9_title: "Digital cooperation",
    p9: `Participation in Scopus and Web of Science ecosystems. The OXU Digital Partnership Platform enables real-time project monitoring and transparent governance.`,
    p10_title: "Monitoring & outcomes",
    p10: `Quarterly SDG Partnership Monitoring, reporting to THE Impact and QS Sustainability. Policy pillars: Transparency • Inclusivity • Mutual Benefit.`,
    quote:
      "Partnerships are measured by outcomes, not signatures: OXU builds an open, effective ecosystem to advance the SDGs together.",
    facts: {
      aTop: "MoUs",
      aMain: "61+",
      aSub: "With international HEIs",
      bTop: "Internships (2024)",
      bMain: "15",
      bSub: "Students abroad",
      cTop: "Volunteers",
      cMain: "500+",
      cSub: "In social projects",
    },
    tagsLabel: "Tags:",
    tags: ["SDG17", "Partnership", "OpenData", "Erasmus"],
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
          id="sdg17-title"
        >
          {t.title}
        </motion.h1>
      </header>

      {/* Cover image (responsive up to 600px) */}
      <section aria-labelledby="sdg17-title">
        <div className="mx-auto max-w-max px-4">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <img
              src="/sustainable/17.png"
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

          <h3>{t.p2_title}</h3>
          <p>{t.p2}</p>

          <h3>{t.p3_title}</h3>
          <p>{t.p3}</p>

          <h3>{t.p4_title}</h3>
          <p>{t.p4}</p>

          <h3>{t.p5_title}</h3>
          <p>{t.p5}</p>

          <h3>{t.p6_title}</h3>
          <p>{t.p6}</p>

          <h3>{t.p7_title}</h3>
          <p>{t.p7}</p>

          <h3>{t.p8_title}</h3>
          <p>{t.p8}</p>

          <h3>{t.p9_title}</h3>
          <p>{t.p9}</p>

          <h3>{t.p10_title}</h3>
          <p>{t.p10}</p>

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
