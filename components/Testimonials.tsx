"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Haris Akhtar",
    initials: "HA",
    text: "I had been putting off a root canal for months. Dr. Khan made the entire process painless and explained every step clearly. The clinic is spotless and the staff is incredibly professional.",
    treatment: "Root Canal",
    rating: 5,
  },
  {
    name: "Fatima Zahra",
    initials: "FZ",
    text: "Dr. Malik did an incredible job with my veneers. They look completely natural and I finally feel confident about my smile. The attention to detail here is something I haven't found anywhere else.",
    treatment: "Veneers",
    rating: 5,
  },
  {
    name: "Omar Farooq",
    initials: "OF",
    text: "Brought my entire family here for routine checkups. The digital X-ray system gave us immediate results and the doctors took time to explain everything. Highly recommend for families.",
    treatment: "Family Checkup",
    rating: 5,
  },
  {
    name: "Ayesha Noor",
    initials: "AN",
    text: "The teeth whitening results exceeded my expectations. The clinic uses modern equipment and the environment feels safe and hygienic. I've recommended Denlux to all my colleagues.",
    treatment: "Whitening",
    rating: 5,
  },
  {
    name: "Bilal Shahid",
    initials: "BS",
    text: "After years of avoiding the dentist, I finally found a clinic I trust. The scaling procedure was thorough and completely comfortable. My gums have never felt healthier.",
    treatment: "Scaling",
    rating: 5,
  },
  {
    name: "Sana Riaz",
    initials: "SR",
    text: "Dr. Khan replaced my old filling with a composite that blends in perfectly. You genuinely cannot tell it's there. The precision and care here sets a new standard.",
    treatment: "Composite Filling",
    rating: 5,
  },
  {
    name: "Kamran Javed",
    initials: "KJ",
    text: "The implant procedure was smoother than I expected. Detailed consultation, zero complications, and exceptional follow-up care. Worth every rupee.",
    treatment: "Dental Implant",
    rating: 5,
  },
  {
    name: "Mehreen Asif",
    initials: "MA",
    text: "I came in for a routine exam and left genuinely impressed. The team identified an issue early and laid out all my options transparently. This is how dentistry should be done.",
    treatment: "Dental Exam",
    rating: 4,
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-3 h-3 ${filled ? "text-accent-blue" : "text-border"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function ReviewCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="testimonial-card group shrink-0 w-[320px] sm:w-[360px] mx-6 sm:mx-8">
      <div className="relative h-full p-8 border border-border bg-background shadow-[4px_4px_0_0_rgba(0,0,0,0.06)] transition-all duration-500 hover:bg-foreground hover:border-foreground">
        {/* Watermark quote */}
        <span
          className="absolute -top-2 right-3 font-sans font-black text-[120px] leading-none select-none pointer-events-none text-accent-blue/[0.07] group-hover:text-white/4 transition-colors duration-500"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <div className="relative z-10 flex flex-col h-full">
          {/* Quote */}
          <p className="text-[0.875rem] leading-[1.6] mb-6 flex-1 text-muted-foreground group-hover:text-white/70 transition-colors duration-500">
            {testimonial.text}
          </p>

          {/* Author, Treatment, & Stars */}
          <div className="flex items-center justify-between gap-2.5 pt-6 border-t border-border group-hover:border-white/10 transition-colors duration-500">
            <div className="flex items-center gap-2.5 min-w-0">

              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground group-hover:text-white transition-colors duration-500 leading-tight">
                  {testimonial.name}
                </p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground group-hover:text-white/40 transition-colors duration-500 leading-tight">
                  {testimonial.treatment}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-0.5 shrink-0">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} filled={i < testimonial.rating} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
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
      id="testimonials"
      className="section-padding bg-background border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 reveal">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue mb-5">
              Patient Experiences
            </p>
            <h2 className="font-sans text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-[1.1]">
              Trusted by patients,
              <br />
              proven by clinical results
            </h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-xs">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Real stories from patients who have experienced our commitment to
              precision.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="reveal">
        <div className="testimonial-marquee-track flex py-1">
          {testimonials.map((t, i) => (
            <ReviewCard key={`a-${i}`} testimonial={t} />
          ))}
          {testimonials.map((t, i) => (
            <ReviewCard key={`b-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
