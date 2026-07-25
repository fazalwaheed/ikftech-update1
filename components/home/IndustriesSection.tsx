"use client";

import { motion } from "framer-motion";
import IndustryChip from "./IndustryChip";
import { industries } from "./industries";

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-x">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex rounded-full border border-[#9B1C31] bg-blue-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#9B1C31]">
            INDUSTRIES
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-brand-black lg:text-5xl">
            Proven delivery patterns across 25+ industries.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-ink/60">
            We've helped startups and enterprises build scalable
            software across regulated, fast-moving and global
            industries.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .05,
              }}
            >
              <IndustryChip {...industry} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}