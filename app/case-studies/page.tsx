'use client';
import CTASection from '@/components/CTASection';
import Reveal from '@/components/Reveal';
import { ArrowUpRight } from 'lucide-react';
import WorkHero from '@/components/work/WorkHero';
import { useState } from 'react';
import WorkFilters from '@/components/work/WorkFilters';
import CaseStudyCard from '@/components/work/CaseStudyCard';
const cases = [
  {
    tag: 'Fintech',
    title: 'Rebuilding a payments dashboard for scale',
    result: 'Cut transaction processing latency by 45% and shipped a full UI redesign in 8 weeks.',
  },
  {
    tag: 'Healthcare',
    title: 'AI-assisted patient intake system',
    result: 'Automated 60% of manual intake steps, reducing front-desk workload significantly.',
  },
  {
    tag: 'E-commerce',
    title: 'Headless storefront migration',
    result: 'Improved page speed by 3x and lifted conversion rate across mobile traffic.',
  },
  {
    tag: 'SaaS',
    title: 'Multi-tenant platform re-architecture',
    result: 'Reduced infrastructure cost by 35% while supporting 10x more concurrent tenants.',
  },
  {
    tag: 'Logistics',
    title: 'Real-time fleet tracking system',
    result: 'Delivered a command-and-control dashboard covering 500+ vehicles in production.',
  },
  {
    tag: 'Web3',
    title: 'Wallet and on-chain analytics app',
    result: 'Launched MVP in 10 days, validated with early users, then scaled to full product.',
  },
];
export default function CaseStudiesPage() {

  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  return (
    <>
      <WorkHero />

      <WorkFilters
        active={activeFilter}
        setActive={setActiveFilter}
        search={search}
        setSearch={setSearch}
      />

      <section className="section-pad">

        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {cases.map((c, i) => (

            <Reveal
              key={c.title}
              delay={(i % 3) * 0.1}
            >

              <CaseStudyCard
                title={c.title}
                description={c.result}
                industry={c.tag}
                href="#"
                duration="8 Weeks"
                team="5 Engineers"
                metrics={[
                  "45% Faster",
                  "60% Cost Saving",
                ]}
                technologies={[
                  "Next.js",
                  "React",
                  "Node.js",
                  "AWS",
                  "OpenAI",
                ]}
              />

            </Reveal>

          ))}

        </div>

      </section>

      <CTASection />
    </>
  );
}