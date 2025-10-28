"use client";

import React from "react";

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="py-16 relative"
      style={{
        backgroundImage: "url('/images/Happy-Tails-Contact.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="flex items-center justify-center min-h-screen relative z-10 px-4 sm:px-6 lg:px-8">
        {/* White content container */}
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl p-6 md:grid md:grid-cols-2 md:gap-8 space-y-6 md:space-y-0">

          {/* Left Content */}
          <div className="space-y-8">
            <header className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
              <p className="text-gray-600">
                We&apos;re here to assist you! Whether you have questions, feedback, or inquiries, our team is ready to help.
              </p>
            </header>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-lg space-y-3">
                <div className="w-10 h-10 bg-[#d6b18a] rounded-full flex items-center justify-center">
                  {/* Phone Icon */}
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.717 21 3 14.283 3 6V5z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Support</h3>
                <p className="text-sm text-gray-500">
                  We provide various methods for you to carry out all transactions related to your finances.
                </p>
              </div>

              <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-lg space-y-3">
                <div className="w-10 h-10 bg-[#d6b18a] rounded-full flex items-center justify-center">
                  {/* Location Icon */}
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13 21.314l-4.657-4.657a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Our Location</h3>
                <p className="text-sm text-gray-500">
                  123 Pet Lane, City, State 12345
                </p>
              </div>
            </div>

            {/* Operating Hours below cards */}
            <div className="p-3 max-w-md">
              <h3 className="text-lg font-semibold text-gray-900">Operating Hours</h3>
              <p className="text-sm text-gray-500">
                  Mon-Fri: 9AM-6PM | Sat: 10AM-4PM | Sun: Closed
              </p>
            </div>
          </div>

          {/* Right Content: Form */}
          <form className="bg-white border border-gray-100 rounded-lg shadow-lg space-y-6 p-8 md:p-10">
            <div className="space-y-1">
              <label htmlFor="name" className="block text-[#b7791f] font-semibold mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="block w-full px-3 py-2 border border-[#d6b18a] rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#b7791f]"
                placeholder="Your Name"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="block text-[#b7791f] font-semibold mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="block w-full px-3 py-2 border border-[#d6b18a] rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#b7791f]"
                placeholder="Enter Your Email"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="block text-[#b7791f] font-semibold mb-1">Message</label>
              <textarea
                id="message"
                rows={5}
                className="block w-full px-3 py-2 border border-[#d6b18a] rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#b7791f]"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-md bg-[#d6b18a] text-white hover:bg-[#b7791f] transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
