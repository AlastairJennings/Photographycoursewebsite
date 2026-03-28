import { Link } from 'react-router';
import { ArrowLeft, Aperture, Gauge, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ExposureTriangle() {
  return (
    <div className="bg-gradient-to-br from-violet-50/30 via-white to-purple-50/30 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-12">
        {/* Back Button */}
        <Link
          to="/resources"
          className="mb-8 text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Resources
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            The Exposure Triangle
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Understanding the relationship between ISO, Aperture, and Shutter Speed
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1729857037662-221cc636782a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBvc3VyZSUyMHRyaWFuZ2xlJTIwcGhvdG9ncmFwaHklMjBkaWFncmFtJTIwYXBlcnR1cmUlMjBzaHV0dGVyJTIwSVNPfGVufDF8fHx8MTc2OTgxMTE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Camera controls showing aperture, shutter speed, and ISO settings"
            className="w-full h-[400px] sm:h-[500px] object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            What is the Exposure Triangle?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            The Exposure Triangle is a fundamental concept in photography that explains how three settings work together to control the amount of light that reaches your camera's sensor: <strong>ISO</strong>, <strong>Aperture</strong>, and <strong>Shutter Speed</strong>.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            These three elements are interconnected—changing one requires adjusting at least one of the others to maintain proper exposure. Mastering the exposure triangle allows you to take full creative control of your images.
          </p>

          <div className="p-6 sm:p-8 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl">
            <p className="text-xl sm:text-2xl text-center mb-2">
              <strong>The Balance:</strong> Each setting affects both exposure and image quality
            </p>
            <p className="text-sm text-violet-100 text-center">
              Learning to balance these three elements is the key to photographic mastery
            </p>
          </div>
        </div>

        {/* The Three Elements */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* ISO */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 bg-gradient-to-br from-cyan-500 to-blue-600">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Gauge className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Roslindale, serif' }}>ISO</h3>
              </div>
              <p className="text-cyan-50 text-sm">Sensor Sensitivity</p>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Controls how sensitive your camera's sensor is to light.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-cyan-50 rounded-lg">
                  <p className="font-semibold text-gray-900 text-sm mb-1">Low ISO (100-400)</p>
                  <p className="text-xs text-gray-600">Clean images, best quality, needs more light</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-gray-900 text-sm mb-1">High ISO (1600+)</p>
                  <p className="text-xs text-gray-600">Works in low light, introduces noise/grain</p>
                </div>
              </div>
            </div>
          </div>

          {/* Aperture */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 bg-gradient-to-br from-pink-500 to-rose-600">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Aperture className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Roslindale, serif' }}>Aperture</h3>
              </div>
              <p className="text-pink-50 text-sm">Lens Opening Size</p>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Controls the size of the opening in your lens that lets light through.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-pink-50 rounded-lg">
                  <p className="font-semibold text-gray-900 text-sm mb-1">Wide (f/1.4 - f/2.8)</p>
                  <p className="text-xs text-gray-600">More light, shallow depth of field, blurry background</p>
                </div>
                <div className="p-3 bg-rose-50 rounded-lg">
                  <p className="font-semibold text-gray-900 text-sm mb-1">Narrow (f/11 - f/22)</p>
                  <p className="text-xs text-gray-600">Less light, deep depth of field, sharp throughout</p>
                </div>
              </div>
            </div>
          </div>

          {/* Shutter Speed */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 bg-gradient-to-br from-orange-500 to-red-600">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Roslindale, serif' }}>Shutter Speed</h3>
              </div>
              <p className="text-orange-50 text-sm">Exposure Duration</p>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Controls how long the camera's shutter stays open.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-semibold text-gray-900 text-sm mb-1">Fast (1/500s+)</p>
                  <p className="text-xs text-gray-600">Freezes motion, less light, sharp action</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-semibold text-gray-900 text-sm mb-1">Slow (1/30s or slower)</p>
                  <p className="text-xs text-gray-600">Blurs motion, more light, creative effects</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How They Work Together */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            How They Work Together
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            The exposure triangle is called a "triangle" because all three elements are interconnected. When you change one setting, you must compensate with the others to maintain the same exposure.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border-l-4 border-violet-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scenario 1: Freezing Action</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold">→</span>
                  <p className="text-gray-700"><strong>Goal:</strong> Photograph a fast-moving athlete</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold">→</span>
                  <p className="text-gray-700"><strong>Shutter Speed:</strong> Fast (1/1000s) to freeze motion</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold">→</span>
                  <p className="text-gray-700"><strong>Problem:</strong> Fast shutter = less light</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold">→</span>
                  <p className="text-gray-700"><strong>Solution:</strong> Open aperture wider (f/2.8) OR increase ISO (800-1600)</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border-l-4 border-pink-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scenario 2: Landscape Photography</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">→</span>
                  <p className="text-gray-700"><strong>Goal:</strong> Everything sharp from foreground to background</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">→</span>
                  <p className="text-gray-700"><strong>Aperture:</strong> Narrow (f/11) for deep depth of field</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">→</span>
                  <p className="text-gray-700"><strong>Problem:</strong> Narrow aperture = less light</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">→</span>
                  <p className="text-gray-700"><strong>Solution:</strong> Slower shutter (1/60s) OR increase ISO (400) OR use tripod</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-l-4 border-orange-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scenario 3: Portrait with Bokeh</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">→</span>
                  <p className="text-gray-700"><strong>Goal:</strong> Subject sharp, background beautifully blurred</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">→</span>
                  <p className="text-gray-700"><strong>Aperture:</strong> Wide (f/1.8) for shallow depth of field</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">→</span>
                  <p className="text-gray-700"><strong>Problem:</strong> Wide aperture = lots of light (might overexpose)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">→</span>
                  <p className="text-gray-700"><strong>Solution:</strong> Faster shutter (1/500s) OR lower ISO (100)</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scenario 4: Low Light Concert</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">→</span>
                  <p className="text-gray-700"><strong>Goal:</strong> Capture performer in dim lighting</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">→</span>
                  <p className="text-gray-700"><strong>Problem:</strong> Not enough light available</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">→</span>
                  <p className="text-gray-700"><strong>Solution:</strong> Wide aperture (f/2.8) + High ISO (3200) + Moderate shutter (1/125s)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">→</span>
                  <p className="text-gray-700"><strong>Trade-off:</strong> Accept some noise for a properly exposed image</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Examples */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            Visual Examples
          </h2>

          {/* Aperture Examples */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
              <Aperture className="w-6 h-6 text-pink-600" />
              Aperture: Controlling Depth of Field
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1657554748109-ea59d63bc9b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXB0aCUyMG9mJTIwZmllbGQlMjBib2tlaCUyMHNoYWxsb3clMjBmb2N1cyUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2OTgxMTE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Wide aperture shallow depth of field with bokeh"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-pink-50">
                  <p className="font-semibold text-gray-900 mb-1">Wide Aperture (f/1.8 - f/2.8)</p>
                  <p className="text-sm text-gray-700">Subject sharp, background beautifully blurred (bokeh). Perfect for portraits.</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1557684753-3fddcaf72e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWxlJTIwb2YlMjB0aGlyZHMlMjBjb21wb3NpdGlvbiUyMGdyaWQlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3Njk4MTExODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Narrow aperture deep depth of field landscape"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-rose-50">
                  <p className="font-semibold text-gray-900 mb-1">Narrow Aperture (f/11 - f/16)</p>
                  <p className="text-sm text-gray-700">Everything sharp from front to back. Ideal for landscapes and architecture.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Shutter Speed Examples */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-orange-600" />
              Shutter Speed: Controlling Motion
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1669975862965-a092cd94a81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXN0JTIwc2h1dHRlciUyMHNwZWVkJTIwZnJvemVuJTIwYWN0aW9uJTIwc3BvcnRzfGVufDF8fHx8MTc2OTgxMTE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Fast shutter speed frozen action"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-orange-50">
                  <p className="font-semibold text-gray-900 mb-1">Fast Shutter (1/500s - 1/8000s)</p>
                  <p className="text-sm text-gray-700">Freezes fast action and movement. Perfect for sports and wildlife.</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1617468264388-8b8cd1f7aba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBjb250cm9scyUyMGRpYWxzJTIwYXBlcnR1cmUlMjBwcmlvcml0eSUyMG1vZGV8ZW58MXx8fHwxNzY5ODExMTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Camera showing shutter speed controls"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-red-50">
                  <p className="font-semibold text-gray-900 mb-1">Slow Shutter (1/15s - 30s)</p>
                  <p className="text-sm text-gray-700">Creates motion blur and light trails. Great for waterfalls and night photography.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference Chart */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            Quick Reference Chart
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left p-4 text-gray-900 font-semibold">Setting</th>
                  <th className="text-left p-4 text-gray-900 font-semibold">Increase →</th>
                  <th className="text-left p-4 text-gray-900 font-semibold">Effect on Exposure</th>
                  <th className="text-left p-4 text-gray-900 font-semibold">Creative Effect</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-cyan-50">
                  <td className="p-4 font-semibold text-gray-900">ISO</td>
                  <td className="p-4 text-gray-700">100 → 3200</td>
                  <td className="p-4 text-gray-700">Brighter image</td>
                  <td className="p-4 text-gray-700">More noise/grain</td>
                </tr>
                <tr className="border-b border-gray-200 bg-pink-50">
                  <td className="p-4 font-semibold text-gray-900">Aperture</td>
                  <td className="p-4 text-gray-700">f/16 → f/1.4</td>
                  <td className="p-4 text-gray-700">Brighter image</td>
                  <td className="p-4 text-gray-700">Shallower depth of field</td>
                </tr>
                <tr className="border-b border-gray-200 bg-orange-50">
                  <td className="p-4 font-semibold text-gray-900">Shutter Speed</td>
                  <td className="p-4 text-gray-700">1/2000s → 1/30s</td>
                  <td className="p-4 text-gray-700">Brighter image</td>
                  <td className="p-4 text-gray-700">More motion blur</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border-l-4 border-cyan-600">
              <p className="font-semibold text-gray-900 mb-2">ISO Tips</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Use lowest ISO possible for best quality</li>
                <li>• Increase only when needed for proper exposure</li>
                <li>• Modern cameras handle high ISO better</li>
              </ul>
            </div>

            <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg border-l-4 border-pink-600">
              <p className="font-semibold text-gray-900 mb-2">Aperture Tips</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Wide for portraits and low light</li>
                <li>• Narrow for landscapes and groups</li>
                <li>• f/8 is often the "sweet spot"</li>
              </ul>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border-l-4 border-orange-600">
              <p className="font-semibold text-gray-900 mb-2">Shutter Speed Tips</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Match focal length (50mm = 1/50s minimum)</li>
                <li>• Use tripod for speeds slower than 1/60s</li>
                <li>• Freeze action requires 1/500s or faster</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-8 sm:p-12 shadow-sm">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            Practice Exercises
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">01</span>
                <span>The Fixed ISO Challenge</span>
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Set your ISO to 400 and don't change it. For an entire day, only adjust aperture and shutter speed to get proper exposure. This teaches you how these two settings work together.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">02</span>
                <span>Same Scene, Different Settings</span>
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Photograph the same subject with three different combinations that produce the same exposure. Compare how the depth of field and motion rendering differ.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">03</span>
                <span>The Aperture Series</span>
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Shoot the same subject at every aperture your lens offers (f/2.8, f/4, f/5.6, f/8, f/11, f/16). Observe how depth of field changes. Adjust shutter speed to maintain exposure.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">04</span>
                <span>Motion Control</span>
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Find a moving subject (cars, people, water). Photograph it at 1/1000s, 1/250s, 1/60s, and 1/15s. See how motion is rendered differently at each speed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
