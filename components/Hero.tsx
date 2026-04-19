"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-black"
    >
      {/* Background image container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Modern dental clinic interior"
          fill
          priority
          className="object-cover object-center opacity-90 grayscale-[0.5]"
          sizes="100vw"
        />
        {/* Gradient Overlay for Readability - Darker on the left where text sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        {/* Subtle radial vignette to pull focus center-left */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,transparent_0%,rgba(0,0,0,0.4)_100%)]" /> */}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 md:px-12 mx-auto">
        <div className="max-w-3xl">
          {/* Clinical Identifier / Kicker */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
            <div className="flex items-center justify-center w-8 h-8 border border-accent-blue/30 bg-accent-blue/10 backdrop-blur-sm">
              <Activity className="size-4 text-accent-blue" />
            </div>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-white/80">
              DENLUX DENTAL CLINIC
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tighter mb-8 animate-fade-in-up animate-delay-100">
            Precision <br />
            <span className="text-white/40">Dentistry.</span>
          </h1>

          <p className="max-w-xl text-lg sm:text-xl text-white/60 leading-relaxed mb-12 animate-fade-in-up animate-delay-200">
            Experience a new standard of oral healthcare where medical rigor meets 
            uncompromising aesthetic results. Engineered for comfort, designed for clarity.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-fade-in-up animate-delay-300">
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

      {/* Aesthetic Technical Detail (Bottom Left) */}
      <div className="absolute bottom-10 left-12 hidden lg:block animate-fade-in-up animate-delay-400">
        <div className="flex flex-col gap-1 text-[10px] font-mono text-white/30 uppercase tracking-widest">
          <span>Coordinates: 40.7128° N, 74.0060° W</span>
          <span>Status: Accept.NewPatient(true)</span>
        </div>
      </div>

      {/* Scroll indicator - Right Aligned for a change */}
      <div className="absolute bottom-10 right-12 flex flex-col items-center gap-4 animate-fade-in-up animate-delay-400">
        <span className="text-[10px] font-mono text-white/40 uppercase [writing-mode:vertical-rl] tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
