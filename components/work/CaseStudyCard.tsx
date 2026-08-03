'use client';
import {
  RiReactjsLine,
  RiNextjsFill,
  RiOpenaiFill,
} from "react-icons/ri";

import {
  FaAws,
  FaNodeJs,
} from "react-icons/fa6";

import Link from 'next/link';
import { ArrowRight, Clock3, Users } from 'lucide-react';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  description: string;
  industry: string;
  href: string;

  duration?: string;
  team?: string;

  metrics?: string[];
  technologies?: string[];
};

export default function CaseStudyCard({
  title,
  description,
  industry,
  href,
  duration = '8 Weeks',
  team = '5 Engineers',
  metrics = [],
  technologies = [],
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: .3 }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-brand-line
      bg-white
      transition-all
      duration-300
      hover:border-[#9B1C31]
      hover:shadow-[0_25px_70px_rgba(155,28,49,.18)]
      "
    >

      {/* Hover Glow */}

      <div className="
      absolute
      inset-0
      opacity-0
      transition
      duration-500
      group-hover:opacity-100
      bg-gradient-to-br
      from-[#9B1C31]/5
      via-transparent
      to-blue-500/5
      " />

      {/* Illustration */}

      <div className="relative h-48 overflow-hidden border-b border-brand-line bg-[#F8FAFC]">

        <div className="absolute inset-6 rounded-2xl border border-brand-line bg-white shadow-sm">

          <div className="flex h-10 items-center gap-2 border-b border-brand-line px-4">

            <span className="h-3 w-3 rounded-full bg-red-400" />

            <span className="h-3 w-3 rounded-full bg-yellow-400" />

            <span className="h-3 w-3 rounded-full bg-green-400" />

          </div>

          <div className="grid h-full grid-cols-4 gap-3 p-4">

            <div className="rounded-xl bg-blue-100" />

            <div className="rounded-xl bg-[#9B1C31]/10" />

            <div className="rounded-xl bg-green-100" />

            <div className="rounded-xl bg-yellow-100" />

          </div>

        </div>

      </div>

      <div className="relative p-7">

        {/* Top */}

        <div className="flex items-center justify-between">

          <span className="rounded-full bg-[#9B1C31]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#9B1C31]">

            {industry}

          </span>

          <div className="flex gap-4 text-xs text-brand-ink/50">

            <span className="flex items-center gap-1">

              <Clock3 size={14} />

              {duration}

            </span>

            <span className="flex items-center gap-1">

              <Users size={14} />

              {team}

            </span>

          </div>

        </div>

        {/* Title */}

        <h3 className="mt-6 text-2xl font-bold text-brand-black">

          {title}

        </h3>

        {/* Description */}

        <p className="mt-4 leading-7 text-brand-ink/60">

          {description}

        </p>

        {/* Metrics */}

        {metrics.length > 0 && (

          <div className="mt-6 flex flex-wrap gap-2">

            {metrics.map(metric => (

              <span
                key={metric}
                className="
                rounded-full
                bg-green-50
                px-3
                py-1
                text-xs
                font-semibold
                text-green-700
                "
              >

                {metric}

              </span>

            ))}

          </div>

        )}

        {/* Technologies */}

<div className="mt-4 flex flex-wrap gap-2">

  {technologies.map((tech) => {

    const icon = (() => {

      switch (tech) {

        case "React":
          return <RiReactjsLine className="text-sky-500" />;

        case "Next.js":
          return <RiNextjsFill className="text-black" />;

        case "AWS":
          return <FaAws className="text-orange-500" />;

        case "OpenAI":
          return <RiOpenaiFill className="text-emerald-600" />;

        case "Node.js":
          return <FaNodeJs className="text-green-600" />;

        default:
          return null;
      }

    })();

    return (
      <span
        key={tech}
        className="flex items-center gap-1 rounded-full border border-brand-line bg-white px-2.5 py-1 text-xs font-medium text-brand-ink shadow-sm"
      >
        {icon}
        {tech}
      </span>
    );

  })}

</div>
        

        {/* Button */}

        <Link
          href={href}
          className="
          mt-8
          inline-flex
          items-center
          gap-2
          font-semibold
          text-[#9B1C31]
          "
        >

          View Case Study

          <ArrowRight
            size={18}
            className="
            transition-transform
            duration-300
            group-hover:translate-x-2
            "
          />

        </Link>

      </div>

    </motion.div>
  );
}