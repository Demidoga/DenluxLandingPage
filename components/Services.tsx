"use client";

import { useEffect, useRef } from "react";

const categories = [
  {
    title: "General Dentistry",
    description: "Comprehensive treatments to restore and maintain your dental health.",
    items: [
      { name: "Fillings", detail: "Composite restorations" },
      { name: "Crowns", detail: "Porcelain caps" },
      { name: "Implants", detail: "Titanium replacements" },
      { name: "Root Canals", detail: "Nerve therapy" },
    ],
  },
  {
    title: "Cosmetic Procedures",
    description: "Enhance your smile with our range of aesthetic dental treatments.",
    items: [
      { name: "Whitening", detail: "In-office brightening" },
      { name: "Scaling", detail: "Tartar removal" },
      { name: "Veneers", detail: "Porcelain overlays" },
    ],
  },
  {
    title: "Preventive Care",
    description: "Regular care to keep your teeth and gums healthy for life.",
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
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="section-padding bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Services & Specialized Care</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Advanced dental solutions<br />for every patient
            </h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-xs">
            <p className="text-sm text-muted-foreground leading-relaxed">
              We provide comprehensive care using the latest technology and clinical excellence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-border">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="reveal group p-8 lg:p-12 border-r border-b border-border flex flex-col hover:bg-surface transition-colors duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-12">
                <span className="text-xs font-mono text-muted-foreground bg-surface px-2 py-1 border border-border">0{i + 1}</span>
              </div>
              
              <div className="mb-12">
                <h3 className="text-xl font-bold text-foreground mb-4 tracking-tight">{cat.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{cat.description}</p>
              </div>

              <div className="mt-auto space-y-6">
                <div className="h-[1px] w-full bg-border" />
                <div className="grid grid-cols-1 gap-4">
                  {cat.items.map((item, j) => (
                    <div key={j} className="flex items-center group/item justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground group-hover/item:text-accent-blue transition-colors">{item.name}</span>
                        <span className="text-[11px] uppercase tracking-wider text-muted-foreground/60 mt-0.5">{item.detail}</span>
                      </div>
                      <svg 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        className="w-3 h-3 text-muted-foreground opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
