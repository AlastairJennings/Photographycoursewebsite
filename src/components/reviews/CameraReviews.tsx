import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';

export function CameraReviews() {
  return (
    <section className="bg-white">
      <Helmet>
        <title>Camera Reviews - The Photo Course</title>
        <meta name="description" content="Comprehensive camera reviews and buying guides for photographers of all levels." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50" style={{ minHeight: '400px' }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-gray-900 mb-6" 
              style={{ fontFamily: 'Roslindale, Georgia, serif' }}
            >
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Camera Reviews
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Expert reviews and comprehensive buying guides to help you choose the perfect camera for your photography needs.
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
              In-depth guides to help you understand camera features, compare models, and make informed purchasing decisions.
            </p>
          </div>

          {/* Buyers Guide Card */}
          <Link 
            to="/reviews/guides/top-mirrorless-cameras"
            className="block bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="grid md:grid-cols-2 gap-6 p-8">
              <div className="aspect-[16/9] overflow-hidden bg-gray-100 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1617699979583-2f228a14071b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTb255JTIwQTElMjBtaXJyb3JsZXNzJTIwY2FtZXJhJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2OTk4MzM5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Top Mirrorless Cameras"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4 group-hover:text-violet-600 transition-colors" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                  Top Ten Mirrorless Cameras Right Now
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Comprehensive guide to the best mirrorless cameras in 2025/26, featuring detailed specifications, pricing in USD/GBP/EUR, expert reviews, and recommendations for every photography style.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 bg-gradient-to-br from-violet-50 to-purple-50 rounded-full border border-violet-200 text-sm text-gray-700">Sony A1 II</span>
                  <span className="px-4 py-2 bg-gradient-to-br from-violet-50 to-purple-50 rounded-full border border-violet-200 text-sm text-gray-700">Canon R5 Mark II</span>
                  <span className="px-4 py-2 bg-gradient-to-br from-violet-50 to-purple-50 rounded-full border border-violet-200 text-sm text-gray-700">Nikon Z9</span>
                  <span className="px-4 py-2 bg-gradient-to-br from-violet-50 to-purple-50 rounded-full border border-violet-200 text-sm text-gray-700">Fujifilm X-T5</span>
                  <span className="px-4 py-2 bg-gradient-to-br from-violet-50 to-purple-50 rounded-full border border-violet-200 text-sm text-gray-700">+ 6 more</span>
                </div>
                <span className="inline-flex items-center gap-2 text-violet-600 font-medium group-hover:gap-3 transition-all">
                  Read Full Guide
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Individual Reviews Section */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-20">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Individual Camera Reviews
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              Detailed reviews of the latest cameras with real-world testing, sample images, and honest recommendations.
            </p>
          </div>

          <div className="bg-white rounded-xl p-12 text-center border border-gray-200 shadow-sm">
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Coming Soon
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Comprehensive reviews of popular cameras from Canon, Nikon, Sony, Fujifilm, and other leading manufacturers.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-700">
                <span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200">Sony A7 Series</span>
                <span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200">Canon EOS R</span>
                <span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200">Nikon Z Series</span>
                <span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200">Fujifilm X Series</span>
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
              While we prepare our camera reviews, explore our comprehensive courses and resources to improve your photography skills.
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