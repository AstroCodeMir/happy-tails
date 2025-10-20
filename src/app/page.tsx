"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pets", label: "Pets" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-amber-50 via-rose-50 to-pink-50 shadow-md border-b border-rose-100 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/Paw.jpg"
            alt="Happy Tails Logo"
            width={45}
            height={45}
            className="rounded-full object-cover ring-2 ring-rose-400"
          />
          <p className="text-xl font-extrabold text-rose-700 tracking-tight">
            Happy <span className="text-amber-600">Tails</span>
          </p>
        </div>

        {/* Centered Nav for large screens */}
        <div className="hidden lg:flex items-center gap-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium text-gray-800 transition duration-200 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-rose-500 hover:after:w-full after:transition-all ${
                  isActive
                    ? "text-rose-600 after:w-full"
                    : "hover:text-rose-500"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Shop Now Button (Desktop only) */}
        <div className="hidden lg:block">
          <Link
            href="/shop"
            className="rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white hover:bg-rose-500 hover:shadow-md transition-all"
          >
            🛍️ Shop Now
          </Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none p-2 rounded-md hover:bg-rose-100 transition"
          >
            {isOpen ? (
              // Close icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-md text-base font-semibold transition ${
                pathname === link.href
                  ? "text-rose-600 bg-rose-50"
                  : "text-gray-800 hover:bg-gray-100 hover:text-rose-600"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Shop Button for Mobile */}
          <Link
            href="/shop"
            onClick={() => setIsOpen(false)}
            className="mt-2 block w-full text-center rounded-full bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-rose-500 hover:shadow transition-all"
          >
            🐾 Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
}
