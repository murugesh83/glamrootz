import Image from "next/image";
import Link from "next/link";

const serviceCategories = [
  {
    category: "Hair Services",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80",
    services: [
      { name: "Haircut & Styling (Men)", price: "500", duration: "45 min" },
      { name: "Haircut & Styling (Women)", price: "800", duration: "60 min" },
      { name: "Kids Haircut", price: "300", duration: "30 min" },
      { name: "Hair Wash & Blow Dry", price: "400", duration: "30 min" },
      { name: "Hair Smoothening", price: "3,500", duration: "180 min" },
      { name: "Keratin Treatment", price: "5,000", duration: "240 min" },
    ],
  },
  {
    category: "Hair Coloring",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80",
    services: [
      { name: "Global Color", price: "2,000", duration: "90 min" },
      { name: "Highlights / Lowlights", price: "2,500", duration: "120 min" },
      { name: "Balayage", price: "4,000", duration: "150 min" },
      { name: "Root Touch-Up", price: "1,200", duration: "60 min" },
      { name: "Fashion Colors", price: "3,000", duration: "120 min" },
    ],
  },
  {
    category: "Skin & Facial",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80",
    services: [
      { name: "Classic Facial", price: "1,000", duration: "45 min" },
      { name: "Gold Facial", price: "1,800", duration: "60 min" },
      { name: "Diamond Facial", price: "2,500", duration: "75 min" },
      { name: "Anti-Aging Treatment", price: "3,000", duration: "60 min" },
      { name: "De-Tan Treatment", price: "1,200", duration: "45 min" },
      { name: "Cleanup", price: "600", duration: "30 min" },
    ],
  },
  {
    category: "Beard & Grooming",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80",
    services: [
      { name: "Beard Trim & Shape", price: "300", duration: "20 min" },
      { name: "Clean Shave", price: "250", duration: "20 min" },
      { name: "Royal Shave (Hot Towel)", price: "500", duration: "30 min" },
      { name: "Head Massage", price: "400", duration: "20 min" },
    ],
  },
  {
    category: "Spa & Wellness",
    image:
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=400&q=80",
    services: [
      { name: "Swedish Massage", price: "2,000", duration: "60 min" },
      { name: "Deep Tissue Massage", price: "2,500", duration: "60 min" },
      { name: "Aromatherapy", price: "2,200", duration: "60 min" },
      { name: "Head, Neck & Shoulder", price: "1,000", duration: "30 min" },
    ],
  },
  {
    category: "Bridal & Special",
    image:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=400&q=80",
    services: [
      { name: "Bridal Makeup", price: "15,000", duration: "120 min" },
      { name: "Groom Package", price: "5,000", duration: "90 min" },
      {
        name: "Pre-Bridal Package (5 sessions)",
        price: "12,000",
        duration: "Varies",
      },
      { name: "Party Makeup", price: "3,500", duration: "60 min" },
      { name: "Engagement Look", price: "8,000", duration: "90 min" },
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
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">
            Premium Treatments
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
            Our <span className="text-gradient-gold">Services</span>
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
                <p className="absolute bottom-4 left-4 text-sm font-semibold text-gold">
                  {cat.category}
                </p>
              </div>

              {/* Services */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-semibold text-gold whitespace-nowrap">
                    {cat.category}
                  </h2>
                  <div className="h-px flex-1 bg-gold/15" />
                </div>

                <div>
                  {cat.services.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center justify-between py-4 border-b border-gold/5 hover:bg-gold/5 px-4 -mx-4 transition-colors duration-200 rounded-sm"
                    >
                      <div className="flex-1">
                        <h3 className="text-white text-sm font-medium">
                          {s.name}
                        </h3>
                        <p className="text-white-dim/40 text-xs mt-0.5">
                          {s.duration}
                        </p>
                      </div>
                      <p className="text-gold font-semibold ml-4">
                        &#8377;{s.price}
                      </p>
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
            * Prices may vary based on hair length and complexity. Consultation
            available before all treatments. All prices include GST.
          </p>
          <Link
            href="/booking"
            className="inline-block rounded-sm bg-gold px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-gold-light"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
