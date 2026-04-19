"use client";

import { useEffect, useRef } from "react";

export default function CTA() {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="section-padding bg-foreground"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="reveal">
          <p className="text-sm uppercase tracking-[0.15em] text-white/40 mb-6">
            Ready to get started?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Your healthier smile
            <br />
            begins here
          </h2>
          <p className="mt-6 text-base text-white/60 max-w-lg mx-auto leading-relaxed">
            Schedule your appointment today and experience dental care that puts
            your comfort and health first.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
          <a
            href="tel:+920000000000"
            className="inline-flex items-center px-12 py-5 rounded-full bg-accent-blue text-white text-sm font-medium hover:bg-accent-blue/85 transition-all duration-200"
          >
            Book an appointment
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="tel:+920000000000"
            className="inline-flex items-center px-12 py-5 rounded-full border border-white/20 text-white text-sm font-medium hover:border-accent-blue/40 hover:bg-accent-blue/10 transition-all duration-200"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call us directly
          </a>
        </div>

        <p className="mt-10 text-xs text-white/30 reveal">
          Mon — Sat &middot; 9:00 AM — 8:00 PM &middot; Walk-ins welcome
        </p>
      </div>
    </section>
  );
}
