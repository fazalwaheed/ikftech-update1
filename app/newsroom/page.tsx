import ResourcesHero from "../../components/resources/ResourcesHero";

export default function NewsroomPage() {
  return (
    <main>
      <ResourcesHero
        badge="RESOURCES"
        title="IKFTECH Newsroom"
        description="Stay updated with the latest company announcements, technology news, partnerships, launches, and milestones from IKFTECH."
        heroImage="/images/resources/newsroom.png"
        success="99.99%"
        delivery="150+"
      />

      <section className="section-pad bg-white">
        <div className="container-x">

          <div className="mb-12">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c9002b]">
              Latest News
            </span>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-black">
              Newsroom
            </h2>
          </div>

          {/* Keep your existing newsroom content/cards here */}

        </div>
      </section>
    </main>
  );
}