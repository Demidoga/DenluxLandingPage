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
      className="section-padding bg-white flex flex-col items-center"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-20 reveal">
          <p className="text-sm uppercase tracking-[0.15em] text-muted mb-4">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Transparent pricing,
            <br />
            no hidden fees
          </h2>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`reveal rounded-2xl p-12 lg:p-16 flex flex-col border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-foreground text-white border-foreground relative"
                  : "bg-white border-border hover:border-foreground/20"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-8 text-xs font-medium px-3 py-1 bg-white text-foreground rounded-full">
                  Recommended
                </span>
              )}

              <span
                className={`text-xs uppercase tracking-[0.15em] ${
                  plan.highlighted ? "text-white/50" : "text-muted"
                }`}
              >
                {plan.name}
              </span>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlighted ? "text-white/50" : "text-muted"
                  }`}
                >
                  {plan.unit}
                </span>
              </div>

              <p
                className={`text-sm mt-3 ${
                  plan.highlighted ? "text-white/60" : "text-muted"
                }`}
              >
                {plan.description}
              </p>

              <div
                className={`w-full h-px my-6 ${
                  plan.highlighted ? "bg-white/20" : "bg-border"
                }`}
              />

              <ul className="flex flex-col gap-4 mb-10">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? "text-white/60" : "text-foreground"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={
                        plan.highlighted ? "text-white/80" : "text-foreground"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.highlighted ? "secondary" : "default"}
                size="lg"
                className="mt-auto w-full"
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
