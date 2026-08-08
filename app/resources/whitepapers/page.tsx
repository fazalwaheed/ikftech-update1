

import ResourcesHero from "../../../components/resources/ResourcesHero";

export default function WhitePapersPage() {
  return (
    <main>
      <ResourcesHero
        badge="RESOURCES"
        title="White Papers & eBooks"
        description="In-depth guides, research, and practical frameworks covering AI strategy, cloud optimization, engineering, and digital transformation."
        heroImage="/images/resources/book.PNG"
        success="99.99%"
        delivery="150+"
      />

      <section className="section-pad bg-white">
        <div className="container-x">

          <div className="mb-12">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c9002b]">
              Knowledge Center
            </span>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-black">
              White Papers & eBooks
            </h2>
          </div>

          {/* Keep your existing white paper cards here */}

        </div>
      </section>
    </main>
  );
}