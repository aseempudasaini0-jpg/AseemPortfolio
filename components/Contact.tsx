'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '');
    const email = String(form.get('email') ?? '');
    const message = String(form.get('message') ?? '');
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nReply to: ${email}`);
    window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3200);
  };

  return (
    <section id="contact" className="relative min-h-[92svh] overflow-hidden bg-[#030406] py-28 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_50%_85%,rgba(139,92,246,0.14),transparent_34%)]" />
      <div className="noise-layer" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/45">Final signal</p>
          <h2 className="max-w-4xl text-5xl font-semibold leading-[0.98] text-white md:text-7xl">
            Let's build interfaces people remember.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/58">
            Bring a messy problem, an early product idea, or a system that needs more humanity. Aseem turns ambiguity into calm, usable digital experiences.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <a href={`mailto:${portfolioData.email}`} className="group border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-200/30 hover:bg-white/[0.07]">
              <Mail className="mb-7 h-5 w-5 text-cyan-100/70" />
              <p className="text-sm text-white/40">Email</p>
              <p className="mt-1 break-words font-medium text-white">{portfolioData.email}</p>
            </a>
            <div className="border border-white/10 bg-white/[0.04] p-5">
              <MapPin className="mb-7 h-5 w-5 text-violet-100/70" />
              <p className="text-sm text-white/40">Location</p>
              <p className="mt-1 font-medium text-white">{portfolioData.location}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'LinkedIn', href: portfolioData.linkedin, icon: Linkedin },
              { label: 'Behance', href: portfolioData.behance, icon: ArrowUpRight },
              { label: 'Dribbble', href: portfolioData.dribbble, icon: ArrowUpRight },
              { label: 'GitHub', href: portfolioData.github, icon: Github },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/58 transition hover:border-cyan-200/30 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  {social.label}
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-[0_40px_140px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:p-8"
        >
          <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/34">Transmission</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Start a conversation</h3>
            </div>
            <span className="h-3 w-3 bg-cyan-200 shadow-[0_0_26px_rgba(103,232,249,0.75)]" />
          </div>

          <div className="space-y-5">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" placeholder="you@domain.com" type="email" />
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-white/68">Message</span>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell me about the product, emotion, or system you want to shape."
                className="w-full resize-none border border-white/10 bg-black/32 px-4 py-3 text-white outline-none transition placeholder:text-white/24 focus:border-cyan-200/45"
              />
            </label>
          </div>

          <motion.button
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-cyan-100"
          >
            Send Signal
            <Send className="h-4 w-4" />
          </motion.button>

          {submitted && (
            <p className="mt-5 text-center text-sm text-cyan-100/76">
              Opening your email client. The signal is ready.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = 'text',
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-white/68">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full border border-white/10 bg-black/32 px-4 py-3 text-white outline-none transition placeholder:text-white/24 focus:border-cyan-200/45"
      />
    </label>
  );
}
