import React from "react";
import { motion } from "framer-motion";

export default function Sdg3Page() {
  // ------- Texts (EN) -------
  const t = {
    title: "SDG 3 — Good Health and Well-Being",
    figcaption:
      "Medical room, healthy lifestyle programs, and community health projects.",
    p1: `AMU systematically promotes a healthy lifestyle and strengthens both physical and mental health. The on-campus “Medical Room” provides regular check-ups, psychological counseling, and healthy living trainings.`,
    p2: `The “Healthy Mind – Healthy Future” program includes lectures on stress management and motivation. The university features sports complexes, running tracks, and cycling lanes.`,
    p3: `Within the “Community Health Campaign,” medical students deliver free screenings in rural areas. AMU has established the “OXU Dental Clinic” and is implementing the “Asia International Hospital” project.`,
    quote:
      "An annual healthy lifestyle marathon gathers more than 3,000 participants.",
    p4: `AMU treats health as an integral part of community culture, not merely a medical service.`,
    facts: {
      aTop: "Prevention",
      aMain: "Medical Room",
      aSub: "Check-ups + counseling",
      bTop: "Community",
      bMain: "Health Campaign",
      bSub: "Free screenings",
      cTop: "Marathon",
      cMain: "3000+",
      cSub: "Participants yearly",
    },
    more: "Additional Initiatives",
    bullets: [
      "“Healthy Mind – Healthy Future” — classes on mental health.",
      "OXU Dental Clinic — prevention and treatment.",
      "Asia International Hospital — integration of education and clinical practice.",
    ],
    tagsLabel: "Tags:",
    tag2: "Health",
    tag3: "Wellbeing",
    tag4: "Community",
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

      {/* Cover image (ALWAYS visible, 600×600) */}
      <section className="relative">
        <div className="mx-auto max-w-max px-4">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <img
              src="/sustainable/3.png"
              alt="SDG 3 — AMU health and well-being initiatives"
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

      {/* Article body */}
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
            SDG3
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
