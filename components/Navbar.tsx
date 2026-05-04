'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Sparkles, X } from 'lucide-react';

const navItems = [
  { label: 'Mind', href: '#about' },
  { label: 'Cases', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Systems', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 shadow-[0_18px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:px-5">
        <button
          onClick={() => handleNavClick('#home')}
          className="group flex items-center gap-3"
          aria-label="Go to hero"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full border border-cyan-300/30 bg-white/[0.06] text-sm font-semibold text-white shadow-[0_0_35px_rgba(71,196,255,0.2)]">
            AP
          </span>
          <span className="hidden text-left md:block">
            <span className="block text-sm font-medium tracking-[0.18em] text-white/90">ASEEM</span>
            <span className="block text-[11px] uppercase tracking-[0.24em] text-white/40">UX / AI / Kathmandu</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item, index) => (
            <motion.button
              key={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + index * 0.05 }}
              onClick={() => handleNavClick(item.href)}
              className="rounded-full px-4 py-2 text-sm text-white/58 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        <button
          onClick={() => handleNavClick('#contact')}
          className="hidden items-center gap-2 rounded-full border border-white/12 bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-[1.02] hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 md:flex"
        >
          <Sparkles className="h-4 w-4" />
          Begin
        </button>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 max-w-7xl rounded-[1.5rem] border border-white/10 bg-black/85 p-3 shadow-2xl backdrop-blur-2xl md:hidden"
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="block w-full rounded-2xl px-4 py-3 text-left text-sm text-white/70 transition hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
