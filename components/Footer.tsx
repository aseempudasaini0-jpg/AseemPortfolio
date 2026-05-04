'use client';

import { ArrowUp } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#030406] py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-sm font-medium">{portfolioData.name}</p>
          <p className="mt-1 text-sm text-white/38">Future creative director and experience architect. Kathmandu, Nepal.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/42">
          <span>© {currentYear}</span>
          <a href={`mailto:${portfolioData.email}`} className="transition hover:text-white">Email</a>
          <a href={portfolioData.linkedin} className="transition hover:text-white">LinkedIn</a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 transition hover:border-cyan-200/30 hover:text-white"
          >
            <ArrowUp className="h-4 w-4" />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
}
