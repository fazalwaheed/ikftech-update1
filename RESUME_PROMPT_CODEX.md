# RESUME PROMPT — paste this whole thing into Codex

You are continuing work on an existing Next.js 14 (App Router + TypeScript + Tailwind + Framer Motion) project at the repo root. Do NOT scaffold a new project — edit the existing files below.

## Context
The navbar mega-menu currently renders every category as static side-by-side columns. It must instead match a reference site's exact behavior, which has TWO distinct mega-menu layouts:

1. **`tabbed` layout** (used by the Services menu): the left column is a list of clickable/hoverable CATEGORY TABS (not a static info sidebar). Only the currently-active tab's items render, in a 2-column grid. The right column is a STATIC "Featured Work" promo card (image + tags + title + "View case study" link + a bottom CTA block with a "Book a Call" button) — it does NOT change on hover, it's the same for the whole menu.
2. **`grid` layout** (used by Industries / Company / Resources menus): left column (optional) is a static info sidebar with a title, description, and bullet stats. Middle shows ALL items in a grid (no tabs). Right column shows a decorative static graphic by default, and on hovering an item, swaps to a preview card (icon + item title + description) — this hover-preview behavior already exists in the current component and should be preserved for `grid` layout only.

Some items also have an `external?: boolean` flag and should render a small external-link icon next to them.

## Step 1 — `lib/navigation.ts` (already updated, verify it matches exactly)

Replace the entire file with this content:

