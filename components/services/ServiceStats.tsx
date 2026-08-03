'use client';

import { motion } from 'framer-motion';

interface Stat {
  label: string;
  value: string;
}

export default function ServiceStats({
  stats,
}: {
  stats: Stat[];
}) {
  return (
    <section className="py-20 bg-white">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-4xl font-black text-[#9B1C31]">
                {stat.value}
              </h3>

              <p className="mt-3 text-sm uppercase tracking-widest text-gray-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}