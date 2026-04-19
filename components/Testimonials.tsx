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
      className="section-padding bg-background border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 reveal">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Patient Experiences</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Trusted by patients,<br />proven by clinical results
            </h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-xs">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Real stories from patients who have experienced our commitment to precision.
            </p>
          </div>
        </div>

        {/* Testimonial cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-border reveal">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`p-10 lg:p-14 border-r border-b transition-all duration-300 cursor-pointer ${
                activeIndex === i
                  ? "bg-foreground text-white border-foreground"
                  : "bg-white border-border hover:bg-surface"
              }`}
              onClick={() => setActiveIndex(i)}
              role="button"
              tabIndex={0}
              aria-label={`Testimonial from ${t.name}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActiveIndex(i);
              }}
            >
              <div className="flex items-center gap-1 mb-8">
                {[...Array(5)].map((_, s) => (
                  <svg
                    key={s}
                    className={`w-3 h-3 ${
                      activeIndex === i
                        ? "text-accent-blue"
                        : "text-foreground"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p
                className={`text-lg font-medium leading-relaxed italic ${
                  activeIndex === i ? "text-white/90" : "text-foreground"
                }`}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              
              <div className="mt-10 flex items-center justify-between border-t pt-8 border-border/10">
                <div>
                  <p
                    className={`text-sm font-bold uppercase tracking-widest ${
                      activeIndex === i ? "text-white" : "text-foreground"
                    }`}
                  >
                    {t.name}
                  </p>
                  <p
                    className={`text-[11px] font-mono mt-1 uppercase tracking-wider ${
                      activeIndex === i ? "text-white/50" : "text-muted-foreground"
                    }`}
                  >
                    Treatment: {t.treatment}
                  </p>
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
