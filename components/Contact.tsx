'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/portfolio-data';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Using mailto as fallback (no backend needed)
    const mailtoLink = `mailto:${portfolioData.email}?subject=Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AReply to: ${formData.email}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Let&apos;s Connect
          </motion.h2>
          <motion.div variants={itemVariants} className="w-16 h-1 bg-indigo-600 mb-12" />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out if you&apos;d like to discuss design, frontend development, or anything creative.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg hover:bg-indigo-50 transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 transition">
                    <svg className="w-5 h-5 text-indigo-600 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Email</p>
                    <p className="font-semibold text-gray-900">{portfolioData.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${portfolioData.phone}`}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg hover:bg-indigo-50 transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 transition">
                    <svg className="w-5 h-5 text-indigo-600 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.73 1.365a1 1 0 001.27-1.27l-1.365-2.73a1 1 0 00.756-.502l4.493-1.498a1 1 0 00.684-.948V5a2 2 0 00-2-2h-7.753a2 2 0 00-2 2v12a2 2 0 002 2H19a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Phone</p>
                    <p className="font-semibold text-gray-900">{portfolioData.phone}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Location</p>
                    <p className="font-semibold text-gray-900">{portfolioData.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition transform hover:scale-105"
                >
                  Send Message
                </button>

                {submitted && (
                  <p className="text-green-600 font-semibold text-center">
                    Thanks for reaching out! I&apos;ll get back to you soon.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
