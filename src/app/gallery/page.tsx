import Image from "next/image";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80",
    category: "Hair",
    label: "Men's Fade Cut",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",
    category: "Color",
    label: "Balayage Highlights",
    span: "md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80",
    category: "Bridal",
    label: "Bridal Makeover",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    category: "Grooming",
    label: "Beard Styling",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    category: "Skin",
    label: "Gold Facial",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    category: "Color",
    label: "Fashion Color",
    span: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80",
    category: "Bridal",
    label: "Groom Package",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    category: "Hair",
    label: "Precision Layers",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&q=80",
    category: "Skin",
    label: "Diamond Facial",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&q=80",
    category: "Hair",
    label: "Keratin Treatment",
    span: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    category: "Interior",
    label: "Salon Ambiance",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80",
    category: "Grooming",
    label: "Styling Station",
    span: "",
  },
];

export default function Gallery() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.06)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">
            Our Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
            <span className="text-gradient-gold">Gallery</span>
          </h1>
          <p className="text-white-dim/70 text-lg max-w-xl mx-auto">
            Browse through our work and see the transformations we create every
            day at Glamrootz Signature.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6 bg-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[250px]">
            {galleryItems.map((item) => (
              <div
                key={item.label}
                className={`group relative overflow-hidden rounded-sm ${item.span}`}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-0.5">
                    {item.category}
                  </p>
                  <p className="text-sm font-medium text-white">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white-dim/60 text-sm mb-3">
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
          <p className="text-white-dim/40 text-xs mt-1">on Instagram</p>
        </div>
      </section>
    </>
  );
}
