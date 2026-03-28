import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';

export function ConstantLightReviews() {
  return (
    <section className="bg-white">
      <Helmet>
        <title>Constant Light Reviews - The Photo Course</title>
        <meta name="description" content="Professional LED panel and continuous lighting reviews for video and photography." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50" style={{ minHeight: '400px' }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-gray-900 mb-6" 
              style={{ fontFamily: 'Roslindale, Georgia, serif' }}
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
                Constant Light Reviews
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Expert reviews and comprehensive buying guides for LED panels, continuous lighting, and video light solutions.
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
              In-depth guides covering LED panels, bi-color lights, RGB lights, CRI ratings, and choosing continuous lighting.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-12 text-center border border-indigo-200">
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl mb-6">🔆</div>
              <h3 className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Coming Soon
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We're creating comprehensive constant light buying guides covering LED panels, COB lights, tube lights, and more.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-700">
                <span className="px-4 py-2 bg-white rounded-full border border-indigo-200">Best LED Panels</span>
                <span className="px-4 py-2 bg-white rounded-full border border-indigo-200">Bi-Color Lights</span>
                <span className="px-4 py-2 bg-white rounded-full border border-indigo-200">RGB Lights</span>
                <span className="px-4 py-2 bg-white rounded-full border border-indigo-200">Portable Lights</span>
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
              Individual Constant Light Reviews
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              Detailed reviews with brightness tests, color accuracy measurements, battery life, and real-world performance.
            </p>
          </div>

          <div className="bg-white rounded-xl p-12 text-center border border-gray-200 shadow-sm">
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl mb-6">💡</div>
              <h3 className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Coming Soon
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Comprehensive reviews of constant lights from Aputure, Godox, Nanlite, Neewer, and other manufacturers.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-700">
                <span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200">Aputure 120D</span>
                <span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200">Godox SL-60W</span>
                <span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200">Nanlite Forza</span>
                <span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200">Neewer 660</span>
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
              While we prepare our constant light reviews, explore our comprehensive courses and resources to improve your photography skills.
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
