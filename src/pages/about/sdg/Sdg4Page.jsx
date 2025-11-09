import React from "react";
import { motion } from "framer-motion";

export default function Sdg4Page() {
  // ------- Texts (EN) -------
  const t = {
    title: "SDG 4 — Quality Education",
    figcaption:
      "Digital Learning Hub, pedagogical innovation, and international collaboration.",
    p1: `AMU aims to be a center of digital and innovative education. The “Digital Learning Hub” platform hosts 15+ online courses. Faculty members earn international certificates through Cambridge Certified Teaching and TESOL programs.`,
    p2: `Modern teaching methods are implemented — flipped classroom, project-based learning, and problem-based learning. A free “Academic Reading and Writing Lab” trains students in academic writing and plagiarism prevention.`,
    p3: `The “Edu4All” program provides digital adaptation tools for students with disabilities. The university partners with Erasmus+, DAAD, and the British Council and runs student exchange programs.`,
    quote:
      "In 2025, over 50 students completed international internships — a step toward global competencies.",
    p4: `AMU regularly conducts student satisfaction surveys and updates curricula accordingly, becoming a leader in delivering high-quality, sustainable education.`,
    facts: {
      aTop: "Digital platform",
      aMain: "15+",
      aSub: "Online courses (Digital Learning Hub)",
      bTop: "Certificates",
      bMain: "Cambridge / TESOL",
      bSub: "International faculty programs",
      cTop: "Internships",
      cMain: "50+",
      cSub: "Students trained (2025)",
    },
    more: "Additional Initiatives",
    bullets: [
      "Academic Reading & Writing Lab — academic writing and anti-plagiarism.",
      "Flipped classroom & PBL — active, student-centered learning.",
      "Edu4All — inclusive digital solutions.",
    ],
    tagsLabel: "Tags:",
    tag2: "Education",
    tag3: "Innovation",
    tag4: "Exchange",
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
              src="/sustainable/4.png"
              alt="SDG 4 — AMU education initiatives"
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
          <blockquote>{t.quote}</blockquote>
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
            SDG4
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
