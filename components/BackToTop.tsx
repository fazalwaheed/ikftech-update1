'use client';

import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="flex cursor-pointer items-center gap-1.5 text-xs font-medium text-brand-black/50 transition hover:text-brand-blue"
    >
      Back to top <ArrowUp size={13} />
    </button>
  );
}