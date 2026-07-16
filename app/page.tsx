import Link from 'next/link';
import {
  ArrowUpRight,
  Bot,
  PenTool,
  Code2,
  ShieldCheck,
  Workflow,
  Rocket,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import Marquee from '@/components/Marquee';
import AnimatedCounter from '@/components/AnimatedCounter';
import ServiceCard from '@/components/ServiceCard';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

const services = [
  {
    icon: Bot,
    title: 'AI Agents & Automation',
    description:
      'Custom AI agents, workflow automation, and LLM-powered systems that cut manual work and scale operations.',
    items: ['AI Agents & Apps', 'Workflow Automation', 'Generative AI', 'AI Integration'],
  },
  {
    icon: PenTool,
    title: 'UX/UI & Branding',
    description:
      'Strategy-led design that turns complex products into simple, usable, and memorable experiences.',
    items: ['Brand Identity', 'Product Design', 'Design Systems', 'Prototyping'],
  },
  {
    icon: Code2,
    title: 'Product Engineering',
    description:
      'Full-stack web and mobile engineering built for scale, from MVP sprints to enterprise platforms.',
    items: ['Web Development', 'Mobile Apps', 'API & Backend', 'Cloud Infrastructure'],
  },
  {
    icon: Workflow,
    title: 'Enterprise Transformation',
    description:
      'Legacy modernization and digital transformation for complex, regulated organizations.',
    items: ['Legacy Modernization', 'Supply Chain Systems', 'Workflow Digitization'],
  },
  {
    icon: ShieldCheck,
    title: 'QA & DevOps',
    description:
      'AI-assisted testing and CI/CD pipelines that keep releases fast and dependable.',
    items: ['Automated Testing', 'Performance Testing', 'CI/CD Integration'],
  },
  {
    icon: Rocket,
    title: 'MVP & Product Launch',
    description:
      'Ten-day MVP sprints that validate ideas fast, backed by a full delivery team when you scale.',
    items: ['Rapid Prototyping', 'Fixed-Scope MVPs', 'Growth Roadmapping'],
  },
];

const stats = [
  { value: 35, suffix: '+', label: 'Engineers & AI specialists' },
  { value: 50, suffix: '+', label: 'Enterprise clients scaled' },
  { value: 12, suffix: '+', label: 'Years of delivery experience' },
  { value: 80, suffix: '%', label: 'Faster delivery with AI workflows' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — dark, grain texture, blue glow, like Zylo */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="grain-overlay" />
        <div
          aria-hidden
          className="absolute -top-20 right-[8%] h-72 w-72 rounded-full bg-brand-blue/25 blur-3xl animate-blob"
        />
        <div
          aria-hidden
          className="absolute top-40 left-[5%] h-56 w-56 rounded-full bg-brand-blue/15 blur-3xl animate-blob"
          style={{ animationDelay: '3s' }}
        />

        <div className="container-x relative section-pad flex flex-col items-center text-center">
          <Reveal>
            <span className="eyebrow border-white/15 bg-white/5 text-white">
              AI-first digital engineering partner
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] text-white lg:text-6xl">
              We unite strategy, design, and AI engineering into one
              <span className="text-brand-blue"> scalable system.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-white/60">
              IKFTECH builds custom AI agents, automation systems, and
              full-stack software for enterprises and ambitious product teams —
              cutting delivery timelines by up to 80% without cutting quality.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary bg-brand-blue hover:bg-white hover:text-brand-black">
                Book a free call <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/case-studies"
                className="btn-outline border-white/20 bg-transparent text-white hover:border-brand-blue hover:text-brand-blue"
              >
                View our work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* STATS — animated counters */}
      <section className="border-b border-brand-line bg-brand-mist">
        <div className="container-x grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center lg:text-left">
              <p className="text-3xl font-bold text-brand-black lg:text-4xl font-display">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-brand-ink/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <Reveal className="max-w-xl">
              <span className="eyebrow">What we do</span>
              <h2 className="mt-4 text-3xl font-bold text-brand-black lg:text-4xl">
                Every phase of your product lifecycle, covered.
              </h2>
              <p className="mt-4 text-brand-ink/60">
                From first strategy conversation to enterprise-scale
                deployment, our AI-augmented teams compress what normally
                takes a large agency into a lean, senior-led delivery model.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/services" className="btn-outline">
                All services <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.1}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad bg-brand-mist">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">How we work</span>
            <h2 className="mt-4 max-w-xl text-3xl font-bold text-brand-black lg:text-4xl">
              A tight, senior-led process built for speed and accountability.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-4">
            {[
              { step: '01', title: 'Discover', desc: 'Align on goals, scope, and success metrics.' },
              { step: '02', title: 'Design', desc: 'Prototype the experience before writing production code.' },
              { step: '03', title: 'Build', desc: 'AI-augmented engineering ships in short, reviewable sprints.' },
              { step: '04', title: 'Scale', desc: 'Harden, monitor, and grow the system post-launch.' },
            ].map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <span className="text-sm font-bold text-brand-blue font-display">{p.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-brand-black">{p.title}</h3>
                <p className="mt-2 text-sm text-brand-ink/60">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES STRIP */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Industries</span>
            <h2 className="mt-4 max-w-xl text-3xl font-bold text-brand-black lg:text-4xl">
              Proven delivery patterns across 25+ industries.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                'Fintech', 'Healthcare', 'E-commerce & Retail', 'Logistics',
                'Real Estate', 'SaaS', 'Web3', 'Education', 'Travel', 'Manufacturing',
              ].map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-brand-line px-5 py-2 text-sm font-medium text-brand-ink/70 transition hover:border-brand-blue hover:text-brand-blue"
                >
                  {i}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
