import React from "react";
import { motion } from "framer-motion";

export default function Sdg11Page() {
  // ------- Texts (EN) -------
  const t = {
    title: "SDG 11 — Sustainable Cities and Communities",
    figcaption:
      "Smart City Lab, Green Mobility Project, and green architecture initiatives.",
    p1: `OXU advances research on urban sustainability, green infrastructure, and social inclusion. In the Smart City Lab, teams develop solutions for intelligent transport, waste management, and clean energy adoption.`,
    p2: `In partnership with local authorities, the Green Mobility Project promotes e-bikes and e-scooter challenges for students and staff. The campus is being redesigned using green architecture principles to deliver energy-efficient buildings.`,
    p3: `The university also conducts heritage-preservation research and runs joint projects with the historic cities of Bukhara and Samarkand.`,
    quote:
      "OXU’s strategy is to champion a ‘human-centered city’ — aligning urbanization with sustainable development.",
    facts: {
      aTop: "Laboratory",
      aMain: "Smart City Lab",
      aSub: "Intelligent transport & green infrastructure",
      bTop: "Project",
      bMain: "Green Mobility",
      bSub: "Campus e-transport challenges",
      cTop: "Partnerships",
      cMain: "Bukhara & Samarkand",
      cSub: "Cultural heritage initiatives",
    },
    more: "Additional Initiatives",
    bullets: [
      "Smart City Lab — research on smart transport and energy monitoring.",
      "Green Mobility — e-bike/e-scooter use across campus.",
      "Green architecture — energy-efficient buildings and eco-materials.",
      "Heritage preservation — collaborations with historic cities.",
    ],
    tagsLabel: "Tags:",
    tags: ["SDG11", "SmartCity", "GreenMobility", "UrbanSustainability"],
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

      {/* Cover (600×600) */}
      <section className="relative">
        <div className="mx-auto max-w-max px-4">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <img
              src="/sustainable/11.png"
              alt="SDG 11 — smart city and green mobility"
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

      {/* Body */}
      <main className="mx-auto max-w-3xl px-4 py-10">
        <article className="prose prose-slate md:prose-lg max-w-none">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
          <blockquote>{t.quote}</blockquote>

          {/* Facts */}
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
