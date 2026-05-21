"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-red-600 tracking-widest text-sm mb-4">Full Stack Software Developer</div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 leading-none mb-6">
            Kennedy Mwanzia
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            Full Stack Developer crafting scalable web applications and blockchain solutions.
          </p>

          <div className="mt-10 flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="btn-red px-8 py-4 rounded-xl text-base font-medium flex items-center gap-3"
            >
              Start a Project <ArrowRight size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#projects"
              className="px-8 py-4 border border-gray-400 rounded-xl text-base hover:bg-gray-100 transition"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >
          <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <Image src="/images/profile.jpg" alt="Kennedy Mwanzia" fill className="object-cover" priority />
          </div>
        </motion.div>
      </div>
    </section>
  );
}