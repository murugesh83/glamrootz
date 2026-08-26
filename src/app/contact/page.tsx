"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="pt-28 pb-20 px-6 bg-black min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-pink tracking-[0.3em] uppercase text-xs mb-3">
            Get in Touch
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            Contact Us
          </h1>
          <p className="text-white-dim/60 text-sm max-w-md mx-auto">
            Have a question or want to know more? We&apos;d love to hear from
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-6">
              Visit Our Salon
            </h2>

            <div className="space-y-5">
              {[
                {
                  icon: "⌖",
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
                  icon: "☎",
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
                  icon: "✉",
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
                  icon: "⏰",
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
                  <div className="w-10 h-10 border border-pink/15 rounded-sm flex items-center justify-center shrink-0 bg-pink/5">
                    <span className="text-pink text-sm">{item.icon}</span>
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

            <div className="mt-8">
              <a
                href="https://maps.app.goo.gl/KgPV9sJVFKqTwPTf6"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-sm border border-pink/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-pink hover:bg-pink/10 transition-all duration-300"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-6">
              Send a Message
            </h2>

            {sent ? (
              <div className="border border-pink/15 rounded-sm p-10 text-center bg-black-light">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-pink bg-pink/10">
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
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-pink text-xs tracking-[0.2em] uppercase mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full bg-black-light border border-pink/15 text-white px-4 py-3 rounded-sm text-sm focus:border-pink focus:outline-none transition-colors placeholder:text-white-dim/25"
                    />
                  </div>
                  <div>
                    <label className="block text-pink text-xs tracking-[0.2em] uppercase mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Your phone"
                      className="w-full bg-black-light border border-pink/15 text-white px-4 py-3 rounded-sm text-sm focus:border-pink focus:outline-none transition-colors placeholder:text-white-dim/25"
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
                    className="w-full bg-black-light border border-pink/15 text-white px-4 py-3 rounded-sm text-sm focus:border-pink focus:outline-none transition-colors placeholder:text-white-dim/25"
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
                    className="w-full bg-black-light border border-pink/15 text-white px-4 py-3 rounded-sm text-sm focus:border-pink focus:outline-none transition-colors placeholder:text-white-dim/25"
                  />
                </div>

                <div>
                  <label className="block text-pink text-xs tracking-[0.2em] uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Your message..."
                    className="w-full bg-black-light border border-pink/15 text-white px-4 py-3 rounded-sm text-sm focus:border-pink focus:outline-none transition-colors resize-none placeholder:text-white-dim/25"
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
      </div>
    </section>
  );
}
