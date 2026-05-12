"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "/#features", id: "features" },
  { label: "Services", href: "/#services", id: "services" },
  { label: "Team", href: "/#team", id: "team" },
  { label: "Testimonials", href: "/#testimonials", id: "testimonials" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 60) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-500 ease-in-out ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 h-[68px]">

          {/* Logo */}
          <a href="#" aria-label="Denlux Dental home" className="flex-shrink-0">
            <Image
              src="/Final logo 2.png"
              alt="Denlux Dental logo"
              width={110}
              height={36}
              className="h-10 w-auto" //h-8
              priority
            />
          </a>

          {/* ── Nav island (desktop) ─────────────────────────────── */}
          <nav
            className="hidden md:flex items-center bg-white border border-gray-200 rounded-full p-[5px] gap-[3px] shadow-[0_1px_6px_rgba(0,0,0,0.08)]"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`
                    px-4 py-[7px] rounded-full
                    text-[0.8125rem] font-medium
                    transition-all duration-200 cursor-pointer whitespace-nowrap
                    ${isActive
                      ? "bg-muted-foreground text-white"
                      : "text-muted-foreground hover:text-foreground hover:bg-gray-100/70"
                    }
                  `}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/contact"
              className="
                inline-flex items-center h-9 px-5
                bg-muted-foreground text-white
                text-[0.8rem] font-semibold rounded-none
                transition-all duration-150
                hover:bg-foreground
              "
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] cursor-pointer"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={`block h-[1.5px] w-[18px] bg-foreground origin-center transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.25px]" : ""}`} />
            <span className={`block h-[1.5px] bg-foreground origin-center transition-all duration-300    ${mobileOpen ? "w-0 opacity-0" : "w-[18px] opacity-100"}`} />
            <span className={`block h-[1.5px] w-[18px] bg-foreground origin-center transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.25px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[68px]" />

      {/* ── Mobile nav ──────────────────────────────────────────── */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden bg-background
          flex flex-col pt-[68px]
          transition-all duration-300
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <nav className="flex flex-col px-6 border-t border-border" aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                flex items-center py-4
                text-[1rem] font-medium
                border-b border-border last:border-0
                transition-all duration-200
                ${active === link.id ? "text-foreground" : "text-muted-foreground"}
              `}
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateX(0)" : "translateX(-10px)",
                transition: `color 200ms, transform 280ms ${50 + i * 35}ms, opacity 280ms ${50 + i * 35}ms`,
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div
          className="px-6 mt-6 flex flex-col gap-3"
          style={{
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? "translateY(0)" : "translateY(10px)",
            transition: `opacity 280ms ${50 + navLinks.length * 35}ms, transform 280ms ${50 + navLinks.length * 35}ms`,
          }}
        >
          <a
            href="/contact"
            className="w-full h-12 flex items-center justify-center bg-gray-900 text-white text-sm font-semibold rounded-none"
            onClick={() => setMobileOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      </div>
    </>
  );
}
