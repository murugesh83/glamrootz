const galleryItems = [
  { id: 1, category: "Hair", label: "Men's Fade Cut" },
  { id: 2, category: "Color", label: "Balayage Highlight" },
  { id: 3, category: "Bridal", label: "Bridal Makeover" },
  { id: 4, category: "Hair", label: "Women's Layered Cut" },
  { id: 5, category: "Grooming", label: "Royal Shave" },
  { id: 6, category: "Skin", label: "Gold Facial" },
  { id: 7, category: "Color", label: "Fashion Color" },
  { id: 8, category: "Bridal", label: "Groom Package" },
  { id: 9, category: "Hair", label: "Keratin Treatment" },
  { id: 10, category: "Skin", label: "Diamond Facial" },
  { id: 11, category: "Grooming", label: "Beard Styling" },
  { id: 12, category: "Hair", label: "Bob Cut Styling" },
];

export default function Gallery() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.06)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Our Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-6">
            Gallery
          </h1>
          <p className="text-white-dim text-lg max-w-2xl mx-auto">
            Browse through our work and see the transformations we create every
            day at Glamrootz Signature.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6 bg-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square bg-black-lighter border border-gold/10 rounded-sm overflow-hidden hover:border-gold/40 transition-all duration-300"
              >
                {/* Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gold/20 text-5xl mb-2">&#128247;</p>
                    <p className="text-white-dim/30 text-xs">Photo</p>
                  </div>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-gold text-xs tracking-wider uppercase mb-1">
                      {item.category}
                    </p>
                    <p className="text-white font-semibold text-sm">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white-dim text-sm mb-4">
            Follow us for daily inspiration
          </p>
          <a
            href="https://www.instagram.com/glamrootz.signature"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-gold text-lg font-semibold hover:text-gold-light transition-colors"
          >
            @glamrootz.signature
          </a>
          <p className="text-white-dim/50 text-xs mt-2">on Instagram</p>
        </div>
      </section>
    </>
  );
}
