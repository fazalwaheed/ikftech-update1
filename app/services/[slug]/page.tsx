import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { servicesMenu } from '@/lib/navigation';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';

const allItems = servicesMenu.columns.flatMap((c) => c.items.map((i) => ({ ...i, category: c.title })));

export function generateStaticParams() {
  return allItems.map((item) => ({ slug: item.href.split('/').pop()! }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = allItems.find((i) => i.href.endsWith(params.slug));
  if (!item) return {};
  return { title: `${item.label} | IKFTECH Services` };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const item = allItems.find((i) => i.href.endsWith(params.slug));
  if (!item) return notFound();

  const Icon = item.icon;

  const deliverables = [
    'Discovery workshop to align on scope and success metrics',
    'Senior engineer or designer assigned as delivery lead',
    'Sprint-based delivery with weekly demos',
    'Documentation and handover included at launch',
  ];

  return (
    <>
      <section className="relative overflow-hidden section-pad gradient-hero">
        <div className="grain-overlay" />
        <div
          aria-hidden
          className="absolute -top-16 right-[10%] h-64 w-64 rounded-full bg-brand-blue/25 blur-3xl animate-blob"
        />
        <div className="container-x relative">
          <Reveal>
            <span className="eyebrow border-white/15 bg-white/5 text-white">
              {item.category}
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
              {item.description}. IKFTECH pairs senior engineers with
              AI-augmented workflows to deliver this faster, without cutting
              corners on quality or maintainability.
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
            <span className="eyebrow">What&apos;s included</span>
            <h2 className="mt-4 text-3xl font-bold text-brand-black">
              How we deliver {item.label.toLowerCase()}.
            </h2>
            <p className="mt-4 text-brand-ink/60">
              Every engagement starts with understanding your product and
              constraints, then moves into focused, senior-led execution —
              not a rotating cast of junior hands learning on your dime.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="eyebrow">Process</span>
            <ul className="mt-4 space-y-4">
              {deliverables.map((d) => (
                <li key={d} className="flex gap-3 text-sm text-brand-ink/70">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-blue" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-brand-mist">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Related services</span>
            <h2 className="mt-4 text-2xl font-bold text-brand-black">
              Explore more in {item.category}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicesMenu.columns
              .find((c) => c.title === item.category)!
              .items.filter((i) => i.href !== item.href)
              .map((i, idx) => (
                <Reveal key={i.href} delay={idx * 0.08}>
                  <Link
                    href={i.href}
                    className="card flex h-full items-start gap-3 transition hover:-translate-y-1 hover:border-brand-blue/40"
                  >
                    {i.icon && (
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                        <i.icon size={16} />
                      </span>
                    )}
                    <span>
                      <span className="text-sm font-semibold text-brand-black">{i.label}</span>
                      <span className="mt-1 block text-xs text-brand-ink/50">{i.description}</span>
                    </span>
                  </Link>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
