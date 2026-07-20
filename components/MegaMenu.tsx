'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import ArrowHoverIcon from '@/components/ArrowHoverIcon';
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
  const [sidebarHovered, setSidebarHovered] = useState(false);
  const isTabbed = menu.layout === 'tabbed';
  const hasSidebar = !!menu.sidebar;
  const activeColumn = isTabbed ? menu.columns[activeTab] : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-0 right-0 top-full z-40 mt-3 w-full"
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-brand-black shadow-2xl">
        {/* header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/70">
            <Sparkles size={13} className="text-brand-blue" />
            {menu.eyebrow}
          </span>
          <Link
            href={menu.viewAllHref}
            onClick={onNavigate}
            className="flex cursor-pointer items-center gap-1 text-sm font-medium text-white/80 transition hover:text-brand-blue"
          >
            {menu.viewAllLabel} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="flex">
          {isTabbed ? (
            <div
              className="hidden w-60 shrink-0 border-r border-white/10 bg-white/[0.03] p-4 lg:block"
              onMouseEnter={() => setSidebarHovered(true)}
              onMouseLeave={() => {
                setSidebarHovered(false);
                setHovered(null);
              }}
            >
              <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-white/50">
                All Services
              </p>
              {menu.columns.map((col, i) => {
                const TabIcon = col.icon;
                const active = activeTab === i;
                return (
                  <button
                    key={col.title}
                    onMouseEnter={() => {
                      setActiveTab(i);
                      setHovered(null);
                      setSidebarHovered(true);
                    }}
                    onFocus={() => {
                      setActiveTab(i);
                      setHovered(null);
                      setSidebarHovered(true);
                    }}
                    className={`flex w-full cursor-pointer items-center gap-3 rounded-lg px-2 py-2.5 text-left text-sm transition ${
                      active ? 'bg-white/5 font-semibold text-brand-blue' : 'text-white/75 hover:text-white'
                    }`}
                  >
                    {TabIcon && (
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition ${
                          active ? 'bg-brand-blue text-white' : 'bg-white/5 text-white/60'
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
                <p className="mt-2 text-sm text-white/60">{menu.sidebar!.description}</p>
                <ul className="mt-6 space-y-3">
                  {menu.sidebar!.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-blue" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}

          <div className="grid max-h-[65vh] flex-1 content-start grid-cols-1 gap-x-6 gap-y-6 overflow-y-auto p-5 sm:grid-cols-2">
            {(isTabbed ? [menu.columns[activeTab]] : menu.columns).map((col) => (
              <div
                key={col.title}
                className={isTabbed || menu.columns.length === 1 ? 'contents' : ''}
              >
                {!isTabbed && menu.columns.length > 1 && (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/50">
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
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/5 text-white/80 transition group-hover:bg-brand-hover/20 group-hover:text-brand-blue">
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
                            <ExternalLink size={11} className="shrink-0 text-white/40 group-hover:text-brand-blue" />
                          )}
                        </span>
                        {item.description && (
                          <span className="mt-0.5 block text-xs leading-snug text-white/60">{item.description}</span>
                        )}
                      </span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="hidden w-64 shrink-0 border-l border-white/10 bg-gradient-to-br from-brand-blue/10 via-transparent to-transparent p-5 xl:flex xl:flex-col xl:justify-center">
            {!hovered && !sidebarHovered && isTabbed && menu.featuredWork ? (
              <div>
                <span className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50">
                  <Sparkles size={12} className="text-brand-blue" /> Featured Work
                </span>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src="/images/icons/feature.JPG"
                    alt={menu.featuredWork.title}
                    fill
                    className="object-cover"
                    sizes="220px"
                    quality={95}
                  />
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {menu.featuredWork.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/70">
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
                  <p className="text-sm text-white/60">Ready to transform your digital presence?</p>
                  <Link
                    href="/contact"
                    onClick={onNavigate}
                    className="group mt-3 inline-flex w-full cursor-pointer items-center justify-between gap-3 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-sm font-semibold text-brand-black transition hover:bg-white/90"
                  >
                    Book a Call
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-black text-white transition-colors group-hover:bg-brand-blue">
                      <ArrowHoverIcon className="text-white" />
                    </span>
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
                    className="h-full w-full"
                  >
                    {hovered.image ? (
                      <div className="relative h-full min-h-[280px] w-full overflow-hidden rounded-xl border border-white/10">
                        <Image
                          src={hovered.image}
                          alt={hovered.label}
                          fill
                          className="object-cover"
                          sizes="256px"
                          quality={95}
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-black/80 to-transparent p-3">
                          <p className="text-sm font-semibold text-white">{hovered.label}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center">
                        {hovered.icon && (
                          <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/15 text-brand-blue">
                            <hovered.icon size={26} />
                          </span>
                        )}
                        <p className="text-base font-semibold text-white">{hovered.label}</p>
                        <p className="mt-2 text-sm text-white/60">{hovered.description}</p>
                      </div>
                    )}
                  </motion.div>
                ) : isTabbed && activeColumn?.iconImage ? (
                  <motion.div
                    key={`category-${activeColumn.title}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="flex h-full w-full flex-col"
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10">
                      <Image
                        src={activeColumn.iconImage}
                        alt={activeColumn.title}
                        fill
                        className="object-cover"
                        sizes="256px"
                        quality={95}
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-black/80 to-transparent p-3">
                        <p className="text-sm font-semibold text-white">{activeColumn.title}</p>
                      </div>
                    </div>
                    <div className="mt-5 border-t border-white/10 pt-4">
                      <p className="text-sm text-white/60">Ready to transform your digital presence?</p>
                      <Link
                        href="/contact"
                        onClick={onNavigate}
                        className="group mt-3 inline-flex w-full cursor-pointer items-center justify-between gap-3 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-sm font-semibold text-brand-black transition hover:bg-white/90"
                      >
                        Book a Call
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-black text-white transition-colors group-hover:bg-brand-blue">
                          <ArrowHoverIcon className="text-white" />
                        </span>
                      </Link>
                    </div>
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
                    <p className="flex items-center gap-2 text-sm text-white/50">
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