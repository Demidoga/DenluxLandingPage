"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    lines: ["+92 333 5247468", "+92 325 4682038"],
    href: "tel:+923335247468",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@denluxdental.com"],
    href: "mailto:info@denluxdental.com",
  },
  {
    icon: MapPin,
    label: "Address",
    lines: [
      "Gulf Star Heights, Umer Block,",
      "Paris City Road, Street No. 3,",
      "H-13, Islamabad",
    ],
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Hours",
    lines: ["Mon – Sat  ·  10:00 AM – 8:00 PM", "Walk-ins Welcome"],
    href: null,
  },
];

const services = [
  "General Dentistry",
  "Teeth Cleaning & Scaling",
  "Teeth Whitening",
  "Dental Implants",
  "Root Canal Treatment",
  "Orthodontics / Braces",
  "Cosmetic Procedures",
  "Emergency Care",
  "Other",
];

export default function ContactPage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main ref={sectionRef}>
        {/* ── Page Hero ── */}
        <section className="bg-foreground pt-40 pb-20 px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-8 animate-fade-in-up">
              Denlux Dental Clinic
            </p>
            <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tighter animate-fade-in-up animate-delay-100">
              GET IN<br />
              <span className="text-white/25">TOUCH</span>
            </h1>
            <p className="mt-8 max-w-lg text-base text-white/50 leading-relaxed animate-fade-in-up animate-delay-200">
              Book your appointment, ask a question, or simply say hello. Our
              team responds within one business day.
            </p>
          </div>
        </section>

        {/* ── Main Content ── */}
        <section className="section-padding bg-white border-t border-border">
          <div className="max-w-7xl mx-auto px-0 sm:px-2">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

              {/* ── Left: info ── */}
              <div className="lg:col-span-2 flex flex-col gap-10">
                <div className="reveal">
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue mb-5">
                    Contact Information
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground leading-[1.1]">
                    We&rsquo;re here<br />when you need us
                  </h2>
                </div>

                <ul className="flex flex-col gap-8">
                  {contactDetails.map(({ icon: Icon, label, lines, href }, i) => (
                    <li
                      key={label}
                      className="reveal flex items-start gap-5"
                      style={{ transitionDelay: `${i * 80}ms` }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-none bg-surface border border-border flex items-center justify-center">
                        <Icon className="w-4 h-4 text-accent-blue" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted mb-1.5">
                          {label}
                        </p>
                        {lines.map((line, j) =>
                          href && j === 0 ? (
                            <a
                              key={j}
                              href={href}
                              className="block text-sm text-foreground hover:text-accent-blue transition-colors leading-relaxed"
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={j} className="text-sm text-foreground leading-relaxed">
                              {line}
                            </p>
                          )
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Emergency note */}
                <div className="reveal border-l-2 border-accent-blue pl-5 py-1">
                  <p className="text-xs font-mono uppercase tracking-[0.15em] text-accent-blue mb-1">
                    Dental Emergency?
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Call us directly for same-day emergency care. We keep slots
                    open for urgent cases.
                  </p>
                  <a
                    href="tel:+923335247468"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-foreground hover:text-accent-blue transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" strokeWidth={2} />
                    +92 333 5247468
                  </a>
                </div>
              </div>

              {/* ── Right: form ── */}
              <div className="lg:col-span-3 reveal">
                <div className="border border-border p-8 lg:p-12">
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted mb-8">
                    Appointment Request
                  </p>

                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col gap-6"
                  >
                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">
                          Full Name <span className="text-accent-blue">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ahmed Khan"
                          className="h-11 px-4 border border-border bg-surface text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20 transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">
                          Phone <span className="text-accent-blue">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+92 300 0000000"
                          className="h-11 px-4 border border-border bg-surface text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="h-11 px-4 border border-border bg-surface text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20 transition-all"
                      />
                    </div>

                    {/* Service + Preferred Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">
                          Service Needed
                        </label>
                        <select
                          className="h-11 px-4 border border-border bg-surface text-sm text-foreground focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20 transition-all appearance-none cursor-pointer"
                          defaultValue=""
                        >
                          <option value="" disabled>Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          className="h-11 px-4 border border-border bg-surface text-sm text-foreground focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">
                        Message / Concerns
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your dental concern or any questions you have…"
                        className="px-4 py-3 border border-border bg-surface text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20 transition-all resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                      <p className="text-xs text-muted leading-relaxed max-w-xs">
                        We&rsquo;ll confirm your appointment via phone within 24 hours.
                      </p>
                      <Button
                        type="submit"
                        variant="accent"
                        size="lg"
                        className="rounded-none h-12 px-10 text-sm font-semibold shrink-0"
                      >
                        Send Request <ArrowRight className="size-4 ml-1" />
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Map placeholder ── */}
        <section className="reveal bg-surface border-t border-border h-80 flex items-center justify-center overflow-hidden relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.9!2d73.0!3d33.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQyJzAwLjAiTiA3M8KwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
            className="absolute inset-0 w-full h-full grayscale opacity-60"
            style={{ border: 0, filter: "grayscale(1) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Denlux Dental location"
          />
          <div className="relative z-10 text-center px-6">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/60 mb-2">
              Find Us At
            </p>
            <p className="text-sm font-medium text-foreground">
              Gulf Star Heights, Umer Block, Paris City Road, Street No. 3, H-13, Islamabad
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-xs font-mono uppercase tracking-[0.15em] text-accent-blue hover:underline"
            >
              Open in Google Maps <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
