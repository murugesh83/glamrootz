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
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
            Contact <span className="text-gradient-gold">Us</span>
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
                      123 Luxury Lane, Fashion District,
                      <br />
                      Mumbai, Maharashtra 400001
                    </p>
                  ),
                },
                {
                  icon: "\u260E",
                  title: "Phone",
                  content: (
                    <a
                      href="tel:+919876543210"
                      className="text-white-dim/60 text-sm hover:text-gold transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  ),
                },
                {
                  icon: "\u2709",
                  title: "Email",
                  content: (
                    <a
                      href="mailto:hello@glamrootz.com"
                      className="text-white-dim/60 text-sm hover:text-gold transition-colors"
                    >
                      hello@glamrootz.com
                    </a>
                  ),
                },
                {
                  icon: "\u23F0",
                  title: "Hours",
                  content: (
                    <div className="text-white-dim/60 text-sm space-y-1">
                      <p>Mon &ndash; Sat: 10:00 AM &ndash; 9:00 PM</p>
                      <p>Sunday: 11:00 AM &ndash; 7:00 PM</p>
                    </div>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 border border-gold/15 rounded-sm flex items-center justify-center shrink-0 bg-gold/5">
                    <span className="text-gold">{item.icon}</span>
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
            <div className="mt-10 relative aspect-video overflow-hidden rounded-sm border border-gold/10">
              <Image
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=70"
                alt="Location map placeholder"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=123+Luxury+Lane+Fashion+District+Mumbai+400001"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm bg-gold/90 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black hover:bg-gold transition-colors"
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
              <div className="border border-gold/15 rounded-sm p-12 text-center bg-black/50">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-gold/10">
                  <span className="text-gold text-2xl">&#10003;</span>
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
                  className="px-6 py-2.5 border border-gold/30 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold/10 transition-all rounded-sm"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gold text-xs tracking-[0.2em] uppercase mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full bg-black border border-gold/15 text-white px-4 py-3 rounded-sm text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-white-dim/25"
                    />
                  </div>
                  <div>
                    <label className="block text-gold text-xs tracking-[0.2em] uppercase mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Your phone"
                      className="w-full bg-black border border-gold/15 text-white px-4 py-3 rounded-sm text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-white-dim/25"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gold text-xs tracking-[0.2em] uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-black border border-gold/15 text-white px-4 py-3 rounded-sm text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-white-dim/25"
                  />
                </div>

                <div>
                  <label className="block text-gold text-xs tracking-[0.2em] uppercase mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="How can we help?"
                    className="w-full bg-black border border-gold/15 text-white px-4 py-3 rounded-sm text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-white-dim/25"
                  />
                </div>

                <div>
                  <label className="block text-gold text-xs tracking-[0.2em] uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Your message..."
                    className="w-full bg-black border border-gold/15 text-white px-4 py-3 rounded-sm text-sm focus:border-gold focus:outline-none transition-colors resize-none placeholder:text-white-dim/25"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-black font-semibold tracking-[0.2em] uppercase text-sm hover:bg-gold-light transition-all duration-300 rounded-sm"
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
