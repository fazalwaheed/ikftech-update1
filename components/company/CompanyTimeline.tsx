import Reveal from "@/components/Reveal";
import { CompanyTimeline as TimelineItem } from "./types";

interface Props {
  timeline: TimelineItem[];
}

export default function CompanyTimeline({
  timeline,
}: Props) {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">

        <Reveal>
          <span className="eyebrow">
            OUR JOURNEY
          </span>

          <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-brand-black lg:text-5xl">
            Experience that compounds over time.
          </h2>
        </Reveal>

        <div className="relative mt-14">

          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-brand-ink/10" />

          <div className="space-y-10">

            {timeline.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.08}
              >
                <div className="relative flex gap-8">

                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#9B1C31] shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </div>

                  <div className="pb-2">

                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#9B1C31]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-brand-black">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-2xl leading-7 text-brand-ink/60">
                      {item.description}
                    </p>

                  </div>

                </div>
              </Reveal>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}