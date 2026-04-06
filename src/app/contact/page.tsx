"use client";

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
      <section className="py-24 px-6 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.06)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Get in Touch
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-6">
            Contact Us
          </h1>
          <p className="text-white-dim text-lg max-w-2xl mx-auto">
            Have a question or want to know more? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 px-6 bg-black-light">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold text-gold mb-8">
              Visit Our Salon
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gold/20 rounded-sm flex items-center justify-center shrink-0">
                  <span className="text-gold text-xl">&#9906;</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Address</h3>
                  <p className="text-white-dim text-sm leading-relaxed">
                    123 Luxury Lane, Fashion District,<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gold/20 rounded-sm flex items-center justify-center shrink-0">
                  <span className="text-gold text-xl">&#9742;</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:+919876543210"
                    className="text-white-dim text-sm hover:text-gold transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gold/20 rounded-sm flex items-center justify-center shrink-0">
                  <span className="text-gold text-xl">&#9993;</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:hello@glamrootz.com"
                    className="text-white-dim text-sm hover:text-gold transition-colors"
                  >
                    hello@glamrootz.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gold/20 rounded-sm flex items-center justify-center shrink-0">
                  <span className="text-gold text-xl">&#128336;</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Hours</h3>
                  <div className="text-white-dim text-sm space-y-1">
                    <p>Mon - Sat: 10:00 AM - 9:00 PM</p>
                    <p>Sunday: 11:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-10 aspect-video bg-black-lighter border border-gold/10 rounded-sm flex items-center justify-center">
              <div className="text-center">
                <p className="text-gold/30 text-4xl mb-2">&#128205;</p>
                <p className="text-white-dim/50 text-xs tracking-wider uppercase">
                  Google Maps Embed
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-gold mb-8">
              Send a Message
            </h2>

            {sent ? (
              <div className="border border-gold/20 rounded-sm p-10 text-center bg-black/50">
                <div className="text-5xl mb-4 text-gold">&#10003;</div>
                <h3 className="text-xl font-bold text-gold mb-2">
                  Message Sent!
                </h3>
                <p className="text-white-dim text-sm mb-6">
                  Thank you for reaching out. We&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2 border border-gold text-gold text-sm tracking-wider uppercase hover:bg-gold/10 transition-all rounded-sm"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gold text-sm tracking-wider uppercase mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full bg-black border border-gold/20 text-white px-4 py-3 rounded-sm focus:border-gold focus:outline-none transition-colors placeholder:text-white-dim/30"
                    />
                  </div>
                  <div>
                    <label className="block text-gold text-sm tracking-wider uppercase mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Your phone"
                      className="w-full bg-black border border-gold/20 text-white px-4 py-3 rounded-sm focus:border-gold focus:outline-none transition-colors placeholder:text-white-dim/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gold text-sm tracking-wider uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-black border border-gold/20 text-white px-4 py-3 rounded-sm focus:border-gold focus:outline-none transition-colors placeholder:text-white-dim/30"
                  />
                </div>

                <div>
                  <label className="block text-gold text-sm tracking-wider uppercase mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="How can we help?"
                    className="w-full bg-black border border-gold/20 text-white px-4 py-3 rounded-sm focus:border-gold focus:outline-none transition-colors placeholder:text-white-dim/30"
                  />
                </div>

                <div>
                  <label className="block text-gold text-sm tracking-wider uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Your message..."
                    className="w-full bg-black border border-gold/20 text-white px-4 py-3 rounded-sm focus:border-gold focus:outline-none transition-colors resize-none placeholder:text-white-dim/30"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-black font-semibold tracking-wider uppercase text-sm hover:bg-gold-light transition-all duration-300 rounded-sm"
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
