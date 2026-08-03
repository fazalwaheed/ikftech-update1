'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock3, Users } from 'lucide-react';

interface CaseStudy {
  title: string;
  description: string;
  href: string;
}

export default function ServiceCaseStudy({
  cases,
}: {
  cases: CaseStudy[];
}) {
  const study = cases[0];

  if (!study) return null;

  return (
    <section className="bg-[#070B14] py-28 overflow-hidden">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB]">
            Success Story
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-[-0.04em] text-white">
            Real impact.
            <br />
            Real business results.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Every solution we build is measured by business outcomes,
            not just completed features.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-20 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
        >

          <div className="grid lg:grid-cols-2">

            {/* Left */}

            <div className="p-12">

              <span className="rounded-full bg-[#9B1C31] px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white">
                Featured Project
              </span>

              <h3 className="mt-8 text-4xl font-black leading-tight text-white">
                {study.title}
              </h3>

              <p className="mt-6 text-lg leading-8 text-white/70">
                {study.description}
              </p>

              <div className="mt-10 grid grid-cols-3 gap-5">

                <div className="rounded-2xl bg-white/5 p-5 text-center">

                  <TrendingUp
                    className="mx-auto text-[#9B1C31]"
                    size={28}
                  />

                  <h4 className="mt-4 text-3xl font-black text-white">
                    +45%
                  </h4>

                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/50">
                    Performance
                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 p-5 text-center">

                  <Clock3
                    className="mx-auto text-[#2563EB]"
                    size={28}
                  />

                  <h4 className="mt-4 text-3xl font-black text-white">
                    8 Weeks
                  </h4>

                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/50">
                    Delivery
                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 p-5 text-center">

                  <Users
                    className="mx-auto text-[#10B981]"
                    size={28}
                  />

                  <h4 className="mt-4 text-3xl font-black text-white">
                    5
                  </h4>

                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/50">
                    Engineers
                  </p>

                </div>

              </div>

              <Link
                href={study.href}
                className="mt-12 inline-flex items-center rounded-full bg-[#9B1C31] px-8 py-4 font-bold text-white transition hover:bg-[#B3203A]"
              >
                Read Full Case Study

                <ArrowRight
                  className="ml-3"
                  size={18}
                />

              </Link>

            </div>

            {/* Right */}

            <div className="relative flex items-center justify-center bg-gradient-to-br from-[#2563EB]/20 via-transparent to-[#9B1C31]/20 p-12">

              <div className="absolute h-[420px] w-[420px] rounded-full bg-[#9B1C31]/20 blur-[120px]" />

              <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#111827]/80 p-8 backdrop-blur-xl">

                <div className="mb-8 flex items-center justify-between">

                  <div>

                    <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                      Project Metrics
                    </p>

                    <h4 className="mt-2 text-3xl font-black text-white">
                      Results
                    </h4>

                  </div>

                  <div className="rounded-full bg-[#9B1C31] px-4 py-2 text-sm font-bold text-white">
                    LIVE
                  </div>

                </div>

                {[
                  ['Performance', '45% Faster'],
                  ['Automation', '60%'],
                  ['Customer Satisfaction', '95%'],
                  ['Infrastructure Cost', '-35%'],
                ].map(([label, value]) => (

                  <div
                    key={label}
                    className="mb-4 rounded-xl bg-white/5 p-4"
                  >

                    <div className="flex items-center justify-between">

                      <span className="text-white/60">
                        {label}
                      </span>

                      <span className="font-bold text-white">
                        {value}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}