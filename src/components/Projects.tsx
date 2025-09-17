"use client";

import React from "react";
import { projects } from "@/contents/project";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="bg-gray-100/50 dark:bg-dark/80 rounded-lg shadow-md p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden ">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw , (max-width:1200px) 50vw,33vw"
                />
              </div>
              <motion.h3
                className="text-xl font-semibold my-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.description}
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm "
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div
                className="flex gap-4 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-5 h-5" />
                  <span> code</span>
                </motion.a>

                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                  <span> Live demo</span>
                </motion.a>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
