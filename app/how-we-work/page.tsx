import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { Compass, Search, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Discover', desc: 'We align on goals, constraints, and what success looks like before any code is written.' },
  { icon: PenTool, title: 'Design', desc: 'Prototypes and flows get validated with real users before production engineering starts.' },
  { icon: Code2, title: 'Build', desc: 'Senior engineers ship in short, reviewable sprints with weekly demos — no black-box months.' },
  { icon: Rocket, title: 'Scale', desc: 'We monitor, harden, and iterate post-launch so the system holds up under real usage.' },
];

export default function HowWeWorkPage() {
  return (
    <>
      <section className="relative overflow-hidden section-pad gradient-hero">
        <div className="grain-overlay" />
        <div aria-hidden className="absolute -top-16 right-[12%] h-64 w-64 rounded-full bg-brand-blue/25 blur-3xl animate-blob" />
        <div className="container-x relative text-center">
          <Reveal>
            <span className="eyebrow border-white/15 bg-white/5 text-white">
              <Compass size={13} className="mr-1 inline" /> How we work
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
              Our methodology for reliable, future-proof software.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              No black-box delivery. Every engagement follows the same tight,
              transparent process — regardless of project size.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <s.icon size={22} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-brand-black">{s.title}</h3>
              <p className="mt-2 text-sm text-brand-ink/60">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
