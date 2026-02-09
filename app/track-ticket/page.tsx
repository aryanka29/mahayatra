"use client";

import { useState } from "react";

export default function TrackTicketPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    service: "",
    bookingId: "",
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4ECE9] to-[#EADBD6] py-16 px-6">
      <div className="max-w-4xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#4A3A34]">
            💬 Share Your Experience
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Your feedback helps us improve our services and deliver a better
            travel experience with MahaYatra.
          </p>

          <div className="mt-6 flex justify-center">
            <span className="h-1 w-24 rounded-full bg-[#8D5B4C]" />
          </div>
        </div>

        {/* ================= CARD ================= */}
        <div className="bg-white rounded-[32px] shadow-2xl border border-[#E5D6D0] p-10">

          {!submitted ? (
            <>
              {/* FORM HEADER */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                  📝 Feedback Form
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Please fill in the details below
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* SERVICE */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    🚍 Service Type
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#8D5B4C] outline-none"
                  >
                    <option value="">Select Service</option>
                    <option value="bus">Bus</option>
                    <option value="train">Train</option>
                    <option value="cab">Cab</option>
                    <option value="hotel">Hotel</option>
                  </select>
                </div>

                {/* BOOKING ID */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    🎫 Booking ID
                  </label>
                  <input
                    type="text"
                    name="bookingId"
                    required
                    value={form.bookingId}
                    onChange={handleChange}
                    placeholder="e.g. MYT123456"
                    className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#8D5B4C] outline-none"
                  />
                </div>

                {/* NAME */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    👤 Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#8D5B4C] outline-none"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    📧 Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#8D5B4C] outline-none"
                  />
                </div>

                {/* FEEDBACK */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ✍️ Your Feedback
                  </label>
                  <textarea
                    name="feedback"
                    rows={4}
                    required
                    value={form.feedback}
                    onChange={handleChange}
                    placeholder="Tell us about your journey, service quality, or suggestions..."
                    className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#8D5B4C] outline-none resize-none"
                  />
                </div>

                {/* ACTION */}
                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="
                      px-8
                      py-3
                      bg-[#8D5B4C]
                      hover:bg-[#73473A]
                      text-white
                      rounded-xl
                      font-semibold
                      shadow-md
                      hover:shadow-lg
                      transition
                    "
                  >
                    Submit Feedback
                  </button>
                </div>
              </form>
            </>
          ) : (
            /* ================= SUCCESS STATE ================= */
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-3xl font-bold text-gray-800">
                Thank You!
              </h2>
              <p className="text-gray-600 mt-3 max-w-md mx-auto">
                Your feedback has been submitted successfully.  
                We truly appreciate your time and trust in MahaYatra.
              </p>

              <div className="mt-8">
                <span className="inline-block bg-[#F3E6E1] text-[#8D5B4C] px-6 py-2 rounded-full font-semibold">
                  💖 We value your voice
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
