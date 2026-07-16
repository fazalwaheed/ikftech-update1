import Link from 'next/link';
import CTASection from '@/components/CTASection';
import Reveal from '@/components/Reveal';
import { industriesMenu } from '@/lib/navigation';

export default function IndustriesPage() {
  const items = industriesMenu.columns.flatMap((c) => c.items);

  return (
    <>
      <section className="relative overflow-hidden section-pad gradient-hero">
        <div className="grain-overlay" />
        <div
          aria-hidden
          className="absolute -top-16 left-[8%] h-64 w-64 rounded-full bg-brand-blue/25 blur-3xl animate-blob"
        />
        <div className="container-x relative text-center">
          <Reveal>
            <span className="eyebrow border-white/15 bg-white/5 text-white">
              Industries
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
              Domain expertise, not just code.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Proven delivery patterns across fintech, healthcare, retail,
              logistics, and more — each adapted for the compliance and
              complexity of that domain.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.href} delay={(i % 3) * 0.1}>
                <Link
                  href={ind.href}
                  className="card flex h-full items-start gap-4 transition hover:-translate-y-1 hover:border-brand-blue/40"
                >
                  {Icon && (
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                      <Icon size={20} />
                    </span>
                  )}
                  <span>
                    <span className="text-lg font-semibold text-brand-black">{ind.label}</span>
                    <span className="mt-2 block text-sm text-brand-ink/60">{ind.description}</span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
