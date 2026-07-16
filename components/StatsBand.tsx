import Reveal from '@/components/Reveal';
import AnimatedCounter from '@/components/AnimatedCounter';

const stats = [
  { value: 35, suffix: '+', label: 'Engineers & AI specialists' },
  { value: 50, suffix: '+', label: 'Enterprise clients scaled' },
  { value: 12, suffix: '+', label: 'Years of delivery experience' },
  { value: 80, suffix: '%', label: 'Faster delivery with AI workflows' },
];

export default function StatsBand() {
  return (
    <section className="border-y border-brand-line bg-brand-mist">
      <div className="container-x grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center lg:text-left">
            <p className="text-3xl font-bold text-brand-black lg:text-4xl font-display">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-sm text-brand-ink/60">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
