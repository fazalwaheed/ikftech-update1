"use client";

import { motion } from "framer-motion";
import RevenueChart from "./RevenueChart";
import MetricCard from "./MetricCard";

const metrics = [
  {
    value: "50+",
    title: "Projects Delivered",
    description:
      "From MVPs to enterprise-grade platforms delivered by senior engineering teams.",
  },

  {
    value: "25+",
    title: "Industries Served",
    description:
      "Trusted across fintech, healthcare, logistics, SaaS, manufacturing and more.",
  },

  {
    value: "80%",
    title: "Faster Delivery",
    description:
      "AI-assisted engineering workflows reduce development time without compromising quality.",
  },

  {
    value: "95%",
    title: "Client Satisfaction",
    description:
      "Long-term partnerships built on measurable business outcomes and reliable delivery.",
  },
];

export default function EngineeringImpact() {
  return (
    <section className="py-24 bg-white">
      <div className="container-x">

        {/* Heading + Chart */}

        <div className="grid items-center gap-20 lg:grid-cols-[1fr_520px]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <span
              className="
                inline-flex
                rounded-full
                border
                border-brand-blue/20
                bg-brand-blue/5
                px-4
                py-1
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-brand-blue
              "
            >
              ENGINEERING IMPACT
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-black
                leading-tight
                tracking-tight
                text-brand-black
                lg:text-5xl
              "
            >
              Engineering that creates measurable business impact.
            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-lg
                leading-8
                text-brand-ink/60
              "
            >
              Every engagement is measured by outcomes—not just code.
              From accelerated delivery to long-term client partnerships,
              our engineering teams focus on building products that drive
              measurable growth.
            </p>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: .7,
              delay: .15,
            }}
          >
            <RevenueChart />
          </motion.div>

        </div>

        {/* Metrics */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {metrics.map((metric, index) => (

            <motion.div
              key={metric.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: .45,
                delay: index * .1,
              }}
            >
              <MetricCard {...metric} />
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}