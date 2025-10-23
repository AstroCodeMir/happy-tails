
export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h3>
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
            <div className="text-5xl mb-4">🐶</div>
            <h4 className="text-xl font-semibold mb-2 text-rose-600">
              Pet Grooming
            </h4>
            <p className="text-gray-600">
              Full grooming services including bathing, trimming, and nail care
              for a happy, healthy pet.
            </p>
          </div>
      
          {/* Service 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
       
            <div className="text-5xl mb-4">🚶‍♂️</div>
            <h4 className="text-xl font-semibold mb-2 text-amber-600">
              Dog Walking
            </h4>
            <p className="text-gray-600">
              Daily walks to keep your dog active and socialized, with
              personalized attention.
            </p>
       
          </div>

          {/* Service 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
           
            <div className="text-5xl mb-4">🏡</div>
            <h4 className="text-xl font-semibold mb-2 text-rose-600">
              Pet Daycare
            </h4>
            <p className="text-gray-600">
              Safe and fun daycare environment for your pets while you're away.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
}
