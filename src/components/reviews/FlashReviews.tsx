import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';

export function FlashReviews() {
  return (
    <section className="bg-white">
      <Helmet>
        <title>Flash Reviews - The Photo Course</title>
        <meta name="description" content="Professional flash and speedlight reviews and buying guides for lighting mastery." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-red-50" style={{ minHeight: '400px' }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-gray-900 mb-6" 
              style={{ fontFamily: 'Roslindale, Georgia, serif' }}
            >
              <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
                Flash Reviews
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Expert reviews and comprehensive buying guides to help you master flash photography with the right speedlights and strobes.
            </p>
          </div>
        </div>
      </div>

      {/* Buyers Guides Section */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-20">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Buyers Guides
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              In-depth guides covering speedlights, studio strobes, triggers, modifiers, and building your flash system.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-12 text-center border border-pink-200">
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl mb-6">💡</div>
              <h3 className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Coming Soon
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We're creating comprehensive flash buying guides covering speedlights, strobes, TTL vs manual, and more.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-700">
                <span className="px-4 py-2 bg-white rounded-full border border-pink-200">Best Speedlights</span>
                <span className="px-4 py-2 bg-white rounded-full border border-pink-200">Studio Strobes</span>
                <span className="px-4 py-2 bg-white rounded-full border border-pink-200">TTL vs Manual</span>
                <span className="px-4 py-2 bg-white rounded-full border border-pink-200">Flash Triggers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Individual Reviews Section */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-20">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Individual Flash Reviews
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              Detailed reviews with power output tests, recycle time analysis, color temperature accuracy, and real-world examples.
            </p>
          </div>

          <div className="bg-white rounded-xl p-12 text-center border border-gray-200 shadow-sm">
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Coming Soon
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Comprehensive reviews of flashes from Canon, Nikon, Sony, Godox, Profoto, and other manufacturers.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-700">
                <span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200">Godox V1</span>
                <span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200">Profoto A1X</span>
                <span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200">Canon 600EX</span>
                <span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200">Nikon SB-5000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-gray-200 bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Learn Photography While You Wait
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              While we prepare our flash reviews, explore our comprehensive courses and resources to improve your photography skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/courses"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 h-14 text-center"
              >
                Explore Courses
              </Link>
              <Link 
                to="/resources"
                className="inline-flex items-center justify-center gap-3 border-2 border-gray-900 text-gray-900 px-8 h-14 text-center"
              >
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
