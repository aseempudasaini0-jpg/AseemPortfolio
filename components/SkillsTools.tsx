'use client';

import { motion } from 'framer-motion';
import { Cpu, Figma, Gauge, Sparkles } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

export function SkillsTools() {
  return (
    <section id="skills" className="relative bg-[#080a0f] py-28 md:py-36">
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:96px_96px]" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/45">Skills + tools</p>
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              A working ecosystem for modern product design.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/52">
              Research, visual craft, AI workflows, prototyping, and front-end awareness operate together so ideas can become systems teams can actually ship.
            </p>

            <div className="mt-10 border border-white/10 bg-black/24 p-6">
              <div className="mb-6 flex items-center gap-3">
                <Cpu className="h-5 w-5 text-cyan-100" />
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/40">Tool constellation</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/62 transition hover:border-cyan-200/30 hover:text-white"
                  >
                    {tool === 'Figma' ? <Figma className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5 text-cyan-100/55" />}
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {portfolioData.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.32 }}
                transition={{ delay: index * 0.035, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
                className="group border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.065),rgba(255,255,255,0.024))] p-5 backdrop-blur"
              >
                <div className="mb-10 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-100/38">{skill.type}</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">{skill.name}</h3>
                  </div>
                  <Gauge className="h-5 w-5 text-white/28 transition group-hover:text-cyan-100/70" />
                </div>
                <div className="h-1.5 bg-white/[0.07]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-gradient-to-r from-cyan-200 via-blue-200 to-violet-200"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
                  <span>Signal strength</span>
                  <span>{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
