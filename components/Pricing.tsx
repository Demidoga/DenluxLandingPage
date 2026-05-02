"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Checkup",
    price: "2,500",
    unit: "PKR",
    description: "Initial consultation with full oral examination",
    features: [
      "Comprehensive oral exam",
      "Digital X-ray (if needed)",
      "Treatment plan discussion",
      "Hygiene recommendations",
    ],
    highlighted: false,
  },
  {
    name: "Complete Care",
    price: "8,000",
    unit: "PKR",
    description: "Full cleaning, exam, and preventive treatment",
    features: [
      "Everything in Checkup",
      "Professional scaling & cleaning",
      "Fluoride treatment",
      "Follow-up appointment included",
    ],
    highlighted: true,
  },
  {
    name: "Cosmetic Consult",
    price: "5,000",
    unit: "PKR",
    description: "Personalized cosmetic treatment evaluation",
    features: [
      "Smile analysis & assessment",
      "Digital imaging preview",
      "Custom treatment roadmap",
      "Cost estimation for procedures",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="section-padding bg-white border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue mb-5">Investment & Plans</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-[1.05]">
              Transparent pricing,<br />no hidden clinical fees
            </h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-xs">
            <p className="text-sm text-muted-foreground leading-relaxed">
              We believe in honest, upfront pricing for all dental procedures.
            </p>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-border">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`reveal p-8 lg:p-12 flex flex-col border-r border-b transition-all duration-300 ${
                plan.highlighted
                  ? "bg-foreground text-white border-foreground relative"
                  : "bg-white border-border hover:bg-surface"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-8 text-[10px] font-mono uppercase tracking-wider px-3 py-1 bg-accent-blue text-white">
                  Recommended
                </span>
              )}

              <span
                className={`text-[10px] font-mono uppercase tracking-[0.2em] ${
                  plan.highlighted ? "text-white/50" : "text-muted-foreground"
                }`}
              >
                {plan.name}
              </span>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tighter">
                  {plan.price}
                </span>
                <span
                  className={`text-xs font-mono ${
                    plan.highlighted ? "text-white/50" : "text-muted-foreground"
                  }`}
                >
                  {plan.unit}
                </span>
              </div>

              <p
                className={`text-sm mt-4 leading-relaxed ${
                  plan.highlighted ? "text-white/60" : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>

              <div
                className={`w-full h-px my-8 ${
                  plan.highlighted ? "bg-white/10" : "bg-border"
                }`}
              />

              <ul className="flex flex-col gap-4 mb-12">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <svg
                      className={`w-3.5 h-3.5 mt-1 flex-shrink-0 ${
                        plan.highlighted ? "text-accent-blue" : "text-foreground"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span
                      className={
                        plan.highlighted ? "text-white/80" : "text-muted-foreground"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.highlighted ? "accent" : "outline"}
                size="lg"
                className={`mt-auto w-full rounded-none h-12 text-xs font-bold uppercase tracking-widest ${
                  !plan.highlighted ? "border-border hover:bg-foreground hover:text-white" : ""
                }`}
              >
                <a href="#cta">
                  Book Appointment
                </a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted mt-8 reveal">
          Prices are indicative. Final costs depend on individual treatment requirements.
        </p>
      </div>
    </section>
  );
}
