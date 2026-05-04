'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

export function Testimonials() {
  return (
    <section className="relative bg-[#06070b] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/45">Trust signals</p>
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Quiet proof, human impact.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/45">
            The best compliment is not that the interface looks impressive. It is that people feel oriented, respected, and able to move.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {portfolioData.testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="min-h-[280px] border border-white/10 bg-white/[0.035] p-7"
            >
              <Quote className="h-8 w-8 text-cyan-100/45" />
              <blockquote className="mt-10 text-xl leading-9 text-white/76">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-10 border-t border-white/10 pt-5">
                <p className="font-medium text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-white/40">{testimonial.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
