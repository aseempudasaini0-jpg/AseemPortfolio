'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/portfolio-data';

export function About() {
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            About Me
          </motion.h2>
          <motion.div variants={itemVariants} className="w-16 h-1 bg-indigo-600 mb-8" />

          <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl">
            {portfolioData.about}
          </motion.p>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Design Skills */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Skills</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.design.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Tools</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Web Skills */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Basics</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.webBasics.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interpersonal Skills */}
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Interpersonal Skills</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {portfolioData.interpersonalSkills.map((skill, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                  <p className="text-gray-700">{skill}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Interests</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {portfolioData.interests.map((interest, index) => (
                <div key={index} className="bg-indigo-50 p-4 rounded-lg text-center">
                  <p className="text-gray-800 font-medium">{interest}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
