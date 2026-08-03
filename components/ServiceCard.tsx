import { LucideIcon, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items?: string[];
  count?: string;
  color?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  items = [],
  count = '5+ Services',
  color = '#9B1C31',
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-3xl border border-brand-line bg-white p-7 shadow-sm transition-all duration-300 hover:border-transparent hover:shadow-2xl"
    >
      {/* Glow */}
      <div
        className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
        style={{ background: color }}
      />

      {/* Top */}
      <div className="relative z-10 flex items-start justify-between">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{
            background: `${color}15`,
            color,
          }}
        >
          <Icon size={28} />
        </div>

        <motion.div
          whileHover={{ x: 4, y: -4 }}
          className="rounded-full border border-brand-line p-2 text-brand-ink/50 transition group-hover:border-[#9B1C31] group-hover:text-[#9B1C31]"
        >
          <ArrowUpRight size={18} />
        </motion.div>
      </div>

      {/* Heading */}
      <div className="relative z-10 mt-6">
        <span
          className="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
          style={{
            background: `${color}15`,
            color,
          }}
        >
          {count}
        </span>

        <h3 className="mt-4 text-2xl font-bold text-brand-black transition-colors group-hover:text-[#9B1C31]">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-brand-ink/60">
          {description}
        </p>
      </div>

      {/* Services */}
      {items.length > 0 && (
        <div className="relative z-10 mt-6 border-t border-brand-line pt-6">
          <div className="grid grid-cols-2 gap-2">
            {items.slice(0, 6).map((item) => (
              <div
                key={item}
                className="rounded-xl bg-brand-mist px-3 py-2 text-sm text-brand-ink transition-colors group-hover:bg-[#FFF5F6]"
              >
                • {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="relative z-10 mt-7 flex items-center justify-between border-t border-brand-line pt-5">
        <span className="text-sm font-semibold text-[#9B1C31]">
          Explore Services
        </span>

        <motion.div
          whileHover={{ x: 5 }}
          className="rounded-full bg-[#9B1C31] p-2 text-white"
        >
          <ArrowUpRight size={16} />
        </motion.div>
      </div>
    </motion.div>
  );
}