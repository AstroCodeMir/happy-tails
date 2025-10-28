"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-sm text-amber-700 font-medium block mb-2">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl font-bold text-amber-900">
            What Our Happy Users Say!
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={32}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            renderBullet: (index, className) => {
              return `<span class="${className} swiper-underscore"></span>`;
            },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 32 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
          className="pb-16"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <TestimonialCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="custom-pagination flex justify-center gap-2 mt-12"></div>
      </div>

      {/* Custom styles for underscore pagination */}
      <style jsx global>{`
        .swiper-underscore {
          display: inline-block;
          width: 24px;
          height: 3px;
          background-color: #d6b18a; /* soft brown tone */
          border-radius: 2px;
          transition: all 0.3s ease;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active.swiper-underscore {
          background-color: #b7791f; /* amber-700 */
          opacity: 1;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}

/* --- Card Component --- */
function TestimonialCard({
  rating,
  quote,
  img,
  name,
  role,
}: {
  rating: string;
  quote: string;
  img: string;
  name: string;
  role: string;
}) {
  return (
    <div className="group bg-white border border-amber-200 rounded-2xl p-6 transition-all duration-500 hover:border-amber-500 hover:shadow-md">
      <div className="flex items-center mb-7 gap-2 text-amber-500">
        <Star />
        <span className="text-base font-semibold text-amber-700">{rating}</span>
      </div>
      <p className="text-base text-gray-700 leading-6 pb-8 group-hover:text-amber-900">
        {quote}
      </p>
      <div className="flex items-center gap-5 border-t border-amber-100 pt-5">
        <Image
          className="rounded-full object-cover"
          src={img}
          alt={name}
          width={40}
          height={40}
        />
        <div>
          <h5 className="text-amber-900 font-semibold mb-1">{name}</h5>
          <span className="text-sm text-gray-500">{role}</span>
        </div>
      </div>
    </div>
  );
}

/* --- Star Icon --- */
function Star() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 18 17"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" />
    </svg>
  );
}

/* --- Testimonials Data --- */
const testimonials = [
  {
    rating: "4.9",
    quote:
      "The veterinary team at Happy Tails is knowledgeable and caring. They helped us quickly diagnose our cat's issue and provided a clear treatment plan.",
    img: "/images/Jane.jpg",
    name: "Jane D",
    role: "Pet Owner & CEO",
  },
  {
    rating: "5.0",
    quote:
      "Shopping at the pet store is so easy. They always stock the premium food and best toys we need, and the staff is wonderful. A truly joyful experience!",
    img: "/images/Harsh.jpg",
    name: "Harsh M",
    role: "Dog Dad & Product Designer",
  },
  {
    rating: "4.8",
    quote:
      "The grooming service here is unparalleled. Max always comes home looking and smelling amazing. They treat him like family every time.",
    img: "/images/Alex.jpg",
    name: "Alex T",
    role: "Client & UI Developer",
  },
  {
    rating: "5.0",
    quote:
      "From our first puppy visit to routine checkups, the experience at the clinic has been seamless. It's clear they genuinely love animals.",
    img: "/images/Maria.jpg",
    name: "Maria L",
    role: "Happy Tails Customer",
  },
  {
    rating: "4.7",
    quote:
      "Happy Tails helped us transition our new rescue with the right supplies and advice. The staff's knowledge and support were invaluable.",
    img: "/images/Chris.jpg",
    name: "Chris B",
    role: "Operations Manager & Cat Lover",
  },
];
