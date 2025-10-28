"use client";

import Image from "next/image";
import React from "react";

const pets = [
  { name: "Max", image: "/pets/max.png", alt: "Happy Dog" },
  { name: "Luna", image: "/pets/luna.png", alt: "Curious Cat" },
  { name: "Pip", image: "/pets/pip.png", alt: "Guinea Pig" },
  { name: "Sky", image: "/pets/sky.png", alt: "Bird Perched" },
  { name: "Thumper", image: "/pets/thumper.png", alt: "Fluffy Rabbit" },
  { name: "Charlie", image: "/pets/charlie.png", alt: "Sleeping Dog" },
  { name: "Rocky", image: "/pets/rocky.png", alt: "Dog Playing" },
  { name: "Cleo", image: "/pets/cleo.png", alt: "Cat Staring" },
  { name: "Toby", image: "/pets/toby.png", alt: "Small Pet" },
  { name: "Dolly", image: "/pets/dolly.png", alt: "Pet Close-up" },
];

export default function FurryFriendsCollection() {
  return (
    <section id="pets" className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-gray-600 text-sm uppercase tracking-wider">
            A Pawsome Journey
          </p>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">
            Furry Friends Collection
          </h1>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {pets.map((pet, index) => (
            <div
              key={index}
              className="relative w-full h-48 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            >
              <Image
                src={pet.image}
                alt={pet.alt}
                fill
                priority={index < 5} // Preload top images for better LCP
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 20vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 p-2">
                <p className="text-white text-sm font-semibold text-center">
                  {pet.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
