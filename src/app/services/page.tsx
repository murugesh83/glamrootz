import Link from "next/link";

const serviceCategories = [
  {
    category: "Hair Services",
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
    services: [
      { name: "Beard Trim & Shape", price: "300", duration: "20 min" },
      { name: "Clean Shave", price: "250", duration: "20 min" },
      { name: "Royal Shave (Hot Towel)", price: "500", duration: "30 min" },
      { name: "Head Massage", price: "400", duration: "20 min" },
    ],
  },
  {
    category: "Spa & Wellness",
    services: [
      { name: "Swedish Massage", price: "2,000", duration: "60 min" },
      { name: "Deep Tissue Massage", price: "2,500", duration: "60 min" },
      { name: "Aromatherapy", price: "2,200", duration: "60 min" },
      { name: "Head, Neck & Shoulder", price: "1,000", duration: "30 min" },
    ],
  },
  {
    category: "Bridal & Special",
    services: [
      { name: "Bridal Makeup", price: "15,000", duration: "120 min" },
      { name: "Groom Package", price: "5,000", duration: "90 min" },
      { name: "Pre-Bridal Package (5 sessions)", price: "12,000", duration: "Varies" },
      { name: "Party Makeup", price: "3,500", duration: "60 min" },
      { name: "Engagement Look", price: "8,000", duration: "90 min" },
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.06)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Premium Treatments
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-6">
            Our Services
          </h1>
          <p className="text-white-dim text-lg max-w-2xl mx-auto">
            Discover our curated menu of luxury grooming and beauty services,
            crafted to bring out the best in you.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-6 bg-black-light">
        <div className="max-w-5xl mx-auto space-y-16">
          {serviceCategories.map((cat) => (
            <div key={cat.category}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-gold whitespace-nowrap">
                  {cat.category}
                </h2>
                <div className="h-px flex-1 bg-gold/20" />
              </div>

              <div className="space-y-0">
                {cat.services.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center justify-between py-5 border-b border-gold/5 hover:bg-gold/5 px-4 -mx-4 transition-colors duration-200 rounded-sm"
                  >
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{s.name}</h3>
                      <p className="text-white-dim/60 text-xs mt-1">
                        {s.duration}
                      </p>
                    </div>
                    <p className="text-gold font-bold text-lg ml-4">
                      &#8377;{s.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="py-12 px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white-dim/60 text-sm mb-8">
            * Prices may vary based on hair length and complexity. Consultation
            available before all treatments. All prices include GST.
          </p>
          <Link
            href="/booking"
            className="inline-block px-10 py-4 bg-gold text-black font-semibold tracking-wider uppercase text-sm hover:bg-gold-light transition-all duration-300 rounded-sm"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
