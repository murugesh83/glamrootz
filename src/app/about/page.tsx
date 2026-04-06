export default function About() {
  const team = [
    { name: "Arjun Kapoor", role: "Founder & Master Stylist", exp: "15 years" },
    { name: "Meera Nair", role: "Senior Colorist", exp: "10 years" },
    { name: "Vikram Singh", role: "Grooming Specialist", exp: "8 years" },
    { name: "Sneha Reddy", role: "Skin Care Expert", exp: "12 years" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.06)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Our Story
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-6">
            About Glamrootz
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rotate-45 border border-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 bg-black-light">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gold mb-6">
                A Legacy of Luxury
              </h2>
              <p className="text-white-dim leading-relaxed mb-4">
                Founded in 2020, Glamrootz Signature was born from a vision to
                redefine the salon experience. We believe that grooming is not just
                a service — it&apos;s an art form that deserves the finest attention
                to detail.
              </p>
              <p className="text-white-dim leading-relaxed mb-4">
                Our salon combines cutting-edge techniques with timeless elegance,
                creating a space where every client feels like royalty. From our
                carefully curated product line to our meticulously trained team, every
                element of Glamrootz is designed to deliver excellence.
              </p>
              <p className="text-white-dim leading-relaxed">
                We don&apos;t just style hair — we craft confidence. We don&apos;t just
                offer treatments — we create transformations. Welcome to Glamrootz
                Signature, where luxury meets you.
              </p>
            </div>
            <div className="aspect-[4/5] bg-black-lighter border border-gold/10 rounded-sm flex items-center justify-center">
              <div className="text-center">
                <p className="text-gold/30 text-6xl mb-2">&#128136;</p>
                <p className="text-white-dim/50 text-xs tracking-wider uppercase">
                  Salon Interior
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gradient-gold text-center mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                desc: "We never settle for ordinary. Every cut, every treatment, every experience is held to the highest standard.",
                icon: "&#9733;",
              },
              {
                title: "Innovation",
                desc: "We stay ahead of trends, continuously learning and adopting the latest techniques and premium products.",
                icon: "&#10024;",
              },
              {
                title: "Warmth",
                desc: "Beyond luxury, we create a welcoming space where every client feels valued, heard, and cared for.",
                icon: "&#10084;",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="p-8 border border-gold/10 bg-black-light/50 rounded-sm text-center"
              >
                <div
                  className="text-4xl mb-4"
                  dangerouslySetInnerHTML={{ __html: v.icon }}
                />
                <h3 className="text-xl font-bold text-gold mb-3">{v.title}</h3>
                <p className="text-white-dim text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-black-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
              The Artists
            </p>
            <h2 className="text-3xl font-bold text-gradient-gold">
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center group"
              >
                <div className="aspect-square bg-black-lighter border border-gold/10 rounded-sm flex items-center justify-center mb-4 group-hover:border-gold/30 transition-all duration-300">
                  <p className="text-gold/30 text-5xl">&#128100;</p>
                </div>
                <h3 className="text-gold font-semibold">{member.name}</h3>
                <p className="text-white-dim text-sm">{member.role}</p>
                <p className="text-gold/60 text-xs mt-1">{member.exp} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
