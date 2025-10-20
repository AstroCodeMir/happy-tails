"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 relative bg-white"
      style={{
        backgroundImage: "url('images/Happy-Tails-Contact.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
          Contact Us
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg shadow-md">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-semibold mb-3 text-[#b7791f]">
              Get in Touch
            </h4>
            <p className="text-gray-600 mb-3 sm:mb-4">
              Have questions or ready to book? Reach out to us!
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Email:</strong> info@pawsandplay.com
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong> 123 Pet Lane, City, State 12345
            </p>
          </div>

          {/* Contact Form */}
          <form className="bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg shadow-md">
            <div className="mb-3 sm:mb-4">
              <label
                htmlFor="name"
                className="block text-[#b7791f] font-semibold mb-1 sm:mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-[#d6b18a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b7791f]"
              />
            </div>

            <div className="mb-3 sm:mb-4">
              <label
                htmlFor="email"
                className="block text-[#b7791f] font-semibold mb-1 sm:mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-[#d6b18a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b7791f]"
              />
            </div>

            <div className="mb-3 sm:mb-4">
              <label
                htmlFor="message"
                className="block text-[#b7791f] font-semibold mb-1 sm:mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-[#d6b18a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b7791f]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 rounded-md bg-[#d6b18a] text-white hover:bg-[#b7791f] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section#contact {
            background-position: top;
          }
        }
      `}</style>
    </section>
  );
}
