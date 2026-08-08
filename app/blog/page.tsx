import ResourcesHero from "../../components/resources/ResourcesHero";

export default function BlogPage() {
  return (
    <main>
      <ResourcesHero
        badge="RESOURCES"
        title="Insights & Ideas"
        description="Explore insights, engineering perspectives, AI strategies, and practical ideas for building intelligent digital products."
        heroImage="/images/resources/blog.PNG"
        success="99.99%"
        delivery="150+"
      />

      {/* Blog content goes below */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="mb-12">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c9002b]">
              Latest Insights
            </span>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-black">
              From the IKFTECH blog
            </h2>
          </div>

          {/* Keep your existing blog cards/content here */}
        </div>
      </section>
    </main>
  );
}