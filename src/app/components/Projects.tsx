import React from "react";
import { projects } from "@/contents/project";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-gray-100/50 dark:bg-dark/80 rounded-lg shadow-md p-6"
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
            <h3 className="text-xl font-semibold my-4">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-2">
              <Link
                href={project.githubLink}
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
              >
                <FaGithub className="w-5 h-5" />
                <span> code</span>
              </Link>

              <Link
                href={project.githubLink}
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
                <span> Live demo</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
