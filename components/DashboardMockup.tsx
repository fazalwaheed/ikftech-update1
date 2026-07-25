'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';
import AnimatedCounter from '@/components/AnimatedCounter';

const chartData = [
  { v: 20 }, { v: 35 }, { v: 28 }, { v: 45 }, { v: 40 },
  { v: 60 }, { v: 55 }, { v: 75 }, { v: 68 }, { v: 90 },
];

const kpis = [
  { value: 85, suffix: '%', label: 'Efficiency gain' },
  { value: 3, suffix: 'x', label: 'Faster deploys' },
];

// custom dot: only renders a pulsing glow ring on the LAST data point
function LiveDot(props: any) {
  const { cx, cy, index } = props;
  if (index !== chartData.length - 1) return null;
  return (
    <g>
      <circle cx={cx} cy={cy} r={10} fill="#7B1C34" opacity={0.25}>
        <animate attributeName="r" values="6;14;6" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.35;0;0.35" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx={cx} cy={cy} r={4.5} fill="#fff" stroke="#7B1C34" strokeWidth={2.5} />
    </g>
  );
}

export default function DashboardMockup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [tab, setTab] = useState<'strategy' | 'automation' | 'engineering'>('automation');

  const tabs = [
    { key: 'strategy' as const, label: 'Strategy' },
    { key: 'automation' as const, label: 'Automation' },
    { key: 'engineering' as const, label: 'Engineering' },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-2xl border border-brand-line bg-brand-black shadow-card transition-colors duration-300 hover:border-brand-cherry"
    >
      {/* browser-style header */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs font-medium text-white/40">IKF OS — Live</span>
        <span className="ml-auto flex items-center gap-1.5 text-xs text-brand-cherry">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cherry" />
          Live
        </span>
      </div>

      <div className="p-5">
        {/* tabs */}
        <div className="flex gap-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-300 ${
                tab === t.key
                  ? 'bg-brand-cherry text-white'
                  : 'bg-white/5 text-white/50 hover:bg-white/10'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* chart */}
        <div className="mt-5 h-32 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 12, right: 4, left: 4, bottom: 4 }}>
              <defs>
                <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7B1C34" stopOpacity={0.55} />
                  <stop offset="100%" stopColor="#7B1C34" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="chartStroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#B8264B" />
                  <stop offset="50%" stopColor="#FF3B5C" />
                  <stop offset="100%" stopColor="#FF7A59" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
              <Area
                type="monotone"
                dataKey="v"
                stroke="url(#chartStroke)"
                strokeWidth={3}
                fill="url(#chartFill)"
                filter="url(#glow)"
                isAnimationActive={isInView}
                animationDuration={1400}
                dot={<LiveDot />}
                activeDot={{ r: 5, fill: '#FF3B5C', stroke: '#fff', strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* KPI row */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-xl bg-white/5 p-3 transition-colors duration-300 group-hover:bg-brand-cherry/10">
              <p className="font-display text-2xl font-bold text-white">
                {isInView ? <AnimatedCounter value={k.value} suffix={k.suffix} /> : '0'}
              </p>
              <p className="mt-0.5 text-xs text-white/50">{k.label}</p>
            </div>
          ))}
        </div>

        {/* status rows */}
        <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
          {['Strategy', 'Automation', 'UX/UI', 'Engineering'].map((row, i) => (
            <div key={row} className="flex items-center justify-between text-xs">
              <span className="text-white/60">{row}</span>
              <span className={i === 0 ? 'text-white/40' : 'font-medium text-brand-cherry'}>
                {i === 0 ? 'Plan' : 'Active'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}