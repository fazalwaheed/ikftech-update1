"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface MetricCardProps {
  value: string;
  title: string;
  description: string;
}

export default function MetricCard({
  value,
  title,
  description,
}: MetricCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-7
        transition-all
        duration-300

        hover:border-[#9B1C31]
        hover:bg-[#FFF8F8]
        hover:shadow-[0_25px_60px_rgba(155,28,49,.18)]
      "
    >
      {/* Animated Top Line */}

      <div
        className="
          absolute
          left-0
          top-0
          h-[3px]
          w-0
          bg-[#9B1C31]
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      {/* Number */}

      <motion.h3
        whileHover={{ scale: 1.05 }}
        className="
          text-5xl
          font-black
          tracking-tight
          text-brand-blue
          transition-colors
          duration-300
          group-hover:text-[#9B1C31]
        "
      >
        {value}
      </motion.h3>

      {/* Title */}

      <h4 className="mt-4 text-xl font-bold text-brand-black">
        {title}
      </h4>

      {/* Description */}

      <p className="mt-3 text-sm leading-7 text-brand-ink/60">
        {description}
      </p>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between">

        <span
          className="
            rounded-full
            bg-brand-blue/10
            px-3
            py-1

            text-xs
            font-semibold
            uppercase
            tracking-wider

            text-brand-blue

            transition-all
            duration-300

            group-hover:bg-[#9B1C31]/10
            group-hover:text-[#9B1C31]
          "
        >
          Engineering Impact
        </span>

        <ArrowUpRight
          size={20}
          className="
            text-brand-blue
            transition-all
            duration-300

            group-hover:translate-x-1
            group-hover:-translate-y-1
            group-hover:text-[#9B1C31]
          "
        />

      </div>
    </motion.div>
  );
}