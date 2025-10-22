"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ✅ icons from lucide-react

export default function Header() {
  const [activeLink, setActiveLink] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#pets", label: "Pets" },
    { href: "#contact", label: "Contact" },
  ];

  const handleClick = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false); // close menu after clicking
  };

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center space-x-10">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleClick(link.href)}
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

          {/* Shop Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="/shop"
              className="rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-rose-500 hover:shadow-lg hover:-translate-y-[1px] transition-all duration-200"
            >
              🛍️ Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-rose-600 focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center bg-rose-50 py-4 space-y-4 rounded-b-2xl shadow-md mb-8">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`text-base font-medium ${
                    isActive ? "text-rose-600 font-semibold" : "text-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/shop"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-rose-500 hover:shadow-lg transition-all duration-200"
            >
              🛍️ Shop Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
