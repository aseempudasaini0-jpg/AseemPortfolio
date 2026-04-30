'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/portfolio-data';

export function Projects() {
  const [filter, setFilter] = useState<string>('all');

  const allTags = Array.from(new Set(portfolioData.projects.flatMap(p => p.tags)));

  const filteredProjects = filter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.tags.includes(filter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Projects
          </motion.h2>
          <motion.div variants={itemVariants} className="w-16 h-1 bg-indigo-600 mb-12" />

          {/* Filter Tags */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full font-medium transition ${
                filter === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-gray-800 hover:bg-slate-200'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  filter === tag
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-gray-800 hover:bg-slate-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-slate-200"
              >
                {/* Project Header */}
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-6 h-32 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-indigo-100">{project.subtitle}</p>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link Button */}
                  <a
                    href={project.link}
                    className="inline-block px-4 py-2 bg-indigo-600 text-white rounded font-semibold hover:bg-indigo-700 transition"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
