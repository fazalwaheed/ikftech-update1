import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function CompanyCTA() {
  return (
    <section className="section-pad bg-brand-mist">
      <div className="container-x">

        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#06162E] px-8 py-14 lg:px-16 lg:py-20">

            {/* Blue glow */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl" />

            {/* Cherry glow */}
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#9B1C31]/30 blur-3xl" />

            <div className="relative z-10 max-w-3xl">

              <span className="eyebrow border-white/10 bg-white/5 text-white">
                LET&apos;S BUILD
              </span>

              <h2 className="mt-6 text-4xl font-black tracking-tight text-white lg:text-6xl">
                Ready to build what&apos;s next?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                Bring us your challenge. We&apos;ll bring the engineering,
                design, and AI expertise to turn it into something real.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#9B1C31] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-brand-black"
              >
                Start a conversation
                <ArrowUpRight size={18} />
              </Link>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}