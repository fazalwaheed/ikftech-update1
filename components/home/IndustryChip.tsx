"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  icon: React.ElementType;
}

export default function IndustryChip({
  title,
  icon: Icon,
}: Props) {
  return (
    <motion.button
      whileHover={{ y: -3 }}
      whileTap={{ scale: .98 }}
      className="
        group
        flex
        items-center
        gap-3
        rounded-full
        border
        border-gray-200
        bg-white
        px-5
        py-3
        transition-all
        duration-300

        hover:border-[#9B1C31]
        hover:bg-[#9B1C31]
        hover:text-white
        hover:shadow-[0_10px_30px_rgba(155,28,49,.25)]
      "
    >
      <Icon
        size={18}
        className="
          text-brand-blue
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:text-white
        "
      />

      <span className="font-medium">
        {title}
      </span>
    </motion.button>
  );
}