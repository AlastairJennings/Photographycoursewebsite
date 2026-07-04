import { useState } from 'react';
import { Link } from 'react-router';
import { ChevronDown, CheckCircle2, Camera, AlertCircle, Beaker, Film, Image as ImageIcon, BookOpen, ArrowLeft } from 'lucide-react';

export function FilmDarkroomCourse() {
  const [openModule, setOpenModule] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50/30 via-white to-blue-50/30 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-12">
        {/* Back Button */}
        <Link
          to="/courses"
          className="mb-8 text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Courses
        </Link>

        {/* Course Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-slate-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Photography Film & Darkroom Course
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            A hands-on 10-week journey into analog photography. Master 35mm film cameras, develop your own negatives, and create stunning darkroom prints from exposure to final print.
          </p>
        </div>

        {/* Information & Essentials */}
        <div className="bg-white rounded-xl p-8 sm:p-12 mb-8 shadow-sm">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Information & Essentials
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Resources & Kit Requirements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Safety:</strong> Darkroom safety protocols and chemical handling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Orientation:</strong> Facilities tour and darkroom equipment overview</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Camera:</strong> 35mm film camera (manual or semi-automatic)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Film:</strong> Kentmere 400 35mm film (available in stock room)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Paper:</strong> Ilford multigrade paper (various sizes available)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Camera className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Master 35mm film camera operation and controls</span>
                </li>
                <li className="flex items-start gap-3">
                  <Film className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Load, expose, and develop black & white film</span>
                </li>
                <li className="flex items-start gap-3">
                  <Beaker className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Create professional darkroom prints using enlargers</span>
                </li>
                <li className="flex items-start gap-3">
                  <ImageIcon className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Build a portfolio of analog photographic work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 10-Week Course Roadmap Overview */}
        <div className="bg-white rounded-xl p-8 sm:p-12 mb-8 shadow-sm">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            10-Week Course Roadmap
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Weeks 1-2: Camera Basics & Film Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Camera basics and film loading</li>
                <li>• First roll exposure and shooting tasks</li>
                <li>• Film development (loading reels, chemistry, timing)</li>
                <li>• Making contact sheets</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Weeks 3-5: Technical Mastery</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Exposure control and metering</li>
                <li>• Making test strips</li>
                <li>• Print refinement techniques</li>
                <li>• Composition fundamentals</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Weeks 6-7: Printing Refinement</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Dodging and burning</li>
                <li>• Contrast control</li>
                <li>• Advanced printing techniques</li>
                <li>• Print presentation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Weeks 8-10: Advanced & Portfolio</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Creative techniques</li>
                <li>• Portfolio development</li>
                <li>• Final project work</li>
                <li>• Exhibition preparation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stock Room Information */}
        <div className="bg-white rounded-xl p-8 sm:p-12 mb-8 shadow-sm">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Stock Room
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ilford Paper</h3>
              <p className="text-gray-700 mb-4">Professional multigrade RC and fiber-based papers available in various sizes:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• 5x7 inch sheets</li>
                <li>• 8x10 inch sheets</li>
                <li>• 11x14 inch sheets</li>
                <li>• 16x20 inch sheets</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">35mm Film</h3>
              <p className="text-gray-700 mb-4">Kentmere 400 - versatile black & white film:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• ISO 400 speed</li>
                <li>• 36 exposures per roll</li>
                <li>• Excellent for learning</li>
                <li>• Forgiving latitude</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Week 1: Camera Basics & First Shoot */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl tracking-tight bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Week 1: Camera Basics & First Shoot
          </h2>

          <div className="space-y-2">
            {/* Week 1 Module */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(1)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-slate-700 to-slate-900 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    01
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      The Film Camera & Essential Components
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Understanding your 35mm camera</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 1 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 1 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Camera Anatomy</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Shutter:</strong> Controls exposure time (how long light hits the film)</li>
                        <li>• <strong>Aperture:</strong> Lens opening that controls light amount and depth of field</li>
                        <li>• <strong>ISO/Film Speed:</strong> Film sensitivity to light (set once per roll)</li>
                        <li>• <strong>Focus Ring:</strong> Manual control for sharp images</li>
                        <li>• <strong>Film Advance Lever:</strong> Moves film to next frame after each shot</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Controls</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Shutter speed dial (typically on top of camera)</li>
                        <li>• Aperture ring (on the lens barrel)</li>
                        <li>• Focusing ring (front of lens)</li>
                        <li>• Film rewind crank</li>
                        <li>• Frame counter window</li>
                        <li>• Viewfinder with focusing aid</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-slate-50 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Understanding Your Camera</h4>
                    <p className="text-gray-700">
                      Unlike digital cameras, film cameras require you to understand and manually control each element of exposure. 
                      This hands-on approach will deepen your understanding of how photography works and give you complete creative control.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Shutter Speed Module */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(2)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    02
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Fast-Track Film Development & First Prints
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Developing film and making contact sheets</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 2 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 2 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Week Overview</h4>
                    <p className="text-gray-700 mb-4">
                      This is the most technical and rewarding session of the course. You'll develop your first roll of film, 
                      create a contact sheet, and potentially make your first darkroom print if time permits.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      By the end of this session, you'll hold developed negatives in your hands - proof that you've captured 
                      and preserved light using photographic chemistry.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Main Learning Goals</h4>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="font-semibold text-gray-900 mb-2">Film Development</p>
                        <p className="text-sm text-gray-700">Master loading film reels in darkness, mixing chemistry correctly, and executing the four-chemical process: Developer → Stop → Fix → Wash.</p>
                      </div>
                      <div className="p-4 bg-cyan-50 rounded-lg">
                        <p className="font-semibold text-gray-900 mb-2">Contact Sheets</p>
                        <p className="text-sm text-gray-700">Learn to create contact sheets showing all exposures from your roll, using the enlarger and making test strips for correct exposure.</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <p className="font-semibold text-gray-900 mb-2">Darkroom Workflow</p>
                        <p className="text-sm text-gray-700">Understand enlarger operation, paper handling, chemical trays, and troubleshooting common development issues.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-600">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Critical Skills This Week</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Loading film reels in total darkness</strong> - the most challenging but essential skill</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Understanding development variables</strong> - time, temperature, and agitation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Operating the enlarger</strong> - focus, height, and exposure control</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Making test prints</strong> - determining correct exposure times</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 p-6 bg-amber-50 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What to Bring</h4>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                      <li>Your exposed roll from Week 1 (undeveloped!)</li>
                      <li>A notebook for recording development times and observations</li>
                      <li>Patience - loading reels takes practice</li>
                      <li>Old clothes or apron (chemical splashes possible)</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Darkroom Safety Module */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(3)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    03
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Darkroom Safety Protocols
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Essential safety procedures</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 3 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 3 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="p-6 bg-red-50 border-2 border-red-200 rounded-lg">
                    <div className="flex items-start gap-3 mb-4">
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Critical Safety Requirements</h4>
                        <p className="text-gray-700 mb-4">The darkroom uses chemicals that require careful handling. Follow all safety protocols at all times.</p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold text-gray-900 mb-2">Chemical Safety</p>
                          <p className="text-sm text-gray-700">Handle all chemicals with care. Read MSDS sheets before use. Always add chemicals to water, never water to chemicals.</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-2">Eye Protection</p>
                          <p className="text-sm text-gray-700">Wear safety goggles when mixing or handling chemicals. Know the location of the eyewash station.</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-2">No Food/Drink</p>
                          <p className="text-sm text-gray-700">Never consume anything in the darkroom. Chemicals can be absorbed or ingested accidentally.</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold text-gray-900 mb-2">Emergency Procedures</p>
                          <p className="text-sm text-gray-700">Know location of eyewash station, first aid kit, and emergency exits. Report all accidents immediately.</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-2">Safelight Use</p>
                          <p className="text-sm text-gray-700">Use only appropriate safelight for your materials. Keep safelights at recommended distance from paper.</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-2">Fire Safety</p>
                          <p className="text-sm text-gray-700">Know fire exit locations and extinguisher positions. Keep flammable materials properly stored.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Aperture & Depth of Field Module */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(4)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    04
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Aperture & Depth of Field
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Controlling focus and light</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 4 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 4 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">The F-Stop Scale</h4>
                    <p className="text-gray-700 mb-4">
                      Common aperture values: f/1.4, f/2, f/2.8, f/4, f/5.6, f/8, f/11, f/16, f/22
                    </p>
                    <p className="text-sm text-gray-600 italic mb-4">
                      Lower f-numbers = wider opening = more light = shallower depth of field
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Depth of Field Effects</h4>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="p-4 bg-teal-50 rounded-lg">
                        <p className="font-semibold text-gray-900 mb-2">Shallow DoF (f/1.4 - f/2.8)</p>
                        <p className="text-sm text-gray-700 mb-2">Subject sharp, background beautifully blurred.</p>
                        <p className="text-xs text-gray-600"><strong>Best for:</strong> Portraits, isolating subjects, creative focus</p>
                      </div>
                      <div className="p-4 bg-cyan-50 rounded-lg">
                        <p className="font-semibold text-gray-900 mb-2">Medium DoF (f/4 - f/8)</p>
                        <p className="text-sm text-gray-700 mb-2">Balanced sharpness front to back.</p>
                        <p className="text-xs text-gray-600"><strong>Best for:</strong> General photography, street scenes, environmental portraits</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="font-semibold text-gray-900 mb-2">Deep DoF (f/11 - f/16)</p>
                        <p className="text-sm text-gray-700 mb-2">Everything sharp from near to far.</p>
                        <p className="text-xs text-gray-600"><strong>Best for:</strong> Landscapes, architecture, group photos</p>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-slate-100 rounded-lg border-l-4 border-slate-600">
                      <p className="font-semibold text-gray-900 mb-2">Key Concept</p>
                      <p className="text-sm text-gray-700">Smaller f-numbers (f/2.8) = larger opening = less depth of field. Larger f-numbers (f/16) = smaller opening = more depth of field. This is counterintuitive but essential to understand!</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Light Meters & Exposure Module */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(5)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-amber-600 to-yellow-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    05
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Light Meters & Exposure
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">The exposure triangle</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 5 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 5 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">The Exposure Triangle</h4>
                    <p className="text-gray-700 mb-6">
                      Perfect exposure is achieved by balancing three elements: <strong>Shutter Speed</strong> (time), <strong>Aperture</strong> (light amount), and <strong>ISO</strong> (sensitivity). 
                      Change one element, and you must adjust another to maintain proper exposure.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-amber-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">The Tools</h5>
                      <ul className="space-y-3 text-gray-700">
                        <li>
                          <strong>In-Camera Meter:</strong>
                          <p className="text-sm mt-1">Built into most 35mm cameras. Point at your subject and match the needle or LED indicator.</p>
                        </li>
                        <li>
                          <strong>Handheld Meter:</strong>
                          <p className="text-sm mt-1">External light meter for more precise readings. Can measure incident light (light falling on subject).</p>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-yellow-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">Practical Approach</h5>
                      <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                        <li>Set your film's ISO on the camera dial</li>
                        <li>Meter your scene (point at subject, not sky)</li>
                        <li>Choose your creative priority:
                          <ul className="ml-6 mt-1 text-sm list-disc list-inside">
                            <li>Aperture for depth of field control</li>
                            <li>Shutter for motion control</li>
                          </ul>
                        </li>
                        <li>Adjust other settings to match meter reading</li>
                      </ol>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ISO & Film Speed Module */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(6)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    06
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      ISO & Film Speed
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Film sensitivity and grain</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 6 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 6 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">The ISO Scale</h4>
                    <p className="text-gray-700 mb-4">
                      Common film speeds: ISO 25, 50, 100, 200, 400, 800, 1600, 3200
                    </p>
                    <p className="text-sm text-gray-600 italic mb-4">
                      Each doubling of ISO number doubles the film's sensitivity to light (ISO 400 is twice as sensitive as ISO 200).
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">The Trade-Off</h4>
                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      <div className="p-4 bg-violet-50 rounded-lg">
                        <p className="font-semibold text-gray-900 mb-2">Low ISO (25-100)</p>
                        <p className="text-sm text-gray-700 mb-2"><strong>Grain:</strong> Ultra-fine, exceptional detail</p>
                        <p className="text-sm text-gray-700 mb-2"><strong>Light:</strong> Requires bright conditions or slow shutter</p>
                        <p className="text-xs text-gray-600"><strong>Best for:</strong> Studio work, bright daylight, landscapes, maximum quality</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <p className="font-semibold text-gray-900 mb-2">Medium ISO (200-400)</p>
                        <p className="text-sm text-gray-700 mb-2"><strong>Grain:</strong> Fine, excellent detail</p>
                        <p className="text-sm text-gray-700 mb-2"><strong>Light:</strong> Works in most lighting conditions</p>
                        <p className="text-xs text-gray-600"><strong>Best for:</strong> General purpose, street photography, cloudy days, versatile shooting</p>
                      </div>
                      <div className="p-4 bg-fuchsia-50 rounded-lg">
                        <p className="font-semibold text-gray-900 mb-2">High ISO (800-3200)</p>
                        <p className="text-sm text-gray-700 mb-2"><strong>Grain:</strong> Visible, artistic texture</p>
                        <p className="text-sm text-gray-700 mb-2"><strong>Light:</strong> Works in very low light</p>
                        <p className="text-xs text-gray-600"><strong>Best for:</strong> Indoor available light, concerts, night photography, artistic grain</p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-slate-100 rounded-lg border-l-4 border-slate-600">
                      <p className="font-semibold text-gray-900 mb-2">Golden Rule</p>
                      <p className="text-sm text-gray-700">For this course, we recommend starting with <strong>ISO 400 film (Kentmere 400)</strong>. It's forgiving in varied lighting conditions, has pleasing grain characteristics, and produces beautiful results while you're learning.</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Important:</strong> Unlike digital cameras, you cannot change ISO mid-roll. The entire 36-exposure roll has one ISO rating, so choose your film speed based on your shooting conditions for that session.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Composition Fundamentals Module */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(7)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    07
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Composition Fundamentals
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Creating compelling images</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 7 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 7 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <p className="text-gray-700">
                      Great composition transforms technical shots into compelling photographs. Master these four fundamental techniques to strengthen your visual storytelling.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Four Essential Techniques</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 bg-emerald-50 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Rule of Thirds</h5>
                        <p className="text-sm text-gray-700 mb-3">
                          Divide your frame into 9 equal parts using two horizontal and two vertical lines. 
                          Place key elements along these lines or at their intersections for dynamic, balanced compositions.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Why it works: Creates tension and interest. The eye naturally gravitates to these intersection points.
                        </p>
                      </div>
                      <div className="p-6 bg-teal-50 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Leading Lines</h5>
                        <p className="text-sm text-gray-700 mb-3">
                          Use natural or man-made lines (roads, fences, rivers, railings, shadows) to guide the viewer's eye through the image toward your main subject.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Why it works: Creates depth and directs attention. Gives the eye a path to follow through the frame.
                        </p>
                      </div>
                      <div className="p-6 bg-green-50 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Framing</h5>
                        <p className="text-sm text-gray-700 mb-3">
                          Use elements within the scene (windows, doorways, arches, branches, architectural elements) to create a natural frame around your subject.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Why it works: Adds depth, context, and focuses attention. Creates layers that add visual interest.
                        </p>
                      </div>
                      <div className="p-6 bg-cyan-50 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Negative Space</h5>
                        <p className="text-sm text-gray-700 mb-3">
                          Empty or uncluttered areas around your subject create breathing room and emphasize the main subject. Less can be more.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Why it works: Simplifies the image. Creates elegance and draws focus to what matters most.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Loading Film Module */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(8)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    08
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Loading 35mm Film
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Hands-on procedure</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 8 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 8 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">6-Step Loading Process</h4>
                    <p className="text-gray-700 mb-6">
                      Loading film correctly is crucial. An improperly loaded roll won't advance, and you'll lose all your shots. Follow these steps carefully.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start p-4 bg-orange-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-semibold flex-shrink-0">1</div>
                      <div>
                        <p className="font-semibold text-gray-900">Open Camera Back</p>
                        <p className="text-sm text-gray-700">Pull up the rewind crank to release the camera back. Open in subdued light if possible.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start p-4 bg-orange-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-semibold flex-shrink-0">2</div>
                      <div>
                        <p className="font-semibold text-gray-900">Insert Cartridge</p>
                        <p className="text-sm text-gray-700">Place the film canister in the left chamber (looking from behind). Push rewind crank down to lock.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start p-4 bg-orange-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-semibold flex-shrink-0">3</div>
                      <div>
                        <p className="font-semibold text-gray-900">Pull the Leader</p>
                        <p className="text-sm text-gray-700">Extend the film leader (the tapered end) across the camera to the take-up spool on the right side.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start p-4 bg-orange-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-semibold flex-shrink-0">4</div>
                      <div>
                        <p className="font-semibold text-gray-900">Engage Sprockets</p>
                        <p className="text-sm text-gray-700">Insert the leader into the take-up spool slot. Ensure the sprocket holes on both edges align with the drive teeth.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start p-4 bg-orange-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-semibold flex-shrink-0">5</div>
                      <div>
                        <p className="font-semibold text-gray-900">Advance & Check</p>
                        <p className="text-sm text-gray-700">Wind the film advance lever once or twice. Watch that the rewind crank rotates counterclockwise as you advance.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start p-4 bg-orange-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-semibold flex-shrink-0">6</div>
                      <div>
                        <p className="font-semibold text-gray-900">Close & Wind</p>
                        <p className="text-sm text-gray-700">Close the camera back firmly until it clicks. Advance to frame 1 (or 0 depending on your camera).</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">The Critical Check</p>
                        <p className="text-sm text-gray-700">
                          After closing the back, advance the film <strong>twice</strong> while watching the rewind crank. 
                          If the rewind crank rotates, your film is properly loaded and advancing. 
                          If it doesn't rotate, the film is not engaged - reopen the back and reload immediately!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Practical: First Roll Module */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(9)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    09
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Practical: Your First Roll
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Three essential shooting exercises</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 9 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 9 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Assignment Objective</h4>
                    <p className="text-gray-700 mb-6">
                      Expose one complete roll of 36-exposure film (or 24-exposure) using these three shooting scenarios. 
                      This will help you practice technical skills while building confidence with your camera.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                      <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                        Task 01: The Outdoors
                      </h5>
                      <p className="text-gray-700 mb-3">Shoot in bright daylight to master exposure fundamentals.</p>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex gap-2">
                          <strong className="min-w-[100px]">Settings:</strong>
                          <span>f/11 or f/16, infinity focus (∞ symbol on lens)</span>
                        </div>
                        <div className="flex gap-2">
                          <strong className="min-w-[100px]">Subjects:</strong>
                          <span>Architecture, landscapes, street scenes, distant subjects</span>
                        </div>
                        <div className="flex gap-2">
                          <strong className="min-w-[100px]">Goal:</strong>
                          <span>Sharp focus throughout the frame, proper exposure in bright conditions</span>
                        </div>
                        <div className="flex gap-2">
                          <strong className="min-w-[100px]">Shutter Speed:</strong>
                          <span>Let your meter guide you (likely 1/125s - 1/500s in bright sun)</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-cyan-50 rounded-lg border-l-4 border-cyan-600">
                      <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="bg-cyan-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                        Task 02: Window Light
                      </h5>
                      <p className="text-gray-700 mb-3">Use natural window light for controlled indoor photography.</p>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex gap-2">
                          <strong className="min-w-[100px]">Settings:</strong>
                          <span>f/4 or f/5.6, focus carefully on your subject</span>
                        </div>
                        <div className="flex gap-2">
                          <strong className="min-w-[100px]">Subjects:</strong>
                          <span>Still life objects, plants, interior details, items near a window</span>
                        </div>
                        <div className="flex gap-2">
                          <strong className="min-w-[100px]">Watch for:</strong>
                          <span>Strong shadows and high contrast - meter from the lit areas, not the shadows</span>
                        </div>
                        <div className="flex gap-2">
                          <strong className="min-w-[100px]">Tip:</strong>
                          <span>Position subjects 1-2 feet from window for softer, more even light</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-teal-50 rounded-lg border-l-4 border-teal-600">
                      <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="bg-teal-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
                        Task 03: The Portrait
                      </h5>
                      <p className="text-gray-700 mb-3">Photograph a person with shallow depth of field to isolate them from the background.</p>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex gap-2">
                          <strong className="min-w-[100px]">Settings:</strong>
                          <span>f/2.8 or f/4 (widest aperture available on your lens)</span>
                        </div>
                        <div className="flex gap-2">
                          <strong className="min-w-[100px]">Focus:</strong>
                          <span>Critical focus on the eyes - this is essential for portraits</span>
                        </div>
                        <div className="flex gap-2">
                          <strong className="min-w-[100px]">Goal:</strong>
                          <span>Subject sharp, background beautifully blurred (bokeh effect)</span>
                        </div>
                        <div className="flex gap-2">
                          <strong className="min-w-[100px]">Tip:</strong>
                          <span>More distance between subject and background = more blur</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-slate-100 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-slate-700" />
                      Pre-Shot Checklist (Use this before every exposure!)
                    </h5>
                    <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-slate-400 rounded flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-3 h-3 text-slate-600" />
                        </div>
                        <span>ISO set correctly on camera?</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-slate-400 rounded flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-3 h-3 text-slate-600" />
                        </div>
                        <span>Meter reading checked?</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-slate-400 rounded flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-3 h-3 text-slate-600" />
                        </div>
                        <span>Focus confirmed sharp?</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-slate-400 rounded flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-3 h-3 text-slate-600" />
                        </div>
                        <span>Composition considered?</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Week 1 Assignment & Common Mistakes */}
        <div className="bg-white rounded-xl p-8 sm:p-12 mb-8 shadow-sm">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Week 1 Assignment
          </h2>
          
          <div className="p-6 bg-blue-50 border-l-4 border-blue-600 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Bring Your Exposed Film to Week 2!</h3>
            <p className="text-gray-700 mb-3">
              Complete one full roll of 36 exposures using the three tasks above. We will develop this film together in Week 2's darkroom session.
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Do NOT get your film developed at a lab</li>
              <li>Bring the exposed, undeveloped roll to class</li>
              <li>Keep it in a cool, dry place until Week 2</li>
              <li>Take notes on your exposures (settings used) for reference</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Common Beginner Mistakes to Avoid</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                Film Not Advancing
              </h4>
              <p className="text-sm text-gray-700">
                <strong>Problem:</strong> Film didn't load properly on take-up spool.<br />
                <strong>Solution:</strong> Always check that rewind crank rotates when advancing film.
              </p>
            </div>
            <div className="p-5 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                Blurry Images
              </h4>
              <p className="text-sm text-gray-700">
                <strong>Problem:</strong> Camera shake or incorrect focus.<br />
                <strong>Solution:</strong> Use shutter speed faster than 1/60s for handheld shots. Focus carefully.
              </p>
            </div>
            <div className="p-5 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                Over/Underexposure
              </h4>
              <p className="text-sm text-gray-700">
                <strong>Problem:</strong> Incorrect meter reading or ISO setting.<br />
                <strong>Solution:</strong> Meter from the main subject, not the sky. Verify ISO dial matches your film.
              </p>
            </div>
            <div className="p-5 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                Forgetting to Advance
              </h4>
              <p className="text-sm text-gray-700">
                <strong>Problem:</strong> Double exposures (shooting twice on same frame).<br />
                <strong>Solution:</strong> Make advancing film part of your shooting rhythm after each shot.
              </p>
            </div>
          </div>
        </div>

        {/* Resources & Look Ahead */}
        <div className="bg-white rounded-xl p-8 sm:p-12 mb-8 shadow-sm">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            Resources & Look Ahead
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Resources</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Camera manual for your specific model</span>
                </li>
                <li className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Film development time charts (provided in Week 2)</span>
                </li>
                <li className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Darkroom safety guidelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Practice shooting guide and exposure notes template</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Next Week Preview</h3>
              <p className="text-gray-700 mb-4">Week 2 focuses on film development:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Developing your exposed film</li>
                <li>• Loading film reels in complete darkness</li>
                <li>• Mixing chemistry and development process</li>
                <li>• Making contact sheets from your negatives</li>
                <li>• First test print (if time permits)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Week 2: Film Development */}
        <div className="mb-8 mt-12">
          <h2 className="text-3xl sm:text-4xl tracking-tight bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Week 2: Film Development
          </h2>

          <div className="space-y-2">
            {/* Week 2 Module 1: Learning Outcomes */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(11)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    01
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Learning Outcomes
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">What you'll achieve this week</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 11 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 11 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">By the End of This Session</h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Successfully develop your first roll of 35mm black & white film</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Load a film reel in total darkness (the most challenging skill!)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Understand the four-chemical process: Developer → Stop Bath → Fixer → Wash</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Create a contact sheet showing all your exposures</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Skills You'll Practice</h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span>Operating the enlarger for contact printing</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span>Making test strips to determine exposure</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span>Troubleshooting common development faults</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span>Evaluating negatives and contact sheets for printing</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">The Big Picture</h4>
                    <p className="text-gray-700">
                      Week 2 is the most technical session of the course. You're learning the chemistry and mechanics that 
                      photographers have used for over a century. Don't be discouraged if loading the reel takes several attempts - 
                      everyone struggles with this at first. By the end of today, you'll hold your first developed negatives and 
                      contact sheet: proof that you've captured light and made it permanent.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Week 2 Module 2: Safety First */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(12)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    02
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Safety First: Chemical Handling
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Critical safety protocols</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 12 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 12 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="p-6 bg-red-50 border-2 border-red-200 rounded-lg mb-6">
                    <div className="flex items-start gap-3 mb-4">
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Your Responsibility</h4>
                        <p className="text-gray-700 mb-4">
                          The darkroom is a professional workspace. Safe practices protect you, your classmates, and the 
                          quality of everyone's work.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="p-4 bg-white border-2 border-red-200 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Before You Start</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✓ Wear protective apron</li>
                        <li>✓ Eye protection within arm's reach</li>
                        <li>✓ Locate eyewash station</li>
                        <li>✓ Remove jewelry (tarnishes in chemicals)</li>
                        <li>✓ Tie back long hair</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-white border-2 border-orange-200 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">While Working</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✓ Never touch your face</li>
                        <li>✓ Wash hands frequently</li>
                        <li>✓ Use tongs for prints—never fingers</li>
                        <li>✓ Label all containers clearly</li>
                        <li>✓ No food or drink anywhere near darkroom</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-white border-2 border-yellow-200 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">If Accidents Happen</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✓ Chemical in eye: Flush for 15 minutes</li>
                        <li>✓ Skin contact: Rinse immediately</li>
                        <li>✓ Spills: Alert instructor first</li>
                        <li>✓ Don't hide mistakes—we fix them together</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-6 bg-amber-50 border-l-4 border-amber-600">
                    <h5 className="font-semibold text-gray-900 mb-2">Golden Rule</h5>
                    <p className="text-gray-700">
                      <strong>Always add chemicals to water, never water to chemicals.</strong> This prevents exothermic 
                      reactions (heat generation) and splashing. When mixing fixer or developer concentrates, pour the 
                      chemical slowly into the water while stirring.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Week 2 Module 3: Development Variables */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(13)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    03
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Development Variables
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Time, Temperature, Agitation</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 13 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 13 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Three Critical Variables</h4>
                    <p className="text-gray-700 mb-6">
                      Film development is a chemical reaction. Change one variable, and you must adjust the others to maintain 
                      consistency. Think of it like baking—precision matters.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-5 bg-violet-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">Time</h5>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>The Most Flexible Variable</strong>
                      </p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Kentmere 400 in LC29 (1+19) = <strong>6 minutes 30 seconds</strong></li>
                        <li>• Too short = underdeveloped (thin, grey negatives)</li>
                        <li>• Too long = overdeveloped (dense, contrasty negatives)</li>
                        <li>• Use a timer accurate to 0.1 second</li>
                      </ul>
                    </div>

                    <div className="p-5 bg-purple-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">Temperature</h5>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>The Most Critical Variable</strong>
                      </p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Standard = <strong>20°C (68°F)</strong></li>
                        <li>• ±0.5°C tolerance</li>
                        <li>• Warmer = faster development</li>
                        <li>• Colder = slower development</li>
                        <li>• Check with thermometer before starting</li>
                      </ul>
                    </div>

                    <div className="p-5 bg-indigo-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">Agitation</h5>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>The Most Misunderstood Variable</strong>
                      </p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• 4 inversions every 30 seconds</li>
                        <li>• Gentle, consistent rhythm</li>
                        <li>• Too vigorous = surge marks</li>
                        <li>• Too gentle = uneven development</li>
                        <li>• Think: "Rocking a baby to sleep"</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-slate-100 rounded-lg border-l-4 border-slate-600">
                    <h5 className="font-semibold text-gray-900 mb-2">Consistency is King</h5>
                    <p className="text-gray-700">
                      Professional photographers don't chase perfect development—they chase <em>consistent</em> development. 
                      Once you establish a working method (time, temp, agitation), stick to it religiously. Write down your 
                      process and repeat it exactly every time.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Week 2 Module 4: The Four-Chemical Process */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(14)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    04
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      The Four-Chemical Process
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Developer, Stop, Fixer, Wash</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 14 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 14 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="space-y-6">
                    <div className="p-5 bg-slate-50 rounded-lg border-l-4 border-slate-600">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                          1
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 mb-2">Developer (6 minutes 30 seconds)</h5>
                          <p className="text-sm text-gray-700 mb-2">
                            <strong>What it does:</strong> Converts exposed silver halide crystals into metallic silver, creating the visible image.
                          </p>
                          <p className="text-sm text-gray-700 mb-2">
                            <strong>Dilution:</strong> Ilford LC29 at 1+19 (1 part chemical to 19 parts water)
                          </p>
                          <p className="text-sm text-gray-700">
                            <strong>The Rule:</strong> Time and temperature must be exact. This is where the image is made—everything else just preserves it.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                          2
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 mb-2">Stop Bath (30 seconds)</h5>
                          <p className="text-sm text-gray-700 mb-2">
                            <strong>What it does:</strong> Instantly halts development by neutralizing the alkaline developer with acid.
                          </p>
                          <p className="text-sm text-gray-700 mb-2">
                            <strong>Dilution:</strong> Ilfostop at 1+19
                          </p>
                          <p className="text-sm text-gray-700">
                            <strong>Why it matters:</strong> Without stop bath, developer continues working in the fixer, exhausting it prematurely and causing staining.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 bg-amber-50 rounded-lg border-l-4 border-amber-600">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                          3
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 mb-2">Fixer (5 minutes)</h5>
                          <p className="text-sm text-gray-700 mb-2">
                            <strong>What it does:</strong> Removes unexposed silver halide, making the film insensitive to light and permanent.
                          </p>
                          <p className="text-sm text-gray-700 mb-2">
                            <strong>Dilution:</strong> Rapid Fixer at 1+4
                          </p>
                          <p className="text-sm text-gray-700">
                            <strong>The test:</strong> Film clears in about 2 minutes. Fix for double the clearing time. Under-fixed film will fog and deteriorate over time.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 bg-cyan-50 rounded-lg border-l-4 border-cyan-600">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                          4
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 mb-2">Wash (10 minutes running water)</h5>
                          <p className="text-sm text-gray-700 mb-2">
                            <strong>What it does:</strong> Removes all residual chemicals, especially fixer, which causes long-term degradation.
                          </p>
                          <p className="text-sm text-gray-700 mb-2">
                            <strong>Method:</strong> Running water at room temperature. Fill tank, agitate, dump. Repeat 10-12 times.
                          </p>
                          <p className="text-sm text-gray-700">
                            <strong>Final step:</strong> Add a drop of wetting agent (like Photo-Flo) to prevent water spots during drying.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-3">Process Summary</h5>
                    <div className="text-sm text-gray-700 space-y-1 font-mono">
                      <p>Developer (6:30) → Pour out</p>
                      <p>Stop Bath (0:30) → Pour back into bottle (reusable)</p>
                      <p>Fixer (5:00) → Pour back into bottle (reusable)</p>
                      <p>Wash (10:00) → Dump to drain</p>
                      <p>Wetting Agent (1:00) → Hang film to dry</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Week 2 Module 5: Loading the Reel */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(15)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    05
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Loading the Reel
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">The most challenging skill</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 15 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 15 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="p-6 bg-orange-50 border-2 border-orange-300 rounded-lg mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-6 h-6 text-orange-600" />
                      This Will Be Difficult (And That's Normal)
                    </h4>
                    <p className="text-gray-700">
                      Loading a reel in complete darkness is the hardest part of film development. <strong>Everyone struggles with this.</strong> 
                      Practice with dummy film in the light first, then with your eyes closed, then in the changing bag.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Step-by-Step Guide</h4>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Prepare in the Light</h5>
                          <p className="text-sm text-gray-700">
                            Gather: scissors, bottle opener, reel, tank, lid. Practice loading dummy film 5-10 times with your eyes closed. 
                            Feel how the film bows into the reel's spiral groove.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Enter the Changing Bag</h5>
                          <p className="text-sm text-gray-700">
                            Everything must be inside before you zip up. Double-check: film canister, scissors, bottle opener, reel, tank, lid.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Open the Canister</h5>
                          <p className="text-sm text-gray-700">
                            Use bottle opener to pry off the flat end. Pull out the film spool. Cut the film leader straight across.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                          4
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Load the Reel (The Hard Part)</h5>
                          <p className="text-sm text-gray-700 mb-2">
                            Hold reel in left hand. Bow the film slightly (emulsion side in) and feed it into the entry guides. 
                            Use the ratchet motion: twist left, twist right. The film spirals inward with each twist.
                          </p>
                          <p className="text-xs text-gray-600 italic">
                            <strong>If it jams:</strong> Don't force it. Back out a few inches and try again.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                          5
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Seal the Tank</h5>
                          <p className="text-sm text-gray-700">
                            When film is fully loaded, cut it free from the spool. Place reel into tank. Put on the lid. Now you can turn on the lights.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-blue-50 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Pro Tip: The Bow is Everything</h5>
                    <p className="text-sm text-gray-700">
                      The film must bow <em>slightly</em> as it enters the reel. Too flat = won't feed. Too curved = jams immediately. 
                      Think of the curvature of a fingernail. This feel comes with practice.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Week 2 Module 6: Introduction to the Enlarger */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(16)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    06
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Introduction to the Enlarger
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">A camera in reverse</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 16 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 16 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6 p-6 bg-teal-50 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">The Concept: A Camera in Reverse</h4>
                    <p className="text-gray-700">
                      An enlarger is literally a camera mounted upside-down. Instead of capturing light from a scene onto film, 
                      it projects light <em>through</em> film onto paper.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Main Components</h4>
                    <div className="space-y-3">
                      <div className="p-4 bg-white border border-gray-200 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">1. Lamp House</h5>
                        <p className="text-sm text-gray-700">
                          Houses the bulb and condenser for even illumination across the negative.
                        </p>
                      </div>
                      <div className="p-4 bg-white border border-gray-200 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">2. Filter Drawer</h5>
                        <p className="text-sm text-gray-700">
                          Holds contrast filters (Grade 00 to Grade 5). Lower numbers = softer contrast, higher = harder contrast.
                        </p>
                      </div>
                      <div className="p-4 bg-white border border-gray-200 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">3. Negative Carrier</h5>
                        <p className="text-sm text-gray-700">
                          Keeps the negative flat. <strong>Critical:</strong> Emulsion side down (dull side faces the lens).
                        </p>
                      </div>
                      <div className="p-4 bg-white border border-gray-200 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">4. Lens</h5>
                        <p className="text-sm text-gray-700">
                          Projects the image. Has an aperture ring (typically f/2.8 to f/16). Smaller apertures (f/11-f/16) give sharper prints.
                        </p>
                      </div>
                      <div className="p-4 bg-white border border-gray-200 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">5. Baseboard</h5>
                        <p className="text-sm text-gray-700">
                          The surface where you place the easel and paper. Must be level and sturdy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Controls</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-cyan-50 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Elevation Knob</h5>
                        <p className="text-sm text-gray-700">
                          Moves the head up/down. Higher = bigger image. Lower = smaller image.
                        </p>
                      </div>
                      <div className="p-4 bg-cyan-50 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Focus Knob</h5>
                        <p className="text-sm text-gray-700">
                          Adjusts lens distance. Use a grain focuser to check sharpness. Always refocus after changing elevation.
                        </p>
                      </div>
                      <div className="p-4 bg-cyan-50 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Timer</h5>
                        <p className="text-sm text-gray-700">
                          Sets exposure duration, accurate to 0.1 seconds.
                        </p>
                      </div>
                      <div className="p-4 bg-cyan-50 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Aperture Ring</h5>
                        <p className="text-sm text-gray-700">
                          Controls brightness. Start at f/5.6. Stop down to f/11 or f/16 for maximum sharpness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Week 2 Module 7: Test Prints */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(17)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    07
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Test Prints & Exposure Control
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Never guess your exposure</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 17 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 17 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6 p-6 bg-pink-50 rounded-lg border-l-4 border-pink-600">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">The Concept</h4>
                    <p className="text-gray-700">
                      <strong>Never guess.</strong> A test strip sacrifices a small piece of paper to save the whole sheet. 
                      It reveals the exact time needed for perfect blacks and whites.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">The Procedure</h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-white border border-gray-200 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Step 1: Set Aperture</h5>
                        <p className="text-sm text-gray-700">
                          Start with <strong>f/5.6</strong>. This gives a reasonable baseline exposure time (usually 5-15 seconds).
                        </p>
                      </div>
                      <div className="p-4 bg-white border border-gray-200 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Step 2: Cover & Expose</h5>
                        <p className="text-sm text-gray-700">
                          Cut a strip of paper. Use cardboard to cover 4/5 of the strip. Expose for <strong>2 seconds</strong>.
                        </p>
                      </div>
                      <div className="p-4 bg-white border border-gray-200 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Step 3: Move & Repeat</h5>
                        <p className="text-sm text-gray-700">
                          Move the card to reveal another inch. Expose for another <strong>2 seconds</strong>. 
                          Repeat 3-4 times. Each section gets cumulative exposure: 2s, 4s, 6s, 8s, 10s.
                        </p>
                      </div>
                      <div className="p-4 bg-white border border-gray-200 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Step 4: Develop</h5>
                        <p className="text-sm text-gray-700">
                          Process the test strip normally: 60 seconds in developer (full time!), then stop, fix, and rinse.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Test Strip Result</h4>
                    <div className="grid grid-cols-5 gap-1 h-12 rounded overflow-hidden mb-3">
                      <div className="bg-gray-200 flex items-center justify-center text-xs">2s</div>
                      <div className="bg-gray-400 flex items-center justify-center text-xs">4s</div>
                      <div className="bg-gray-600 flex items-center justify-center text-xs text-white">6s</div>
                      <div className="bg-gray-800 flex items-center justify-center text-xs text-white">8s</div>
                      <div className="bg-gray-950 flex items-center justify-center text-xs text-white">10s</div>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      Look for the first strip where blacks are truly black, but detail remains.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Week 2 Module 8: Contact Sheets */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(18)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    08
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Making Contact Sheets
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Your visual film index</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 18 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 18 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">The Steps</h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-orange-50 border-l-4 border-orange-600">
                        <h5 className="font-semibold text-gray-900 mb-2">1. Setup Enlarger</h5>
                        <p className="text-sm text-gray-700">
                          Raise the head to cover an 8×10" area. Remove the negative carrier (empty light). 
                          Set lens to <strong>f/5.6</strong>.
                        </p>
                      </div>
                      <div className="p-4 bg-amber-50 border-l-4 border-amber-600">
                        <h5 className="font-semibold text-gray-900 mb-2">2. The Sandwich</h5>
                        <p className="text-sm text-gray-700 mb-2">
                          Place photo paper <strong>shiny side up</strong>. Lay negatives on top, <strong>shiny side up</strong>. 
                          Cover with heavy glass to ensure perfect contact.
                        </p>
                      </div>
                      <div className="p-4 bg-yellow-50 border-l-4 border-yellow-600">
                        <h5 className="font-semibold text-gray-900 mb-2">3. Exposure</h5>
                        <p className="text-sm text-gray-700">
                          Expose for <strong>5 seconds</strong> at f/5.6 (make a test strip first!). 
                          This creates a positive image of every frame—a thumbnail gallery of your roll.
                        </p>
                      </div>
                      <div className="p-4 bg-orange-50 border-l-4 border-orange-600">
                        <h5 className="font-semibold text-gray-900 mb-2">4. Process</h5>
                        <p className="text-sm text-gray-700">
                          Develop → Stop → Fix → Wash. Mark the best frames for future printing.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-red-50 border-2 border-red-300 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      CRITICAL: Emulsion to Emulsion!
                    </h5>
                    <p className="text-sm text-gray-700">
                      The dull side of the film (emulsion) must touch the shiny side of the paper (emulsion). 
                      Think: <strong>Dull touches Shiny</strong>.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Week 2 Module 9: Troubleshooting */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(19)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-red-600 to-pink-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    09
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Troubleshooting Common Faults
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Identifying and fixing problems</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 19 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 19 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Film Issues</h4>
                  <div className="space-y-4 mb-8">
                    <div className="p-5 bg-red-50 rounded-lg border-l-4 border-red-600">
                      <h5 className="font-semibold text-gray-900 mb-2">1. Clear / Blank Film</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Cause:</strong> Fixer used before Developer OR Developer exhausted
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>Remedy:</strong> Label beakers clearly. Test developer with a leader snippet first. 
                        No fix for this error—the image is lost.
                      </p>
                    </div>

                    <div className="p-5 bg-orange-50 rounded-lg border-l-4 border-orange-600">
                      <h5 className="font-semibold text-gray-900 mb-2">2. Surge Marks / Streaks</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Cause:</strong> Over-agitation through sprocket holes
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>Remedy:</strong> Invert gently. Think "rocking a baby," not "making a margarita."
                      </p>
                    </div>

                    <div className="p-5 bg-pink-50 rounded-lg border-l-4 border-pink-600">
                      <h5 className="font-semibold text-gray-900 mb-2">3. Purple / Pink Cast</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Cause:</strong> Insufficient fixing time or exhausted fixer
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>Remedy:</strong> Return to fresh fixer for 2-3 minutes, then re-wash.
                      </p>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Print Issues</h4>
                  <div className="space-y-4 mb-8">
                    <div className="p-5 bg-gray-100 rounded-lg border-l-4 border-gray-600">
                      <h5 className="font-semibold text-gray-900 mb-2">1. Grey / Muddy Whites</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Cause:</strong> Fogging. Paper exposed to stray light or unsafe safelight
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>Remedy:</strong> Check door seals. Ensure safelight is correct filter and distance (at least 4 feet).
                      </p>
                    </div>

                    <div className="p-5 bg-slate-50 rounded-lg border-l-4 border-slate-600">
                      <h5 className="font-semibold text-gray-900 mb-2">2. White Dust Spots</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Cause:</strong> Dust on negative blocking light
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>Remedy:</strong> Clean negative with air blower before printing. Never touch emulsion with fingers.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-blue-600 text-white rounded-lg">
                    <h5 className="font-semibold mb-2">The Golden Rule</h5>
                    <p className="text-sm">
                      If too dark, reduce exposure time. If too light, increase exposure time. 
                      Don't pull prints early to "save" them—they must develop for full 60 seconds.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Week 2 Module 10: Homework */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(20)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    10
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Homework & Preparation for Week 3
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Analysis and selection</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 20 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 20 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="space-y-6">
                    <div className="p-5 bg-emerald-50 rounded-lg border-l-4 border-emerald-600">
                      <h5 className="font-semibold text-gray-900 mb-3">1. The Contact Audit</h5>
                      <p className="text-sm text-gray-700 mb-3">
                        Examine your contact sheet with a loupe. Look for density consistency, sharp focus, best frames, and learning moments.
                      </p>
                      <p className="text-sm text-gray-700">
                        Mark frames with a wax pencil: circle favorites, X mistakes to learn from them.
                      </p>
                    </div>

                    <div className="p-5 bg-green-50 rounded-lg border-l-4 border-green-600">
                      <h5 className="font-semibold text-gray-900 mb-3">2. The Selection</h5>
                      <p className="text-sm text-gray-700 mb-3">
                        Select <strong>three negatives</strong> to print next week:
                      </p>
                      <div className="grid sm:grid-cols-3 gap-3">
                        <div className="p-3 bg-white rounded border border-green-300">
                          <p className="font-semibold text-gray-900 text-sm mb-1">The "Hero"</p>
                          <p className="text-xs text-gray-700">Best composition & exposure</p>
                        </div>
                        <div className="p-3 bg-white rounded border border-green-300">
                          <p className="font-semibold text-gray-900 text-sm mb-1">The "Challenge"</p>
                          <p className="text-xs text-gray-700">Tricky lighting or contrast</p>
                        </div>
                        <div className="p-3 bg-white rounded border border-green-300">
                          <p className="font-semibold text-gray-900 text-sm mb-1">The "Mistake"</p>
                          <p className="text-xs text-gray-700">Analyze what went wrong</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 bg-teal-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">Bring Next Week</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                          <span>Processed Negatives (in protective sleeves)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                          <span>Contact Sheet with selected frames marked</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                          <span>Notebook & Pen</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-6 bg-gradient-to-r from-slate-100 to-blue-100 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2 italic">
                      "The negative is the score, and the print is the performance."
                    </h5>
                    <p className="text-sm text-gray-700">— Ansel Adams</p>
                  </div>
                </div>
              )}
            </div>

            {/* Week 2 Module 11: Practical Session */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(21)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-700 to-indigo-700 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    11
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Practical Session: Job Sheet
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Today's tasks</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 21 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 21 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="p-6 bg-blue-50 border-2 border-blue-300 rounded-lg mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Goal: Develop 1 Roll + Create 1 Contact Sheet</h4>
                    <p className="text-gray-700">
                      Follow each part in order. Precision and consistency are more important than speed.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Part A: Film Processing</h4>
                    <div className="space-y-3">
                      <div className="p-4 bg-white border border-gray-300 rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                            1
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Load Reel (In Darkness)</h5>
                            <p className="text-sm text-gray-700">
                              Practice with dummy film first. Load exposed roll in changing bag. Seal the tank.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white border border-gray-300 rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                            2
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Mix Chemistry</h5>
                            <p className="text-sm text-gray-700">
                              Ensure all chemicals at <strong>20°C</strong>. LC29 1+19, Ilfostop 1+19, Rapid Fixer 1+4.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white border border-gray-300 rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                            3
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Develop & Wash</h5>
                            <p className="text-sm text-gray-700">
                              Developer 6:30, Stop 0:30, Fixer 5:00, Wash 10:00. 4 inversions every 30 seconds.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white border border-gray-300 rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                            4
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Dry</h5>
                            <p className="text-sm text-gray-700">
                              Squeegee gently and hang to dry completely. Don't cut film until fully dry.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Part B: Contact Printing</h4>
                    <div className="space-y-3">
                      <div className="p-4 bg-white border border-gray-300 rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                            1
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Cut Negatives</h5>
                            <p className="text-sm text-gray-700">
                              Cut dry film into strips of 6 frames. Handle by edges. Place in archival sleeves.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white border border-gray-300 rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                            2
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Make Contact Sheet</h5>
                            <p className="text-sm text-gray-700">
                              Arrange strips on 8×10" paper (emulsion to emulsion). Cover with glass. Make test strip first.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white border border-gray-300 rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                            3
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Evaluate</h5>
                            <p className="text-sm text-gray-700">
                              Check exposure and sharpness with loupe. Mark best frames for next week.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-amber-50 border-l-4 border-amber-600">
                    <h5 className="font-semibold text-gray-900 mb-2">Cleanup Protocol</h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Wash all trays and dry them</li>
                      <li>• Rinse developing tanks and reels</li>
                      <li>• Wipe down bench area</li>
                      <li>• Return chemicals to proper storage</li>
                      <li>• Store negatives in sleeves immediately</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Week 2 Technical Reference Sheet */}
        <div className="bg-white rounded-xl p-8 sm:p-12 mb-8 shadow-sm">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Technical Reference Sheet
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Beaker className="w-6 h-6 text-blue-600" />
                Standard Dilutions
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-2 pr-4">Chemical</th>
                      <th className="text-left py-2 pr-4">Use</th>
                      <th className="text-left py-2">Ratio</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-200">
                      <td className="py-2 pr-4">Ilford LC29</td>
                      <td className="py-2 pr-4">Film Dev</td>
                      <td className="py-2 font-semibold">1 + 19</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 pr-4">Ilford Multigrade</td>
                      <td className="py-2 pr-4">Paper Dev</td>
                      <td className="py-2 font-semibold">1 + 9</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 pr-4">Ilfostop</td>
                      <td className="py-2 pr-4">Stop Bath</td>
                      <td className="py-2 font-semibold">1 + 19</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 pr-4">Rapid Fixer</td>
                      <td className="py-2 pr-4">Film Fix</td>
                      <td className="py-2 font-semibold">1 + 4</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Rapid Fixer</td>
                      <td className="py-2 pr-4">Paper Fix</td>
                      <td className="py-2 font-semibold">1 + 9</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-slate-100 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">The "Bible" of Times</h4>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>DigitalTruth.com (Massive Dev Chart)</strong>
                </p>
                <p className="text-xs text-gray-600">
                  The world's largest database of film development times. Download the app or check the website 
                  before developing any new film stock.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                Recommended Reading
              </h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="p-3 bg-blue-50 rounded">
                  <strong>The Darkroom Cookbook</strong>
                  <p className="text-sm text-gray-600">Steve Anchell</p>
                </li>
                <li className="p-3 bg-blue-50 rounded">
                  <strong>Way Beyond Monochrome</strong>
                  <p className="text-sm text-gray-600">Lambrecht & Woodhouse</p>
                </li>
                <li className="p-3 bg-blue-50 rounded">
                  <strong>The Negative</strong>
                  <p className="text-sm text-gray-600">Ansel Adams</p>
                </li>
              </ul>

              <div className="p-4 bg-cyan-50 rounded-lg border-l-4 border-cyan-600">
                <h4 className="font-semibold text-gray-900 mb-3">Essential Apps</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Massive Dev Chart Timer</strong> (iOS/Android)</li>
                  <li>• <strong>LightMeter</strong> (if your camera meter fails)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Week 3: Practical Printing */}
        <div className="mb-8 mt-12">
          <h2 className="text-3xl sm:text-4xl tracking-tight bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Week 3: Practical Printing
          </h2>

          <div className="space-y-2">
            {/* Week 3 Module 1: Mission Overview */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(20)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    01
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Mission Overview
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">From negative to print: your complete workflow</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 20 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 20 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">This Week's Goals</h4>
                    <p className="text-gray-700 mb-6">
                      Transform your developed negatives into stunning darkroom prints. Master the enlarger, perfect your exposure technique with test strips, and create your first photographic prints from enlargement.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 bg-indigo-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">Part 1: Contact Sheets & First Prints</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span>Make test strips to find perfect exposure times</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span>Create professional contact sheets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span>Make your first darkroom prints</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span>Troubleshoot common printing problems</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-5 bg-purple-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">Part 2: Exposure, Metering & The Zone System</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Master the Exposure Triangle (Aperture, Shutter, ISO)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Understand Ansel Adams' Zone System</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Learn how light meters see 18% grey</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Apply exposure compensation techniques</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                    <p className="text-gray-700 italic text-center">
                      "The negative is the score, and the print is the performance." — Ansel Adams
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Week 3 Module 2: Stock Room Pricing */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(21)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    02
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Stock Room Materials & Pricing
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Paper sizes and costs</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 21 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 21 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Ilford Multigrade Paper Pricing</h4>
                    <p className="text-gray-700 mb-4">
                      Professional-quality variable contrast photographic paper for all your darkroom printing needs.
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-300">
                          <th className="text-left py-3 px-4 bg-slate-100">Size</th>
                          <th className="text-left py-3 px-4 bg-slate-100">Price per Sheet</th>
                          <th className="text-left py-3 px-4 bg-slate-100">Best For</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4 font-semibold">5×7"</td>
                          <td className="py-3 px-4">£0.40</td>
                          <td className="py-3 px-4">Test prints, small enlargements</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4 font-semibold">8×10"</td>
                          <td className="py-3 px-4">£0.75</td>
                          <td className="py-3 px-4">Contact sheets, standard prints</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4 font-semibold">10×12"</td>
                          <td className="py-3 px-4">£1.25</td>
                          <td className="py-3 px-4">Medium enlargements</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold">16×20"</td>
                          <td className="py-3 px-4">£3.50</td>
                          <td className="py-3 px-4">Exhibition prints, final portfolio</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 p-5 bg-amber-50 border-l-4 border-amber-600">
                    <h5 className="font-semibold text-gray-900 mb-2">Cost-Saving Tip</h5>
                    <p className="text-sm text-gray-700">
                      Always make test strips on smaller paper sizes before committing to larger sheets. A 5×7" test strip costs £0.40 versus £3.50 for a 16×20" sheet—perfect your exposure first, then print large!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Week 3 Module 3: Contact Sheets */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(22)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    03
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Contact Sheets: Your Negative Map
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Creating thumbnail galleries of your work</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 22 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 22 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1649366735070-8e78a4f86f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwY29udGFjdCUyMHNoZWV0JTIwbmVnYXRpdmVzfGVufDF8fHx8MTc2OTc5MTgwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Film contact sheet showing multiple negative frames"
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What is a Contact Sheet?</h4>
                    <p className="text-gray-700 mb-4">
                      A contact sheet is a positive print made by placing your negative strips directly onto photographic paper—no enlargement. 
                      It creates a same-size thumbnail gallery of every frame on your roll, allowing you to review all your shots and select the best ones for enlargement.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      Think of it as an analog version of scrolling through digital thumbnails—but permanent and beautiful.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">Why Contact Sheets Matter</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Visual reference of your entire roll</li>
                        <li>• Identify best frames worthy of enlargement</li>
                        <li>• Evaluate exposure, composition, and focus</li>
                        <li>• Create permanent archive of your negatives</li>
                        <li>• Mark selections for future printing</li>
                      </ul>
                    </div>

                    <div className="p-5 bg-cyan-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">Making a Contact Sheet</h5>
                      <p className="text-sm text-gray-700 mb-3"><strong>6-Step Process:</strong></p>
                      <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                        <li>Cut developed negatives into strips (usually 6 frames each)</li>
                        <li>Place 8×10" photo paper on easel (emulsion up)</li>
                        <li>Lay negative strips on paper (emulsion to emulsion)</li>
                        <li>Cover with heavy glass for perfect contact</li>
                        <li>Expose using test strip time (typically 5-8 seconds at f/5.6)</li>
                        <li>Process: Developer → Stop → Fix → Wash</li>
                      </ol>
                    </div>
                  </div>

                  <div className="mt-6 p-5 bg-red-50 border-2 border-red-300 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">CRITICAL: Emulsion to Emulsion!</h5>
                        <p className="text-sm text-gray-700">
                          The dull side of the film (emulsion) must touch the shiny side of the paper (emulsion). 
                          Think: <strong>Dull touches Shiny</strong>. If you get this wrong, your contact sheet will be reversed and out of focus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Week 3 Module 4: Test Strips */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(23)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    04
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Test Strips: Finding Perfect Exposure
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">The essential technique for consistent results</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 23 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 23 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Use Test Strips?</h4>
                    <p className="text-gray-700 mb-6">
                      A test strip shows multiple exposure times on one piece of paper, allowing you to identify the perfect exposure before making your final print. 
                      It's the professional way to avoid wasting expensive paper and chemistry.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-5 bg-red-50 rounded-lg border-l-4 border-red-600">
                      <h5 className="font-semibold text-gray-900 mb-3">WITHOUT Test Strips</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>❌ Guessing exposure times blindly</li>
                        <li>❌ Wasting multiple sheets of expensive paper</li>
                        <li>❌ Using up chemistry unnecessarily</li>
                        <li>❌ Inconsistent results print to print</li>
                        <li>❌ Frustration and mounting costs</li>
                      </ul>
                    </div>

                    <div className="p-5 bg-green-50 rounded-lg border-l-4 border-green-600">
                      <h5 className="font-semibold text-gray-900 mb-3">WITH Test Strips</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✓ Scientifically identify perfect exposure time</li>
                        <li>✓ Save paper and chemistry</li>
                        <li>✓ Achieve consistent, repeatable results</li>
                        <li>✓ Professional darkroom workflow</li>
                        <li>✓ Confidence in every print you make</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-lg mb-6">
                    <h5 className="font-semibold text-gray-900 mb-4">Making a Test Strip: 5-Step Method</h5>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-700"><strong>Cut a strip</strong> of photo paper (5×7" works well)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-700"><strong>Place under enlarger</strong> showing important tones (shadows and highlights)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-700"><strong>Use a card</strong> to cover 4/5 of the strip, leaving 1/5 exposed</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-700"><strong>Expose in 2-second increments</strong>, moving the card each time to reveal more paper</p>
                          <p className="text-xs text-gray-600 mt-1 italic">Example: First section gets 2 sec, second gets 4 sec (2+2), third gets 6 sec (2+2+2), etc.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-700"><strong>Process normally</strong> and identify the "sweet spot" exposure time</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-blue-50 border-l-4 border-blue-600">
                    <h5 className="font-semibold text-gray-900 mb-2">Reading Your Test Strip</h5>
                    <p className="text-sm text-gray-700">
                      Look for the section with good shadow detail AND clean highlights. Too dark? Use less time. Too light? Use more time. 
                      The "just right" section gives you your perfect exposure time for the full print.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Week 3 Module 5: First Print Workflow */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(24)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    05
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Making Your First Print
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Complete darkroom workflow</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 24 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 24 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1616445598565-5327a63e85d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrcm9vbSUyMHJlZCUyMHNhZmVsaWdodCUyMHByaW50aW5nfGVufDF8fHx8MTc2OTc5MTgxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Darkroom with red safelight and printing equipment"
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Preparing for Your First Print</h4>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-5 bg-rose-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">Equipment Checklist</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0" />
                          <span>Enlarger with working bulb</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0" />
                          <span>Negative carrier (correct size for 35mm)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0" />
                          <span>Easel or masking frame</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0" />
                          <span>Lens set to f/5.6 or f/8</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0" />
                          <span>Safelight (orange/red for paper)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0" />
                          <span>Three chemical trays (Developer/Stop/Fix)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0" />
                          <span>Timer or stopwatch</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0" />
                          <span>Thermometer (chemistry at 20°C/68°F)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-5 bg-pink-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">Pre-Print Planning</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-pink-600 flex-shrink-0" />
                          <span>Negative selected and cleaned</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-pink-600 flex-shrink-0" />
                          <span>Test strip completed successfully</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-pink-600 flex-shrink-0" />
                          <span>Optimal exposure time determined</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-pink-600 flex-shrink-0" />
                          <span>Paper size and grade chosen</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-pink-600 flex-shrink-0" />
                          <span>Enlargement ratio planned</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-pink-600 flex-shrink-0" />
                          <span>Composition framed on easel</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-pink-600 flex-shrink-0" />
                          <span>Darkroom darkness checked (no light leaks!)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-4">Complete Printing Workflow: 7 Steps</h5>
                    <div className="space-y-4">
                      <div className="p-4 bg-white border-l-4 border-indigo-600 rounded">
                        <p className="font-semibold text-gray-900 mb-1">1. Setup Enlarger</p>
                        <p className="text-sm text-gray-700">Insert negative into carrier (emulsion down). Adjust height for desired size. Focus image sharply. Set aperture to f/5.6 or f/8.</p>
                      </div>
                      <div className="p-4 bg-white border-l-4 border-blue-600 rounded">
                        <p className="font-semibold text-gray-900 mb-1">2. Compose & Focus</p>
                        <p className="text-sm text-gray-700">Frame your composition on the easel. Use grain focuser for critical sharpness. Check all four corners are in focus.</p>
                      </div>
                      <div className="p-4 bg-white border-l-4 border-cyan-600 rounded">
                        <p className="font-semibold text-gray-900 mb-1">3. Make Test Strip</p>
                        <p className="text-sm text-gray-700">Expose test strip in 2-second increments. Process and identify optimal exposure time.</p>
                      </div>
                      <div className="p-4 bg-white border-l-4 border-teal-600 rounded">
                        <p className="font-semibold text-gray-900 mb-1">4. Expose Full Print</p>
                        <p className="text-sm text-gray-700">Place fresh paper on easel. Expose for time determined from test strip. Keep paper flat and still.</p>
                      </div>
                      <div className="p-4 bg-white border-l-4 border-green-600 rounded">
                        <p className="font-semibold text-gray-900 mb-1">5. Developer (90 seconds)</p>
                        <p className="text-sm text-gray-700">Slide paper gently into developer. Agitate continuously by rocking tray. Watch image appear—it's magic!</p>
                      </div>
                      <div className="p-4 bg-white border-l-4 border-amber-600 rounded">
                        <p className="font-semibold text-gray-900 mb-1">6. Stop & Fix (60 seconds + 2 minutes)</p>
                        <p className="text-sm text-gray-700">Transfer to stop bath (30-60 sec). Then to fixer (2-3 min). You can turn on lights after 1 minute in fixer!</p>
                      </div>
                      <div className="p-4 bg-white border-l-4 border-orange-600 rounded">
                        <p className="font-semibold text-gray-900 mb-1">7. Wash & Dry (5-10 minutes wash)</p>
                        <p className="text-sm text-gray-700">Rinse in running water for 5-10 minutes. Squeegee excess water. Air dry or use drying rack.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Week 3 Module 6: Common Problems */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(25)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    06
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Common First Print Problems
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Troubleshooting and solutions</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 25 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 25 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1733426509854-10931d84009a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrcm9vbSUyMGRldmVsb3BlciUyMHRyYXlzJTIwY2hlbWlzdHJ5fGVufDF8fHx8MTc2OTc5MTgwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Darkroom chemistry trays"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Troubleshooting Guide</h4>
                    <p className="text-gray-700 mb-6">
                      Don't panic! Every darkroom printer encounters these issues. Here's how to diagnose and fix them.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-5 bg-gray-100 rounded-lg border-l-4 border-gray-600">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 mb-2">Problem: Print Too Dark</h5>
                          <p className="text-sm text-gray-700 mb-2"><strong>Cause:</strong> Over-exposure—too much light hit the paper</p>
                          <p className="text-sm text-gray-700"><strong>Solution:</strong> Decrease exposure time by 2-3 seconds. If using f/5.6, try f/8 for less light.</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 bg-slate-100 rounded-lg border-l-4 border-slate-600">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-slate-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 mb-2">Problem: Print Too Light</h5>
                          <p className="text-sm text-gray-700 mb-2"><strong>Cause:</strong> Under-exposure—not enough light reached the paper</p>
                          <p className="text-sm text-gray-700"><strong>Solution:</strong> Increase exposure time by 2-3 seconds. If using f/8, try f/5.6 for more light.</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 bg-blue-100 rounded-lg border-l-4 border-blue-600">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 mb-2">Problem: Image Out of Focus</h5>
                          <p className="text-sm text-gray-700 mb-2"><strong>Cause:</strong> Enlarger not properly focused, or paper moved during exposure</p>
                          <p className="text-sm text-gray-700"><strong>Solution:</strong> Re-focus using grain focuser on the easel surface. Ensure paper stays flat. Check all four corners for sharpness.</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 bg-amber-100 rounded-lg border-l-4 border-amber-600">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 mb-2">Problem: Dust Spots or Marks</h5>
                          <p className="text-sm text-gray-700 mb-2"><strong>Cause:</strong> Dust or fingerprints on negative, or dirty enlarger lens</p>
                          <p className="text-sm text-gray-700"><strong>Solution:</strong> Clean negative with anti-static brush. Use compressed air. Clean enlarger lens with lens cloth. Work in a clean environment.</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 bg-purple-100 rounded-lg border-l-4 border-purple-600">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 mb-2">Problem: Uneven Density (Light Streaks)</h5>
                          <p className="text-sm text-gray-700 mb-2"><strong>Cause:</strong> Insufficient agitation in developer, or paper stuck to tray bottom</p>
                          <p className="text-sm text-gray-700"><strong>Solution:</strong> Rock tray continuously throughout development. Ensure paper slides freely in developer. Check developer is fresh and at correct temperature (20°C/68°F).</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-5 bg-green-50 border-l-4 border-green-600">
                    <h5 className="font-semibold text-gray-900 mb-2">The Professional Mindset</h5>
                    <p className="text-sm text-gray-700">
                      Mistakes are part of the learning process. Every "failed" print teaches you something. Keep notes on your exposure times, 
                      aperture settings, and paper grades—this builds your personal reference library for future printing sessions.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Week 3 Part 2 Divider */}
        <div className="bg-gradient-to-r from-slate-700 via-blue-600 to-cyan-500 h-1 my-12 rounded-full"></div>
        
        {/* Week 3 Part 2: Exposure, Metering & Zone System */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl tracking-tight bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Part 2: Exposure, Metering & The Zone System
          </h2>

          <div className="space-y-2">
            {/* Week 3 Module 7: Exposure Triangle */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(26)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    01
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Exposure Triangle Recap
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Aperture, Shutter Speed, and ISO</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 26 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 26 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">The Three Elements of Exposure</h4>
                    <p className="text-gray-700 mb-6">
                      Every photograph's exposure is controlled by three interconnected variables. Change one, and you must adjust another to maintain proper exposure. 
                      This is the foundation of all photography.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="p-5 bg-blue-50 rounded-lg border-t-4 border-blue-600">
                      <h5 className="font-semibold text-gray-900 mb-3">Aperture</h5>
                      <p className="text-sm text-gray-700 mb-3"><strong>Controls:</strong> Amount of light entering camera</p>
                      <p className="text-sm text-gray-700 mb-3"><strong>Effect:</strong> Depth of Field</p>
                      <p className="text-xs text-gray-600">
                        Wide aperture (f/2.8) = more light, shallow focus. Narrow aperture (f/16) = less light, deep focus.
                      </p>
                    </div>

                    <div className="p-5 bg-cyan-50 rounded-lg border-t-4 border-cyan-600">
                      <h5 className="font-semibold text-gray-900 mb-3">Shutter Speed</h5>
                      <p className="text-sm text-gray-700 mb-3"><strong>Controls:</strong> Duration of light exposure</p>
                      <p className="text-sm text-gray-700 mb-3"><strong>Effect:</strong> Motion Blur/Freeze</p>
                      <p className="text-xs text-gray-600">
                        Fast shutter (1/500s) = freezes motion. Slow shutter (1/30s) = captures motion blur.
                      </p>
                    </div>

                    <div className="p-5 bg-purple-50 rounded-lg border-t-4 border-purple-600">
                      <h5 className="font-semibold text-gray-900 mb-3">ISO (Film Speed)</h5>
                      <p className="text-sm text-gray-700 mb-3"><strong>Controls:</strong> Film's sensitivity to light</p>
                      <p className="text-sm text-gray-700 mb-3"><strong>Effect:</strong> Grain Structure</p>
                      <p className="text-xs text-gray-600">
                        Fixed for entire roll of film. ISO 400 is versatile. Cannot be changed mid-roll unless using push/pull processing.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-100 rounded-lg border-l-4 border-slate-600">
                    <h5 className="font-semibold text-gray-900 mb-2">Balancing the Triangle</h5>
                    <p className="text-gray-700">
                      <strong>Example:</strong> On a sunny day with ISO 400 film, you might use f/16 at 1/125s. If you want shallow depth of field (f/2.8), 
                      you must increase shutter speed to 1/2000s to maintain the same exposure. This is the eternal dance of photography!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Week 3 Module 8: The Zone System */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(27)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-slate-600 to-gray-700 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    02
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      The Zone System
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Ansel Adams' method for tonal control</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 27 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 27 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1657589910402-77b1041d8975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbnNlbCUyMGFkYW1zJTIwbGFuZHNjYXBlJTIwem9uZSUyMHN5c3RlbXxlbnwxfHx8fDE3Njk3OTE4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Dramatic landscape with full tonal range"
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <div className="p-5 bg-slate-50 rounded-lg mb-6">
                      <p className="text-lg text-gray-900 italic mb-2">"The negative is the score, and the print is the performance."</p>
                      <p className="text-sm text-gray-600">— Ansel Adams</p>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What is the Zone System?</h4>
                    <p className="text-gray-700 mb-4">
                      Developed by Ansel Adams and Fred Archer in 1940, the Zone System is a method for achieving perfect exposure and tonal range. 
                      It divides the spectrum of tones—from pure black to pure white—into 11 distinct zones (0 through X).
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="p-5 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">The Core Concept</h5>
                      <p className="text-sm text-gray-700">
                        Divide the range of tones from absolute black to pure white into 11 zones (0 to X). Each zone represents one stop of exposure difference.
                      </p>
                    </div>

                    <div className="p-5 bg-cyan-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Visualization</h5>
                      <p className="text-sm text-gray-700">
                        Pre-visualize how the scene will appear in the final print <em>before clicking the shutter</em>. This is the key to intentional photography.
                      </p>
                    </div>

                    <div className="p-5 bg-teal-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Control</h5>
                      <p className="text-sm text-gray-700">
                        By placing important subject tones in specific zones, you gain total control over contrast and detail in your final print.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-white rounded-lg border-2 border-gray-300 mb-6">
                    <h5 className="font-semibold text-gray-900 mb-4 text-center">The 11 Zones</h5>
                    <div className="grid grid-cols-11 gap-1 mb-4">
                      <div className="aspect-square bg-black rounded flex items-center justify-center">
                        <span className="text-[10px] text-white font-bold">0</span>
                      </div>
                      <div className="aspect-square bg-gray-900 rounded flex items-center justify-center">
                        <span className="text-[10px] text-white font-bold">I</span>
                      </div>
                      <div className="aspect-square bg-gray-800 rounded flex items-center justify-center">
                        <span className="text-[10px] text-white font-bold">II</span>
                      </div>
                      <div className="aspect-square bg-gray-700 rounded flex items-center justify-center border-2 border-blue-600">
                        <span className="text-[10px] text-white font-bold">III</span>
                      </div>
                      <div className="aspect-square bg-gray-600 rounded flex items-center justify-center">
                        <span className="text-[10px] text-white font-bold">IV</span>
                      </div>
                      <div className="aspect-square bg-gray-500 rounded flex items-center justify-center border-2 border-green-600">
                        <span className="text-[10px] text-white font-bold">V</span>
                      </div>
                      <div className="aspect-square bg-gray-400 rounded flex items-center justify-center">
                        <span className="text-[10px] text-white font-bold">VI</span>
                      </div>
                      <div className="aspect-square bg-gray-300 rounded flex items-center justify-center">
                        <span className="text-[10px] text-gray-800 font-bold">VII</span>
                      </div>
                      <div className="aspect-square bg-gray-200 rounded flex items-center justify-center border-2 border-orange-600">
                        <span className="text-[10px] text-gray-800 font-bold">VIII</span>
                      </div>
                      <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                        <span className="text-[10px] text-gray-800 font-bold">IX</span>
                      </div>
                      <div className="aspect-square bg-white rounded flex items-center justify-center border">
                        <span className="text-[10px] text-gray-800 font-bold">X</span>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-600">
                        <p className="font-semibold text-gray-900">Zone III: Shadows</p>
                        <p className="text-xs text-gray-700">Darkest part where you want texture/detail</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded border-l-4 border-green-600">
                        <p className="font-semibold text-gray-900">Zone V: Middle Grey</p>
                        <p className="text-xs text-gray-700">18% grey, standard meter calibration</p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-600">
                        <p className="font-semibold text-gray-900">Zone VIII: Highlights</p>
                        <p className="text-xs text-gray-700">Lightest part with full texture</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-purple-50 border-l-4 border-purple-600">
                    <h5 className="font-semibold text-gray-900 mb-2">For Beginners</h5>
                    <p className="text-sm text-gray-700">
                      Don't worry about mastering all 11 zones immediately. Start by identifying Zone V (middle grey), Zone III (shadow detail), 
                      and Zone VIII (highlight detail) in your scenes. This foundation will transform your exposure control.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Week 3 Module 9: Understanding Middle Grey */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(28)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-gray-500 to-gray-700 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    03
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Understanding Middle Grey (18%)
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Why your light meter sees everything as grey</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 28 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 28 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1601277881984-b160c9322ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF5JTIwY2FyZCUyMDE4JTIwcGVyY2VudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2OTc5MTgxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Photography grey card and light meter"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">The 18% Grey Problem</h4>
                    <p className="text-gray-700 mb-6">
                      Here's the critical concept: <strong>Your camera's light meter is calibrated to assume everything it sees should be middle grey (Zone V / 18% grey)</strong>. 
                      This works perfectly for average scenes, but causes problems with very bright or very dark subjects.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="p-5 bg-white rounded-lg border-2 border-blue-300">
                      <div className="w-full h-32 bg-gray-100 rounded mb-3 flex items-center justify-center">
                        <span className="text-4xl">☃️</span>
                      </div>
                      <h5 className="font-semibold text-gray-900 mb-2">Snow Scene</h5>
                      <p className="text-sm text-gray-700 mb-2"><strong>Problem:</strong> Meter sees bright snow, tries to make it middle grey</p>
                      <p className="text-sm text-red-600 mb-2"><strong>Result:</strong> Underexposed, grey snow ❌</p>
                      <p className="text-sm text-green-600"><strong>Fix:</strong> Overexpose +1.5 to +2 stops ✓</p>
                    </div>

                    <div className="p-5 bg-white rounded-lg border-2 border-green-300">
                      <div className="w-full h-32 bg-gray-500 rounded mb-3 flex items-center justify-center">
                        <span className="text-white text-sm">18% Grey</span>
                      </div>
                      <h5 className="font-semibold text-gray-900 mb-2">Grey Card / Average Scene</h5>
                      <p className="text-sm text-gray-700 mb-2"><strong>Problem:</strong> None! Scene matches meter's assumption</p>
                      <p className="text-sm text-green-600 mb-2"><strong>Result:</strong> Perfect exposure ✓</p>
                      <p className="text-sm text-gray-600"><strong>Fix:</strong> No compensation needed [0]</p>
                    </div>

                    <div className="p-5 bg-white rounded-lg border-2 border-purple-300">
                      <div className="w-full h-32 bg-gray-900 rounded mb-3 flex items-center justify-center">
                        <span className="text-4xl">🐈‍⬛</span>
                      </div>
                      <h5 className="font-semibold text-gray-900 mb-2">Black Cat</h5>
                      <p className="text-sm text-gray-700 mb-2"><strong>Problem:</strong> Meter sees dark cat, tries to make it middle grey</p>
                      <p className="text-sm text-red-600 mb-2"><strong>Result:</strong> Overexposed, grey cat ❌</p>
                      <p className="text-sm text-green-600"><strong>Fix:</strong> Underexpose -1.5 to -2 stops ✓</p>
                    </div>
                  </div>

                  <div className="p-6 bg-amber-50 border-2 border-amber-400 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600" />
                      The Golden Rule
                    </h5>
                    <p className="text-gray-700">
                      <strong>Your light meter doesn't know what it's looking at—it only knows brightness.</strong> When photographing subjects brighter 
                      than middle grey (snow, white walls, bright sand), add exposure (+). When photographing subjects darker than middle grey 
                      (black clothing, dark forests, night scenes), subtract exposure (-).
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Week 3 Module 10: Metering on Classic SLRs */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(29)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    04
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Metering on Classic 35mm SLRs
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Understanding your camera's meter</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 29 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 29 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1686996077700-f83036b4640f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMG1ldGVyJTIwZXhwb3N1cmUlMjB2aW50YWdlfGVufDF8fHx8MTc2OTc5MTgxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Vintage light meter and camera"
                      className="w-full h-56 object-cover rounded-lg mb-4"
                    />
                    <div className="p-5 bg-blue-50 border-l-4 border-blue-600 mb-6">
                      <p className="text-sm text-gray-700">
                        <strong>Important:</strong> Most classic film SLRs use <strong>centre-weighted TTL (Through-The-Lens) metering</strong>, 
                        not the evaluative/matrix metering found in modern cameras. This means they emphasize the center of the frame.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-5 bg-teal-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">Centre-Weighted Metering</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>How it works:</strong> Emphasizes the centre of the frame (about 60-70% weight) while still reading the surrounding area (30-40% weight).
                      </p>
                      <p className="text-sm text-gray-700"><strong>Best for:</strong> General photography, portraits, everyday scenes where your subject is centered</p>
                    </div>

                    <div className="p-5 bg-cyan-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">Match-Needle / Manual Metering</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>How it works:</strong> You see a needle or LED in the viewfinder. Adjust aperture and/or shutter speed until the needle matches the target, indicating correct exposure.
                      </p>
                      <p className="text-sm text-gray-700"><strong>Best for:</strong> Learning exposure, deliberate control, consistent results across a series of shots</p>
                    </div>

                    <div className="p-5 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">AE (Auto Exposure) Mode</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>How it works:</strong> You set aperture (Aperture Priority) or shutter speed (Shutter Priority), and the camera automatically sets the other to achieve correct exposure.
                      </p>
                      <p className="text-sm text-gray-700"><strong>Best for:</strong> Faster shooting, changing light conditions, beginners who want reliability</p>
                    </div>
                  </div>

                  <div className="mt-6 p-5 bg-purple-50 border-l-4 border-purple-600">
                    <h5 className="font-semibold text-gray-900 mb-2">Pro Tip: Meter for What Matters</h5>
                    <p className="text-sm text-gray-700">
                      Point your camera at the most important tones in your scene (usually faces in portraits, or shadow areas in landscapes). 
                      Take your meter reading there, then recompose your shot. This ensures correct exposure for what matters most.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Week 3 Module 11: The Golden Rule */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(30)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-yellow-600 to-amber-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    05
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      The Golden Rule of Film
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">"Expose for the shadows, develop for the highlights"</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 30 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 30 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1615631900981-50bba842d440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwbmVnYXRpdmUlMjBzdHJpcCUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzY5NzkxODExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Film negative strip showing tonal range"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="p-6 bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-amber-400 rounded-lg mb-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">"Expose for the Shadows, Develop for the Highlights"</h4>
                      <p className="text-center text-gray-700 italic">The most important principle in black & white film photography</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="p-5 bg-yellow-50 rounded-lg border-t-4 border-yellow-600">
                      <h5 className="font-semibold text-gray-900 mb-3">1. Film Loves Light</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        Negative film handles <strong>overexposure</strong> remarkably well—you can recover detail from overexposed areas in printing.
                      </p>
                      <p className="text-sm text-gray-700">
                        But underexposed shadows? <strong>Gone forever.</strong> If shadow detail isn't captured on the negative, no amount of darkroom magic can bring it back.
                      </p>
                    </div>

                    <div className="p-5 bg-amber-50 rounded-lg border-t-4 border-amber-600">
                      <h5 className="font-semibold text-gray-900 mb-3">2. The Technique</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        Point your meter at the <strong>darkest part of the scene where you want texture</strong> (Zone III).
                      </p>
                      <p className="text-sm text-gray-700">
                        This is typically shadows in a person's face, the dark side of a building, or forest shadows in a landscape.
                      </p>
                    </div>

                    <div className="p-5 bg-orange-50 rounded-lg border-t-4 border-orange-600">
                      <h5 className="font-semibold text-gray-900 mb-3">3. The Adjustment</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        Once you've metered the shadows, <strong>underexpose by 2 stops</strong> to place those shadows correctly in Zone III.
                      </p>
                      <p className="text-sm text-gray-700">
                        Example: If meter says 1/60s at f/5.6, shoot at 1/250s at f/5.6 (or 1/60s at f/11).
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-100 rounded-lg mb-6">
                    <h5 className="font-semibold text-gray-900 mb-4">Practical Example: Portrait in Mixed Light</h5>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">1</div>
                        <p>Point meter at the shadow side of your subject's face</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">2</div>
                        <p>Meter reads 1/125s at f/4 (this would make shadows middle grey—too bright!)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">3</div>
                        <p>Reduce exposure by 2 stops: shoot at 1/500s at f/4 (or 1/125s at f/8)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">✓</div>
                        <p><strong>Result:</strong> Shadow detail preserved in Zone III, highlights controlled, perfect negative for printing</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-red-50 border-l-4 border-red-600">
                    <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      Common Mistake
                    </h5>
                    <p className="text-sm text-gray-700">
                      Don't meter from highlights and underexpose! This will make your shadows too dark. Always meter from the shadows 
                      and reduce exposure—this protects shadow detail while keeping highlights printable.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Week 3 Module 12: Exposure Compensation */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(31)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    06
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Exposure Compensation
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">When and how to override your meter</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 31 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 31 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What is Exposure Compensation?</h4>
                    <p className="text-gray-700 mb-6">
                      Exposure compensation (+/-) allows you to intentionally override your camera's meter reading. Use it when you know the 
                      meter will be fooled by very bright or very dark subjects.
                    </p>
                  </div>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-300">
                          <th className="text-left py-3 px-4 bg-slate-100">Scenario</th>
                          <th className="text-center py-3 px-4 bg-slate-100">Compensation</th>
                          <th className="text-left py-3 px-4 bg-slate-100">Why</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-200 bg-amber-50">
                          <td className="py-3 px-4 font-semibold">Snow / Beach / Bright Sand</td>
                          <td className="py-3 px-4 text-center font-bold text-green-700">+1 to +2</td>
                          <td className="py-3 px-4 text-sm">Meter sees brightness, tries to darken. Add light to keep whites white.</td>
                        </tr>
                        <tr className="border-b border-gray-200 bg-yellow-50">
                          <td className="py-3 px-4 font-semibold">Backlit Subject</td>
                          <td className="py-3 px-4 text-center font-bold text-green-700">+1 to +2</td>
                          <td className="py-3 px-4 text-sm">Bright background fools meter. Add light to expose subject properly.</td>
                        </tr>
                        <tr className="border-b border-gray-200 bg-gray-100">
                          <td className="py-3 px-4 font-semibold">Average Scene (18% grey)</td>
                          <td className="py-3 px-4 text-center font-bold text-blue-700">0</td>
                          <td className="py-3 px-4 text-sm">Meter works perfectly. No compensation needed.</td>
                        </tr>
                        <tr className="border-b border-gray-200 bg-slate-100">
                          <td className="py-3 px-4 font-semibold">Spotlight on Dark Stage</td>
                          <td className="py-3 px-4 text-center font-bold text-red-700">-1 to -2</td>
                          <td className="py-3 px-4 text-sm">Dark surroundings fool meter. Reduce light to keep blacks black.</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="py-3 px-4 font-semibold">Night Scene / Black Background</td>
                          <td className="py-3 px-4 text-center font-bold text-red-700">-1 to -2</td>
                          <td className="py-3 px-4 text-sm">Darkness fools meter into overexposing. Reduce light to maintain mood.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 bg-green-50 rounded-lg border-l-4 border-green-600">
                      <h5 className="font-semibold text-gray-900 mb-2">How to Apply (+) Compensation</h5>
                      <p className="text-sm text-gray-700 mb-3">Three ways to add +1 stop:</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Open aperture by 1 stop (f/8 → f/5.6)</li>
                        <li>• Slow shutter by 1 stop (1/250 → 1/125)</li>
                        <li>• Use camera's +/- dial if available</li>
                      </ul>
                    </div>

                    <div className="p-5 bg-red-50 rounded-lg border-l-4 border-red-600">
                      <h5 className="font-semibold text-gray-900 mb-2">How to Apply (-) Compensation</h5>
                      <p className="text-sm text-gray-700 mb-3">Three ways to subtract -1 stop:</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Close aperture by 1 stop (f/5.6 → f/8)</li>
                        <li>• Speed up shutter by 1 stop (1/125 → 1/250)</li>
                        <li>• Use camera's +/- dial if available</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-5 bg-blue-50 border-l-4 border-blue-600">
                    <h5 className="font-semibold text-gray-900 mb-2">Remember</h5>
                    <p className="text-sm text-gray-700">
                      When in doubt, <strong>slightly overexpose</strong> film. Modern negative film has amazing latitude and can handle 2-3 stops 
                      of overexposure easily. Underexposed shadows, however, are lost forever. "Expose for the shadows" is your safety net!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Week 3 Module 13: Practical Project */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(32)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    07
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Practical Project Assignment
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Zone System in action</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 32 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 32 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="p-6 bg-gradient-to-r from-indigo-50 to-violet-50 border-2 border-indigo-300 rounded-lg mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Your Assignment</h4>
                    <p className="text-gray-700">
                      Apply the Zone System principles to create a print with full tonal range—from deep shadow detail to controlled highlights.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-4">5-Step Process</h5>
                    <div className="space-y-3">
                      <div className="p-4 bg-white border-l-4 border-indigo-600 rounded">
                        <p className="font-semibold text-gray-900 mb-1">1. Shoot a High Contrast Scene</p>
                        <p className="text-sm text-gray-700">Find a scene with both deep shadows and bright highlights. Examples: window-lit portrait, landscape with sun and shade, architectural detail with strong directional light.</p>
                      </div>
                      <div className="p-4 bg-white border-l-4 border-violet-600 rounded">
                        <p className="font-semibold text-gray-900 mb-1">2. Use Your Meter to Identify Zones</p>
                        <p className="text-sm text-gray-700">Meter the darkest area where you want detail (should be Zone III). Meter the brightest area with texture (should be Zone VIII). Check the range between them.</p>
                      </div>
                      <div className="p-4 bg-white border-l-4 border-purple-600 rounded">
                        <p className="font-semibold text-gray-900 mb-1">3. Apply Zone System Principle</p>
                        <p className="text-sm text-gray-700">Meter from shadows, then underexpose by 2 stops to place shadows in Zone III. This ensures shadow detail is captured while highlights remain printable.</p>
                      </div>
                      <div className="p-4 bg-white border-l-4 border-blue-600 rounded">
                        <p className="font-semibold text-gray-900 mb-1">4. Create Test Strip & Print</p>
                        <p className="text-sm text-gray-700">Make a proper test strip to find optimal exposure time. Print on 8×10" paper. Aim for visible detail in shadows AND highlights.</p>
                      </div>
                      <div className="p-4 bg-white border-l-4 border-cyan-600 rounded">
                        <p className="font-semibold text-gray-900 mb-1">5. Evaluate Tonal Range</p>
                        <p className="text-sm text-gray-700">Examine your final print. Can you see texture in the darkest areas? Are the brightest areas controlled (not blown out)? This is success!</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-amber-50 border-l-4 border-amber-600 mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Submission Requirements</h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>One 8×10" print demonstrating full tonal range</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>Your test strip attached or included</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>Contact sheet with this frame marked</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>Written reflection: How did you meter? What zones did you identify? What would you do differently?</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 bg-red-50 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">DUE: Next Week's Class</p>
                    <p className="text-sm text-gray-700">Bring your completed print, test strip, and contact sheet to share with the group. We'll critique and discuss everyone's tonal decisions.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Week 3 Resources & Week 4 Preview */}
        <div className="bg-white rounded-xl p-8 sm:p-12 mb-8 shadow-sm mt-12">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Technical References
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Data</h3>
              <div className="space-y-3 text-gray-700">
                <div className="p-3 bg-slate-50 rounded">
                  <p className="font-semibold mb-1">Exposure Times</p>
                  <p className="text-sm">Keep detailed notes for future reference. Every negative is different!</p>
                </div>
                <div className="p-3 bg-slate-50 rounded">
                  <p className="font-semibold mb-1">Paper Grades</p>
                  <p className="text-sm">Experiment with different contrast grades for varied results</p>
                </div>
                <div className="p-3 bg-slate-50 rounded">
                  <p className="font-semibold mb-1">Developer Temperature</p>
                  <p className="text-sm">68-72°F (20-22°C) optimal range</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Practices</h3>
              <div className="space-y-3 text-gray-700">
                <div className="p-3 bg-blue-50 rounded">
                  <p className="font-semibold mb-1">Agitation</p>
                  <p className="text-sm">Consistent motion prevents streaks and ensures even development</p>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <p className="font-semibold mb-1">Drying</p>
                  <p className="text-sm">Hang prints or use drying racks. Air dry = no marks</p>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <p className="font-semibold mb-1">Storage</p>
                  <p className="text-sm">Keep negatives in archival sleeves immediately after drying</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Week 4 Preview */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm">
          <div className="text-center mb-6">
            <div className="inline-block px-6 py-2 bg-red-100 border-2 border-red-600 rounded-lg mb-4">
              <p className="text-red-600 font-semibold">Coming Up Next Week</p>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-6 text-center" style={{ fontFamily: 'Roslindale, serif' }}>
            Week 4: Advanced Techniques
          </h2>
          
          <p className="text-lg text-gray-700 text-center mb-8 italic">
            "Bring your prints to class!"
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Dodging and Burning</h3>
              <p className="text-sm text-gray-700">
                Learn selective exposure control to lighten (dodge) or darken (burn) specific areas of your prints for enhanced drama and tonal perfection.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Working with Different Paper Grades and Surfaces</h3>
              <p className="text-sm text-gray-700">
                Explore contrast grades (soft to hard) and surface finishes (glossy, pearl, matte) to achieve your creative vision.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-teal-50 to-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fine-tuning Contrast and Tone in the Darkroom</h3>
              <p className="text-sm text-gray-700">
                Master multigrade filters, split-grade printing, and advanced exposure techniques for gallery-quality prints.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Archival Processing for Print Longevity</h3>
              <p className="text-sm text-gray-700">
                Learn professional archival washing, fixing, and storage techniques to ensure your prints last for generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
