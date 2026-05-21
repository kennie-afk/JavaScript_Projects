"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-12 text-gray-900"
        >
          Get In Touch
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="glass p-10 rounded-2xl border border-gray-200"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-4 border border-gray-300 rounded-xl mb-6 focus:border-red-500 outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-4 border border-gray-300 rounded-xl mb-6 focus:border-red-500 outline-none"
            required
          />
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-4 border border-gray-300 rounded-2xl h-40 focus:border-red-500 outline-none"
            required
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            type="submit"
            className="btn-red w-full py-4 mt-8 rounded-2xl text-lg font-medium"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}