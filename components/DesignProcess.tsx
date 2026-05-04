'use client';

import { motion } from 'framer-motion';
import { Activity, Compass, DraftingCompass, Microscope, PenTool, Repeat2, TestTube2 } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

const processIcons = [Compass, Microscope, Activity, PenTool, DraftingCompass, TestTube2, Repeat2];

export function DesignProcess() {
  return (
    <section id="process" className="relative bg-[#030406] py-28 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(124,58,237,0.13),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.1),transparent_30%)]" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-violet-100/45">Design process</p>
          <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            A glowing path from empathy to iteration.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/52">
            The method is deliberately calm: reduce ambiguity, protect attention, test the emotional logic, and evolve the system until the next action feels natural.
          </p>
        </motion.div>

        <div className="relative mt-20">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-cyan-200/60 via-white/10 to-violet-200/50 md:left-1/2" />
          <div className="space-y-8">
            {portfolioData.process.map((item, index) => {
              const Icon = processIcons[index] ?? Activity;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative grid gap-5 pl-16 md:grid-cols-2 md:pl-0 ${index % 2 === 1 ? '' : 'md:text-right'}`}
                >
                  <div className={`md:px-12 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -4 }}
                      className="border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] p-6 backdrop-blur-xl"
                    >
                      <div className={`mb-7 flex items-center gap-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="grid h-12 w-12 place-items-center border border-cyan-200/20 bg-cyan-200/[0.06] text-cyan-100">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="font-mono text-xs uppercase tracking-[0.24em] text-white/34">0{index + 1}</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{item.step}</h3>
                      <p className="mt-4 text-sm leading-7 text-white/52">{item.detail}</p>
                    </motion.div>
                  </div>
                  <span className="absolute left-4 top-8 h-5 w-5 border border-cyan-100/70 bg-[#030406] shadow-[0_0_28px_rgba(103,232,249,0.46)] md:left-1/2 md:-translate-x-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
