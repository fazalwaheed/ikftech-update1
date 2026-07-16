'use client';

import { useState } from 'react';
import { X, Mail } from 'lucide-react';

import Image from 'next/image';

const budgets = ['Under $10k', '$10k – $25k', '$25k – $50k', '$50k – $150k', '$150k+'];
const services = [
  'AI Agents & Automation',
  'UX/UI & Branding',
  'Product Engineering',
  'Enterprise Transformation',
  'QA & DevOps',
  'MVP & Product Launch',
];

export default function BotWidget() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [showError, setShowError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) {
      setShowError(true);
      return;
    }
    setShowError(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* floating trigger */}
      {!open && !dismissed && (
        <div className="fixed right-6 top-1/2 z-50 flex -translate-y-1/2 flex-col items-end">
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            className="mb-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-brand-black text-white/70 transition hover:text-white"
          >
            <X size={13} />
          </button>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open project inquiry form"
            className="flex cursor-pointer items-center justify-center transition hover:scale-105"
          >
            <div className="relative h-24 w-20 animate-botfloat">
              <Image
                src="/images/bot-mascot.png"
                alt="Chat with IKFTECH"
                fill
                className="object-contain"
                sizes="96px"
              />
            </div>
          </button>
        </div>
      )}

      {/* modal panel */}
      {open && (
        <div className="fixed right-6 top-1/2 z-50 w-[90vw] max-w-sm -translate-y-1/2 overflow-hidden rounded-2xl border border-white/10 bg-brand-black shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-9 shrink-0">
                <Image
                  src="/images/bot-mascot.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Let&apos;s talk about your project</p>
                <p className="text-xs text-white/40">We usually reply within a few hours</p>
              </div>
            </div>
            <button
              onClick={() => {
                setOpen(false);
                setSubmitted(false);
              }}
              aria-label="Close form"
              className="cursor-pointer text-white/50 transition hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          <div className="max-h-[70vh] overflow-y-auto p-5">
            {submitted ? (
              <div className="py-8 text-center">
                <p className="text-base font-semibold text-white">Thanks — we&apos;ve got it! 🎉</p>
                <p className="mt-2 text-sm text-white/50">
                  Someone from our team will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  required
                  type="text"
                  placeholder="Full Name*"
                  className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand-blue"
                />
                <div className="relative">
                  <Mail size={15} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    required
                    type="email"
                    placeholder="Insert Email*"
                    className="w-full rounded-lg border border-white/15 bg-transparent py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand-blue"
                  />
                </div>
                <div className="flex overflow-hidden rounded-lg border border-white/15 focus-within:border-brand-blue">
                  <span className="flex items-center gap-1 border-r border-white/15 px-3 text-sm text-white/60">
                    🇵🇰 +92
                  </span>
                  <input
                    required
                    type="tel"
                    placeholder="Phone Number*"
                    className="w-full bg-transparent px-3 py-3 text-sm text-white placeholder:text-white/40 outline-none"
                  />
                </div>
                <select
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm text-white/70 outline-none focus:border-brand-blue"
                >
                  <option value="" disabled className="bg-brand-black">Select Your Budget*</option>
                  {budgets.map((b) => (
                    <option key={b} value={b} className="bg-brand-black">{b}</option>
                  ))}
                </select>
                <select
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm text-white/70 outline-none focus:border-brand-blue"
                >
                  <option value="" disabled className="bg-brand-black">Select a Service or Technology*</option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-brand-black">{s}</option>
                  ))}
                </select>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your project or MVP details e.g., I have an idea for a new e-commerce platform that uses AI to personalize the shopping experience.*"
                  className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand-blue"
                />

                <label className="flex items-start gap-2 text-xs text-white/50">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => {
                      setAgreed(e.target.checked);
                      if (e.target.checked) setShowError(false);
                    }}
                    className="mt-0.5 accent-brand-blue"
                  />
                  I consent to receive SMS notifications and alerts from IKFTECH. Message
                  frequency varies. Message & data rates may apply. Reply STOP to unsubscribe
                  at any time.
                </label>
                <label className="flex items-start gap-2 text-xs text-white/50">
                  <input type="checkbox" className="mt-0.5 accent-brand-blue" />
                  By checking this box I agree to receive occasional marketing messages and
                  reminders from IKFTECH.
                </label>

                {showError && (
                  <p className="text-xs font-medium text-red-400">
                    Please accept the terms and conditions
                  </p>
                )}

                <p className="text-xs">
                  <a href="/privacy-policy" className="text-brand-blue hover:underline">Privacy Policy</a>
                  <span className="text-white/30"> | </span>
                  <a href="/terms" className="text-brand-blue hover:underline">Terms & Conditions</a>
                </p>

                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-lg bg-brand-blue py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-black"
                >
                  Book a Meeting
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}