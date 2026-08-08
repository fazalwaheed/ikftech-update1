"use client";

import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-[#06142b]">
      {/* =========================================================
          HERO BACKGROUND
      ========================================================= */}
      <section className="relative min-h-[calc(100vh-88px)] overflow-hidden">
        {/* Background image */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: "url('/images/contact/contact-hero.jpg')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#06142b]/80" />

        {/* Blue → Dark → Cherry gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(4,43,91,0.94)_0%,rgba(5,18,38,0.82)_48%,rgba(70,0,25,0.94)_100%)]" />

        {/* Blue glow */}
        <div
          aria-hidden
          className="absolute -left-40 top-10 h-[650px] w-[650px] rounded-full bg-blue-600/25 blur-[140px]"
        />

        {/* Cherry glow */}
        <div
          aria-hidden
          className="absolute -right-40 top-20 h-[650px] w-[650px] rounded-full bg-red-700/25 blur-[150px]"
        />

        {/* Grid */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.10) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.10) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "56px 56px",
          }}
        />

        {/* Cinematic lighting */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,102,255,0.18),transparent_40%),radial-gradient(circle_at_82%_50%,rgba(220,0,55,0.20),transparent_42%)]"
        />

        {/* =====================================================
            CONTENT
        ===================================================== */}
        <div className="container-x relative z-10">
          <div className="grid min-h-[calc(100vh-88px)] items-center gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20">
            {/* =================================================
                LEFT SIDE
            ================================================= */}
            <div className="relative z-20">
              {/* Badge */}
              <Reveal>
                <span className="inline-flex rounded-full border border-white/20 bg-white px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600">
                  Contact
                </span>
              </Reveal>

              {/* Heading */}
              <Reveal delay={0.08}>
                <h1 className="mt-8 max-w-[650px] text-5xl font-black leading-[0.94] tracking-[-0.045em] text-[#c9002b] sm:text-6xl lg:text-[68px]">
                  Tell us what
                  <br />
                  you&apos;re building.
                </h1>
              </Reveal>

              {/* Description */}
              <Reveal delay={0.16}>
                <p className="mt-8 max-w-[600px] text-lg font-medium leading-8 text-blue-100/75">
                  Share a few details and our team will get back to you within
                  one business day with next steps.
                </p>
              </Reveal>

              {/* Contact information */}
              <Reveal delay={0.24}>
                <div className="mt-10 space-y-5">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-blue-300 backdrop-blur-sm">
                      <Mail size={19} />
                    </span>

                    <div>
                      <p className="text-sm font-bold text-white">Email</p>
                      <p className="mt-1 text-sm text-blue-100/65">
                        hello@novastack.com
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-blue-300 backdrop-blur-sm">
                      <Phone size={19} />
                    </span>

                    <div>
                      <p className="text-sm font-bold text-white">Phone</p>
                      <p className="mt-1 text-sm text-blue-100/65">
                        +1 (555) 010-2030
                      </p>
                    </div>
                  </div>

                  {/* Offices */}
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-blue-300 backdrop-blur-sm">
                      <MapPin size={19} />
                    </span>

                    <div>
                      <p className="text-sm font-bold text-white">Offices</p>
                      <p className="mt-1 text-sm text-blue-100/65">
                        Pakistan · UAE · UK · USA
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Small bottom statement */}
              <Reveal delay={0.32}>
                <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-white/55">
                  <span className="h-2 w-2 rounded-full bg-[#c9002b]" />
                  Let&apos;s build something intelligent together.
                </div>
              </Reveal>
            </div>

            {/* =================================================
                RIGHT SIDE FORM
            ================================================= */}
            <Reveal delay={0.18}>
              <div className="relative mx-auto w-full max-w-[650px]">
                {/* Glow behind card */}
                <div
                  aria-hidden
                  className="absolute -inset-6 rounded-[40px] bg-blue-500/10 blur-3xl"
                />

                {/* Form card */}
                <div className="relative rounded-[28px] border border-white/20 bg-white/[0.96] p-6 shadow-2xl shadow-black/40 sm:p-8 lg:p-9">
                  {/* Card header */}
                  <div className="mb-7">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9002b]">
                          Start a conversation
                        </p>

                        <h2 className="mt-2 text-2xl font-black tracking-tight text-[#08172c]">
                          Tell us about your project
                        </h2>
                      </div>

                      <div className="hidden h-11 w-11 items-center justify-center rounded-full bg-[#c9002b] text-white sm:flex">
                        <ArrowUpRight size={19} />
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      Tell us what you&apos;re building and we&apos;ll help you
                      figure out the right next step.
                    </p>
                  </div>

                  {/* Form */}
                  <form className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-semibold text-[#08172c]">
                          Name
                        </label>

                        <input
                          type="text"
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#08172c] outline-none transition placeholder:text-slate-400 focus:border-[#c9002b] focus:ring-4 focus:ring-red-700/10"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-semibold text-[#08172c]">
                          Email
                        </label>

                        <input
                          type="email"
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#08172c] outline-none transition placeholder:text-slate-400 focus:border-[#c9002b] focus:ring-4 focus:ring-red-700/10"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="text-sm font-semibold text-[#08172c]">
                        Company
                      </label>

                      <input
                        type="text"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#08172c] outline-none transition placeholder:text-slate-400 focus:border-[#c9002b] focus:ring-4 focus:ring-red-700/10"
                        placeholder="Company name"
                      />
                    </div>

                    {/* Project details */}
                    <div>
                      <label className="text-sm font-semibold text-[#08172c]">
                        Project details
                      </label>

                      <textarea
                        rows={5}
                        className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#08172c] outline-none transition placeholder:text-slate-400 focus:border-[#c9002b] focus:ring-4 focus:ring-red-700/10"
                        placeholder="Tell us what you're building..."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#c9002b] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-red-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a80024] hover:shadow-xl"
                    >
                      Send message

                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </button>
                  </form>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}