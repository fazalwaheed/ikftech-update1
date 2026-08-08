import Reveal from "@/components/Reveal";
import { CompanyStat } from "./types";

interface Props {
  stats: CompanyStat[];
}

export default function CompanyStats({ stats }: Props) {
  return (
    <section className="border-y border-brand-ink/10 bg-white">
      <div className="container-x">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div
                className={[
                  "px-6 py-10 text-center",
                  index !== 0
                    ? "border-l border-brand-ink/10"
                    : "",
                ].join(" ")}
              >
                <div className="text-4xl font-black tracking-tight text-[#9B1C31] lg:text-5xl">
                  {stat.value}
                </div>

                <div className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand-ink/50">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}