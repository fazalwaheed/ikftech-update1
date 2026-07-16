import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { Users, MapPin, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const roles = [
  { title: 'Senior Full-Stack Engineer', location: 'Remote / Lahore', type: 'Full-time' },
  { title: 'AI/ML Engineer', location: 'Remote / Dubai', type: 'Full-time' },
  { title: 'Product Designer (UI/UX)', location: 'Remote', type: 'Full-time' },
  { title: 'DevOps Engineer', location: 'Remote / Denver', type: 'Full-time' },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden section-pad gradient-hero">
        <div className="grain-overlay" />
        <div aria-hidden className="absolute -top-16 right-[10%] h-64 w-64 rounded-full bg-brand-blue/25 blur-3xl animate-blob" />
        <div className="container-x relative text-center">
          <Reveal>
            <span className="eyebrow border-white/15 bg-white/5 text-white">
              <Users size={13} className="mr-1 inline" /> Careers
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
              Join our global team.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Open roles across engineering, design, and more — work with a
              senior, AI-augmented team building real products.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x space-y-4">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <div className="card flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-lg font-semibold text-brand-black">{r.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-brand-ink/50">
                    <MapPin size={14} /> {r.location} · {r.type}
                  </p>
                </div>
                <Link href="/contact" className="btn-outline shrink-0">
                  Apply now <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
