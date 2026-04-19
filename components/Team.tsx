"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. Hassan Riaz",
    title: [
      "BDS, RDS (BUMDC, PNS Shifa Hospital)",
      "Demonstrator, Armed Forces Institute of Dentistry (AFID, CMH Rawalpindi)"
    ],
    bio: "Specializing in restorative and cosmetic dentistry, Dr. Hassan combines over five years of clinical precision with a dedicated commitment to patient-centered care using the latest dental advancements.",
    image: "/doc2.png",
  },
  {
    name: "Dr. Saad Ahmed",
    title: [
      "BDS (de' Montmorency College of Dentistry)",
      "Demonstrator, Armed Forces Institute of Dentistry (AFID, CMH Rawalpindi)"
    ],
    bio: "With expertise in prosthodontic treatments and preventive dental care, Dr. Saad focuses on achieving natural, lasting results through a meticulous and gentle clinical approach.",
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
    <section ref={sectionRef} id="team" className="section-padding bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 reveal">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Clinical Staff</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Experienced hands,<br />compassionate care
            </h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-xs">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our specialists are recognized leaders in clinical dentistry and restorative surgery.
            </p>
          </div>
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
                <div className="relative w-full sm:w-48 lg:w-56 flex-shrink-0 aspect-[3/4] border border-border overflow-hidden bg-transparent">
                  <Image
                    src={doc.image}
                    alt={`Portrait of ${doc.name}`}
                    fill
                    className="object-cover object-top grayscale transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 224px"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-foreground tracking-tight">
                    {doc.name}
                  </h3>
                  <div className="text-[11px] text-muted-foreground mt-2 font-mono uppercase tracking-widest flex flex-col gap-1 opacity-70">
                    {doc.title.map((line, idx) => (
                      <span key={idx} className="leading-tight">{line}</span>
                    ))}
                  </div>
                  <div className="w-12 h-[1px] bg-border my-6" />
                  <p className="text-[15px] text-muted-foreground leading-relaxed max-w-sm">
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
