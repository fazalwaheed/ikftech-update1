"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import MouseGlow from "./MouseGlow";

interface BentoCardProps {
  title: string;
  description: string;
  badge: string;
  features: string[];
  icon: React.ElementType;
}

export default function BentoCard({
  title,
  description,
  badge,
  features,
  icon: Icon,
}: BentoCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-[#9B1C31]
        hover:bg-white/[0.05]
        hover:shadow-[0_25px_60px_rgba(155,28,49,0.20)]
      "
    >
      <MouseGlow />

      {/* Top Animated Line */}
      <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#9B1C31] transition-all duration-500 group-hover:w-full" />

      {/* Badge */}
      <div>
        <span className="inline-flex rounded-full border border-[#9B1C31]/40 bg-[#9B1C31]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E06A7B]">
          {badge}
        </span>
      </div>

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 8, scale: 1.08 }}
        transition={{ duration: 0.25 }}
        className="
          mt-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-[#9B1C31]/10
          text-[#E06A7B]
        "
      >
        <Icon size={28} strokeWidth={2} />
      </motion.div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 max-w-md text-sm leading-7 text-white/70">
        {description}
      </p>

      {/* Feature Chips */}
      <div className="mt-8 flex flex-wrap gap-2">
        {features.map((feature) => (
          <span
            key={feature}
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-3
              py-1.5
              text-xs
              text-white/70
              transition-all
              duration-300
              group-hover:border-[#9B1C31]/40
              group-hover:bg-[#9B1C31]/10
              group-hover:text-white
            "
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Push Explore Link to Bottom */}
      <div className="mt-auto pt-8">
        <button className="flex items-center gap-2 text-sm font-semibold text-[#E06A7B] transition-colors group-hover:text-white">
          Explore

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-2"
          />
        </button>
      </div>
    </motion.div>
  );
}