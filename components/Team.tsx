"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. Ahmed Khan",
    title: "BDS, FCPS (Operative Dentistry)",
    bio: "With over 12 years of clinical experience, Dr. Khan specializes in restorative and cosmetic dentistry. He is committed to delivering precise, patient-centered care using the latest techniques.",
    image: "/doc2.png",
  },
  {
    name: "Dr. Sara Malik",
    title: "BDS, MSc (Prosthodontics)",
    bio: "Dr. Malik brings 10 years of expertise in prosthodontic treatments and preventive dental care. She focuses on creating natural, lasting results with a gentle approach.",
    image: "/doc1.png",
  },
];

export default function Team() {
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
    <section ref={sectionRef} id="team" className="section-padding bg-white flex flex-col items-center">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-20 reveal">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue mb-5">
            Meet the team
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-[1.05]">
            Experienced hands,
            <br />
            compassionate care
          </h2>
        </div>

        {/* Doctor cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className="reveal group"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
                {/* Portrait */}
                <div className="relative w-full sm:w-48 lg:w-56 flex-shrink-0 aspect-[3/4] rounded-2xl overflow-hidden  bg-transparent">
                  <Image
                    src={doc.image}
                    alt={`Portrait of ${doc.name}`}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, 224px"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-lg font-semibold text-foreground">
                    {doc.name}
                  </h3>
                  <p className="text-sm text-muted mt-1 font-mono">
                    {doc.title}
                  </p>
                  <div className="w-8 h-px bg-border my-4" />
                  <p className="text-sm text-muted leading-relaxed">
                    {doc.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
