"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();

  return (
    <div className="bg-[#EADBD6] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Secure Payment
          </h1>
          <p className="text-gray-600 mt-2">
            Complete your payment using Google Pay
          </p>
        </div>

        {/* PAYMENT CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-8">

          {/* LEFT: QR */}
          <div className="flex flex-col items-center justify-center border rounded-xl p-6 bg-[#FAF7F5]">
            <Image
              src="/gpay-qr.png"
              alt="Google Pay QR"
              width={260}
              height={260}
              className="rounded-lg"
            />
            <p className="mt-4 text-sm text-gray-600 text-center">
              Scan this QR using <b>Google Pay</b> to complete your payment
            </p>
          </div>

          {/* RIGHT: DETAILS */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Payment Summary
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Service</span>
                <span className="font-medium">MahaYatra Booking</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Payment Method</span>
                <span className="font-medium">Google Pay</span>
              </div>
              <div className="flex justify-between border-t pt-3">
                <span className="font-semibold">Total Amount</span>
                <span className="font-bold text-green-600">₹ —</span>
              </div>
            </div>

            {/* INSTRUCTIONS */}
            <div className="bg-[#F3ECE9] p-4 rounded-lg text-sm text-gray-700">
              <ul className="space-y-2">
                <li>✅ Open Google Pay app</li>
                <li>✅ Scan the QR code</li>
                <li>✅ Complete payment</li>
                <li>✅ Click “Payment Completed” below</li>
              </ul>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => router.back()}
                className="px-5 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
              >
                Back
              </button>

              <button
                onClick={() => router.push("/")}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
              >
                Payment Completed
              </button>
            </div>
          </div>
        </div>

        {/* SECURITY NOTE */}
        <div className="text-center text-xs text-gray-500 mt-6">
          🔒 Payments are processed securely via Google Pay
        </div>
      </div>
    </div>
  );
}
