'use client';

import { motion } from 'framer-motion';
import {
  Search,
  Lightbulb,
  Code2,
  Rocket,
  BarChart3,
} from 'lucide-react';

const icons = [
  Search,
  Lightbulb,
  Code2,
  Rocket,
  BarChart3,
];

const colors = [
  '#2563EB',
  '#9B1C31',
  '#2563EB',
  '#9B1C31',
  '#2563EB',
];

export default function ServiceProcess({
  process,
}: {
  process: string[];
}) {
  return (
    <section className="bg-[#F8FAFC] py-28">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-[#EEF4FF] px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB]">
            Our Process
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-[-0.04em] text-[#111827]">
            From idea to production.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every project follows a structured delivery framework designed
            for speed, transparency and measurable business outcomes.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Line */}

          <div className="absolute left-0 right-0 top-12 hidden h-1 rounded-full bg-gray-200 lg:block" />

          <div className="grid gap-10 lg:grid-cols-5">

            {process.map((step, index) => {

              const Icon = icons[index % icons.length];

              return (

                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * .15,
                  }}
                  className="relative text-center"
                >

                  {/* Circle */}

                  <div
                    className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full border-8 border-white shadow-xl transition-all duration-300 hover:scale-110"
                    style={{
                      background: colors[index],
                    }}
                  >
                    <Icon
                      size={34}
                      className="text-white"
                    />
                  </div>

                  {/* Number */}

                  <div className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-[#9B1C31]">
                    Step {index + 1}
                  </div>

                  {/* Title */}

                  <h3 className="mt-3 text-2xl font-bold text-[#111827]">
                    {step}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    We collaborate closely with your team to ensure
                    every phase is delivered with quality and speed.
                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}