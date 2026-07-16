import CTASection from '@/components/CTASection';
import Reveal from '@/components/Reveal';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    tag: 'Fintech',
    title: 'Rebuilding a payments dashboard for scale',
    result: 'Cut transaction processing latency by 45% and shipped a full UI redesign in 8 weeks.',
  },
  {
    tag: 'Healthcare',
    title: 'AI-assisted patient intake system',
    result: 'Automated 60% of manual intake steps, reducing front-desk workload significantly.',
  },
  {
    tag: 'E-commerce',
    title: 'Headless storefront migration',
    result: 'Improved page speed by 3x and lifted conversion rate across mobile traffic.',
  },
  {
    tag: 'SaaS',
    title: 'Multi-tenant platform re-architecture',
    result: 'Reduced infrastructure cost by 35% while supporting 10x more concurrent tenants.',
  },
  {
    tag: 'Logistics',
    title: 'Real-time fleet tracking system',
    result: 'Delivered a command-and-control dashboard covering 500+ vehicles in production.',
  },
  {
    tag: 'Web3',
    title: 'Wallet and on-chain analytics app',
    result: 'Launched MVP in 10 days, validated with early users, then scaled to full product.',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative overflow-hidden section-pad gradient-hero">
        <div className="grain-overlay" />
        <div
          aria-hidden
          className="absolute -top-16 left-[10%] h-64 w-64 rounded-full bg-brand-blue/25 blur-3xl animate-blob"
        />
        <div className="container-x relative text-center">
          <Reveal>
            <span className="eyebrow border-white/15 bg-white/5 text-white">
              Our work
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
              Real products, real outcomes.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              A sample of engagements across industries — each led by senior
              engineers with direct accountability for the result.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.1}>
              <div className="card group h-full cursor-pointer transition hover:-translate-y-1 hover:border-brand-blue/40">
                <span className="eyebrow">{c.tag}</span>
                <h3 className="mt-4 text-lg font-semibold text-brand-black">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-brand-ink/60">{c.result}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand-blue">
                  Read case study
                  <ArrowUpRight size={14} className="transition group-hover:translate-x-1" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
