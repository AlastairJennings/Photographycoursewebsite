import { ArrowLeft, Clock, Filter, Layers, Moon, Camera, Sparkles, BookOpen, CheckCircle2, Info, AlertCircle, Mountain, Waves, Zap } from 'lucide-react';
import { Link } from 'react-router';
import { SEO } from './SEO';
import { getSEOConfig } from '../config/seo-config';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function LongExposure() {
  const seoConfig = getSEOConfig('long-exposure');
  
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
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-20 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/30">
              <Clock className="w-4 h-4 text-white" />
              <span className="text-xs uppercase tracking-wide text-white font-medium">Long Exposure Techniques</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white mb-8 leading-tight" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Long Exposure Techniques
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-3xl">
              Master the art of time. Learn to use ND and graduated ND filters, create silky waterfalls, dreamy seascapes, star trails, and light trails that transform the ordinary into the extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
        
        {/* Introduction */}
        <div className="max-w-4xl mb-20">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Long exposure photography allows you to capture time itself, creating images that reveal motion, blur movement, and transform dynamic scenes into ethereal works of art. By using slow shutter speeds — from fractions of a second to minutes or even hours — you can create effects impossible to see with the naked eye.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This guide covers essential techniques, ND filter systems, graduated ND filters for balanced exposures, and creative applications for landscapes, seascapes, and night photography.
          </p>
        </div>

        {/* Hero Image: Silky Waterfall */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1749852660673-62d8d1545620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25nJTIwZXhwb3N1cmUlMjB3YXRlcmZhbGwlMjBzbW9vdGglMjBzaWxreSUyMHdhdGVyfGVufDF8fHx8MTc2OTk4MDE1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Long exposure waterfall with silky smooth water effect"
            className="w-full h-[600px] object-cover"
          />
          <div className="bg-white p-4 text-sm text-gray-600 text-center">
            Long exposure transforms rushing water into silky, ethereal flows
          </div>
        </div>

        {/* What is Long Exposure */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            What is Long Exposure Photography?
          </h2>

          <div className="max-w-4xl mb-10">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Long exposure photography uses shutter speeds longer than needed to freeze action, allowing moving elements to blur whilst static elements remain sharp. This creates a sense of motion, time passing, and dreamlike atmosphere.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Smooths Water</h3>
              <p className="text-gray-700 text-sm">
                Transforms choppy waves into silky, misty surfaces. Waterfalls become soft, flowing curtains of white.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Creates Light Trails</h3>
              <p className="text-gray-700 text-sm">
                Car headlights and taillights become streaks of colour. Star trails circle around the celestial pole.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center mb-4">
                <Moon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Removes People</h3>
              <p className="text-gray-700 text-sm">
                Moving crowds disappear entirely, leaving architectural scenes pristine and empty during busy tourist hours.
              </p>
            </div>
          </div>
        </div>

        {/* ND Filters - Major Section */}
        <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 rounded-2xl p-8 sm:p-12 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <Filter className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Neutral Density (ND) Filters
            </h2>
          </div>

          <div className="max-w-4xl mb-10">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Neutral Density (ND) filters are essential tools for long exposure photography. They reduce the amount of light entering your lens without affecting colour, allowing you to use slower shutter speeds even in bright conditions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Think of ND filters as "sunglasses for your camera" — they darken the scene, enabling creative control over motion blur and depth of field in daylight.
            </p>
          </div>

          {/* Understanding ND Filter Strength */}
          <div className="bg-white rounded-xl p-8 mb-10">
            <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Understanding ND Filter Strength
            </h3>
            
            <p className="text-gray-700 mb-6">
              ND filters are measured in "stops" of light reduction. Each stop halves the light entering the camera, allowing you to double your shutter speed.
            </p>

            {/* Filter Strength Chart */}
            <div className="space-y-3 mb-8">
              {/* ND2 */}
              <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                <div className="w-20 h-16 flex-shrink-0 bg-gray-200 rounded border border-gray-300 flex items-center justify-center text-xs font-bold">
                  ND2
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">ND2 / ND 0.3 — 1 Stop Reduction</p>
                  <p className="text-sm text-gray-700 mb-2">Reduces light by 50%. Minimal effect, rarely used for long exposure work.</p>
                  <p className="text-xs text-gray-600">Use: Slight shutter speed extension in very bright conditions</p>
                </div>
              </div>

              {/* ND4 */}
              <div className="flex items-start gap-4 bg-gray-100 rounded-lg p-4">
                <div className="w-20 h-16 flex-shrink-0 bg-gray-300 rounded border border-gray-400 flex items-center justify-center text-xs font-bold">
                  ND4
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">ND4 / ND 0.6 — 2 Stop Reduction</p>
                  <p className="text-sm text-gray-700 mb-2">Reduces light by 75%. Good for slightly longer exposures in moderate light.</p>
                  <p className="text-xs text-gray-600">Use: Extending shutter speed for slight motion blur in waterfalls</p>
                </div>
              </div>

              {/* ND8 */}
              <div className="flex items-start gap-4 bg-gray-200 rounded-lg p-4">
                <div className="w-20 h-16 flex-shrink-0 bg-gray-400 rounded border border-gray-500 flex items-center justify-center text-xs font-bold text-white">
                  ND8
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">ND8 / ND 0.9 — 3 Stop Reduction</p>
                  <p className="text-sm text-gray-700 mb-2">Reduces light by 87.5%. Popular for daytime long exposure work.</p>
                  <p className="text-xs text-gray-600">Use: Creating smooth water effects in bright daylight, 1-2 second exposures</p>
                </div>
              </div>

              {/* ND64 */}
              <div className="flex items-start gap-4 bg-gray-300 rounded-lg p-4">
                <div className="w-20 h-16 flex-shrink-0 bg-gray-600 rounded border border-gray-700 flex items-center justify-center text-xs font-bold text-white">
                  ND64
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">ND64 / ND 1.8 — 6 Stop Reduction</p>
                  <p className="text-sm text-gray-700 mb-2">Reduces light by 98.4%. Excellent for dramatic long exposures in daylight.</p>
                  <p className="text-xs text-gray-600">Use: 15-30 second exposures in bright light, silky water, cloud movement</p>
                </div>
              </div>

              {/* ND1000 */}
              <div className="flex items-start gap-4 bg-gray-700 text-white rounded-lg p-4">
                <div className="w-20 h-16 flex-shrink-0 bg-gray-900 rounded border border-black flex items-center justify-center text-xs font-bold">
                  ND1000
                </div>
                <div className="flex-1">
                  <p className="font-bold mb-1">ND1000 / ND 3.0 — 10 Stop Reduction</p>
                  <p className="text-sm text-gray-300 mb-2">Reduces light by 99.9%. The "Big Stopper" for extreme long exposures.</p>
                  <p className="text-xs text-gray-400">Use: 1-4 minute exposures in daylight, completely smooth water, empty cities</p>
                </div>
              </div>

              {/* ND100000 */}
              <div className="flex items-start gap-4 bg-black text-white rounded-lg p-4 border-4 border-purple-600">
                <div className="w-20 h-16 flex-shrink-0 bg-black rounded border-2 border-purple-500 flex items-center justify-center text-xs font-bold">
                  ND100000
                </div>
                <div className="flex-1">
                  <p className="font-bold mb-1">ND100000 / ND 5.0 — 16+ Stop Reduction</p>
                  <p className="text-sm text-gray-300 mb-2">Extreme light reduction. Used for very special effects and solar photography.</p>
                  <p className="text-xs text-gray-400">Use: Multi-minute daytime exposures, photographing the sun safely (with proper solar filters)</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 mb-2">Popular Choices for Long Exposure Photography:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>ND64 (6-stop):</strong> Versatile for most long exposure needs, 15-60 second exposures</li>
                    <li>• <strong>ND1000 (10-stop):</strong> Extreme effects, 1-4 minute exposures in bright daylight</li>
                    <li>• <strong>Variable ND:</strong> Adjustable strength (typically 2-8 stops), convenient but may introduce colour casts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Types of ND Filters */}
          <div className="bg-white rounded-xl p-8 mb-10">
            <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Types of ND Filters
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-600 pl-6 bg-blue-50 rounded-r-lg p-6">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Screw-On ND Filters</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Circular filters that screw directly onto your lens filter thread. Quick and convenient for single-lens use.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm"><strong className="text-green-700">Pros:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Quick to attach/remove</li>
                    <li>• Compact and lightweight</li>
                    <li>• No light leaks</li>
                    <li>• Affordable</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-sm"><strong className="text-red-700">Cons:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Need different sizes for different lenses</li>
                    <li>• Can't combine with other filters easily</li>
                    <li>• Fixed strength per filter</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-purple-600 pl-6 bg-purple-50 rounded-r-lg p-6">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Square Filter Systems</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Square/rectangular filters that slot into a holder attached to your lens. Professional standard for landscape photography.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm"><strong className="text-green-700">Pros:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• One set fits multiple lenses (with adapter rings)</li>
                    <li>• Can stack multiple filters</li>
                    <li>• Can combine ND with graduated ND</li>
                    <li>• Can adjust position (important for grad filters)</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-sm"><strong className="text-red-700">Cons:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• More expensive</li>
                    <li>• Bulkier to carry</li>
                    <li>• Potential light leaks if not sealed properly</li>
                    <li>• Slower to set up</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-6 bg-green-50 rounded-r-lg p-6">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Variable ND Filters</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Two polarising filters that rotate to adjust density. Convenient but can introduce image quality issues.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm"><strong className="text-green-700">Pros:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Adjustable strength without changing filters</li>
                    <li>• Great for video work</li>
                    <li>• One filter covers multiple situations</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-sm"><strong className="text-red-700">Cons:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Can create colour casts</li>
                    <li>• "X" pattern at strongest settings</li>
                    <li>• Generally lower optical quality</li>
                    <li>• Limited range (typically 2-8 stops)</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-orange-600 pl-6 bg-orange-50 rounded-r-lg p-6">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Recommended: Square System</h4>
                <p className="text-gray-700 text-sm mb-4">
                  For serious long exposure work, invest in a quality square filter system (Lee, NiSi, Formatt-Hitech).
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Typical Kit:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Filter holder + adapter rings</li>
                    <li>• ND64 (6-stop) filter</li>
                    <li>• ND1000 (10-stop) filter</li>
                    <li>• 3-stop hard graduated ND</li>
                    <li>• 3-stop soft graduated ND</li>
                    <li>• Polarising filter (optional)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Calculating Exposure with ND Filters */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Calculating Exposure with ND Filters
            </h3>

            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                When you add an ND filter, you need to compensate by increasing shutter speed to maintain correct exposure.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Step-by-Step Calculation Process:</h4>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">1</span>
                  <p className="text-sm text-gray-700"><strong>Meter without the filter:</strong> Find correct exposure using your camera's meter (e.g., 1/250s at f/11, ISO 100)</p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">2</span>
                  <p className="text-sm text-gray-700"><strong>Add the filter:</strong> Attach your ND filter to the lens</p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">3</span>
                  <p className="text-sm text-gray-700"><strong>Calculate new shutter speed:</strong> For each stop of ND, double the shutter speed</p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">4</span>
                  <p className="text-sm text-gray-700"><strong>Set to Bulb mode (if needed):</strong> For exposures over 30 seconds, switch to Bulb mode and use a timer</p>
                </li>
              </ol>
            </div>

            {/* Exposure Calculation Table */}
            <div className="bg-gray-900 text-white rounded-lg p-6 mb-6">
              <h4 className="text-lg font-medium mb-4">Example: ND64 (6-stop) Filter Calculation</h4>
              <p className="text-sm text-gray-300 mb-4">Starting exposure: 1/250s → After 6-stop ND filter:</p>
              
              <div className="grid grid-cols-2 gap-2 text-sm font-mono">
                <div className="text-gray-400">Original:</div>
                <div>1/250s</div>
                
                <div className="text-gray-400">+1 stop:</div>
                <div>1/125s</div>
                
                <div className="text-gray-400">+2 stops:</div>
                <div>1/60s</div>
                
                <div className="text-gray-400">+3 stops:</div>
                <div>1/30s</div>
                
                <div className="text-gray-400">+4 stops:</div>
                <div>1/15s</div>
                
                <div className="text-gray-400">+5 stops:</div>
                <div>1/8s</div>
                
                <div className="text-gray-400 font-bold">+6 stops:</div>
                <div className="font-bold text-blue-400">1/4s (0.25 seconds)</div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 mb-2">Pro Tip: Use an ND Filter Calculator App</p>
                  <p className="text-sm text-gray-700 mb-3">
                    Apps like "PhotoPills", "NDCalc", or "Long Exposure Calculator" do the maths instantly. Input your metered exposure and filter strength, and they calculate the new shutter speed.
                  </p>
                  <p className="text-sm text-gray-700">
                    Many apps also include timers for Bulb mode exposures, ensuring perfect timing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Graduated ND Filters */}
        <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-2xl p-8 sm:p-12 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center">
              <Layers className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Graduated ND Filters
            </h2>
          </div>

          <div className="max-w-4xl mb-10">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Graduated ND (GND) filters are partially darkened filters used to balance exposure between bright and dark areas of a scene — most commonly bright skies and darker foregrounds.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Unlike solid ND filters, graduated NDs transition from dark to clear, allowing you to selectively darken one part of the image without affecting the rest.
            </p>
          </div>

          {/* Hero Image: Landscape with Graduated ND */}
          <div className="rounded-xl overflow-hidden shadow-lg mb-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1763926764993-2bcd2b088ccc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXV0cmFsJTIwZGVuc2l0eSUyMGZpbHRlciUyMGdyYWR1YXRlZCUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Njk5ODAxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Landscape photography demonstrating graduated ND filter use"
              className="w-full h-[500px] object-cover"
            />
            <div className="bg-white p-4 text-sm text-gray-600 text-center">
              Graduated ND filters balance bright skies with darker foregrounds for perfectly exposed landscapes
            </div>
          </div>

          {/* Types of Graduated ND Filters */}
          <div className="bg-white rounded-xl p-8 mb-10">
            <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Types of Graduated ND Filters
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Hard Edge GND */}
              <div className="border-2 border-gray-700 rounded-xl p-6">
                <div className="mb-4">
                  <div className="h-24 rounded-lg overflow-hidden border border-gray-300">
                    <div className="h-1/2 bg-gray-700"></div>
                    <div className="h-1/2 bg-white"></div>
                  </div>
                  <p className="text-xs text-gray-600 text-center mt-2">Hard transition line</p>
                </div>
                <h4 className="text-xl font-medium text-gray-900 mb-3">Hard-Edge GND</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Sharp, defined transition between dark and clear areas. The transition happens over a very short distance.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Best For:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Flat horizons (ocean, prairie)</li>
                    <li>• Clear distinction between sky and land</li>
                    <li>• Minimalist compositions</li>
                    <li>• Seascapes</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm"><strong className="text-red-700">Avoid:</strong> Landscapes with protruding elements (mountains, trees, buildings) crossing the horizon — creates unnatural darkening</p>
                </div>
              </div>

              {/* Soft Edge GND */}
              <div className="border-2 border-gray-400 rounded-xl p-6">
                <div className="mb-4">
                  <div className="h-24 rounded-lg overflow-hidden border border-gray-300 bg-gradient-to-b from-gray-700 via-gray-400 to-white">
                  </div>
                  <p className="text-xs text-gray-600 text-center mt-2">Gradual transition</p>
                </div>
                <h4 className="text-xl font-medium text-gray-900 mb-3">Soft-Edge GND</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Gradual, gentle transition between dark and clear areas. The transition happens over a longer distance.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Best For:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Uneven horizons (mountains, forests)</li>
                    <li>• Scenes with elements breaking the horizon</li>
                    <li>• More natural-looking transitions</li>
                    <li>• Versatile general use</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm"><strong className="text-green-700">Recommended:</strong> Most versatile choice for landscape photography. Works in more situations than hard-edge</p>
                </div>
              </div>

              {/* Reverse GND */}
              <div className="border-2 border-orange-500 rounded-xl p-6">
                <div className="mb-4">
                  <div className="h-24 rounded-lg overflow-hidden border border-gray-300 bg-gradient-to-b from-gray-300 via-gray-700 to-white">
                  </div>
                  <p className="text-xs text-gray-600 text-center mt-2">Darkest at horizon</p>
                </div>
                <h4 className="text-xl font-medium text-gray-900 mb-3">Reverse GND</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Darkest at the centre (horizon line), gradually lightening upwards and downwards. Specialised filter for specific situations.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Best For:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Sunrise and sunset photography</li>
                    <li>• When the brightest part is at the horizon</li>
                    <li>• Controlling intense horizon glow</li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-sm"><strong className="text-orange-700">Specialised:</strong> Not essential for beginners. Useful for dedicated sunrise/sunset photographers</p>
                </div>
              </div>

              {/* Strength Guide */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h4 className="text-xl font-medium text-gray-900 mb-3">GND Filter Strength</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Like solid ND filters, GNDs come in different strengths measured in stops.
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <p className="font-medium text-gray-900 text-sm mb-1">0.3 / 1-Stop GND</p>
                    <p className="text-xs text-gray-600">Subtle. For slightly bright skies, overcast days</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="font-medium text-gray-900 text-sm mb-1">0.6 / 2-Stop GND</p>
                    <p className="text-xs text-gray-600">Moderate. Good general purpose, typical sky/ground difference</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="font-medium text-gray-900 text-sm mb-1">0.9 / 3-Stop GND</p>
                    <p className="text-xs text-gray-600">Strong. Very bright skies, sunrise/sunset, high contrast scenes</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="font-medium text-gray-900 text-sm mb-1">1.2 / 4-Stop GND</p>
                    <p className="text-xs text-gray-600">Extreme. Intense sunrises/sunsets, snow scenes</p>
                  </div>
                </div>
                <div className="mt-4 bg-blue-100 rounded-lg p-3">
                  <p className="text-xs text-gray-700"><strong>Recommendation:</strong> Start with a 3-stop (0.9) soft-edge GND — the most versatile choice for landscape photography</p>
                </div>
              </div>
            </div>
          </div>

          {/* Using Graduated ND Filters */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              How to Use Graduated ND Filters
            </h3>

            <div className="space-y-6">
              <div className="border-l-4 border-orange-600 pl-6">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Step 1: Compose Your Shot</h4>
                <p className="text-gray-700 mb-3">
                  Frame your composition and focus before adding the filter. Determine where the horizon line falls in your frame.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-6">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Step 2: Meter the Scene</h4>
                <p className="text-gray-700 mb-3">
                  Use spot metering to measure both the bright sky and dark foreground. Calculate the exposure difference (e.g., 3 stops).
                </p>
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> Sky meters at 1/500s, foreground at 1/60s = 3-stop difference. Use a 3-stop GND.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-orange-600 pl-6">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Step 3: Position the Filter</h4>
                <p className="text-gray-700 mb-3">
                  Slide the GND into the filter holder, positioning the transition line along the horizon. For square filters, you can adjust vertically to match your composition perfectly.
                </p>
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Tip:</strong> With Live View, you can see the filter effect in real-time and fine-tune placement.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-orange-600 pl-6">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Step 4: Expose for the Foreground</h4>
                <p className="text-gray-700 mb-3">
                  Meter for the foreground (darker area) and use that exposure. The GND will darken the sky to match.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-6">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Step 5: Check Histogram</h4>
                <p className="text-gray-700 mb-3">
                  Review your histogram. Both sky and foreground should be properly exposed without clipping at either end.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200 mt-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 mb-2">Common Mistake: Visible Transition Line</p>
                  <p className="text-sm text-gray-700">
                    If you can see an obvious dark band where the filter transitions, you've either positioned it incorrectly or used too strong a filter. Use a softer edge GND or weaker strength, and ensure the transition aligns naturally with your scene's tonal change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Long Exposure Techniques */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Long Exposure Techniques
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Seascapes */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Silky Water (Seascapes & Waterfalls)</h3>
              <p className="text-gray-700 text-sm mb-4">
                Transform choppy water into smooth, misty surfaces using long exposures.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Technique:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Shutter speed: 1-4 seconds (waterfalls)</li>
                  <li>• Shutter speed: 15-60 seconds (seascapes)</li>
                  <li>• Use ND64 or ND1000 filter</li>
                  <li>• ISO 100 for cleanest quality</li>
                  <li>• Tripod essential for sharp rocks/land</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-xs text-gray-700">
                  <strong>Pro tip:</strong> Incoming waves create more texture than outgoing. Time your exposure to capture wave motion.
                </p>
              </div>
            </div>

            {/* Light Trails */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Light Trails (Traffic & Cities)</h3>
              <p className="text-gray-700 text-sm mb-4">
                Capture car headlights and taillights as vibrant streaks of colour through urban scenes.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Technique:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Shutter speed: 10-30 seconds</li>
                  <li>• Shoot during blue hour for best results</li>
                  <li>• f/8-f/11 for sharp cityscape</li>
                  <li>• ISO 100-200</li>
                  <li>• Position high above traffic</li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-lg p-3">
                <p className="text-xs text-gray-700">
                  <strong>Pro tip:</strong> White headlights + red taillights create dynamic colour contrast. Rush hour = more light trails.
                </p>
              </div>
            </div>

            {/* Star Trails */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Star Trails</h3>
              <p className="text-gray-700 text-sm mb-4">
                Capture the apparent motion of stars as they arc across the night sky.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Technique:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Single exposure: 30 minutes to 4 hours</li>
                  <li>• Image stacking method: 30s × 100+ images</li>
                  <li>• f/2.8-f/4 (wide aperture)</li>
                  <li>• ISO 400-800</li>
                  <li>• Point towards Polaris (North Star) for circular trails</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-3">
                <p className="text-xs text-gray-700">
                  <strong>Pro tip:</strong> Stacking method reduces noise and allows battery changes. Use software like StarStaX to combine.
                </p>
              </div>
            </div>

            {/* Cloud Movement */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center mb-4">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Cloud Movement</h3>
              <p className="text-gray-700 text-sm mb-4">
                Create dramatic streaked clouds that add movement and energy to landscape images.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Technique:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Shutter speed: 30 seconds to 2 minutes</li>
                  <li>• Works best with fast-moving clouds</li>
                  <li>• Use ND64 or ND1000 filter</li>
                  <li>• f/11-f/16 for landscape depth</li>
                  <li>• ISO 100</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-xs text-gray-700">
                  <strong>Pro tip:</strong> Windy days create more dramatic cloud motion. Longer exposures = more blur.
                </p>
              </div>
            </div>
          </div>

          {/* Example Images */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766548495575-dd9abe5e1708?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMHRyYWlscyUyMGNpdHklMjB0cmFmZmljJTIwbmlnaHQlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3Njk5ODAxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Light trails from city traffic creating dynamic streaks"
                className="w-full h-[400px] object-cover"
              />
              <div className="bg-white p-3 text-sm text-gray-600 text-center">
                Light trails transform traffic into artistic streaks of colour
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1661162502476-315bbacce1b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFyJTIwdHJhaWxzJTIwbmlnaHQlMjBza3klMjBsb25nJTIwZXhwb3N1cmV8ZW58MXx8fHwxNzY5OTgwMTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Star trails circling around the celestial pole"
                className="w-full h-[400px] object-cover"
              />
              <div className="bg-white p-3 text-sm text-gray-600 text-center">
                Star trails reveal Earth's rotation through long exposures
              </div>
            </div>
          </div>
        </div>

        {/* Essential Equipment */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-white mb-20">
          <h2 className="text-3xl sm:text-4xl tracking-tight mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Essential Equipment for Long Exposure
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Camera className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-medium mb-3">Sturdy Tripod</h3>
              <p className="text-gray-300 text-sm mb-3">
                Absolutely essential. Any camera movement during long exposures ruins the shot.
              </p>
              <p className="text-xs text-gray-400">
                Look for: Carbon fibre (lightweight), spiked feet (stability), hook for weight bag
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Filter className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-medium mb-3">ND Filter Set</h3>
              <p className="text-gray-300 text-sm mb-3">
                ND64 (6-stop) and ND1000 (10-stop) cover most long exposure needs.
              </p>
              <p className="text-xs text-gray-400">
                Square system recommended for versatility and combination with GND filters
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Clock className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-medium mb-3">Remote Shutter Release</h3>
              <p className="text-gray-300 text-sm mb-3">
                Trigger camera without touching it. Essential for Bulb mode exposures over 30 seconds.
              </p>
              <p className="text-xs text-gray-400">
                Wired or wireless. Intervalometers allow timed exposures and star trail sequences
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Layers className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-medium mb-3">Lens Cloth & Cleaning</h3>
              <p className="text-gray-300 text-sm mb-3">
                Water droplets on filters ruin long exposures. Keep filters clean and dry.
              </p>
              <p className="text-xs text-gray-400">
                Microfibre cloths, air blower, rain cover for coastal/waterfall photography
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Info className="w-10 h-10 text-yellow-400 mb-4" />
              <h3 className="text-xl font-medium mb-3">ND Calculator App</h3>
              <p className="text-gray-300 text-sm mb-3">
                Calculate correct exposure times instantly. Includes Bulb mode timer.
              </p>
              <p className="text-xs text-gray-400">
                PhotoPills, NDCalc, Long Exposure Calculator — all excellent options
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Mountain className="w-10 h-10 text-red-400 mb-4" />
              <h3 className="text-xl font-medium mb-3">Extra Batteries</h3>
              <p className="text-gray-300 text-sm mb-3">
                Long exposures drain batteries faster than normal shooting. Carry spares.
              </p>
              <p className="text-xs text-gray-400">
                Cold weather drains batteries even faster. Keep spares warm in inside pockets
              </p>
            </div>
          </div>
        </div>

        {/* Student Projects */}
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 sm:p-12 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Student Projects
            </h2>
          </div>

          <div className="space-y-8">
            {/* Project 1: Silky Water */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Project: Silky Water Photography
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Create a series of waterfall or seascape images using ND filters to achieve smooth, silky water effects.
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1653550821369-099680a3537e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFzY2FwZSUyMGxvbmclMjBleHBvc3VyZSUyMGRyZWFteSUyMHdhdGVyJTIwcm9ja3N8ZW58MXx8fHwxNzY5OTgwMTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Dreamy long exposure seascape with smooth water"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-cyan-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Assignment:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Find a waterfall, stream, or coastal location</li>
                    <li>• Create 3-5 images with varying exposure times</li>
                    <li>• Compare: 0.5s, 2s, 10s, 30s, 60s+</li>
                    <li>• Use ND64 or ND1000 filter</li>
                    <li>• Keep foreground rocks/land sharp</li>
                    <li>• ISO 100, f/11-f/16</li>
                  </ul>
                </div>

                <div className="bg-cyan-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Analysis:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Which exposure time works best?</li>
                    <li>• How does wave timing affect the result?</li>
                    <li>• Is the water too smooth or just right?</li>
                    <li>• Did you maintain sharpness in static elements?</li>
                    <li>• How does composition enhance the long exposure effect?</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 text-white rounded-lg p-6 mt-6">
                <p className="font-medium mb-2">Learning Goal:</p>
                <p className="text-sm">
                  Understand how exposure time affects water movement. Learn to balance silky water with sharp landscape elements. Master ND filter use for creative control.
                </p>
              </div>
            </div>

            {/* Project 2: Graduated ND Landscapes */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Project: Balanced Landscape with Graduated ND
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Photograph a landscape scene with a bright sky using a graduated ND filter to balance the exposure.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Assignment:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Find a landscape with bright sky and darker foreground</li>
                    <li>• Create comparison: without GND vs with GND</li>
                    <li>• Use 3-stop soft-edge GND filter</li>
                    <li>• Position transition line at horizon</li>
                    <li>• Expose for the foreground</li>
                    <li>• Check histogram for balanced exposure</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Comparison Questions:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Without GND: Is the sky blown out?</li>
                    <li>• With GND: Is the exposure balanced?</li>
                    <li>• Can you see the transition line?</li>
                    <li>• Does the sky retain detail and colour?</li>
                    <li>• Is the foreground properly exposed?</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 text-white rounded-lg p-6 mt-6">
                <p className="font-medium mb-2">Learning Goal:</p>
                <p className="text-sm">
                  Master graduated ND filters for landscape photography. Understand how to balance bright skies with darker foregrounds. Learn proper filter positioning for natural-looking results.
                </p>
              </div>
            </div>

            {/* Project 3: Light Trails */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Project: City Light Trails
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Capture traffic light trails during blue hour to create dynamic urban photography.
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 mb-6">
                <p className="font-medium text-gray-900 mb-3">Assignment:</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Find an elevated position overlooking busy road</li>
                  <li>• Shoot during blue hour (20-40 min after sunset)</li>
                  <li>• Shutter speed: 10-30 seconds</li>
                  <li>• f/8-f/11, ISO 100-200</li>
                  <li>• Create 5-10 exposures to capture traffic flow</li>
                  <li>• Include cityscape/buildings for context</li>
                </ul>
              </div>

              <div className="bg-gray-900 text-white rounded-lg p-6">
                <p className="font-medium mb-2">Creative Challenges:</p>
                <ul className="text-sm space-y-1">
                  <li>• Capture symmetrical light trails on both sides of road</li>
                  <li>• Include architectural landmarks</li>
                  <li>• Time exposure to capture continuous traffic flow</li>
                  <li>• Experiment with different vantage points</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Tips */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Practical Tips for Long Exposure Success
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Disable Image Stabilisation</h3>
                  <p className="text-gray-700 text-sm">
                    When using a tripod, turn off lens or in-body stabilisation. It can actually introduce blur during long exposures by trying to correct movement that isn't there.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Use Mirror Lock-Up</h3>
                  <p className="text-gray-700 text-sm">
                    On DSLRs, enable mirror lock-up to prevent mirror slap vibration. Mirrorless cameras don't have this issue, but use electronic shutter if available for zero vibration.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Cover the Viewfinder</h3>
                  <p className="text-gray-700 text-sm">
                    Light can leak through the viewfinder during long exposures, causing exposure issues. Use the eyepiece cover or place a cloth over it.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Shoot in RAW</h3>
                  <p className="text-gray-700 text-sm">
                    RAW files give maximum flexibility for recovering highlights, adjusting white balance, and reducing noise from long exposures.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Enable Long Exposure Noise Reduction (Sometimes)</h3>
                  <p className="text-gray-700 text-sm">
                    Your camera can take a second "dark frame" exposure to subtract noise. Useful, but doubles your wait time. For critical shots, yes. For practice, optional.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Scout Locations in Advance</h3>
                  <p className="text-gray-700 text-sm">
                    Visit locations before your shoot to identify compositions, check tide times (seascapes), and plan for golden/blue hour timing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 sm:p-12 text-white mb-20">
          <h2 className="text-3xl sm:text-4xl tracking-tight mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Key Takeaways
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">ND filters enable daylight long exposure</p>
                <p className="text-gray-300">Neutral Density filters reduce light, allowing slow shutter speeds in bright conditions. ND64 (6-stop) and ND1000 (10-stop) are most versatile for creative long exposure work.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Graduated ND filters balance exposure</p>
                <p className="text-gray-300">GND filters darken bright skies whilst keeping foregrounds properly exposed. A 3-stop soft-edge GND is the most versatile choice for landscape photography.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Exposure time creates different effects</p>
                <p className="text-gray-300">Short long exposures (1-4s) create silky water. Medium (15-60s) produce dreamy, ethereal effects. Very long (minutes) completely smooth water and remove people.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Essential equipment: tripod, filters, remote release</p>
                <p className="text-gray-300">Sturdy tripod is non-negotiable. ND/GND filter set provides creative control. Remote release eliminates camera shake and enables Bulb mode for exposures over 30 seconds.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Long exposure reveals invisible motion</p>
                <p className="text-gray-300">Long exposures show time passing — water becomes silk, stars trail across the sky, cities pulse with light. It's photography that captures the dimension of time itself.</p>
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
                Master the relationship between aperture, shutter speed, and ISO for perfect long exposures
              </p>
            </Link>

            <Link
              to="/resources/histogram-guide"
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                Histogram Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Learn to read histograms to ensure perfect exposure in long exposure photography
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
                Compositional techniques that work beautifully with long exposure effects
              </p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
