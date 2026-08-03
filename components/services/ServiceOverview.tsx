'use client';

import { motion } from 'framer-motion';

export default function ServiceOverview({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="bg-white py-24">
      <div className="container-x max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex rounded-full border border-[#2563EB]/20 bg-[#2563EB]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
            Overview
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-gray-900">
            {title}
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-600">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}