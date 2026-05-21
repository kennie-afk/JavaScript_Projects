"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Technical Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass p-6 rounded-xl flex justify-between items-center hover:border-red-500 border border-gray-200 transition-all"
            >
              <div className="font-medium text-gray-900">{skill.name}</div>
              <div className="text-sm font-mono text-red-600 bg-white px-4 py-1 rounded-lg border">
                {skill.level}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}