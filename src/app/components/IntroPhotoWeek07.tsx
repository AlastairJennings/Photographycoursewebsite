import { Link } from 'react-router';
import { ArrowLeft, BookOpen, Camera, Eye, Target, Lightbulb, CheckCircle2 } from 'lucide-react';

// Week 07: Metering and Exposure Control
export function IntroPhotoWeek07() {
  return (
    <div className="bg-gradient-to-br from-violet-50/30 via-white to-purple-50/30 min-h-screen">
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
          <div className="flex items-center gap-3 mb-4">
            <span className="text-6xl font-bold text-gray-300">07</span>
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">Session 07 // Metering & Exposure Control</span>
          </div>
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Metering & Exposure Control
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Precision Light Measurement & Creative Override
          </p>
        </div>

        {/* 10-Week Roadmap */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">The 10-Week Roadmap</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Course Overview
            </h4>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-semibold text-gray-400 mb-1">Week 01</div>
              <div className="text-xs text-gray-600">Camera Basics</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-semibold text-gray-400 mb-1">Week 02</div>
              <div className="text-xs text-gray-600">Exposure Triangle</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-semibold text-gray-400 mb-1">Week 03</div>
              <div className="text-xs text-gray-600">Composition</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-semibold text-gray-400 mb-1">Week 04</div>
              <div className="text-xs text-gray-600">Light & Lighting</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-semibold text-gray-400 mb-1">Week 05</div>
              <div className="text-xs text-gray-600">Focus & Depth</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-semibold text-gray-400 mb-1">Week 06</div>
              <div className="text-xs text-gray-600">Color & White Balance</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg border-2 border-violet-700 shadow-md">
              <div className="text-sm font-semibold text-white mb-1">Week 07</div>
              <div className="text-xs text-violet-100 font-medium">Metering & Exposure</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-semibold text-gray-400 mb-1">Week 08</div>
              <div className="text-xs text-gray-600">Advanced Editing</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-semibold text-gray-400 mb-1">Week 09</div>
              <div className="text-xs text-gray-600">Visual Storytelling</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-semibold text-gray-400 mb-1">Week 10</div>
              <div className="text-xs text-gray-600">Portfolio & Project</div>
            </div>
          </div>
        </div>

        {/* Today's Agenda */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">Today's Agenda</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Session Overview
            </h4>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-violet-50 rounded-lg border border-violet-100">
              <div className="flex items-center gap-3 mb-2">
                <Eye className="w-5 h-5 text-violet-600" />
                <h5 className="font-semibold text-gray-900">Student Review: Focus Portfolio</h5>
              </div>
              <p className="text-sm text-gray-600">Reviewing focus techniques from last week's assignment</p>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg border border-purple-100">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-5 h-5 text-purple-600" />
                <h5 className="font-semibold text-gray-900">What is Metering? (The 18% Gray)</h5>
              </div>
              <p className="text-sm text-gray-600">Understanding how cameras measure light</p>
            </div>

            <div className="p-5 bg-fuchsia-50 rounded-lg border border-fuchsia-100">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-fuchsia-600" />
                <h5 className="font-semibold text-gray-900">Metering Modes Explained</h5>
              </div>
              <p className="text-sm text-gray-600">Evaluative, Center-Weighted, and Spot metering</p>
            </div>

            <div className="p-5 bg-pink-50 rounded-lg border border-pink-100">
              <div className="flex items-center gap-3 mb-2">
                <Camera className="w-5 h-5 text-pink-600" />
                <h5 className="font-semibold text-gray-900">Reading the Exposure Meter</h5>
              </div>
              <p className="text-sm text-gray-600">Understanding your camera's exposure scale</p>
            </div>

            <div className="p-5 bg-violet-50 rounded-lg border border-violet-100">
              <div className="flex items-center gap-3 mb-2">
                <Lightbulb className="w-5 h-5 text-violet-600" />
                <h5 className="font-semibold text-gray-900">Exposure Compensation Logic</h5>
              </div>
              <p className="text-sm text-gray-600">When and how to override the camera meter</p>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg border border-purple-100">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600" />
                <h5 className="font-semibold text-gray-900">Practical Task & Homework</h5>
              </div>
              <p className="text-sm text-gray-600">Hands-on metering mastery challenge</p>
            </div>
          </div>
        </div>

        {/* What is Metering? */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-purple-600 font-semibold">Section_01 // Fundamentals</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              What is Metering?
            </h4>
          </div>

          <div className="prose max-w-none">
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-6">
              <p className="text-gray-800 font-medium mb-2">THE TECHNICAL CONCEPT</p>
              <p className="text-gray-700">
                <strong>Metering</strong> is the process by which your camera measures the amount of light in a scene to calculate the "correct" exposure settings.
              </p>
            </div>

            <h5 className="text-xl font-semibold text-gray-900 mb-4">The Four Exposure Modes</h5>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg border border-violet-200">
                <h6 className="font-semibold text-violet-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center text-sm">P</span>
                  Program Mode
                </h6>
                <p className="text-sm text-gray-700 mb-2"><strong>You control:</strong> Nothing (camera decides both)</p>
                <p className="text-sm text-gray-700"><strong>Camera controls:</strong> Aperture + Shutter Speed</p>
              </div>

              <div className="p-5 bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-lg border border-purple-200">
                <h6 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm">A</span>
                  Aperture Priority (Av/A)
                </h6>
                <p className="text-sm text-gray-700 mb-2"><strong>You control:</strong> Aperture (depth of field)</p>
                <p className="text-sm text-gray-700"><strong>Camera controls:</strong> Shutter Speed</p>
              </div>

              <div className="p-5 bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-lg border border-fuchsia-200">
                <h6 className="font-semibold text-fuchsia-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-fuchsia-600 text-white flex items-center justify-center text-sm">S</span>
                  Shutter Priority (Tv/S)
                </h6>
                <p className="text-sm text-gray-700 mb-2"><strong>You control:</strong> Shutter Speed (motion)</p>
                <p className="text-sm text-gray-700"><strong>Camera controls:</strong> Aperture</p>
              </div>

              <div className="p-5 bg-gradient-to-br from-pink-50 to-violet-50 rounded-lg border border-pink-200">
                <h6 className="font-semibold text-pink-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center text-sm">M</span>
                  Manual Mode
                </h6>
                <p className="text-sm text-gray-700 mb-2"><strong>You control:</strong> Aperture + Shutter Speed</p>
                <p className="text-sm text-gray-700"><strong>Camera controls:</strong> Nothing (full control)</p>
              </div>
            </div>

            <div className="bg-violet-50 p-6 rounded-lg border border-violet-200">
              <p className="text-gray-800 font-medium mb-2">💡 KEY INSIGHT</p>
              <p className="text-gray-700">
                In Program, Aperture Priority, and Shutter Priority modes, the camera uses its <strong>metering system</strong> to automatically set the exposure values you don't control. Understanding metering helps you predict and override these decisions.
              </p>
            </div>
          </div>
        </div>

        {/* The 18% Gray Rule */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-purple-600 font-semibold">Section_02 // Core Principle</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              The 18% Gray Rule
            </h4>
          </div>

          <div className="bg-gradient-to-r from-gray-800 via-gray-500 to-gray-200 p-8 rounded-lg mb-6">
            <p className="text-white text-center text-lg font-semibold mb-2">THE CORE RULE</p>
            <p className="text-white text-center text-2xl font-bold" style={{ fontFamily: 'Roslindale, serif' }}>
              Camera meters are "colorblind"
            </p>
          </div>

          <div className="prose max-w-none">
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-6">
              <p className="text-gray-800 font-medium mb-3">THE FUNDAMENTAL ASSUMPTION</p>
              <p className="text-gray-700 mb-3">
                Your camera's light meter operates on a simple assumption: <strong>everything it sees should average to a middle tone of gray</strong> — specifically, 18% gray (also called "middle gray").
              </p>
              <p className="text-gray-700">
                This means that no matter what you point your camera at — a white wall, a black cat, a colorful sunset — the meter will calculate exposure settings that render it as middle gray.
              </p>
            </div>

            <h5 className="text-xl font-semibold text-gray-900 mb-4">Why This Matters</h5>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-5 bg-white border-2 border-gray-300 rounded-lg">
                <div className="text-center mb-3">
                  <div className="w-full h-24 bg-white border border-gray-300 rounded mb-2"></div>
                  <p className="text-sm font-semibold text-gray-900">White Subject</p>
                </div>
                <p className="text-xs text-gray-600 text-center">
                  Camera will <strong>underexpose</strong> to turn white → gray
                </p>
              </div>

              <div className="p-5 bg-gray-100 border-2 border-purple-600 rounded-lg">
                <div className="text-center mb-3">
                  <div className="w-full h-24 bg-gray-400 rounded mb-2"></div>
                  <p className="text-sm font-semibold text-gray-900">Gray Subject (18%)</p>
                </div>
                <p className="text-xs text-gray-600 text-center">
                  Camera will <strong>expose correctly</strong> ✓
                </p>
              </div>

              <div className="p-5 bg-white border-2 border-gray-300 rounded-lg">
                <div className="text-center mb-3">
                  <div className="w-full h-24 bg-gray-900 rounded mb-2"></div>
                  <p className="text-sm font-semibold text-gray-900">Black Subject</p>
                </div>
                <p className="text-xs text-gray-600 text-center">
                  Camera will <strong>overexpose</strong> to turn black → gray
                </p>
              </div>
            </div>

            <div className="bg-violet-50 p-6 rounded-lg border border-violet-200">
              <p className="text-gray-800 font-medium mb-2">🎯 THE SOLUTION</p>
              <p className="text-gray-700">
                Understanding the 18% gray rule allows you to <strong>predict when your camera will be fooled</strong> and use exposure compensation or manual mode to override its decisions and achieve your creative vision.
              </p>
            </div>
          </div>
        </div>

        {/* Student Review: Focus Portfolio */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-fuchsia-600 font-semibold">Section_03 // Portfolio Review</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Student Review: Focus Portfolio
            </h4>
            <p className="text-gray-600 mt-2">
              Critical feedback on Week 06 submissions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg border border-violet-200">
              <h5 className="font-semibold text-violet-900 mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Focus Intent
              </h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1 flex-shrink-0">•</span>
                  <span>Was the primary subject clearly in focus?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1 flex-shrink-0">•</span>
                  <span>Did the depth of field support the subject?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1 flex-shrink-0">•</span>
                  <span>Was bokeh used effectively?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1 flex-shrink-0">•</span>
                  <span>Did focus point placement guide the viewer?</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-lg border border-purple-200">
              <h5 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Visual Balance
              </h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                  <span>Did sharp and soft areas balance well?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                  <span>Was background blur complementary?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                  <span>Did focal plane separation create depth?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                  <span>Were distractions minimized?</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-lg border border-fuchsia-200">
              <h5 className="font-semibold text-fuchsia-900 mb-3 flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Perspective Shift
              </h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-600 mt-1 flex-shrink-0">•</span>
                  <span>Did the chosen perspective enhance the story?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-600 mt-1 flex-shrink-0">•</span>
                  <span>Was foreground/background used intentionally?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-600 mt-1 flex-shrink-0">•</span>
                  <span>Did the angle create visual interest?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-600 mt-1 flex-shrink-0">•</span>
                  <span>Was compression or expansion used well?</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-purple-50 p-6 rounded-lg border border-purple-200">
            <p className="text-gray-800 font-medium mb-2">📊 COMMON OBSERVATIONS</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span><strong>Strong:</strong> Most students successfully isolated subjects with shallow depth of field</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">✓</span>
                <span><strong>Strong:</strong> Creative use of focus points to guide viewer attention</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">⚠</span>
                <span><strong>Needs work:</strong> Some images showed unintentional focus on background elements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600">⚠</span>
                <span><strong>Needs work:</strong> A few submissions had inconsistent sharpness (possible camera shake)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ambient vs Reflective Metering */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-purple-600 font-semibold">Section_04 // Metering Types</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Two Approaches to Metering
            </h4>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Ambient Light Metering */}
            <div className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg border-2 border-violet-300">
              <div className="mb-4">
                <h5 className="text-xl font-semibold text-violet-900 mb-2">Ambient Light Metering</h5>
                <p className="text-sm text-gray-700 italic">Incident Light / Handheld Meter</p>
              </div>

              <div className="bg-white p-4 rounded-lg mb-4 border border-violet-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">HOW IT WORKS</p>
                <p className="text-sm text-gray-700">
                  Measures the light <strong>falling on</strong> the subject using a white translucent dome. The meter is placed at the subject position, pointing back toward the camera.
                </p>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">✓ ADVANTAGES</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 mt-0.5">•</span>
                    <span>Highly accurate and consistent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 mt-0.5">•</span>
                    <span>Not fooled by subject color or reflectance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 mt-0.5">•</span>
                    <span>Ideal for studio and controlled lighting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 mt-0.5">•</span>
                    <span>Used by professional photographers</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">✗ DISADVANTAGES</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-0.5">•</span>
                    <span>Requires placing meter at subject position</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-0.5">•</span>
                    <span>Not practical for distant or moving subjects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-0.5">•</span>
                    <span>Requires additional equipment (handheld meter)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Reflective Light Metering */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-lg border-2 border-purple-300">
              <div className="mb-4">
                <h5 className="text-xl font-semibold text-purple-900 mb-2">Reflective Light Metering</h5>
                <p className="text-sm text-gray-700 italic">TTL (Through The Lens) / Camera Meter</p>
              </div>

              <div className="bg-white p-4 rounded-lg mb-4 border border-purple-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">HOW IT WORKS</p>
                <p className="text-sm text-gray-700">
                  Measures the light <strong>reflecting off</strong> the subject, as seen through the camera lens. This is what your camera's built-in meter uses.
                </p>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">✓ ADVANTAGES</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-0.5">•</span>
                    <span>Can be done from camera position</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-0.5">•</span>
                    <span>Works for distant or inaccessible subjects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-0.5">•</span>
                    <span>Built into every camera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-0.5">•</span>
                    <span>Fast and convenient for field work</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">✗ DISADVANTAGES</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-0.5">•</span>
                    <span>Fooled by subject reflectance (18% gray rule applies)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-0.5">•</span>
                    <span>Affected by subject color and brightness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-0.5">•</span>
                    <span>Requires understanding and compensation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-violet-50 p-6 rounded-lg border border-violet-200">
            <p className="text-gray-800 font-medium mb-2">💡 FOR THIS COURSE</p>
            <p className="text-gray-700">
              We'll focus on <strong>reflective light metering</strong> — the system built into your camera. Understanding how it works (and when it fails) is essential for controlling exposure in any lighting situation.
            </p>
          </div>
        </div>

        {/* Introduction to Light Meters */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">Precision Tools // External Metering</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Introduction to Light Meters
            </h4>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column: Why Use External Meters */}
            <div className="space-y-6">
              <div>
                <h5 className="text-lg font-semibold text-orange-600 mb-3">WHY USE AN EXTERNAL METER?</h5>
                <p className="text-gray-700">
                  While in-camera meters are powerful, external meters offer superior precision, consistency, and the ability to measure incident light directly.
                </p>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-orange-600 mb-3">INCIDENT VS. REFLECTIVE</h5>
                <p className="text-gray-700">
                  External meters allow you to measure the light falling on the subject (incident), which is independent of the subject's colour or reflectance.
                </p>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-orange-600 mb-3">STUDIO STANDARD</h5>
                <p className="text-gray-700">
                  In controlled studio environments, an external light meter is essential for balancing multiple light sources with pinpoint accuracy.
                </p>
              </div>
            </div>

            {/* Right Column: Hardware Spotlight */}
            <div>
              <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold block mb-3">Hardware Spotlight</span>
              <div className="border-2 border-gray-900 p-6 rounded-lg mb-4">
                <h5 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
                  Sekonic L-308S
                </h5>
                <p className="text-gray-700 mb-4">
                  The Sekonic L-308S is a compact, versatile, and industry-standard light meter. It is perfect for beginners and professionals alike, offering both ambient and flash metering capabilities.
                </p>
              </div>

              <div className="bg-gray-900 text-white p-6 rounded-lg">
                <h6 className="text-sm font-semibold text-orange-500 mb-4 uppercase tracking-wider">Key Features</h6>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Ambient and Flash Metering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Incident and Reflective Modes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Compact and Lightweight Design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Easy-to-Read Digital Display</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient vs Reflective Light Metering */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">Metering Techniques</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Ambient vs Reflective Light Metering
            </h4>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ambient Light Metering */}
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <span className="text-xs uppercase tracking-wider text-blue-600 font-semibold block mb-3">Metering Techniques</span>
              <h5 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
                Ambient Light Metering
              </h5>
              <p className="text-gray-700 mb-6">
                Ambient (incident) light metering measures the light falling on the subject. The Sekonic L-Sekonic L-308S uses a white dome (lumisphere) to collect light from all directions, providing an exposure value that is independent of the subject's reflectance.
              </p>

              <div className="mb-4">
                <h6 className="font-semibold text-gray-900 mb-2">ADVANTAGES:</h6>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Highly accurate, especially in complex lighting.</li>
                  <li>• Not fooled by subject's colour or brightness.</li>
                  <li>• Ideal for studio lighting and consistent results.</li>
                </ul>
              </div>

              <div>
                <h6 className="font-semibold text-gray-900 mb-2">DISADVANTAGES:</h6>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Requires placing the meter at the subject's position.</li>
                  <li>• Can be impractical for distant or dangerous subjects.</li>
                </ul>
              </div>
            </div>

            {/* Reflective Light Metering */}
            <div className="border-2 border-orange-500 rounded-lg p-6 bg-orange-50/30">
              <span className="text-xs uppercase tracking-wider text-orange-600 font-semibold block mb-3">Metering Techniques</span>
              <h5 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
                Reflective Light Metering
              </h5>
              <p className="text-gray-700 mb-6">
                Reflective light metering measures the light reflecting off the subject. The Sekonic L-308S can be used in this mode by retracting its lumisphere and pointing it at the subject, similar to an in-camera meter.
              </p>

              <div className="mb-4">
                <h6 className="font-semibold text-gray-900 mb-2">ADVANTAGES:</h6>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Can be done from the camera position.</li>
                  <li>• Useful for subjects that are inaccessible.</li>
                  <li>• Good for measuring specific areas of a scene.</li>
                </ul>
              </div>

              <div>
                <h6 className="font-semibold text-gray-900 mb-2">DISADVANTAGES:</h6>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Can be fooled by subject's reflectance (18% gray rule applies).</li>
                  <li>• Less accurate than ambient metering in varied scenes.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-500 italic">
            MOD_07 // PG_07 // AMBIENT_REFLECTIVE_METERING_V3
          </div>
        </div>

        {/* Metering Modes Explained */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">Technical Breakdown</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Metering Modes Explained
            </h4>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Mode 01: Evaluative/Matrix */}
            <div className="border-t-4 border-orange-500 p-6 bg-gray-50 rounded-lg">
              <span className="text-sm font-bold text-orange-600 block mb-3">01</span>
              <h5 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, serif' }}>
                Evaluative / Matrix
              </h5>
              <p className="text-sm text-gray-700 mb-4">
                The standard setting. Evaluates the entire scene based on content and complexity for general shooting and balanced lighting.
              </p>
              
              <div className="bg-white p-4 rounded border border-gray-200">
                <p className="text-xs font-semibold text-gray-600 mb-2">MANUFACTURER TERMS</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li><strong>CANON:</strong> Evaluative</li>
                  <li><strong>NIKON:</strong> Matrix</li>
                  <li><strong>SONY:</strong> Multi Pattern</li>
                </ul>
              </div>
            </div>

            {/* Mode 02: Center-Weighted */}
            <div className="border-t-4 border-orange-500 p-6 bg-gray-50 rounded-lg">
              <span className="text-sm font-bold text-orange-600 block mb-3">02</span>
              <h5 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, serif' }}>
                Center-Weighted
              </h5>
              <p className="text-sm text-gray-700 mb-4">
                Prioritizes the center of the frame (approx. 60-80%). Great for subjects in the middle, but less effective for off-center compositions.
              </p>
              
              <div className="bg-white p-4 rounded border border-gray-200">
                <p className="text-xs font-semibold text-gray-600 mb-2">BEST USE CASE</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Traditional Portraits</li>
                  <li>• Central Subjects</li>
                  <li>• Consistent Lighting</li>
                </ul>
              </div>
            </div>

            {/* Mode 03: Spot Metering */}
            <div className="border-t-4 border-orange-500 p-6 bg-gray-50 rounded-lg">
              <span className="text-sm font-bold text-orange-600 block mb-3">03</span>
              <h5 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, serif' }}>
                Spot Metering
              </h5>
              <p className="text-sm text-gray-700 mb-4">
                Measures a tiny area (1-5%) of the frame. Essential for high-contrast scenes, backlit subjects, or precise portrait exposure.
              </p>
              
              <div className="bg-white p-4 rounded border border-gray-200">
                <p className="text-xs font-semibold text-gray-600 mb-2">PRECISION CONTROL</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li><strong>USE:</strong> High Contrast</li>
                  <li><strong>PRECISION:</strong> 100%</li>
                  <li><strong>TARGET:</strong> Specific Tones</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-500 italic">
            TECHNICAL_REF: METERING_MODES_V1.07 // SESSION_07_PRECISION
          </div>
        </div>

        {/* Reading the Exposure Meter - Enhanced Detail */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">Technical Interface</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Reading the Exposure Meter
            </h4>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column: Technical Interface */}
            <div className="space-y-6">
              <div className="bg-gray-50 border-l-4 border-orange-500 p-5">
                <span className="text-sm font-bold text-orange-600 block mb-2">01</span>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">The Zero Point</h5>
                <p className="text-sm text-gray-700">
                  The center mark represents the camera's calculation of "correct" exposure based on the 18% neutral gray baseline.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-orange-500 p-5">
                <span className="text-sm font-bold text-orange-600 block mb-2">02</span>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">The Stop Scale</h5>
                <p className="text-sm text-gray-700">
                  Numbers (1, 2, 3) represent full stops. Small notches between them represent 1/3 or 1/2 stop increments.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-orange-500 p-5">
                <span className="text-sm font-bold text-orange-600 block mb-2">03</span>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">Over/Under Exposure</h5>
                <p className="text-sm text-gray-700">
                  The "+" side indicates the image is too bright (overexposed); the "-" side indicates it is too dark (underexposed).
                </p>
              </div>
            </div>

            {/* Right Column: Visual Reference */}
            <div>
              <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold block mb-4">Visual Reference</span>
              <div className="bg-gray-900 p-8 rounded-lg">
                <h5 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
                  The Exposure Scale
                </h5>
                
                {/* Visual Scale */}
                <div className="relative h-24 bg-gradient-to-r from-black via-gray-500 to-white rounded mb-3">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-full bg-orange-500"></div>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-400">Underexposed</span>
                  <span className="text-sm font-bold text-orange-500">0</span>
                  <span className="text-sm text-gray-400">Overexposed</span>
                </div>

                <p className="text-xs text-gray-400">
                  This scale is visible in your viewfinder and on your LCD screen. It provides real-time feedback on your exposure settings relative to the camera's metering.
                </p>
              </div>

              <div className="mt-4 text-xs text-gray-500 italic">
                MOD_07 // PG_07 // VIEWFINDER_METER_V1
              </div>
            </div>
          </div>
        </div>

        {/* Reading the Exposure Meter */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-purple-600 font-semibold">Section_05 // Camera Interface</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Reading the Exposure Meter
            </h4>
            <p className="text-gray-600 mt-2">
              Understanding your camera's exposure scale
            </p>
          </div>

          <div className="prose max-w-none">
            <div className="bg-gray-50 p-8 rounded-lg mb-6 border border-gray-300">
              <div className="text-center mb-6">
                <p className="text-sm font-semibold text-gray-600 mb-4">THE EXPOSURE SCALE</p>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className="text-xs text-gray-500">-3</span>
                  <span className="text-xs text-gray-500 ml-2">-2</span>
                  <span className="text-xs text-gray-500 ml-2">-1</span>
                  <span className="text-sm font-bold text-violet-600 ml-3">0</span>
                  <span className="text-xs text-gray-500 ml-3">+1</span>
                  <span className="text-xs text-gray-500 ml-2">+2</span>
                  <span className="text-xs text-gray-500 ml-2">+3</span>
                </div>
                <div className="relative h-3 bg-gradient-to-r from-gray-900 via-gray-400 to-white rounded-full max-w-md mx-auto border border-gray-300">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-6 bg-violet-600"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-600 mt-2 max-w-md mx-auto">
                  <span>Underexposed</span>
                  <span className="font-semibold text-violet-600">Correct</span>
                  <span>Overexposed</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="p-6 bg-violet-50 rounded-lg border border-violet-200">
                <h5 className="font-semibold text-violet-900 mb-3">The Zero Point</h5>
                <p className="text-sm text-gray-700">
                  The center mark <strong>(0)</strong> represents "correct" exposure based on the camera's meter and the 18% gray baseline. When the indicator is at zero, the camera believes the image will be properly exposed.
                </p>
              </div>

              <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-900 mb-3">The Stop Scale</h5>
                <p className="text-sm text-gray-700">
                  Numbers like <strong>1, 2, 3</strong> represent full stops of light. Small tick marks between them represent <strong>1/3 or 1/2 stop increments</strong>, depending on your camera settings.
                </p>
              </div>

              <div className="p-6 bg-fuchsia-50 rounded-lg border border-fuchsia-200">
                <h5 className="font-semibold text-fuchsia-900 mb-3">Over/Under Exposure</h5>
                <p className="text-sm text-gray-700">
                  The <strong>"+" side</strong> indicates overexposure (too bright). The <strong>"-" side</strong> indicates underexposure (too dark). Your goal is to position the indicator where you want it.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6">
              <p className="text-gray-800 font-medium mb-2">🎯 IN PRACTICE</p>
              <p className="text-gray-700 mb-3">
                In <strong>Manual mode</strong>, you adjust aperture, shutter speed, and ISO until the meter reads where you want it (usually zero, but not always).
              </p>
              <p className="text-gray-700">
                In <strong>Aperture Priority or Shutter Priority</strong>, the camera automatically adjusts the other value to keep the meter at zero. If you use exposure compensation, the camera shifts the target away from zero.
              </p>
            </div>
          </div>
        </div>

        {/* Metering Modes Explained */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-purple-600 font-semibold">Section_06 // Camera Settings</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Metering Modes Explained
            </h4>
            <p className="text-gray-600 mt-2">
              How your camera analyzes the scene
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Evaluative/Matrix */}
            <div className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg border-2 border-violet-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto bg-violet-600 rounded-lg flex items-center justify-center mb-3">
                  <div className="grid grid-cols-3 gap-0.5">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-white rounded-sm"></div>
                    ))}
                  </div>
                </div>
                <h5 className="text-xl font-semibold text-violet-900">Evaluative / Matrix</h5>
                <p className="text-xs text-gray-600 mt-1">Standard Setting</p>
              </div>

              <div className="bg-white p-4 rounded-lg mb-4 border border-violet-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">HOW IT WORKS</p>
                <p className="text-sm text-gray-700">
                  Evaluates the <strong>entire scene</strong>, dividing it into zones and analyzing brightness, color, and focus point location. The camera uses algorithms to make an "intelligent" exposure decision.
                </p>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Camera Brands</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><strong>Canon:</strong> Evaluative</li>
                  <li><strong>Nikon:</strong> Matrix</li>
                  <li><strong>Sony:</strong> Multi Pattern</li>
                </ul>
              </div>

              <div className="bg-violet-100 p-3 rounded-lg">
                <p className="text-xs font-semibold text-violet-900 mb-1">BEST FOR</p>
                <ul className="space-y-0.5 text-xs text-gray-700">
                  <li>• General photography</li>
                  <li>• Evenly lit scenes</li>
                  <li>• Beginners</li>
                  <li>• When you trust the camera</li>
                </ul>
              </div>
            </div>

            {/* Center-Weighted */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-lg border-2 border-purple-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto bg-purple-600 rounded-lg flex items-center justify-center mb-3">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 bg-purple-300 rounded-lg opacity-30"></div>
                    <div className="absolute inset-3 bg-white rounded-lg"></div>
                  </div>
                </div>
                <h5 className="text-xl font-semibold text-purple-900">Center-Weighted</h5>
                <p className="text-xs text-gray-600 mt-1">Traditional Setting</p>
              </div>

              <div className="bg-white p-4 rounded-lg mb-4 border border-purple-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">HOW IT WORKS</p>
                <p className="text-sm text-gray-700">
                  Prioritizes the <strong>center 60-80%</strong> of the frame, with sensitivity falling off toward the edges. Great when your subject is in the middle of the frame.
                </p>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Classic Use Cases</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Traditional portraits</li>
                  <li>• Central subjects</li>
                  <li>• Consistent lighting</li>
                </ul>
              </div>

              <div className="bg-purple-100 p-3 rounded-lg">
                <p className="text-xs font-semibold text-purple-900 mb-1">BEST FOR</p>
                <ul className="space-y-0.5 text-xs text-gray-700">
                  <li>• Portraits</li>
                  <li>• Center-composed shots</li>
                  <li>• Predictable exposure</li>
                  <li>• When edges don't matter</li>
                </ul>
              </div>
            </div>

            {/* Spot Metering */}
            <div className="p-6 bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-lg border-2 border-fuchsia-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto bg-fuchsia-600 rounded-lg flex items-center justify-center mb-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h5 className="text-xl font-semibold text-fuchsia-900">Spot Metering</h5>
                <p className="text-xs text-gray-600 mt-1">Precision Setting</p>
              </div>

              <div className="bg-white p-4 rounded-lg mb-4 border border-fuchsia-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">HOW IT WORKS</p>
                <p className="text-sm text-gray-700">
                  Measures a <strong>tiny area (1-5%)</strong> of the frame, typically tied to the active focus point. Ignores everything else. Essential for high-contrast scenes.
                </p>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Precision Metrics</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• <strong>Coverage:</strong> 1-5% of frame</li>
                  <li>• <strong>Precision:</strong> 100%</li>
                  <li>• <strong>Target:</strong> Specific tones</li>
                </ul>
              </div>

              <div className="bg-fuchsia-100 p-3 rounded-lg">
                <p className="text-xs font-semibold text-fuchsia-900 mb-1">BEST FOR</p>
                <ul className="space-y-0.5 text-xs text-gray-700">
                  <li>• High contrast scenes</li>
                  <li>• Backlit subjects</li>
                  <li>• Stage/performance lighting</li>
                  <li>• Maximum control</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-violet-50 p-6 rounded-lg border border-violet-200">
            <p className="text-gray-800 font-medium mb-2">🎯 WHICH MODE TO USE?</p>
            <p className="text-gray-700">
              <strong>Evaluative/Matrix:</strong> Start here for most situations. <strong>Spot:</strong> Use when you need precise control or have extreme contrast. <strong>Center-Weighted:</strong> A reliable middle ground for portraits and centered subjects.
            </p>
          </div>
        </div>

        {/* Exposure Compensation */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-purple-600 font-semibold">Section_07 // Creative Override</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Exposure Compensation
            </h4>
            <p className="text-gray-600 mt-2">
              Overriding the camera when it's fooled
            </p>
          </div>

          <div className="prose max-w-none">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-violet-50 rounded-lg border-2 border-violet-300">
                <h5 className="text-lg font-semibold text-violet-900 mb-3">THE LOGIC</h5>
                <p className="text-sm text-gray-700">
                  Exposure compensation allows you to <strong>override the camera's meter</strong> when it is being "fooled" by extreme brightness or darkness. You're telling the camera: "Make this brighter/darker than you think it should be."
                </p>
              </div>

              <div className="p-6 bg-purple-50 rounded-lg border-2 border-purple-300">
                <h5 className="text-lg font-semibold text-purple-900 mb-3">THE CONTROL</h5>
                <p className="text-sm text-gray-700 mb-3">
                  Look for the <strong>[+/-]</strong> button or dial on your camera. It works in:
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Aperture Priority (A/Av)</li>
                  <li>• Shutter Priority (S/Tv)</li>
                  <li>• Program Mode (P)</li>
                  <li className="text-gray-500 italic">✗ Not in Manual Mode (M)</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6 rounded-lg mb-6 text-white">
              <h5 className="text-lg font-semibold mb-2">THE GOAL</h5>
              <p className="text-sm">
                To tell the camera that the scene should be <strong>brighter or darker than the standard 18% middle gray</strong>. This compensates for the camera's tendency to turn everything into gray.
              </p>
            </div>

            <h5 className="text-xl font-semibold text-gray-900 mb-4">PRACTICAL SCENARIOS</h5>

            <div className="grid md:grid-cols-2 gap-6">
              {/* The Snow Test */}
              <div className="border-2 border-violet-300 rounded-lg overflow-hidden">
                <div className="bg-violet-600 text-white p-4">
                  <h6 className="font-semibold text-lg">The Snow Test (+)</h6>
                  <p className="text-sm text-violet-100 mt-1">Bright scenes need positive compensation</p>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-2">BEFORE (0 Compensation)</p>
                    <div className="bg-gray-400 h-32 rounded-lg mb-2 flex items-center justify-center">
                      <span className="text-white text-sm">Gray Snow ✗</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      Camera tries to turn white snow into 18% gray → underexposed and muddy
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-2">AFTER (+2 Compensation)</p>
                    <div className="bg-gray-100 h-32 rounded-lg mb-2 flex items-center justify-center border border-gray-300">
                      <span className="text-gray-800 text-sm">White Snow ✓</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      +2 stops compensation restores white to true brightness
                    </p>
                  </div>
                </div>
              </div>

              {/* The Coal Test */}
              <div className="border-2 border-purple-300 rounded-lg overflow-hidden">
                <div className="bg-purple-600 text-white p-4">
                  <h6 className="font-semibold text-lg">The Coal Test (-)</h6>
                  <p className="text-sm text-purple-100 mt-1">Dark scenes need negative compensation</p>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-2">BEFORE (0 Compensation)</p>
                    <div className="bg-gray-400 h-32 rounded-lg mb-2 flex items-center justify-center">
                      <span className="text-white text-sm">Gray Coal ✗</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      Camera tries to turn black coal into 18% gray → overexposed and washed out
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-2">AFTER (-2 Compensation)</p>
                    <div className="bg-gray-900 h-32 rounded-lg mb-2 flex items-center justify-center">
                      <span className="text-white text-sm">Black Coal ✓</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      -2 stops compensation preserves deep black tones
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-violet-50 p-6 rounded-lg border border-violet-200">
              <p className="text-gray-800 font-medium mb-2">💡 REMEMBER</p>
              <p className="text-gray-700">
                <strong>Bright subjects (+):</strong> Add positive compensation to keep them bright. <strong>Dark subjects (-):</strong> Add negative compensation to keep them dark. The rule: "Add light to light, subtract light from dark."
              </p>
            </div>
          </div>
        </div>

        {/* Evaluative vs Center-Weighted Comparison */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-purple-600 font-semibold">Section_08 // Practical Comparison</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Evaluative vs Center-Weighted
            </h4>
            <p className="text-gray-600 mt-2">
              Understanding the difference in practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Evaluative Metering */}
            <div className="border-2 border-violet-300 rounded-lg overflow-hidden">
              <div className="bg-violet-600 text-white p-4">
                <h5 className="font-semibold text-lg">Evaluative Metering</h5>
                <p className="text-sm text-violet-100 mt-1">Intelligent scene analysis</p>
              </div>

              <div className="p-6">
                <div className="bg-violet-50 p-4 rounded-lg mb-4 border border-violet-200">
                  <p className="text-sm font-semibold text-gray-900 mb-2">HOW IT ANALYZES</p>
                  <p className="text-sm text-gray-700">
                    Analyzes the <strong>entire frame</strong> and intelligently prioritizes areas around the active focus point. Tries to balance all elements in the scene.
                  </p>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-4 mb-4">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Practice Exercise</p>
                  <p className="text-sm text-gray-700 mb-2">
                    Photograph a scene with high contrast (bright sky + dark foreground).
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    Result: Camera attempts to balance both areas, may slightly underexpose sky or overexpose foreground to find middle ground.
                  </p>
                </div>

                <div className="bg-violet-100 p-4 rounded-lg">
                  <p className="text-xs font-semibold text-violet-900 uppercase mb-2">Best For</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 mt-0.5">✓</span>
                      <span>General photography</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 mt-0.5">✓</span>
                      <span>Landscapes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 mt-0.5">✓</span>
                      <span>When you trust intelligent exposure decisions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Center-Weighted Metering */}
            <div className="border-2 border-purple-300 rounded-lg overflow-hidden">
              <div className="bg-purple-600 text-white p-4">
                <h5 className="font-semibold text-lg">Center-Weighted Metering</h5>
                <p className="text-sm text-purple-100 mt-1">Traditional center focus</p>
              </div>

              <div className="p-6">
                <div className="bg-purple-50 p-4 rounded-lg mb-4 border border-purple-200">
                  <p className="text-sm font-semibold text-gray-900 mb-2">HOW IT ANALYZES</p>
                  <p className="text-sm text-gray-700">
                    Prioritizes the <strong>center of the frame</strong> regardless of focus point. Sensitivity falls off toward edges. More predictable and consistent.
                  </p>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-4 mb-4">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Practice Exercise</p>
                  <p className="text-sm text-gray-700 mb-2">
                    Photograph a centered subject against bright or dark background.
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    Result: Subject is properly exposed regardless of background extremes, because meter prioritizes center area.
                  </p>
                </div>

                <div className="bg-purple-100 p-4 rounded-lg">
                  <p className="text-xs font-semibold text-purple-900 uppercase mb-2">Best For</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">✓</span>
                      <span>Portraits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">✓</span>
                      <span>Centered subjects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">✓</span>
                      <span>Predictable, center-focused exposure</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spot Metering in Practice */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-purple-600 font-semibold">Section_09 // Advanced Technique</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Spot Metering in Practice
            </h4>
            <p className="text-gray-600 mt-2">
              Precision control for creative exposure decisions
            </p>
          </div>

          <div className="prose max-w-none">
            <div className="bg-fuchsia-50 border-l-4 border-fuchsia-600 p-6 mb-6">
              <p className="text-gray-800 font-medium mb-2">THE CONCEPT</p>
              <p className="text-gray-700">
                Spot metering gives you <strong>total control</strong> over which part of the scene determines the exposure. By metering different areas, you make creative decisions about what to preserve and what to sacrifice.
              </p>
            </div>

            <h5 className="text-lg font-semibold text-gray-900 mb-4">Visual Comparison: The Impact of Spot Metering Target</h5>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {/* Target: The Sky */}
              <div className="border-2 border-violet-300 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-b from-blue-300 to-blue-100 h-32 flex items-start justify-center pt-4">
                  <span className="text-blue-900 text-xs font-semibold">☀️ Bright Sky</span>
                </div>
                <div className="bg-gray-900 h-20"></div>
                <div className="p-3 bg-white">
                  <p className="text-xs font-semibold text-gray-900 mb-1">Target: The Sky</p>
                  <p className="text-xs text-gray-600">
                    Result: Bright sky preserved, foreground silhouetted (underexposed)
                  </p>
                </div>
              </div>

              {/* Target: The Trees */}
              <div className="border-2 border-purple-300 rounded-lg overflow-hidden">
                <div className="bg-gray-50 h-32 flex items-start justify-center pt-4 border-b border-gray-300">
                  <span className="text-gray-400 text-xs">Blown Sky ⚠️</span>
                </div>
                <div className="bg-green-800 h-20 flex items-center justify-center">
                  <span className="text-green-200 text-xs">🌲 Trees</span>
                </div>
                <div className="p-3 bg-white">
                  <p className="text-xs font-semibold text-gray-900 mb-1">Target: The Trees</p>
                  <p className="text-xs text-gray-600">
                    Result: Dark trees visible, sky blown out (overexposed)
                  </p>
                </div>
              </div>

              {/* Target: The Land */}
              <div className="border-2 border-fuchsia-300 rounded-lg overflow-hidden">
                <div className="bg-blue-100 h-32 flex items-start justify-center pt-4 border-b border-blue-200">
                  <span className="text-blue-400 text-xs">Highlights ⚠️</span>
                </div>
                <div className="bg-amber-700 h-20 flex items-center justify-center">
                  <span className="text-amber-200 text-xs">Mid-tone Land</span>
                </div>
                <div className="p-3 bg-white">
                  <p className="text-xs font-semibold text-gray-900 mb-1">Target: The Land</p>
                  <p className="text-xs text-gray-600">
                    Result: Mid-tone land balanced, may lose extreme highlights
                  </p>
                </div>
              </div>

              {/* The Result */}
              <div className="border-2 border-green-400 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-b from-blue-400 to-blue-200 h-32 flex items-start justify-center pt-4">
                  <span className="text-blue-900 text-xs font-semibold">Balanced ✓</span>
                </div>
                <div className="bg-gradient-to-b from-green-700 to-amber-600 h-20 flex items-center justify-center">
                  <span className="text-white text-xs">Controlled</span>
                </div>
                <div className="p-3 bg-white">
                  <p className="text-xs font-semibold text-green-900 mb-1">The Result</p>
                  <p className="text-xs text-gray-600">
                    Creative choice with total control over exposure priority
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-violet-50 p-6 rounded-lg border border-violet-200 mb-6">
              <p className="text-gray-800 font-medium mb-3">🎯 THE TECHNIQUE</p>
              <ol className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-violet-600 flex-shrink-0">01.</span>
                  <span>Switch your camera to <strong>Spot Metering mode</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-violet-600 flex-shrink-0">02.</span>
                  <span>Point the <strong>active focus point</strong> at the area you want to meter (usually tied to spot meter)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-violet-600 flex-shrink-0">03.</span>
                  <span>Half-press the shutter to lock exposure (or use AE-L button)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-violet-600 flex-shrink-0">04.</span>
                  <span>Recompose if necessary and take the shot</span>
                </li>
              </ol>
            </div>

            <div className="bg-fuchsia-50 p-6 rounded-lg border border-fuchsia-200">
              <p className="text-gray-800 font-medium mb-2">💡 PRO TIP</p>
              <p className="text-gray-700">
                When using spot metering on a very bright or very dark area, remember the 18% gray rule still applies! You may need to add exposure compensation to prevent the camera from turning your target into gray.
              </p>
            </div>
          </div>
        </div>

        {/* Focus Point & Metering Link */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-purple-600 font-semibold">Section_10 // Technical Interplay</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Focus Point & Metering Link
            </h4>
            <p className="text-gray-600 mt-2">
              Understanding how autofocus and metering interact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Technical Interplay */}
            <div className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg border-2 border-violet-300">
              <h5 className="text-lg font-semibold text-violet-900 mb-4">Technical Interplay</h5>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-violet-200">
                  <p className="text-sm font-semibold text-gray-900 mb-2">THE CONNECTION</p>
                  <p className="text-sm text-gray-700">
                    The <strong>active autofocus point</strong> is directly linked to the metering system in modern cameras. Where you focus influences how the camera meters the scene.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-violet-200">
                  <p className="text-sm font-semibold text-gray-900 mb-2">EVALUATIVE/MATRIX METERING</p>
                  <p className="text-sm text-gray-700">
                    The camera gives <strong>priority to the area around the active focus point</strong> when calculating exposure, assuming that's your subject.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-violet-200">
                  <p className="text-sm font-semibold text-gray-900 mb-2">SPOT/PARTIAL METERING</p>
                  <p className="text-sm text-gray-700">
                    The camera precisely <strong>measures light from the small area covered by the active focus point</strong>. Move the focus point, and metering follows.
                  </p>
                </div>
              </div>
            </div>

            {/* Practical Implications */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-lg border-2 border-purple-300">
              <h5 className="text-lg font-semibold text-purple-900 mb-4">Practical Implications</h5>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <p className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-orange-600">⚠️</span>
                    BRIGHT FOCUS AREA
                  </p>
                  <p className="text-sm text-gray-700">
                    If you focus on a <strong>bright area</strong> (e.g., a white shirt), the camera may <strong>underexpose</strong> the rest of the image to prevent "overexposure" of that bright area.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <p className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-orange-600">⚠️</span>
                    DARK FOCUS AREA
                  </p>
                  <p className="text-sm text-gray-700">
                    If you focus on a <strong>dark area</strong> (e.g., someone's black jacket), the camera may <strong>overexpose</strong> the scene, blowing out highlights elsewhere.
                  </p>
                </div>

                <div className="bg-purple-600 text-white p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <span>💡</span>
                    PRO TIP
                  </p>
                  <p className="text-sm">
                    Use the <strong>Exposure Lock (AE-L)</strong> button to decouple focus and metering. Meter the scene, lock exposure, then recompose and focus. Or shoot in <strong>Manual mode</strong> for complete independence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Session: Metering Mastery */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-fuchsia-600 font-semibold">Section_11 // Studio Practice</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Practical Session: Metering Mastery
            </h4>
            <p className="text-gray-600 mt-2">
              Hands-on understanding of metering modes and exposure compensation
            </p>
          </div>

          <div className="prose max-w-none">
            <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white p-6 rounded-lg mb-6">
              <h5 className="text-lg font-semibold mb-2">THE STUDIO TASK</h5>
              <p className="text-sm">
                Understand how different metering modes interpret light and how to use Exposure Compensation to achieve your creative vision.
              </p>
            </div>

            <div className="bg-fuchsia-50 p-6 rounded-lg border-2 border-fuchsia-200 mb-6">
              <h5 className="font-semibold text-fuchsia-900 mb-3 flex items-center gap-2">
                <Camera className="w-5 h-5" />
                SETUP
              </h5>
              <p className="text-sm text-gray-700">
                Place a <strong>white subject</strong> (white card, fabric, or object) against a <strong>dark background</strong> (black paper or dark wall) with consistent studio lighting.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-violet-600 pl-6 py-4 bg-violet-50">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-2xl font-bold text-violet-600">01</span>
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-1">EVALUATIVE/MATRIX METERING</h6>
                    <p className="text-sm text-gray-700">
                      Set camera to <strong>Evaluative/Matrix</strong> metering mode. Take a photo. Observe how the camera <strong>balances the entire scene</strong> — it tries to find middle ground between white subject and dark background.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-600 pl-6 py-4 bg-purple-50">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-2xl font-bold text-purple-600">02</span>
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-1">SPOT METERING</h6>
                    <p className="text-sm text-gray-700">
                      Switch to <strong>Spot Metering</strong> and place your focus point on the white subject. Take a photo. Notice the white subject is now <strong>underexposed to gray</strong> (18% gray rule in action) and background is nearly black.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-fuchsia-600 pl-6 py-4 bg-fuchsia-50">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-2xl font-bold text-fuchsia-600">03</span>
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-1">EXPOSURE COMPENSATION</h6>
                    <p className="text-sm text-gray-700">
                      With Spot Metering still on the white subject, add <strong>+1 to +2 stops</strong> of exposure compensation. Take another photo. The white subject should now appear <strong>properly white</strong> instead of gray.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h5 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-fuchsia-600" />
                TECHNICAL CHECKLIST
              </h5>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Verify</p>
                  <p className="text-sm text-gray-700">Metering Mode</p>
                  <p className="text-xs text-gray-500 mt-1">Check camera LCD/viewfinder</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Monitor</p>
                  <p className="text-sm text-gray-700">Exposure Scale</p>
                  <p className="text-xs text-gray-500 mt-1">Watch the +/- indicator</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Adjust</p>
                  <p className="text-sm text-gray-700">+/- Dial</p>
                  <p className="text-xs text-gray-500 mt-1">Use exposure compensation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Homework: Beginner Metering Challenge */}
        <div className="mb-8 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-white rounded-xl p-6 sm:p-8 shadow-lg">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-violet-200 font-semibold">Section_12 // Weekly Assignment</span>
            <h4 className="text-2xl font-semibold mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Homework: Beginner Metering Challenge
            </h4>
            <p className="text-violet-100 mt-2">
              The Three-Tone Test
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6 border border-white/20">
            <h5 className="font-semibold text-lg mb-3">THE THREE-TONE TEST</h5>
            <p className="text-sm text-violet-50 mb-4">
              Visualize how your camera's meter compensates for different tones to reach 18% gray baseline.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-white flex-shrink-0">01</span>
                <div>
                  <p className="text-sm font-semibold mb-1">Find Your Scene</p>
                  <p className="text-sm text-violet-100">
                    Find a scene containing distinct <strong>white, gray, and black areas</strong> (e.g., a room with white wall, gray floor, black furniture).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-white flex-shrink-0">02</span>
                <div>
                  <p className="text-sm font-semibold mb-1">Use Spot Metering</p>
                  <p className="text-sm text-violet-100">
                    Using <strong>Spot Metering</strong>, take <strong>three separate photos</strong> — one targeting each tone (white, gray, black) individually with your focus point.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-white flex-shrink-0">03</span>
                <div>
                  <p className="text-sm font-semibold mb-1">Observe the Results</p>
                  <p className="text-sm text-violet-100">
                    Notice how the camera attempts to <strong>make each tone middle gray</strong>. White becomes gray (underexposed), black becomes gray (overexposed), and gray stays gray (correct).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h6 className="font-semibold mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Submit Your Results
              </h6>
              <p className="text-sm text-violet-100">
                Upload three comparison images showing your metering targets with EXIF data visible. Include a brief reflection on what you observed.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h6 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Submission Deadline
              </h6>
              <p className="text-sm text-violet-100 font-semibold">
                Thursday 12th // 18:00
              </p>
              <p className="text-xs text-violet-200 mt-1">
                Submit via course portal
              </p>
            </div>
          </div>

          <div className="bg-fuchsia-500/30 backdrop-blur-sm rounded-lg p-4 border border-fuchsia-300/30">
            <p className="text-sm font-semibold mb-2">💡 LEARNING OBJECTIVE</p>
            <p className="text-sm text-violet-100">
              This exercise demonstrates the fundamental limitation of camera metering and why understanding the 18% gray rule is essential for proper exposure control.
            </p>
          </div>
        </div>

        {/* Resources & FAQ */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">Further Learning</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Resources & FAQ
            </h4>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="p-5 bg-violet-50 rounded-lg border border-violet-200">
                <h5 className="font-semibold text-gray-900 mb-2">SEKONIC L-308S MANUAL</h5>
                <p className="text-sm text-gray-700 mb-3">
                  Complete guide to using the Sekonic handheld light meter for ambient metering.
                </p>
                <a href="#" className="text-sm text-violet-600 hover:text-violet-800 font-medium">
                  Download PDF via Course Portal →
                </a>
              </div>

              <div className="p-5 bg-purple-50 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-gray-900 mb-2">EXPOSURE COMPENSATION GUIDE</h5>
                <p className="text-sm text-gray-700 mb-3">
                  In-depth article on when and how to use exposure compensation effectively.
                </p>
                <a href="#" className="text-sm text-purple-600 hover:text-purple-800 font-medium">
                  creativeweb-manual.com/exposure →
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-5 bg-fuchsia-50 rounded-lg border border-fuchsia-200">
                <h5 className="font-semibold text-gray-900 mb-2">HISTOGRAM MASTERY VIDEO</h5>
                <p className="text-sm text-gray-700 mb-3">
                  Learn to read histograms alongside metering for perfect exposure.
                </p>
                <a href="#" className="text-sm text-fuchsia-600 hover:text-fuchsia-800 font-medium">
                  youtube.com/photography-basics →
                </a>
              </div>

              <div className="p-5 bg-pink-50 rounded-lg border border-pink-200">
                <h5 className="font-semibold text-gray-900 mb-2">18% GRAY DEEP DIVE</h5>
                <p className="text-sm text-gray-700 mb-3">
                  Technical explanation of why meters use 18% gray as the standard.
                </p>
                <a href="#" className="text-sm text-pink-600 hover:text-pink-800 font-medium">
                  creativeweb-manual.com/metering →
                </a>
              </div>
            </div>
          </div>

          {/* Session Wrap-up */}
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg p-6 border-2 border-violet-200 mb-6">
            <h5 className="font-semibold text-violet-900 mb-4 text-lg">Session Wrap-up</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                <span>Understand the <strong>18% Gray baseline</strong> and how camera meters are "fooled"</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                <span>Master <strong>Evaluative, Center-Weighted, and Spot</strong> metering modes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                <span>Use <strong>Exposure Compensation</strong> to creatively override camera decisions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                <span>Practice with the <strong>Sekonic L-308S</strong> for precision ambient metering</span>
              </li>
            </ul>
          </div>

          {/* Coming Up Next */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-6">
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">Coming Up Next</p>
            <h5 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Week 08: White Balance & Color
            </h5>
            <p className="text-sm text-gray-300">
              Master color temperature and white balance for accurate color reproduction
            </p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400 uppercase tracking-wider">
              MOD_07 // SESSION_WRAP // LPJ-V3
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link
            to="/courses/introduction-to-photography/week-06"
            className="flex items-center gap-2 text-violet-600 hover:text-violet-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Week 06: Color & White Balance</span>
          </Link>
          <Link
            to="/courses/introduction-to-photography"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Course Overview
          </Link>
        </div>
      </div>
    </div>
  );
}
