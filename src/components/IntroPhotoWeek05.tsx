import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function IntroPhotoWeek05() {
  return (
    <div className="bg-gradient-to-br from-cyan-50/30 via-white to-blue-50/30 min-h-screen">
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
            <span className="text-6xl font-bold text-gray-300">05</span>
            <span className="text-sm uppercase tracking-wider text-cyan-600 font-semibold">Module 05 // Motion Control</span>
          </div>
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Shutter Speed & Motion Control
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Master the temporal dimension of photography—freezing action or expressing movement through light and time
          </p>
        </div>

        {/* Course Roadmap Context */}
        <div className="mb-8 p-6 sm:p-8 bg-white rounded-xl shadow-sm">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">10-Week Course Roadmap</h4>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-start gap-3 py-2">
                <span className="text-orange-600 font-bold">01</span>
                <span className="text-gray-700">Get to Know Your Camera</span>
              </div>
              <div className="flex items-start gap-3 py-2">
                <span className="text-orange-600 font-bold">02</span>
                <span className="text-gray-700">Mastering the Exposure Triangle</span>
              </div>
              <div className="flex items-start gap-3 py-2">
                <span className="text-orange-600 font-bold">03</span>
                <span className="text-gray-700">Composition: The Art of Framing</span>
              </div>
              <div className="flex items-start gap-3 py-2">
                <span className="text-orange-600 font-bold">04</span>
                <span className="text-gray-700">Aperture / ISO</span>
              </div>
              <div className="flex items-start gap-3 py-2 bg-cyan-50 -mx-2 px-2 rounded border-l-4 border-cyan-600">
                <span className="text-cyan-600 font-bold">05</span>
                <span className="text-gray-900 font-semibold">Shutter speed / ISO</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-3 py-2">
                <span className="text-orange-600 font-bold">06</span>
                <span className="text-gray-700">35 mm / Lightroom</span>
              </div>
              <div className="flex items-start gap-3 py-2">
                <span className="text-orange-600 font-bold">07</span>
                <span className="text-gray-700">Darkroom / Lightroom</span>
              </div>
              <div className="flex items-start gap-3 py-2">
                <span className="text-orange-600 font-bold">08</span>
                <span className="text-gray-700">Metering / Focus / White Balance & Colour Temp</span>
              </div>
              <div className="flex items-start gap-3 py-2">
                <span className="text-orange-600 font-bold">09</span>
                <span className="text-gray-700">Lenses & Focal Length</span>
              </div>
              <div className="flex items-start gap-3 py-2">
                <span className="text-orange-600 font-bold">10</span>
                <span className="text-gray-700">Professional Practice & Portfolio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Session Agenda */}
        <div className="mb-8 p-6 sm:p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Tonight's Agenda</h4>
          <p className="text-sm text-gray-600 mb-6 italic">Session Plan // 05</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-cyan-600">01</span>
              <div>
                <p className="font-semibold text-gray-900">Student Review</p>
                <p className="text-sm text-gray-600">Aperture Storyboard</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-cyan-600">02</span>
              <div>
                <p className="font-semibold text-gray-900">Technical Foundations</p>
                <p className="text-sm text-gray-600">How Shutter Speed Works</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-cyan-600">03</span>
              <div>
                <p className="font-semibold text-gray-900">The Reciprocal Rule</p>
                <p className="text-sm text-gray-600">Camera Shake Prevention</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-cyan-600">04</span>
              <div>
                <p className="font-semibold text-gray-900">Creative Motion Control</p>
                <p className="text-sm text-gray-600">Freeze vs. Blur</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-cyan-600">05</span>
              <div>
                <p className="font-semibold text-gray-900">Studio Projects</p>
                <p className="text-sm text-gray-600">Flash Freeze & Light Spirographs</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-cyan-600">06</span>
              <div>
                <p className="font-semibold text-gray-900">Homework</p>
                <p className="text-sm text-gray-600">The Motion Challenge</p>
              </div>
            </div>
          </div>
        </div>

        {/* Student Review - Week 4 Aperture Storyboard */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">REVIEW_SESSION // 04</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Student Review
            </h4>
            <p className="text-gray-600 mt-2">
              Critiquing the Week 4 Aperture Storyboard: Understanding depth of field control through narrative sequencing.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg mb-6">
            <h5 className="text-lg font-semibold text-gray-900 mb-4">The Aperture Toolkit Review</h5>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-blue-600">01</span>
                <span className="text-gray-700">f/1.4 to f/2.8 — Shallow DOF & Subject Isolation</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-blue-600">02</span>
                <span className="text-gray-700">f/4 to f/5.6 — Balanced DOF & Group Shots</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-blue-600">03</span>
                <span className="text-gray-700">f/8 to f/11 — Landscape & Environmental</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-blue-600">04</span>
                <span className="text-gray-700">f/16 to f/22 — Maximum Depth & Macro</span>
              </div>
            </div>
          </div>

          <div className="p-5 bg-white border-2 border-blue-200 rounded-lg">
            <h5 className="font-semibold text-gray-900 mb-2">Critique Focus</h5>
            <p className="text-gray-700">
              Evaluate how <strong>aperture choice</strong> guided the narrative flow. Did the depth of field progression enhance the <strong>storytelling</strong>? 
              How did each f-stop selection impact <strong>subject emphasis</strong> and visual hierarchy?
            </p>
          </div>
        </div>

        {/* Technical Task: Setting Shutter Speed */}
        <div className="mb-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-orange-400 font-semibold">TASK_C4A // S5v</span>
            <h4 className="text-3xl font-semibold mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Technical Task:<br />Setting Shutter Speed
            </h4>
          </div>

          <div className="mb-6 p-4 bg-black/30 rounded-lg">
            <p className="text-sm text-gray-300 mb-1">Shutter Priority Mode</p>
            <p className="text-2xl font-bold text-orange-400">S (Nikon) / Tv (Canon)</p>
          </div>

          <div className="bg-white text-gray-900 rounded-lg p-6 mb-6">
            <h5 className="text-lg font-semibold mb-4">Navigation Guide</h5>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-orange-600">01</span>
                <div>
                  <p className="font-semibold text-gray-900">Locate Shutter Priority Mode</p>
                  <p className="text-sm text-gray-700">
                    Rotate the mode dial to <strong>S</strong> (Shutter Priority). This mode locks your chosen shutter speed while the camera adjusts aperture and ISO automatically.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-orange-600">02</span>
                <div>
                  <p className="font-semibold text-gray-900">Command Dial Operation</p>
                  <p className="text-sm text-gray-700">
                    Use the <strong>Main Command Dial</strong> (typically on the top right grip) to adjust shutter speed. Watch the viewfinder display as values change.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-orange-600">03</span>
                <div>
                  <p className="font-semibold text-gray-900">Understanding the Display</p>
                  <p className="text-sm text-gray-700">
                    Shutter speeds appear as fractions: <strong>125 = 1/125s</strong>, <strong>500 = 1/500s</strong>. 
                    Full seconds appear with a quote mark: <strong>2" = 2.0s</strong>, <strong>30" = 30s</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-orange-600">04</span>
                <div>
                  <p className="font-semibold text-gray-900">Practice the Range</p>
                  <p className="text-sm text-gray-700">
                    Scroll through the full spectrum: from <strong>1/8000s</strong> (ultra-fast) down to <strong>30"</strong> (long exposure). 
                    Notice how the aperture readout changes to maintain correct exposure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-cyan-900/50 rounded-lg border-2 border-cyan-400">
            <h5 className="font-semibold text-cyan-300 mb-2">Pro Tip: The Aperture Compensation</h5>
            <p className="text-gray-200 text-sm">
              In Shutter Priority mode, if the camera cannot achieve correct exposure (aperture limits reached), 
              the aperture value will <strong>blink</strong> in the viewfinder. This signals you need to adjust your shutter speed or increase ISO.
            </p>
          </div>
        </div>

        {/* Core Concept: Understanding Shutter Speed */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-gray-500 font-semibold">MOD_05 // MOTION_CONTROL // PG_03</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Understanding Shutter Speed
            </h4>
            <p className="text-gray-600 mt-2">
              The second pillar of exposure control—governing light duration and temporal rendering
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">What Is Shutter Speed?</h5>
              <p className="text-gray-700 mb-4">
                <strong>Shutter speed</strong> determines how long the camera's sensor is exposed to light. 
                This fundamental control affects both <strong>exposure brightness</strong> and <strong>motion rendering</strong>.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700"><strong>Fast speeds</strong> (1/1000s) = Less light, frozen motion</p>
                <p className="text-gray-700"><strong>Slow speeds</strong> (1/30s) = More light, motion blur</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">The Full Stop Scale</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-1">
                  <span className="font-semibold text-gray-900">1/8000s</span>
                  <span className="text-gray-600">Ultra-fast action freeze</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-semibold text-gray-900">1/4000s</span>
                  <span className="text-gray-600">Sports, wildlife</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-semibold text-gray-900">1/2000s</span>
                  <span className="text-gray-600">Fast motion</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-semibold text-gray-900">1/1000s</span>
                  <span className="text-gray-600">Action photography</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-semibold text-gray-900">1/500s</span>
                  <span className="text-gray-600">General handheld</span>
                </div>
                <div className="flex justify-between items-center py-1 bg-cyan-100 -mx-2 px-2 rounded">
                  <span className="font-semibold text-gray-900">1/250s</span>
                  <span className="text-cyan-700">Safe standard</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-semibold text-gray-900">1/125s</span>
                  <span className="text-gray-600">Portraits, steady hands</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-semibold text-gray-900">1/60s</span>
                  <span className="text-gray-600">Camera shake risk begins</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-semibold text-gray-900">1/30s</span>
                  <span className="text-gray-600">Visible motion blur</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-semibold text-gray-900">1"–30"</span>
                  <span className="text-gray-600">Long exposure, tripod required</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border-2 border-orange-200">
            <h5 className="font-semibold text-gray-900 mb-2">The Core Relationship</h5>
            <p className="text-gray-700">
              Each <strong>full stop</strong> change doubles or halves the light exposure time. 
              1/250s → 1/125s = <strong>+1 stop</strong> (twice the light). 
              1/250s → 1/500s = <strong>-1 stop</strong> (half the light).
            </p>
          </div>
        </div>

        {/* Shutter Speed Priority in Practice */}
        <div className="mb-8 bg-gradient-to-br from-indigo-900 to-blue-900 text-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-cyan-300 font-semibold">MOD_05 // PG_04</span>
            <h4 className="text-2xl font-semibold mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Shutter Speed Priority in Practice
            </h4>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h5 className="text-lg font-semibold text-cyan-300 mb-4">How It Works</h5>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-xl font-bold text-cyan-400">01</span>
                  <div>
                    <p className="font-semibold text-white">You Control Shutter</p>
                    <p className="text-gray-300">Set your desired shutter speed based on subject motion</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl font-bold text-cyan-400">02</span>
                  <div>
                    <p className="font-semibold text-white">Camera Adjusts Aperture</p>
                    <p className="text-gray-300">The camera automatically selects the correct f-stop for proper exposure</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl font-bold text-cyan-400">03</span>
                  <div>
                    <p className="font-semibold text-white">ISO Backup (if Auto ISO enabled)</p>
                    <p className="text-gray-300">If aperture limits are reached, ISO compensates</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white text-gray-900 rounded-lg p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">When to Use S/Tv Mode</h5>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-cyan-50 rounded">
                  <p className="font-semibold text-cyan-900">Sports & Action</p>
                  <p className="text-gray-700">Fast shutter speeds (1/500s–1/2000s) freeze rapid movement</p>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <p className="font-semibold text-blue-900">Panning Shots</p>
                  <p className="text-gray-700">Medium speeds (1/60s–1/125s) with camera tracking</p>
                </div>
                <div className="p-3 bg-indigo-50 rounded">
                  <p className="font-semibold text-indigo-900">Creative Blur</p>
                  <p className="text-gray-700">Slow speeds (1/15s–1/2s) capture motion trails</p>
                </div>
                <div className="p-3 bg-purple-50 rounded">
                  <p className="font-semibold text-purple-900">Low Light</p>
                  <p className="text-gray-700">Slower speeds (1/60s–1/15s) gather more available light</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Mechanics: Camera Shake & Exposure Time */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-gray-500 font-semibold">MOD_05 // PG_05–06</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              The Mechanics: Camera Shake & Exposure Time
            </h4>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg border-2 border-red-200">
              <h5 className="text-lg font-semibold text-red-900 mb-4">⚠️ The Camera Shake Problem</h5>
              <p className="text-gray-700 mb-4">
                Even with a <strong>static subject</strong>, slow shutter speeds risk <strong>camera shake</strong>—micro-movements 
                from your hands that blur the entire image.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700"><strong>1/250s+</strong> — Generally safe for handheld</p>
                <p className="text-gray-700"><strong>1/60s–1/125s</strong> — Steady hands required</p>
                <p className="text-gray-700"><strong>1/30s and slower</strong> — Tripod essential</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
              <h5 className="text-lg font-semibold text-green-900 mb-4">✓ Motion Blur vs. Camera Shake</h5>
              <p className="text-gray-700 mb-4">
                Understanding the difference between <strong>intentional motion blur</strong> (subject moving) 
                and <strong>camera shake</strong> (camera moving) is critical.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700"><strong>Motion Blur:</strong> Directional streaks showing subject movement</p>
                <p className="text-gray-700"><strong>Camera Shake:</strong> Overall image softness/blur affecting entire frame</p>
                <p className="text-gray-700 mt-3 font-semibold">Solution: Use a tripod or increase shutter speed</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <h5 className="text-lg font-semibold text-gray-900 mb-4">Image Stabilization Technology</h5>
            <p className="text-gray-700 mb-3">
              Modern cameras and lenses include <strong>Image Stabilization</strong> (IS/VR/VC) systems that compensate 
              for camera shake, typically providing <strong>2-5 stops</strong> of stabilization advantage.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-white rounded border-l-4 border-blue-500">
                <p className="font-semibold text-gray-900 mb-1">Without IS:</p>
                <p className="text-sm text-gray-700">Minimum safe speed: 1/250s</p>
              </div>
              <div className="p-4 bg-white rounded border-l-4 border-green-500">
                <p className="font-semibold text-gray-900 mb-1">With IS (3-stop advantage):</p>
                <p className="text-sm text-gray-700">Minimum safe speed: 1/30s</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Reciprocal Rule */}
        <div className="mb-8 bg-gradient-to-br from-purple-900 to-indigo-900 text-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-purple-300 font-semibold">MOD_05 // PG_07</span>
            <h4 className="text-2xl font-semibold mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              The Reciprocal Rule
            </h4>
            <p className="text-gray-300 mt-2">A technical formula for minimizing camera shake when shooting handheld</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6 border-2 border-purple-400">
            <h5 className="text-xl font-semibold text-purple-300 mb-3">The Formula</h5>
            <p className="text-3xl font-bold text-white mb-4">
              Minimum Speed = 1 / Focal Length
            </p>
            <p className="text-gray-300">
              Your minimum safe handheld shutter speed should match or exceed the reciprocal of your lens focal length.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white text-gray-900 rounded-lg p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">Practical Examples</h5>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                  <span className="font-semibold">50mm lens</span>
                  <span className="text-purple-700">Use ≥ 1/60s</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                  <span className="font-semibold">85mm lens</span>
                  <span className="text-purple-700">Use ≥ 1/100s</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                  <span className="font-semibold">200mm lens</span>
                  <span className="text-purple-700">Use ≥ 1/250s</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                  <span className="font-semibold">500mm lens</span>
                  <span className="text-purple-700">Use ≥ 1/500s</span>
                </div>
              </div>
            </div>

            <div className="bg-white text-gray-900 rounded-lg p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">The Logic</h5>
              <p className="text-gray-700 mb-4">
                Longer focal lengths <strong>magnify</strong> both the subject AND any camera movement. 
                A 200mm lens magnifies shake 4× more than a 50mm lens.
              </p>
              <div className="p-4 bg-yellow-50 rounded border-l-4 border-yellow-500">
                <p className="text-sm text-gray-700">
                  <strong>Pro Tip:</strong> This is a minimum safety guideline. For critical sharpness, 
                  use speeds <strong>2× faster</strong> than the reciprocal (e.g., 1/200s for 100mm).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sensor Compensation: Crop Factor */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-gray-500 font-semibold">MOD_05 // PG_08</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Sensor Compensation: Crop Factor Adjustments
            </h4>
            <p className="text-gray-600 mt-2">
              The reciprocal rule must account for sensor size—crop sensors effectively increase focal length magnification
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg mb-6">
            <h5 className="text-lg font-semibold text-gray-900 mb-4">Understanding Crop Factor</h5>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 bg-white rounded border-2 border-blue-300">
                <p className="text-sm text-gray-600 mb-1">Full Frame (FF)</p>
                <p className="text-xl font-bold text-gray-900">1.0×</p>
              </div>
              <div className="p-4 bg-white rounded border-2 border-indigo-300">
                <p className="text-sm text-gray-600 mb-1">APS-C</p>
                <p className="text-xl font-bold text-gray-900">1.5× / 1.6×</p>
              </div>
              <div className="p-4 bg-white rounded border-2 border-purple-300">
                <p className="text-sm text-gray-600 mb-1">Micro Four Thirds</p>
                <p className="text-xl font-bold text-gray-900">2.0×</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Multiply your lens focal length by the crop factor to get the <strong>effective focal length</strong>, 
              then apply the reciprocal rule.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-900">Lens Focal Length</th>
                  <th className="text-center p-3 font-semibold text-gray-900">Full Frame</th>
                  <th className="text-center p-3 font-semibold text-gray-900">APS-C (1.5×)</th>
                  <th className="text-center p-3 font-semibold text-gray-900">MFT (2.0×)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-semibold text-gray-900">50mm</td>
                  <td className="text-center p-3 text-gray-700">1/60s</td>
                  <td className="text-center p-3 text-indigo-700 font-semibold">1/80s</td>
                  <td className="text-center p-3 text-purple-700 font-semibold">1/100s</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-semibold text-gray-900">85mm</td>
                  <td className="text-center p-3 text-gray-700">1/100s</td>
                  <td className="text-center p-3 text-indigo-700 font-semibold">1/125s</td>
                  <td className="text-center p-3 text-purple-700 font-semibold">1/180s</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-semibold text-gray-900">100mm</td>
                  <td className="text-center p-3 text-gray-700">1/125s</td>
                  <td className="text-center p-3 text-indigo-700 font-semibold">1/160s</td>
                  <td className="text-center p-3 text-purple-700 font-semibold">1/200s</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-semibold text-gray-900">200mm</td>
                  <td className="text-center p-3 text-gray-700">1/250s</td>
                  <td className="text-center p-3 text-indigo-700 font-semibold">1/320s</td>
                  <td className="text-center p-3 text-purple-700 font-semibold">1/400s</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-5 bg-orange-50 rounded-lg border-2 border-orange-200">
            <h5 className="font-semibold text-orange-900 mb-2">Calculation Example</h5>
            <p className="text-gray-700 text-sm">
              Using a <strong>50mm lens on APS-C</strong>: 50mm × 1.5 = <strong>75mm effective</strong>. 
              Minimum shutter speed = 1/75s ≈ <strong>1/80s</strong>.
            </p>
          </div>
        </div>

        {/* Auto ISO: The Safety Net */}
        <div className="mb-8 bg-gradient-to-br from-emerald-900 to-teal-900 text-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-emerald-300 font-semibold">MOD_05 // PG_09</span>
            <h4 className="text-2xl font-semibold mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Auto ISO: The Safety Net
            </h4>
            <p className="text-gray-300 mt-2">
              How Auto ISO works in Shutter Priority mode to maintain proper exposure when aperture limits are reached
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h5 className="text-lg font-semibold text-emerald-300 mb-4">The System Behavior</h5>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-xl font-bold text-emerald-400">01</span>
                  <div>
                    <p className="font-semibold text-white">Primary Control: Aperture</p>
                    <p className="text-gray-300">Camera first adjusts aperture to maintain correct exposure for your set shutter speed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl font-bold text-emerald-400">02</span>
                  <div>
                    <p className="font-semibold text-white">Aperture Limits Reached</p>
                    <p className="text-gray-300">When aperture hits maximum (widest or smallest), ISO automatically increases to compensate</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl font-bold text-emerald-400">03</span>
                  <div>
                    <p className="font-semibold text-white">ISO Range Protection</p>
                    <p className="text-gray-300">You set the maximum ISO limit (e.g., ISO 6400) to control acceptable noise levels</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white text-gray-900 rounded-lg p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">Practical Example</h5>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-emerald-50 rounded">
                  <p className="font-semibold text-gray-900">You set: 1/500s (action freeze)</p>
                  <p className="text-gray-700">Scene: Late afternoon, moderate light</p>
                </div>
                <div className="p-3 bg-white border-2 border-emerald-300 rounded">
                  <p className="text-gray-900 mb-2"><strong>Camera response sequence:</strong></p>
                  <ol className="list-decimal list-inside space-y-1 text-gray-700">
                    <li>Opens aperture to f/2.8 (lens maximum)</li>
                    <li>Exposure still too dark</li>
                    <li>Auto ISO activates: ISO 100 → ISO 800</li>
                    <li>Correct exposure achieved ✓</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-red-900/50 rounded-lg border-2 border-red-400">
            <h5 className="font-semibold text-red-300 mb-3">⚠️ Hitting the Limits</h5>
            <p className="text-gray-200 mb-3">
              If the camera reaches <strong>both</strong> the maximum aperture AND your set Auto ISO ceiling, 
              the image will be <strong>underexposed</strong>. The viewfinder will display warnings.
            </p>
            <p className="text-sm text-gray-300">
              <strong>Solution:</strong> Reduce shutter speed, increase Auto ISO maximum, or add external light.
            </p>
          </div>
        </div>

        {/* Creative Motion Control: Freeze vs. Blur */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-gray-500 font-semibold">MOD_05 // CREATIVE_TECHNIQUES // PG_10</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Freezing Action vs. Intentional Blur
            </h4>
            <p className="text-gray-600 mt-2">
              Two opposing creative philosophies—capturing the decisive moment or expressing the flow of time
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border-2 border-cyan-300">
              <h5 className="text-xl font-semibold text-cyan-900 mb-4">⚡ The Decisive Moment</h5>
              <p className="text-gray-700 mb-4">
                Fast shutter speeds <strong>freeze motion</strong>, capturing a single instant in perfect clarity—ideal for 
                sports, wildlife, and action photography.
              </p>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-white rounded">
                  <p className="font-semibold text-gray-900">1/1000s – 1/2000s</p>
                  <p className="text-gray-700">General action, running, fast movement</p>
                </div>
                <div className="p-3 bg-white rounded">
                  <p className="font-semibold text-gray-900">1/2000s – 1/4000s</p>
                  <p className="text-gray-700">Sports, motorsports, wildlife in motion</p>
                </div>
                <div className="p-3 bg-white rounded">
                  <p className="font-semibold text-gray-900">1/4000s – 1/8000s</p>
                  <p className="text-gray-700">Ultra-fast action, birds in flight, water droplets</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-cyan-100 rounded">
                <p className="text-sm text-cyan-900">
                  <strong>Key principle:</strong> Speed matches subject velocity. Faster subjects require faster shutter speeds.
                </p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-purple-300">
              <h5 className="text-xl font-semibold text-purple-900 mb-4">🌊 The Flow of Time</h5>
              <p className="text-gray-700 mb-4">
                Slow shutter speeds create <strong>intentional motion blur</strong>, showing movement as fluid streaks—ideal for 
                waterfalls, light trails, and dynamic storytelling.
              </p>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-white rounded">
                  <p className="font-semibold text-gray-900">1/30s – 1/60s</p>
                  <p className="text-gray-700">Panning, slight motion blur, handheld limit</p>
                </div>
                <div className="p-3 bg-white rounded">
                  <p className="font-semibold text-gray-900">1/4s – 1s</p>
                  <p className="text-gray-700">Waterfalls, crowds, light painting</p>
                </div>
                <div className="p-3 bg-white rounded">
                  <p className="font-semibold text-gray-900">2s – 30s</p>
                  <p className="text-gray-700">Star trails, traffic streams, night scenes</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-purple-100 rounded">
                <p className="text-sm text-purple-900">
                  <strong>Key principle:</strong> Tripod essential. Motion blur becomes more pronounced with longer exposures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Projects */}
        <div className="mb-8 bg-gradient-to-br from-gray-900 to-black text-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-orange-400 font-semibold">STUDIO_SESSIONS // PRACTICAL</span>
            <h4 className="text-3xl font-semibold mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Studio Projects: Creative Motion Techniques
            </h4>
            <p className="text-gray-400 mt-2">Three hands-on exercises demonstrating shutter speed mastery</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Project 01: Flash Action Capture */}
            <div className="bg-gradient-to-br from-cyan-900 to-blue-900 rounded-lg p-6">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-wider text-cyan-300 font-semibold">STUDIO PROJECT 01</span>
                <h5 className="text-xl font-semibold text-white mt-2">Flash Action Capture</h5>
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-cyan-300 mb-2">The Technique</p>
                  <p className="text-gray-300">
                    High-speed flash photography technique where the <strong>flash duration</strong> (not shutter speed) 
                    freezes the action—water splashes captured mid-air.
                  </p>
                </div>

                <div className="p-4 bg-black/30 rounded">
                  <p className="text-cyan-300 font-semibold mb-2">Camera Configuration</p>
                  <div className="space-y-1">
                    <p className="text-gray-300">ISO: <strong>200</strong></p>
                    <p className="text-gray-300">Aperture: <strong>f/5.6</strong></p>
                    <p className="text-gray-300">Shutter: <strong>2.0s / BULB</strong></p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-cyan-300 mb-2">The Physics</p>
                  <p className="text-gray-300 text-xs">
                    Flash duration (1/1000s to 1/20000s) is exponentially faster than mechanical shutter speeds, 
                    making it the ultimate action-freezing tool. Ambient light is minimized by the closed aperture.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 02: The Rock 'n' Roll Cover */}
            <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-lg p-6">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-wider text-purple-300 font-semibold">STUDIO PROJECT 02</span>
                <h5 className="text-xl font-semibold text-white mt-2">The Rock 'n' Roll Cover</h5>
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-purple-300 mb-2">The Technique</p>
                  <p className="text-gray-300">
                    Mixing <strong>sharp subjects</strong> with <strong>blurred subjects</strong> in the same frame using 
                    motion blur—one person remains still, others move during exposure.
                  </p>
                </div>

                <div className="p-4 bg-black/30 rounded">
                  <p className="text-purple-300 font-semibold mb-2">Camera Configuration</p>
                  <div className="space-y-1">
                    <p className="text-gray-300">Mode: <strong>Shutter Priority (S/Tv)</strong></p>
                    <p className="text-gray-300">Shutter: <strong>1.0s</strong></p>
                    <p className="text-gray-300">ISO: <strong>AUTO</strong></p>
                    <p className="text-gray-300">Aperture: <strong>AUTO</strong></p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-purple-300 mb-2">"The Lennon Challenge"</p>
                  <p className="text-gray-300 text-xs">
                    Reference: Album covers where one band member is pin-sharp while others create ghostly motion trails. 
                    Requires absolute stillness from the anchor subject.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 03: Light Spirographs */}
            <div className="bg-gradient-to-br from-orange-900 to-red-900 rounded-lg p-6">
              <div className="mb-4">
                <span className="text-xs uppercase tracking-wider text-orange-300 font-semibold">STUDIO PROJECT 03</span>
                <h5 className="text-xl font-semibold text-white mt-2">Light Spirographs</h5>
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-orange-300 mb-2">The Technique</p>
                  <p className="text-gray-300">
                    Long exposure <strong>light painting</strong> creating geometric patterns by swinging LED lights 
                    on strings—camera records the entire light path.
                  </p>
                </div>

                <div className="p-4 bg-black/30 rounded">
                  <p className="text-orange-300 font-semibold mb-2">Camera Configuration</p>
                  <div className="space-y-1">
                    <p className="text-gray-300">Mode: <strong>Manual (M)</strong></p>
                    <p className="text-gray-300">Shutter: <strong>10s–30s</strong></p>
                    <p className="text-gray-300">ISO: <strong>100–200</strong></p>
                    <p className="text-gray-300">Aperture: <strong>f/8–f/11</strong></p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-orange-300 mb-2">The Art Form</p>
                  <p className="text-gray-300 text-xs">
                    Each swing creates overlapping light trails. Longer exposures = more complex patterns. 
                    Studio must be completely dark except for the moving light source.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Q&A Session */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">WRAP-UP</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Q&A Session
            </h4>
          </div>

          <div className="space-y-6">
            <div>
              <p className="font-semibold text-orange-600 mb-2">Q: Is it wrong to center my subject?</p>
              <p className="text-gray-700">
                Not at all—centered compositions create <strong>strength and symmetry</strong>. The key is <strong>intention and balance</strong>. 
                Centered framing works beautifully when you have symmetrical elements or want to emphasize a single powerful subject.
              </p>
            </div>

            <div>
              <p className="font-semibold text-orange-600 mb-2">Q: My photos feel flat—how can I add depth?</p>
              <p className="text-gray-700">
                Use <strong>foreground interest</strong>, <strong>leading lines</strong>, or <strong>light gradients</strong> to build layers 
                and guide the eye through the frame. Depth comes from creating visual paths that move from foreground to background.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-2 border-orange-200">
            <h5 className="font-semibold text-orange-900 mb-2">Course Feedback</h5>
            <p className="text-gray-700 mb-4">
              Your input helps us refine the course. Please submit your session feedback via the student portal before next week.
            </p>
            <div className="p-4 bg-white rounded border-l-4 border-orange-500">
              <p className="text-sm text-gray-600 mb-1">Technical Status</p>
              <p className="font-mono text-xs text-gray-800">SESSION_05_COMPLETE // SYSTEM_IDLE</p>
            </div>
          </div>

          <div className="mt-6 p-6 bg-gradient-to-br from-indigo-900 to-blue-900 text-white rounded-lg">
            <p className="text-sm text-blue-300 mb-2">Next Session</p>
            <p className="text-2xl font-semibold">Manual Mode & Creative Exposure</p>
          </div>
        </div>

        {/* Homework: The Motion Challenge */}
        <div className="mb-8 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl p-6 sm:p-8 shadow-lg">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wider text-orange-100 font-semibold">Weekly Assignment</span>
            <h4 className="text-3xl font-semibold text-white mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Homework: The Motion Challenge
            </h4>
            <p className="text-orange-100 mt-2">MOD_05 // PG_12</p>
          </div>

          <div className="bg-white text-gray-900 rounded-lg p-6 mb-6">
            <h5 className="text-xl font-semibold text-gray-900 mb-4">The Task</h5>
            <p className="text-gray-700 mb-4">
              Capture <strong>2 distinct images</strong> demonstrating mastery of Shutter Priority (S/Tv) mode. 
              One image must <strong>freeze high-speed motion</strong>, and the other must show <strong>intentional motion blur</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-cyan-50 rounded border-l-4 border-cyan-500">
                <p className="font-semibold text-cyan-900 mb-2">Image 1: Freeze</p>
                <p className="text-sm text-gray-700">Fast shutter speed (≥1/500s) capturing a decisive moment—action frozen in perfect clarity</p>
              </div>
              <div className="p-4 bg-purple-50 rounded border-l-4 border-purple-500">
                <p className="font-semibold text-purple-900 mb-2">Image 2: Blur</p>
                <p className="text-sm text-gray-700">Slow shutter speed (≤1/30s) showing movement as flowing streaks—time expressed visually</p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded border-2 border-blue-300">
              <p className="font-semibold text-gray-900 mb-2">Goal</p>
              <p className="text-gray-700">
                Master the <strong>temporal control of light</strong>—learning to either suspend a moment in time 
                or express the passage of time through motion blur.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm text-orange-100 mb-1">Deadline</p>
              <p className="font-semibold text-white">Thursday 26th // 18:00</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm text-orange-100 mb-1">Format</p>
              <p className="font-semibold text-white">High-Res JPEG // sRGB</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm text-orange-100 mb-1">Review</p>
              <p className="font-semibold text-white">Ready to discuss next week</p>
            </div>
          </div>

          <div className="p-5 bg-red-900/50 rounded-lg border-2 border-red-300">
            <p className="text-sm text-red-100">
              <strong>💡 PRO TIP:</strong> Use a tripod for your motion blur shot to ensure static elements remain perfectly sharp.
            </p>
          </div>
        </div>

        {/* Studio Practical: Light Trails */}
        <div className="mb-8 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-green-400 font-semibold">PRACTICAL SESSION 01</span>
            <h4 className="text-3xl font-semibold mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Studio: Light Trails
            </h4>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <div className="mb-6">
                <h5 className="text-xl font-semibold text-green-400 mb-4">The Setup</h5>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400">•</span>
                    <p className="text-gray-300">Mount your camera securely on a <strong>tripod</strong></p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400">•</span>
                    <p className="text-gray-300">The studio is equipped with <strong>LED light sticks</strong></p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400">•</span>
                    <p className="text-gray-300">Use <strong>long exposures</strong> to capture the motion of light</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border-2 border-green-500/30">
                <h5 className="text-lg font-semibold text-green-400 mb-4">Camera Configuration</h5>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Mode</p>
                    <p className="text-xl font-bold text-white">Manual (M)</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">ISO</p>
                    <p className="text-xl font-bold text-white">100</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Aperture</p>
                    <p className="text-xl font-bold text-white">f/8.0</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Shutter</p>
                    <p className="text-xl font-bold text-white">1.0 sec</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  *Adjust the aperture to change the intensity of the light trails
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg p-8 border-2 border-green-500/20">
              <div className="text-center">
                <p className="text-6xl mb-4">💡</p>
                <p className="text-2xl font-bold text-green-400 mb-2">Light Painting</p>
                <p className="text-gray-400">
                  Move the LED sticks in sweeping motions during the exposure to create flowing light trails and geometric patterns
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-5 bg-yellow-900/30 rounded-lg border-2 border-yellow-500">
            <h5 className="font-semibold text-yellow-300 mb-2">Experiment & Iterate</h5>
            <p className="text-gray-300 text-sm">
              Try different exposure times (1s–30s), various movements (circles, spirals, linear sweeps), 
              and multiple light sources. Each variation creates unique visual results.
            </p>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              to="/courses/introduction-to-photography/week-04"
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous: Week 4 - Aperture & Depth of Field
            </Link>
            <Link
              to="/courses/introduction-to-photography"
              className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Back to Course Overview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
