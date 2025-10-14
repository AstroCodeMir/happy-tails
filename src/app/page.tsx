"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white text-gray-800">
      {/* 🧭 Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <h1 className="text-2xl font-extrabold text-orange-500">Happy Tails 🐾</h1>
        <ul className="hidden md:flex gap-6 text-gray-600">
          <li><a href="#home" className="hover:text-orange-500">Home</a></li>
          <li><a href="#shop" className="hover:text-orange-500">Shop</a></li>
          <li><a href="#testimonials" className="hover:text-orange-500">Reviews</a></li>
          <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
        </ul>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full transition text-sm">
          🛒 Shop Now
        </button>
      </nav>

      {/* 🏠 Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4">
          Welcome to Happy Tails 🐶
        </h1>
        <p className="max-w-2xl text-lg text-gray-600 mb-8">
          Bringing love, joy, and wagging tails to your home! Explore our shop for
          adorable pets and their favorite goodies.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg transition">
          🛍️ Shop Now
        </button>
        <div className="mt-12 relative w-full max-w-4xl aspect-video">
          <Image
            src="/pets-hero.jpg"
            alt="Happy pets"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* 🐕 Featured Pets / Products */}
      <section id="shop" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-10">
          Featured Pets & Products
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            { name: "Golden Retriever", img: "/golden.jpg", price: "₱25,000" },
            { name: "Persian Cat", img: "/persian.jpg", price: "₱18,000" },
            { name: "Pet Bed Deluxe", img: "/pet-bed.jpg", price: "₱1,200" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-orange-50 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-orange-600 font-medium">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 💬 Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-orange-50 text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-10">
          What Our Customers Say 💬
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              name: "Anna R.",
              text: "My puppy loves everything from Happy Tails! Great service and quality.",
            },
            {
              name: "Mark D.",
              text: "Adopted my cat here — the team was so kind and helpful. Highly recommend!",
            },
            {
              name: "Joyce P.",
              text: "Fast delivery and super cute packaging. My pets are happy, and so am I!",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-600 mb-4">“{t.text}”</p>
              <h4 className="font-semibold text-orange-600">— {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 📞 Contact / Visit Us */}
      <section id="contact" className="py-20 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">Visit Us 🏡</h2>
        <p className="text-gray-600 mb-6">
          Come meet our furry friends or send us a message below!
        </p>
        <div className="max-w-md mx-auto text-left bg-orange-50 p-8 rounded-2xl shadow-md">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-lg p-3 outline-orange-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-lg p-3 outline-orange-400"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="border rounded-lg p-3 outline-orange-400"
            ></textarea>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full transition">
              Send Message
            </button>
          </form>
        </div>
        <p className="mt-6 text-gray-500">📍 123 Pet Street, Quezon City</p>
        <p className="text-gray-500">📞 0912 345 6789</p>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 bg-orange-100">
        © {new Date().getFullYear()} Happy Tails. All rights reserved.
      </footer>
    </main>
  );
}
