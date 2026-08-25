import Image from "next/image";
import Link from "next/link";

const serviceCategories = [
  {
    category: "Hair Services",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80",
    services: [
      "Haircut & Styling (Men)",
      "Haircut & Styling (Women)",
      "Kids Haircut",
      "Hair Wash & Blow Dry",
      "Hair Smoothening",
      "Keratin Treatment",
    ],
  },
  {
    category: "Hair Coloring",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80",
    services: [
      "Global Color",
      "Highlights / Lowlights",
      "Balayage",
      "Root Touch-Up",
      "Fashion Colors",
    ],
  },
  {
    category: "Skin & Facial",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80",
    services: [
      "Classic Facial",
      "Gold Facial",
      "Diamond Facial",
      "Anti-Aging Treatment",
      "De-Tan Treatment",
      "Cleanup",
    ],
  },
  {
    category: "Beard & Grooming",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80",
    services: [
      "Beard Trim & Shape",
      "Clean Shave",
      "Royal Shave (Hot Towel)",
      "Head Massage",
    ],
  },
  {
    category: "Spa & Wellness",
    image:
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=400&q=80",
    services: [
      "Swedish Massage",
      "Deep Tissue Massage",
      "Aromatherapy",
      "Head, Neck & Shoulder",
    ],
  },
  {
    category: "Bridal & Special",
    image:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=400&q=80",
    services: [
      "Bridal Makeup",
      "Groom Package",
      "Pre-Bridal Package",
      "Party Makeup",
      "Engagement Look",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-28 px-6">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&q=70"
          alt="Salon ambiance"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-pink tracking-[0.3em] uppercase text-xs mb-4">
            Premium Treatments
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
            Our <span className="text-gradient-pink">Services</span>
          </h1>
          <p className="text-white-dim/70 text-lg max-w-xl mx-auto">
            Discover our curated menu of luxury grooming and beauty services,
            crafted to bring out the best in you.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-6 bg-black-light">
        <div className="max-w-6xl mx-auto space-y-20">
          {serviceCategories.map((cat, idx) => (
            <div
              key={cat.category}
              className={`grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start ${
                idx % 2 === 1 ? "lg:grid-cols-[1fr_280px]" : ""
              }`}
            >
              {/* Category image */}
              <div
                className={`relative hidden lg:block aspect-[3/4] overflow-hidden rounded-sm ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={cat.image}
                  alt={cat.category}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-light/70 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-semibold text-pink">
                  {cat.category}
                </p>
              </div>

              {/* Services */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-semibold text-pink whitespace-nowrap">
                    {cat.category}
                  </h2>
                  <div className="h-px flex-1 bg-pink/15" />
                </div>

                <div>
                  {cat.services.map((name) => (
                    <div
                      key={name}
                      className="flex items-center py-4 border-b border-pink/5 hover:bg-pink/5 px-4 -mx-4 transition-colors duration-200 rounded-sm"
                    >
                      <span className="text-pink/40 mr-3 text-xs">&#9672;</span>
                      <h3 className="text-white text-sm font-medium">
                        {name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note + CTA */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white-dim/40 text-xs mb-8">
            * Consultation available before all treatments. Contact us for
            pricing details.
          </p>
          <Link
            href="/booking"
            className="inline-block rounded-sm bg-pink px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-pink-light"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
