"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/40 backdrop-blur-md shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 lg:px-0">
        {/* Logo */}

        <a href="#" aria-label="Denlux Dental home">
          <Image
            src={scrolled ? "/Final logo 2.png" : "/Final logo.png"}
            alt="Denlux Dental logo"
            width={140}
            height={48}
            className={`h-10 w-auto transition-all duration-300 `}
            priority
          />
        </a>


        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${scrolled ? "text-muted hover:text-accent-blue" : "text-white/70 hover:text-white"
                }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            variant="accent"
          >
            <a href="#cta">Book Appointment</a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden relative w-6 h-5 flex flex-col justify-between"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-[1.5px] w-full transition-all duration-300 ${scrolled ? "bg-foreground" : "bg-white"
              } ${mobileOpen ? "rotate-45 translate-y-[9px]" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-full transition-all duration-300 ${scrolled ? "bg-foreground" : "bg-white"
              } ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-full transition-all duration-300 ${scrolled ? "bg-foreground" : "bg-white"
              } ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted py-3 border-b border-border last:border-0 hover:text-accent-blue transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="mt-3 w-full"
            size="lg"
            variant="accent"
          >
            <a href="#cta" onClick={() => setMobileOpen(false)}>
              Book Appointment
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
