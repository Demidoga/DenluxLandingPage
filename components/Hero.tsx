"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity } from "lucide-react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const requestRef = useRef<number>(null);

  useEffect(() => {
    setViewportHeight(window.innerHeight);
    
    const handleScroll = () => {
      if (requestRef.current) return;
      
      requestRef.current = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        requestRef.current = null;
      });
    };

    const handleResize = () => setViewportHeight(window.innerHeight);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (requestRef.current) window.cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Curtain Reveal Logic:
  // We move the hero up slightly faster than the scroll (1.2x) to create 
  // the illusion of it being "pulled away" from the content underneath.
  const movement = scrollY * 1.2;
  const opacity = Math.max(1 - scrollY / (viewportHeight || 1000), 0);
  const scale = 1 + scrollY / 10000;

  return (
    <div className="relative w-full h-screen overflow-visible">
      {/* 
        Spacer element that stays in the normal document flow.
        This ensures subsequent content starts at the correct position.
      */}
      <div className="h-screen w-full pointer-events-none" />

      <section
        id="hero"
        className="fixed top-0 left-0 w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-black z-30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        style={{ 
          transform: `translate3d(0, -${movement}px, 0) scale(${scale})`,
          opacity: opacity,
          visibility: opacity <= 0 ? "hidden" : "visible",
          willChange: "transform, opacity",
          // Disable interactions once it starts lifting significantly to allow clicking content "underneath"
          pointerEvents: scrollY > 100 ? "none" : "auto"
        }}
      >
        {/* Background image container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.webp"
            alt="Modern dental clinic interior"
            fill
            priority
            className="object-cover object-center opacity-90 grayscale-[0.5]"
            sizes="100vw"
          />
          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-8 md:px-12 mx-auto">
          <div className="max-w-4xl">
            {/* Clinical Identifier / Kicker */}
            <div className="flex items-center gap-4 mb-10 animate-fade-in-up">
             
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-white/80">
              DENLUX DENTAL CLINIC
            </span>
              </div>
            </div>
{
            // <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold text-white leading-[0.85] tracking-tighter mb-10 animate-fade-in-up animate-delay-100">
            //   CLINICAL<br />
            //   <span className="text-white/40">PRECISSION</span>
            // </h1>
}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tighter mb-8 animate-fade-in-up animate-delay-100">
              PRECISSION <br />
              <span className="text-white/40">DENTISTRY</span>
            </h1>

            <p className="max-w-xl text-lg sm:text-xl text-white/60 leading-relaxed mb-12 animate-fade-in-up animate-delay-200">
              Experience a new standard of oral healthcare where medical rigor meets 
              uncompromising aesthetic results. Engineered for comfort, designed for clarity.
            </p>
            

            {
             // <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 animate-fade-in-up animate-delay-300">
            }
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 animate-fade-in-up animate-delay-300">
              <Button
                asChild
                variant="accent"
                size="lg"
                className="rounded-none h-14 px-10 text-base font-semibold transition-transform active:scale-95"
              >
                <a href="#cta" className="flex items-center gap-2">
                  Book consultation <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none h-14 px-10 text-base font-semibold bg-transparent border-white/20 text-white hover:bg-accent-blue/15 hover:border-accent-blue/40 hover:text-white transition-all active:scale-95"
              >
                <a href="#services">
                  Explore Clinical Services
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Aesthetic Technical Detail (Bottom Left) 
        <div className="absolute bottom-12 left-12 hidden lg:block animate-fade-in-up animate-delay-400">
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-1 text-[9px] font-mono text-white/20 uppercase tracking-widest">
              <span>Coordinates</span>
              <span className="text-white/50">40.7128° N, 74.0060° W</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col gap-1 text-[9px] font-mono text-white/20 uppercase tracking-widest">
              <span>LOCATION</span>
              <span className="text-muted">Gulf Star Heights, Umer Block, Paris City Road, Street No. 3, H-13, Islamabad</span>
            </div>
          </div>
        </div>
        */}
      
        {/* Info Strip */}
        <div className="absolute bottom-0 left-0 right-0 h-9 overflow-hidden border-t border-white/10 bg-black/80 backdrop-blur-sm z-20 flex items-center">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center whitespace-nowrap">
            {[0, 1].map((i) => (
              <span key={i} className="flex items-center">
                {[
                  { label: "LOCATION", value: "Gulf Star Heights, H-13, Islamabad" },
                  { label: "HOURS", value: "Mon – Sat  •  10:00 AM – 8:00 PM" },
                  { label: "EID SPECIAL", value: "Free Consultation + 30% Off — Limited Offer Until Eid ul Adha", accent: true },
                  { label: "CONTACT", value: "+92 333 0000000" },
                  { label: "BOOK", value: "Walk-ins Welcome  •  Appointments Preferred" },
                ].map((item, j) => (
                  <span key={j} className="flex items-center">
                    <span className="mx-6 text-white/20 text-[10px] select-none">◆</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35 mr-2">{item.label}</span>
                    <span className={`font-mono text-[10px] uppercase tracking-[0.15em] ${item.accent ? "text-[#1bc3ea]" : "text-white/60"}`}>
                      {item.value}
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
