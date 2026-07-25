"use client";

import { motion } from "framer-motion";
import BentoCard from "./BentoCard";
import { aiCapabilities } from "./aiCapabilities";

export default function AICapabilitiesBento() {
  return (
    <section className="relative overflow-hidden bg-[#08111F] py-24 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-[#9B1C31]/10 blur-[140px]" />
        <div className="absolute right-[-100px] bottom-10 h-80 w-80 rounded-full bg-[#9B1C31]/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#9B1C31]/40 bg-[#9B1C31]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E06A7B]">
            AI CAPABILITIES
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl">
            Engineering the Future with AI
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            From AI agents and cloud infrastructure to enterprise software and
            modern product design, we build intelligent digital experiences
            that help businesses innovate and scale.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {aiCapabilities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              className={item.className}
            >
              <BentoCard
                title={item.title}
                description={item.description}
                badge={item.badge}
                icon={item.icon}
                features={item.features}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}