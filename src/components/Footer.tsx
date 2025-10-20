"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#d6b18a] text-white">
      {/* SVG Wave Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-12 md:h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 V40 C150,120 350,0 600,40 C850,80 1050,0 1200,40 V0 H0 Z"
            fill="#d6b18a"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-10 relative z-10">
        {/* Top section: Logo + Nav */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          {/* Brand / Logo */}
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Image
              src="/images/Paw.jpg"
              alt="Happy Tails Logo"
              width={45}
              height={45}
              className="rounded-full object-cover ring-2 ring-rose-400"
            />
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              Happy <span className="text-rose-600">Tails</span>
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-end text-white">
            <a href="#home" className="hover:text-[#b7791f] transition">
              Home
            </a>
            <a href="#services" className="hover:text-[#b7791f] transition">
              Services
            </a>
            <a href="#about" className="hover:text-[#b7791f] transition">
              About
            </a>
            <a href="#contact" className="hover:text-[#b7791f] transition">
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-30 my-6"></div>

        {/* Bottom section: Contact + Social */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-center md:text-left">
          {/* Contact Info */}
          <div className="text-sm space-y-1 text-white">
            <p>
              Phone: <strong>(123) 456-7890</strong>
            </p>
            <p>
              Email: <strong>info@happy-tails.com</strong>
            </p>
            <p>
              Address: <strong>123 Pet Lane, City, State 12345</strong>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-4 mt-2 md:mt-0 text-lg">
            {/* Simple SVG social icons */}
            <a href="#" className="hover:text-[#b7791f] transition">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.49v-9.294H9.692v-3.622h3.123V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className="hover:text-[#b7791f] transition">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.304.975.975 1.242 2.242 1.304 3.608.058 1.266.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.304 3.608-.975.975-2.242 1.242-3.608 1.304-1.266.058-1.645.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.304-.975-.975-1.242-2.242-1.304-3.608C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.062-1.366.33-2.633 1.304-3.608C4.512 2.493 5.779 2.226 7.145 2.163 8.411 2.105 8.79 2.163 12 2.163M12 0C8.741 0 8.332.013 7.052.072 5.771.131 4.637.406 3.678 1.366 2.718 2.325 2.443 3.459 2.384 4.74.013 8.332 0 8.741 0 12s.013 3.668.072 4.948c.059 1.281.334 2.415 1.294 3.374.959.959 2.093 1.234 3.374 1.294C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.415-.334 3.374-1.294.959-.959 1.234-2.093 1.294-3.374.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.281-.334-2.415-1.294-3.374C19.363.406 18.229.131 16.948.072 15.668.013 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            </a>
            <a href="#" className="hover:text-[#b7791f] transition">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.161c-.542.93-.85 2.012-.85 3.163 0 2.182 1.112 4.104 2.804 5.233a4.903 4.903 0 0 1-2.228-.616v.061a4.919 4.919 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.085 4.923 4.923 0 0 0 4.6 3.419 9.867 9.867 0 0 1-6.102 2.105c-.396 0-.788-.023-1.177-.069a13.945 13.945 0 0 0 7.557 2.212c9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.634A9.936 9.936 0 0 0 24 4.557z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-white/80">
          &copy; {new Date().getFullYear()} Happy Tails. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