```ts
import {
  Rocket, TrendingUp, Briefcase, Shield, Bot, Sparkles, Database, Layers,
  PenTool, Code2, Cloud, Lock, Puzzle, BarChart3, Info, Compass, Zap,
  Users, BookOpen, FileText, Newspaper, Search,
} from 'lucide-react';

export type MenuItem = {
  label: string;
  href: string;
  description?: string;
  icon?: any;
  badge?: string;
  external?: boolean;
};

export type MenuColumn = {
  title: string;
  items: MenuItem[];
};

export type FeaturedWork = {
  image: string;
  tags: string[];
  title: string;
  href: string;
};

export type MegaMenuConfig = {
  key: string;
  label: string;
  eyebrow: string;
  layout: 'tabbed' | 'grid';
  sidebar?: { title: string; description: string; bullets: string[] };
  columns: MenuColumn[];
  viewAllHref: string;
  viewAllLabel: string;
  featuredWork?: FeaturedWork;
};

export const servicesMenu: MegaMenuConfig = {
  key: 'services',
  label: 'Services',
  eyebrow: 'Our expertise',
  layout: 'tabbed',
  viewAllHref: '/services',
  viewAllLabel: 'View all services',
  featuredWork: {
    image: '/images/featured-altflow.jpg',
    tags: ['SaaS', 'AI', 'Featured'],
    title: 'Altflow — AI tool that creates SEO-optimized articles at scale',
    href: '/case-studies/altflow',
  },
  columns: [
    {
      title: 'AI & Data Innovation',
      items: [
        { label: 'AI Agents & Apps', href: '/services/ai-agents-apps', description: 'Autonomous LLM-powered workflows', icon: Bot, badge: 'NEW' },
        { label: 'Generative AI', href: '/services/generative-ai', description: 'Custom GenAI products & tools', icon: Sparkles },
        { label: 'Machine Learning Solutions', href: '/services/machine-learning', description: 'Predictive models & ML pipelines', icon: Database },
        { label: 'Data Analytics & BI', href: '/services/data-analytics', description: 'BI dashboards & predictive insights', icon: BarChart3, external: true },
      ],
    },
    {
      title: 'Engineering',
      items: [
        { label: 'AI Software Development', href: '/services/ai-software-development', description: 'Front-End, Back-End, Full-Stack', icon: Code2, external: true },
        { label: 'MVP Development', href: '/services/mvp-development', description: 'Rapid prototyping, investor-ready', icon: Rocket },
        { label: 'Application Development Benefits', href: '/services/application-development', description: 'Enterprise app development', icon: Layers },
        { label: 'Mobile Development', href: '/services/mobile-development', description: 'iOS, Android, Cross-platform', icon: Cloud },
        { label: 'Landing Page', href: '/services/landing-page', description: 'High-converting landing pages', icon: FileText },
        { label: 'Custom AI Solutions', href: '/services/custom-ai-solutions', description: 'Tailored AI implementations', icon: Puzzle },
      ],
    },
    {
      title: 'Branding Services',
      items: [
        { label: 'Pitch Deck', href: '/services/pitch-deck', description: 'Investor-ready storytelling', icon: FileText },
        { label: 'Brand Identity', href: '/services/brand-identity', description: 'Logo, voice, and visual systems', icon: PenTool },
        { label: 'Logo Design', href: '/services/logo-design', description: 'Distinct, memorable marks', icon: Sparkles },
        { label: 'Graphic Design', href: '/services/graphic-design', description: 'Visual assets across channels', icon: Layers },
        { label: 'Rebranding', href: '/services/rebranding', description: 'Refresh an existing identity', icon: PenTool },
      ],
    },
    {
      title: 'Design Services',
      items: [
        { label: 'UI/UX Design', href: '/services/ui-ux-design', description: 'Product design that converts', icon: Layers },
        { label: 'Web Design', href: '/services/web-design', description: 'Conversion-focused web design', icon: PenTool },
        { label: 'Custom App Development Services', href: '/services/custom-app-development', description: 'Bespoke app experiences', icon: Puzzle },
        { label: 'Website Redesign', href: '/services/website-redesign', description: 'Modernize an aging site', icon: Compass },
        { label: 'UX/UI Audit', href: '/services/ux-ui-audit', description: 'Find and fix usability gaps', icon: Search },
      ],
    },
    {
      title: 'Cloud & Infrastructure',
      items: [
        { label: 'Cloud Strategy', href: '/services/cloud-strategy', description: 'Architecture roadmap & planning', icon: Cloud },
        { label: 'Cloud Migration', href: '/services/cloud-migration', description: 'Move workloads without downtime', icon: Cloud },
        { label: 'CloudOps & DevOps', href: '/services/cloudops-devops', description: 'CI/CD, infra, and scale', icon: Shield },
        { label: 'Cloud Engineering', href: '/services/cloud-engineering', description: 'Custom infra engineering', icon: Database },
        { label: 'Cloud Security', href: '/services/cloud-security', description: 'Hardened, compliant cloud', icon: Lock },
      ],
    },
    {
      title: 'Cybersecurity',
      items: [
        { label: 'Cyber Consulting', href: '/services/cyber-consulting', description: 'Security strategy & posture review', icon: Shield },
        { label: 'Penetration Testing', href: '/services/penetration-testing', description: 'Find vulnerabilities before attackers do', icon: Lock },
        { label: 'GRC Framework', href: '/services/grc-framework', description: 'Governance, risk & compliance', icon: FileText },
        { label: 'Data Security', href: '/services/data-security', description: 'Protect sensitive data end-to-end', icon: Lock },
        { label: 'Security Automation', href: '/services/security-automation', description: 'Automated threat response', icon: Zap },
      ],
    },
    {
      title: 'Solutions & Integrations',
      items: [
        { label: 'Salesforce', href: '/services/salesforce', description: 'CRM implementation & customization', icon: Puzzle },
        { label: 'Dynamics 365', href: '/services/dynamics-365', description: 'Microsoft business applications', icon: Puzzle },
        { label: 'AWS Solutions', href: '/services/aws-solutions', description: 'Cloud-native architecture on AWS', icon: Cloud },
        { label: 'Power BI', href: '/services/power-bi', description: 'Business intelligence dashboards', icon: BarChart3 },
        { label: 'MuleSoft', href: '/services/mulesoft', description: 'API-led integration', icon: Puzzle },
      ],
    },
    {
      title: 'Business & Engagement',
      items: [
        { label: 'Dedicated Team', href: '/services/dedicated-team', description: 'Senior engineers, embedded with you', icon: Users },
        { label: 'Back-Office Automation', href: '/services/back-office-automation', description: 'Automate operational workflows', icon: Zap },
        { label: 'Finance Outsourcing', href: '/services/finance-outsourcing', description: 'Accounting & finance ops support', icon: Briefcase },
        { label: 'HR Outsourcing', href: '/services/hr-outsourcing', description: 'End-to-end HR operations', icon: Users },
        { label: 'Digital Marketing', href: '/services/digital-marketing', description: 'Growth-focused marketing execution', icon: TrendingUp },
      ],
    },
  ],
};

export const industriesMenu: MegaMenuConfig = {
  key: 'industries',
  label: 'Industries',
  eyebrow: 'Industries we serve',
  layout: 'grid',
  sidebar: {
    title: 'Industry Solutions',
    description: 'Tailored digital solutions for modern businesses',
    bullets: [
      '10+ Industries Covered',
      '200+ Successful Projects',
      'Global Client Base',
      'Industry Experts',
      'Award-Winning Work',
      'Strategic Partnerships',
    ],
  },
  viewAllHref: '/industries',
  viewAllLabel: 'View all industries',
  columns: [
    {
      title: 'Industries',
      items: [
        { label: 'Web3 & Blockchain', href: '/industries/web3-blockchain', description: 'DeFi, DEX, NFT, Smart Contracts', icon: Rocket },
        { label: 'Fintech & Banking', href: '/industries/fintech-banking', description: 'Payments, exchanges, wealth mgmt', icon: TrendingUp },
        { label: 'SaaS & Enterprise', href: '/industries/saas-enterprise', description: 'CRM, HR, AI, ERP, automation', icon: Briefcase },
        { label: 'Healthcare & Wellness', href: '/industries/healthcare-wellness', description: 'Mental health, insurance, telemedicine', icon: Shield },
        { label: 'E-commerce & Retail', href: '/industries/ecommerce-retail', description: 'Storefronts, inventory, growth', icon: BarChart3 },
        { label: 'Logistics & Supply Chain', href: '/industries/logistics-supply-chain', description: 'Tracking, routing, fleet systems', icon: Layers },
      ],
    },
  ],
};

export const companyMenu: MegaMenuConfig = {
  key: 'company',
  label: 'Company',
  eyebrow: 'Company',
  layout: 'grid',
  viewAllHref: '/about',
  viewAllLabel: 'View all company pages',
  columns: [
    {
      title: 'Company',
      items: [
        { label: 'About Us', href: '/about', description: 'Who we are, our mission, and how we make a difference', icon: Info },
        { label: 'How We Work', href: '/how-we-work', description: 'Our methodology for delivering reliable, future-proof software', icon: Compass },
        { label: 'AI-First Company', href: '/ai-first', description: 'Our approach to building intelligent, scalable solutions', icon: Sparkles, badge: 'NEW' },
        { label: 'Careers', href: '/careers', description: 'Join our global team — open roles across engineering, design, and more', icon: Users },
      ],
    },
  ],
};

export const resourcesMenu: MegaMenuConfig = {
  key: 'resources',
  label: 'Resources',
  eyebrow: 'Resources',
  layout: 'grid',
  viewAllHref: '/blog',
  viewAllLabel: 'View all resources',
  columns: [
    {
      title: 'Resources',
      items: [
        { label: 'Blog', href: '/blog', description: 'Insights on AI, engineering, and building systems that last', icon: BookOpen },
        { label: 'White Papers & eBooks', href: '/resources/whitepapers', description: 'In-depth guides on AI strategy, cloud optimization, and digital transformation', icon: FileText },
        { label: 'Newsroom', href: '/newsroom', description: 'Latest news, press releases, and company announcements', icon: Newspaper },
      ],
    },
  ],
};

export const allMenus = [servicesMenu, industriesMenu, companyMenu, resourcesMenu];
```

