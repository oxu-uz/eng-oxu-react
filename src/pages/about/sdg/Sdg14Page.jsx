import React from "react";
import { motion } from "framer-motion";

export default function Sdg14Page() {
  const t = {
    title: "SDG 14 — Life Below Water",
    fig: "WWF partnership, Eco-Filter biofilters, and the annual “Water & Life” conference.",
    p1: `OXU participates in international initiatives (in partnership with WWF) to restore aquatic ecosystems. In the Eco-Filter Lab, the university developed a prototype biofilter made from locally sourced materials to reduce water pollution.`,
    p2: `Each year OXU hosts the international “Water & Life” conference, with outcomes published in scholarly outlets. Students also run outreach programs in schools to raise awareness about aquatic ecosystems.`,
    quote:
      "OXU defines its scientific mission as cleaning riverbanks, protecting water resources, and preserving biodiversity in aquatic ecosystems.",
    facts: {
      aTop: "Partnership",
      aMain: "WWF",
      aSub: "International water projects",
      bTop: "Technology",
      bMain: "Eco-Filter",
      bSub: "Local-material biofilter prototype",
      cTop: "Research",
      cMain: "Conference",
      cSub: "“Water & Life” — annually",
    },
    sourcesTitle: "Sources / Links",
    tagsLabel: "Tags:",
    tags: ["SDG14", "WWF", "EcoFilter", "BlueEconomy"],
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
          id="sdg14-title"
        >
          {t.title}
        </motion.h1>
      </header>

      {/* Cover image (responsive up to 600px) */}
      <section className="relative" aria-labelledby="sdg14-title">
        <div className="mx-auto max-w-max px-4">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <img
              src="/sustainable/14.png"
              alt="SDG 14 — OXU aquatic ecosystems"
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

          {/* Sources / Links */}
          <div className="not-prose mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-sm font-medium text-slate-700 mb-2">
              {t.sourcesTitle}
            </div>
            <ul className="list-disc pl-5 text-sm text-slate-600">
              <li>
                <a
                  href="https://t.me/oxunews/1334"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-800 underline hover:no-underline"
                >
                  oxunews #1334 — video
                </a>
              </li>
            </ul>
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
