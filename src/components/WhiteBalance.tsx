import { Link } from 'react-router';
import { ArrowLeft, Sun, Cloud, Lightbulb, Flame, Thermometer, Sunrise } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WhiteBalance() {
  return (
    <div className="bg-gradient-to-br from-amber-50/30 via-white to-yellow-50/30 min-h-screen">
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
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            White Balance & Color Temperature
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Master color accuracy and creative color grading using the Kelvin scale and white balance controls
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1728575908094-9583b51f936f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5yaXNlJTIwc3Vuc2V0JTIwY29sb3IlMjB0ZW1wZXJhdHVyZSUyMHdhcm0lMjBsaWdodHxlbnwxfHx8fDE3Njk4MTE3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Warm sunset light demonstrating color temperature"
            className="w-full h-[400px] sm:h-[500px] object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            Understanding Color Temperature
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            Different light sources emit light at varying color temperatures, measured in Kelvin (K). Our eyes automatically adjust to perceive white as white under different lighting conditions, but cameras need to be told what "white" looks like in each lighting scenario. This is where white balance comes in.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Understanding and controlling white balance allows you to achieve accurate colors or create specific moods through intentional color casts. From the warm glow of candlelight to the cool tones of overcast skies, mastering color temperature is essential for professional-looking images.
          </p>

          <div className="p-6 sm:p-8 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl">
            <p className="text-xl sm:text-2xl italic text-center mb-2">
              "White balance is the foundation of color accuracy—get it right in-camera, and your workflow becomes effortless."
            </p>
            <p className="text-sm text-amber-100 text-center">— Color Science Principle</p>
          </div>
        </div>

        {/* The Kelvin Scale */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            The Kelvin Scale
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            Color temperature is measured in Kelvin (K). Counterintuitively, lower numbers represent warmer (more orange/red) light, while higher numbers represent cooler (more blue) light.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl">
              <Flame className="w-12 h-12 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">1,000K - 2,000K: Candlelight & Firelight</h3>
                <p className="text-sm text-orange-100">Deep warm orange glow, intimate and cozy atmosphere</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl">
              <Lightbulb className="w-12 h-12 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">2,500K - 3,500K: Incandescent & Tungsten Bulbs</h3>
                <p className="text-sm text-amber-100">Warm yellow-orange light typical of household lighting</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-yellow-400 to-amber-400 text-gray-900 rounded-xl">
              <Sunrise className="w-12 h-12 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">3,500K - 4,500K: Sunrise & Sunset</h3>
                <p className="text-sm text-gray-700">Golden hour light, warm and flattering for portraits</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 rounded-xl border-2 border-gray-300">
              <Sun className="w-12 h-12 flex-shrink-0 text-gray-700" />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">5,000K - 5,500K: Daylight & Electronic Flash</h3>
                <p className="text-sm text-gray-700">Neutral white light, considered "normal" or "reference" white</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900 rounded-xl">
              <Cloud className="w-12 h-12 flex-shrink-0 text-gray-700" />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">6,000K - 7,000K: Overcast Sky & Shade</h3>
                <p className="text-sm text-gray-700">Cool, slightly blue light common on cloudy days</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl">
              <Thermometer className="w-12 h-12 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">8,000K - 10,000K+: Clear Blue Sky & Deep Shade</h3>
                <p className="text-sm text-blue-100">Very cool blue light, often found in open shade under blue sky</p>
              </div>
            </div>
          </div>
        </div>

        {/* Camera White Balance Presets */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Camera White Balance Presets
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            Most cameras offer preset white balance modes designed for common lighting situations. Understanding these presets helps you choose the right setting or know when to use custom white balance.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl border-l-4 border-gray-400">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Auto White Balance (AWB)</h3>
              <p className="text-gray-700 mb-3">
                Camera analyzes the scene and automatically adjusts. Works well in most situations but can be fooled by dominant colors.
              </p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold">Best for:</p>
                <p>Changing lighting conditions, general shooting</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Daylight / Sunny (☀️)</h3>
              <p className="text-gray-700 mb-3">
                Set to approximately 5,200K. Optimized for midday sun and bright outdoor conditions.
              </p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold">Best for:</p>
                <p>Bright sunny days, outdoor photography</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cloudy / Overcast (☁️)</h3>
              <p className="text-gray-700 mb-3">
                Set to approximately 6,000K. Adds warmth to compensate for cool, blue-tinted overcast light.
              </p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold">Best for:</p>
                <p>Overcast days, open shade</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl border-l-4 border-slate-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Shade</h3>
              <p className="text-gray-700 mb-3">
                Set to approximately 7,000K. Adds significant warmth to counteract the very blue light in shaded areas.
              </p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold">Best for:</p>
                <p>Subjects in shade under blue sky</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-l-4 border-amber-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tungsten / Incandescent (💡)</h3>
              <p className="text-gray-700 mb-3">
                Set to approximately 3,200K. Cools down warm indoor lighting to neutral.
              </p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold">Best for:</p>
                <p>Indoor lighting with regular light bulbs</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fluorescent</h3>
              <p className="text-gray-700 mb-3">
                Set to approximately 4,000K. Compensates for the green-blue cast of fluorescent tubes.
              </p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold">Best for:</p>
                <p>Office lighting, fluorescent fixtures</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl border-l-4 border-gray-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flash</h3>
              <p className="text-gray-700 mb-3">
                Set to approximately 5,500K. Matches the color temperature of most camera flashes and strobes.
              </p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold">Best for:</p>
                <p>Using on-camera or studio flash</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border-l-4 border-violet-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom / Kelvin</h3>
              <p className="text-gray-700 mb-3">
                Manually set specific Kelvin value or use a gray/white card for precise color accuracy.
              </p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold">Best for:</p>
                <p>Studio work, product photography, critical color matching</p>
              </div>
            </div>
          </div>
        </div>

        {/* Custom White Balance */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Setting Custom White Balance
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            For the most accurate color reproduction, especially in mixed lighting or critical color work, use a gray card or white balance target to set a custom white balance.
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Step-by-Step: Custom White Balance</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <div>
                    <p className="font-semibold">Place a gray card or white balance target</p>
                    <p className="text-sm text-gray-600">Position it in the same light as your subject</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <p className="font-semibold">Take a reference photo</p>
                    <p className="text-sm text-gray-600">Fill the frame with the gray card, ensuring it's in focus and properly exposed</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <p className="font-semibold">Access custom white balance menu</p>
                    <p className="text-sm text-gray-600">Navigate to your camera's custom WB or PRE setting</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                  <div>
                    <p className="font-semibold">Select the reference image</p>
                    <p className="text-sm text-gray-600">Choose the gray card photo you just took</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
                  <div>
                    <p className="font-semibold">Set and shoot</p>
                    <p className="text-sm text-gray-600">Camera will now use this as the white reference for accurate colors</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-green-50 rounded-xl border-2 border-green-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-green-600">✓</span> When to Use Custom WB
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Product photography requiring exact color matching</li>
                  <li>• Studio shoots with controlled lighting</li>
                  <li>• Mixed lighting scenarios (tungsten + daylight)</li>
                  <li>• Wedding photography for consistent skin tones</li>
                  <li>• Architecture and real estate photography</li>
                </ul>
              </div>

              <div className="p-6 bg-amber-50 rounded-xl border-2 border-amber-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-amber-600">!</span> Pro Tips
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Gray cards are more accurate than white cards</li>
                  <li>• Reset custom WB if lighting conditions change</li>
                  <li>• Always shoot RAW for maximum WB flexibility</li>
                  <li>• Keep a gray card in your camera bag</li>
                  <li>• 18% gray cards double as exposure references</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Creative Uses of White Balance */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Creative White Balance
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            White balance isn't just about accuracy—it's a powerful creative tool. Intentionally "incorrect" white balance can create mood, atmosphere, and emotional impact.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Warm Tones</h3>
              <p className="text-gray-700 mb-4">
                Increase Kelvin value or use "Cloudy" preset in daylight to add warmth. Creates nostalgic, cozy, intimate feelings.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="font-semibold">Creative Applications:</p>
                <ul className="space-y-1">
                  <li>• Sunset enhancement for dramatic skies</li>
                  <li>• Golden hour amplification</li>
                  <li>• Romantic portrait mood</li>
                  <li>• Vintage/nostalgic aesthetic</li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cool Tones</h3>
              <p className="text-gray-700 mb-4">
                Decrease Kelvin value or use "Tungsten" preset in daylight to add coolness. Creates clinical, modern, mysterious moods.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="font-semibold">Creative Applications:</p>
                <ul className="space-y-1">
                  <li>• Moonlight or night scene simulation</li>
                  <li>• High-tech or futuristic aesthetics</li>
                  <li>• Winter and cold atmosphere</li>
                  <li>• Film noir or thriller mood</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* RAW vs JPEG White Balance */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            RAW vs JPEG: White Balance Flexibility
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-violet-50 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shooting RAW</h3>
              <p className="text-gray-700 mb-4">
                RAW files store all sensor data without applying white balance. This means white balance is completely adjustable in post-processing without any quality loss.
              </p>
              <div className="p-4 bg-green-100 rounded-lg border-2 border-green-300">
                <p className="font-semibold text-gray-900 mb-2">Advantages:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✓ Change white balance freely in editing</li>
                  <li>✓ Recover from incorrect in-camera settings</li>
                  <li>✓ Fine-tune Kelvin values precisely</li>
                  <li>✓ No quality degradation from WB adjustments</li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-amber-50 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shooting JPEG</h3>
              <p className="text-gray-700 mb-4">
                JPEG files have white balance "baked in" during processing. While you can adjust it later, there's limited flexibility and potential quality loss.
              </p>
              <div className="p-4 bg-orange-100 rounded-lg border-2 border-orange-300">
                <p className="font-semibold text-gray-900 mb-2">Limitations:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>⚠ Limited post-processing adjustment range</li>
                  <li>⚠ Quality loss from major WB corrections</li>
                  <li>⚠ Color shifts and artifacts possible</li>
                  <li>⚠ Critical to get WB right in-camera</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 bg-blue-600 text-white rounded-xl">
            <p className="text-lg font-semibold mb-2">Professional Recommendation:</p>
            <p className="text-blue-50">
              Always shoot RAW for maximum white balance flexibility, especially in challenging or mixed lighting. Set white balance as accurately as possible in-camera to preview results correctly, but know you can adjust perfectly in post-production.
            </p>
          </div>
        </div>

        {/* Common White Balance Problems */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Common White Balance Problems & Solutions
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Problem: Mixed Lighting</h3>
              <p className="text-gray-700 mb-3">
                Scene has multiple light sources with different color temperatures (e.g., window light + tungsten lamps).
              </p>
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Solutions:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Balance all lights to same temperature using gels/filters</li>
                  <li>• Choose one dominant light source to balance for</li>
                  <li>• Use flash to overpower ambient mixed lighting</li>
                  <li>• Shoot RAW and adjust regions separately in post</li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-orange-50 rounded-xl border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Problem: Green Cast from Fluorescent Lights</h3>
              <p className="text-gray-700 mb-3">
                Fluorescent and some LED lights produce an unflattering green color cast.
              </p>
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Solutions:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Use Fluorescent preset as starting point</li>
                  <li>• Set custom white balance with gray card</li>
                  <li>• Add magenta tint in-camera or post-processing</li>
                  <li>• Replace fluorescent bulbs with daylight-balanced LEDs</li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Problem: Color Contamination</h3>
              <p className="text-gray-700 mb-3">
                Subject picks up color casts from surrounding colored surfaces (walls, clothing, foliage).
              </p>
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Solutions:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Use reflectors to bounce neutral light onto subject</li>
                  <li>• Control the environment with neutral backdrops</li>
                  <li>• Position subject away from colored surfaces</li>
                  <li>• Correct in post-processing with selective adjustments</li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-purple-50 rounded-xl border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Problem: Auto WB Inconsistency</h3>
              <p className="text-gray-700 mb-3">
                Auto white balance produces different color temperatures across sequential shots.
              </p>
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Solutions:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Lock white balance to specific preset or Kelvin value</li>
                  <li>• Set custom white balance at start of shoot</li>
                  <li>• Shoot RAW and sync WB in batch processing</li>
                  <li>• Use manual Kelvin setting for ultimate control</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference Guide */}
        <div className="bg-gradient-to-br from-violet-600 to-purple-600 text-white rounded-xl p-8 sm:p-12 shadow-lg mb-8">
          <h2 className="text-3xl tracking-tight mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Quick Reference: White Balance Cheat Sheet
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-bold mb-3 text-lg">Situation</h3>
              <div className="space-y-2 text-sm">
                <p>Sunny day</p>
                <p>Cloudy day</p>
                <p>Shade</p>
                <p>Tungsten bulbs</p>
                <p>Fluorescent</p>
                <p>Candles</p>
              </div>
            </div>

            <div className="p-4 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-bold mb-3 text-lg">Preset</h3>
              <div className="space-y-2 text-sm">
                <p>Daylight / Sunny</p>
                <p>Cloudy</p>
                <p>Shade</p>
                <p>Tungsten</p>
                <p>Fluorescent</p>
                <p>Tungsten / Custom</p>
              </div>
            </div>

            <div className="p-4 bg-white/10 backdrop-blur rounded-lg">
              <h3 className="font-bold mb-3 text-lg">Kelvin Value</h3>
              <div className="space-y-2 text-sm">
                <p>~5,200K</p>
                <p>~6,000K</p>
                <p>~7,000K</p>
                <p>~3,200K</p>
                <p>~4,000K</p>
                <p>~2,000K</p>
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
                <span className="text-2xl text-amber-600">1</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Understand the Kelvin Scale</h3>
                  <p className="text-sm text-gray-700">Lower numbers = warmer (orange), higher numbers = cooler (blue). This is counterintuitive but essential to master.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-2xl text-amber-600">2</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Learn Your Camera's Presets</h3>
                  <p className="text-sm text-gray-700">Daylight, Cloudy, Shade, Tungsten, Fluorescent, and Flash presets cover most situations effectively.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-2xl text-amber-600">3</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Use Custom WB for Accuracy</h3>
                  <p className="text-sm text-gray-700">Gray cards provide the most accurate white balance for critical color work like product photography.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-2xl text-amber-600">4</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Shoot RAW When Possible</h3>
                  <p className="text-sm text-gray-700">RAW files give you complete white balance flexibility in post-processing without quality loss.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-2xl text-amber-600">5</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">White Balance is Creative</h3>
                  <p className="text-sm text-gray-700">Don't always aim for neutral—intentional warm or cool casts create mood and atmosphere.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-2xl text-amber-600">6</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Be Consistent in Series</h3>
                  <p className="text-sm text-gray-700">Lock your white balance when shooting sequences to ensure consistent color across all images.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
