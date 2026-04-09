import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Arjun Kapoor",
    role: "Founder & Master Stylist",
    exp: "15 years",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Meera Nair",
    role: "Senior Colorist",
    exp: "10 years",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Vikram Singh",
    role: "Grooming Specialist",
    exp: "8 years",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Sneha Reddy",
    role: "Skin Care Expert",
    exp: "12 years",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

export default function About() {
  return (
    <>
      {/* Hero with background image */}
      <section className="relative overflow-hidden bg-black py-32 px-6">
        <Image
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1400&q=70"
          alt="Salon interior"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">
            Our Story
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
            About <span className="text-gradient-gold">Glamrootz</span>
          </h1>
          <p className="text-white-dim/70 text-lg max-w-xl mx-auto">
            Where luxury meets artistry, and every appointment tells a story.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-black-light">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold/80 mb-3">
              The Beginning
            </p>
            <h2 className="text-3xl font-semibold text-white mb-6">
              A legacy of luxury since 2020
            </h2>
            <p className="text-white-dim/70 leading-relaxed mb-4">
              Founded in 2020, Glamrootz Signature was born from a vision to
              redefine the salon experience. We believe that grooming is not just
              a service &mdash; it&apos;s an art form that deserves the finest
              attention to detail.
            </p>
            <p className="text-white-dim/70 leading-relaxed mb-4">
              Our salon combines cutting-edge techniques with timeless elegance,
              creating a space where every client feels like royalty. From our
              carefully curated product line to our meticulously trained team,
              every element of Glamrootz is designed to deliver excellence.
            </p>
            <p className="text-white-dim/70 leading-relaxed">
              We don&apos;t just style hair &mdash; we craft confidence. We
              don&apos;t just offer treatments &mdash; we create
              transformations.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
              alt="Glamrootz salon interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-light/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold/80 mb-3">
              What Drives Us
            </p>
            <h2 className="text-3xl font-semibold text-gradient-gold">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                desc: "We never settle for ordinary. Every cut, every treatment, every experience is held to the highest standard.",
                image:
                  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80",
              },
              {
                title: "Innovation",
                desc: "We stay ahead of trends, continuously learning and adopting the latest techniques and premium products.",
                image:
                  "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=500&q=80",
              },
              {
                title: "Warmth",
                desc: "Beyond luxury, we create a welcoming space where every client feels valued, heard, and cared for.",
                image:
                  "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=500&q=80",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="group overflow-hidden rounded-sm border border-gold/8 bg-black-light"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-light to-transparent" />
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-semibold text-gold mb-2">
                    {v.title}
                  </h3>
                  <p className="text-white-dim/60 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-black-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold/80 mb-3">
              The Artists
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-white-dim/60 text-sm mt-1">{member.role}</p>
                <p className="text-gold/50 text-xs mt-1">
                  {member.exp} experience
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-black text-center">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Experience Glamrootz <span className="text-gradient-gold">Signature</span>
        </h2>
        <p className="text-white-dim/60 mb-8 max-w-md mx-auto">
          Book a consultation and discover the difference that attention to
          detail makes.
        </p>
        <Link
          href="/booking"
          className="inline-block rounded-sm bg-gold px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-gold-light"
        >
          Book Now
        </Link>
      </section>
    </>
  );
}
