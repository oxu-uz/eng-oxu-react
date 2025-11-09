import React from "react";
import { motion } from "framer-motion";

export default function Sdg15Page() {
  const t = {
    title: "SDG 15 — Life on Land",
    fig: "Green spaces, biodiversity conservation, and anti-land-degradation projects.",
    p1: `OXU advances afforestation, biodiversity conservation, and soil-degradation mitigation. Within the “Green Space” plan, the university has planted 2,000+ trees over the last two years and conducts research aimed at combating desertification.`,
    p2: `Through the “Biodiversity Conservation” initiative, labs develop propagation methods for rare native plant species. As part of the “Green University” agenda, students carry out ecological monitoring in national parks.`,
    p3: `Every year on Earth Day, OXU runs competitions and campaigns focused on environmental protection. In Bukhara region, community-led projects are restoring erosion-affected land.`,
    quote:
      "Faculty research has been indexed in FAO databases — a model that unites science, education, and community participation.",
    facts: {
      aTop: "Saplings",
      aMain: "2,000+",
      aSub: "Planted in the last 2 years",
      bTop: "Laboratory",
      bMain: "Propagation",
      bSub: "Work on rare plant species",
      cTop: "Projects",
      cMain: "Bukhara",
      cSub: "Restoring eroded land",
    },
    extrasTitle: "Additional initiatives",
    extras: [
      "Research to combat desertification.",
      "Student ecological monitoring in national parks.",
      "Earth Day — competitions and volunteer actions.",
      "Publications indexed by FAO — international recognition.",
    ],
    tagsLabel: "Tags:",
    tags: ["SDG15", "Biodiversity", "Afforestation", "SoilRestoration"],
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
          id="sdg15-title"
        >
          {t.title}
        </motion.h1>
      </header>

      {/* Cover image (responsive up to 600px) */}
      <section className="relative" aria-labelledby="sdg15-title">
        <div className="mx-auto max-w-max px-4">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <img
              src="/sustainable/15.png"
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
