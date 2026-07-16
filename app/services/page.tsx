import Link from 'next/link';
import CTASection from '@/components/CTASection';
import Reveal from '@/components/Reveal';
import { servicesMenu } from '@/lib/navigation';

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden section-pad gradient-hero">
        <div className="grain-overlay" />
        <div
          aria-hidden
          className="absolute -top-16 right-[10%] h-64 w-64 rounded-full bg-brand-blue/25 blur-3xl animate-blob"
        />
        <div className="container-x relative text-center">
          <Reveal>
            <span className="eyebrow border-white/15 bg-white/5 text-white">
              Services
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
              One team. Every capability your product needs.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Strategy, design, AI, and engineering under one roof — so nothing
              gets lost in translation between teams. Click any service to
              see how we deliver it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesMenu.columns.map((cat, i) => (
            <Reveal key={cat.title} delay={(i % 3) * 0.1}>
              <div className="card h-full">
                <h3 className="text-lg font-semibold text-brand-black">
                  {cat.title}
                </h3>
                <ul className="mt-4 space-y-1 border-t border-brand-line pt-4">
                  {cat.items.map((it) => (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        className="flex items-center justify-between rounded-lg py-2 text-sm text-brand-ink/60 transition hover:bg-brand-mist hover:text-brand-blue"
                      >
                        {it.label}
                        <span className="text-brand-ink/30">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
