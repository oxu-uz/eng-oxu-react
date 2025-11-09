import React from "react";
import { motion } from "framer-motion";

export default function Sdg12Page() {
  const t = {
    title: "SDG 12 — Responsible Consumption and Production",
    figcaption:
      "Zero Waste Campus, Green Procurement Policy, and Sustainable Lifestyle Week.",
    p1: `OXU promotes environmental responsibility across education, production, and daily operations. Through the “Zero Waste Campus” program, the university has implemented sorting, recycling, and reuse systems.`,
    p2: `Plastic consumption has been reduced by 60% since 2022. Separate containers for waste sorting are installed across campus. Under the “Green Procurement Policy,” the university purchases only eco-certified products.`,
    p3: `Students, via the EcoVolunteers Club, run campaigns to reduce waste and keep the environment clean. The “Sustainable Production and Consumption” course is included in the curriculum.`,
    p4: `Production-related faculties are adopting technologies that lower energy, water, and raw-material use. In the cafeteria, surplus food is redirected to community kitchens through the “Food Redistribution Program.”`,
    p5: `For staff, a Green Office Challenge is in place; “Sustainable Lifestyle Week” is held annually to promote environmental thinking and a culture of mindful consumption.`,
    quote:
      "OXU aligns consumption culture with sustainability values, stepping toward a responsible future.",
    facts: {
      aTop: "Plastic Use",
      aMain: "−60%",
      aSub: "Since 2022",
      bTop: "Food Program",
      bMain: "Redistribution",
      bSub: "Surplus sent to community kitchens",
      cTop: "Green Office",
      cMain: "Challenge",
      cSub: "Sustainable staff habits",
    },
    more: "Additional initiatives",
    bullets: [
      "Zero Waste Campus — waste sorting and recycling.",
      "Green Procurement Policy — eco-certified purchasing.",
      "EcoVolunteers Club — student-led eco actions.",
      "Food Redistribution Program — cutting food waste.",
      "Sustainable Lifestyle Week — building eco culture.",
    ],
    tagsLabel: "Tags:",
    tags: ["SDG12", "ZeroWaste", "GreenOffice", "Sustainability"],
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
          id="sdg12-title"
        >
          {t.title}
        </motion.h1>
      </header>

      {/* Cover image (responsive up to 600px) */}
      <section className="relative" aria-labelledby="sdg12-title">
        <div className="mx-auto max-w-max px-4">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <img
              src="/sustainable/12.png"
              alt="SDG 12 — responsible consumption and production"
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

      {/* Content */}
      <main className="mx-auto max-w-3xl px-4 py-10">
        <article className="prose prose-slate md:prose-lg max-w-none">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
          <p>{t.p4}</p>
          <p>{t.p5}</p>

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
