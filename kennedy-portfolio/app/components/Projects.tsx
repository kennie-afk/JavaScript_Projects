"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Selected Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12, rotateX: 5, rotateY: 8 }}
              className="card bg-white border border-gray-200 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-7">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 px-3 py-1 rounded-md text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={project.live} target="_blank" className="btn-red flex-1 py-3 rounded-xl text-sm text-center flex items-center justify-center gap-2">
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a href={project.github} target="_blank" className="flex-1 border border-gray-300 hover:bg-gray-50 py-3 rounded-xl text-sm text-center">
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}