import Link from 'next/link';
import Image from 'next/image';
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
import ProcessSection from "@/components/home/ProcessSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import AICapabilitiesBento from "@/components/home/AICapabilitiesBento";
import EngineeringImpact from "@/components/EngineeringImpact";
import ServiceCard from '@/components/ServiceCard';
import DashboardMockup from '@/components/DashboardMockup';
import ImpactMetrics from '@/components/ImpactMetrics';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import WorkHero from '@/components/work/WorkHero';

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
      {/* HERO — dark, grain texture, blue glow, photo background */}
     
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0">
          <Image
            src="/images/header-bg.jpg"
            alt=""
            fill
            priority
            className="object-cover object-[center_20%] opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/55 to-brand-black/85" />
        </div>
        <div className="grain-overlay" />
        <div
          aria-hidden
          className="absolute -top-20 right-[8%] h-72 w-72 rounded-full bg-brand-cherry/30 blur-3xl animate-blob"
        />
        <div
          aria-hidden
          className="absolute top-40 left-[5%] h-56 w-56 rounded-full bg-brand-cherry/20 blur-3xl animate-blob"
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
              <span className="text-brand-cherry"> scalable system.</span>
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
              <Link href="/contact" className="btn-primary bg-brand-cherry hover:bg-white hover:text-brand-black">
                Book a free call <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/case-studies"
                className="btn-outline border-white/20 bg-transparent text-white hover:border-brand-cherry hover:text-brand-cherry"
              >
                View our work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

     
     
      {/* SERVICES */}
<section className="section-pad">
  <div className="container-x">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <Reveal>
          <span className="eyebrow !text-brand-cherry">What we do</span>

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
          <Link
            href="/services"
            className="mt-6 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-brand-black/15 bg-white px-6 py-3 text-sm font-semibold text-brand-black transition hover:border-brand-cherry hover:bg-brand-cherry hover:text-white"
          >
            All services <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <DashboardMockup />
      </Reveal>
    </div>
  </div>
</section>
     {/* HOW WE WORK */}


<ProcessSection />


      
     {/* INDUSTRIES */}
<IndustriesSection />


      <AICapabilitiesBento />
{/* ENGINEERING IMPACT */}

<EngineeringImpact />
      <Testimonials />
      <CTASection />
    </>
  );
}