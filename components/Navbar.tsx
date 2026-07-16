'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import MegaMenu from '@/components/MegaMenu';
import { allMenus } from '@/lib/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openMenu = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(key);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-brand-line bg-white/85 backdrop-blur-md shadow-sm'
          : 'border-b border-transparent bg-white/60 backdrop-blur-sm'
      }`}
      onMouseLeave={scheduleClose}
    >
      <div className="container-x flex h-18 items-center justify-between py-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-xl font-extrabold tracking-tight text-brand-blue font-display">
            IKFTECH
          </span>
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-brand-ink/40">
            Innovating the Future of Technology
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/case-studies" className="nav-link text-sm font-medium text-brand-ink/80 transition hover:text-brand-blue">
            Works
          </Link>
          {allMenus.map((menu) => (
            <div key={menu.key} onMouseEnter={() => openMenu(menu.key)}>
              <button
                className={`nav-link flex cursor-pointer items-center gap-1 text-sm font-medium transition ${
                  activeMenu === menu.key ? 'text-brand-blue' : 'text-brand-ink/80 hover:text-brand-blue'
                }`}
              >
                {menu.label}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${activeMenu === menu.key ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary">
            Let&apos;s connect <ArrowUpRight size={16} />
          </Link>
        </div>

        <button className="cursor-pointer lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* desktop mega-menu panels */}
      <div className="relative hidden lg:block">
        <div className="container-x relative">
          <AnimatePresence>
            {allMenus.map(
              (menu) =>
                activeMenu === menu.key && (
                  <div key={menu.key} onMouseEnter={() => openMenu(menu.key)}>
                    <MegaMenu menu={menu} onNavigate={() => setActiveMenu(null)} />
                  </div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-brand-line bg-white lg:hidden">
          <div className="container-x flex flex-col gap-1 py-6">
            <Link
              href="/case-studies"
              className="py-2 text-sm font-medium text-brand-ink/80"
              onClick={() => setOpen(false)}
            >
              Works
            </Link>
            {allMenus.map((menu) => (
              <div key={menu.key} className="border-t border-brand-line/60 py-2">
                <button
                  className="flex w-full cursor-pointer items-center justify-between py-2 text-sm font-medium text-brand-ink/80"
                  onClick={() => setMobileMenu(mobileMenu === menu.key ? null : menu.key)}
                >
                  {menu.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${mobileMenu === menu.key ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileMenu === menu.key && (
                  <div className="mt-1 space-y-4 pl-3">
                    {menu.columns.map((col) => (
                      <div key={col.title}>
                        {menu.columns.length > 1 && (
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-ink/40">
                            {col.title}
                          </p>
                        )}
                        <ul className="space-y-1">
                          {col.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="block py-1.5 text-sm text-brand-ink/70"
                                onClick={() => {
                                  setOpen(false);
                                  setMobileMenu(null);
                                }}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <Link
                      href={menu.viewAllHref}
                      className="block py-1.5 text-sm font-semibold text-brand-blue"
                      onClick={() => {
                        setOpen(false);
                        setMobileMenu(null);
                      }}
                    >
                      {menu.viewAllLabel} →
                    </Link>
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" className="btn-primary mt-4 w-fit" onClick={() => setOpen(false)}>
              Let&apos;s connect <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
