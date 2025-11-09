import React from "react";
import { motion } from "framer-motion";

export default function Sdg1Page() {
  // ------- Texts (EN) -------
  const t = {
    title: "SDG 1 — No Poverty",
    figcaption:
      "AMU grants, benefits, and entrepreneurship initiatives — real opportunities for youth.",
    p1: `Asian International University (AMU) prioritizes social justice and equal access to education for all young people. Through the “AMU Grant” program, the university offers 100% or 50% tuition discounts to talented, low-income, and socially vulnerable students. In 2024, more than 200 students received financial support under this program.`,
    quote:
      "The “One Student — One Opportunity” project provides preferential loans to talented rural youth so they can obtain higher education.",
    p2: `In partnership with the private sector and donor organizations, a scholarship fund has been created, through which monthly Rector’s Scholarships are awarded.`,
    h3a: "Startups and Economic Independence",
    p3: `Thanks to the Startup Incubator center, students bring their small business ideas to life and achieve economic independence. Courses in social entrepreneurship teach students to solve community problems through sustainable economic approaches.`,
    h3b: "Fair Pay and Social Benefits",
    p4: `For staff, AMU maintains a fair compensation system and additional social benefits. Thus, the university combats poverty not only through education but also through practical economic resilience.`,
    facts: {
      aTop: "Grants",
      aMain: "100% / 50%",
      aSub: "Tuition discounts",
      bTop: "2024",
      bMain: "200+",
      bSub: "Students supported",
      cTop: "Startup Incubator",
      cMain: "Small business",
      cSub: "Hands-on student projects",
    },
    more: "Additional Initiatives",
    bullets: [
      "“Rector’s Scholarship” — monthly support for talented students.",
      "A sustainable scholarship fund in partnership with donors.",
      "Preferential education loans — a real opportunity for rural youth.",
    ],
    tagsLabel: "Tags:",
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
              src="/sustainable/1.png"
              alt="SDG 1 — Ending poverty through AMU programs"
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
          <blockquote>{t.quote}</blockquote>
          <p>{t.p2}</p>

          <h3>{t.h3a}</h3>
          <p>{t.p3}</p>

          <h3>{t.h3b}</h3>
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
            {t.bullets.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        </article>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="text-sm text-slate-500">{t.tagsLabel}</span>
          <span className="rounded-full border border-slate-200 px-3 py-1 text-sm">
            SDG1
          </span>
          <span className="rounded-full border border-slate-200 px-3 py-1 text-sm">
            Grant
          </span>
          <span className="rounded-full border border-slate-200 px-3 py-1 text-sm">
            Scholarship
          </span>
          <span className="rounded-full border border-slate-200 px-3 py-1 text-sm">
            Entrepreneurship
          </span>
        </div>
      </main>
    </div>
  );
}
