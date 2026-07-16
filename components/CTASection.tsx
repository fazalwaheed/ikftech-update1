import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden section-pad gradient-hero">
      <div className="grain-overlay" />
      <div
        aria-hidden
        className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-blue/25 blur-3xl animate-blob"
      />
      <div className="container-x relative flex flex-col items-center gap-6 text-center">
        <Reveal>
          <span className="eyebrow border-white/15 bg-white/5 text-white">
            Let&apos;s build
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="max-w-2xl text-3xl font-bold text-white lg:text-5xl">
            Tell us what you&apos;re building — we&apos;ll take it from there.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="max-w-xl text-white/60">
            Partner with an AI-enabled engineering team that delivers real
            products with real accountability, from first sprint to enterprise
            scale.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary bg-brand-blue hover:bg-white hover:text-brand-black">
              Book a free call <ArrowUpRight size={16} />
            </Link>
            <Link href="/case-studies" className="btn-outline border-white/20 bg-transparent text-white hover:border-brand-blue hover:text-brand-blue">
              See our work
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
