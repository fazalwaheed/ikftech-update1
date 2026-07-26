'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

type ChartItem = {
  label: string;
  value: number;
  display: string;
  color: string;
};

const data: ChartItem[] = [
  { label: 'Projects', value: 50, display: '50+', color: '#2563EB' },
  { label: 'Industries', value: 25, display: '25+', color: '#10B981' },
  { label: 'Delivery', value: 80, display: '80%', color: '#F59E0B' },
  { label: 'Satisfaction', value: 95, display: '95%', color: '#9B1C31' },
];

const total = data.reduce((a, b) => a + b.value, 0);

// ring geometry
const RADIUS = 100;
const STROKE = 28;
const HOVER_STROKE = 34;

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

// no strokeLinecap="round" used when drawing => segments join with zero gap
function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? '0' : '1';
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`;
}

export default function RevenueChart() {
  const [active, setActive] = useState(0);

  const arcs = useMemo(() => {
    let current = 0;
    return data.map((item) => {
      const angle = (item.value / total) * 360;
      const start = current;
      const end = current + angle;
      current = end; // <-- no gap added between segments, they touch exactly
      return { ...item, start, end };
    });
  }, []);

  return (
    <div className="rounded-3xl border border-brand-line bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-brand-black">Revenue Breakdown</h3>
          <p className="mt-1 text-sm text-brand-ink/60">Interactive engineering impact</p>
        </div>
      </div>

      <div className="grid items-center gap-8 lg:grid-cols-[260px_1fr]">
        {/* DONUT */}
        <div className="relative mx-auto h-[250px] w-[250px]">
          <svg width="250" height="250" viewBox="0 0 250 250">
            {arcs.map((slice, index) => (
              <motion.path
                key={slice.label}
                d={describeArc(125, 125, RADIUS, slice.start, slice.end)}
                fill="none"
                stroke={slice.color}
                strokeWidth={active === index ? HOVER_STROKE : STROKE}
                strokeLinecap="butt"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                onMouseEnter={() => setActive(index)}
                style={{
                  cursor: 'pointer',
                  filter: active === index ? `drop-shadow(0 0 10px ${slice.color})` : 'none',
                  transition: 'all .25s ease',
                }}
              />
            ))}

            {/* center circle */}
            <circle cx="125" cy="125" r="54" fill="white" />
          </svg>

          {/* center label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="text-center"
              >
                <div className="text-5xl font-black tracking-tight text-brand-black">
                  {arcs[active].display}
                </div>
                <div className="mt-2 text-sm font-medium text-brand-ink/60">
                  {arcs[active].label}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* LEGEND */}
        <div className="space-y-4">
          {data.map((item, i) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setActive(i)}
              className={`cursor-pointer rounded-2xl border p-5 transition-all duration-300 ${
                active === i ? 'border-brand-cherry bg-[#FFF5F6] shadow-lg' : 'border-brand-line bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full" style={{ background: item.color }} />
                  <span className="font-semibold text-brand-black">{item.label}</span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-brand-black">{item.display}</div>
                  <div className="text-sm text-brand-ink/50">
                    {Math.round((item.value / total) * 100)}%
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}