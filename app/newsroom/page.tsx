import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { Newspaper } from 'lucide-react';

const news = [
  { date: 'Jun 2026', title: 'IKFTECH opens new delivery hub in Dubai Silicon Oasis' },
  { date: 'Apr 2026', title: 'IKFTECH named a Top AI Development Company' },
  { date: 'Feb 2026', title: 'IKFTECH crosses 50 enterprise clients milestone' },
];

export default function NewsroomPage() {
  return (
    <>
      <section className="relative overflow-hidden section-pad gradient-hero">
        <div className="grain-overlay" />
        <div aria-hidden className="absolute -top-16 left-[10%] h-64 w-64 rounded-full bg-brand-blue/25 blur-3xl animate-blob" />
        <div className="container-x relative text-center">
          <Reveal>
            <span className="eyebrow border-white/15 bg-white/5 text-white">
              <Newspaper size={13} className="mr-1 inline" /> Newsroom
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
              Latest news and announcements.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x mx-auto max-w-2xl space-y-6">
          {news.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.1}>
              <div className="card flex items-start gap-4">
                <span className="whitespace-nowrap text-sm font-semibold text-brand-blue">{n.date}</span>
                <p className="text-sm text-brand-ink/70">{n.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
