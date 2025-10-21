"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState("/");

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#pets", label: "Pets" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-rose-50 via-amber-50 to-pink-50 shadow-md border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
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

          {/* Navigation */}
          <div className="flex-1 flex justify-center space-x-10">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`relative text-base font-medium transition duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-rose-500 hover:after:w-full after:transition-all ${
                    isActive
                      ? "text-rose-600 after:w-full font-semibold"
                      : "text-gray-800 hover:text-rose-500"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Shop Button */}
          <div>
            <Link
              href="/shop"
              className="rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-rose-500 hover:shadow-lg hover:-translate-y-[1px] transition-all duration-200"
            >
              🛍️ Shop Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
