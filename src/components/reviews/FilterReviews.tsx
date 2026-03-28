import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';

export function FilterReviews() {
  return (
    <section className="bg-white">
      <Helmet>
        <title>Filter Reviews - The Photo Course</title>
        <meta name="description" content="Professional filter reviews and buying guides for creative photography control." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50" style={{ minHeight: '400px' }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-gray-900 mb-6" 
              style={{ fontFamily: 'Roslindale, Georgia, serif' }}
            >
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Filter Reviews
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Expert reviews and comprehensive buying guides to help you master creative control with ND, polarizing, and specialty filters.
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
              In-depth guides covering ND filters, polarizers, graduated filters, and how to choose the right filters for your work.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-12 text-center border border-orange-200">
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Coming Soon
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We're creating comprehensive filter buying guides covering ND filters, CPLs, variable ND, and more.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-700">
                <span className="px-4 py-2 bg-white rounded-full border border-orange-200">Best ND Filters</span>
                <span className="px-4 py-2 bg-white rounded-full border border-orange-200">Polarizing Filters</span>
                <span className="px-4 py-2 bg-white rounded-full border border-orange-200">Variable ND Filters</span>
                <span className="px-4 py-2 bg-white rounded-full border border-orange-200">UV & Protection</span>
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
              Individual Filter Reviews
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              Detailed reviews with optical quality tests, color cast analysis, and real-world performance examples.
            </p>
          </div>

          <div className="bg-white rounded-xl p-12 text-center border border-gray-200 shadow-sm">
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Coming Soon
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Comprehensive reviews of filters from B+W, Hoya, Lee, Cokin, and other leading manufacturers.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-700">
                <span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200">B+W ND 3.0</span>
                <span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200">Hoya CPL</span>
                <span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200">Lee Big Stopper</span>
                <span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200">Variable ND</span>
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
              While we prepare our filter reviews, explore our comprehensive courses and resources to improve your photography skills.
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
