import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function IntroPhotoWeek02() {
  return (
    <div className="bg-gradient-to-br from-fuchsia-50/30 via-white to-pink-50/30 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-12">
        {/* Back Button */}
        <Link
          to="/courses/introduction-to-photography"
          className="mb-8 text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Course Overview
        </Link>

        {/* Week Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Week 2: Mastering the Exposure Triangle
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Unlocking the power of Aperture, ISO, and Shutter Speed
          </p>
        </div>

        {/* Session Outline */}
        <div className="mb-8 p-6 sm:p-8 bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-xl">
          <h4 className="text-xl font-semibold text-gray-900 mb-6">Session Outline</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-fuchsia-600">01</span>
              <div>
                <p className="font-semibold text-gray-900">Lanyards & Housekeeping</p>
                <p className="text-sm text-gray-600">Course logistics and setup</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-fuchsia-600">02</span>
              <div>
                <p className="font-semibold text-gray-900">Student Image Review</p>
                <p className="text-sm text-gray-600">Discuss homework from Week 1</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-fuchsia-600">03</span>
              <div>
                <p className="font-semibold text-gray-900">The Exposure Triangle</p>
                <p className="text-sm text-gray-600">Understanding ISO, Shutter Speed, Aperture</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-fuchsia-600">04</span>
              <div>
                <p className="font-semibold text-gray-900">Understanding PSAM Modes</p>
                <p className="text-sm text-gray-600">Program, Shutter, Aperture, Manual</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-fuchsia-600">05</span>
              <div>
                <p className="font-semibold text-gray-900">Practical Tasks & Homework</p>
                <p className="text-sm text-gray-600">Hands-on camera practice</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-fuchsia-600">06</span>
              <div>
                <p className="font-semibold text-gray-900">Intro to Lightroom</p>
                <p className="text-sm text-gray-600">Basic workflow and organization</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Concept: The Exposure Triangle */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <h4 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            What is the Exposure Triangle?
          </h4>
          <p className="text-gray-700 mb-6 text-lg">
            A fundamental concept used to explain how three critical camera settings interact to control the amount of light hitting your sensor.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* ISO */}
            <div className="p-6 bg-cyan-50 rounded-lg border-l-4 border-cyan-500">
              <h5 className="text-xl font-bold text-gray-900 mb-3">ISO</h5>
              <p className="text-gray-700 mb-4">
                The sensitivity of your camera's sensor to light.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Low ISO (100-400):</strong> Less sensitive, cleaner images, requires more light</p>
                <p><strong>High ISO (1600+):</strong> More sensitive, works in low light, introduces grain/noise</p>
              </div>
            </div>

            {/* Shutter Speed */}
            <div className="p-6 bg-slate-50 rounded-lg border-l-4 border-slate-700">
              <h5 className="text-xl font-bold text-gray-900 mb-3">Shutter Speed</h5>
              <p className="text-gray-700 mb-4">
                The duration the shutter remains open.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Fast (1/500s - 1/8000s):</strong> Freezes motion, requires more light</p>
                <p><strong>Slow (1/30s - 30s):</strong> Creates motion blur, captures more light</p>
              </div>
            </div>

            {/* Aperture */}
            <div className="p-6 bg-pink-50 rounded-lg border-l-4 border-pink-500">
              <h5 className="text-xl font-bold text-gray-900 mb-3">Aperture</h5>
              <p className="text-gray-700 mb-4">
                The size of the opening in the lens (iris).
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Wide (f/1.4 - f/2.8):</strong> Large opening, shallow depth of field, more light</p>
                <p><strong>Narrow (f/11 - f/22):</strong> Small opening, deep depth of field, less light</p>
              </div>
            </div>
          </div>
        </div>

        {/* Understanding ISO in Detail */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <h4 className="text-2xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            ISO: <span className="text-fuchsia-600">Sensor Sensitivity</span>
          </h4>

          {/* Key Quote */}
          <div className="mb-6 p-5 bg-gray-900 text-white rounded-lg border-l-4 border-orange-500">
            <p className="text-lg italic">
              "Higher ISO helps in low light but adds grain—just like turning up the volume adds background noise."
            </p>
          </div>

          {/* Three-column breakdown */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Low ISO */}
            <div className="p-5 bg-cyan-50 rounded-lg border-t-4 border-orange-500">
              <h5 className="text-lg font-bold text-orange-600 mb-3">Low ISO (100-400)</h5>
              <p className="text-gray-700 mb-4">
                Best for bright light conditions. Captures maximum detail, rich tones, and accurate color with zero noise.
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Quality: Maximum</p>
            </div>

            {/* High ISO */}
            <div className="p-5 bg-orange-50 rounded-lg border-t-4 border-orange-600">
              <h5 className="text-lg font-bold text-orange-600 mb-3">High ISO (1600+)</h5>
              <p className="text-gray-700 mb-4">
                Necessary for low light or fast action. Increases sensitivity but introduces digital noise (grain).
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Quality: Reduced</p>
            </div>

            {/* Noise Types */}
            <div className="p-5 bg-blue-50 rounded-lg border-t-4 border-blue-600">
              <h5 className="text-lg font-bold text-orange-600 mb-3">Noise Types</h5>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">Monochromatic:</p>
                  <p className="text-gray-700">Similar to classic film grain.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Chromatic:</p>
                  <p className="text-gray-700">Unwanted color speckles (the "bad" kind).</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mt-3">Technical: Digital Artifacts</p>
            </div>
          </div>

          {/* Auto ISO Tip */}
          <div className="p-4 bg-blue-100 rounded-lg border-l-4 border-blue-600 mb-6">
            <p className="text-sm text-gray-700">
              <strong className="text-blue-800">Auto ISO Tip:</strong> Use bands like 100-800 or 1600-6400 for flexibility.
            </p>
          </div>

          {/* Common ISO Values Reference */}
          <div className="p-4 bg-white rounded border border-cyan-200">
            <p className="font-semibold text-gray-900 mb-2">Common ISO Values:</p>
            <p className="text-sm text-gray-700">100 • 200 • 400 • 800 • 1600 • 3200 • 6400</p>
            <p className="text-sm text-gray-600 mt-2 italic">Each doubling increases sensitivity by one "stop" of light</p>
          </div>
        </div>

        {/* Understanding Shutter Speed in Detail */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <h4 className="text-2xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            Shutter Speed: <span className="text-fuchsia-600">Freezing vs. Blurring</span>
          </h4>

          {/* The Handheld Rule */}
          <div className="mb-6 p-5 bg-gray-900 text-white rounded-lg border-l-4 border-orange-500">
            <h5 className="text-lg font-semibold text-orange-500 mb-3">The Handheld Rule</h5>
            <p className="text-base mb-2">
              To avoid camera shake, your shutter speed should be <strong>equal to or greater than your focal length</strong>.
            </p>
            <p className="text-sm text-gray-300 italic">
              Example: 50mm Lens = 1/50s or faster.
            </p>
          </div>

          {/* Fast vs Slow Shutter Speed */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 bg-orange-50 rounded-lg border-t-4 border-orange-500">
              <h5 className="text-lg font-bold text-orange-600 mb-3">Fast (1/500s+)</h5>
              <p className="text-gray-700 mb-4">
                Freezes action and sharpens moving subjects. Lets in less light.
              </p>
              <p className="text-sm text-gray-600">
                Perfect for sports, wildlife, children, anything in motion.
              </p>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg border-t-4 border-purple-600">
              <h5 className="text-lg font-bold text-purple-600 mb-3">Slow (1/4s+)</h5>
              <p className="text-gray-700 mb-4">
                Blurs motion (water, clouds) for creative effect. Lets in more light.
              </p>
              <p className="text-sm text-gray-600">
                Perfect for waterfalls, light trails, night scenes, creative blur.
              </p>
            </div>
          </div>

          {/* Interaction Note */}
          <div className="p-4 bg-slate-100 rounded-lg border-l-4 border-slate-600 mb-6">
            <p className="text-sm text-gray-700">
              <strong className="text-slate-800">Interaction Note:</strong> Fast shutter speeds often require a higher ISO or a wider aperture to compensate for the reduced light duration.
            </p>
          </div>

          {/* Common Shutter Speed Values */}
          <div className="p-4 bg-white rounded border border-slate-300">
            <p className="font-semibold text-gray-900 mb-2">Common Shutter Speed Values:</p>
            <p className="text-sm text-gray-700">1/8000s • 1/4000s • 1/2000s • 1/1000s • 1/500s • 1/250s • 1/125s • 1/60s • 1/30s • 1/15s • 1s • 5s • 30s</p>
            <p className="text-sm text-gray-600 mt-2 italic">Each doubling of time (e.g., 1/250s to 1/125s) equals one "stop" of light</p>
          </div>
        </div>

        {/* Understanding Aperture in Detail */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <h4 className="text-2xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            Aperture: <span className="text-fuchsia-600">The Lens Opening</span> <span className="text-orange-600">& DOF</span>
          </h4>

          {/* Large vs Small Aperture */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 bg-pink-50 rounded-lg border-t-4 border-orange-500">
              <h5 className="text-lg font-bold text-orange-600 mb-3">Large Aperture</h5>
              <p className="text-xl font-semibold text-gray-900 mb-3">Small f-number (e.g., f/2.8)</p>
              <p className="text-gray-700">
                The iris is wide open, allowing a high volume of light to hit the sensor. This creates a <strong>Shallow Depth of Field</strong>, where the subject is sharp but the background is blurred.
              </p>
            </div>

            <div className="p-5 bg-blue-50 rounded-lg border-t-4 border-blue-600">
              <h5 className="text-lg font-bold text-orange-600 mb-3">Small Aperture</h5>
              <p className="text-xl font-semibold text-gray-900 mb-3">Large f-number (e.g., f/16)</p>
              <p className="text-gray-700">
                The iris is narrowed, significantly reducing the light volume. This results in a <strong>Deep Depth of Field</strong>, ensuring sharpness from the foreground all the way to the background.
              </p>
            </div>
          </div>

          {/* The Trade-off */}
          <div className="mb-6 p-5 bg-gray-900 text-white rounded-lg border-l-4 border-blue-600">
            <h5 className="text-lg font-semibold text-orange-500 mb-3">The Trade-off</h5>
            <p className="text-base">
              Closing the aperture (higher f-number) reduces light. To maintain exposure, you must compensate by using a <strong>slower shutter speed</strong> or <strong>increasing the ISO</strong>.
            </p>
          </div>

          {/* Common Aperture Values */}
          <div className="p-4 bg-white rounded border border-pink-200">
            <p className="font-semibold text-gray-900 mb-2">Common Aperture Values:</p>
            <p className="text-sm text-gray-700">f/1.4 • f/2 • f/2.8 • f/4 • f/5.6 • f/8 • f/11 • f/16 • f/22</p>
            <p className="text-sm text-gray-600 mt-2 italic">Each step equals one "stop" of light (e.g., f/2.8 to f/4)</p>
          </div>
        </div>

        {/* Understanding PSAM Modes */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <h4 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            PSAM: <span className="text-fuchsia-600">Taking Control</span>
          </h4>
          <p className="text-gray-700 mb-6">
            Understanding when to let the camera help and when to take full manual command of your exposure.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg border-t-4 border-violet-600">
              <h5 className="text-xl font-bold text-gray-900 mb-3">P (Program)</h5>
              <p className="text-gray-700 mb-3">
                <strong>Camera decides:</strong> Aperture + Shutter Speed
              </p>
              <p className="text-gray-700 mb-3">
                <strong>You control:</strong> ISO, Exposure Compensation, White Balance
              </p>
              <p className="text-sm text-gray-600 italic">
                Best for: Quick shooting when lighting changes fast
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border-t-4 border-cyan-600">
              <h5 className="text-xl font-bold text-gray-900 mb-3">S/Tv (Shutter Priority)</h5>
              <p className="text-gray-700 mb-3">
                <strong>You control:</strong> Shutter Speed
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Camera decides:</strong> Aperture
              </p>
              <p className="text-sm text-gray-600 italic">
                Best for: Sports, action, motion control
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg border-t-4 border-pink-600">
              <h5 className="text-xl font-bold text-gray-900 mb-3">A/Av (Aperture Priority)</h5>
              <p className="text-gray-700 mb-3">
                <strong>You control:</strong> Aperture (Depth of Field)
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Camera decides:</strong> Shutter Speed
              </p>
              <p className="text-sm text-gray-600 italic">
                Best for: Portraits, landscapes, depth of field control
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border-t-4 border-orange-600">
              <h5 className="text-xl font-bold text-gray-900 mb-3">M (Manual)</h5>
              <p className="text-gray-700 mb-3">
                <strong>You control:</strong> Everything (Aperture + Shutter Speed + ISO)
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Camera decides:</strong> Nothing (you're in full control)
              </p>
              <p className="text-sm text-gray-600 italic">
                Best for: Studio, consistent lighting, full creative control
              </p>
            </div>
          </div>
        </div>

        {/* Homework Assignment */}
        <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-6 sm:p-8 shadow-sm">
          <h4 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Homework: <span className="text-orange-600">The PSAM Challenge</span>
          </h4>
          <p className="text-gray-700 mb-6">
            Capture <strong>one image in each of the four exposure modes</strong> (P, S/Tv, A/Av, M). Document your camera settings for each shot: Aperture, Shutter Speed, and ISO.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Submission Requirements</h5>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• 4 images total (one per mode)</li>
                <li>• Label each image with the mode used</li>
                <li>• Include camera settings (Aperture, Shutter, ISO)</li>
                <li>• Upload to Google Drive by Sunday evening</li>
              </ul>
            </div>

            <div className="p-5 bg-white rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Evaluation Criteria</h5>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Correct use of each exposure mode</li>
                <li>• Proper exposure (not too dark/light)</li>
                <li>• Clear subject matter</li>
                <li>• Understanding demonstrated through settings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
