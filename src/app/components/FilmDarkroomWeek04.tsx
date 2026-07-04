import { useState } from 'react';
import { Link } from 'react-router';
import { ChevronDown, CheckCircle2, ArrowLeft } from 'lucide-react';

export function FilmDarkroomWeek04() {
  const [openModule, setOpenModule] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
  };

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
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-slate-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Week 4: Printing and Grading
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Master variable contrast paper, grade selection, and understand how metering affects your negatives
          </p>
        </div>

        <div className="space-y-2">
          {/* Module 1: Overview & Learning Outcomes */}
          <div className="bg-white border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleModule(1)}
              className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                  01
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                    Overview & Learning Outcomes
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Understanding variable contrast paper and problem-solving strategies</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 1 ? 'rotate-180' : ''}`} />
            </button>
            
            {openModule === 1 && (
              <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">This Week's Mission</h4>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Today we explore <strong className="text-red-600">variable contrast paper</strong>, <strong className="text-red-600">problem-solving strategies</strong>, and how metering affects your final print.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-5 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-2xl text-red-600">1</span>
                        <span>Understand Multigrade</span>
                      </h5>
                      <p className="text-sm text-gray-700">
                        Learn how <strong className="text-red-600">variable contrast paper</strong> works and how to use the <strong className="text-red-600">LPL 7451 color head</strong> to select grades 00–5.
                      </p>
                    </div>

                    <div className="p-5 bg-cyan-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-2xl text-red-600">2</span>
                        <span>Solve Exposure Problems</span>
                      </h5>
                      <p className="text-sm text-gray-700">
                        Identify <strong className="text-red-600">thin (underexposed)</strong> and <strong className="text-red-600">dense (overexposed)</strong> negatives, and choose the right grade to compensate.
                      </p>
                    </div>

                    <div className="p-5 bg-purple-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-2xl text-red-600">3</span>
                        <span>Metering Practical</span>
                      </h5>
                      <p className="text-sm text-gray-700">
                        See how <strong className="text-red-600">grey, white, and black cards</strong> fool your light meter and affect your negative exposure.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">What You'll Learn</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">
                        Master variable contrast paper and understand how changing color filtration (yellow and magenta) changes paper contrast
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">
                        Use the LPL 7451 enlarger color head to select grades from 00 (lowest contrast) to 5 (highest contrast)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">
                        Diagnose and compensate for problematic negatives using grade selection strategies
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">
                        Understand how reflected light meters can be fooled and how to meter correctly for accurate exposures
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Module 2: Variable Contrast Paper */}
          <div className="bg-white border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleModule(2)}
              className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                  02
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                    Variable Contrast Paper
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">One paper, infinite contrast grades</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 2 ? 'rotate-180' : ''}`} />
            </button>
            
            {openModule === 2 && (
              <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What is Multigrade Paper?</h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <strong className="text-red-600">Variable contrast paper</strong> (also called <strong className="text-red-600">Multigrade</strong>) contains two light-sensitive layers:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-yellow-50 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          Yellow Layer (Low Contrast)
                        </h5>
                        <p className="text-sm text-gray-700">
                          Responds to <strong className="text-red-600">yellow light</strong>. Produces soft, low-contrast images (grades 00-2).
                        </p>
                      </div>

                      <div className="p-4 bg-pink-50 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                          Magenta Layer (High Contrast)
                        </h5>
                        <p className="text-sm text-gray-700">
                          Responds to <strong className="text-red-600">magenta light</strong>. Produces punchy, high-contrast images (grades 3-5).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">The Magic</h4>
                    <div className="p-6 bg-gray-900 text-white rounded-lg mb-4">
                      <p className="text-sm leading-relaxed mb-3">
                        By changing the <strong className="text-red-400">color of light</strong> from your enlarger, you control which layer responds more.
                      </p>
                      <p className="text-sm leading-relaxed">
                        More yellow = softer contrast<br />
                        More magenta = harder contrast
                      </p>
                    </div>

                    <div className="p-5 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">The Advantage</h5>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        You don't need multiple boxes of graded paper (Grade 0, 1, 2, 3, 4, 5). One box of multigrade does it all! This saves money and lets you fine-tune contrast for every negative.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Module 3: The LPL 7451 Color Head */}
          <div className="bg-white border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleModule(3)}
              className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                  03
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                    The LPL 7451 Color Head
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Your grade selection tool</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 3 ? 'rotate-180' : ''}`} />
            </button>
            
            {openModule === 3 && (
              <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">How It Works</h4>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The LPL 7451 enlarger has a <strong className="text-red-600">color head</strong> with two dials that control yellow and magenta filtration. By adjusting these dials, you change the contrast grade of your print.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-yellow-50 border-2 border-yellow-400 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3 text-lg">Yellow Dial</h5>
                      <p className="text-sm text-gray-700 mb-4">
                        Controls how much <strong className="text-red-600">yellow light</strong> reaches the paper.
                      </p>
                      <p className="text-xs text-gray-600 italic">
                        More yellow = Lower contrast (softer)
                      </p>
                    </div>

                    <div className="p-6 bg-pink-50 border-2 border-pink-400 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3 text-lg">Magenta Dial</h5>
                      <p className="text-sm text-gray-700 mb-4">
                        Controls how much <strong className="text-red-600">magenta light</strong> reaches the paper.
                      </p>
                      <p className="text-xs text-gray-600 italic">
                        More magenta = Higher contrast (punchier)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-900 text-white rounded-lg">
                  <h5 className="font-semibold mb-3 text-red-400">IMPORTANT</h5>
                  <p className="text-sm leading-relaxed">
                    Different color settings require different exposure times. When you change the grade, you must make a new <strong className="text-red-400">test strip</strong> to find the correct exposure time for that specific grade.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Module 4: Understanding Grades */}
          <div className="bg-white border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleModule(4)}
              className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                  04
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                    Understanding Grades (00-5)
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">The contrast scale explained</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 4 ? 'rotate-180' : ''}`} />
            </button>
            
            {openModule === 4 && (
              <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">The Multigrade Scale</h4>
                  <div className="space-y-3">
                    <div className="p-4 bg-gray-100 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-gray-900">Grade 00-1</span>
                        <span className="text-xs text-gray-600 italic">Very Low Contrast</span>
                      </div>
                      <p className="text-sm text-gray-700">Flat, soft images. Use for dense (overexposed) negatives.</p>
                    </div>

                    <div className="p-4 bg-blue-50 border-2 border-blue-500 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-blue-900">Grade 2</span>
                        <span className="text-xs text-blue-700 italic">Normal Contrast</span>
                      </div>
                      <p className="text-sm text-gray-700">The "standard" grade. Use for properly exposed negatives. This is your starting point.</p>
                    </div>

                    <div className="p-4 bg-gray-800 text-white rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">Grade 3-5</span>
                        <span className="text-xs text-gray-300 italic">High Contrast</span>
                      </div>
                      <p className="text-sm">Punchy, dramatic images. Use for thin (underexposed) negatives.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-red-50 border-l-4 border-red-600 rounded">
                  <h5 className="font-semibold text-red-600 mb-2">Key Principle</h5>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Paper grade doesn't fix bad exposure — it <strong className="text-red-600">compensates</strong> for it. A thin negative needs high contrast to look "normal." A dense negative needs low contrast to avoid looking muddy.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Module 5: Test Strip for Grading */}
          <div className="bg-white border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleModule(5)}
              className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                  05
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                    Test Strip for Grading
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Finding the perfect grade and exposure</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 5 ? 'rotate-180' : ''}`} />
            </button>
            
            {openModule === 5 && (
              <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">The Workflow</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Start at Grade 2</h5>
                        <p className="text-sm text-gray-700">Set your enlarger to Grade 2 (normal contrast). Make a test strip to find exposure time.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Evaluate the Result</h5>
                        <p className="text-sm text-gray-700">Does the print look too flat? Too contrasty? Or just right?</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Adjust Grade</h5>
                        <p className="text-sm text-gray-700">If too flat → increase grade. If too contrasty → decrease grade.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Make a New Test Strip</h5>
                        <p className="text-sm text-gray-700">Each grade needs its own exposure test! Don't reuse times from other grades.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h5 className="font-semibold text-gray-900 mb-2">Pro Tip</h5>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Write the grade and exposure time on the back of every test print in pencil. This saves you from repeating work and helps you learn how your negatives respond to different grades.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Module 6: Thin Negatives */}
          <div className="bg-white border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleModule(6)}
              className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 flex items-center justify-center text-gray-900 font-semibold text-sm sm:text-base border-2 border-gray-500">
                  06
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                    Thin Negatives (Underexposed)
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Pale, transparent film with weak density</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 6 ? 'rotate-180' : ''}`} />
            </button>
            
            {openModule === 6 && (
              <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What Causes Thin Negatives?</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700"><strong className="text-red-600">Underexposure</strong> in camera (not enough light hit the film)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700"><strong className="text-red-600">Underdevelopment</strong> (film not developed long enough)</p>
                      </div>
                    </div>

                    <div className="mt-6 p-5 bg-gray-100 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">What They Look Like</h5>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Hold the negative up to light. If it looks pale and you can easily see through it, it's thin. The highlights have weak density.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">The Problem</h4>
                    <div className="p-5 bg-red-50 border-l-4 border-red-600 rounded mb-6">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        When printed at Grade 2, thin negatives produce <strong className="text-red-600">flat, muddy, low-contrast</strong> prints. Shadow detail is weak or missing.
                      </p>
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 mb-4">The Solution</h4>
                    <div className="p-6 bg-gray-900 text-white rounded-lg">
                      <h5 className="font-semibold mb-2 text-red-400">Use HIGH contrast grades</h5>
                      <p className="text-2xl font-bold mb-2">Grade 3, 4, or 5</p>
                      <p className="text-sm leading-relaxed">
                        Higher grades add punch and depth to compensate for the lack of density in the negative. This helps separate tones and restore contrast.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Module 7: Dense Negatives */}
          <div className="bg-white border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleModule(7)}
              className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-gray-700 to-black flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                  07
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                    Dense Negatives (Overexposed)
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Dark, opaque film with excessive density</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 7 ? 'rotate-180' : ''}`} />
            </button>
            
            {openModule === 7 && (
              <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What Causes Dense Negatives?</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700"><strong className="text-red-600">Overexposure</strong> in camera (too much light hit the film)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700"><strong className="text-red-600">Overdevelopment</strong> (film developed too long)</p>
                      </div>
                    </div>

                    <div className="mt-6 p-5 bg-gray-800 text-white rounded-lg">
                      <h5 className="font-semibold mb-3">What They Look Like</h5>
                      <p className="text-sm leading-relaxed">
                        Hold the negative up to light. If it's very dark and hard to see through, it's dense. The shadows are blocked up with excessive density.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">The Problem</h4>
                    <div className="p-5 bg-red-50 border-l-4 border-red-600 rounded mb-6">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Dense negatives require <strong className="text-red-600">very long exposure times</strong> and produce overly contrasty, harsh prints at Grade 2. Highlights can blow out.
                      </p>
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 mb-4">The Solution</h4>
                    <div className="p-6 bg-gray-900 text-white rounded-lg">
                      <h5 className="font-semibold mb-2 text-red-400">Use LOW contrast grades</h5>
                      <p className="text-2xl font-bold mb-2">Grade 00, 0, or 1</p>
                      <p className="text-sm leading-relaxed">
                        Lower grades soften the contrast to prevent the print from looking too harsh. Expect longer exposure times (30+ seconds).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Module 8: Understanding Metering & Grey Card */}
          <div className="bg-white border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleModule(8)}
              className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                  08
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                    Understanding Metering & Grey Card
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">The 18% grey standard all meters use</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 8 ? 'rotate-180' : ''}`} />
            </button>
            
            {openModule === 8 && (
              <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">The Foundation of Metering</h4>
                    <div className="p-6 bg-gray-500 text-white rounded-lg mb-6">
                      <h5 className="font-semibold mb-3 text-lg">18% Grey Card</h5>
                      <p className="text-sm leading-relaxed mb-4">
                        A grey card reflects exactly <strong className="text-red-300">18% of light</strong>. This represents <strong className="text-red-300">"middle grey"</strong> — halfway between pure black (0% reflectance) and pure white (90% reflectance).
                      </p>
                      <div className="w-full h-32 bg-gray-500 border-4 border-white rounded flex items-center justify-center">
                        <span className="text-sm font-semibold">18% GREY</span>
                      </div>
                    </div>

                    <div className="p-5 bg-blue-50 rounded-lg border border-blue-200">
                      <h5 className="font-semibold text-gray-900 mb-2">Why 18%?</h5>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Camera manufacturers discovered that most real-world scenes average out to about 18% reflectance. So all reflected light meters are calibrated to assume everything they see should be 18% grey.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">How Meters Work</h4>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <div>
                          <p className="text-sm text-gray-700">
                            Your meter measures the <strong className="text-red-600">light reflecting</strong> off the subject
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <div>
                          <p className="text-sm text-gray-700">
                            It <strong className="text-red-600">assumes</strong> that subject should be rendered as 18% grey
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                        <div>
                          <p className="text-sm text-gray-700">
                            It recommends exposure settings to <strong className="text-red-600">make it 18% grey</strong>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gray-900 text-white rounded-lg">
                      <h5 className="font-semibold mb-3 text-red-400">THE PROBLEM</h5>
                      <p className="text-sm leading-relaxed">
                        Not everything IS 18% grey! When you point your meter at something very bright (like snow) or very dark (like coal), the meter still tries to make it middle grey — which creates incorrect exposures.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h5 className="font-semibold text-gray-900 mb-2">Using a Grey Card Correctly</h5>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Place an 18% grey card in the same light as your subject. Meter off the grey card instead of the subject. This gives you an accurate exposure regardless of how bright or dark your actual subject is. The meter sees "correct" middle grey and gives you the right exposure.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Module 9: Metering - White Card */}
          <div className="bg-white border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleModule(9)}
              className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-slate-100 to-slate-300 flex items-center justify-center text-gray-900 font-semibold text-sm sm:text-base border-2 border-gray-400">
                  09
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                    Metering: White Card
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">How bright subjects fool your meter into underexposure</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 9 ? 'rotate-180' : ''}`} />
            </button>
            
            {openModule === 9 && (
              <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">The Situation</h4>
                    <div className="p-5 bg-white border-2 border-gray-300 rounded-lg mb-6">
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">
                        You point your camera at a bright white subject (like a white card or snow). It reflects about <strong className="text-red-600">90% of the light hitting it</strong>.
                      </p>
                      
                      <div className="flex items-center justify-center gap-8 my-6">
                        <div className="w-24 h-32 bg-white border-4 border-gray-800 rounded flex items-center justify-center">
                          <span className="text-xs font-semibold text-gray-400">WHITE</span>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl text-red-600 mb-2">→</div>
                          <p className="text-xs italic text-red-600">"Too Bright!"</p>
                        </div>
                        <div className="w-24 h-32 bg-gray-500 border-4 border-gray-800 rounded flex items-center justify-center">
                          <span className="text-xs font-semibold text-white">GREY</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 bg-red-50 border-l-4 border-red-600 rounded">
                      <h5 className="font-semibold text-red-600 mb-2">The Meter's Mistake</h5>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        The meter thinks <em>everything</em> should be middle grey. It sees the bright light and assumes the scene is overexposed, so it <strong className="text-red-600">reduces exposure</strong> to make it grey.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Real World Examples</h4>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Snow Scenes:</h5>
                          <p className="text-sm text-gray-700">Often turn out grey and muddy.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">White Walls:</h5>
                          <p className="text-sm text-gray-700">Look dingy and underexposed.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Bright Beaches:</h5>
                          <p className="text-sm text-gray-700">Sand looks darker than reality.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Backlit Subjects:</h5>
                          <p className="text-sm text-gray-700">Bright background fools the meter, turning your subject into a silhouette.</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 bg-gray-900 text-white rounded-lg">
                      <h5 className="font-semibold mb-2 text-red-500">THE FIX: OVEREXPOSE</h5>
                      <p className="text-2xl font-bold mb-2">+1.5 to +2 Stops</p>
                      <p className="text-sm leading-relaxed">
                        You must deliberately let in <em>more light</em> than the meter suggests to keep whites looking white.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Module 10: Metering - Black Card */}
          <div className="bg-white border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleModule(10)}
              className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-gray-800 to-black flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                  10
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                    Metering: Black Card
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">How dark subjects fool your meter into overexposure</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 10 ? 'rotate-180' : ''}`} />
            </button>
            
            {openModule === 10 && (
              <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">The Situation</h4>
                    <div className="p-5 bg-gray-800 text-white border-2 border-gray-600 rounded-lg mb-6">
                      <p className="text-sm leading-relaxed mb-4">
                        You point your camera at a dark black subject (like a black card or night sky). It reflects very little light (approx <strong className="text-red-600">3-5%</strong>).
                      </p>
                      
                      <div className="flex items-center justify-center gap-8 my-6">
                        <div className="w-24 h-32 bg-black border-4 border-white rounded flex items-center justify-center">
                          <span className="text-xs font-semibold text-gray-400">BLACK</span>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl text-red-500 mb-2">→</div>
                          <p className="text-xs italic text-red-500">"Too Dark!"</p>
                        </div>
                        <div className="w-24 h-32 bg-gray-500 border-4 border-white rounded flex items-center justify-center">
                          <span className="text-xs font-semibold text-white">GREY</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 bg-red-50 border-l-4 border-red-600 rounded">
                      <h5 className="font-semibold text-red-600 mb-2">The Meter's Mistake</h5>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        The meter assumes the darkness is just "underexposed grey." It <strong className="text-red-600">increases exposure</strong> to brighten the scene up to middle grey.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Real World Examples</h4>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Coal/Dark Rocks:</h5>
                          <p className="text-sm text-gray-700">Appear grey instead of black.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Night Photography:</h5>
                          <p className="text-sm text-gray-700">The black sky turns a muddy grey.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Black Clothing:</h5>
                          <p className="text-sm text-gray-700">Looks washed out and grey.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Low Key Portraits:</h5>
                          <p className="text-sm text-gray-700">Shadows lose their depth.</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 bg-gray-900 text-white rounded-lg">
                      <h5 className="font-semibold mb-2 text-red-500">THE FIX: UNDEREXPOSE</h5>
                      <p className="text-2xl font-bold mb-2">-1.5 to -2 Stops</p>
                      <p className="text-sm leading-relaxed">
                        You must deliberately let in <em>less light</em> than the meter suggests to keep blacks looking black.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Module 11: Exposure Chart - Full Stops */}
          <div className="bg-white border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleModule(11)}
              className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                  11
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                    Exposure Chart: Full Stops
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Understanding equivalent exposures and reciprocity</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 11 ? 'rotate-180' : ''}`} />
            </button>
            
            {openModule === 11 && (
              <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Aperture (f-stops)</h4>
                  <div className="overflow-x-auto mb-2">
                    <div className="flex gap-2 min-w-max">
                      <div className="flex-1 min-w-[100px] p-3 bg-gray-100 border border-gray-300 text-center rounded">
                        <p className="text-sm font-semibold">f/1.4</p>
                        <p className="text-xs text-gray-600 mt-1">More Light (Shallow Depth)</p>
                      </div>
                      <div className="flex-1 min-w-[100px] p-3 bg-gray-100 border border-gray-300 text-center rounded">
                        <p className="text-sm font-semibold">f/2</p>
                      </div>
                      <div className="flex-1 min-w-[100px] p-3 bg-gray-100 border border-gray-300 text-center rounded">
                        <p className="text-sm font-semibold">f/2.8</p>
                      </div>
                      <div className="flex-1 min-w-[100px] p-3 bg-gray-100 border border-gray-300 text-center rounded">
                        <p className="text-sm font-semibold">f/4</p>
                      </div>
                      <div className="flex-1 min-w-[100px] p-3 bg-gray-100 border border-gray-300 text-center rounded">
                        <p className="text-sm font-semibold">f/5.6</p>
                      </div>
                      <div className="flex-1 min-w-[100px] p-3 bg-red-50 border-2 border-red-500 text-center rounded">
                        <p className="text-sm font-bold text-red-600">f/8</p>
                      </div>
                      <div className="flex-1 min-w-[100px] p-3 bg-gray-100 border border-gray-300 text-center rounded">
                        <p className="text-sm font-semibold">f/11</p>
                      </div>
                      <div className="flex-1 min-w-[100px] p-3 bg-gray-100 border border-gray-300 text-center rounded">
                        <p className="text-sm font-semibold">f/16</p>
                      </div>
                      <div className="flex-1 min-w-[100px] p-3 bg-gray-100 border border-gray-300 text-center rounded">
                        <p className="text-sm font-semibold">f/22</p>
                        <p className="text-xs text-gray-600 mt-1">Less Light (Deep Depth)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Shutter Speed (Seconds)</h4>
                  <div className="overflow-x-auto mb-2">
                    <div className="flex gap-2 min-w-max">
                      <div className="flex-1 min-w-[100px] p-3 bg-gray-100 border border-gray-300 text-center rounded">
                        <p className="text-sm font-semibold">1"</p>
                        <p className="text-xs text-gray-600 mt-1">More Light (Blur Motion)</p>
                      </div>
                      <div className="flex-1 min-w-[100px] p-3 bg-gray-100 border border-gray-300 text-center rounded">
                        <p className="text-sm font-semibold">1/2</p>
                      </div>
                      <div className="flex-1 min-w-[100px] p-3 bg-gray-100 border border-gray-300 text-center rounded">
                        <p className="text-sm font-semibold">1/4</p>
                      </div>
                      <div className="flex-1 min-w-[100px] p-3 bg-gray-100 border border-gray-300 text-center rounded">
                        <p className="text-sm font-semibold">1/8</p>
                      </div>
                      <div className="flex-1 min-w-[100px] p-3 bg-gray-100 border border-gray-300 text-center rounded">
                        <p className="text-sm font-semibold">1/15</p>
                      </div>
                      <div className="flex-1 min-w-[100px] p-3 bg-gray-100 border border-gray-300 text-center rounded">
                        <p className="text-sm font-semibold">1/30</p>
                      </div>
                      <div className="flex-1 min-w-[100px] p-3 bg-red-50 border-2 border-red-500 text-center rounded">
                        <p className="text-sm font-bold text-red-600">1/60</p>
                      </div>
                      <div className="flex-1 min-w-[100px] p-3 bg-gray-100 border border-gray-300 text-center rounded">
                        <p className="text-sm font-semibold">1/125</p>
                      </div>
                      <div className="flex-1 min-w-[100px] p-3 bg-gray-100 border border-gray-300 text-center rounded">
                        <p className="text-sm font-semibold">1/250</p>
                        <p className="text-xs text-gray-600 mt-1">Less Light (Freeze Motion)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-900 text-white rounded-lg mb-6">
                  <h4 className="text-xl font-semibold mb-4 text-center">Equivalent Exposures (Reciprocity)</h4>
                  <div className="grid grid-cols-5 gap-4 text-center">
                    <div className="p-4 bg-gray-800 rounded">
                      <p className="text-lg font-bold text-red-500 mb-1">f/4</p>
                      <p className="text-sm mb-2">1/250</p>
                      <p className="text-xs text-gray-400">Fast Action</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded">
                      <p className="text-lg font-bold text-red-500 mb-1">f/5.6</p>
                      <p className="text-sm mb-2">1/125</p>
                      <p className="text-xs text-gray-400">General</p>
                    </div>
                    <div className="p-4 bg-red-900 border-2 border-red-500 rounded">
                      <p className="text-lg font-bold text-white mb-1">f/8</p>
                      <p className="text-sm mb-2">1/60</p>
                      <p className="text-xs text-red-300">BASE READING</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded">
                      <p className="text-lg font-bold text-red-500 mb-1">f/11</p>
                      <p className="text-sm mb-2">1/30</p>
                      <p className="text-xs text-gray-400">Depth of Field</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded">
                      <p className="text-lg font-bold text-red-500 mb-1">f/16</p>
                      <p className="text-sm mb-2">1/15</p>
                      <p className="text-xs text-gray-400">Max Depth</p>
                    </div>
                  </div>
                  <p className="text-center text-sm mt-4 italic">All these settings let in the SAME AMOUNT OF LIGHT.</p>
                </div>

                <div className="p-5 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-gray-900 mb-2">The Principle</h5>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Each full stop change (doubling or halving) in aperture must be compensated by an opposite change in shutter speed to maintain the same exposure. This reciprocity allows you to prioritize either <strong className="text-red-600">depth of field</strong> (aperture) or <strong className="text-red-600">motion blur</strong> (shutter speed) while keeping exposure constant.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Module 12: Week 4 Homework - Bracketing */}
          <div className="bg-white border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleModule(12)}
              className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-red-600 to-pink-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                  12
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                    Week 4 Homework: Bracketing
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Testing film latitude with exposure variations</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 12 ? 'rotate-180' : ''}`} />
            </button>
            
            {openModule === 12 && (
              <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">The Subject</h4>
                    <div className="p-5 bg-blue-50 border-l-4 border-blue-600 rounded-lg mb-6">
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">
                        Choose a <strong className="text-red-600">Landscape scene</strong>.
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <strong className="text-red-600">Why?</strong> The light doesn't change quickly, allowing you time to adjust settings and shoot multiple frames of the exact same composition.
                      </p>
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 mb-4">The Process</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Compose your shot.</h5>
                          <p className="text-sm text-gray-700">
                            Find your perfect landscape composition and lock down your framing.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Take a meter reading for "Perfect" exposure.</h5>
                          <p className="text-sm text-gray-700">
                            Use your light meter to establish your baseline exposure settings.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Shoot 3 frames of the same scene</h5>
                          <p className="text-sm text-gray-700">
                            Use the settings on the right for each frame.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">The Three Frames</h4>
                    <div className="space-y-4">
                      <div className="p-5 bg-white border-2 border-gray-300 rounded-lg">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                            <span className="text-lg font-bold">0</span>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900 mb-2">Frame 1: Normal</h5>
                            <p className="text-sm text-gray-700">
                              Shoot at <strong className="text-red-600">the meter's recommended settings</strong>.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 bg-white border-2 border-gray-300 rounded-lg">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-12 h-12 bg-gray-400 rounded flex items-center justify-center flex-shrink-0">
                            <span className="text-lg font-bold text-white">-2</span>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900 mb-2">Frame 2: Underexposed</h5>
                            <p className="text-sm text-gray-700 mb-2">
                              <strong className="text-red-600">Close aperture by 2 stops</strong> (e.g., f/8 → f/16) OR <strong className="text-red-600">speed up shutter</strong> (1/60 → 1/250).
                            </p>
                            <p className="text-xs text-gray-600 italic">
                              This simulates underexposure.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 bg-gray-800 border-2 border-gray-600 rounded-lg text-white">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-12 h-12 bg-gray-900 rounded flex items-center justify-center flex-shrink-0 border border-gray-600">
                            <span className="text-lg font-bold">+2</span>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold mb-2">Frame 3: Overexposed</h5>
                            <p className="text-sm mb-2">
                              <strong className="text-red-600">Open aperture by 2 stops</strong> (e.g., f/8 → f/4) OR <strong className="text-red-600">slow down shutter</strong> (1/60 → 1/15).
                            </p>
                            <p className="text-xs text-gray-400 italic">
                              This simulates overexposure.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-red-900 text-white rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-center text-red-300">THE GOAL FOR NEXT WEEK</h4>
                  <p className="text-sm leading-relaxed text-center">
                    We will print all three negatives. Can we make a good print from the underexposed one? The overexposed one? This tests the <strong className="text-red-400">latitude</strong> of the film and your printing skills.
                  </p>
                </div>

                <div className="mt-6 p-5 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h5 className="font-semibold text-gray-900 mb-2">What You'll Learn</h5>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    This exercise reveals how forgiving (or unforgiving) your film is, and demonstrates how multigrade paper can rescue imperfect exposures. Understanding bracketing and film latitude is essential for mastering exposure control and becoming confident in challenging lighting situations.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
