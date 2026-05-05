"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

  const movement = scrollY * 1.2;
  const opacity = Math.max(1 - scrollY / (viewportHeight || 1000), 0);
  const scale = 1 + scrollY / 10000;

  return (
    <div className="relative w-full h-screen overflow-visible">
      <div className="h-screen w-full pointer-events-none" />

      <section
        id="hero"
        className="fixed top-0 left-0 w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-background z-30 shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
        style={{
          transform: `translate3d(0, -${movement}px, 0) scale(${scale})`,
          opacity,
          visibility: opacity <= 0 ? "hidden" : "visible",
          willChange: "transform, opacity",
          pointerEvents: scrollY > 100 ? "none" : "auto",
        }}
      >
        {/* Illustration — full bleed, anchored right */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Denlux dental clinic interior"
            fill
            priority
            className="object-cover object-right"
            sizes="100vw"
          />
          {/* Left-to-right fade so text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-10% to-transparent" />
        </div>

        {/* Thin vertical rule — purely decorative */}
        <div className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 h-32 w-px bg-border hidden lg:block" />

        {/* Main content */}
        <div className="container relative z-10 px-8 md:px-12 mx-auto">
          <div className="max-w-lg">

            {/* Kicker */}
            <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-muted mb-8 animate-fade-in-up">
              Denlux Dental Clinic — Islamabad
            </p>

            {/* Headline */}
            <h1 className="font-sans text-[clamp(3.5rem,8vw,6.5rem)] font-normal text-foreground leading-[0.88] tracking-tight mb-6 animate-fade-in-up animate-delay-100">
              Precision<br />
              <em className="not-italic text-muted-foreground">Dentistry</em>
            </h1>


            {/* Body copy */}
            <p className="text-[0.9375rem] text-muted leading-[1.7] mb-10 animate-fade-in-up animate-delay-200">
              Medical rigour meets uncompromising aesthetic results.
              Engineered for comfort, designed for clarity.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 animate-fade-in-up animate-delay-300">
              <Button
                asChild
                variant="accent"
                size="lg"
                className="rounded-none h-11 px-8 text-[0.8125rem] font-semibold tracking-wide transition-all active:scale-95"
              >
                <a href="/contact" className="flex items-center gap-2">
                  Book Appointment <ArrowRight className="size-3.5" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="rounded-none h-11 px-6 text-[0.8125rem] font-medium tracking-wide text-muted-foreground hover:text-foreground hover:bg-transparent transition-colors"
              >
                <a href="#services">Explore Services</a>
              </Button>
            </div>

          
          </div>
        </div>

        {/* Marquee info strip */}
        <div className="absolute bottom-0 left-0 right-0 h-9 overflow-hidden border-t border-border bg-surface/90 backdrop-blur-sm z-20 flex items-center">
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

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
                    <span className="mx-6 text-[10px] text-border select-none">◆</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mr-2">{item.label}</span>
                    <span className={`font-mono text-[10px] uppercase tracking-[0.15em] ${item.accent ? "text-accent-blue" : "text-foreground/60"}`}>
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
