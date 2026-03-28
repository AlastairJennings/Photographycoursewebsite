import { ArrowLeft, Camera, Maximize2, Minimize2, Aperture, Target, Mountain, User, Building, Flower, Eye, Zap, CheckCircle2, Info } from 'lucide-react';
import { Link } from 'react-router';
import { SEO } from './SEO';
import { getSEOConfig } from '../config/seo-config';

export function LensGuide() {
  const seoConfig = getSEOConfig('lens-guide');
  
  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoConfig} />
      
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-6">
          <Link 
            to="/resources" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-wide">Back to Resources</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-20 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-indigo-200">
              <Camera className="w-4 h-4 text-indigo-600" />
              <span className="text-xs uppercase tracking-wide text-indigo-600 font-medium">Lens Selection Guide</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Choosing the Right Lens
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-3xl">
              Your lens choice has more impact on your images than your camera body. Learn to select the perfect lens for every shooting situation and build a versatile lens kit.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
        
        {/* Introduction */}
        <div className="max-w-4xl mb-20">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Lenses are the eyes of your camera. While camera bodies come and go, high-quality lenses are lifetime investments that significantly impact image sharpness, perspective, depth of field, and creative possibilities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Understanding focal lengths, apertures, and lens characteristics helps you choose the right glass for your photography style and grow your collection strategically.
          </p>
        </div>

        {/* Understanding Focal Length */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Understanding Focal Length
          </h2>
          
          <div className="max-w-4xl mb-10">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Focal length, measured in millimeters (mm), determines your lens's field of view and magnification. It's the most important specification when choosing a lens.
            </p>
            
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-900 font-medium mb-2">Crop Sensor vs Full Frame:</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    On crop sensor cameras (APS-C), multiply the focal length by 1.5x (Nikon/Sony) or 1.6x (Canon) to get the full-frame equivalent field of view. A 35mm lens on crop sensor = ~50mm field of view.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Focal Length Categories */}
          <div className="grid gap-6">
            {/* Ultra Wide-Angle */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Maximize2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                      Ultra Wide-Angle (14-24mm)
                    </h3>
                    <span className="text-sm text-gray-500">Full Frame</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Extremely wide field of view with dramatic perspective distortion. Creates a sense of space and exaggerates foreground-to-background distance.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Best For:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Landscape photography</li>
                        <li>• Architecture interiors</li>
                        <li>• Astrophotography</li>
                        <li>• Environmental portraits</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Considerations:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Significant edge distortion</li>
                        <li>• Difficult to use for portraits</li>
                        <li>• Often can't use standard filters</li>
                        <li>• Requires careful composition</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wide-Angle */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Mountain className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                      Wide-Angle (24-35mm)
                    </h3>
                    <span className="text-sm text-gray-500">Full Frame</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Broad field of view without extreme distortion. Versatile focal length range that's wider than human vision but still natural-looking.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Best For:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Landscape photography</li>
                        <li>• Street photography</li>
                        <li>• Environmental portraits</li>
                        <li>• Real estate photography</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Popular Choices:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 24mm f/1.4 (landscape)</li>
                        <li>• 28mm f/1.8 (street)</li>
                        <li>• 35mm f/1.4 (versatile prime)</li>
                        <li>• 24-70mm f/2.8 (zoom)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Standard/Normal */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                      Standard (40-58mm)
                    </h3>
                    <span className="text-sm text-gray-500">Full Frame</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Approximates human vision. Natural perspective with no noticeable distortion. Often called "nifty fifty" referring to the classic 50mm focal length.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Best For:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Street photography</li>
                        <li>• Documentary work</li>
                        <li>• General purpose shooting</li>
                        <li>• Learning photography</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Why It's Essential:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Most affordable quality lens</li>
                        <li>• Fast apertures (f/1.8, f/1.4)</li>
                        <li>• Lightweight and compact</li>
                        <li>• Excellent image quality</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Portrait */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                      Portrait (85-135mm)
                    </h3>
                    <span className="text-sm text-gray-500">Full Frame</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Flattering perspective for people photography with excellent background separation. Provides working distance for comfortable interaction.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Best For:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Portrait photography</li>
                        <li>• Headshots</li>
                        <li>• Wedding photography</li>
                        <li>• Product photography</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Popular Choices:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 85mm f/1.8 (classic portrait)</li>
                        <li>• 105mm f/2.8 Macro</li>
                        <li>• 70-200mm f/2.8 (zoom)</li>
                        <li>• 135mm f/1.8 (premium)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Telephoto */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                  <Minimize2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                      Telephoto (135-300mm+)
                    </h3>
                    <span className="text-sm text-gray-500">Full Frame</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Magnifies distant subjects and compresses perspective. Essential for wildlife, sports, and distant subjects.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Best For:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Wildlife photography</li>
                        <li>• Sports photography</li>
                        <li>• Bird photography</li>
                        <li>• Distant landscapes</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Considerations:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Large and heavy</li>
                        <li>• Expensive at fast apertures</li>
                        <li>• Often requires tripod/monopod</li>
                        <li>• Image stabilization crucial</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prime vs Zoom */}
        <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 rounded-2xl p-8 sm:p-12 mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Prime vs Zoom Lenses
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Prime Lenses */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                  Prime Lenses
                </h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Fixed focal length lenses. What they lack in flexibility, they make up for in image quality, size, and aperture.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="font-medium text-gray-900 mb-2">Advantages:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Sharper images with better optical quality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Faster maximum apertures (f/1.4, f/1.8)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Smaller, lighter, more affordable</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Better low-light performance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Forces creative composition</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-gray-900 mb-2">Disadvantages:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 text-sm">•</span>
                      <span className="text-gray-700 text-sm">No zoom flexibility—must move physically</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 text-sm">•</span>
                      <span className="text-gray-700 text-sm">Need multiple lenses for versatility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 text-sm">•</span>
                      <span className="text-gray-700 text-sm">Lens changing increases dust risk</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-900 mb-1">Best Starter Primes:</p>
                <p className="text-sm text-gray-700">35mm f/1.8 or 50mm f/1.8 — affordable, excellent quality, great learning tools</p>
              </div>
            </div>

            {/* Zoom Lenses */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Maximize2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                  Zoom Lenses
                </h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Variable focal length lenses. Trade some optical quality for unmatched versatility and convenience.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="font-medium text-gray-900 mb-2">Advantages:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Multiple focal lengths in one lens</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Quick framing without moving</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Less lens changing needed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Ideal for travel and events</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Good for unpredictable situations</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-gray-900 mb-2">Disadvantages:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 text-sm">•</span>
                      <span className="text-gray-700 text-sm">Slower maximum apertures (f/4, f/5.6)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 text-sm">•</span>
                      <span className="text-gray-700 text-sm">Larger and heavier than primes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 text-sm">•</span>
                      <span className="text-gray-700 text-sm">More expensive at pro quality levels</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-900 mb-1">Professional Standard:</p>
                <p className="text-sm text-gray-700">24-70mm f/2.8 — the workhorse zoom for professionals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Understanding Aperture */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Understanding Maximum Aperture
          </h2>
          
          <div className="max-w-4xl mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A lens's maximum aperture (smallest f-number) is one of its most important specifications. It affects depth of field, low-light performance, autofocus speed, and price.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4">
                <Aperture className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Fast Aperture</h3>
              <p className="text-sm text-gray-600 mb-3">f/1.2, f/1.4, f/1.8, f/2, f/2.8</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Excellent low-light performance</li>
                <li>• Beautiful background blur (bokeh)</li>
                <li>• Faster, more accurate autofocus</li>
                <li>• Higher price point</li>
                <li>• Larger and heavier</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <Aperture className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Moderate Aperture</h3>
              <p className="text-sm text-gray-600 mb-3">f/4</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Good low-light capability</li>
                <li>• Reasonable depth of field control</li>
                <li>• Smaller and lighter than f/2.8</li>
                <li>• More affordable</li>
                <li>• Great for daytime shooting</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center mb-4">
                <Aperture className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Slow Aperture</h3>
              <p className="text-sm text-gray-600 mb-3">f/5.6, f/6.3</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Compact and lightweight</li>
                <li>• Most affordable option</li>
                <li>• Limited low-light use</li>
                <li>• Best for bright conditions</li>
                <li>• Often kit lenses</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Specialty Lenses */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Specialty Lenses
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Macro */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Flower className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Macro Lenses</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Designed for extreme close-up photography at 1:1 magnification or greater. Razor-thin depth of field reveals tiny details.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-900 mb-1">Common Focal Lengths:</p>
                <p className="text-sm text-gray-700">60mm, 90mm, 100mm, 105mm</p>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Best for:</strong> Insects, flowers, product details, jewelry, food photography
              </p>
            </div>

            {/* Fisheye */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Fisheye Lenses</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Ultra-wide lenses with extreme barrel distortion creating a spherical, 180° field of view. Creative, artistic effect.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-900 mb-1">Common Options:</p>
                <p className="text-sm text-gray-700">8mm, 10mm, 15mm fisheye</p>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Best for:</strong> Creative effects, skateboarding, extreme sports, artistic landscapes
              </p>
            </div>

            {/* Tilt-Shift */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Tilt-Shift Lenses</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Allows shifting and tilting the lens element to control perspective and plane of focus. Used to correct converging lines in architecture.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-900 mb-1">Common Focal Lengths:</p>
                <p className="text-sm text-gray-700">17mm, 24mm, 45mm, 90mm TS</p>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Best for:</strong> Architecture, real estate, product photography, miniature effect
              </p>
            </div>

            {/* Super Telephoto */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Super Telephoto</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Extreme magnification for distant subjects. Large, expensive, and specialized. Often requires tripod support.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-900 mb-1">Common Focal Lengths:</p>
                <p className="text-sm text-gray-700">400mm, 500mm, 600mm, 800mm</p>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Best for:</strong> Wildlife, birds, sports from distance, aviation photography
              </p>
            </div>
          </div>
        </div>

        {/* Lenses by Photography Genre */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-white mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Recommended Lenses by Genre
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Portrait Photography */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-medium mb-4">Portrait Photography</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">Essential:</strong> 85mm f/1.8 or f/1.4
                  <p className="text-sm mt-1">Classic portrait focal length with flattering perspective</p>
                </li>
                <li>
                  <strong className="text-white">Versatile:</strong> 70-200mm f/2.8
                  <p className="text-sm mt-1">Full-length to headshots, excellent compression</p>
                </li>
                <li>
                  <strong className="text-white">Environmental:</strong> 35mm f/1.4
                  <p className="text-sm mt-1">Include background context and storytelling</p>
                </li>
              </ul>
            </div>

            {/* Landscape Photography */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-medium mb-4">Landscape Photography</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">Ultra-Wide:</strong> 14-24mm f/2.8
                  <p className="text-sm mt-1">Dramatic wide vistas, foreground emphasis</p>
                </li>
                <li>
                  <strong className="text-white">Wide-Angle:</strong> 24-70mm f/4
                  <p className="text-sm mt-1">Versatile range for various compositions</p>
                </li>
                <li>
                  <strong className="text-white">Telephoto:</strong> 70-200mm f/4
                  <p className="text-sm mt-1">Compressed perspectives, distant details</p>
                </li>
              </ul>
            </div>

            {/* Street Photography */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-medium mb-4">Street Photography</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">Classic:</strong> 35mm f/1.4 or f/2
                  <p className="text-sm mt-1">Perfect street focal length, fast and discrete</p>
                </li>
                <li>
                  <strong className="text-white">Traditional:</strong> 50mm f/1.8
                  <p className="text-sm mt-1">Lightweight, natural perspective, affordable</p>
                </li>
                <li>
                  <strong className="text-white">Compressed:</strong> 85mm f/1.8
                  <p className="text-sm mt-1">Isolate subjects from busy backgrounds</p>
                </li>
              </ul>
            </div>

            {/* Wedding Photography */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-medium mb-4">Wedding Photography</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">Workhorse:</strong> 24-70mm f/2.8
                  <p className="text-sm mt-1">Covers most wedding scenarios, fast aperture</p>
                </li>
                <li>
                  <strong className="text-white">Portrait:</strong> 85mm f/1.4
                  <p className="text-sm mt-1">Flattering for bride/groom portraits</p>
                </li>
                <li>
                  <strong className="text-white">Ceremony:</strong> 70-200mm f/2.8
                  <p className="text-sm mt-1">Shoot from distance without disrupting</p>
                </li>
              </ul>
            </div>

            {/* Wildlife Photography */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-medium mb-4">Wildlife Photography</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">Versatile:</strong> 100-400mm f/4.5-5.6
                  <p className="text-sm mt-1">Good range, image stabilization, handholdable</p>
                </li>
                <li>
                  <strong className="text-white">Professional:</strong> 200-600mm f/5.6-6.3
                  <p className="text-sm mt-1">Extreme reach for birds and distant animals</p>
                </li>
                <li>
                  <strong className="text-white">Prime:</strong> 400mm f/2.8 or 600mm f/4
                  <p className="text-sm mt-1">Ultimate quality but expensive and heavy</p>
                </li>
              </ul>
            </div>

            {/* Sports Photography */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-medium mb-4">Sports Photography</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">Standard:</strong> 70-200mm f/2.8
                  <p className="text-sm mt-1">Fast action, fast focus, excellent quality</p>
                </li>
                <li>
                  <strong className="text-white">Distance:</strong> 300mm f/2.8 or 400mm f/2.8
                  <p className="text-sm mt-1">Sideline shooting, stadium sports</p>
                </li>
                <li>
                  <strong className="text-white">Wide:</strong> 24-70mm f/2.8
                  <p className="text-sm mt-1">Close action, environmental shots</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Building Your Lens Kit */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Building Your Lens Kit
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Kit */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="inline-flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full mb-4">
                <span className="text-xs font-semibold text-green-800 uppercase tracking-wide">Starter Kit</span>
              </div>
              <h3 className="text-2xl tracking-tight text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Budget: $500-800
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Essential lenses to start your journey and learn fundamentals.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-1">1. Nifty Fifty</p>
                  <p className="text-sm text-gray-600 mb-2">50mm f/1.8 (~$200)</p>
                  <p className="text-xs text-gray-500">Learn to see, affordable, excellent quality</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-1">2. Kit Zoom</p>
                  <p className="text-sm text-gray-600 mb-2">18-55mm or 24-70mm (~$300-600)</p>
                  <p className="text-xs text-gray-500">Versatility for various situations</p>
                </div>
              </div>
            </div>

            {/* Enthusiast Kit */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
                <span className="text-xs font-semibold text-blue-800 uppercase tracking-wide">Enthusiast Kit</span>
              </div>
              <h3 className="text-2xl tracking-tight text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Budget: $2,000-3,500
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                High-quality lenses covering most photography needs.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-1">1. Standard Zoom</p>
                  <p className="text-sm text-gray-600 mb-2">24-70mm f/2.8 (~$1,500-2,300)</p>
                  <p className="text-xs text-gray-500">Professional workhorse lens</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-1">2. Prime Lens</p>
                  <p className="text-sm text-gray-600 mb-2">35mm f/1.4 or 85mm f/1.8 (~$400-800)</p>
                  <p className="text-xs text-gray-500">Low light and background separation</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-1">3. Telephoto Zoom</p>
                  <p className="text-sm text-gray-600 mb-2">70-200mm f/4 (~$600-1,300)</p>
                  <p className="text-xs text-gray-500">Portraits and distant subjects</p>
                </div>
              </div>
            </div>

            {/* Professional Kit */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="inline-flex items-center gap-2 bg-purple-100 px-3 py-1 rounded-full mb-4">
                <span className="text-xs font-semibold text-purple-800 uppercase tracking-wide">Professional Kit</span>
              </div>
              <h3 className="text-2xl tracking-tight text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Budget: $8,000+
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Complete professional setup with specialty lenses.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-1">1. Wide Zoom</p>
                  <p className="text-sm text-gray-600 mb-2">14-24mm f/2.8 (~$1,800-2,000)</p>
                  <p className="text-xs text-gray-500">Landscape and architecture</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-1">2. Standard Zoom</p>
                  <p className="text-sm text-gray-600 mb-2">24-70mm f/2.8 (~$1,500-2,300)</p>
                  <p className="text-xs text-gray-500">General purpose workhorse</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-1">3. Telephoto Zoom</p>
                  <p className="text-sm text-gray-600 mb-2">70-200mm f/2.8 (~$2,000-2,500)</p>
                  <p className="text-xs text-gray-500">Portraits, events, sports</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-1">4. Specialty Lenses</p>
                  <p className="text-sm text-gray-600 mb-2">85mm f/1.4, 105mm Macro, etc.</p>
                  <p className="text-xs text-gray-500">Genre-specific excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Lens Specifications */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Important Specifications to Understand
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Image Stabilization (IS/VR/VC)</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Compensates for camera shake, allowing slower shutter speeds handheld. Crucial for telephoto lenses and low light.
              </p>
              <div className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Benefit:</strong> Gain 3-5 stops of stability, shoot handheld in darker conditions
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Autofocus Motor</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Different motor types affect focus speed and noise. Ultrasonic (USM/HSM/SSM) motors are fast and silent.
              </p>
              <div className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Types:</strong> USM, STM, HSM, SSM, Linear Motor, DC Motor
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Minimum Focus Distance</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Closest distance the lens can focus. Important for product photography, food, and close-up work.
              </p>
              <div className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Macro lenses have shortest minimum focus distances
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Filter Thread Size</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Diameter of the front of the lens where filters attach. Common sizes: 52mm, 58mm, 67mm, 77mm, 82mm.
              </p>
              <div className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Tip:</strong> Buy lenses with same filter size to share filters, or use step-up rings
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Lens Elements & Groups</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Number of glass elements and how they're arranged. More elements can mean better correction but also more weight.
              </p>
              <div className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Special elements:</strong> Aspherical, ED (Extra-low Dispersion), fluorite reduce aberrations
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Weather Sealing</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Gaskets and seals protect against dust and moisture. Essential for outdoor and professional work.
              </p>
              <div className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Important:</strong> Both camera body and lens must be weather-sealed for protection
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-8 sm:p-12 text-white mb-20">
          <h2 className="text-3xl sm:text-4xl tracking-tight mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Key Takeaways
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Invest in lenses over camera bodies</p>
                <p className="text-gray-300">High-quality lenses outlast cameras and have greater impact on image quality. Buy the best glass you can afford.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Start with a fast prime lens</p>
                <p className="text-gray-300">A 35mm f/1.8 or 50mm f/1.8 teaches composition, offers excellent image quality, and provides low-light capability at an affordable price.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Match lenses to your photography style</p>
                <p className="text-gray-300">Don't buy lenses because others recommend them. Choose focal lengths that match what you actually shoot.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Zoom versatility vs prime quality</p>
                <p className="text-gray-300">Zoom lenses offer convenience; prime lenses offer superior image quality and faster apertures. Build a kit with both.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Consider used lenses</p>
                <p className="text-gray-300">High-quality used lenses from reputable sellers can save 30-50% while providing the same optical performance as new.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Resources */}
        <div className="pt-20 border-t border-gray-200">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Related Resources
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to="/resources/exposure-triangle"
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                Exposure Triangle
              </h3>
              <p className="text-gray-600 text-sm">
                Understand how aperture works with shutter speed and ISO
              </p>
            </Link>

            <Link
              to="/resources/composition-guide"
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                Composition Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Learn to compose images effectively with any lens
              </p>
            </Link>

            <Link
              to="/resources/raw-vs-jpeg"
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                RAW vs JPEG
              </h3>
              <p className="text-gray-600 text-sm">
                Maximize your lens's image quality with proper file format
              </p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
