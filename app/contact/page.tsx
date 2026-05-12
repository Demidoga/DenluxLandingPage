"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Send } from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    label: "Address",
    value: "Gulf Star Heights, H-13",
    detail: "Umer Block, Paris City Rd, Islamabad",
    href: "https://maps.app.goo.gl/HDHXZ8q8stEBqmiP6",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@denluxdental.com",
    detail: "We respond within 24 hours",
    href: "mailto:info@denluxdental.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 333 524 7468",
    detail: "Mon – Sat, 10 AM – 8 ",
    href: "tel:+923335247468",
  },
];

export default function ContactPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => {
      setFormState("sent");
      setTimeout(() => setFormState("idle"), 3000);
    }, 1200);
  };

  return (
    <>
      <Header />
      <main ref={sectionRef} className="bg-background">
        {/* ── Hero strip ──────────────────────────────────────── */}
        <section className="pt-12 pb-10 md:pt-16 md:pb-12 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto reveal">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue mb-5">
              Get in Touch
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h1 className="font-sans text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-[1.1]">
                We&rsquo;d love to
                <br />
                hear from you
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs md:pb-1">
                Whether it&rsquo;s a question, appointment, or just a friendly hello
                — reach out anytime.
              </p>
            </div>
          </div>
        </section>

        {/* ── Info cards ──────────────────────────────────────── */}
        <section className="px-6 lg:px-8 pb-10 md:pb-14">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-px bg-border">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <a
                  key={i}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="reveal group relative bg-background p-8 cursor-pointer
                    transition-all duration-500 ease-out
                    hover:bg-foreground"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Icon */}
                  <div className="w-11 h-11 border border-border flex items-center justify-center mb-6
                    transition-all duration-500
                    group-hover:border-white/30 group-hover:bg-white/10">
                    <Icon
                      className="w-[18px] h-[18px] text-muted transition-all duration-500
                        group-hover:text-white group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Label */}
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted mb-2
                    transition-colors duration-500 group-hover:text-white/40">
                    {card.label}
                  </p>

                  {/* Value */}
                  <p className="text-[0.9375rem] font-semibold text-foreground leading-snug mb-1.5
                    transition-colors duration-500 group-hover:text-white">
                    {card.value}
                  </p>

                  {/* Detail */}
                  <p className="text-xs text-muted leading-relaxed
                    transition-colors duration-500 group-hover:text-white/45">
                    {card.detail}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-blue
                    transition-all duration-400 ease-out group-hover:w-full" />
                </a>
              );
            })}
          </div>
        </section>

        {/* ── Contact form section ────────────────────────────── */}
        <section className="px-6 lg:px-8 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="reveal border border-border overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">

                {/* ── Left: brand panel ─────────────────────── */}
                <div className="lg:col-span-5 p-10 lg:p-14 flex flex-col items-center justify-center bg-foreground text-white relative overflow-hidden lg:border-r border-white/6">
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <Image
                      src="/Final logo.png"
                      alt="Denlux Dental logo"
                      width={220}
                      height={74}
                      className="h-16 lg:h-20 w-auto mb-8"
                    />

                    <div className="w-8 h-px bg-white/15 mb-6" />

                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/35">
                      Precision Dentistry
                    </p>
                  </div>
                </div>

                {/* ── Right: contact form ───────────────────── */}
                <div className="lg:col-span-7 p-8 lg:p-12 bg-background">
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Send us a message
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      All fields are required unless marked optional.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-[11px] font-mono uppercase tracking-[0.12em] text-muted-foreground mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your name"
                          className="w-full h-11 px-4 text-sm text-foreground bg-background border border-border
                            placeholder:text-muted/60
                            transition-all duration-200
                            focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/10"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-[11px] font-mono uppercase tracking-[0.12em] text-muted-foreground mb-2"
                        >
                          Email
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className="w-full h-11 px-4 text-sm text-foreground bg-background border border-border
                            placeholder:text-muted/60
                            transition-all duration-200
                            focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/10"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-[11px] font-mono uppercase tracking-[0.12em] text-muted-foreground mb-2"
                      >
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+92 3XX XXXXXXX"
                        className="w-full h-11 px-4 text-sm text-foreground bg-background border border-border
                          placeholder:text-muted/60
                          transition-all duration-200
                          focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/10"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-[11px] font-mono uppercase tracking-[0.12em] text-muted-foreground mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 text-sm text-foreground bg-background border border-border resize-none
                          placeholder:text-muted/60
                          transition-all duration-200
                          focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/10"
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex items-center gap-4 pt-1">
                      <Button
                        type="submit"
                        variant="accent"
                        disabled={formState !== "idle"}
                        className="rounded-none h-11 px-8 text-[0.8125rem] font-semibold tracking-wide
                          transition-all duration-200 active:scale-[0.97]
                          disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {formState === "idle" && (
                          <>
                            Send Message
                            <Send className="ml-2 w-3.5 h-3.5" />
                          </>
                        )}
                        {formState === "sending" && (
                          <span className="flex items-center gap-2">
                            <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </span>
                        )}
                        {formState === "sent" && "Sent successfully"}
                      </Button>
                      {formState === "sent" && (
                        <p className="text-xs text-emerald-600 font-medium animate-fade-in-up">
                          We&rsquo;ll get back to you shortly.
                        </p>
                      )}
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
