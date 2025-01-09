'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A modern and responsive e-commerce platform.',
    image: '/project-alpha.jpg',
    link: '#',
  },
  {
    title: 'Project Beta',
    description: 'A cutting-edge SaaS dashboard for analytics.',
    image: '/project-beta.jpg',
    link: '#',
  },
  {
    title: 'Project Gamma',
    description: 'A stunning portfolio website for designers.',
    image: '/project-gamma.jpg',
    link: '#',
  },
  {
    title: 'Project Delta',
    description: 'A custom CRM solution for small businesses.',
    image: '/project-delta.jpg',
    link: '#',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-10 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Our Portfolio</h2>
        <p className="text-gray-600 mb-12">
          Discover some of the amazing projects we've worked on!
        </p>
        <motion.div
          className="flex gap-6 overflow-x-scroll no-scrollbar"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] bg-white shadow-md rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-primary font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
