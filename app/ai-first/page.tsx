import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import StatsBand from '@/components/StatsBand';
import { Sparkles, Bot, Gauge, ShieldCheck } from 'lucide-react';

const pillars = [
  { icon: Bot, title: 'AI-augmented delivery', desc: 'Every engineer uses AI tooling as a force multiplier, not a replacement for judgment.' },
  { icon: Gauge, title: 'Faster without shortcuts', desc: 'AI-assisted workflows cut timelines by up to 80% while keeping senior review on everything shipped.' },
  { icon: ShieldCheck, title: 'Responsible by default', desc: 'Data handling, model choice, and security review are built into every AI feature we ship.' },
];

export default function AiFirstPage() {
  return (
    <>
      <section className="relative overflow-hidden section-pad gradient-hero">
        <div className="grain-overlay" />
        <div aria-hidden className="absolute -top-16 left-[10%] h-64 w-64 rounded-full bg-brand-blue/25 blur-3xl animate-blob" />
        <div className="container-x relative text-center">
          <Reveal>
            <span className="eyebrow border-white/15 bg-white/5 text-white">
              <Sparkles size={13} className="mr-1 inline" /> AI-First Company
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
              Our approach to building intelligent, scalable solutions.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              AI isn&apos;t a feature we bolt on — it&apos;s built into how we
              design, build, and ship every product.
            </p>
          </Reveal>
        </div>
      </section>

      <StatsBand />

      <section className="section-pad">
        <div className="container-x grid gap-8 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="card h-full">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <p.icon size={20} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-brand-black">{p.title}</h3>
                <p className="mt-2 text-sm text-brand-ink/60">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
