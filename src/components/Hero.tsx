export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center text-white min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/images/Happy-Tails-Hero.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-500/70 to-amber-400/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Your Pets Deserve the Best Care
        </h2>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
          Professional pet grooming, walking, and daycare services tailored to your furry friends.
        </p>
        <a
          href="#contact"
          className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}
