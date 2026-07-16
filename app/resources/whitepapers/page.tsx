import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { FileText, Download } from 'lucide-react';

const papers = [
  { title: 'The Enterprise Guide to AI Strategy', desc: 'A framework for evaluating and rolling out AI across your organization.' },
  { title: 'Cloud Cost Optimization Playbook', desc: 'Practical steps to cut cloud spend without sacrificing performance.' },
  { title: 'Digital Transformation for Regulated Industries', desc: 'How to modernize legacy systems in fintech and healthcare safely.' },
];

export default function WhitepapersPage() {
  return (
    <>
      <section className="relative overflow-hidden section-pad gradient-hero">
        <div className="grain-overlay" />
        <div aria-hidden className="absolute -top-16 right-[10%] h-64 w-64 rounded-full bg-brand-blue/25 blur-3xl animate-blob" />
        <div className="container-x relative text-center">
          <Reveal>
            <span className="eyebrow border-white/15 bg-white/5 text-white">
              <FileText size={13} className="mr-1 inline" /> White Papers & eBooks
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
              In-depth guides on AI, cloud, and digital transformation.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {papers.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="card flex h-full flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-brand-black">{p.title}</h3>
                  <p className="mt-2 text-sm text-brand-ink/60">{p.desc}</p>
                </div>
                <button className="btn-outline mt-6 w-fit">
                  Download <Download size={16} />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
