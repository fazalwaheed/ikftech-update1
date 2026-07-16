import StatsBand from '@/components/StatsBand';
import CTASection from '@/components/CTASection';
import Reveal from '@/components/Reveal';

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden section-pad gradient-hero">
        <div className="grain-overlay" />
        <div
          aria-hidden
          className="absolute -top-16 right-[12%] h-64 w-64 rounded-full bg-brand-blue/25 blur-3xl animate-blob"
        />
        <div className="container-x relative text-center">
          <Reveal>
            <span className="eyebrow border-white/15 bg-white/5 text-white">
              Company
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
              Built by engineers, run like a product team.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              IKFTECH brings together senior engineering talent and AI-first
              workflows to deliver outcomes traditional dev shops can&apos;t
              match on timeline, cost, or scale.
            </p>
          </Reveal>
        </div>
      </section>

      <StatsBand />

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2 className="mt-4 text-3xl font-bold text-brand-black">
              From a small dev team to a full-scale engineering partner.
            </h2>
            <p className="mt-4 text-brand-ink/60">
              What started as a focused web and mobile development team has
              grown into a full-service digital engineering partner —
              spanning branding, product design, AI systems, and enterprise
              transformation. Along the way, the constant has been senior
              ownership of every engagement, not a rotating cast of junior
              hands.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="eyebrow">Why teams choose us</span>
            <ul className="mt-4 space-y-4">
              {[
                'Senior engineers on every project, not just at kickoff',
                'AI-assisted workflows that cut timelines by 30–80%',
                'Transparent, fixed or hourly pricing with no surprise scope',
                'Global delivery across Pakistan, UAE, UK, and USA',
              ].map((point) => (
                <li key={point} className="flex gap-3 text-sm text-brand-ink/70">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                  {point}
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
