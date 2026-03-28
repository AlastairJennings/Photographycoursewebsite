import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { MultiSchema } from './Schema';
import { generateWebSiteSchema, generateOrganizationSchema, generateBreadcrumbSchema } from '../utils/schema-generator';
import { Helmet } from 'react-helmet-async';
import { useMemo } from 'react';

export function Hero() {
  // Memoize structured data generation to prevent expensive re-renders
  const schemas = useMemo(() => {
    const websiteSchema = generateWebSiteSchema();
    const organizationSchema = generateOrganizationSchema();
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
    ]);
    return [websiteSchema, organizationSchema, breadcrumbSchema];
  }, []); // Empty deps - only generate once

  return (
    <section className="bg-white" aria-label="Hero">
      {/* Preload critical images and optimize performance */}
      <Helmet>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="-O6xKczoh9-C7_n1Q58977Rf5fOSexqiPj5NJ8W7MBc" />
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* Preload hero images */}
        <link rel="preload" as="image" href="https://images.unsplash.com/photo-1599588683983-dc7dd610d430?w=600&h=600&fit=crop" />
        <link rel="preload" as="image" href="https://images.unsplash.com/photo-1697238724718-29cc8b1a2340?w=600&h=600&fit=crop" />
      </Helmet>

      {/* Structured Data */}
      <MultiSchema schemas={schemas} />
      
      {/* Main Hero Section */}
      <div className="relative overflow-hidden" style={{ minHeight: '200px' }}>
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-pink-50 to-amber-50 opacity-60"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-1.5 lg:py-2">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-center">
            {/* Left Content */}
            <div className="max-w-lg">
              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl leading-[0.9] tracking-tight text-gray-900 mb-3" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 bg-clip-text text-transparent">
                  Master
                </span>
                <br />
                <span className="whitespace-nowrap">the Art of Photography</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed max-w-md">
                An online training program featuring video tutorials, comprehensive resources, and expert guidance to transform your photography skills.
              </p>
              <Link 
                to="/courses"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-shadow text-sm"
              >
                <span className="tracking-wide">Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Image Grid */}
            <div className="relative h-full max-w-xs ml-auto">
              <div className="grid grid-cols-2 gap-2 h-full">
                {/* Row 1 */}
                <div className="overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1599588683983-dc7dd610d430?w=600&h=600&fit=crop"
                    alt="Portrait Lighting"
                    width="600"
                    height="600"
                    loading="eager"
                    decoding="sync"
                    fetchpriority="high"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                
                <div className="overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1697238724718-29cc8b1a2340?w=600&h=600&fit=crop"
                    alt="Vintage Camera"
                    width="600"
                    height="600"
                    loading="eager"
                    decoding="sync"
                    fetchpriority="high"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Row 2 */}
                <div className="overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1598087216773-d02ad98034f1?w=600&h=600&fit=crop"
                    alt="Street Photography"
                    width="600"
                    height="600"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                <div className="overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1624680799574-8ff5b3f7c20e?w=600&h=600&fit=crop"
                    alt="Black & White"
                    width="600"
                    height="600"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Courses Section */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 pt-2 lg:pt-3 pb-16 lg:pb-20">
          <div className="mb-5">
            <h2 className="text-3xl sm:text-4xl tracking-tight bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 bg-clip-text text-transparent" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Latest Courses
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Latest Courses List - Takes 2/3 width */}
            <div className="lg:col-span-2 space-y-1 border-t border-gray-200">
              <Link
                to="/courses/introduction-to-photography"
                className="block bg-white border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="py-6 px-6 flex items-start gap-6">
                  <div className="w-32 h-32 flex-shrink-0 overflow-hidden bg-gray-100 rounded-lg">
                    <img
                      src="https://images.unsplash.com/photo-1719483391454-8b4ebd746007?w=400&h=400&fit=crop"
                      alt="Introduction to Photography"
                      width="128"
                      height="128"
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl sm:text-3xl mb-2 tracking-tight text-gray-900 leading-tight" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                      Introduction to Photography
                    </h3>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                      Begin your creative journey with our comprehensive introduction to photography course. Master fundamental concepts including the exposure triangle, composition techniques, and creative camera controls. This course covers essential skills every photographer needs, from understanding aperture and shutter speed to mastering ISO and white balance for perfect exposures.
                    </p>
                    <div className="flex items-center gap-4 text-xs uppercase tracking-wide">
                      <span className="text-violet-600 font-medium">10-Week Course</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">Beginner to Intermediate</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                to="/courses/film-darkroom"
                className="block bg-white border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="py-6 px-6 flex items-start gap-6">
                  <div className="w-32 h-32 flex-shrink-0 overflow-hidden bg-gray-100 rounded-lg">
                    <img
                      src="https://images.unsplash.com/photo-1697238724718-29cc8b1a2340?w=400&h=400&fit=crop"
                      alt="Photography Film & Darkroom Course"
                      width="128"
                      height="128"
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl sm:text-3xl mb-2 tracking-tight text-gray-900 leading-tight" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                      Photography Film & Darkroom Course
                    </h3>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                      Discover the timeless art of traditional film photography and darkroom processing. Learn essential techniques for loading film, metering exposure, developing negatives, and creating stunning prints. This hands-on course explores classic analog photography methods, from choosing the right film stock to mastering chemical processes for beautiful black and white photographs.
                    </p>
                    <div className="flex items-center gap-4 text-xs uppercase tracking-wide">
                      <span className="text-fuchsia-600 font-medium">Multi-Week Course</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">Traditional Film Photography</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Right: What We're Listening to This Week - Takes 1/3 width */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-violet-50 via-pink-50 to-amber-50 rounded-lg p-6 border border-gray-200 shadow-sm sticky top-4">
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    What We're Listening to This Week
                  </h3>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <iframe 
                    data-testid="embed-iframe" 
                    style={{ borderRadius: '12px' }} 
                    src="https://open.spotify.com/embed/prerelease/5euAAoqMnDgL2j53Pmf6mn?utm_source=generator" 
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    title="Spotify Playlist - What We're Listening to This Week"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Reviews Section */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 pt-8 lg:pt-10 pb-16 lg:pb-20">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl tracking-tight bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 bg-clip-text text-transparent" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Product Reviews
            </h2>
          </div>

          <div className="bg-white rounded-xl p-12 shadow-sm">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-6 text-center" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Coming Soon
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-center">
                We're working on comprehensive product reviews to help you make informed decisions about your photography equipment.
              </p>
              
              {/* Review Categories */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link
                  to="/reviews/cameras"
                  className="group bg-gradient-to-br from-violet-50 to-purple-50 hover:from-violet-100 hover:to-purple-100 rounded-lg overflow-hidden transition-all border border-violet-200 hover:border-violet-300 hover:shadow-md"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1678599694575-c3dd36308d25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYW1lcmElMjBib2R5JTIwbWlycm9ybGVzcyUyMERTTFJ8ZW58MXx8fHwxNzY5OTgxODIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Professional Camera"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-medium text-gray-900 group-hover:text-violet-600 transition-colors">Camera Reviews</h4>
                  </div>
                </Link>

                <Link
                  to="/reviews/lenses"
                  className="group bg-gradient-to-br from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 rounded-lg overflow-hidden transition-all border border-blue-200 hover:border-blue-300 hover:shadow-md"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1767116188060-adea064ebb8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBsZW5zJTIwcGhvdG9ncmFwaHklMjBnbGFzcyUyMG9wdGljc3xlbnwxfHx8fDE3Njk5ODE4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Camera Lens"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Lens Reviews</h4>
                  </div>
                </Link>

                <Link
                  to="/reviews/tripods"
                  className="group bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-lg overflow-hidden transition-all border border-green-200 hover:border-green-300 hover:shadow-md"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1762592818521-1dbbea6139a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmlwb2QlMjBzdGFuZCUyMHBob3RvZ3JhcGh5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2OTk4MTgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Photography Tripod"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">Tripod Reviews</h4>
                  </div>
                </Link>

                <Link
                  to="/reviews/filters"
                  className="group bg-gradient-to-br from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 rounded-lg overflow-hidden transition-all border border-orange-200 hover:border-orange-300 hover:shadow-md"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1568475004576-f05a3903642f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxORCUyMGZpbHRlciUyMHBvbGFyaXplciUyMGNhbWVyYSUyMGZpbHRlciUyMGdsYXNzfGVufDF8fHx8MTc2OTk4MTgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Camera Filters"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Filter Reviews</h4>
                  </div>
                </Link>

                <Link
                  to="/reviews/flash"
                  className="group bg-gradient-to-br from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100 rounded-lg overflow-hidden transition-all border border-pink-200 hover:border-pink-300 hover:shadow-md"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1713128362475-ab1174db8779?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBmbGFzaCUyMHNwZWVkbGlnaHQlMjBwaG90b2dyYXBoeSUyMGxpZ2h0aW5nfGVufDF8fHx8MTc2OTk4MTgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Camera Flash"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors">Flash Reviews</h4>
                  </div>
                </Link>

                <Link
                  to="/reviews/constant-light"
                  className="group bg-gradient-to-br from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-lg overflow-hidden transition-all border border-indigo-200 hover:border-indigo-300 hover:shadow-md"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1763365894901-675a14ca8888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBwYW5lbCUyMGNvbnRpbnVvdXMlMjBsaWdodCUyMHN0dWRpbyUyMGxpZ2h0aW5nfGVufDF8fHx8MTc2OTk4MTgyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Continuous Lighting"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">Constant Light Reviews</h4>
                  </div>
                </Link>

                <Link
                  to="/reviews/bags"
                  className="group bg-gradient-to-br from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 rounded-lg overflow-hidden transition-all border border-teal-200 hover:border-teal-300 hover:shadow-md"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544141161-30fef2b4ba6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBiYWclMjBwaG90b2dyYXBoeSUyMGJhY2twYWNrJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2OTk4MTgyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Camera Bag"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-medium text-gray-900 group-hover:text-teal-600 transition-colors">Bag Reviews</h4>
                  </div>
                </Link>

                <Link
                  to="/reviews/accessories"
                  className="group bg-gradient-to-br from-gray-50 to-slate-50 hover:from-gray-100 hover:to-slate-100 rounded-lg overflow-hidden transition-all border border-gray-200 hover:border-gray-300 hover:shadow-md"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1585301673435-e647dbf6f961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBhY2Nlc3NvcmllcyUyMGJhdHRlcmllcyUyMGNhcmRzJTIwcmVtb3RlfGVufDF8fHx8MTc2OTk4MTgyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Camera Accessories"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">Accessory Reviews</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-gray-200 bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-20 lg:py-28">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl leading-tight tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Begin your photography journey today
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/courses"
                className="inline-flex items-center justify-center bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-shadow"
              >
                View All Courses
              </Link>
              <Link 
                to="/resources"
                className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 px-10 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
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