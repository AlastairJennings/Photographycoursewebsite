import { Link } from 'react-router';
import { ArrowLeft, BarChart3, TrendingUp, AlertTriangle, CheckCircle, Mountain, Sun } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HistogramGuide() {
  return (
    <div className="bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/30 min-h-screen">
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
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Understanding Histograms
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Master your camera's most powerful exposure tool to achieve perfect exposure every time
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1714201623874-3c654c1f0fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBoaXN0b2dyYW0lMjBleHBvc3VyZSUyMGNoYXJ0fGVufDF8fHx8MTc2OTgxMTc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Camera histogram display showing exposure distribution"
            className="w-full h-[400px] sm:h-[500px] object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            What is a Histogram?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            A histogram is a graphical representation of the tonal values in your image, showing the distribution of pixels from pure black (left) to pure white (right). Unlike your camera's LCD screen, which can be misleading in bright sunlight or dark environments, the histogram provides an objective, scientific view of your exposure.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Professional photographers rely on histograms more than the image preview because histograms reveal exposure problems that may not be visible on the screen—like blown highlights or crushed shadows. Learning to read histograms transforms your ability to nail exposure in-camera and minimize post-processing time.
          </p>

          <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl">
            <p className="text-xl sm:text-2xl italic text-center mb-2">
              "Trust the histogram, not the LCD screen. Your eyes can be fooled, but the data never lies."
            </p>
            <p className="text-sm text-blue-100 text-center">— Professional Photography Wisdom</p>
          </div>
        </div>

        {/* Anatomy of a Histogram */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Anatomy of a Histogram
          </h2>

          <div className="space-y-8">
            {/* Visual Representation */}
            <div className="p-6 bg-gradient-to-r from-gray-900 via-gray-500 to-white rounded-xl">
              <div className="flex items-end justify-between h-48 px-8">
                <div className="w-full relative">
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
                  <div className="absolute bottom-0 left-0 text-white text-xs font-bold">BLACK (0)</div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white text-xs font-bold">MIDTONES (128)</div>
                  <div className="absolute bottom-0 right-0 text-gray-900 text-xs font-bold">WHITE (255)</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-xl border-l-4 border-gray-900">
                <h3 className="text-xl font-bold mb-3">Left Side: Shadows</h3>
                <p className="text-sm text-gray-200 mb-3">
                  Represents the darkest tones in your image. Pure black is at the far left edge (0 on a 0-255 scale).
                </p>
                <div className="text-xs text-gray-300">
                  <p className="font-semibold mb-1">Indicates:</p>
                  <p>Dark areas, deep shadows, black objects</p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-500 to-gray-400 text-white rounded-xl border-l-4 border-gray-600">
                <h3 className="text-xl font-bold mb-3">Middle: Midtones</h3>
                <p className="text-sm text-gray-100 mb-3">
                  Represents the middle gray values where most image detail lives. This is typically where skin tones fall.
                </p>
                <div className="text-xs text-gray-200">
                  <p className="font-semibold mb-1">Indicates:</p>
                  <p>Moderate tones, skin tones, medium grays</p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-200 to-white text-gray-900 rounded-xl border-l-4 border-gray-300">
                <h3 className="text-xl font-bold mb-3">Right Side: Highlights</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Represents the brightest tones. Pure white is at the far right edge (255 on a 0-255 scale).
                </p>
                <div className="text-xs text-gray-600">
                  <p className="font-semibold mb-1">Indicates:</p>
                  <p>Bright areas, highlights, white objects</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-blue-600" />
                Understanding the Graph Height
              </h3>
              <p className="text-gray-700 text-sm">
                The <strong>height</strong> of the graph at any point represents the <strong>number of pixels</strong> at that particular brightness level. A tall peak means many pixels at that brightness; a flat area means few pixels at that brightness.
              </p>
            </div>
          </div>
        </div>

        {/* Reading Different Histogram Shapes */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Reading Different Histogram Shapes
          </h2>

          <div className="space-y-6">
            {/* Properly Exposed */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Well-Exposed Image</h3>
                  <p className="text-gray-700 mb-4">
                    Data spread across the full range from shadows to highlights, with most information in the midtones. No clipping on either end.
                  </p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Characteristics:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Bell curve or mountain shape in the middle</li>
                  <li>• Data tapers off before reaching the edges</li>
                  <li>• Full tonal range captured</li>
                  <li>• Maximum post-processing flexibility</li>
                </ul>
              </div>
            </div>

            {/* Overexposed */}
            <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border-l-4 border-red-500">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Overexposed (Blown Highlights)</h3>
                  <p className="text-gray-700 mb-4">
                    Data bunched up against the right edge with a spike at pure white. Highlight detail is permanently lost.
                  </p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Warning Signs:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Graph "climbing the right wall"</li>
                  <li>• Spike at the far right edge (clipping)</li>
                  <li>• Little to no data in shadows/midtones</li>
                  <li>• Irrecoverable white areas in image</li>
                </ul>
                <div className="mt-3 p-3 bg-red-100 rounded border border-red-300">
                  <p className="text-sm font-semibold text-red-900">Solution: Reduce exposure (lower ISO, faster shutter, smaller aperture)</p>
                </div>
              </div>
            </div>

            {/* Underexposed */}
            <div className="p-6 bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl border-l-4 border-gray-600">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="w-8 h-8 text-gray-600 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Underexposed (Crushed Shadows)</h3>
                  <p className="text-gray-700 mb-4">
                    Data bunched up against the left edge with a spike at pure black. Shadow detail is lost to darkness.
                  </p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Warning Signs:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Graph "climbing the left wall"</li>
                  <li>• Spike at the far left edge (clipping)</li>
                  <li>• Little to no data in highlights</li>
                  <li>• Blocked-up black areas with no detail</li>
                </ul>
                <div className="mt-3 p-3 bg-gray-200 rounded border border-gray-400">
                  <p className="text-sm font-semibold text-gray-900">Solution: Increase exposure (higher ISO, slower shutter, wider aperture)</p>
                </div>
              </div>
            </div>

            {/* High Key */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl border-l-4 border-blue-400">
              <div className="flex items-start gap-4 mb-4">
                <Sun className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">High Key Image (Intentionally Bright)</h3>
                  <p className="text-gray-700 mb-4">
                    Data weighted toward the right (highlights) but not clipping. Creates bright, airy, optimistic mood.
                  </p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Characteristics:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Most data on the right side</li>
                  <li>• Minimal shadow information</li>
                  <li>• Still tapers off before the edge (not clipped)</li>
                  <li>• Common in portrait, fashion, product photography</li>
                </ul>
              </div>
            </div>

            {/* Low Key */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border-l-4 border-purple-500">
              <div className="flex items-start gap-4 mb-4">
                <Mountain className="w-8 h-8 text-purple-600 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Low Key Image (Intentionally Dark)</h3>
                  <p className="text-gray-700 mb-4">
                    Data weighted toward the left (shadows) but not clipping. Creates dramatic, moody, mysterious atmosphere.
                  </p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Characteristics:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Most data on the left side</li>
                  <li>• Minimal highlight information</li>
                  <li>• Still tapers off before the edge (not crushed)</li>
                  <li>• Common in dramatic portraits, noir photography</li>
                </ul>
              </div>
            </div>

            {/* High Contrast */}
            <div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border-l-4 border-amber-500">
              <div className="flex items-start gap-4 mb-4">
                <TrendingUp className="w-8 h-8 text-amber-600 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">High Contrast Scene</h3>
                  <p className="text-gray-700 mb-4">
                    Data at both extremes with a gap in the middle. Common in harsh sunlight or backlit situations.
                  </p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Characteristics:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Peaks at both left and right sides</li>
                  <li>• Valley or gap in the midtones</li>
                  <li>• Challenging exposure situation</li>
                  <li>• May require HDR or exposure blending</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* RGB Histograms */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            RGB Histograms: Color Information
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            Many cameras offer RGB histograms that show separate graphs for Red, Green, and Blue channels. This reveals color-specific clipping and helps identify color casts.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Red Channel</h3>
              <p className="text-sm text-gray-700 mb-3">
                Shows distribution of red tones. Clipping here means pure red areas with no detail.
              </p>
              <div className="text-xs text-gray-600">
                <p className="font-semibold">Watch for clipping in:</p>
                <p>Sunsets, red flowers, warm skin tones</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Green Channel</h3>
              <p className="text-sm text-gray-700 mb-3">
                Shows distribution of green tones. Often clips first in bright scenes due to sensor sensitivity.
              </p>
              <div className="text-xs text-gray-600">
                <p className="font-semibold">Watch for clipping in:</p>
                <p>Foliage, grass, bright outdoor scenes</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Blue Channel</h3>
              <p className="text-sm text-gray-700 mb-3">
                Shows distribution of blue tones. Clipping here means pure blue areas without detail.
              </p>
              <div className="text-xs text-gray-600">
                <p className="font-semibold">Watch for clipping in:</p>
                <p>Clear skies, water, blue objects</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-violet-50 rounded-xl border-2 border-violet-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3">RGB vs Luminance Histogram</h3>
            <p className="text-gray-700 text-sm mb-3">
              The standard (luminance) histogram shows overall brightness. RGB histograms show each color channel separately. A color channel can clip even if the luminance histogram looks fine.
            </p>
            <p className="text-gray-700 text-sm font-semibold">
              Pro tip: Use RGB histograms when shooting color-critical work like product photography or fashion.
            </p>
          </div>
        </div>

        {/* ETTR: Expose to the Right */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            ETTR: Expose to the Right
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            "Expose to the Right" (ETTR) is an advanced technique where you deliberately expose as bright as possible without clipping highlights. This maximizes image quality by capturing more data in the highlights where cameras record the most information.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="p-6 bg-green-50 rounded-xl border-2 border-green-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why ETTR Works</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Better signal-to-noise ratio:</strong> Brighter exposures have less noise</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>More tonal information:</strong> Half of all data lives in the brightest stop</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Cleaner shadows:</strong> Pulling down in post reveals cleaner shadow detail</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Maximum dynamic range:</strong> Captures the full sensor capability</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-amber-50 rounded-xl border-2 border-amber-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">ETTR Cautions</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">!</span>
                  <span><strong>Requires RAW:</strong> JPEG can't recover the brightness reduction needed</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">!</span>
                  <span><strong>Watch for clipping:</strong> Any blown highlights are unrecoverable</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">!</span>
                  <span><strong>Increases post-processing:</strong> You must darken the image in editing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">!</span>
                  <span><strong>Not for all situations:</strong> Skip it for high-key or time-sensitive work</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-blue-600 text-white rounded-xl">
            <h3 className="text-lg font-bold mb-2">ETTR Step-by-Step:</h3>
            <ol className="space-y-2 text-sm text-blue-50">
              <li>1. Take a test shot and check the histogram</li>
              <li>2. Increase exposure (slower shutter, wider aperture, higher ISO) until histogram reaches right edge</li>
              <li>3. Back off slightly to ensure no clipping (check blinkies and RGB channels)</li>
              <li>4. Shoot at this exposure setting</li>
              <li>5. In post-processing, reduce exposure to achieve desired brightness</li>
            </ol>
          </div>
        </div>

        {/* Practical Histogram Workflow */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Practical Histogram Workflow
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">On-Location Shooting Workflow</h3>
              <ol className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <p className="font-semibold">Enable histogram display on LCD</p>
                    <p className="text-sm text-gray-600">Set your camera to show histogram in playback mode or live view</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <p className="font-semibold">Take a test shot</p>
                    <p className="text-sm text-gray-600">Shoot one frame and immediately review the histogram</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <p className="font-semibold">Check for clipping on both ends</p>
                    <p className="text-sm text-gray-600">Look for spikes at the edges; enable highlight warnings (blinkies)</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                  <div>
                    <p className="font-semibold">Adjust exposure as needed</p>
                    <p className="text-sm text-gray-600">Use exposure compensation, manual settings, or flash to correct</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
                  <div>
                    <p className="font-semibold">Shoot with confidence</p>
                    <p className="text-sm text-gray-600">Continue shooting, periodically checking histogram if lighting changes</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-teal-50 rounded-xl border-2 border-teal-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">When Histograms Are Critical</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Bright outdoor conditions (unreliable LCD)</li>
                  <li>• Wedding ceremonies (can't re-shoot)</li>
                  <li>• Landscape photography (maximize dynamic range)</li>
                  <li>• Product photography (accurate exposure required)</li>
                  <li>• High-contrast scenes (HDR candidates)</li>
                  <li>• Night photography (difficult to judge on screen)</li>
                </ul>
              </div>

              <div className="p-6 bg-orange-50 rounded-xl border-2 border-orange-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Common Histogram Mistakes</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Trusting the LCD instead of the histogram</li>
                  <li>• Assuming all histograms should be "perfect"</li>
                  <li>• Not checking RGB channels separately</li>
                  <li>• Ignoring highlight warnings (blinkies)</li>
                  <li>• Forgetting creative intent (high/low key)</li>
                  <li>• Not using histogram in bright sunlight</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Histogram Myths */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Histogram Myths Debunked
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">❌ Myth: A "Good" Histogram is a Bell Curve</h3>
              <p className="text-gray-700 mb-2">
                <strong>Truth:</strong> The "ideal" histogram shape depends entirely on your subject and creative intent.
              </p>
              <p className="text-sm text-gray-600">
                A snow scene should be weighted right. A low-key portrait should be weighted left. Judge histograms based on your scene, not a preconceived ideal shape.
              </p>
            </div>

            <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">❌ Myth: You Must Have Data Across the Full Range</h3>
              <p className="text-gray-700 mb-2">
                <strong>Truth:</strong> Many perfectly exposed images don't use the full histogram range.
              </p>
              <p className="text-sm text-gray-600">
                Foggy mornings may have no pure blacks. Overcast skies may have no pure whites. The scene determines the range, not arbitrary rules.
              </p>
            </div>

            <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">❌ Myth: Blown Highlights Are Always Bad</h3>
              <p className="text-gray-700 mb-2">
                <strong>Truth:</strong> Some highlight clipping is acceptable or even desirable.
              </p>
              <p className="text-sm text-gray-600">
                Specular highlights (sun reflections on water, light bulbs) are expected to be pure white. The key is ensuring important details (like skin or texture) aren't clipped.
              </p>
            </div>

            <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">❌ Myth: The LCD Preview is Accurate Enough</h3>
              <p className="text-gray-700 mb-2">
                <strong>Truth:</strong> LCD screens are highly unreliable in varying light conditions.
              </p>
              <p className="text-sm text-gray-600">
                In bright sunlight, images look darker than they are. In dark environments, they look brighter. The histogram provides objective truth regardless of viewing conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-xl p-8 sm:p-12 shadow-lg mb-8">
          <h2 className="text-3xl tracking-tight mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Quick Reference: Histogram Cheat Sheet
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-bold mb-3 text-lg">Problem</h3>
              <div className="space-y-2 text-sm">
                <p>Spike at right edge</p>
                <p>Spike at left edge</p>
                <p>All data on right side</p>
                <p>All data on left side</p>
                <p>Gaps in histogram</p>
                <p>Two peaks at extremes</p>
              </div>
            </div>

            <div className="p-5 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-bold mb-3 text-lg">What It Means</h3>
              <div className="space-y-2 text-sm">
                <p>Blown highlights → Reduce exposure</p>
                <p>Crushed shadows → Increase exposure</p>
                <p>High-key or overexposed</p>
                <p>Low-key or underexposed</p>
                <p>Low contrast scene (fog, overcast)</p>
                <p>High contrast scene (bright sun)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Key Takeaways
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-2xl text-blue-600">1</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Histograms Never Lie</h3>
                  <p className="text-sm text-gray-700">Trust the histogram over the LCD screen, especially in bright or dark conditions where screens are unreliable.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-2xl text-blue-600">2</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Watch for Clipping</h3>
                  <p className="text-sm text-gray-700">Spikes at the edges indicate lost detail. Blown highlights and crushed shadows are usually unrecoverable.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-2xl text-blue-600">3</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">No "Perfect" Shape</h3>
                  <p className="text-sm text-gray-700">The ideal histogram depends on your scene. Snow should be right-weighted; low-key portraits should be left-weighted.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-2xl text-blue-600">4</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Use RGB for Color Work</h3>
                  <p className="text-sm text-gray-700">Individual color channels can clip even when the luminance histogram looks fine. Check RGB for critical color.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-2xl text-blue-600">5</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">ETTR for Maximum Quality</h3>
                  <p className="text-sm text-gray-700">Expose to the right (without clipping) captures more data and reduces noise, especially valuable for RAW shooters.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-2xl text-blue-600">6</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Practice Reading Them</h3>
                  <p className="text-sm text-gray-700">Review histograms of your favorite images to learn what different scenes look like graphically.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
