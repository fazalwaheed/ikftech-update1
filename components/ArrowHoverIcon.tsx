'use client';

import { ArrowUpRight } from 'lucide-react';

export default function ArrowHoverIcon({ className = '' }: { className?: string }) {
  return (
    <span className={`relative inline-flex h-4 w-4 shrink-0 ${className}`}>
      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 ease-out group-hover:rotate-180"
      />
    </span>
  );
}