## Step 2 — rewrite `components/MegaMenu.tsx` completely with this:

```tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, ExternalLink, ArrowUpRight } from 'lucide-react';
import type { MegaMenuConfig, MenuItem } from '@/lib/navigation';

export default function MegaMenu({
  menu,
  onNavigate,
}: {
  menu: MegaMenuConfig;
  onNavigate: () => void;
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [hovered, setHovered] = useState<MenuItem | null>(null);
  const isTabbed = menu.layout === 'tabbed';
  const hasSidebar = !!menu.sidebar;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-1/2 top-full z-40 mt-3 w-[min(96vw,1100px)] -translate-x-1/2"
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-brand-black shadow-2xl">
        {/* header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50">
            <Sparkles size={13} className="text-brand-blue" />
            {menu.eyebrow}
          </span>
          <Link
            href={menu.viewAllHref}
            onClick={onNavigate}
            className="flex items-center gap-1 text-sm font-medium text-white/70 transition hover:text-brand-blue"
          >
            {menu.viewAllLabel} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="flex">
          {/* LEFT: tab list (tabbed layout) or static info sidebar (grid layout) */}
          {isTabbed ? (
            <div className="hidden w-64 shrink-0 border-r border-white/10 bg-white/[0.03] py-3 lg:block">
              {menu.columns.map((col, i) => (
                <button
                  key={col.title}
                  onMouseEnter={() => setActiveTab(i)}
                  onFocus={() => setActiveTab(i)}
                  className={`flex w-full items-center justify-between px-6 py-3 text-left text-sm transition ${
                    activeTab === i
                      ? 'bg-white/5 font-semibold text-white'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {col.title}
                  {activeTab === i && <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />}
                </button>
              ))}
            </div>
          ) : (
            hasSidebar && (
              <div className="hidden w-64 shrink-0 border-r border-white/10 bg-white/[0.03] p-6 lg:block">
                <h4 className="text-base font-semibold text-white">{menu.sidebar!.title}</h4>
                <p className="mt-2 text-sm text-white/50">{menu.sidebar!.description}</p>
                <ul className="mt-6 space-y-3">
                  {menu.sidebar!.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-blue" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}

          {/* MIDDLE: item grid — active tab only (tabbed) or all items (grid) */}
          <div className="grid flex-1 grid-cols-1 gap-x-8 gap-y-6 p-6 sm:grid-cols-2">
            {(isTabbed ? [menu.columns[activeTab]] : menu.columns).map((col) => (
              <div key={col.title} className={isTabbed ? 'contents' : ''}>
                {!isTabbed && menu.columns.length > 1 && (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                    {col.title}
                  </p>
                )}
                {col.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onNavigate}
                      onMouseEnter={() => setHovered(item)}
                      className="group flex items-start gap-3 rounded-lg p-2.5 transition hover:bg-white/5"
                    >
                      {Icon && (
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/70 transition group-hover:bg-brand-blue/20 group-hover:text-brand-blue">
                          <Icon size={16} />
                        </span>
                      )}
                      <span className="flex-1">
                        <span className="flex items-center gap-2 text-sm font-medium text-white transition group-hover:text-brand-blue">
                          {item.label}
                          {item.badge && (
                            <span className="rounded-full bg-brand-blue px-1.5 py-0.5 text-[10px] font-bold text-white">
                              {item.badge}
                            </span>
                          )}
                          {item.external && (
                            <ExternalLink size={12} className="text-white/30 group-hover:text-brand-blue" />
                          )}
                        </span>
                        {item.description && (
                          <span className="mt-0.5 block text-xs text-white/45">{item.description}</span>
                        )}
                      </span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>

          {/* RIGHT: static Featured Work card (tabbed) or decorative graphic + hover-preview (grid) */}
          <div className="hidden w-72 shrink-0 border-l border-white/10 bg-gradient-to-br from-brand-blue/10 via-transparent to-transparent p-6 xl:flex xl:flex-col xl:justify-center">
            {isTabbed && menu.featuredWork ? (
              <div>
                <span className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                  <Sparkles size={12} className="text-brand-blue" /> Featured Work
                </span>
                <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <div className="aspect-[4/3] w-full bg-gradient-to-br from-brand-blue/30 to-brand-blue/5" />
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {menu.featuredWork.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/60">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm font-semibold leading-snug text-white">
                  {menu.featuredWork.title}
                </p>
                <Link
                  href={menu.featuredWork.href}
                  onClick={onNavigate}
                  className="mt-2 flex items-center gap-1 text-sm font-medium text-brand-blue"
                >
                  View case study <ArrowRight size={13} />
                </Link>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-sm text-white/50">Ready to transform your digital presence?</p>
                  <Link
                    href="/contact"
                    onClick={onNavigate}
                    className="btn-primary mt-3 w-full justify-center bg-brand-blue hover:bg-white hover:text-brand-black"
                  >
                    Book a Call <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                {hovered ? (
                  <motion.div
                    key={hovered.href}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="text-center"
                  >
                    {hovered.icon && (
                      <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/15 text-brand-blue">
                        <hovered.icon size={26} />
                      </span>
                    )}
                    <p className="text-base font-semibold text-white">{hovered.label}</p>
                    <p className="mt-2 text-sm text-white/50">{hovered.description}</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-4 text-center"
                  >
                    <div className="relative h-28 w-28">
                      <div className="absolute inset-0 rotate-6 rounded-2xl bg-gradient-to-br from-brand-blue/40 to-brand-blue/10 blur-[1px]" />
                      <div className="absolute inset-2 -rotate-3 rounded-2xl bg-gradient-to-br from-brand-blue/30 to-transparent" />
                      <div className="absolute inset-4 rotate-3 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-transparent" />
                    </div>
                    <p className="flex items-center gap-2 text-sm text-white/30">
                      <Sparkles size={14} /> Hover to explore
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
```

## Step 3 — verify
Run `npm run build` at the repo root. It must compile with zero errors across all routes (home, services, services/[slug], industries, industries/[slug], about, case-studies, contact, how-we-work, ai-first, careers, blog, resources/whitepapers, newsroom).

Do not touch `components/Navbar.tsx` — it already renders `<MegaMenu menu={menu} onNavigate={...} />` generically and needs no changes for this update.

If any TypeScript error mentions `hovered.icon` being used as a JSX component, that's expected/valid (it's a LucideIcon component reference) — do not "fix" it by removing the dynamic component render.
