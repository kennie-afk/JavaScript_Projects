"use client";
import { Code2, Download } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    document.querySelectorAll("section[id]").forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Code2 className="text-red-600" size={32} />
          <span className="text-xl font-semibold tracking-tight">KENNEDY MWANZIA</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          {["about", "skills", "projects", "contact"].map((item) => (
            <a key={item} href={`#${item}`} className={`hover:text-red-600 transition ${active === item ? "text-red-600" : ""}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        <a href="/cv.pdf" download className="btn-red px-6 py-2.5 rounded-lg text-sm flex items-center gap-2">
          <Download size={16} /> CV
        </a>
      </div>
    </nav>
  );
}