'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/portfolio-data';

export function Experience() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Work Experience
          </motion.h2>
          <motion.div variants={itemVariants} className="w-16 h-1 bg-indigo-600 mb-12" />

          {/* Experience Timeline */}
          <div className="space-y-8">
            {portfolioData.experience.map((job, index) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-indigo-600"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-indigo-600 font-semibold text-lg">{job.company}</p>
                    <p className="text-gray-600">{job.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 font-medium">
                      {job.startDate} – {job.endDate}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-700">
                      <span className="text-indigo-600 font-bold flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-gray-900">
            Education
          </motion.h3>

          <div className="space-y-6">
            {portfolioData.education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{edu.degree}</h4>
                    <p className="text-indigo-600 font-semibold">{edu.school}</p>
                    <p className="text-gray-600">{edu.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 font-medium">
                      {edu.startDate} – {edu.endDate}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
