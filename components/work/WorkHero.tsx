'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const stats = [
  {
    number: '150+',
    label: 'Projects Delivered',
  },
  {
    number: '25+',
    label: 'Industries',
  },
  {
    number: '95%',
    label: 'Client Satisfaction',
  },
  {
    number: '14+',
    label: 'Years Experience',
  },
];

export default function WorkHero() {
  return (
    <section className="relative overflow-hidden bg-[#070B14]">

      {/* Background Glow */}

      {/* Background Image */}

<div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/workheader.png')",
  }}
/>

{/* Dark Overlay */}
<div className="absolute inset-0 bg-[#050816]/50" />

{/* Blue + Cherry Overlay */}
<div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/10 via-transparent to-[#9B1C31]/15" />

{/* Grid */}
<div
  className="absolute inset-0 opacity-[0.02]"
  style={{
    backgroundImage: `
      linear-gradient(to right,#ffffff 1px,transparent 1px),
      linear-gradient(to bottom,#ffffff 1px,transparent 1px)
    `,
    backgroundSize: "48px 48px",
  }}
/>

     <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-4xl text-center"
        >

          {/* Badge */}

          <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white px-5 py-2">

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB]">
              OUR WORK
            </span>

          </div>

          {/* Heading */}

         <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] text-white md:text-6xl">

            Real products,
            <br />
            real outcomes.

          </h1>

          {/* Subtitle */}

         <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
            A sample of engagements across industries—
            each led by senior engineers with direct
            accountability for measurable business outcomes.

          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

            <button className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5text-base font-bold text-black transition hover:scale-105">
 
              View Case Studies

              <ArrowRight
                className="ml-2"
                size={18}
              />

            </button>

            <button className="inline-flex items-center justify-center rounded-full border border-white/20 bg-[#9B1C31] px-8 py-4 text-base font-bold text-white transition hover:bg-[#B3203A]">

              Book Discovery Call

            </button>

          </div>

        </motion.div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: .8,
            delay: .2,
          }}
          className="mt-20 grid grid-cols-2 gap-6 border-t border-white/10 pt-12 md:grid-cols-4"
        >

          {stats.map((item) => (

            <div
              key={item.label}
              className="text-center"
            >

<h3 className="bg-gradient-to-b from-[#C62845] to-[#9B1C31] bg-clip-text text-6xl font-white tracking-tight text-transparent">
  {item.number}
</h3>

              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white">

                {item.label}

              </p>

            </div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}