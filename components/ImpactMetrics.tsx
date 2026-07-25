import AnimatedCounter from '@/components/AnimatedCounter';

const metrics = [
  {
    value: 50,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'From MVPs to enterprise platforms',
  },
  {
    value: 25,
    suffix: '+',
    label: 'Industries Served',
    description: 'Proven delivery across complex domains',
  },
  {
    value: 80,
    suffix: '%',
    label: 'Faster Delivery',
    description: 'Through AI-enabled engineering workflows',
  },
  {
    value: 95,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Built on long-term partnerships',
  },
];

export default function ImpactMetrics() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">
            Engineering impact
          </span>

          <h2 className="mt-4 text-3xl font-bold text-brand-black lg:text-5xl">
            Engineering that creates measurable impact.
          </h2>

          <p className="mt-5 text-brand-black/60">
            We combine strategy, design, engineering, and AI to help ambitious
            teams move faster and build with confidence.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl font-bold text-brand-black lg:text-5xl">
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                />
              </div>

              <h3 className="mt-5 font-semibold text-brand-black">
                {metric.label}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-brand-black/50">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}