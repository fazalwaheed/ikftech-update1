import { Mail, Phone, MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="container-x grid gap-16 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h1 className="mt-4 text-4xl font-bold text-brand-black lg:text-5xl">
            Tell us what you&apos;re building.
          </h1>
          <p className="mt-4 max-w-md text-brand-ink/60">
            Share a few details and our team will get back to you within one
            business day with next steps.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-black">Email</p>
                <p className="text-sm text-brand-ink/60">hello@novastack.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-black">Phone</p>
                <p className="text-sm text-brand-ink/60">+1 (555) 010-2030</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-black">Offices</p>
                <p className="text-sm text-brand-ink/60">Pakistan · UAE · UK · USA</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form className="card space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-brand-black">Name</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg border border-brand-line px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-brand-black">Email</label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-lg border border-brand-line px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-brand-black">Company</label>
              <input
                type="text"
                className="mt-2 w-full rounded-lg border border-brand-line px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
                placeholder="Company name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-brand-black">
                Project details
              </label>
              <textarea
                rows={5}
                className="mt-2 w-full rounded-lg border border-brand-line px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
                placeholder="Tell us what you're building..."
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
