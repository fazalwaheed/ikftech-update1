import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { CompanyFeature } from "./types";

interface Props {
  features: CompanyFeature[];
}

export default function CompanyFeatures({
  features,
}: Props) {
  return (
    <section className="section-pad bg-brand-mist">
      <div className="container-x">

        <Reveal>
          <span className="eyebrow">
            WHAT WE BELIEVE
          </span>

          <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-brand-black lg:text-5xl">
            Principles behind everything we build.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={index * 0.08}
            >
              <article className="group h-full rounded-2xl border border-brand-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#9B1C31]/40 hover:shadow-xl">

                <div className="flex items-start justify-between gap-5">

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#9B1C31]/10 text-sm font-bold text-[#9B1C31]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="text-brand-ink/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#9B1C31]"
                  />

                </div>

                <h3 className="mt-8 text-xl font-bold text-brand-black">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-brand-ink/60">
                  {feature.description}
                </p>

              </article>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}