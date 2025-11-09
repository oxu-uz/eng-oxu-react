import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/** SDG palette (official shades) */
const sdgColors = {
  1: "#e5243b",
  2: "#dda63a",
  3: "#4c9f38",
  4: "#c5192d",
  5: "#ff3a21",
  6: "#26bde2",
  7: "#fcc30b",
  8: "#a21942",
  9: "#fd6925",
  10: "#dd1367",
  11: "#fd9d24",
  12: "#bf8b2e",
  13: "#3f7e44",
  14: "#0a97d9",
  15: "#56c02b",
  16: "#00689d",
  17: "#19486a",
};

const goals = [
  { id: 1, title: "No Poverty" },
  { id: 2, title: "Zero Hunger" },
  { id: 3, title: "Good Health and Well-Being" },
  { id: 4, title: "Quality Education" },
  { id: 5, title: "Gender Equality" },
  { id: 6, title: "Clean Water and Sanitation" },
  { id: 7, title: "Affordable and Clean Energy" },
  { id: 8, title: "Decent Work and Economic Growth" },
  { id: 9, title: "Industry, Innovation and Infrastructure" },
  { id: 10, title: "Reduced Inequalities" },
  { id: 11, title: "Sustainable Cities and Communities" },
  { id: 12, title: "Responsible Consumption and Production" },
  { id: 13, title: "Climate Action" },
  { id: 14, title: "Life Below Water" },
  { id: 15, title: "Life on Land" },
  { id: 16, title: "Peace, Justice and Strong Institutions" },
  { id: 17, title: "Partnerships for the Goals" },
];

export default function SustainableGoals() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero with soft gradient and noise */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#012c6e] via-[#0b1c40] to-[#0b1c40] opacity-95" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% -10%, rgba(255,255,255,0.12), transparent 45%), radial-gradient(ellipse at 80% -10%, rgba(0,156,255,0.18), transparent 40%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 text-center text-white">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-md"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sustainable Development Goals
          </motion.h1>
          <motion.p
            className="mt-3 max-w-2xl mx-auto text-base md:text-lg text-blue-100/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            17 global goals defined by the UN — a roadmap to a sustainable
            future.
          </motion.p>
        </div>
        {/* bottom wave */}
        <svg
          className="relative -mb-1 w-full text-white"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,69.3C960,64,1056,64,1152,64C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </header>

      {/* Glassy cards grid with animation */}
      <main className="container mx-auto px-6 pb-16">
        <motion.div
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {goals.map((g) => {
            const color = sdgColors[g.id];
            return (
              <motion.div
                key={g.id}
                variants={{
                  hidden: { opacity: 0, y: 24, scale: 0.98 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <Link
                  to={`/sustainable-development-goals-${g.id}`}
                  className="group block rounded-2xl overflow-hidden"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <div
                    className="relative rounded-2xl border backdrop-blur-md bg-white/85
                               shadow-[0_10px_30px_rgba(1,44,110,0.10)]
                               transition-all duration-300"
                    style={{
                      borderColor: "rgba(226,232,240,1)",
                      boxShadow: "0 10px 30px rgba(1,44,110,0.10)",
                    }}
                  >
                    {/* SDG-colored top border */}
                    <div
                      className="h-1 w-full"
                      style={{ backgroundColor: color }}
                    />

                    {/* Square cover */}
                    <div className="p-4 pt-3">
                      <div className="relative aspect-square overflow-hidden rounded-xl border border-slate-200">
                        <img
                          src={`/sustainable/${g.id}.png`}
                          alt={`SDG ${g.id}`}
                          className="absolute inset-0 h-full w-full object-contain
                                     transition-transform duration-300 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                        {/* soft glow on hover */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ boxShadow: `inset 0 0 0 2px ${color}22` }}
                        />
                      </div>

                      {/* captions */}
                      <div className="mt-4 text-center">
                        <p className="text-xs tracking-wide text-slate-500">
                          SDG {g.id}
                        </p>
                        <h3 className="mt-1 text-base font-semibold text-slate-800">
                          <span className="bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent group-hover:from-slate-900 group-hover:to-slate-800">
                            {g.title}
                          </span>
                        </h3>
                      </div>
                    </div>

                    {/* hover glow outline */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: `0 0 0 3px ${color}33, 0 10px 35px ${color}22`,
                      }}
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </main>
    </div>
  );
}
