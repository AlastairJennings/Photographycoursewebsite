import { Link } from 'react-router';
import { CheckCircle2, ArrowLeft, Image, Aperture, Clock, Zap, Eye, Target, Sun, Moon, Camera } from 'lucide-react';

export function FilmDarkroomWeek03() {
  return (
    <div className="bg-gradient-to-br from-slate-50/30 via-white to-blue-50/30 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-12">
        {/* Back Button */}
        <Link
          to="/courses/film-darkroom"
          className="mb-8 text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Course Overview
        </Link>

        {/* Week Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-6xl font-bold text-gray-300">03</span>
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">Week 03 // Printing First Steps</span>
          </div>
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-slate-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Printing First Steps
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Test Strip, Contact Sheet, Print
          </p>
        </div>

        {/* Module 1: Overview & Learning Outcomes */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_01 // OVERVIEW</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Overview & Learning Outcomes
            </h4>
            <p className="text-gray-600 mt-2">
              Mastering contact sheets and exposure control
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">This Week's Goals</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  Master Contact Sheets
                </h5>
                <p className="text-sm text-gray-700">
                  Learn to create professional contact sheets—visual indexes of all your negatives that help you evaluate, compare, and select the best frames for enlargement.
                </p>
              </div>

              <div className="p-5 bg-cyan-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  Perfect Test Strip Technique
                </h5>
                <p className="text-sm text-gray-700">
                  Master the art of creating test strips to determine optimal exposure times before making full prints—saving time, materials, and frustration.
                </p>
              </div>

              <div className="p-5 bg-purple-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  Understand The Zone System
                </h5>
                <p className="text-sm text-gray-700">
                  Learn Ansel Adams' revolutionary Zone System for visualizing and controlling tones from absolute black to pure white in your final prints.
                </p>
              </div>

              <div className="p-5 bg-indigo-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  Control Exposure with Confidence
                </h5>
                <p className="text-sm text-gray-700">
                  Master exposure compensation, metering techniques, and the golden rule: "Expose for the shadows, develop for the highlights."
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg">
            <h5 className="font-semibold text-gray-900 mb-3">Today's Workflow</h5>
            <div className="grid md:grid-cols-4 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold mb-1">1. Review Negatives</p>
                <p className="text-xs">Evaluate your developed film</p>
              </div>
              <div>
                <p className="font-semibold mb-1">2. Contact Sheets</p>
                <p className="text-xs">Print all frames as thumbnails</p>
              </div>
              <div>
                <p className="font-semibold mb-1">3. Test Strips</p>
                <p className="text-xs">Determine optimal exposure</p>
              </div>
              <div>
                <p className="font-semibold mb-1">4. First Prints</p>
                <p className="text-xs">Make your first enlargements</p>
              </div>
            </div>
          </div>
        </div>

        {/* PART 1 HEADER */}
        <div className="mb-8 bg-slate-800 text-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="text-center">
            <p className="text-red-500 font-semibold mb-2">Part 1</p>
            <h2 className="text-3xl sm:text-4xl tracking-tight mb-3" style={{ fontFamily: 'Roslindale, serif' }}>
              Contact Sheets & Test Strips
            </h2>
            <p className="text-gray-300">Essential skills for evaluating and printing your negatives</p>
          </div>
        </div>

        {/* Module 2: Contact Sheets Explained */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-cyan-600 font-semibold">MODULE_02 // CONTACT_SHEETS</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Contact Sheets Explained
            </h4>
            <p className="text-gray-600 mt-2">
              Your visual catalog of every frame
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">What is a Contact Sheet?</h4>
            <p className="text-gray-700 mb-6 leading-relaxed">
              A contact sheet is a <strong className="text-red-600">photographic print</strong> showing all frames from one or more rolls of film as <strong>thumbnail-sized images</strong>. The name comes from placing negatives in direct contact with photo paper and exposing them under an enlarger.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-3">Archive</h5>
              <p className="text-sm text-gray-700">
                Contact sheets serve as a <strong className="text-red-600">permanent visual record</strong> of your work. Even if negatives are lost or damaged, you have a printed reference.
              </p>
            </div>

            <div className="p-6 bg-cyan-50 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-3">Evaluate</h5>
              <p className="text-sm text-gray-700">
                Quickly <strong className="text-red-600">compare all frames</strong> side-by-side to select the best images for enlargement. See patterns in your shooting style.
              </p>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-3">Reference</h5>
              <p className="text-sm text-gray-700">
                Use loupe or magnifying glass to <strong className="text-red-600">examine details</strong> and decide which frames deserve full-size printing.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-6 rounded-lg">
            <h5 className="font-semibold mb-3">Professional Practice</h5>
            <p className="text-sm">
              Every professional film photographer makes contact sheets first. Icons like Henri Cartier-Bresson, Diane Arbus, and Magnum photographers all used contact sheets to edit their work.
            </p>
          </div>
        </div>

        {/* Module 3: Making a Contact Sheet */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-purple-600 font-semibold">MODULE_03 // TECHNIQUE</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Making a Contact Sheet
            </h4>
            <p className="text-gray-600 mt-2">
              Step-by-step process
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 mb-2">Prepare Negatives</h5>
                  <p className="text-sm text-gray-700">
                    Cut your developed film into <strong className="text-red-600">strips of 6 frames</strong> (or 5 for 35mm). Clean with anti-static brush. Handle by edges only.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-cyan-50 rounded-lg border-l-4 border-cyan-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 mb-2">Set Up Enlarger</h5>
                  <p className="text-sm text-gray-700">
                    Raise enlarger head to cover full 8x10" paper. Set aperture to <strong className="text-red-600">f/8</strong>. Remove negative carrier—we're using the enlarger as a light source only.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg border-l-4 border-purple-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 mb-2">Position Negatives</h5>
                  <p className="text-sm text-gray-700">
                    Place photo paper on baseboard. Lay negative strips <strong className="text-red-600">emulsion-side down</strong> (dull side touching paper). Cover with clean glass sheet.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-orange-50 rounded-lg border-l-4 border-orange-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 mb-2">Expose & Process</h5>
                  <p className="text-sm text-gray-700">
                    Expose for <strong className="text-red-600">8-12 seconds</strong> (test first!). Process normally: Developer → Stop → Fix → Wash → Dry. Typical contact sheet = 10 seconds at f/8.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
            <p className="text-sm text-gray-700">
              <strong>Pro Tip:</strong> Make multiple contact sheets! Keep one clean for archiving, and mark up another with grease pencil to select frames and plan crops.
            </p>
          </div>
        </div>

        {/* Module 4: Test Strips Explained */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-orange-600 font-semibold">MODULE_04 // TEST_STRIPS</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Test Strips Explained
            </h4>
            <p className="text-gray-600 mt-2">
              Finding the perfect exposure before printing
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Test Strips?</h4>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Every negative is different. A test strip shows you <strong className="text-red-600">multiple exposure times on one piece of paper</strong>, helping you determine the optimal exposure before committing to a full print.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border-2 border-blue-200">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">The Concept</h5>
              <p className="text-sm text-gray-700 mb-4">
                Cut a strip of photo paper and expose it in <strong className="text-red-600">incremental steps</strong>, covering portions with cardboard to create bands of different exposure times.
              </p>
              <div className="bg-white p-3 rounded border border-blue-200">
                <p className="text-xs text-gray-700">
                  <strong>Example:</strong> 3, 6, 9, 12, 15 seconds
                </p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border-2 border-orange-200">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">The Result</h5>
              <p className="text-sm text-gray-700 mb-4">
                After processing, you'll see <strong className="text-red-600">5 bands of increasing darkness</strong>. Choose the one with the best tonal range and use that time for your full print.
              </p>
              <div className="bg-white p-3 rounded border border-orange-200">
                <p className="text-xs text-gray-700">
                  <strong>Saves:</strong> Paper, chemistry, and time!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-cyan-600 text-white p-6 rounded-lg">
            <h5 className="font-semibold mb-2">Golden Rule</h5>
            <p className="text-sm">
              <strong>Always make a test strip first.</strong> Even experienced printers test every negative—it's not a shortcut, it's best practice.
            </p>
          </div>
        </div>

        {/* Module 5: Making a Test Strip */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-pink-600 font-semibold">MODULE_05 // PROCESS</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Making a Test Strip
            </h4>
            <p className="text-gray-600 mt-2">
              Step-by-step technique
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 bg-blue-50 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-blue-600">1</span>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Set Up & Focus</h5>
                  <p className="text-sm text-gray-700">
                    Place negative in enlarger carrier. Focus on easel at desired size. Set aperture to <strong className="text-red-600">f/8</strong> (standard working aperture).
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-cyan-50 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-cyan-600">2</span>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Cut Test Strip</h5>
                  <p className="text-sm text-gray-700">
                    Cut an 8x10" sheet into <strong className="text-red-600">4 strips</strong> (2" wide). Save 3 for later tests. Position one strip to include important tones (face, shadows, highlights).
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-purple-600">3</span>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Expose in Steps</h5>
                  <p className="text-sm text-gray-700">
                    Use cardboard to cover 4/5 of strip. Expose for <strong className="text-red-600">3 seconds</strong>. Move card to reveal another 1/5, expose 3 more seconds. Repeat until fully exposed.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-orange-50 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-orange-600">4</span>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Process & Evaluate</h5>
                  <p className="text-sm text-gray-700">
                    Develop normally. Look for the band with <strong className="text-red-600">full tonal range</strong>: rich blacks, detailed shadows, clean highlights. That's your exposure time!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-5 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border-2 border-slate-300">
            <h5 className="font-semibold text-gray-900 mb-3">Common Test Strip Pattern</h5>
            <div className="grid grid-cols-5 gap-2 text-center text-sm">
              <div className="bg-gray-900 text-white p-3 rounded">3s</div>
              <div className="bg-gray-700 text-white p-3 rounded">6s</div>
              <div className="bg-gray-500 text-white p-3 rounded">9s</div>
              <div className="bg-gray-300 p-3 rounded">12s</div>
              <div className="bg-gray-100 p-3 rounded border border-gray-300">15s</div>
            </div>
            <p className="text-xs text-gray-600 mt-2 text-center">Each band receives cumulative exposure</p>
          </div>
        </div>

        {/* Module 6: The Enlarger Explained */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-indigo-600 font-semibold">MODULE_06 // EQUIPMENT</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              The Enlarger Explained
            </h4>
            <p className="text-gray-600 mt-2">
              Your essential printing tool
            </p>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 mb-6 leading-relaxed">
              The enlarger is essentially a <strong className="text-red-600">projector for negatives</strong>. Light passes through your negative and projects the image onto photographic paper below. By raising or lowering the head, you control the size of the projected image.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg border-t-4 border-blue-600">
              <h5 className="font-semibold text-gray-900 mb-3">Light Source</h5>
              <p className="text-sm text-gray-700 mb-3">
                Lamp (usually tungsten or LED) provides bright, even illumination through the negative.
              </p>
              <div className="bg-white p-2 rounded text-xs text-gray-600">
                Controls brightness intensity
              </div>
            </div>

            <div className="p-6 bg-cyan-50 rounded-lg border-t-4 border-cyan-600">
              <h5 className="font-semibold text-gray-900 mb-3">Negative Carrier</h5>
              <p className="text-sm text-gray-700 mb-3">
                Holds your negative flat between two glass or glassless plates for sharp projection.
              </p>
              <div className="bg-white p-2 rounded text-xs text-gray-600">
                Keeps negative aligned & flat
              </div>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg border-t-4 border-purple-600">
              <h5 className="font-semibold text-gray-900 mb-3">Lens & Aperture</h5>
              <p className="text-sm text-gray-700 mb-3">
                Projects and focuses the image. Aperture controls sharpness and exposure intensity.
              </p>
              <div className="bg-white p-2 rounded text-xs text-gray-600">
                f/8 is standard working aperture
              </div>
            </div>
          </div>
        </div>

        {/* Module 7: Print Processing Chemistry */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-green-600 font-semibold">MODULE_07 // CHEMISTRY</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Print Processing Chemistry
            </h4>
            <p className="text-gray-600 mt-2">
              Three trays, three chemicals
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 mb-2">Developer</h5>
                  <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700 mb-2">
                    <div>
                      <p className="font-semibold">Time:</p>
                      <p>1-2 minutes</p>
                    </div>
                    <div>
                      <p className="font-semibold">Temp:</p>
                      <p>20°C (68°F)</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Brings out the latent image on the paper. Watch your image appear like magic! Common developers: Ilford Multigrade, Kodak Dektol.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-amber-50 rounded-lg border-l-4 border-amber-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 mb-2">Stop Bath</h5>
                  <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700 mb-2">
                    <div>
                      <p className="font-semibold">Time:</p>
                      <p>10-30 seconds</p>
                    </div>
                    <div>
                      <p className="font-semibold">Temp:</p>
                      <p>18-24°C</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Neutralizes developer, halting the development process instantly. Extends fixer life and prevents staining.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg border-l-4 border-purple-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 mb-2">Fixer</h5>
                  <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700 mb-2">
                    <div>
                      <p className="font-semibold">Time:</p>
                      <p>3-5 minutes</p>
                    </div>
                    <div>
                      <p className="font-semibold">Temp:</p>
                      <p>18-24°C</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Makes your print permanent by removing unexposed silver. After 1 minute in fixer, you can turn on the lights!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-cyan-50 rounded-lg border-l-4 border-cyan-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 mb-2">Wash & Dry</h5>
                  <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700 mb-2">
                    <div>
                      <p className="font-semibold">Wash:</p>
                      <p>5-10 minutes</p>
                    </div>
                    <div>
                      <p className="font-semibold">Dry:</p>
                      <p>30-60 minutes</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Running water removes all chemical residue. RC paper dries quickly; fiber-based takes longer but lasts centuries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Module 8: Making Your First Print */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-red-600 font-semibold">MODULE_08 // PRINTING</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Making Your First Print
            </h4>
            <p className="text-gray-600 mt-2">
              Bringing it all together
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">1</span>
                Select Your Negative
              </h5>
              <p className="text-sm text-gray-700">
                Use your contact sheet to choose a well-exposed negative with good contrast and interesting composition.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-cyan-50 to-purple-50 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm">2</span>
                Compose & Focus
              </h5>
              <p className="text-sm text-gray-700">
                Set up your enlarger, compose the image on the easel, and focus critically using a grain focuser.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm">3</span>
                Make Test Strip
              </h5>
              <p className="text-sm text-gray-700">
                Create a test strip to determine the perfect exposure time (typically 8-15 seconds at f/8).
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center text-sm">4</span>
                Expose Full Print
              </h5>
              <p className="text-sm text-gray-700">
                Using the time from your test strip, expose a full sheet of paper. Process in developer, stop, and fixer.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm">5</span>
                Wash & Dry
              </h5>
              <p className="text-sm text-gray-700">
                Wash thoroughly to remove all chemistry, then dry flat or hang to dry. Congratulations—you've made your first print!
              </p>
            </div>
          </div>
        </div>

        {/* Module 9: Common First Print Problems */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-rose-600 font-semibold">MODULE_09 // TROUBLESHOOTING</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Common First Print Problems
            </h4>
            <p className="text-gray-600 mt-2">
              Troubleshooting and solutions
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-red-50 rounded-lg border-l-4 border-red-600">
              <h5 className="font-semibold text-gray-900 text-lg flex items-center gap-2 mb-3">
                ❌ Print Too Dark
              </h5>
              <div className="mb-4">
                <p className="text-sm text-gray-700 mb-2"><strong>Problem:</strong></p>
                <p className="text-sm text-gray-700">Image is underexposed with blocked shadows and no detail</p>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-2"><strong>Solution:</strong></p>
                <p className="text-sm text-gray-700">
                  ➜ <strong>Increase exposure time</strong> by 2-3 seconds. Check that aperture is open enough (try f/5.6 instead of f/11).
                </p>
              </div>
            </div>

            <div className="p-6 bg-amber-50 rounded-lg border-l-4 border-amber-600">
              <h5 className="font-semibold text-gray-900 text-lg flex items-center gap-2 mb-3">
                ❌ Print Too Light
              </h5>
              <div className="mb-4">
                <p className="text-sm text-gray-700 mb-2"><strong>Problem:</strong></p>
                <p className="text-sm text-gray-700">Image is washed out with blocked highlights and no detail</p>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-2"><strong>Solution:</strong></p>
                <p className="text-sm text-gray-700">
                  ➜ <strong>Decrease exposure time</strong> by 2-3 seconds. Check that safelight isn't too bright (test with paper).
                </p>
              </div>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg border-l-4 border-purple-600">
              <h5 className="font-semibold text-gray-900 text-lg flex items-center gap-2 mb-3">
                ❌ Image Out of Focus
              </h5>
              <div className="mb-4">
                <p className="text-sm text-gray-700 mb-2"><strong>Problem:</strong></p>
                <p className="text-sm text-gray-700">Print is blurry or soft, lacking sharpness and detail</p>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-2"><strong>Solution:</strong></p>
                <p className="text-sm text-gray-700">
                  ➜ <strong>Refocus the enlarger</strong> on the easel using a grain focuser. Check that negative carrier is properly seated and negative is flat.
                </p>
              </div>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <h5 className="font-semibold text-gray-900 text-lg flex items-center gap-2 mb-3">
                ❌ Dust Spots or Marks
              </h5>
              <div className="mb-4">
                <p className="text-sm text-gray-700 mb-2"><strong>Problem:</strong></p>
                <p className="text-sm text-gray-700">Black or white spots on the print from dust on negative or lens</p>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-2"><strong>Solution:</strong></p>
                <p className="text-sm text-gray-700">
                  ➜ <strong>Clean the negative</strong> with an antistatic brush before printing. Clean the enlarger lens with lens paper. Work in a clean environment.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-600">
            <p className="text-sm text-gray-700 font-semibold text-center">
              💡 Remember: Every mistake is a learning opportunity. Keep notes of your settings and results!
            </p>
          </div>
        </div>

        {/* PART 2 HEADER */}
        <div className="mb-8 bg-slate-800 text-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="text-center">
            <p className="text-red-500 font-semibold mb-2">Part 2</p>
            <h2 className="text-3xl sm:text-4xl tracking-tight mb-3" style={{ fontFamily: 'Roslindale, serif' }}>
              Exposure, Metering & The Zone System
            </h2>
            <p className="text-gray-300">Advanced theory for precise exposure control and tonal visualization</p>
          </div>
        </div>

        {/* Module 10: Exposure Triangle & The Zone System */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-indigo-600 font-semibold">MODULE_10 // THEORY</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Exposure Triangle & The Zone System
            </h4>
            <p className="text-gray-600 mt-2">
              Understanding exposure and Ansel Adams' legacy
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Exposure Triangle Recap</h4>
            <div className="grid md:grid-cols-3 gap-6 mb-4">
              <div className="p-6 bg-blue-50 rounded-lg border-t-4 border-blue-600">
                <Aperture className="w-10 h-10 text-blue-600 mb-3" />
                <h5 className="font-semibold text-gray-900 mb-3">Aperture</h5>
                <p className="text-sm text-gray-700 mb-2">
                  The size of the lens opening. Controls the amount of light entering the camera.
                </p>
                <p className="text-xs text-gray-600 italic">
                  <strong>Effect:</strong> Depth of Field
                </p>
              </div>

              <div className="p-6 bg-purple-50 rounded-lg border-t-4 border-purple-600">
                <Clock className="w-10 h-10 text-purple-600 mb-3" />
                <h5 className="font-semibold text-gray-900 mb-3">Shutter Speed</h5>
                <p className="text-sm text-gray-700 mb-2">
                  The duration the shutter remains open. Controls the duration of light exposure.
                </p>
                <p className="text-xs text-gray-600 italic">
                  <strong>Effect:</strong> Motion Blur/Freeze
                </p>
              </div>

              <div className="p-6 bg-amber-50 rounded-lg border-t-4 border-amber-600">
                <Zap className="w-10 h-10 text-amber-600 mb-3" />
                <h5 className="font-semibold text-gray-900 mb-3">ISO Sensitivity</h5>
                <p className="text-sm text-gray-700 mb-2">
                  The film's sensitivity to light. Fixed for film (unless push/pull processing).
                </p>
                <p className="text-xs text-gray-600 italic">
                  <strong>Effect:</strong> Grain Structure
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-700 text-center italic">
              Balancing these three elements is the key to a perfect exposure.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">The Zone System</h4>
            <div className="p-6 bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg border-l-4 border-slate-700 mb-6">
              <p className="text-gray-700 italic mb-2 text-lg">
                "The negative is the score, and the print is the performance."
              </p>
              <p className="text-sm text-gray-600">— Ansel Adams</p>
            </div>

            <p className="text-gray-700 mb-6">
              <strong>Developed by Ansel Adams and Fred Archer in 1940</strong>
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="p-5 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-3">The Core Concept</h5>
                <p className="text-sm text-gray-700">
                  Divides tones from absolute black to pure white into <strong>11 zones</strong> (0 to X). This gives you a precise vocabulary for describing and controlling tonality.
                </p>
              </div>

              <div className="p-5 bg-cyan-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-3">Pre-Visualization</h5>
                <p className="text-sm text-gray-700">
                  Before shooting, <strong>visualize the final print</strong>. Decide which tones should fall into which zones, then expose and develop accordingly.
                </p>
              </div>

              <div className="p-5 bg-purple-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-3">The Philosophy</h5>
                <p className="text-sm text-gray-700">
                  <strong>"Expose for the shadows, develop for the highlights."</strong> The Zone System gives you total control over the final image.
                </p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-100 rounded-lg">
              <h5 className="font-semibold text-white mb-4">The 11 Zones</h5>
              <div className="grid grid-cols-11 gap-1 mb-3">
                <div className="bg-black text-white text-center text-xs py-2 rounded">0</div>
                <div className="bg-gray-900 text-white text-center text-xs py-2 rounded">I</div>
                <div className="bg-gray-800 text-white text-center text-xs py-2 rounded">II</div>
                <div className="bg-gray-700 text-white text-center text-xs py-2 rounded">III</div>
                <div className="bg-gray-600 text-white text-center text-xs py-2 rounded">IV</div>
                <div className="bg-gray-500 text-white text-center text-xs py-2 rounded">V</div>
                <div className="bg-gray-400 text-center text-xs py-2 rounded">VI</div>
                <div className="bg-gray-300 text-center text-xs py-2 rounded">VII</div>
                <div className="bg-gray-200 text-center text-xs py-2 rounded">VIII</div>
                <div className="bg-gray-100 text-center text-xs py-2 rounded border border-gray-300">IX</div>
                <div className="bg-white text-center text-xs py-2 rounded border border-gray-400">X</div>
              </div>
              <p className="text-xs text-cyan-200 text-center">
                Zone 0 = Pure Black | Zone V = Middle Grey (18%) | Zone X = Pure White
              </p>
            </div>
          </div>
        </div>

        {/* Homework Assignment */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm border-2 border-orange-200">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-orange-600 font-semibold">HOMEWORK_03</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              This Week's Assignment
            </h4>
          </div>

          <div className="p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg mb-6">
            <h5 className="text-lg font-semibold text-gray-900 mb-4">Your Tasks</h5>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Make Contact Sheets</p>
                  <p className="text-sm text-gray-700">Create professional contact sheets of all your developed negatives</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Practice Test Strips</p>
                  <p className="text-sm text-gray-700">Make test strips for 3 different negatives</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Make 3 Final Prints</p>
                  <p className="text-sm text-gray-700">Produce three 8x10" prints from your best negatives</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Document Everything</p>
                  <p className="text-sm text-gray-700">Record all exposure times, apertures, and processing notes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg text-center">
            <p className="font-bold text-lg">Bring your prints to class!</p>
          </div>
        </div>

      </div>
    </div>
  );
}
