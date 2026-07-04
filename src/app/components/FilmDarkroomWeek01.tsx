import { Link } from 'react-router';
import { ArrowLeft, Camera, Beaker, ImageIcon, CheckCircle2 } from 'lucide-react';

export function FilmDarkroomWeek01() {
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
            <span className="text-6xl font-bold text-gray-300">01</span>
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">Week 01 // Introduction</span>
          </div>
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-slate-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Introduction to Analog Photography
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Welcome to Film & Darkroom Photography! This week provides a comprehensive overview of the entire analog workflow—from camera to final print.
          </p>
        </div>

        {/* Course Overview */}
        <div className="mb-8 p-6 sm:p-8 bg-white rounded-xl shadow-sm">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">10-Week Course Structure</h4>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-start gap-3 py-2 bg-blue-50 -mx-2 px-2 rounded border-l-4 border-blue-600">
                <span className="text-blue-600 font-bold">01</span>
                <span className="text-gray-900 font-semibold">Introduction to Analog Photography</span>
              </div>
              <div className="flex items-start gap-3 py-2">
                <span className="text-slate-600 font-bold">02</span>
                <span className="text-gray-700">Film Development</span>
              </div>
              <div className="flex items-start gap-3 py-2">
                <span className="text-slate-600 font-bold">03</span>
                <span className="text-gray-700">Printing First Steps</span>
              </div>
              <div className="flex items-start gap-3 py-2">
                <span className="text-slate-600 font-bold">04</span>
                <span className="text-gray-700">Printing and Grading</span>
              </div>
              <div className="flex items-start gap-3 py-2">
                <span className="text-slate-600 font-bold">05</span>
                <span className="text-gray-700">Dodging & Burning</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-3 py-2">
                <span className="text-slate-600 font-bold">06</span>
                <span className="text-gray-700">Creative Darkroom Techniques</span>
              </div>
              <div className="flex items-start gap-3 py-2">
                <span className="text-slate-600 font-bold">07</span>
                <span className="text-gray-700">Portfolio Development</span>
              </div>
              <div className="flex items-start gap-3 py-2">
                <span className="text-slate-600 font-bold">08</span>
                <span className="text-gray-700">Alternative Processes</span>
              </div>
              <div className="flex items-start gap-3 py-2">
                <span className="text-slate-600 font-bold">09</span>
                <span className="text-gray-700">Final Project Work</span>
              </div>
              <div className="flex items-start gap-3 py-2">
                <span className="text-slate-600 font-bold">10</span>
                <span className="text-gray-700">Exhibition & Presentation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tonight's Overview */}
        <div className="mb-8 p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">This Week's Overview</h4>
          <p className="text-sm text-gray-600 mb-6 italic">Session Plan // 01</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-blue-600">01</span>
              <div>
                <p className="font-semibold text-gray-900">Film Camera Components</p>
                <p className="text-sm text-gray-600">Understanding 35mm cameras</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-blue-600">02</span>
              <div>
                <p className="font-semibold text-gray-900">Film Development Process</p>
                <p className="text-sm text-gray-600">Tank, chemicals, workflow</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-blue-600">03</span>
              <div>
                <p className="font-semibold text-gray-900">Darkroom Equipment</p>
                <p className="text-sm text-gray-600">Enlarger, trays, paper</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-blue-600">04</span>
              <div>
                <p className="font-semibold text-gray-900">The Printing Workflow</p>
                <p className="text-sm text-gray-600">From negative to print</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-blue-600">05</span>
              <div>
                <p className="font-semibold text-gray-900">Complete Workflow Map</p>
                <p className="text-sm text-gray-600">End-to-end process</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-blue-600">06</span>
              <div>
                <p className="font-semibold text-gray-900">Homework Assignment</p>
                <p className="text-sm text-gray-600">Shoot your first roll</p>
              </div>
            </div>
          </div>
        </div>

        {/* Module 1: Film Camera & Components */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-slate-600 font-semibold">MODULE_01 // CAMERA</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Film Camera & Essential Components
            </h4>
            <p className="text-gray-600 mt-2">
              Understanding your 35mm camera and its mechanical components
            </p>
          </div>

          <div className="mb-6">
            <h5 className="text-lg font-semibold text-gray-900 mb-4">The Film Camera</h5>
            <p className="text-gray-700 mb-4">
              The 35mm film camera is your primary tool for capturing images. Unlike digital cameras, film cameras require manual control of exposure settings and physical film loading. 
              This hands-on approach deepens your understanding of photographic fundamentals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-slate-50 rounded-lg">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">Camera Anatomy</h5>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Camera className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Camera Body:</strong> Light-tight housing that holds film and protects it from exposure
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Shutter:</strong> Mechanical curtain that controls exposure time
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Aperture:</strong> Adjustable lens opening that controls light amount
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Focus Ring:</strong> Manual control for achieving sharp images
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Film Advance Lever:</strong> Advances film to next frame
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Viewfinder:</strong> Optical window for composing shots
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">Manual Controls</h5>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-0.5">①</span>
                  <div>
                    <strong>Shutter Speed Dial:</strong> Controls exposure duration (1/1000s to multiple seconds)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-0.5">②</span>
                  <div>
                    <strong>Aperture Ring:</strong> Sets f-stop (f/1.4 to f/22 typical range)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-0.5">③</span>
                  <div>
                    <strong>ISO Setting:</strong> Dial to match your film's sensitivity rating
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-0.5">④</span>
                  <div>
                    <strong>Light Meter:</strong> Built-in meter guides proper exposure
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-0.5">⑤</span>
                  <div>
                    <strong>Rewind Crank:</strong> Manually rewinds exposed film into canister
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
            <p className="text-sm text-gray-700">
              <strong>Pro Tip:</strong> Treat your film camera with care—these are precision mechanical instruments. Always advance the film gently, and never force any controls.
            </p>
          </div>
        </div>

        {/* Module 2: Film Development Process */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-slate-600 font-semibold">MODULE_02 // DEVELOPMENT</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Film Development Process
            </h4>
            <p className="text-gray-600 mt-2">
              Transforming exposed film into visible negatives through chemical processing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="p-6 bg-slate-50 rounded-lg">
              <Beaker className="w-8 h-8 text-slate-600 mb-4" />
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Essential Equipment</h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  <span>Developing tank (light-tight)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  <span>Film reel/spool</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  <span>Changing bag or darkroom</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  <span>Thermometer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  <span>Measuring graduates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  <span>Timer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  <span>Film clips for drying</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Chemical Process</h5>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">1. Developer</p>
                  <p className="text-sm text-gray-700">Makes latent image visible (5-12 min)</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">2. Stop Bath</p>
                  <p className="text-sm text-gray-700">Halts development instantly (30 sec)</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">3. Fixer</p>
                  <p className="text-sm text-gray-700">Makes image permanent (5-10 min)</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">4. Wash</p>
                  <p className="text-sm text-gray-700">Removes all chemicals (20-30 min)</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-cyan-50 rounded-lg">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Critical Variables</h5>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  <strong className="text-gray-900">Time:</strong> Follow manufacturer specifications precisely
                </li>
                <li>
                  <strong className="text-gray-900">Temperature:</strong> Maintain 20°C (68°F) for consistent results
                </li>
                <li>
                  <strong className="text-gray-900">Agitation:</strong> Regular, gentle inversions ensure even development
                </li>
                <li>
                  <strong className="text-gray-900">Dilution:</strong> Mix chemicals to exact ratios
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg text-white">
            <h5 className="text-lg font-semibold mb-3">The Golden Rule of Film Development</h5>
            <p className="text-lg italic">
              "Time, Temperature, and Agitation are your trinity. Master these, and you master film."
            </p>
          </div>
        </div>

        {/* Module 3: Darkroom Equipment */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-slate-600 font-semibold">MODULE_03 // DARKROOM</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Darkroom Equipment & Setup
            </h4>
            <p className="text-gray-600 mt-2">
              Essential tools for creating darkroom prints from your negatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-slate-50 rounded-lg">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">The Enlarger</h5>
              <p className="text-gray-700 mb-4">
                The enlarger is essentially a projector that shines light through your negative onto photographic paper, creating the print.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  <span><strong>Lamp House:</strong> Contains light source</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  <span><strong>Negative Carrier:</strong> Holds film flat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  <span><strong>Lens:</strong> Projects image onto paper</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  <span><strong>Baseboard:</strong> Adjustable for print size</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">Processing Trays</h5>
              <p className="text-gray-700 mb-4">
                Set up in sequence under safelight illumination:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white p-3 rounded">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                  <div>
                    <p className="font-semibold text-gray-900">Developer</p>
                    <p className="text-xs text-gray-600">1-2 minutes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded">
                  <span className="text-2xl font-bold text-cyan-600">2</span>
                  <div>
                    <p className="font-semibold text-gray-900">Stop Bath</p>
                    <p className="text-xs text-gray-600">15 seconds</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded">
                  <span className="text-2xl font-bold text-slate-600">3</span>
                  <div>
                    <p className="font-semibold text-gray-900">Fixer</p>
                    <p className="text-xs text-gray-600">2-5 minutes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded">
                  <span className="text-2xl font-bold text-gray-400">4</span>
                  <div>
                    <p className="font-semibold text-gray-900">Wash</p>
                    <p className="text-xs text-gray-600">5 minutes minimum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg border border-red-200">
              <ImageIcon className="w-6 h-6 text-red-600 mb-2" />
              <p className="font-semibold text-gray-900 mb-1 text-sm">Photographic Paper</p>
              <p className="text-xs text-gray-700">Light-sensitive paper in various grades (RC or fiber-based)</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg border border-amber-200">
              <p className="font-semibold text-gray-900 mb-1 text-sm">Safelight</p>
              <p className="text-xs text-gray-700">Red/amber light that doesn't fog black & white paper</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <p className="font-semibold text-gray-900 mb-1 text-sm">Timer</p>
              <p className="text-xs text-gray-700">Electronic timer controls enlarger exposure</p>
            </div>
          </div>
        </div>

        {/* Module 4: The Printing Workflow */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-slate-600 font-semibold">MODULE_04 // PRINTING</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              The Printing Workflow
            </h4>
            <p className="text-gray-600 mt-2">
              Step-by-step process for creating your first darkroom prints
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-slate-600">1</span>
                  <h5 className="text-lg font-semibold text-gray-900">Contact Sheet</h5>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Place entire film strip on paper and expose to create a reference print showing all frames at once.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Quick overview of all images</li>
                  <li>• Select frames for enlargement</li>
                  <li>• Archive reference tool</li>
                </ul>
              </div>

              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-blue-600">2</span>
                  <h5 className="text-lg font-semibold text-gray-900">Test Strip</h5>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Make a series of exposures on one strip to determine optimal exposure time for your negative.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Typically 3-5 second intervals</li>
                  <li>• Choose best-looking section</li>
                  <li>• Saves time and paper</li>
                </ul>
              </div>

              <div className="p-6 bg-cyan-50 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-cyan-600">3</span>
                  <h5 className="text-lg font-semibold text-gray-900">Enlargement</h5>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Project your chosen negative onto paper at desired size, expose, and process through chemistry trays.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Focus carefully using grain focuser</li>
                  <li>• Frame composition on easel</li>
                  <li>• Make exposure based on test strip</li>
                </ul>
              </div>

              <div className="p-6 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-purple-600">4</span>
                  <h5 className="text-lg font-semibold text-gray-900">Processing</h5>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Move print through developer, stop, fixer, and wash with consistent timing and agitation.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Watch image appear in developer</li>
                  <li>• Stop development at right moment</li>
                  <li>• Fix and wash thoroughly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Module 5: Complete Workflow Map */}
        <div className="mb-8 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl p-6 sm:p-8 shadow-sm text-white">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-400 font-semibold">MODULE_05 // COMPLETE_WORKFLOW</span>
            <h4 className="text-2xl font-semibold mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              The Complete Analog Photography Workflow
            </h4>
            <p className="text-blue-100 mt-2">
              From loading film to final print—your complete journey through analog photography
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Camera className="w-8 h-8 text-blue-400 mb-4" />
              <h5 className="text-lg font-semibold mb-3">Stage 1: Capture</h5>
              <ol className="space-y-2 text-sm text-blue-100">
                <li>1. Load 35mm film into camera</li>
                <li>2. Set ISO to match film speed</li>
                <li>3. Compose and meter scene</li>
                <li>4. Set aperture & shutter speed</li>
                <li>5. Focus and shoot</li>
                <li>6. Advance film to next frame</li>
                <li>7. Rewind when roll is complete</li>
              </ol>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Beaker className="w-8 h-8 text-cyan-400 mb-4" />
              <h5 className="text-lg font-semibold mb-3">Stage 2: Development</h5>
              <ol className="space-y-2 text-sm text-blue-100">
                <li>1. Load film onto reel (in darkness)</li>
                <li>2. Place in light-tight tank</li>
                <li>3. Add developer (5-12 min)</li>
                <li>4. Add stop bath (30 sec)</li>
                <li>5. Add fixer (5-10 min)</li>
                <li>6. Wash film (20-30 min)</li>
                <li>7. Hang to dry with film clips</li>
              </ol>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <ImageIcon className="w-8 h-8 text-purple-400 mb-4" />
              <h5 className="text-lg font-semibold mb-3">Stage 3: Printing</h5>
              <ol className="space-y-2 text-sm text-blue-100">
                <li>1. Make contact sheet</li>
                <li>2. Select frame to enlarge</li>
                <li>3. Create test strip</li>
                <li>4. Determine exposure time</li>
                <li>5. Make final enlargement</li>
                <li>6. Process in trays</li>
                <li>7. Wash and dry print</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Homework Assignment */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm border-2 border-blue-200">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">HOMEWORK_01</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Shoot Your First Roll
            </h4>
          </div>

          <div className="mb-6">
            <h5 className="text-lg font-semibold text-gray-900 mb-3">Your Assignment</h5>
            <p className="text-gray-700 mb-4">
              Load a roll of black & white film (Kentmere 400 or Ilford HP5) into your camera and shoot 36 frames. 
              Focus on understanding your camera's controls rather than creating perfect images.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-3">Requirements</h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Shoot the entire 36-frame roll</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Practice different aperture settings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Try various shutter speeds</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Experiment with different subjects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Bring exposed roll to Week 2</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-cyan-50 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-3">Tips for Success</h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">•</span>
                  <span>Shoot in good daylight to start</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">•</span>
                  <span>Use your meter—trust the needle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">•</span>
                  <span>Focus carefully with manual focus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">•</span>
                  <span>Keep notes on settings if helpful</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">•</span>
                  <span>Don't overthink—just shoot!</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white">
            <p className="font-semibold">Remember:</p>
            <p className="text-sm">
              This first roll is about learning your camera, not creating masterpieces. Make mistakes, experiment, and have fun. We'll develop this roll together in Week 2!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
