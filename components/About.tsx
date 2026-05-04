'use client';

import { motion } from 'framer-motion';
import { Eye, Leaf, Network, Orbit, Sparkles } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

const icons = [Eye, Network, Leaf];

export function About() {
  return (
    <section id="about" className="relative border-t border-white/8 bg-[#030406] py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/45">About the mind</p>
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Design as awareness, not decoration.
            </h2>
            <p className="mt-7 text-lg leading-8 text-white/58">{portfolioData.about}</p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {portfolioData.stats.map((stat) => (
                <div key={stat.label} className="border border-white/10 bg-white/[0.035] p-5 backdrop-blur">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-5 text-white/45">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-3">
              {portfolioData.philosophy.map((item, index) => {
                const Icon = icons[index] ?? Sparkles;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.08, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6 }}
                    className="group min-h-[260px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] p-6 transition hover:border-cyan-200/30"
                  >
                    <div className="mb-8 grid h-11 w-11 place-items-center border border-white/10 bg-black/35 text-cyan-100 transition group-hover:border-cyan-200/40">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-medium text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/50">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="border border-white/10 bg-white/[0.03] p-5 md:p-8"
            >
              <div className="mb-9 flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-violet-100/45">Personal journey</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">From systems to emotion</h3>
                </div>
                <Orbit className="hidden h-8 w-8 text-cyan-100/40 md:block" />
              </div>

              <div className="relative">
                <div className="absolute left-[1.15rem] top-3 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-cyan-200/70 via-white/12 to-violet-200/40 md:left-1/2" />
                <div className="space-y-7">
                  {portfolioData.timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -18 : 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.45 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className={`relative grid gap-4 pl-14 md:grid-cols-2 md:pl-0 ${index % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}
                    >
                      <div className={`md:px-10 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                        <span className="absolute left-3 top-2 h-4 w-4 border border-cyan-200/70 bg-[#030406] shadow-[0_0_24px_rgba(103,232,249,0.42)] md:left-1/2 md:-translate-x-1/2" />
                        <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100/45">{item.year}</p>
                        <h4 className="mt-2 text-xl font-medium text-white">{item.label}</h4>
                        <p className="mt-3 text-sm leading-7 text-white/48">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
