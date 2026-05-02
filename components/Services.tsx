"use client";

import { useEffect, useRef } from "react";

const categories = [
  {
    title: "General Dentistry",
    description: "Comprehensive treatments to restore and maintain your dental health with clinical precision.",
    items: [
      { name: "Fillings", detail: "Composite restorations" },
      { name: "Crowns", detail: "Porcelain caps" },
      { name: "Implants", detail: "Titanium replacements" },
      { name: "Root Canals", detail: "Nerve therapy" },
    ],
  },
  {
    title: "Cosmetic Procedures",
    description: "Enhance your smile with our range of aesthetic dental treatments designed for lasting results.",
    items: [
      { name: "Whitening", detail: "In-office brightening" },
      { name: "Scaling", detail: "Tartar removal" },
      { name: "Veneers", detail: "Porcelain overlays" },
    ],
  },
  {
    title: "Preventive Care",
    description: "Regular care to keep your teeth and gums healthy for life — the foundation of great oral health.",
    items: [
      { name: "Cleaning", detail: "Hygiene maintenance" },
      { name: "Exams", detail: "Oral evaluations" },
      { name: "X-Rays", detail: "Digital imaging" },
    ],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="section-padding bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue mb-5">
              Services & Specialized Care
            </p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.0]">
              Advanced dental<br />solutions for<br className="sm:hidden" />{" "}
              every patient
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-sm text-muted-foreground leading-relaxed max-w-xs">
            We provide comprehensive care using the latest technology and clinical excellence.
          </p>
        </div>

        {/* Service rows */}
        <div className="border-t border-border">
          {categories.map((cat, i) => {
            const isDark = i === 1;
            return (
              <div
                key={i}
                className={`reveal group border-b transition-all duration-300 ${
                  isDark
                    ? "bg-foreground border-foreground"
                    : "border-border hover:bg-accent-blue-soft"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">

                  {/* Left panel */}
                  <div
                    className={`lg:col-span-5 p-8 lg:p-14 relative overflow-hidden lg:border-r ${
                      isDark ? "border-white/10" : "border-border"
                    }`}
                  >
                    {/* Watermark number */}
                    <span
                      className={`absolute -top-6 right-0 font-display italic font-bold select-none pointer-events-none leading-none text-[160px] ${
                        isDark
                          ? "text-white/[0.04]"
                          : "text-accent-blue/[0.08] group-hover:text-accent-blue/[0.14]"
                      } transition-colors duration-500`}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative z-10">
                      <span
                        className={`inline-block text-[10px] font-mono uppercase tracking-[0.25em] mb-6 px-2.5 py-1 border ${
                          isDark
                            ? "text-accent-blue border-accent-blue/30 bg-accent-blue/10"
                            : "text-accent-blue border-accent-blue/25 bg-accent-blue/[0.06]"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <h3
                        className={`font-display text-3xl lg:text-[2.25rem] font-semibold tracking-tight leading-[1.1] mb-4 ${
                          isDark ? "text-white" : "text-foreground"
                        }`}
                      >
                        {cat.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed ${
                          isDark ? "text-white/50" : "text-muted-foreground"
                        }`}
                      >
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Right panel: service items */}
                  <div className="lg:col-span-7 p-8 lg:p-14 flex items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7 w-full">
                      {cat.items.map((item, j) => (
                        <div key={j} className="flex items-start gap-3.5 group/item">
                          <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                          <div>
                            <span
                              className={`block text-[15px] font-semibold leading-snug ${
                                isDark ? "text-white" : "text-foreground"
                              }`}
                            >
                              {item.name}
                            </span>
                            <span
                              className={`block text-[11px] font-mono uppercase tracking-wider mt-1 ${
                                isDark
                                  ? "text-white/35"
                                  : "text-muted-foreground/70"
                              }`}
                            >
                              {item.detail}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
