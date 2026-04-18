import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/hero.png"
        alt="Close-up of a confident smile"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-6 animate-fade-in-up">
          Denlux Dental Clinic
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white leading-[1.05] tracking-tight animate-fade-in-up animate-delay-100">
          Smile <span className="text-white/60">with</span>
          <br />
          <span className="text-white/60">confidence</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
          Expert dental care delivered with precision, comfort, and a commitment
          to your lasting oral health.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="gap-2"
          >
            <a href="#cta">
              Book an appointment <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            <a href="#services">
              View services
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up animate-delay-400">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
