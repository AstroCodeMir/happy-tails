"use client";

import React from "react";
import FadeInSection from "@/components/FadeInSection";

const PawPrintIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="11" cy="4" r="2" />
    <circle cx="18" cy="8" r="2" />
    <circle cx="20" cy="16" r="2" />
    <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-[110px] md:pt-[100px] lg:pt-[90px] lg:px-10">
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
              <FadeInSection>
          <span className="inline-flex items-center px-3 py-1 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full">
            #1 Petshop
          </span>
              </FadeInSection>
          <header className="space-y-4">
            <FadeInSection delay={0.2}>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Your pet <br />
              deserves the <br />
              best care
            </h1>
            
            <p className="text-lg text-white max-w-lg">
              From grooming to daycare, we provide professional services tailored to your furry friends.
            </p>
            </FadeInSection>
          </header>
          <FadeInSection>
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
          </FadeInSection>
        </div>

        {/* Right Content - Hero Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mt-12 lg:mt-0 relative lg:min-h-screen p-4 lg:p-8">
      
      {/* The Dashboard Card Container: Key change is lg:w-full to take 100% of the available half-width space. */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl lg:max-w-none flex flex-col overflow-hidden relative h-full min-h-[500px] lg:h-[calc(100vh-64px)] lg:w-full"> 
        
        {/* Absolute Image Container: Fills the entire inner space of the card (z-0) */}
        <div className="absolute inset-0 z-0">
          {/* Using standard HTML img tag */}
          <img
            src="/images/Happy-Tails-Hero.jpg"
            alt="Compassionate Veterinary Care Hero"
            className="w-full h-full object-cover rounded-2xl" 
          />
          {/* Optional: Add a subtle overlay for better text contrast */}
          <div className="absolute inset-0 bg-indigo-900 opacity-20 rounded-2xl"></div>
        </div>

        {/* Header Bar Simulation (z-20) */}
        <div className="relative z-20 p-4 flex items-center justify-between bg-white/90 backdrop-blur-sm rounded-t-2xl border-b border-gray-200">
          {/* Traffic Light Dots */}
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-red-400 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-400 rounded-full"></span>
          </div>
          {/* Title */}
          <h2 className="text-base font-semibold text-gray-800 flex items-center space-x-1">
            <PawPrintIcon className="w-4 h-4 text-indigo-600" />
            <span>Pet Health Care</span>
          </h2>
        </div>
        
        {/* Content/Interaction Layer */}
        <div className="relative z-10 p-6 flex-grow flex items-end justify-start">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl max-w-sm">
                <h3 className="text-xl font-extrabold text-indigo-900 mb-2">
                    Compassionate Veterinary Care
                </h3>
                <p className="text-gray-700">
                    Your pet's health insights, appointment schedule, and vaccination history are always secure and accessible.
                </p>
            </div>
        </div>

      </div>
    </div>
        </div>
    </section>
  );
}
