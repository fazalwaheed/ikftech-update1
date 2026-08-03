'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { ServiceData } from './types';

export default function ServiceHero({
  service,
}: {
  service: ServiceData;
}) {
  return (
    <section className="relative overflow-hidden bg-[#060B14]">

      {/* Background Image */}
      <Image
        src={service.heroImage}
        alt={service.title}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Blue + Cherry Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/35 via-transparent to-[#9B1C31]/40" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#fff 1px,transparent 1px),
            linear-gradient(to bottom,#fff 1px,transparent 1px)
          `,
          backgroundSize: '45px 45px',
        }}
      />

      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6">

        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >

            <span className="inline-flex rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB]">
              {service.category}
            </span>

            <h1 className="mt-8 text-5xl font-black leading-none tracking-[-0.05em] text-white md:text-7xl">
              {service.title}
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/70">
              {service.subtitle}
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <button className="inline-flex items-center rounded-full bg-[#9B1C31] px-8 py-4 text-base font-bold text-white transition hover:scale-105 hover:bg-[#B3203A]">
                Book Discovery Call
                <ArrowRight className="ml-2" size={18} />
              </button>

              <button className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur">
                <PlayCircle className="mr-2" size={18} />
                Watch Overview
              </button>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="hidden lg:block"
          >

            <div className="relative">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-2xl">

                <Image
                  src={service.heroImage}
                  alt={service.title}
                  width={700}
                  height={500}
                  className="rounded-2xl object-cover"
                />

              </div>

              {/* Floating Card */}

              <div className="absolute -bottom-8 -left-8 rounded-2xl border border-white/10 bg-[#0F172A]/90 p-6 backdrop-blur-xl">

                <p className="text-sm uppercase tracking-widest text-white/40">
                  Delivery
                </p>

                <h3 className="mt-2 text-3xl font-black text-white">
                  {service.stats[0]?.value}
                </h3>

              </div>

              {/* Floating Card */}

              <div className="absolute -right-8 top-10 rounded-2xl border border-white/10 bg-[#9B1C31]/90 p-6 backdrop-blur-xl">

                <p className="text-sm uppercase tracking-widest text-white/60">
                  Success
                </p>

                <h3 className="mt-2 text-3xl font-black text-white">
                  {service.stats[1]?.value}
                </h3>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Stats */}

      <div className="relative border-t border-white/10 bg-black/20 backdrop-blur">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">

          {service.stats.map((item) => (
            <div key={item.label} className="text-center">

              <h3 className="text-5xl font-black text-[#9B1C31]">
                {item.value}
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/60">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}