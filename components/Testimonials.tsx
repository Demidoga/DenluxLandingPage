"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Haris Akhtar",
    text: "I had been putting off a root canal for months. Dr. Khan made the entire process painless and explained every step clearly. The clinic is spotless and the staff is incredibly professional.",
    treatment: "Root Canal",
  },
  {
    name: "Fatima Zahra",
    text: "Dr. Malik did an incredible job with my veneers. They look completely natural and I finally feel confident about my smile. The attention to detail here is something I haven't found anywhere else.",
    treatment: "Veneers",
  },
  {
    name: "Omar Farooq",
    text: "Brought my entire family here for routine checkups. The digital X-ray system gave us immediate results and the doctors took time to explain everything. Highly recommend for families.",
    treatment: "Family Checkup",
  },
  {
    name: "Ayesha Noor",
    text: "The teeth whitening results exceeded my expectations. The clinic uses modern equipment and the environment feels safe and hygienic. I've recommended Denlux to all my colleagues.",
    treatment: "Whitening",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="section-padding bg-surface flex flex-col items-center"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-20 reveal">
          <p className="text-sm uppercase tracking-[0.15em] text-muted mb-4">
            Patient stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Trusted by patients,
            <br />
            proven by results
          </h2>
        </div>

        {/* Testimonial cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`p-12 lg:p-16 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeIndex === i
                  ? "bg-foreground text-white border-foreground"
                  : "bg-white border-border hover:border-foreground/20"
              }`}
              onClick={() => setActiveIndex(i)}
              role="button"
              tabIndex={0}
              aria-label={`Testimonial from ${t.name}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActiveIndex(i);
              }}
            >
              {/* Quote mark */}
              <span
                className={`text-3xl font-serif leading-none ${
                  activeIndex === i ? "text-white/30" : "text-border"
                }`}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p
                className={`text-sm leading-relaxed mt-3 ${
                  activeIndex === i ? "text-white/80" : "text-muted"
                }`}
              >
                {t.text}
              </p>
              <div className="mt-8 flex items-center justify-between">
                <div>
                  <p
                    className={`text-sm font-semibold ${
                      activeIndex === i ? "text-white" : "text-foreground"
                    }`}
                  >
                    {t.name}
                  </p>
                  <p
                    className={`text-xs mt-0.5 ${
                      activeIndex === i ? "text-white/50" : "text-muted"
                    }`}
                  >
                    {t.treatment}
                  </p>
                </div>
                {/* Star rating */}
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, s) => (
                    <svg
                      key={s}
                      className={`w-3.5 h-3.5 ${
                        activeIndex === i
                          ? "text-accent-blue"
                          : "text-foreground/30"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2 mt-8 reveal">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`View testimonial ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === i
                  ? "w-6 h-1.5 bg-accent-blue"
                  : "w-1.5 h-1.5 bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
