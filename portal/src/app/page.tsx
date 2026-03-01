"use client";

import { motion } from "framer-motion";
import { sites } from "@/data/sites";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen flex flex-col items-center px-5 py-16 md:py-24">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 md:mb-24"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
          <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            324
          </span>
          <span className="text-zinc-500">.ing</span>
        </h1>
        <p className="text-zinc-500 text-sm md:text-base font-mono tracking-wider">
          Family Sites Collection
        </p>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[180px]"
      >
        {sites.map((site) => (
          <motion.a
            key={site.id}
            href={`https://${site.subdomain}`}
            target="_blank"
            rel="noreferrer"
            variants={item}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className={`
              group relative overflow-hidden rounded-2xl border border-[#1f1f23]
              bg-[#141416] cursor-pointer transition-shadow duration-300
              hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]
              ${site.size === "lg" ? "md:col-span-2 md:row-span-2" : "md:col-span-2"}
            `}
          >
            {/* Gradient background on hover */}
            <div
              className={`
                absolute inset-0 bg-gradient-to-br ${site.gradient} opacity-0
                group-hover:opacity-10 transition-opacity duration-500
              `}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
              {/* Top: emoji + status */}
              <div className="flex items-start justify-between">
                <span className={`text-3xl ${site.size === "lg" ? "md:text-5xl" : "md:text-4xl"}`}>
                  {site.emoji}
                </span>
                {site.status === "live" && (
                  <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    live
                  </span>
                )}
                {site.status === "dev" && (
                  <span className="text-[11px] text-amber-400 font-mono">dev</span>
                )}
                {site.status === "soon" && (
                  <span className="text-[11px] text-zinc-500 font-mono">soon</span>
                )}
              </div>

              {/* Bottom: info */}
              <div>
                <p className="font-mono text-xs text-zinc-500 mb-1.5 tracking-wide">
                  {site.subdomain}
                </p>
                <h2 className={`font-bold text-white mb-1 ${site.size === "lg" ? "text-xl md:text-2xl" : "text-lg"}`}>
                  {site.name}
                </h2>
                <p className="text-sm text-zinc-500">{site.description}</p>

                {/* Tags */}
                <div className="flex gap-2 mt-3">
                  {site.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Corner arrow on hover */}
            <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-zinc-400"
              >
                <path
                  d="M4 12L12 4M12 4H6M12 4V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-20 md:mt-32 text-center"
      >
        <p className="text-xs text-zinc-600 font-mono">
          built by 사미사프로젝트
        </p>
      </motion.footer>
    </main>
  );
}
