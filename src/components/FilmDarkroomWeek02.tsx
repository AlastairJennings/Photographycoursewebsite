import { Link } from 'react-router';
import { CheckCircle2, Beaker, ArrowLeft, Timer, Thermometer, Clock, Camera, Droplets, FlaskConical, Eye, Target, FileText, AlertCircle } from 'lucide-react';

export function FilmDarkroomWeek02() {
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
            <span className="text-6xl font-bold text-gray-300">02</span>
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">Week 02 // Film Development</span>
          </div>
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-slate-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Film Development
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Fast-Track Film Development & First Prints — From Exposed Film to Finished Print
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
              What you'll achieve this week
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Today's Goals</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  Master Film Development
                </h5>
                <p className="text-sm text-gray-700">
                  Learn the complete process of developing 35mm black & white film using the tank method, from loading the reel in complete darkness to washing and drying your negatives.
                </p>
              </div>

              <div className="p-5 bg-cyan-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  Create Contact Sheets
                </h5>
                <p className="text-sm text-gray-700">
                  Make professional contact sheets—full-roll thumbnail prints that let you evaluate every frame and select your best images for enlargement.
                </p>
              </div>

              <div className="p-5 bg-purple-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  Understand Chemistry & Variables
                </h5>
                <p className="text-sm text-gray-700">
                  Grasp the science behind developer, stop bath, and fixer, and how time, temperature, and agitation affect your results.
                </p>
              </div>

              <div className="p-5 bg-indigo-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  Begin Darkroom Printing
                </h5>
                <p className="text-sm text-gray-700">
                  Get introduced to the enlarger, learn to make test strips, and if time allows, create your very first darkroom print.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg">
            <h5 className="font-semibold text-gray-900 mb-3">Today's Schedule</h5>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold mb-1">Part 1: Theory (30 min)</p>
                <p className="text-xs">Chemistry, safety, and process overview</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Part 2: Hands-On (90 min)</p>
                <p className="text-xs">Develop your roll & create contact sheet</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Part 3: Review (30 min)</p>
                <p className="text-xs">Evaluate results & plan next week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Module 2: Darkroom Safety & Chemistry Essentials */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-red-600 font-semibold">MODULE_02 // SAFETY</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Darkroom Safety & Chemistry Essentials
            </h4>
            <p className="text-gray-600 mt-2">
              Standard protocols and emergency procedures
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Standard Safety Protocols</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <h5 className="font-semibold text-gray-900 mb-2">Ventilation</h5>
                  <p className="text-sm text-gray-700">
                    Always ensure adequate airflow. Open windows or use extraction fans. Chemistry produces fumes—fresh air is non-negotiable.
                  </p>
                </div>

                <div className="p-4 bg-cyan-50 rounded-lg border-l-4 border-cyan-600">
                  <h5 className="font-semibold text-gray-900 mb-2">Protective Equipment</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Nitrile gloves (not latex—chemicals can degrade it)</li>
                    <li>• Apron to protect clothing</li>
                    <li>• Safety glasses if mixing powdered chemicals</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
                  <h5 className="font-semibold text-gray-900 mb-2">Chemical Handling</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Never eat or drink in the darkroom</li>
                    <li>• Wash hands thoroughly after handling chemicals</li>
                    <li>• Label all bottles clearly with contents and date</li>
                    <li>• Store chemicals in opaque bottles away from light</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-600">
                  <h5 className="font-semibold text-gray-900 mb-2">Disposal</h5>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Never pour fixer down the drain!</strong> It contains silver and is environmentally hazardous.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Collect fixer in designated waste container</li>
                    <li>• Developer and stop bath can be diluted and drained</li>
                    <li>• Check local regulations for proper disposal</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                  <h5 className="font-semibold text-gray-900 mb-2">Temperature Control</h5>
                  <p className="text-sm text-gray-700">
                    Keep all chemistry at 20°C (68°F) ±0.5°C for consistent results. Use a water bath to regulate temperature before use.
                  </p>
                </div>

                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                  <h5 className="font-semibold text-gray-900 mb-2">Emergency Procedures</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Skin contact:</strong> Rinse immediately with cold water for 15 minutes</li>
                    <li>• <strong>Eye contact:</strong> Flush with water for 15 minutes, seek medical help</li>
                    <li>• <strong>Spills:</strong> Neutralize with water, clean with paper towels</li>
                    <li>• Know where the eyewash station and first aid kit are located</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border-2 border-red-300">
            <p className="text-sm text-gray-700 font-semibold text-center">
              ⚠️ If in doubt, ask your instructor. Safety first, always.
            </p>
          </div>
        </div>

        {/* Module 3: The Film Development Process */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-indigo-600 font-semibold">MODULE_03 // DEVELOPMENT</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              The Film Development Process
            </h4>
            <p className="text-gray-600 mt-2">
              Four chemicals, precise timing
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Four Chemicals: The Complete Workflow</h4>
            <p className="text-gray-700 mb-6">
              Film development is a carefully controlled chemical reaction. Each step must be executed with precision—the right chemistry, at the right temperature, for the right duration.
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="p-5 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 mb-2">Developer</h5>
                  <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-700 mb-2">
                    <div>
                      <p className="font-semibold">Time:</p>
                      <p>6-12 minutes (film-specific)</p>
                    </div>
                    <div>
                      <p className="font-semibold">Temp:</p>
                      <p>20°C (68°F)</p>
                    </div>
                    <div>
                      <p className="font-semibold">Action:</p>
                      <p>Agitate 10 sec/min</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong>What it does:</strong> Converts exposed silver halide crystals into visible metallic silver—your latent image becomes a real negative.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-amber-50 rounded-lg border-l-4 border-amber-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 mb-2">Stop Bath</h5>
                  <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-700 mb-2">
                    <div>
                      <p className="font-semibold">Time:</p>
                      <p>30-60 seconds</p>
                    </div>
                    <div>
                      <p className="font-semibold">Temp:</p>
                      <p>18-24°C</p>
                    </div>
                    <div>
                      <p className="font-semibold">Action:</p>
                      <p>Continuous agitation</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong>What it does:</strong> Neutralizes the alkaline developer immediately, halting development. This prevents over-development and extends fixer life.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg border-l-4 border-purple-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 mb-2">Fixer</h5>
                  <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-700 mb-2">
                    <div>
                      <p className="font-semibold">Time:</p>
                      <p>5-10 minutes</p>
                    </div>
                    <div>
                      <p className="font-semibold">Temp:</p>
                      <p>18-24°C</p>
                    </div>
                    <div>
                      <p className="font-semibold">Action:</p>
                      <p>Agitate first 30 sec, then 10 sec/min</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong>What it does:</strong> Removes unexposed silver halide crystals, making your negative light-safe and permanent. After 2 minutes in fixer, you can turn the lights on!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-cyan-50 rounded-lg border-l-4 border-cyan-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 mb-2">Wash & Dry</h5>
                  <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-700 mb-2">
                    <div>
                      <p className="font-semibold">Wash Time:</p>
                      <p>20-30 minutes</p>
                    </div>
                    <div>
                      <p className="font-semibold">Temp:</p>
                      <p>18-24°C</p>
                    </div>
                    <div>
                      <p className="font-semibold">Drying:</p>
                      <p>2-4 hours</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong>What it does:</strong> Removes all chemical residue from your film. Poor washing = fading negatives over time. Dry with film clips in a dust-free area.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-3">The Golden Rule</h4>
            <p className="text-lg leading-relaxed">
              <strong className="text-cyan-400">Time + Temperature + Agitation = Consistent Results</strong>
            </p>
            <p className="text-sm text-cyan-200 mt-2">
              Master these three variables, and you master film development.
            </p>
          </div>
        </div>

        {/* Module 4: Loading Film in Darkness */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-purple-600 font-semibold">MODULE_04 // LOADING</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Loading Film in Complete Darkness
            </h4>
            <p className="text-gray-600 mt-2">
              The trickiest step—mastering the loading reel
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-slate-50 rounded-lg">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">Why Complete Darkness?</h5>
              <p className="text-gray-700 mb-4">
                Your exposed film contains a <strong className="text-red-600">latent image</strong>—invisible to the eye but vulnerable to light. Any light exposure during loading will fog your negatives and ruin them forever.
              </p>
              <div className="p-4 bg-red-50 border-l-4 border-red-600 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Critical:</strong> No safelight works for film. Only <strong>complete darkness</strong> is safe.
                </p>
              </div>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">The Loading Steps</h5>
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">1.</span>
                  <span>Practice in daylight with dummy film until you can do it by feel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">2.</span>
                  <span>In complete darkness, pop the film canister open with a bottle opener</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">3.</span>
                  <span>Cut the leader square (no tongue) and feed onto the reel spiral</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">4.</span>
                  <span>Ratchet the reel sides back and forth to load the film</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">5.</span>
                  <span>Cut the film from the spool, place reel in tank, secure lid</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">6.</span>
                  <span>Lights on! You're now safe to continue</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
            <p className="text-sm text-gray-700">
              <strong>Pro Tip:</strong> Use a <strong>changing bag</strong> if you don't have access to a light-tight room. Practice loading in the bag during daylight before attempting with real film.
            </p>
          </div>
        </div>

        {/* Module 5: The Variables - Time, Temperature, Agitation */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-orange-600 font-semibold">MODULE_05 // VARIABLES</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              The Variables: Time, Temperature, Agitation
            </h4>
            <p className="text-gray-600 mt-2">
              The three pillars of consistent film development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-10 h-10 text-blue-600" />
                <h5 className="text-xl font-bold text-gray-900">Time</h5>
              </div>
              <p className="text-gray-700 mb-4">
                Follow the manufacturer's development times <strong className="text-red-600">precisely</strong>. Use a timer and stick to the schedule.
              </p>
              <div className="bg-white p-3 rounded border border-blue-200">
                <p className="text-sm text-gray-700">
                  <strong>Example:</strong> Ilford HP5+ in ID-11 1+1 = 10.5 minutes at 20°C
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border-2 border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <Thermometer className="w-10 h-10 text-orange-600" />
                <h5 className="text-xl font-bold text-gray-900">Temperature</h5>
              </div>
              <p className="text-gray-700 mb-4">
                Maintain <strong className="text-red-600">20°C (68°F)</strong> throughout development. Even 1°C variation affects results.
              </p>
              <div className="bg-white p-3 rounded border border-orange-200">
                <p className="text-sm text-gray-700">
                  <strong>Pro Tip:</strong> Use a water bath to pre-warm or cool chemicals to target temperature
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="w-10 h-10 text-purple-600" />
                <h5 className="text-xl font-bold text-gray-900">Agitation</h5>
              </div>
              <p className="text-gray-700 mb-4">
                <strong className="text-red-600">Invert the tank</strong> gently for 10 seconds every minute. Consistent agitation = even development.
              </p>
              <div className="bg-white p-3 rounded border border-purple-200">
                <p className="text-sm text-gray-700">
                  <strong>Pattern:</strong> Initial 30 sec continuous, then 10 sec/min
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Module 6: Contact Sheets */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-green-600 font-semibold">MODULE_06 // CONTACT_SHEETS</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Making Contact Sheets
            </h4>
            <p className="text-gray-600 mt-2">
              Your first prints—thumbnails of every frame
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">What is a Contact Sheet?</h4>
            <p className="text-gray-700 mb-6 leading-relaxed">
              A contact sheet is a print showing <strong className="text-red-600">all frames from your film at once</strong>, created by placing the negative strips directly on photographic paper and exposing them under the enlarger. It's your reference guide for selecting images to enlarge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-3">Equipment Needed</h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span>Contact printing frame (or heavy glass sheet)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span>8x10" photographic paper</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span>Enlarger (as light source)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span>Processing trays with chemistry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span>Timer</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-cyan-50 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-3">The Process</h5>
              <ol className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-cyan-600">1.</span>
                  <span>Cut your film into strips of 6 frames each</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-cyan-600">2.</span>
                  <span>Place strips emulsion-down on paper</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-cyan-600">3.</span>
                  <span>Cover with glass to ensure good contact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-cyan-600">4.</span>
                  <span>Expose under enlarger (typically 5-10 seconds at f/8)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-cyan-600">5.</span>
                  <span>Process in developer, stop, fixer, wash</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-cyan-600">6.</span>
                  <span>Dry and evaluate your frames</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-cyan-600 text-white p-6 rounded-lg">
            <h5 className="font-semibold mb-2">Why Contact Sheets Matter</h5>
            <p className="text-sm">
              They're your <strong>proof sheet</strong>—your archive, your selection tool, and your record of what you shot. Professional photographers always make contact sheets before enlarging.
            </p>
          </div>
        </div>

        {/* Homework Assignment */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm border-2 border-orange-200">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-orange-600 font-semibold">HOMEWORK_02</span>
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
                  <p className="font-semibold text-gray-900">Develop Your Film</p>
                  <p className="text-sm text-gray-700">Complete the full development process for the roll you shot in Week 1</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Make a Contact Sheet</p>
                  <p className="text-sm text-gray-700">Create a reference print showing all your frames</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Select 3 Images</p>
                  <p className="text-sm text-gray-700">Choose your best frames for enlargement next week</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Document Your Process</p>
                  <p className="text-sm text-gray-700">Note your development times, temperatures, and any issues</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-lg text-white">
            <p className="text-lg font-semibold mb-2">Remember:</p>
            <p>Your first roll is about learning the process. Even if some frames don't turn out perfectly, you've learned valuable lessons about exposure, focus, and timing!</p>
          </div>
        </div>

        {/* Next Week Preview */}
        <div className="mb-8 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-xl p-6 sm:p-8 shadow-sm text-white">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-indigo-300 font-semibold">NEXT_WEEK // PREVIEW</span>
            <h4 className="text-2xl font-semibold mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Coming Up: Darkroom Printing
            </h4>
          </div>

          <h2 className="text-3xl sm:text-4xl tracking-tight mb-4 text-center" style={{ fontFamily: 'Roslindale, serif' }}>
            Mastering Exposure & Metering
          </h2>
          
          <p className="text-lg text-center mb-8 italic text-indigo-200">
            "Why did some of your frames turn out perfectly, while others were too dark or too light?"
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-blue-50 rounded-lg text-center border-t-4 border-blue-600">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8" />
              </div>
              <h5 className="font-semibold text-gray-900 mb-2 text-red-600">The Light Meter</h5>
              <p className="text-sm text-gray-700">
                How your camera sees the world (and why it's often wrong). Learn to read your meter correctly and expose with confidence.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg text-center border-t-4 border-slate-600">
              <div className="w-16 h-16 rounded-full bg-slate-600 text-white flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h5 className="font-semibold text-gray-900 mb-2 text-red-600">Middle Grey</h5>
              <p className="text-sm text-gray-700">
                Understanding 18% grey and how to use a grey card for perfect skin tones. The secret to consistent exposure.
              </p>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg text-center border-t-4 border-purple-600">
              <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h5 className="font-semibold text-gray-900 mb-2 text-red-600">The Zone System</h5>
              <p className="text-sm text-gray-700">
                A gentle introduction to Ansel Adams' method for controlling contrast. Pre-visualize your prints before you click the shutter.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur rounded-lg text-center">
            <p className="text-sm font-semibold text-indigo-200">
              Bring your contact sheet, negatives, and notebook. Next week, we'll transform your negatives into stunning prints.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
