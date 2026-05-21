"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-10 text-gray-900"
        >
          About Me
        </motion.h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          I am a passionate Full Stack Software Engineer based in Nairobi, Kenya. 
          I specialize in building modern, scalable web applications and secure blockchain solutions 
          using cutting-edge technologies.
        </p>
      </div>
    </section>
  );
}