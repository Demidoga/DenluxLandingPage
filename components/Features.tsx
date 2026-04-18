"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const features = [
  {
    title: "State-of-the-Art Equipment",
    description:
      "Our clinic is equipped with the latest dental technology for accurate diagnostics and comfortable treatments.",
  },
  {
    title: "Strict Infection Control",
    description:
      "We follow international infection control standards with strictly hygienic and sterilized environments throughout.",
  },
  {
    title: "Experienced Professionals",
    description:
      "Our team consists of highly qualified dental professionals with years of clinical experience.",
  },
  {
    title: "Digital X-Ray & Imaging",
    description:
      "Modern digital X-ray and imaging systems provide precise evaluation with minimal radiation exposure.",
  },
  {
    title: "Advanced Sterilization",
    description:
      "Dedicated sterilization units ensure complete instrument safety for every single procedure we perform.",
  },
];

export default function Features() {
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
      id="features"
      className="relative bg-white overflow-hidden min-h-[720px]"
    >
      {/* Background image — positioned right, behind content */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute top-0 right-0 w-[55%] h-full">
          <Image
            src="/drill.png"
            alt="Dental handpiece illustration"
            fill
            className="object-contain object-right"
            sizes="55vw"
            priority
          />
        </div>
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-45% to-transparent" />
      </div>

      {/* Content — left-aligned, above the image */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center py-20 px-6 lg:py-28 lg:pl-8 lg:pr-16 lg:max-w-[55%]">
          {/* Section header */}
          <div className="mb-14 reveal">
            <p className="text-sm uppercase tracking-[0.15em] text-muted mb-4">
              Why choose us
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Built around precision
              <br />
              and patient safety
            </h2>
          </div>

          {/* Feature list */}
          <div className="flex flex-col gap-0">
            {features.map((feature, i) => (
              <div
                key={i}
                className="reveal group flex items-start gap-5 py-6 border-t border-border last:border-b transition-colors duration-200"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-xs font-mono text-muted mt-1 shrink-0 w-6">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile image — shown below content on small screens */}
      <div className="relative h-[400px] lg:hidden reveal">
        <Image
          src="/drill.png"
          alt="Dental handpiece illustration"
          fill
          className="object-contain object-center"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
