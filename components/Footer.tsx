'use client';

import React from 'react';
import { portfolioData } from '@/lib/portfolio-data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
              {portfolioData.name}
            </h3>
            <p className="text-gray-400">
              Creating intuitive digital experiences with design thinking and modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="text-gray-400 hover:text-indigo-400 transition"
                >
                  {portfolioData.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${portfolioData.phone}`}
                  className="text-gray-400 hover:text-indigo-400 transition"
                >
                  {portfolioData.phone}
                </a>
              </li>
              <li className="text-gray-400">
                {portfolioData.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {portfolioData.name}. All rights reserved.
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: 'M18.364 5.636l-3.536 3.536m9.172-9.172a9 9 0 11-12.728 0m0 0l3.536 3.536m-9.172-9.172l3.536 3.536',
                  href: portfolioData.linkedin,
                  label: 'LinkedIn',
                },
                {
                  icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v.756a3.505 3.505 0 015.068.5A2.996 2.996 0 0121 12.604v5.396a2 2 0 01-2 2z',
                  href: '#',
                  label: 'Resume',
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition"
                  title={social.label}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={social.icon}
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll to Top */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-indigo-400 transition text-sm"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
