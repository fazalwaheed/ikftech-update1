import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { industriesMenu } from '@/lib/navigation';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';

const allItems = industriesMenu.columns.flatMap((c) => c.items);

export function generateStaticParams() {
  return allItems.map((item) => ({ slug: item.href.split('/').pop()! }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = allItems.find((i) => i.href.endsWith(params.slug));
  if (!item) return {};
  return { title: `${item.label} | IKFTECH Industries` };
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const item = allItems.find((i) => i.href.endsWith(params.slug));
  if (!item) return notFound();

  const Icon = item.icon;

  const patterns = [
    'Compliance-aware architecture from day one',
    'Domain-specific data models and integrations',
    'Security and audit trails built in, not bolted on',
    'Delivery teams with prior experience in this sector',
  ];

  return (
    <>
      <section className="relative overflow-hidden section-pad gradient-hero">
        <div className="grain-overlay" />
        <div
          aria-hidden
          className="absolute -top-16 left-[10%] h-64 w-64 rounded-full bg-brand-blue/25 blur-3xl animate-blob"
        />
        <div className="container-x relative">
          <Reveal>
            <span className="eyebrow border-white/15 bg-white/5 text-white">
              Industries
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 flex items-center gap-4">
              {Icon && (
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/15 text-brand-blue">
                  <Icon size={26} />
                </span>
              )}
              <h1 className="text-4xl font-bold text-white lg:text-5xl">{item.label}</h1>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-white/60">
              {item.description}. We bring domain-specific delivery patterns
              so your product launches with the right architecture the first
              time, not after a costly rebuild.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link href="/contact" className="btn-primary mt-8 bg-brand-blue hover:bg-white hover:text-brand-black">
              Book a free call <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Why it matters</span>
            <h2 className="mt-4 text-3xl font-bold text-brand-black">
              Delivery patterns built for {item.label.toLowerCase()}.
            </h2>
            <p className="mt-4 text-brand-ink/60">
              Generic engineering teams learn a domain&apos;s constraints on
              your timeline. Ours already know them — so decisions that
              usually take weeks of back-and-forth get made correctly the
              first time.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="eyebrow">What we bring</span>
            <ul className="mt-4 space-y-4">
              {patterns.map((d) => (
                <li key={d} className="flex gap-3 text-sm text-brand-ink/70">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-blue" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
