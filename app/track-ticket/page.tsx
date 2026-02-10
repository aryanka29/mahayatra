"use client";

import { useState } from "react";
import {
  MessageSquare,
  ClipboardList,
  Bus,
  Ticket,
  User,
  Mail,
  Send,
  CheckCircle,
  Heart,
} from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-b from-[#F4ECE9] to-[#EADBD6] py-14 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <MessageSquare className="w-10 h-10 text-[#8D5B4C]" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#4A3A34]">
            Share Your Experience
          </h1>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Your feedback helps us improve our services and deliver a better
            travel experience with MahaYatra.
          </p>

          <div className="mt-5 flex justify-center">
            <span className="h-1 w-24 rounded-full bg-[#8D5B4C]" />
          </div>
        </div>

        {/* ================= CARD ================= */}
        <div className="bg-white rounded-3xl shadow-xl border border-[#E5D6D0] p-6 sm:p-10">

          {!submitted ? (
            <>
              {/* FORM HEADER */}
              <div className="mb-8 flex items-center gap-3">
                <ClipboardList className="w-6 h-6 text-[#8D5B4C]" />
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                    Feedback Form
                  </h2>
                  <p className="text-sm text-gray-500">
                    Please fill in the details below
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* SERVICE */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                    <Bus className="w-4 h-4 text-[#8D5B4C]" />
                    Service Type
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
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                    <Ticket className="w-4 h-4 text-[#8D5B4C]" />
                    Booking ID
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
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                    <User className="w-4 h-4 text-[#8D5B4C]" />
                    Your Name
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
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                    <Mail className="w-4 h-4 text-[#8D5B4C]" />
                    Email Address
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
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                    <MessageSquare className="w-4 h-4 text-[#8D5B4C]" />
                    Your Feedback
                  </label>
                  <textarea
                    name="feedback"
                    rows={4}
                    required
                    value={form.feedback}
                    onChange={handleChange}
                    placeholder="Tell us about your journey or suggestions..."
                    className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#8D5B4C] outline-none resize-none"
                  />
                </div>

                {/* ACTION */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-8 py-3 bg-[#8D5B4C] hover:bg-[#73473A] text-white rounded-xl font-semibold shadow-md transition"
                  >
                    <Send className="w-4 h-4" />
                    Submit Feedback
                  </button>
                </div>
              </form>
            </>
          ) : (
            /* ================= SUCCESS STATE ================= */
            <div className="text-center py-16">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-5" />

              <h2 className="text-3xl font-bold text-gray-800">
                Thank You!
              </h2>

              <p className="text-gray-600 mt-3 max-w-md mx-auto">
                Your feedback has been submitted successfully.
                We truly appreciate your trust in MahaYatra.
              </p>

              <div className="mt-8 flex justify-center">
                <span className="flex items-center gap-2 bg-[#F3E6E1] text-[#8D5B4C] px-6 py-2 rounded-full font-semibold">
                  <Heart className="w-4 h-4" />
                  We value your voice
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
