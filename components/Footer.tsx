import Link from 'next/link';
import { MapPin, ChevronRight, Phone, Mail, Sparkles, ArrowUpRight } from 'lucide-react';
import { servicesMenu } from '@/lib/navigation';
import BackToTop from '@/components/BackToTop';

const offices = [
  { code: 'PK', country: 'Pakistan', address: '2, Sector D DHA Phase 6, Lahore, Pakistan' },
  { code: 'AE', country: 'UAE', address: 'B58-107 Sharjah Research Technology & Innovation Park' },
  { code: 'GB', country: 'UK', address: 'London, United Kingdom' },
  { code: 'US', country: 'USA', address: '1600 Broadway, Suite 1200, Denver, CO 80202, United States' },
];

const socials = [
  {
    name: 'Instagram',
    hover: 'hover:text-[#E4405F]',
    path: 'M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.1-2.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z',
  },
  {
    name: 'LinkedIn',
    hover: 'hover:text-[#0A66C2]',
    path: 'M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM20.5 20.5v-6.6c0-3.53-1.88-5.17-4.4-5.17-2.03 0-2.94 1.12-3.44 1.9V8.5H9.28c.04.93 0 12 0 12h3.38v-6.7c0-.36.02-.72.13-.98.29-.72.94-1.47 2.04-1.47 1.44 0 2.02 1.1 2.02 2.7v6.45h3.65Z',
  },
  {
    name: 'Facebook',
    hover: 'hover:text-[#1877F2]',
    path: 'M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-.95.26-1.6 1.63-1.6H17V3.5c-.3-.04-1.3-.13-2.46-.13-2.44 0-4.1 1.49-4.1 4.22v2.35H7.6v3.3h2.84V22h3.06Z',
  },
  {
    name: 'YouTube',
    hover: 'hover:text-[#FF0000]',
    path: 'M21.6 7.6a2.75 2.75 0 0 0-1.94-1.95C18 5.2 12 5.2 12 5.2s-6 0-7.66.45A2.75 2.75 0 0 0 2.4 7.6 28.7 28.7 0 0 0 2 12a28.7 28.7 0 0 0 .4 4.4 2.75 2.75 0 0 0 1.94 1.95C6 18.8 12 18.8 12 18.8s6 0 7.66-.45a2.75 2.75 0 0 0 1.94-1.95A28.7 28.7 0 0 0 22 12a28.7 28.7 0 0 0-.4-4.4ZM10 15V9l5.2 3-5.2 3Z',
  },
  {
    name: 'X',
    hover: 'hover:text-[#1D9BF0]',
    path: 'M18.9 3H21l-6.6 7.55L22.2 21h-6.1l-4.8-6.28L5.8 21H3.7l7.05-8.07L2.4 3h6.24l4.34 5.74L18.9 3Zm-1.06 16.17h1.17L7.24 4.75H5.98l11.86 14.42Z',
  },
];

export default function Footer() {
  const columns = servicesMenu.columns.map((col) => ({
    title: col.title,
    items: col.items.slice(0, 5),
  }));

  return (
    <footer className="bg-gradient-to-b from-[#eef3fc] via-[#f2eefb] to-[#fbeef6] text-brand-black">
      {/* top CTA block */}
      <div className="border-b border-black/5">
        <div className="container-x flex flex-col items-center py-16 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-black">
            <Sparkles size={24} className="text-white" />
          </span>
          <h2 className="mt-6 text-3xl font-bold text-brand-black lg:text-4xl">
            Book a Free Consultation Today
          </h2>
          <p className="mt-3 max-w-md text-sm text-brand-black/50">
            Talk to our engineering and AI strategy team about your project —
            whenever and wherever works for you.
          </p>
          <Link
            href="/contact"
            className="btn-primary mt-6 bg-brand-blue hover:bg-brand-black"
          >
            Book a Call <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.1fr_2.5fr]">
        {/* left: brand + contact */}
        <div>
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-tight text-brand-blue">IKFTECH</span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-brand-black/40">
              Innovating the Future of Technology
            </span>
          </Link>

          <p className="mt-6 text-sm font-semibold text-brand-black">Drop us a line</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-brand-black/50">
            IKFTECH helps businesses accelerate digital transformation through AI, software
            development, cloud solutions, and enterprise technology consulting.
          </p>

          <div className="mt-6 space-y-3 border-t border-black/10 pt-6">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-blue shadow-sm">
                <Phone size={14} />
              </span>
              <span className="text-sm text-brand-black/60">+971 50 756 2346</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-blue shadow-sm">
                <MapPin size={14} />
              </span>
              <span className="text-sm text-brand-black/60">2, Sector D DHA Phase 6, Lahore, Pakistan</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-blue shadow-sm">
                <Mail size={14} />
              </span>
              <span className="text-sm text-brand-black/60">contact@ikftech.com</span>
            </div>
          </div>

          <Link href="/contact" className="btn-outline mt-6 border-black/15 bg-white text-brand-black hover:border-brand-blue hover:text-brand-blue">
            Book a Consultation
          </Link>
        </div>

        {/* right: 8-category link grid, 4 cols x 2 rows */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-brand-black">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-brand-black/50 transition hover:text-brand-blue"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* global offices */}
      <div className="container-x pb-12">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-brand-black/40">
          Global Offices
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o) => (
            <div key={o.country} className="rounded-xl border border-black/10 bg-white/70 p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-brand-blue" />
                <span className="text-[10px] font-bold text-brand-black/40">{o.code}</span>
                <span className="text-sm font-semibold text-brand-black">{o.country}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-brand-black/50">{o.address}</p>
            </div>
          ))}
        </div>

        <Link
          href="/services"
          className="mt-4 flex items-center justify-between rounded-xl border border-black/10 bg-white/70 px-5 py-3.5 text-sm text-brand-black/60 shadow-sm transition hover:border-brand-blue/40 hover:text-brand-black"
        >
          Show all services (40+)
          <ChevronRight size={16} />
        </Link>
      </div>

      {/* bottom bar */}
      <div className="border-t border-black/10">
        <div className="container-x flex flex-col items-center justify-between gap-6 py-6 text-xs text-brand-black/50 lg:flex-row">
          <p>© {new Date().getFullYear()} IKFTECH. All rights reserved.</p>

          <div className="flex gap-5">
            {socials.map((s) => (
              <a
                key={s.name}
                href="#"
                aria-label={s.name}
                className={`text-brand-black/40 transition ${s.hover}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-brand-black">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-brand-black">Cookie Policy</Link>
            <Link href="/editorial-policy" className="hover:text-brand-black">Editorial Policy</Link>
            <BackToTop />
          </div>
        </div>
      </div>
    </footer>
  );
}