import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function IntroPhotoWeek04() {
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
            <span className="text-6xl font-bold text-gray-300">04</span>
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">Module 04 // Optics</span>
          </div>
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Aperture & Depth of Field Mastery
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Creative Photography and Portfolio Development
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
              <div className="flex items-start gap-3 py-2 bg-violet-50 -mx-2 px-2 rounded border-l-4 border-violet-600">
                <span className="text-violet-600 font-bold">04</span>
                <span className="text-gray-900 font-semibold">Aperture / ISO</span>
              </div>
              <div className="flex items-start gap-3 py-2">
                <span className="text-orange-600 font-bold">05</span>
                <span className="text-gray-700">Shutter speed / ISO</span>
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
        <div className="mb-8 p-6 sm:p-8 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Tonight's Agenda</h4>
          <p className="text-sm text-gray-600 mb-6 italic">Session Plan // 04</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-violet-600">01</span>
              <div>
                <p className="font-semibold text-gray-900">Student Review</p>
                <p className="text-sm text-gray-600">Composition Challenge</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-violet-600">02</span>
              <div>
                <p className="font-semibold text-gray-900">Technical Task</p>
                <p className="text-sm text-gray-600">The Exposure Shift</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-violet-600">03</span>
              <div>
                <p className="font-semibold text-gray-900">The Mechanics</p>
                <p className="text-sm text-gray-600">Aperture Blades & F-Stops</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-violet-600">04</span>
              <div>
                <p className="font-semibold text-gray-900">Optical Pillars</p>
                <p className="text-sm text-gray-600">Depth of Field Control</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-violet-600">05</span>
              <div>
                <p className="font-semibold text-gray-900">Studio Projects</p>
                <p className="text-sm text-gray-600">Bokeh, Largo, Macro, Miniature</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-violet-600">06</span>
              <div>
                <p className="font-semibold text-gray-900">Homework</p>
                <p className="text-sm text-gray-600">The Aperture Storyboard</p>
              </div>
            </div>
          </div>
        </div>

        {/* Student Review - Week 3 Composition Challenge */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">REVIEW_SESSION // 03</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Student Review
            </h4>
            <p className="text-gray-600 mt-2">
              Critiquing the Week 3 Composition Challenge: Moving from snapshots to intentional framing.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg mb-6">
            <h5 className="text-lg font-semibold text-gray-900 mb-4">The Composition Toolkit Checklist</h5>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-blue-600">01</span>
                <span className="text-gray-700">Rule of Thirds & Grid Alignment</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-blue-600">02</span>
                <span className="text-gray-700">Simplifying the Scene</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-blue-600">03</span>
                <span className="text-gray-700">Filling the Frame</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-blue-600">04</span>
                <span className="text-gray-700">Leading Lines & Visual Paths</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-blue-600">05</span>
                <span className="text-gray-700">Perspective & Angle Shifts</span>
              </div>
            </div>
          </div>

          <div className="p-5 bg-white border-2 border-blue-200 rounded-lg">
            <h5 className="font-semibold text-gray-900 mb-2">Critique Focus</h5>
            <p className="text-gray-700">
              Analyze the <strong>intentionality</strong> of the framing. Does the composition <strong>guide</strong> the viewer's eye? 
              How does the chosen rule impact the <strong>narrative</strong> of the image?
            </p>
          </div>
        </div>

        {/* Technical Task: The Exposure Shift */}
        <div className="mb-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-orange-400 font-semibold">TASK_BB // C4A</span>
            <h4 className="text-3xl font-semibold mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Technical Task:<br />The Exposure Shift
            </h4>
          </div>

          <div className="mb-6 p-4 bg-black/30 rounded-lg">
            <p className="text-sm text-gray-300 mb-1">Fixed Baseline Settings</p>
            <p className="text-2xl font-bold text-orange-400">ISO 100 // 1/60s</p>
          </div>

          <div className="bg-white text-gray-900 rounded-lg p-6">
            <h5 className="text-lg font-semibold mb-4">Practical Exercise: Light Volume</h5>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-orange-600">01</span>
                <div>
                  <p className="font-semibold text-gray-900">Establish Neutral Baseline</p>
                  <p className="text-sm text-gray-700">
                    Adjust your <strong>Aperture</strong> until the light meter indicates a correct exposure (0). Take the shot.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-orange-600">02</span>
                <div>
                  <p className="font-semibold text-gray-900">The Overexposure Test</p>
                  <p className="text-sm text-gray-700">
                    Open the aperture to overexpose by <strong>+1 stop</strong>, then <strong>+2 stops</strong>. Observe the loss of detail in highlights.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-orange-600">03</span>
                <div>
                  <p className="font-semibold text-gray-900">The Underexposure Test</p>
                  <p className="text-sm text-gray-700">
                    Close the aperture to underexpose by <strong>-1 stop</strong>, then <strong>-2 stops</strong>. Observe the shift into deep shadows.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-orange-600">04</span>
                <div>
                  <p className="font-semibold text-gray-900">Review & Compare</p>
                  <p className="text-sm text-gray-700">
                    Analyze the five images. Note how the <strong>Aperture size</strong> alone dictated the brightness while Shutter and ISO remained static.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Mechanics: Aperture Blades */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-gray-500 font-semibold">MOD_04 // OPTICS // PG_06</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              The Mechanics: Aperture Blades
            </h4>
          </div>

          <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-6">
            <div className="text-center mb-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-semibold text-gray-900">Larger Aperture</p>
                  <p className="text-sm text-gray-600">More Light</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Smaller Aperture</p>
                  <p className="text-sm text-gray-600">Less Light</p>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gray-200 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white"></div>
                  </div>
                  <p className="text-sm font-semibold">f/1.4</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gray-200 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white"></div>
                  </div>
                  <p className="text-sm font-semibold">f/2</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gray-200 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white"></div>
                  </div>
                  <p className="text-sm font-semibold">f/2.8</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gray-200 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white"></div>
                  </div>
                  <p className="text-sm font-semibold">f/4</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gray-400 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white"></div>
                  </div>
                  <p className="text-sm font-semibold">f/5.6</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gray-400 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-white"></div>
                  </div>
                  <p className="text-sm font-semibold">f/8</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gray-600 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                  </div>
                  <p className="text-sm font-semibold">f/11</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gray-600 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <p className="text-sm font-semibold">f/16</p>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4 text-sm">
                <div>
                  <p className="font-bold text-orange-600">f/2.8</p>
                  <p className="text-gray-600">Wide Open</p>
                </div>
                <div>
                  <p className="font-bold text-orange-600">f/5.6</p>
                  <p className="text-gray-600">Mid Range</p>
                </div>
                <div>
                  <p className="font-bold text-orange-600">f/8</p>
                  <p className="text-gray-600">Sweet Spot</p>
                </div>
                <div>
                  <p className="font-bold text-orange-600">f/11</p>
                  <p className="text-gray-600">Narrow</p>
                </div>
                <div>
                  <p className="font-bold text-orange-600">f/16</p>
                  <p className="text-gray-600">Smallest</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg">
            <p className="text-sm mb-2 text-gray-400">Aperture_Logic_V1</p>
            <p className="text-base">
              The <span className="text-orange-400 font-semibold">F-Number</span> is a ratio. As the number increases, the physical opening decreases, allowing <span className="text-orange-400 font-semibold">less light</span> to reach the sensor.
            </p>
          </div>
        </div>

        {/* Setting Aperture Priority (Av/A) */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-fuchsia-600 font-semibold">CONTROL_LOGIC // 04</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Setting Aperture Priority (Av/A)
            </h4>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-lg">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">The User's Role</h5>
              <p className="text-gray-700">
                You select the <strong>Aperture Value (f-stop)</strong> to control the Depth of Field and creative look of the image.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">The Camera's Role</h5>
              <p className="text-gray-700">
                The camera automatically calculates and sets the <strong>Shutter Speed</strong> to ensure a balanced exposure.
              </p>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-r from-violet-100 to-fuchsia-100 rounded-lg">
            <h5 className="font-semibold text-gray-900 mb-2">When to use</h5>
            <p className="text-gray-700">
              Ideal for <strong>Portraits</strong> (shallow DOF) or <strong>Landscapes</strong> (deep DOF) where focus control is the priority.
            </p>
          </div>
        </div>

        {/* The Three Pillars of Depth of Field */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-gray-500 font-semibold">MOD_04 // OPTICS // PG_08</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              The Three Pillars of Depth of Field
            </h4>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Pillar 01: Aperture Size */}
            <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border-l-4 border-blue-500">
              <div className="mb-4">
                <span className="text-3xl font-bold text-blue-600">01</span>
                <h5 className="text-xl font-bold text-gray-900 mt-2">Aperture Size</h5>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                The most direct control. <strong>Wide apertures</strong> (f/2.8) create shallow focus, while <strong>narrow apertures</strong> (f/16) maximize sharpness from front to back.
              </p>
            </div>

            {/* Pillar 02: Focal Length */}
            <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500">
              <div className="mb-4">
                <span className="text-3xl font-bold text-green-600">02</span>
                <h5 className="text-xl font-bold text-gray-900 mt-2">Focal Length</h5>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                <strong>Telephoto lenses</strong> (200mm) compress the scene and exaggerate background blur. <strong>Wide lenses</strong> (18mm) naturally provide a deeper zone of focus.
              </p>
            </div>

            {/* Pillar 03: Subject Distance */}
            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-500">
              <div className="mb-4">
                <span className="text-3xl font-bold text-purple-600">03</span>
                <h5 className="text-xl font-bold text-gray-900 mt-2">Subject Distance</h5>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                The closer you are to your subject, the <strong>shallower</strong> the depth of field becomes. Moving away increases the depth of the focused area.
              </p>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="font-semibold mb-1">Pro Tip:</p>
              <p className="text-sm">
                To maximize background blur (bokeh), use your <strong>longest focal length</strong>, <strong>widest aperture</strong>, and get as <strong>close to your subject</strong> as possible.
              </p>
            </div>
          </div>
        </div>

        {/* Studio Project 04.1: The Bokeh Portrait */}
        <div className="mb-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-fuchsia-400 font-semibold">STUDIO_PROJECT // 04.1</span>
            <h4 className="text-3xl font-semibold mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              The Bokeh Portrait
            </h4>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h5 className="text-lg font-semibold mb-4 text-fuchsia-300">Technical Setup</h5>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-fuchsia-400 text-xl font-bold">■</span>
                  <div>
                    <p className="font-semibold">Mode:</p>
                    <p className="text-sm text-gray-300">Aperture Priority (Av / A)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-fuchsia-400 text-xl font-bold">■</span>
                  <div>
                    <p className="font-semibold">Aperture:</p>
                    <p className="text-sm text-gray-300">Set to widest (e.g., f/1.8, f/2.8, or f/5.6)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-fuchsia-400 text-xl font-bold">■</span>
                  <div>
                    <p className="font-semibold">Focal Length:</p>
                    <p className="text-sm text-gray-300">Zoom to maximum (e.g., 55mm or 105mm)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h5 className="text-lg font-semibold mb-4 text-orange-300">The Task</h5>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 text-xl font-bold">■</span>
                  <p className="text-sm text-gray-300">
                    Position your subject at least <strong>3 meters</strong> away from the background.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 text-xl font-bold">■</span>
                  <p className="text-sm text-gray-300">
                    Focus precisely on the <strong>subject's eyes</strong>.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 text-xl font-bold">■</span>
                  <p className="text-sm text-gray-300">
                    Observe how the background "melts" into a soft blur (Bokeh).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Project 04.2: The Lego Diagonal */}
        <div className="mb-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-orange-400 font-semibold">STUDIO_PROJECT // 04.2</span>
            <h4 className="text-3xl font-semibold mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              The Lego Diagonal
            </h4>
            <p className="text-gray-300 mt-2">Visualizing DOF Expansion</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h5 className="text-lg font-semibold mb-4 text-orange-300">Technical Setup</h5>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 text-xl font-bold">■</span>
                  <div>
                    <p className="font-semibold">Focal Length:</p>
                    <p className="text-sm text-gray-300">55mm</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 text-xl font-bold">■</span>
                  <div>
                    <p className="font-semibold">Focus:</p>
                    <p className="text-sm text-gray-300">Center Figure</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 text-xl font-bold">■</span>
                  <div>
                    <p className="font-semibold">Mode:</p>
                    <p className="text-sm text-gray-300">Aperture Priority</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h5 className="text-lg font-semibold mb-4 text-cyan-300">Visualizing DOF Expansion</h5>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-orange-400 mb-1">01 • The Setup</p>
                  <p className="text-sm text-gray-300">Position 5 Lego figures in a <strong>diagonal line</strong>. The first figure should be close to the lens, the last in the distance.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-orange-400 mb-1">02 • The Wide Shot (f/5.6)</p>
                  <p className="text-sm text-gray-300">Set your aperture to <strong>f/5.6</strong>. Focus on the center figure. Observe how the front and back figures fall into blur.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-orange-400 mb-1">03 • The Progression</p>
                  <p className="text-sm text-gray-300">Take three more shots at <strong>f/8, f/11, and f/16</strong>. Watch the "zone of acceptable focus" expand across the diagonal.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-orange-400 mb-1">04 • Data Tracking</p>
                  <p className="text-sm text-gray-300">Note the <strong>ISO and Shutter Speed</strong> for each shot. Observe how the camera compensates for the smaller aperture.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Project 04.3: Macro Textures */}
        <div className="mb-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-400 font-semibold">STUDIO_PROJECT // 04.3</span>
            <h4 className="text-3xl font-semibold mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Macro Textures
            </h4>
            <p className="text-gray-300 mt-2">The Challenge: Paper-Thin DOF</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h5 className="text-lg font-semibold mb-4 text-blue-300">The Challenge: Paper-Thin DOF</h5>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-orange-400 mb-1">01 • Subject & Proximity</p>
                  <p className="text-sm text-gray-300">Select a textured subject (flower, fabric, or circuit board). Set your focal length to the maximum and move to the <strong>minimum focus distance</strong>.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-orange-400 mb-1">02 • Wide Open (f/5.6)</p>
                  <p className="text-sm text-gray-300">Focus on a specific detail. Observe how the depth of field is almost non-existent, with only a sliver of the subject in focus.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-orange-400 mb-1">03 • Closing Down (f/11 - f/22)</p>
                  <p className="text-sm text-gray-300">Gradually narrow the aperture. Note how much more detail is revealed, but be aware of the <strong>diffraction penalty</strong> at extreme settings.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h5 className="text-lg font-semibold mb-4 text-pink-300">Technical Insight</h5>
              <div className="p-4 bg-white/5 rounded-lg border-l-4 border-orange-400">
                <p className="text-sm italic text-gray-300">
                  In macro photography, the closer you are to the subject, the shallower the depth of field becomes. Even at <strong>f/16</strong>, your focus zone may only be a few millimeters deep.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Project 04.4: Miniature Landscapes */}
        <div className="mb-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-green-400 font-semibold">STUDIO_PROJECT // 04.4</span>
            <h4 className="text-3xl font-semibold mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Miniature Landscapes
            </h4>
            <p className="text-gray-300 mt-2">The Challenge: Infinite Focus</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h5 className="text-lg font-semibold mb-4 text-green-300">The Challenge: Infinite Focus</h5>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-orange-400 mb-1">01 • Wide-Angle Selection</p>
                  <p className="text-sm text-gray-300">Set your lens to its <strong>widest focal length</strong> (e.g., 18mm). This naturally provides a deeper zone of focus.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-orange-400 mb-1">02 • Hyperfocal Focusing</p>
                  <p className="text-sm text-gray-300">Focus on a point about <strong>one-third of the way into the scene</strong>. This maximizes the depth of field from the foreground to the horizon.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-orange-400 mb-1">03 • Aperture Bracketing (f/8 - f/22)</p>
                  <p className="text-sm text-gray-300">Take a series of shots starting at <strong>f/8</strong> and closing down to <strong>f/22</strong>. Observe how the sharpness increases across the entire frame.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h5 className="text-lg font-semibold mb-4 text-cyan-300">Technical Insight</h5>
              <div className="p-4 bg-white/5 rounded-lg border-l-4 border-orange-400">
                <p className="text-sm italic text-gray-300">
                  While narrow apertures increase depth of field, extreme settings like <strong>f/22</strong> can introduce <strong>diffraction</strong>, which slightly softens the overall image.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder for slide 13 */}
        <div className="mb-8 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 sm:p-8">
          <p className="text-gray-700 text-center font-semibold mb-2">
            📚 Final slide (13) with homework details will be added once uploaded
          </p>
        </div>

        {/* Homework Assignment - Placeholder */}
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 sm:p-8 shadow-sm">
          <h4 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Homework: <span className="text-violet-600">The Aperture Storyboard</span>
          </h4>

          <div className="space-y-6">
            <div className="p-5 bg-white rounded-lg border-2 border-violet-300">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Assignment Overview</h5>
              <p className="text-gray-700">
                Detailed homework instructions will be added once slide 13 is uploaded.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}