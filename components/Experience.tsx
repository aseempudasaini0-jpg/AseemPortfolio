'use client';

import { motion } from 'framer-motion';
import { MapPinned, Milestone, RadioTower } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

export function Experience() {
  return (
    <section id="experience" className="relative bg-[#030406] py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-200/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end"
        >
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-violet-100/45">Journey through systems</p>
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Learning, building, and refining in public-impact contexts.
            </h2>
          </div>
          <p className="text-lg leading-8 text-white/52">
            Aseem's path moves across education, product design training, AI curiosity, and hands-on platform work. The throughline is a designer learning how human behavior meets operational systems.
          </p>
        </motion.div>

        <div className="relative overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-5 md:p-8">
          <div className="absolute left-0 top-0 h-full w-px bg-cyan-200/30" />
          <div className="absolute right-0 top-0 h-full w-px bg-violet-200/20" />
          <div className="grid gap-5">
            {portfolioData.experience.map((job, index) => (
              <motion.article
                key={job.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.08, duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
                className="group grid gap-6 border border-white/10 bg-black/20 p-5 transition hover:border-cyan-200/25 hover:bg-white/[0.04] md:grid-cols-[0.7fr_1.3fr]"
              >
                <div className="border-b border-white/10 pb-5 md:border-b-0 md:border-r md:pb-0 md:pr-6">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center border border-white/10 bg-white/[0.04] text-cyan-100">
                      {index === 0 ? <RadioTower className="h-5 w-5" /> : index === 1 ? <Milestone className="h-5 w-5" /> : <MapPinned className="h-5 w-5" />}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-white/32">{job.period}</span>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100/40">{job.signal}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{job.title}</h3>
                  <p className="mt-2 text-white/52">{job.company}</p>
                  <p className="mt-1 text-sm text-white/34">{job.location}</p>
                </div>

                <div className="grid content-center gap-3">
                  {job.achievements.map((achievement) => (
                    <div key={achievement} className="flex gap-4 text-sm leading-7 text-white/56">
                      <span className="mt-3 h-px w-6 shrink-0 bg-cyan-100/45 transition group-hover:w-10" />
                      <p>{achievement}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
