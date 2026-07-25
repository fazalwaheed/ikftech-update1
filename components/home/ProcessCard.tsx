"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import MouseGlow from "./MouseGlow";

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  duration: string;
  points: string[];
  icon: React.ElementType;
}

export default function ProcessCard({
  number,
  title,
  description,
  duration,
  points,
  icon: Icon,
}: ProcessCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-8
        transition-all
        duration-300
        hover:border-[#9B1C31]
        hover:bg-[#FFF8F8]
        hover:shadow-[0_25px_60px_rgba(155,28,49,0.18)]
      "
    >
      <MouseGlow />

      {/* Animated Top Border */}
      <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#9B1C31] transition-all duration-500 group-hover:w-full" />

      {/* Step Number */}
      <span className="text-sm font-bold tracking-widest text-[#9B1C31]">
        {number}
      </span>

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.08, rotate: 8 }}
        transition={{ duration: 0.25 }}
        className="
          mt-5
          flex
          h-14
          w-14
          px-7
          py-6
          items-center
          justify-center
          rounded-2xl
          bg-blue-50
          text-blue-600
          transition-colors
          duration-300
          group-hover:bg-[#9B1C31]/10
          group-hover:text-[#9B1C31]
        "
      >
        <Icon size={28} />
      </motion.div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-gray-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-sm leading-7 text-gray-600">
        {description}
      </p>

      {/* Divider */}
      <div className="my-6 border-t border-gray-200" />

      {/* Bullet Points */}
      <div className="space-y-3">
        {points.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-sm text-gray-700"
          >
            <CheckCircle2
              size={16}
              className="text-blue-600 group-hover:text-[#9B1C31]"
            />
            {item}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 transition group-hover:bg-[#9B1C31]/10 group-hover:text-[#9B1C31]">
          {duration}
        </span>

        <ArrowRight
          size={18}
          className="text-[#9B1C31] transition-transform duration-300 group-hover:translate-x-2"
        />
      </div>
    </motion.div>
  );
}