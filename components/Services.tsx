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
    <section ref={sectionRef} id="services" className="section-padding bg-surface flex flex-col items-center">
      <div className="max-w-7xl mx-auto">
        
        <div className="max-w-2xl mx-auto text-center mb-10 reveal">
          <p className="text-sm uppercase tracking-[0.15em] text-muted mb-4">Our services</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Complete dental care<br />under one roof
          </h2>
        </div>

        <div className="grid grid-cols-1 border border-border rounded-2xl md:grid-cols-3 gap-0 transition-all duration-300">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="reveal group bg-white  p-12 lg:p-16 flex flex-col text-center items-center hover:border-foreground/20 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-xs font-mono text-muted mb-6">0{i + 1}</span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{cat.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-10 max-w-xs mx-auto">{cat.description}</p>

              <div className="mt-auto w-full flex flex-col gap-5">
                {cat.items.map((item, j) => (
                  <div key={j} className="flex flex-col items-center justify-center">
                    <span className="text-[15px] font-medium text-foreground">{item.name}</span>
                    <span className="text-xs text-muted mt-1">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
