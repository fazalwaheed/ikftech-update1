'use client';

import Link from 'next/link';
import Image from 'next/image';
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
     className={`absolute left-0 top-full z-40 mt-3 ${
  menu.key === 'company' || menu.key === 'resources'
    ? 'w-[min(94vw,760px)]'
    : 'w-[min(94vw,980px)]'
}`}
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
            className="flex cursor-pointer items-center gap-1 text-sm font-medium text-white/70 transition hover:text-brand-blue"
          >
            {menu.viewAllLabel} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="flex">
          {/* LEFT: tab list (tabbed layout) or static info sidebar (grid layout) */}
          {isTabbed ? (
            <div className="hidden w-60 shrink-0 border-r border-white/10 bg-white/[0.03] p-4 lg:block">
              <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                All Services
              </p>
              {menu.columns.map((col, i) => {
                const TabIcon = col.icon;
                const active = activeTab === i;
                return (
                  <button
                    key={col.title}
                    onMouseEnter={() => setActiveTab(i)}
                    onFocus={() => setActiveTab(i)}
                    className={`flex w-full cursor-pointer items-center gap-3 rounded-lg px-2 py-2.5 text-left text-sm transition ${
                      active ? 'bg-white/5 font-semibold text-brand-blue' : 'text-white/60 hover:text-white/90'
                    }`}
                  >
                    {TabIcon && (
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition ${
                          active ? 'bg-brand-blue text-white' : 'bg-white/5 text-white/50'
                        }`}
                      >
                        <TabIcon size={15} />
                      </span>
                    )}
                    {col.title}
                  </button>
                );
              })}
            </div>
          ) : (
            hasSidebar && (
              <div className="hidden w-60 shrink-0 border-r border-white/10 bg-white/[0.03] p-6 lg:block">
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
          <div className="grid max-h-[65vh] flex-1 grid-cols-1 gap-x-6 gap-y-0.5 overflow-y-auto p-5 sm:grid-cols-2">
            {(isTabbed ? [menu.columns[activeTab]] : menu.columns).map((col) => (
          <div
  key={col.title}
  className={
    isTabbed || menu.key === 'company' || menu.key === 'resources' ? 'contents' : ''
  }
>
                {!isTabbed && menu.columns.length > 1 && (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
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
                      className="group flex cursor-pointer items-start gap-2 rounded-md p-1 transition hover:bg-white/5"
                    >
                      {Icon && (
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/5 text-white/70 transition group-hover:bg-brand-blue/20 group-hover:text-brand-blue">
                          <Icon size={13} />
                        </span>
                      )}
                      <span className="flex-1">
                        <span className="flex items-center gap-1.5 text-sm font-medium text-white transition group-hover:text-brand-blue">
                          {item.label}
                          {item.badge && (
                            <span className="rounded-full bg-brand-blue px-1.5 py-0.5 text-[10px] font-bold text-white">
                              {item.badge}
                            </span>
                          )}
                          {item.external && (
                            <ExternalLink size={11} className="shrink-0 text-white/30 group-hover:text-brand-blue" />
                          )}
                        </span>
                        {item.description && (
                          <span className="mt-0.5 block text-xs leading-snug text-white/45">{item.description}</span>
                        )}
                      </span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>

          {/* RIGHT: static Featured Work card / real photo panel / decorative graphic+hover-preview */}
          <div className="hidden w-64 shrink-0 border-l border-white/10 bg-gradient-to-br from-brand-blue/10 via-transparent to-transparent p-5 xl:flex xl:flex-col xl:justify-center">
            {isTabbed && menu.featuredWork ? (
              <div>
                <span className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                  <Sparkles size={12} className="text-brand-blue" /> Featured Work
                </span>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src="/images/featured-altflow.jpg"
                    alt={menu.featuredWork.title}
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
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
                  className="mt-2 flex cursor-pointer items-center gap-1 text-sm font-medium text-brand-blue"
                >
                  View case study <ArrowRight size={13} />
                </Link>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-sm text-white/50">Ready to transform your digital presence?</p>
                  <Link
                    href="/contact"
                    onClick={onNavigate}
                    className="btn-primary mt-3 w-full cursor-pointer justify-center bg-brand-blue hover:bg-white hover:text-brand-black"
                  >
                    Book a Call <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            ) : menu.photoPanel ? (
              <div className="relative h-full min-h-[280px] w-full overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={menu.photoPanel}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="256px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
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
                    className="h-full w-full"
                  >
                 {hovered.image ? (
  <div className="relative h-full min-h-[280px] w-full overflow-hidden rounded-xl border border-white/10">
    <Image
      src={hovered.image}
      alt={hovered.label}
      fill
      className="object-cover object-center"
      sizes="256px"
      priority
    />
  </div>
) : (
                      <div className="text-center">
                        {hovered.icon && (
                          <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/15 text-brand-blue">
                            <hovered.icon size={26} />
                          </span>
                        )}
                        <p className="text-base font-semibold text-white">{hovered.label}</p>
                        <p className="mt-2 text-sm text-white/50">{hovered.description}</p>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-4 text-center"
                  >
                    <div className="relative h-24 w-24">
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