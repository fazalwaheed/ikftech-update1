import {
  Rocket, TrendingUp, Briefcase, Shield, Bot, Sparkles, Database, Layers,
  PenTool, Code2, Cloud, Lock, Puzzle, BarChart3, Info, Compass, Zap,
  Users, BookOpen, FileText, Newspaper, Search,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type MenuItem = {
  label: string;
  href: string;
  description?: string;
  icon?: any;
  badge?: string;
  external?: boolean;
  image?: string;
};

export type MenuColumn = {
  title: string;
  icon?: LucideIcon;
  iconImage?: string;
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
    image: '/images/icons/feature.JPG',
    tags: ['SaaS', 'AI', 'Featured'],
    title: 'Altflow — AI tool that creates SEO-optimized articles at scale',
    href: '/case-studies/altflow',
  },
  columns: [
    {
      title: 'AI & Data Innovation',
      icon: Bot,
      iconImage: '/images/icons/ai_eng.png',
      items: [
        { label: 'AI Pod', href: '/services/ai-pod', description: 'Build production-ready AI systems in weeks with a focused AI team.', icon: Bot, badge: 'NEW' },
        { label: 'GenAI Consulting & Workshops', href: '/services/genai-consulting', description: 'Strategy, workshops, roadmaps', icon: Sparkles },
        { label: 'AI PoC & MVP Development', href: '/services/ai-poc-mvp', description: 'Validate AI ideas fast', icon: Rocket },
        { label: 'AI Agents', href: '/services/ai-agents', description: 'Autonomous LLM-powered workflows', icon: Bot },
        { label: 'Machine Learning Solutions', href: '/services/machine-learning', description: 'Predictive models, ML pipelines', icon: Database, external: true },
        { label: 'Intelligent Data Solutions', href: '/services/intelligent-data-solutions', description: 'AI-driven process automation', icon: Zap },
        { label: 'AI Integration & Deployment', href: '/services/ai-integration-deployment', description: 'Pipelines, integration, warehousing', icon: Puzzle },
        { label: 'MLOps & AI Infrastructure', href: '/services/mlops-ai-infrastructure', description: 'Model ops, deployment & monitoring', icon: Layers },
        { label: 'Data Governance & Business Intelligence', href: '/services/data-governance-bi', description: 'BI dashboards, data quality', icon: BarChart3 },
        { label: 'Data-Driven Insights', href: '/services/data-driven-insights', description: 'Statistical models, forecasting', icon: TrendingUp },
        { label: 'AI Strategy Consulting', href: '/services/ai-strategy-consulting', description: 'Strategy, workshops, roadmaps', icon: Compass },
      ],
    },
    {
      title: 'Engineering',
      icon: Code2,
      iconImage: '/images/icons/engineering_1.png',
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
      icon: PenTool,
      iconImage: '/images/icons/brand_1.png',
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
      icon: Layers,
      iconImage: '/images/icons/design_1.png',
      items: [
        { label: 'UI/UX Design', href: '/services/ui-ux-design', description: 'Product design that converts', icon: Layers },
        { label: 'Web Design', href: '/services/web-design', description: 'Conversion-focused web design', icon: PenTool },
        { label: 'Custom App Development Services', href: '/services/custom-app-development', description: 'Bespoke app experiences', icon: Puzzle },
        { label: 'Website Redesign', href: '/services/website-redesign', description: 'Modernize an aging site', icon: Compass },
        { label: 'UX/UI Audit', href: '/services/ux-ui-audit', description: 'Find and fix usability gaps', icon: Search, external: true },
      ],
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      iconImage: '/images/icons/cloud_1.png',
      items: [
        { label: 'Cloud Strategy & Architecture', href: '/services/cloud-strategy-architecture', description: 'Architecture design & planning', icon: Cloud },
        { label: 'Cloud Migration', href: '/services/cloud-migration', description: 'Seamless workload transitions', icon: Cloud },
        { label: 'Infrastructure Modernization', href: '/services/infrastructure-modernization', description: 'Upgrade legacy infrastructure', icon: Database },
        { label: 'Cloud Engineering', href: '/services/cloud-engineering', description: 'Build & deploy cloud-native apps', icon: Layers },
        { label: 'CloudOps & DevOps', href: '/services/cloudops-devops', description: 'CI/CD, monitoring, operations', icon: Shield },
        { label: 'Support & Managed Cloud Services', href: '/services/managed-cloud-services', description: '24/7 operations support', icon: Users },
        { label: 'Cloud Cost Optimization', href: '/services/cloud-cost-optimization', description: 'Reduce cloud spend efficiently', icon: TrendingUp },
        { label: 'Multi Cloud Security & Compliance', href: '/services/multi-cloud-security', description: 'Compliance & security across clouds', icon: Lock },
      ],
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      iconImage: '/images/icons/cyber_1.png',
      items: [
        { label: 'Cybersecurity Consulting & Risk Assessment', href: '/services/cybersecurity-consulting', description: 'Risk assessment & security strategy', icon: Shield },
        { label: 'Governance, Risk & Compliance', href: '/services/governance-risk-compliance', description: 'GRC frameworks & policies', icon: FileText },
        { label: 'Application Security & Penetration Testing', href: '/services/application-security-testing', description: 'Pen testing, secure SDLC', icon: Lock },
        { label: 'Data Security & Encryption', href: '/services/data-security-encryption', description: 'Data protection & encryption', icon: Lock },
        { label: 'Cloud Security', href: '/services/cloud-security', description: 'Cloud-native security controls', icon: Cloud },
        { label: 'Security Automation', href: '/services/security-automation', description: 'Automated threat detection & response', icon: Zap },
      ],
    },
    {
      title: 'Solutions & Integrations',
      icon: Puzzle,
      iconImage: '/images/icons/solution_1.png',
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
      icon: Users,
      iconImage: '/images/icons/bussiness_1.png',
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
        { label: 'Web3 & Blockchain', href: '/industries/web3-blockchain', description: 'DeFi, DEX, NFT, Smart Contracts', icon: Rocket, external: true, image: '/images/blockchain_1.png' },
        { label: 'Fintech & Banking', href: '/industries/fintech-banking', description: 'Payments, exchanges, wealth mgmt', icon: TrendingUp, external: true, image: '/images/fintech_ai.png' },
        { label: 'SaaS & Enterprise', href: '/industries/saas-enterprise', description: 'CRM, HR, AI, ERP, automation', icon: Briefcase, image: '/images/enterprise_1.png' },
        { label: 'Healthcare & Wellness', href: '/industries/healthcare-wellness', description: 'Mental health, insurance, telemedicine', icon: Shield, image: '/images/health_1.png' },
        { label: 'E-commerce & Retail', href: '/industries/ecommerce-retail', description: 'Storefronts, inventory, growth', icon: BarChart3, image: '/images/retail_1.png' },
        { label: 'Logistics & Supply Chain', href: '/industries/logistics-supply-chain', description: 'Tracking, routing, fleet systems', icon: Layers, image: '/images/chain.png' },
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
        { label: 'About Us', href: '/about', description: 'Who we are, our mission, and how we make a difference', icon: Info, image: '/images/about_1.png' },
        { label: 'How We Work', href: '/how-we-work', description: 'Our methodology for delivering reliable, future-proof software', icon: Compass, image: '/images/work_1.png' },
        { label: 'AI-First Company', href: '/ai-first', description: 'Our approach to building intelligent, scalable solutions', icon: Sparkles, badge: 'NEW', image: '/images/ai_1.png' },
        { label: 'Careers', href: '/careers', description: 'Join our global team — open roles across engineering, design, and more', icon: Users, external: true, image: '/images/career_1.png' },
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
        { label: 'Blog', href: '/blog', description: 'Insights on AI, engineering, and building systems that last', icon: BookOpen, image: '/images/blog_1.png' },
        { label: 'White Papers & eBooks', href: '/resources/whitepapers', description: 'In-depth guides on AI strategy, cloud optimization, and digital transformation', icon: FileText, external: true, image: '/images/whitepaper_1.png' },
        { label: 'Newsroom', href: '/newsroom', description: 'Latest news, press releases, and company announcements', icon: Newspaper, external: true, image: '/images/letter_1.png' },
      ],
    },
  ],
};

export const allMenus = [servicesMenu, industriesMenu, companyMenu, resourcesMenu];
