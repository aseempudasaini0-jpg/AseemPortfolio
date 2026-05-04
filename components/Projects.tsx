'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Layers3, LineChart, ScanSearch, WandSparkles } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

const accentStyles = {
  cyan: 'from-cyan-200/25 via-cyan-300/10 to-transparent text-cyan-100 border-cyan-200/20',
  blue: 'from-blue-300/25 via-sky-300/10 to-transparent text-blue-100 border-blue-200/20',
  violet: 'from-violet-300/25 via-fuchsia-300/10 to-transparent text-violet-100 border-violet-200/20',
  silver: 'from-white/20 via-slate-300/10 to-transparent text-white border-white/20',
};

export function Projects() {
  return (
    <section id="projects" className="relative bg-[#06070b] py-28 md:py-36">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.035)_50%,transparent_100%)]" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 max-w-3xl"
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/45">Featured case studies</p>
          <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Product stories with research, systems, and consequence.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/54">
            Each case study is treated like a living system: problem framing, user friction, interface architecture, visual evolution, and a reflective ending.
          </p>
        </motion.div>

        <div className="space-y-10 md:space-y-16">
          {portfolioData.caseStudies.map((project, index) => {
            const style = accentStyles[project.accent as keyof typeof accentStyles] ?? accentStyles.cyan;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="group relative grid overflow-hidden border border-white/10 bg-[#090b10] shadow-[0_35px_140px_rgba(0,0,0,0.42)] lg:grid-cols-[0.95fr_1.05fr]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${style} opacity-60`} />
                <div className="relative p-6 md:p-10 lg:sticky lg:top-24 lg:self-start">
                  <div className="mb-12 flex items-start justify-between gap-6">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/36">{project.category}</p>
                      <h3 className="mt-4 text-4xl font-semibold text-white md:text-6xl">
                        {project.title}
                      </h3>
                    </div>
                    <span className="font-mono text-sm text-white/35">{project.id}</span>
                  </div>

                  <p className="max-w-xl text-lg leading-8 text-white/62">{project.premise}</p>

                  <div className="mt-10 grid gap-3 sm:grid-cols-3">
                    {project.metrics.map((metric) => (
                      <div key={metric} className="border border-white/10 bg-black/20 p-4 backdrop-blur">
                        <p className="text-sm font-medium leading-6 text-white/78">{metric}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 overflow-hidden border border-white/10 bg-black/30 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-cyan-200/70" />
                        <span className="h-2 w-2 bg-violet-200/60" />
                        <span className="h-2 w-2 bg-white/25" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/30">Prototype preview</span>
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden border border-white/8 bg-[#05070b]">
                      <div className="absolute left-0 top-0 h-full w-[28%] border-r border-white/8 bg-white/[0.035] p-4">
                        <div className="h-3 w-16 bg-white/18" />
                        <div className="mt-8 space-y-3">
                          {[66, 48, 76, 38].map((width) => (
                            <div key={width} className="h-2 bg-white/10" style={{ width: `${width}%` }} />
                          ))}
                        </div>
                      </div>
                      <div className="absolute left-[32%] right-5 top-5 space-y-4">
                        <div className="h-20 border border-white/10 bg-white/[0.04]" />
                        <div className="grid grid-cols-2 gap-4">
                          <div className="h-28 border border-white/10 bg-cyan-200/[0.06]" />
                          <div className="h-28 border border-white/10 bg-violet-200/[0.055]" />
                        </div>
                        <div className="h-12 border border-white/10 bg-white/[0.035]" />
                      </div>
                      <motion.div
                        aria-hidden
                        className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/14 to-transparent"
                        animate={{ x: ['-25%', '560%'] }}
                        transition={{ duration: 4.5 + index, repeat: Infinity, ease: 'linear' }}
                      />
                    </div>
                  </div>
                </div>

                <div className="relative border-t border-white/10 p-6 md:p-10 lg:border-l lg:border-t-0">
                  <div className="grid gap-4">
                    <CaseBlock icon={ScanSearch} title="Problem" text={project.problem} />
                    <CaseBlock icon={LineChart} title="Research" text={project.research} />
                    <div className="border border-white/10 bg-black/20 p-5">
                      <h4 className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/56">
                        <Layers3 className="h-4 w-4" />
                        User pain points
                      </h4>
                      <div className="grid gap-2 sm:grid-cols-3">
                        {project.painPoints.map((point) => (
                          <p key={point} className="border border-white/8 bg-white/[0.035] px-3 py-3 text-sm leading-5 text-white/56">
                            {point}
                          </p>
                        ))}
                      </div>
                    </div>
                    <CaseBlock icon={WandSparkles} title="UX strategy" text={project.strategy} />
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <Detail title="Wireframes" text={project.wireframes} />
                    <Detail title="UI evolution" text={project.uiEvolution} />
                    <Detail title="Design system" text={project.designSystem} />
                    <Detail title="Final solution" text={project.solution} />
                  </div>

                  <div className="mt-6 border border-white/10 bg-white/[0.035] p-6">
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/36">Reflection</p>
                    <p className="mt-4 text-lg leading-8 text-white/68">{project.reflection}</p>
                  </div>

                  <button className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-200/30 hover:bg-white/[0.08]">
                    Explore logic
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CaseBlock({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof ScanSearch;
  title: string;
  text: string;
}) {
  return (
    <div className="border border-white/10 bg-black/20 p-5">
      <h4 className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/56">
        <Icon className="h-4 w-4" />
        {title}
      </h4>
      <p className="text-sm leading-7 text-white/56">{text}</p>
    </div>
  );
}

function Detail({ title, text }: { title: string; text: string }) {
  return (
    <div className="min-h-[170px] border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-200/20 hover:bg-white/[0.05]">
      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan-100/38">{title}</p>
      <p className="mt-4 text-sm leading-7 text-white/54">{text}</p>
    </div>
  );
}
