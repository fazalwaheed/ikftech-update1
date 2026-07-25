"use client";

import { motion } from "framer-motion";
import ProcessCard from "./ProcessCard";
import { processSteps } from "./processData";

export default function ProcessSection() {
  return (
    <section className="bg-[#F8FAFC] py-16">
      <div className="container-x">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex rounded-full border border-[#9B1C31] bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#9B1C31]">
            HOW WE WORK
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-gray-900 lg:text-5xl">
            A tight, senior-led process built for speed and accountability.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Every engagement follows a proven delivery framework designed to
            minimise risk, maximise quality, and accelerate time-to-market.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .45,
                delay: index * .12,
              }}
            >
              <ProcessCard {...step} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}