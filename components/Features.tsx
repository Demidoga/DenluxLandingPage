"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BGPattern } from "@/components/ui/bg-pattern";

const featureImages = [
  { src: "/drill.webp", alt: "Dental handpiece illustration" },
  { src: "/tools.webp", alt: "Dental tools and instruments" },
];

const FADE_DURATION = 2000; // ms — must match CSS transition duration
const DISPLAY_DURATION = 2000; // ms — how long each image stays fully visible

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
  const [activeImage, setActiveImage] = useState(0);
  const [phase, setPhase] = useState<"visible" | "fading-out" | "fading-in">("visible");

  // Scroll reveal observer
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

  // Sequential fade: visible → fade-out → switch image → fade-in → visible
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "visible") {
      timeout = setTimeout(() => setPhase("fading-out"), DISPLAY_DURATION);
    } else if (phase === "fading-out") {
      timeout = setTimeout(() => {
        setActiveImage((prev) => (prev + 1) % featureImages.length);
        setPhase("fading-in");
      }, FADE_DURATION);
    } else if (phase === "fading-in") {
      timeout = setTimeout(() => setPhase("visible"), FADE_DURATION);
    }

    return () => clearTimeout(timeout);
  }, [phase]);

  // Determine opacity for a given image index
  const getImageOpacity = (index: number) => {
    if (index !== activeImage) return "opacity-0";
    if (phase === "fading-out") return "opacity-0";
    return "opacity-100";
  };

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative bg-white overflow-hidden min-h-[720px]"
    >
      {/* Background images — positioned right, behind content */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute top-0 right-0 w-[55%] h-full">
          {featureImages.map((img, i) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              fill
              className={`object-contain object-right transition-opacity duration-2000 ease-in-out ${getImageOpacity(i)}`}
              sizes="55vw"
              priority={i === 0}
            />
          ))}
        </div>
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-45% to-transparent" />
      </div>

      <BGPattern
        variant="grid"
        mask="fade-edges"
        size={42}
        aria-hidden="true"
        className="pointer-events-none opacity-6 z-0 max-w-4xl max-h-xl left-1/2 -translate-x-1/2"
      />

      {/* Content — left-aligned, above the image */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center py-20 px-6 lg:py-28 lg:pl-8 lg:pr-16 lg:max-w-[55%]">
          {/* Section header */}
          <div className="mb-14 reveal">
            <p className="text-xs uppercase tracking-[0.2em] text-accent-blue font-mono mb-5">
              Why choose us
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-[1.05]">
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
                className="reveal group flex items-start gap-5 py-6 border-t border-border last:border-b hover:bg-accent-blue-soft transition-colors duration-200 cursor-default -mx-6 px-6 lg:-mx-8 lg:px-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-xs font-mono text-accent-blue/50 group-hover:text-accent-blue mt-1 shrink-0 w-6 transition-colors duration-200">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5 group-hover:text-accent-blue transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile image — sequential fade on small screens too */}
      <div className="relative h-[400px] lg:hidden reveal">
        {featureImages.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            className={`object-contain object-center transition-opacity duration-2000 ease-in-out ${getImageOpacity(i)}`}
            sizes="100vw"
          />
        ))}
      </div>
    </section>
  );
}

