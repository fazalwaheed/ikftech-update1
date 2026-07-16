import Reveal from '@/components/Reveal';

const quotes = [
  {
    quote:
      'They delivered every milestone on schedule and kept communication tight throughout — that reliability was a big part of why the project succeeded.',
    author: 'VP Engineering',
    company: 'Enterprise SaaS Client',
  },
  {
    quote:
      'The team understood our goals quickly and consistently proposed the right solution instead of just executing tickets.',
    author: 'Founder',
    company: 'Fintech Startup',
  },
  {
    quote:
      'Extremely organized, highly skilled, and genuinely thoughtful about solving hard UI/UX problems, not just building screens.',
    author: 'Product Lead',
    company: 'Healthcare Platform',
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-brand-mist">
      <div className="container-x">
        <Reveal className="max-w-xl">
          <span className="eyebrow">Client voices</span>
          <h2 className="mt-4 text-3xl font-bold text-brand-black lg:text-4xl">
            Trusted by teams who need to move fast without breaking things.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.author} delay={i * 0.1}>
              <div className="card flex h-full flex-col justify-between transition hover:-translate-y-1 hover:border-brand-blue/40">
                <p className="text-sm leading-relaxed text-brand-ink/70">
                  “{q.quote}”
                </p>
                <div className="mt-6 border-t border-brand-line pt-4">
                  <p className="text-sm font-semibold text-brand-black">
                    {q.author}
                  </p>
                  <p className="text-xs text-brand-ink/50">{q.company}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
