'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ServiceCTA() {
  return (
    <section className="relative overflow-hidden bg-[#070B14] py-32">

      {/* Glow */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#2563EB]/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#9B1C31]/20 blur-[160px]" />

      <div className="mx-auto max-w-5xl px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black leading-tight text-white md:text-6xl"
        >
          Ready to build
          <br />
          something exceptional?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/70"
        >
          Tell us about your product. We'll help you choose the right
          technology, estimate timelines and assemble the perfect team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-wrap justify-center gap-5"
        >

          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#9B1C31] px-8 py-4 font-bold text-white transition hover:bg-[#B3203A]"
          >
            Book Discovery Call

            <ArrowRight className="ml-3" />

          </Link>

          <Link
            href="/case-studies"
            className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white/10"
          >
            View Case Studies
          </Link>

        </motion.div>

      </div>

    </section>
  );
}