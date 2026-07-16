import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { BookOpen } from 'lucide-react';

const posts = [
  { title: 'Why Application Maintenance Is as Important as Development', read: '5 min read', tag: 'Engineering' },
  { title: 'MVP Development With AI: Launch Your Product 2x Faster', read: '6 min read', tag: 'AI' },
  { title: 'App Development Cost in 2026: Web, Mobile & AI Pricing', read: '7 min read', tag: 'Strategy' },
  { title: 'Offshore App Development: Hiring Guide', read: '4 min read', tag: 'Delivery' },
  { title: 'Enterprise Application Development and Software Scalability', read: '6 min read', tag: 'Enterprise' },
  { title: 'What Is an AI-Enabled Development Guide?', read: '5 min read', tag: 'AI' },
];

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden section-pad gradient-hero">
        <div className="grain-overlay" />
        <div aria-hidden className="absolute -top-16 left-[10%] h-64 w-64 rounded-full bg-brand-blue/25 blur-3xl animate-blob" />
        <div className="container-x relative text-center">
          <Reveal>
            <span className="eyebrow border-white/15 bg-white/5 text-white">
              <BookOpen size={13} className="mr-1 inline" /> Blog
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
              Insights on AI, engineering, and building systems that last.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.1}>
              <div className="card h-full cursor-pointer transition hover:-translate-y-1 hover:border-brand-blue/40">
                <span className="eyebrow">{p.tag}</span>
                <h3 className="mt-4 text-base font-semibold leading-snug text-brand-black">
                  {p.title}
                </h3>
                <p className="mt-3 text-xs text-brand-ink/50">{p.read}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
