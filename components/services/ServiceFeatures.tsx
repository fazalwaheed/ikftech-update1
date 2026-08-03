'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Bot,
  Database,
  Cloud,
  ShieldCheck,
  Rocket,
} from 'lucide-react';

const icons = [
  Brain,
  Bot,
  Database,
  Cloud,
  ShieldCheck,
  Rocket,
];

export default function ServiceFeatures({
  features,
}: {
  features: {
    title: string;
    description: string;
  }[];
}) {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full bg-[#EEF4FF] px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB]">

            What's Included

          </span>

          <h2 className="mt-6 text-5xl font-black tracking-[-0.04em] text-[#101828]">

            Everything you need to
            <br />
            build successfully.

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">

            Our senior engineering team delivers every layer
            required to launch production-ready software.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = icons[index % icons.length];

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#9B1C31] hover:shadow-2xl"
              >

                {/* Glow */}

                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">

                  <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#9B1C31]/10 blur-3xl" />

                </div>

                {/* Icon */}

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4FF] text-[#2563EB] transition group-hover:bg-[#9B1C31] group-hover:text-white">

                  <Icon size={30} />

                </div>

                {/* Title */}

                <h3 className="relative mt-8 text-2xl font-bold text-[#111827]">

                  {feature.title}

                </h3>

                {/* Description */}

                <p className="relative mt-4 leading-8 text-gray-600">

                  {feature.description}

                </p>

                {/* Bottom line */}

                <div className="relative mt-8 h-1 w-12 rounded-full bg-[#2563EB] transition-all duration-300 group-hover:w-24 group-hover:bg-[#9B1C31]" />

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}