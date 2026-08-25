"use client";

import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-28 px-6">
        <Image
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1400&q=70"
          alt="Salon"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-pink tracking-[0.3em] uppercase text-xs mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
            Contact <span className="text-gradient-pink">Us</span>
          </h1>
          <p className="text-white-dim/70 text-lg max-w-xl mx-auto">
            Have a question or want to know more? We&apos;d love to hear from
            you.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 px-6 bg-black-light">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-8">
              Visit Our Salon
            </h2>

            <div className="space-y-6">
              {[
                {
                  icon: "\u2316",
                  title: "Address",
                  content: (
                    <p className="text-white-dim/60 text-sm leading-relaxed">
                      Maxworth Nagar, NO.1&2, Lavender Street,
                      <br />
                      VGN Blooming Garden, Kolapakkam,
                      <br />
                      Chennai, Tamil Nadu 600125
                    </p>
                  ),
                },
                {
                  icon: "\u260E",
                  title: "Phone",
                  content: (
                    <div className="flex flex-col gap-1">
                      <a
                        href="tel:+919500569095"
                        className="text-white-dim/60 text-sm hover:text-pink transition-colors"
                      >
                        +91 95005 69095 (Mobile)
                      </a>
                      <a
                        href="tel:04448577888"
                        className="text-white-dim/60 text-sm hover:text-pink transition-colors"
                      >
                        044-48577888 (Landline)
                      </a>
                    </div>
                  ),
                },
                {
                  icon: "\u2709",
                  title: "Email",
                  content: (
                    <a
                      href="mailto:glamrootsalon@gmail.com"
                      className="text-white-dim/60 text-sm hover:text-pink transition-colors"
                    >
                      glamrootsalon@gmail.com
                    </a>
                  ),
                },
                {
                  icon: "\u23F0",
                  title: "Hours",
                  content: (
                    <div className="text-white-dim/60 text-sm space-y-1">
                      <p>Mon &ndash; Sat: 10:00 AM &ndash; 9:00 PM</p>
                      <p>Sunday: 9:30 AM &ndash; 9:00 PM</p>
                    </div>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 border border-pink/15 rounded-sm flex items-center justify-center shrink-0 bg-pink/5">
                    <span className="text-pink">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-medium mb-1">
                      {item.title}
                    </h3>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-10 relative aspect-video overflow-hidden rounded-sm border border-pink/10">
              <Image
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=70"
                alt="Location map placeholder"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://maps.app.goo.gl/KgPV9sJVFKqTwPTf6"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm bg-pink/90 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-pink transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-8">
              Send a Message
            </h2>

            {sent ? (
              <div className="border border-pink/15 rounded-sm p-12 text-center bg-black/50">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-pink bg-pink/10">
                  <span className="text-pink text-2xl">&#10003;</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-white-dim/60 text-sm mb-6">
                  Thank you for reaching out. We&apos;ll get back to you
                  shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2.5 border border-pink/30 text-pink text-xs tracking-[0.2em] uppercase hover:bg-pink/10 transition-all rounded-sm"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-pink text-xs tracking-[0.2em] uppercase mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full bg-black border border-pink/15 text-white px-4 py-3 rounded-sm text-sm focus:border-pink focus:outline-none transition-colors placeholder:text-white-dim/25"
                    />
                  </div>
                  <div>
                    <label className="block text-pink text-xs tracking-[0.2em] uppercase mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Your phone"
                      className="w-full bg-black border border-pink/15 text-white px-4 py-3 rounded-sm text-sm focus:border-pink focus:outline-none transition-colors placeholder:text-white-dim/25"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-pink text-xs tracking-[0.2em] uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-black border border-pink/15 text-white px-4 py-3 rounded-sm text-sm focus:border-pink focus:outline-none transition-colors placeholder:text-white-dim/25"
                  />
                </div>

                <div>
                  <label className="block text-pink text-xs tracking-[0.2em] uppercase mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="How can we help?"
                    className="w-full bg-black border border-pink/15 text-white px-4 py-3 rounded-sm text-sm focus:border-pink focus:outline-none transition-colors placeholder:text-white-dim/25"
                  />
                </div>

                <div>
                  <label className="block text-pink text-xs tracking-[0.2em] uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Your message..."
                    className="w-full bg-black border border-pink/15 text-white px-4 py-3 rounded-sm text-sm focus:border-pink focus:outline-none transition-colors resize-none placeholder:text-white-dim/25"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-pink text-white font-semibold tracking-[0.2em] uppercase text-sm hover:bg-pink-light transition-all duration-300 rounded-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
