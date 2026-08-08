import Reveal from "@/components/Reveal";

interface Props {
  title: string;
  overview: string;
}

export default function CompanyOverview({
  title,
  overview,
}: Props) {
  return (
    <section className="section-pad bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-start">

        <Reveal>
          <span className="eyebrow">
            ABOUT THE COMPANY
          </span>

          <h2 className="mt-5 max-w-xl text-3xl font-black tracking-tight text-brand-black lg:text-5xl">
            Building intelligent products that move businesses forward.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="lg:pt-10">
            <p className="text-lg leading-8 text-brand-ink/65">
              {overview}
            </p>

            <div className="mt-8 h-px w-full bg-brand-ink/10" />

            <p className="mt-6 text-sm leading-7 text-brand-ink/50">
              {title} represents our commitment to combining engineering,
              design, artificial intelligence, and business strategy into
              products that create measurable impact.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}