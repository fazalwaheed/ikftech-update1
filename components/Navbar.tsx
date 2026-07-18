'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import MegaMenu from '@/components/MegaMenu';
import ArrowHoverIcon from '@/components/ArrowHoverIcon';
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
      className={`sticky top-0 z-50 bg-brand-black transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 shadow-lg' : 'border-b border-transparent'
      }`}
      onMouseLeave={scheduleClose}
    >
      <div className="container-x flex h-18 items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-white.png"
            alt="IKFTECH"
            width={342}
            height={65}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/case-studies" className="nav-link text-sm font-medium text-white/80 transition hover:text-brand-blue">
            Works
          </Link>
          {allMenus.map((menu) => (
            <div key={menu.key} onMouseEnter={() => openMenu(menu.key)}>
              <button
                className={`nav-link flex cursor-pointer items-center gap-1 text-sm font-medium transition ${
                  activeMenu === menu.key ? 'text-brand-blue' : 'text-white/80 hover:text-brand-blue'
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
          <Link
            href="/contact"
            className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-sm font-semibold text-brand-black transition hover:bg-white/90"
          >
            Let&apos;s connect
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-black text-white transition-colors group-hover:bg-brand-blue">
              <ArrowHoverIcon className="text-white" />
            </span>
          </Link>
        </div>

        <button className="cursor-pointer text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
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
        <div className="max-h-[80vh] overflow-y-auto border-t border-white/10 bg-brand-black lg:hidden">
          <div className="container-x flex flex-col gap-1 py-6">
            <Link
              href="/case-studies"
              className="py-2 text-sm font-medium text-white/80"
              onClick={() => setOpen(false)}
            >
              Works
            </Link>
            {allMenus.map((menu) => (
              <div key={menu.key} className="border-t border-white/10 py-2">
                <button
                  className="flex w-full cursor-pointer items-center justify-between py-2 text-sm font-medium text-white/80"
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
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/40">
                            {col.title}
                          </p>
                        )}
                        <ul className="space-y-1">
                          {col.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="block py-1.5 text-sm text-white/70"
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
            <Link
              href="/contact"
              className="group mt-4 inline-flex w-fit cursor-pointer items-center gap-3 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-sm font-semibold text-brand-black transition hover:bg-white/90"
              onClick={() => setOpen(false)}
            >
              Let&apos;s connect
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-black text-white transition-colors group-hover:bg-brand-blue">
                <ArrowHoverIcon className="text-white" />
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}