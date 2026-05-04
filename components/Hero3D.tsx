'use client';

import { motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Brain, MousePointer2, Play } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

function MindArchitecture() {
  return (
    <div className="pointer-events-none absolute inset-0 grid place-items-center overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
        className="relative h-[42rem] w-[42rem] opacity-70"
      >
        <div className="absolute inset-16 border border-cyan-100/10 [clip-path:polygon(50%_0,94%_25%,94%_75%,50%_100%,6%_75%,6%_25%)]" />
        <div className="absolute inset-28 border border-violet-100/12 [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)]" />
        <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 border border-white/10 bg-cyan-200/[0.035] shadow-[0_0_120px_rgba(56,189,248,0.16)] [clip-path:polygon(50%_0,90%_22%,90%_78%,50%_100%,10%_78%,10%_22%)]" />
        {[0, 1, 2].map((ring) => (
          <motion.div
            key={ring}
            animate={{ rotate: ring % 2 === 0 ? -360 : 360 }}
            transition={{ duration: 26 + ring * 10, repeat: Infinity, ease: 'linear' }}
            className="absolute rounded-[50%] border border-cyan-100/10"
            style={{
              inset: `${5 + ring * 13}%`,
              transform: `rotate(${ring * 18}deg)`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

const interfaceCards = [
  { label: 'Attention Map', value: 'low load', x: 'right-[8%]', y: 'top-[24%]' },
  { label: 'Emotion Layer', value: 'trust + calm', x: 'right-[24%]', y: 'top-[42%]' },
  { label: 'System State', value: 'AI assisted', x: 'right-[10%]', y: 'bottom-[27%]' },
  { label: 'Kathmandu', value: '27.7172 N', x: 'right-[28%]', y: 'bottom-[16%]' },
];

export function Hero3D() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [7, -7]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);
  const lightX = useTransform(mouseX, (value) => `calc(50% + ${value * 0.18}px)`);
  const lightY = useTransform(mouseY, (value) => `calc(50% + ${value * 0.18}px)`);
  const dynamicLight = useMotionTemplate`radial-gradient(520px circle at ${lightX} ${lightY}, rgba(103,232,249,0.12), transparent 62%)`;

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-[#030406]"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left - rect.width / 2);
        mouseY.set(event.clientY - rect.top - rect.height / 2);
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(62,126,255,0.2),transparent_34%),linear-gradient(180deg,#030406_0%,#070911_58%,#030406_100%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="noise-layer" />
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: dynamicLight }} />

      <MindArchitecture />

      {interfaceCards.map((card, index) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 22, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.9 + index * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`pointer-events-none absolute hidden ${card.x} ${card.y} w-48 border border-white/10 bg-white/[0.045] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl xl:block`}
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.8)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">Layer 0{index + 1}</span>
          </div>
          <p className="text-sm font-medium text-white/85">{card.label}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-cyan-100/45">{card.value}</p>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-20 pt-32 md:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full min-w-0 max-w-[calc(100vw-2.5rem)] md:max-w-4xl"
          >
            <div className="mb-8 inline-flex max-w-full items-center gap-3 overflow-hidden whitespace-nowrap border border-white/10 bg-white/[0.045] px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white/55 backdrop-blur-xl md:text-xs md:tracking-[0.24em]">
              <Brain className="h-4 w-4 text-cyan-200" />
              <span className="truncate">Product psychology from Kathmandu</span>
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.94] text-white min-[390px]:text-[3.55rem] md:text-8xl md:leading-[0.92] lg:text-[8.5rem]">
              Designing interfaces that feel alive.
            </h1>
            <p className="mt-8 max-w-[calc(100vw-2.5rem)] text-lg leading-8 text-white/62 md:max-w-2xl md:text-xl">
              {portfolioData.subtitle} He studies behavior, systems, emotion, silence, and AI to make digital products feel clear enough to trust.
            </p>

            <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <motion.button
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('#projects')}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black shadow-[0_0_60px_rgba(255,255,255,0.18)] transition hover:bg-cyan-100 sm:w-auto"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
              <motion.button
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('#about')}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-cyan-200/40 hover:bg-white/[0.08] sm:w-auto"
              >
                <Play className="h-4 w-4 fill-white/80" />
                Enter Experience
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto hidden aspect-[4/5] w-full max-w-[450px] transform-gpu lg:block"
          >
            <div className="absolute inset-0 border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))] p-5 shadow-[0_40px_140px_rgba(0,0,0,0.65)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs uppercase tracking-[0.28em] text-white/40">Experience Architect</span>
                <MousePointer2 className="h-4 w-4 text-cyan-100/70" />
              </div>
              <div className="relative mt-8 h-[78%] overflow-hidden border border-white/8 bg-black/35">
                <div className="absolute inset-x-10 top-10 h-48 rounded-t-full border border-cyan-100/16 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.16),transparent_26%),linear-gradient(180deg,rgba(95,168,255,0.2),rgba(152,119,255,0.07)_55%,transparent)]" />
                <div className="absolute inset-x-20 bottom-14 h-48 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.02))] blur-[1px] [clip-path:polygon(50%_0,78%_100%,22%_100%)]" />
                <div className="absolute left-8 right-8 top-64 space-y-3">
                  {[72, 48, 88, 62].map((width, index) => (
                    <div key={width} className="h-2 bg-white/10" style={{ width: `${width}%`, opacity: 0.68 - index * 0.08 }} />
                  ))}
                </div>
                <div className="absolute bottom-7 left-7 right-7 grid grid-cols-3 gap-2">
                  {['Psych', 'AI', 'UX'].map((item) => (
                    <div key={item} className="border border-white/10 bg-white/[0.045] px-3 py-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/42 transition hover:text-white"
        aria-label="Scroll to about section"
      >
        <span>Scroll</span>
        <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04]">
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </span>
      </button>
    </section>
  );
}
