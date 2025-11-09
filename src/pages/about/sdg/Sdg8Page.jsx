import React from "react";
import { motion } from "framer-motion";

export default function Sdg8Page() {
  // ------- Texts (EN) -------
  const t = {
    title: "SDG 8 — Decent Work and Economic Growth",
    figcaption:
      "Career Hub, Startup Week, Youth Employment Accelerator, and job fairs.",
    p1: `AMU focuses on equipping young people with modern job skills and preparing them for the labor market. The Career Hub partners with 120+ companies to run internships and employment programs.`,
    p2: `In 2024, over 90% of graduates found employment within six months. During Startup Week, students pitch their business ideas and connect with investors.`,
    p3: `The Youth Employment Accelerator includes training in labor law, workplace safety, and financial literacy. More than 40 employers participate in AMU job fairs.`,
    p4: `Commercialization of research creates new jobs. The university upholds fair pay policies and a healthy work environment, aligning economic growth with the development of human capital.`,
    quote:
      "AMU helps shape a resilient labor market by tying economic growth to human-capital development.",
    facts: {
      aTop: "Partners",
      aMain: "120+",
      aSub: "Career Hub network",
      bTop: "Employment",
      bMain: "90%+",
      bSub: "Within 6 months (2024)",
      cTop: "Job fairs",
      cMain: "40+",
      cSub: "Employers involved",
    },
    more: "Additional Initiatives",
    bullets: [
      "Startup Week — pitching sessions with investors.",
      "Youth Employment Accelerator — law, safety, financial literacy.",
      "Commercialization of research — a source of new jobs.",
      "Fair pay policy — supportive work environment.",
    ],
    sourcesTitle: "Sources / Links",
    sources: [
      { href: "https://t.me/Oxu_uz/3203", label: "Oxu_uz post #3203" },
      { href: "https://t.me/Oxu_uz/3193", label: "Oxu_uz post #3193" },
    ],
    tagsLabel: "Tags:",
    tags: ["SDG8", "CareerHub", "StartupWeek", "Employment"],
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

      {/* Cover image */}
      <section className="relative">
        <div className="mx-auto max-w-max px-4">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <img
              src="/sustainable/8.png"
              alt="SDG 8 — AMU employment and growth initiatives"
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

          {/* Sources / Links */}
          <div className="not-prose mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-sm font-medium text-slate-700 mb-2">
              {t.sourcesTitle}
            </div>
            <ul className="list-disc pl-5 text-sm text-slate-600">
              {t.sources.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-800 underline hover:no-underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
