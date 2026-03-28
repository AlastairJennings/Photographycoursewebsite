import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';

export function TripodReviews() {
  return (
    <section className="bg-white">
      <Helmet>
        <title>Tripod Reviews - The Photo Course</title>
        <meta name="description" content="Professional tripod reviews and buying guides for stable, sharp photography." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50" style={{ minHeight: '400px' }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-gray-900 mb-6" 
              style={{ fontFamily: 'Roslindale, Georgia, serif' }}
            >
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Tripod Reviews
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Expert reviews and comprehensive buying guides to help you find the perfect tripod for stable, sharp images.
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
              In-depth guides covering materials, height, weight capacity, heads, and choosing the right tripod for your needs.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-12 text-center border border-green-200">
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Coming Soon
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We're creating comprehensive tripod buying guides covering carbon fiber, aluminum, travel tripods, and more.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-700">
                <span className="px-4 py-2 bg-white rounded-full border border-green-200">Best Travel Tripods</span>
                <span className="px-4 py-2 bg-white rounded-full border border-green-200">Carbon Fiber vs Aluminum</span>
                <span className="px-4 py-2 bg-white rounded-full border border-green-200">Ball Heads vs Pan-Tilt</span>
                <span className="px-4 py-2 bg-white rounded-full border border-green-200">Budget Tripods</span>
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
              Individual Tripod Reviews
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              Detailed reviews with stability tests, portability assessments, and real-world field testing.
            </p>
          </div>

          <div className="bg-white rounded-xl p-12 text-center border border-gray-200 shadow-sm">
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl mb-6">📐</div>
              <h3 className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Coming Soon
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Comprehensive reviews of tripods from Manfrotto, Gitzo, Peak Design, Benro, and other manufacturers.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-700">
                <span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200">Manfrotto MT055</span>
                <span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200">Gitzo Series</span>
                <span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200">Peak Design Travel</span>
                <span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200">Benro Mach3</span>
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
              While we prepare our tripod reviews, explore our comprehensive courses and resources to improve your photography skills.
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
