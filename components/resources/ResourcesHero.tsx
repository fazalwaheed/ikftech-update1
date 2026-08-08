"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import Reveal from "@/components/Reveal";

type ResourcesHeroProps = {
  badge: string;
  title: string;
  description: string;
  heroImage: string;
  success?: string;
  delivery?: string;
};

export default function ResourcesHero({
  badge,
  title,
  description,
  heroImage,
  success = "99.99%",
  delivery = "150+",
}: ResourcesHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#06142b]">
      {/* =========================================================
          HERO BACKGROUND
          SAME IMAGE AS RIGHT-SIDE IMAGE
      ========================================================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Background image */}
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          aria-hidden="true"
          sizes="100vw"
          className="scale-105 object-cover opacity-45 blur-[2px]"
        />

        {/* Dark readability overlay */}
        <div className="absolute inset-0 bg-[#06142b]/45" />

        {/* Blue → dark → cherry gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(4,43,91,0.72)_0%,rgba(5,18,38,0.58)_48%,rgba(70,0,25,0.72)_100%)]" />

        {/* Left blue glow */}
        <div
          aria-hidden="true"
          className="absolute -left-40 top-10 h-[650px] w-[650px] rounded-full bg-blue-600/25 blur-[140px]"
        />

        {/* Right cherry glow */}
        <div
          aria-hidden="true"
          className="absolute -right-40 top-10 h-[650px] w-[650px] rounded-full bg-red-700/25 blur-[150px]"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-25"
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,102,255,0.22),transparent_38%),radial-gradient(circle_at_82%_50%,rgba(220,0,55,0.22),transparent_40%)]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#06142b] to-transparent" />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="container-x relative z-10">
        <div className="grid min-h-[690px] items-center gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:py-20">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="relative z-20">

            {/* Badge */}
            <Reveal>
              <span className="inline-flex rounded-full border border-white/20 bg-white px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600 shadow-lg">
                {badge}
              </span>
            </Reveal>

            {/* Heading */}
            <Reveal delay={0.08}>
              <h1 className="mt-8 max-w-[650px] text-5xl font-black leading-[0.94] tracking-[-0.045em] text-[#c9002b] sm:text-6xl lg:text-[68px]">
                {title}
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-[620px] text-lg font-medium leading-8 text-blue-100/80">
                {description}
              </p>
            </Reveal>

            {/* Buttons */}
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-5">

                {/* Primary CTA */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[#c9002b] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Book Discovery Call
                  <ArrowUpRight size={18} />
                </Link>

                {/* Secondary CTA */}
                <button
                  type="button"
                  className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current">
                    <Play size={9} fill="currentColor" />
                  </span>

                  Watch Overview
                </button>

              </div>
            </Reveal>
          </div>

          {/* =====================================================
              RIGHT HERO IMAGE
          ===================================================== */}
          <Reveal delay={0.18}>
            <div className="relative mx-auto w-full max-w-[650px]">

              {/* Outer frame */}
              <div className="relative rounded-[28px] border border-white/15 bg-white/[0.08] p-5 shadow-2xl shadow-black/50 backdrop-blur-md">

                {/* Main image */}
                <div className="relative aspect-square overflow-hidden rounded-[20px] bg-black">

                  <Image
                    src={heroImage}
                    alt={title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 600px"
                    className="object-cover"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/20 via-transparent to-red-950/25" />

                  {/* Subtle cinematic glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_35%,rgba(0,0,0,0.28)_100%)]" />
                </div>

                {/* =================================================
                    SUCCESS CARD
                ================================================= */}
                <div className="absolute -right-8 top-10 z-20 rounded-[18px] bg-[#c9002b] px-6 py-5 shadow-xl shadow-red-950/40 sm:-right-10">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/65">
                    Success
                  </p>

                  <p className="mt-2 text-3xl font-black text-white">
                    {success}
                  </p>
                </div>

                {/* =================================================
                    DELIVERY CARD
                ================================================= */}
                <div className="absolute -bottom-8 -left-8 z-20 rounded-[18px] border border-white/15 bg-[#08172c]/95 px-6 py-5 shadow-xl shadow-black/40 backdrop-blur-md sm:-left-10">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/45">
                    Delivery
                  </p>

                  <p className="mt-2 text-3xl font-black text-white">
                    {delivery}
                  </p>
                </div>

              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}