import React from "react";
import { motion } from "framer-motion";

export default function Sdg9Page() {
  // ------- Texts (EN) -------
  const t = {
    title: "SDG 9 — Industry, Innovation and Infrastructure",
    figcaption:
      "OXU–Latif Cardiomed clinic, mini pharmaceutical plant, and 3D & AI centers.",
    p1: `OXU operates as an innovation hub, aiming to bridge scientific research with real production. The university has created joint laboratories with industry — for example, together with the “OXU–Latif Cardiomed” clinic, a clinical base and a simulation center have been established.`,
    p2: `OXU also runs a mini pharmaceutical plant. During hands-on classes, students work on the development of new pharmaceutical products and gain real production experience.`,
    p3: `On campus, there are advanced training centers for 3D printing, robotics, and artificial intelligence. Through the “Innovation Challenge,” student-built solutions are piloted and transferred to industrial partners.`,
    p4: `The “Smart Infrastructure” program digitizes campus operations, saving both energy and time. The university has also set up processes for patenting and commercializing scientific and technical results.`,
    quote:
      "Within international partnerships, OXU runs joint grants with innovation institutes in South Korea and Germany — a new model of industrial integration for Uzbekistan.",
    facts: {
      aTop: "Joint labs",
      aMain: "5+",
      aSub: "Built with industry partners",
      bTop: "Pharma",
      bMain: "Mini plant",
      bSub: "Hands-on production",
      cTop: "Technologies",
      cMain: "3D, AI, Robotics",
      cSub: "Advanced learning centers",
    },
    more: "Additional Initiatives",
    bullets: [
      "Innovation Challenge — moving student solutions into production.",
      "Smart Infrastructure — digitized campus management.",
      "Patents & commercialization — turning research into impact.",
      "International grants — collaboration with Korea and Germany.",
    ],
    tagsLabel: "Tags:",
    tags: ["SDG9", "Innovation", "Infrastructure", "Industry"],
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
              src="/sustainable/9.png"
              alt="SDG 9 — industry, innovation and infrastructure"
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
