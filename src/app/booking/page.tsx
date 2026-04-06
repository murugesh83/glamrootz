"use client";

import { useState } from "react";

const services = [
  "Haircut & Styling (Men)",
  "Haircut & Styling (Women)",
  "Hair Coloring",
  "Highlights / Balayage",
  "Classic Facial",
  "Gold Facial",
  "Diamond Facial",
  "Beard Trim & Shape",
  "Royal Shave",
  "Swedish Massage",
  "Bridal Makeup",
  "Groom Package",
  "Party Makeup",
  "Other",
];

const timeSlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
];

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="py-32 px-6 bg-black min-h-[70vh] flex items-center justify-center">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-6xl mb-6">&#10003;</div>
          <h2 className="text-3xl font-bold text-gradient-gold mb-4">
            Booking Confirmed!
          </h2>
          <p className="text-white-dim leading-relaxed mb-8">
            Thank you for choosing Glamrootz Signature. We&apos;ll confirm your
            appointment shortly via phone or WhatsApp.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-8 py-3 border border-gold text-gold tracking-wider uppercase text-sm hover:bg-gold/10 transition-all duration-300 rounded-sm"
          >
            Book Another
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.06)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Reserve Your Spot
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-6">
            Book Appointment
          </h1>
          <p className="text-white-dim text-lg max-w-2xl mx-auto">
            Choose your service, pick a time, and we&apos;ll take care of the rest.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-6 bg-black-light">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div>
              <label className="block text-gold text-sm tracking-wider uppercase mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                className="w-full bg-black border border-gold/20 text-white px-4 py-3 rounded-sm focus:border-gold focus:outline-none transition-colors placeholder:text-white-dim/30"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gold text-sm tracking-wider uppercase mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                className="w-full bg-black border border-gold/20 text-white px-4 py-3 rounded-sm focus:border-gold focus:outline-none transition-colors placeholder:text-white-dim/30"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-gold text-sm tracking-wider uppercase mb-2">
                Service
              </label>
              <select
                required
                className="w-full bg-black border border-gold/20 text-white px-4 py-3 rounded-sm focus:border-gold focus:outline-none transition-colors appearance-none"
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-gold text-sm tracking-wider uppercase mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                required
                className="w-full bg-black border border-gold/20 text-white px-4 py-3 rounded-sm focus:border-gold focus:outline-none transition-colors"
              />
            </div>

            {/* Time Slots */}
            <div>
              <label className="block text-gold text-sm tracking-wider uppercase mb-3">
                Preferred Time
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 px-1 text-xs tracking-wider rounded-sm border transition-all duration-200 ${
                      selectedTime === time
                        ? "bg-gold text-black border-gold font-semibold"
                        : "border-gold/20 text-white-dim hover:border-gold/50 hover:text-gold"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-gold text-sm tracking-wider uppercase mb-2">
                Special Requests (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Any specific requirements or preferences..."
                className="w-full bg-black border border-gold/20 text-white px-4 py-3 rounded-sm focus:border-gold focus:outline-none transition-colors resize-none placeholder:text-white-dim/30"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 bg-gold text-black font-semibold tracking-wider uppercase text-sm hover:bg-gold-light transition-all duration-300 rounded-sm"
            >
              Confirm Booking
            </button>

            <p className="text-white-dim/50 text-xs text-center">
              We&apos;ll confirm your appointment via WhatsApp or phone call within 30 minutes.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
