"use client";

import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-16">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        
      >
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/70 to-amber-400/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-16">
        {/* Left Content */}
        <div className="space-y-8 lg:pr-12 text-center lg:text-left">
          <span className="inline-flex items-center px-3 py-1 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full">
            #1 Petshop
          </span>

          <header className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Your pet <br />
              deserves the <br />
              best care
            </h1>
            <p className="text-lg text-white max-w-lg">
              From grooming to daycare, we provide professional services tailored to your furry friends.
            </p>
          </header>

          <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 max-w-lg mx-auto lg:mx-0">
            <input
              type="email"
              placeholder="Enter email to get booked"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500 shadow-sm transition duration-150"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-6 py-3 text-lg font-medium text-white bg-rose-600 rounded-lg hover:bg-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-500 focus:ring-opacity-50 transition duration-150 shadow-md"
            >
              Book Now
            </button>
          </form>
        </div>

        {/* Right Content - Hero Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-12 lg:mt-0">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl flex flex-col overflow-hidden relative min-h-[500px] p-4">
            <div className="absolute top-0 left-0 right-0 p-4 flex items-center space-x-2 bg-white rounded-t-xl z-20">
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
            </div>

            <div className="absolute top-12 right-0 left-0 h-12 border-b border-gray-100 px-6 flex items-center justify-between z-10 bg-white">
                <h2 className="text-xl font-bold text-gray-900">
                  Compassionate Veterinary Care for Your Pet
                </h2>
              </div>

              <div className="p-6 flex-grow overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/Happy-Tails-Hero.jpg"
                  alt="Hero Image"
                  width={500}
                  height={400}
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
