import { Link } from 'react-router';
import { ArrowLeft, Download, CheckCircle2, Camera, Lightbulb, FileText, Grid3x3, Square } from 'lucide-react';

export function FilmDarkroomWeek06() {
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
            <span className="text-6xl font-bold text-gray-300">06</span>
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">Week 06 // Studio Metering & Masking</span>
          </div>
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-slate-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Studio Metering & Masking for Print
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Master reflective metering, understand the K1000's behavior, and learn advanced darkroom masking techniques
          </p>
        </div>

        {/* Module 1: Processing Workflow */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_01 // THE COMPLETE PROCESS</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Film & Darkroom Processing Workflow
            </h4>
            <p className="text-gray-600 mt-2">
              Understanding the complete journey from capture to print
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 border-l-4 border-red-500 pl-6 py-2">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h5 className="font-semibold text-gray-900">SHOOT</h5>
                <p className="text-gray-700 text-sm">Meter the scene, expose the film, capture the image in camera</p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-l-4 border-orange-500 pl-6 py-2">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h5 className="font-semibold text-gray-900">DEVELOP</h5>
                <p className="text-gray-700 text-sm">Process the exposed film in chemistry to create a negative</p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-l-4 border-cyan-500 pl-6 py-2">
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h5 className="font-semibold text-gray-900">PRINT</h5>
                <p className="text-gray-700 text-sm">Enlarge the negative onto light-sensitive paper, manipulate exposure</p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-l-4 border-purple-500 pl-6 py-2">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h5 className="font-semibold text-gray-900">PROCESS (PAPER)</h5>
                <p className="text-gray-700 text-sm">Develop, stop, fix, and wash the print—bring the latent image to life</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-red-600">Key insight:</strong> Each stage feeds into the next. Poor metering means a bad negative. A bad negative means a difficult print. A difficult print means hours of dodging and burning to rescue the image. Get it right at the source.
            </p>
          </div>
        </div>

        {/* Module 2: Today's Agenda */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_02 // TODAY'S AGENDA</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              What We're Doing Today
            </h4>
            <p className="text-gray-600 mt-2">
              Film development and studio metering experiments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <Camera className="w-8 h-8 text-red-600" />
                <h5 className="text-xl font-semibold text-gray-900">Part 1: Film Development</h5>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We're going to <strong className="text-red-600">develop film together</strong> as a class—real chemicals, real darkness, real results. You'll learn the full workflow from loading reels to hanging negatives to dry.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Why it matters:</strong> Understanding film development connects your metering decisions to your final negative. You'll see firsthand how exposure translates to density.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-blue-600" />
                <h5 className="text-xl font-semibold text-gray-900">Part 2: Studio Experiments</h5>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                After developing film, we'll move into the <strong className="text-blue-600">studio for metering experiments</strong>—shooting 36 systematic frames testing the K1000's reflective meter against white, grey, and black subjects.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Why it matters:</strong> This experiment will prove exactly how your camera's meter behaves and teach you to compensate for its biases.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-red-600">Important:</strong> Bring your K1000, loaded film (ISO 400), a notebook, and a pencil. We'll be documenting every frame—meter readings, exposure compensation, and final settings. This data is crucial for analysis next week.
            </p>
          </div>
        </div>

        {/* Module 3: Last Week's Task */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_03 // RECAP</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Last Week's Task: Dodging & Burning
            </h4>
            <p className="text-gray-600 mt-2">
              What you should have completed
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 font-semibold">Create a Print Map</p>
                <p className="text-sm text-gray-600">Sketch your negative and annotate zones for dodging and burning</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 font-semibold">Print with Selective Exposure</p>
                <p className="text-sm text-gray-600">Apply your map in the darkroom—dodge highlights, burn shadows</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 font-semibold">Evaluate Results</p>
                <p className="text-sm text-gray-600">Compare your straight print to your dodged/burned print—what improved?</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
            <p className="text-sm text-gray-700">
              <strong className="text-gray-900">Quick Review:</strong> Dodging lightens (hold back exposure), burning darkens (add exposure). Both techniques give you local control over tonality in your prints.
            </p>
          </div>
        </div>

        {/* Module 4: Masking - The Selective Tool */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_04 // MASKING FUNDAMENTALS</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Masking: The Selective Tool
            </h4>
            <p className="text-gray-600 mt-2">
              Precision exposure control with physical barriers
            </p>
          </div>

          <div className="mb-6">
            <h5 className="font-semibold text-gray-900 mb-3 text-lg">What Is a Mask?</h5>
            <p className="text-gray-700 leading-relaxed mb-4">
              A physical barrier (usually cardboard or acetate) placed between the negative and the paper during printing. It blocks light in specific areas while allowing exposure elsewhere.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-200">
                <h6 className="font-semibold text-gray-900 mb-2">EXPOSED</h6>
                <p className="text-sm text-gray-700">Receives Light</p>
              </div>
              <div className="bg-slate-100 p-5 rounded-lg border-2 border-slate-300">
                <h6 className="font-semibold text-gray-900 mb-2">PROTECTED</h6>
                <p className="text-sm text-gray-700">Blocked by Mask</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h5 className="font-semibold text-gray-900 mb-3 text-lg">Why Use Masks?</h5>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Precise Edges</p>
                  <p className="text-sm text-gray-700">Clean transition between exposed and protected areas</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Controlled Burning</p>
                  <p className="text-sm text-gray-700">Burn the sky without affecting the foreground</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Repeatability</p>
                  <p className="text-sm text-gray-700">Use the same mask for multiple prints of the same image</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Confidence</p>
                  <p className="text-sm text-gray-700">Know exactly what will happen before you expose</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Module 5: Creating a Mask */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_05 // MASK CREATION</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Creating a Mask: Step by Step
            </h4>
            <p className="text-gray-600 mt-2">
              How to make precision masks for burning
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 border-l-4 border-blue-500 pl-6 py-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Identify the Horizon</h5>
                <p className="text-gray-700 mb-2">Print your image then find the exact line where sky meets foreground.</p>
                <p className="text-sm text-gray-600 italic">Tip: Use a light box or window to see the negative clearly.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-l-4 border-cyan-500 pl-6 py-3">
              <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Trace the Line</h5>
                <p className="text-gray-700 mb-2">Place cardboard over the print and carefully trace the horizon line with a pencil.</p>
                <p className="text-sm text-gray-600 italic">Tip: Use a straight edge for clean, precise lines.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-l-4 border-purple-500 pl-6 py-3">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Cut Precisely</h5>
                <p className="text-gray-700 mb-2">Use a sharp craft knife or blade to cut along the traced line. Take your time.</p>
                <p className="text-sm text-gray-600 italic">Tip: Multiple light passes with the knife are better than one heavy cut.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-l-4 border-orange-500 pl-6 py-3">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Test the Fit</h5>
                <p className="text-gray-700 mb-2">Hold the mask over the paper on the enlarger. Check that it aligns with the horizon.</p>
                <p className="text-sm text-gray-600 italic">Tip: Adjust if needed. A perfect fit ensures clean burning.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-lg">
            <p className="text-gray-700 font-semibold mb-1">RESULT:</p>
            <p className="text-gray-700">You now have a reusable mask for burning the sky while protecting the foreground.</p>
          </div>
        </div>

        {/* Module 6: The Image Map */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_06 // PRINT PLANNING</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              The Image Map: Planning Your Print
            </h4>
            <p className="text-gray-600 mt-2">
              Sketching exposure zones before you print
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-gray-900 mb-3 text-lg">What Is an Image Map?</h5>
              <p className="text-gray-700 leading-relaxed">
                A sketch of your negative with annotations marking zones for exposure control. You draw the composition, then label areas for dodging (lightening) or burning (darkening).
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-3 text-lg">Why Create One?</h5>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Precision</p>
                    <p className="text-sm text-gray-700">Know exactly where to apply selective exposure</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-cyan-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Consistency</p>
                    <p className="text-sm text-gray-700">Repeat successful prints without guessing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl border-2 border-slate-200">
              <h6 className="font-semibold text-gray-900 mb-3">Example: A Simple Map</h6>
              <div className="bg-white p-5 rounded-lg space-y-2">
                <p className="text-gray-700"><span className="font-semibold text-blue-600">SKY</span> – 20 seconds</p>
                <p className="text-gray-700"><span className="font-semibold text-green-600">TREE</span> – 10 seconds</p>
                <p className="text-gray-700"><span className="font-semibold text-orange-600">FOREGROUND</span> – 15 seconds</p>
                <p className="text-sm text-gray-600 mt-3 italic">Each zone gets its own exposure – Grade 3</p>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-3 text-lg">The Workflow:</h5>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <p className="text-gray-700">Print straight (no dodging/burning)</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <p className="text-gray-700">Evaluate the result</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <p className="text-gray-700">Create your map</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <p className="text-gray-700">Execute with precision</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Module 7: Metering with K1000 */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_07 // CAMERA METERING</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Metering with the K1000 35mm SLR
            </h4>
            <p className="text-gray-600 mt-2">
              Understanding your camera's reflective meter
            </p>
          </div>

          <div className="mb-6">
            <h5 className="font-semibold text-gray-900 mb-4 text-lg">Learning Objectives</h5>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">01</span>
                <div>
                  <h6 className="font-semibold text-gray-900 mb-1">Understand Reflective Metering Bias</h6>
                  <p className="text-sm text-gray-700">Recognize why the K1000's meter renders white subjects as grey and black subjects as washed out—it's the meter's design.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-cyan-50 rounded-lg border-l-4 border-cyan-500">
                <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm">02</span>
                <div>
                  <h6 className="font-semibold text-gray-900 mb-1">Master the Grey Card Technique</h6>
                  <p className="text-sm text-gray-700">Learn to meter on an 18% grey card to calibrate the camera to your lighting, ensuring consistent, printable negatives.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">03</span>
                <div>
                  <h6 className="font-semibold text-gray-900 mb-1">Predict Meter Behavior</h6>
                  <p className="text-sm text-gray-700">After this session, you'll be able to predict how the meter will respond to any tonal combination and adjust exposure accordingly.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">04</span>
                <div>
                  <h6 className="font-semibold text-gray-900 mb-1">Develop with Purpose</h6>
                  <p className="text-sm text-gray-700">See the direct relationship between your metering decision and the final negative—no guessing, just cause and effect.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-100 to-slate-200 p-6 rounded-xl border-2 border-slate-300">
            <h5 className="font-semibold text-gray-900 mb-3">The Meter's Logic</h5>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">WHITE</p>
                <p className="text-lg font-bold text-gray-900 mb-1">→</p>
                <p className="text-sm text-gray-700">Rendered as grey</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center border-2 border-blue-500">
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">GREY</p>
                <p className="text-lg font-bold text-gray-900 mb-1">✓</p>
                <p className="text-sm text-gray-700">18% grey reference</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">BLACK</p>
                <p className="text-lg font-bold text-gray-900 mb-1">→</p>
                <p className="text-sm text-gray-700">Rendered as grey</p>
              </div>
            </div>
          </div>
        </div>

        {/* Module 8: Applying the Mask */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_08 // MASK WORKFLOW</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Applying the Mask: Burning the Sky
            </h4>
            <p className="text-gray-600 mt-2">
              The complete workflow for masked burning
            </p>
          </div>

          <div className="space-y-6">
            <h5 className="font-semibold text-gray-900 text-lg">The Workflow:</h5>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 border-l-4 border-blue-500 pl-6 py-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h6 className="font-semibold text-gray-900 mb-2">Print Straight</h6>
                  <p className="text-gray-700">Make a normal print without any mask or burning. This is your baseline.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-l-4 border-cyan-500 pl-6 py-3">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h6 className="font-semibold text-gray-900 mb-2">Position the Mask</h6>
                  <p className="text-gray-700">After the initial exposure, place your mask on the enlarger baseboard to cover the foreground.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-l-4 border-purple-500 pl-6 py-3">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h6 className="font-semibold text-gray-900 mb-2">Burn the Sky</h6>
                  <p className="text-gray-700">Give the sky additional exposure (e.g., +5 seconds) while the foreground is protected.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-l-4 border-orange-500 pl-6 py-3">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h6 className="font-semibold text-gray-900 mb-2">Process</h6>
                  <p className="text-gray-700">Remove the mask and process the print normally (develop, stop, fix, wash).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500">
            <h5 className="font-semibold text-gray-900 mb-2">Before & After:</h5>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-red-600 mb-1">Without Mask:</p>
                <p className="text-sm text-gray-700">Washed out sky</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-green-600 mb-1">With Mask:</p>
                <p className="text-sm text-gray-700">Rich, detailed sky</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 italic">
              <strong>The Difference:</strong> The mask allows you to burn the sky to a rich tone without darkening the foreground. The horizon line is clean and precise. The trees were also included in the mask.
            </p>
          </div>
        </div>

        {/* Module 9: The Pentax K1000 Meter */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_09 // METER CHARACTERISTICS</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              The Pentax K1000 Meter
            </h4>
            <p className="text-gray-600 mt-2">
              Understanding your meter's behavior and design
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-red-600">TTL Reflective</span>
              </h5>
              <p className="text-gray-700">
                Through-The-Lens metering: It measures light reflected back into the lens — the core of its behavior.
              </p>
            </div>

            <div className="border-l-4 border-cyan-500 pl-6">
              <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-red-600">The 18% Assumption</span>
              </h5>
              <p className="text-gray-700">
                The meter tries to render scenes as Middle Grey (18% reflectance). It treats bright and dark subjects the same way.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-red-600">Wide-Open Reading</span>
              </h5>
              <p className="text-gray-700">
                Readings are taken with the lens wide open; the chosen aperture is applied only when the shutter fires.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-slate-100 to-slate-200 p-6 rounded-xl border-2 border-slate-300">
            <p className="text-lg text-gray-900 italic text-center font-medium">
              "The camera is not wrong — it is being obedient."
            </p>
            <div className="mt-4 bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-700 text-center">
                <strong>Camera Meter:</strong> 60-70% coverage area with center-weighted metering and sensitivity hotspot
              </p>
            </div>
          </div>
        </div>

        {/* Module 10: Reflective Metering Bias */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_10 // METERING BIAS</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Reflective Metering Bias
            </h4>
            <p className="text-gray-600 mt-2">
              Why your meter gets it wrong—and how to fix it
            </p>
          </div>

          <div className="mb-6 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-500">
            <h5 className="font-semibold text-gray-900 mb-2">The 18% Assumption:</h5>
            <p className="text-gray-700">
              The meter is calibrated to assume that the average scene reflects 18% of the light (Middle Grey). It tries to force everything it sees to become this tone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-6 rounded-xl border-2 border-slate-300">
              <h5 className="font-semibold text-gray-900 mb-4 text-lg">Scenario A:</h5>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600 mb-1">REALITY</p>
                  <p className="text-2xl font-bold text-gray-900">White</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl text-red-600">↓</p>
                  <p className="text-sm text-gray-700 italic">"Too bright! I must darken it."</p>
                </div>
                <div className="bg-slate-400 p-4 rounded-lg text-center">
                  <p className="text-sm text-white mb-1">RESULT</p>
                  <p className="text-2xl font-bold text-white">Grey</p>
                </div>
                <div className="bg-red-100 p-3 rounded-lg border-l-4 border-red-500">
                  <p className="text-sm font-semibold text-red-700 text-center">UNDEREXPOSED</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border-2 border-slate-600">
              <h5 className="font-semibold text-white mb-4 text-lg">Scenario B:</h5>
              <div className="space-y-3">
                <div className="bg-slate-950 p-4 rounded-lg text-center border border-slate-700">
                  <p className="text-sm text-gray-400 mb-1">REALITY</p>
                  <p className="text-2xl font-bold text-white">Black</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl text-red-400">↓</p>
                  <p className="text-sm text-gray-300 italic">"Too dark! I must brighten it."</p>
                </div>
                <div className="bg-slate-400 p-4 rounded-lg text-center">
                  <p className="text-sm text-white mb-1">RESULT</p>
                  <p className="text-2xl font-bold text-white">Grey</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-lg border-l-4 border-orange-500">
                  <p className="text-sm font-semibold text-orange-700 text-center">OVEREXPOSED</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-slate-100 to-slate-200 p-6 rounded-xl border-2 border-slate-300">
            <p className="text-lg text-gray-900 italic text-center font-medium">
              "The camera is not broken. It is being obedient to a flawed assumption."
            </p>
          </div>
        </div>

        {/* Module 11: The Grey Card Technique */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_11 // GREY CARD METHOD</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              The Grey Card Technique
            </h4>
            <p className="text-gray-600 mt-2">
              Calibration, not guessing
            </p>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              An 18% grey card reflects exactly the amount of light the meter is designed to see. When you meter off it, you are calibrating your camera to the incident light falling on the scene, ignoring the subject's color or tone.
            </p>

            <div className="bg-gradient-to-br from-slate-400 to-slate-500 p-8 rounded-xl text-center mb-6">
              <div className="bg-white inline-block px-6 py-3 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">18% REFLECTANCE</p>
                <Square className="w-16 h-16 mx-auto text-slate-500 fill-slate-500" />
                <p className="text-xs text-gray-600 mt-1">Grey Card</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="font-semibold text-gray-900 text-lg">How to Use the Grey Card:</h5>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-500 pl-6 py-3">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">01</span>
                  <h6 className="font-semibold text-gray-900">Place It</h6>
                </div>
                <p className="text-sm text-gray-700">Put the grey card in the scene, exactly where your subject is. Ensure it's catching the same light.</p>
              </div>

              <div className="border-l-4 border-cyan-500 pl-6 py-3">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm">02</span>
                  <h6 className="font-semibold text-gray-900">Fill the Frame</h6>
                </div>
                <p className="text-sm text-gray-700">Move the camera close so the card fills the center viewfinder circle. The camera must see only grey.</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 py-3">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">03</span>
                  <h6 className="font-semibold text-gray-900">Center the Needle</h6>
                </div>
                <p className="text-sm text-gray-700">Adjust aperture and shutter speed until the needle is perfectly horizontal.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6 py-3">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">04</span>
                  <h6 className="font-semibold text-gray-900">Lock & Shoot</h6>
                </div>
                <p className="text-sm text-gray-700">Remove the card. Do not change settings. Recompose your shot and take the picture.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
            <p className="text-sm text-gray-700">
              <strong className="text-gray-900">Note:</strong> The K1000 meters with the lens wide open. It only stops down when you fire. Trust the needle!
            </p>
          </div>
        </div>

        {/* Module 12: Testing Your Camera's Metering */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_12 // STUDIO TEST</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Testing Your Camera's Metering
            </h4>
            <p className="text-gray-600 mt-2">
              A systematic studio experiment
            </p>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              We will create a <strong className="text-red-600">controlled studio environment</strong> to test how the Pentax K1000's meter responds to different tonal combinations. We'll shoot <strong className="text-red-600">36 frames</strong> with systematic variations in background, subject, and exposure compensation—then develop the film to see what the meter "saw."
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6 py-3">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">01</span>
                <h6 className="font-semibold text-gray-900 text-lg">Studio Setup</h6>
              </div>
              <p className="text-gray-700">Build two scenes: a high-key (white background) and low-key (black background) studio. Place the three tonal cubes (white, grey, black) as metering subjects.</p>
            </div>

            <div className="border-l-4 border-cyan-500 pl-6 py-3">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm">02</span>
                <h6 className="font-semibold text-gray-900 text-lg">Systematic Shooting</h6>
              </div>
              <p className="text-gray-700">Follow the shot list. For each frame, meter the cube, document ISO/Shutter/Aperture, and apply the specified exposure compensation (Normal, -1, -2, +1, +2).</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 py-3">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">03</span>
                <h6 className="font-semibold text-gray-900 text-lg">Film Processing</h6>
              </div>
              <p className="text-gray-700">Develop the roll in the darkroom. Analyze the negatives to see how each metering decision affected the final exposure and tonal range.</p>
            </div>
          </div>
        </div>

        {/* Module 13: The Shot List - 36 Frames */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_13 // SHOT LIST</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              The Shot List: 36 Frames
            </h4>
            <p className="text-gray-600 mt-2">
              Systematic testing of every combination
            </p>
          </div>

          <div className="mb-6 bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <p className="text-gray-700">
              We will systematically test every combination to build a complete "map" of the meter's behavior. <strong className="text-red-600">Do not deviate from the sequence.</strong>
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-xl border-2 border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-6 h-6 text-blue-600" />
                <h5 className="font-semibold text-gray-900 text-lg">Phase 1 (Frames 1-12)</h5>
              </div>
              <div className="mb-3">
                <p className="text-sm text-gray-600 uppercase tracking-wide mb-1">High Key Studio</p>
                <p className="text-gray-700 mb-3">White Background. We will cycle through all three cubes (White, Grey, Black) to see how the bright background influences the meter.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-900 mb-1">KEY QUESTION:</p>
                <p className="text-sm text-gray-700">Will the white background force underexposure?</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border-2 border-slate-600">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-6 h-6 text-cyan-400" />
                <h5 className="font-semibold text-white text-lg">Phase 2 (Frames 13-24)</h5>
              </div>
              <div className="mb-3">
                <p className="text-sm text-gray-300 uppercase tracking-wide mb-1">Low Key Studio</p>
                <p className="text-gray-200 mb-3">Black Background. Repeating the same cube sequence against the dark void.</p>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg">
                <p className="text-sm font-semibold text-white mb-1">KEY QUESTION:</p>
                <p className="text-sm text-gray-200">Will the black background force overexposure?</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-6 h-6 text-purple-600" />
                <h5 className="font-semibold text-gray-900 text-lg">Phase 3 (Frames 25-36)</h5>
              </div>
              <div className="mb-3">
                <p className="text-sm text-gray-600 uppercase tracking-wide mb-1">The Variables</p>
                <p className="text-gray-700 mb-3">Extreme tests. Grey card calibration shots, lighting ratio tests, and intentional "mistakes" to break the meter.</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-900 mb-1">KEY QUESTION:</p>
                <p className="text-sm text-gray-700">Can we calibrate perfectly using the Grey Card?</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-slate-100 p-4 rounded-lg">
            <p className="text-sm font-semibold text-gray-900 mb-2">Legend:</p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-red-700 rounded"></span>
                <span className="text-sm text-gray-700">Normal Exposure (N)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-red-500 rounded"></span>
                <span className="text-sm text-gray-700">Underexposure (-1, -2)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-red-300 rounded"></span>
                <span className="text-sm text-gray-700">Overexposure (+1, +2)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Module 14: The Three Cubes */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_14 // TEST SUBJECTS</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              The Three Cubes
            </h4>
            <p className="text-gray-600 mt-2">
              Testing three distinct tonal values
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* White Cube */}
            <div className="bg-gradient-to-br from-white to-slate-100 p-6 rounded-xl border-2 border-slate-300">
              <div className="mb-4">
                <div className="w-full h-32 bg-white rounded-lg border-2 border-slate-300 shadow-inner mb-4"></div>
                <h5 className="font-semibold text-gray-900 text-lg mb-2">White Cube - The Highlight</h5>
                <div className="space-y-1 text-sm mb-4">
                  <p className="text-gray-700"><strong>Reflectance:</strong> ~90%</p>
                  <p className="text-gray-700"><strong>Zone System:</strong> Zone VII/VIII</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-3">
                <p className="text-xs font-semibold text-gray-900 mb-2">METER SAYS:</p>
                <p className="text-sm text-gray-700 italic">"Too bright! I must darken this to make it grey."</p>
              </div>

              <div className="bg-red-100 p-3 rounded-lg border-l-4 border-red-500">
                <p className="text-sm font-semibold text-gray-900 mb-1">Result:</p>
                <p className="text-sm text-red-700">Underexposed (Grey)</p>
              </div>
            </div>

            {/* Grey Cube */}
            <div className="bg-gradient-to-br from-slate-400 to-slate-500 p-6 rounded-xl border-2 border-slate-600">
              <div className="mb-4">
                <div className="w-full h-32 bg-slate-500 rounded-lg border-2 border-slate-600 shadow-inner mb-4"></div>
                <h5 className="font-semibold text-white text-lg mb-2">Grey Cube - The Anchor</h5>
                <div className="space-y-1 text-sm mb-4">
                  <p className="text-gray-100"><strong>Reflectance:</strong> 18%</p>
                  <p className="text-gray-100"><strong>Zone System:</strong> Zone V</p>
                </div>
              </div>

              <div className="bg-slate-600 p-4 rounded-lg mb-3">
                <p className="text-xs font-semibold text-white mb-2">METER SAYS:</p>
                <p className="text-sm text-gray-100 italic">"Perfect! This is exactly what I expect to see."</p>
              </div>

              <div className="bg-green-100 p-3 rounded-lg border-l-4 border-green-500">
                <p className="text-sm font-semibold text-gray-900 mb-1">Result:</p>
                <p className="text-sm text-green-700">Correct Exposure</p>
              </div>
            </div>

            {/* Black Cube */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-950 p-6 rounded-xl border-2 border-slate-700">
              <div className="mb-4">
                <div className="w-full h-32 bg-slate-950 rounded-lg border-2 border-slate-700 shadow-inner mb-4"></div>
                <h5 className="font-semibold text-white text-lg mb-2">Black Cube - The Shadow</h5>
                <div className="space-y-1 text-sm mb-4">
                  <p className="text-gray-300"><strong>Reflectance:</strong> ~3-5%</p>
                  <p className="text-gray-300"><strong>Zone System:</strong> Zone II/III</p>
                </div>
              </div>

              <div className="bg-slate-700 p-4 rounded-lg mb-3">
                <p className="text-xs font-semibold text-white mb-2">METER SAYS:</p>
                <p className="text-sm text-gray-200 italic">"Too dark! I must brighten this to make it grey."</p>
              </div>

              <div className="bg-orange-100 p-3 rounded-lg border-l-4 border-orange-500">
                <p className="text-sm font-semibold text-gray-900 mb-1">Result:</p>
                <p className="text-sm text-orange-700">Overexposed (Grey)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Module 15: Studio Setup - Two Scenes */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_15 // STUDIO SETUP</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Studio Setup: Two Scenes
            </h4>
            <p className="text-gray-600 mt-2">
              High key and low key environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Scene A: High Key */}
            <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-xl border-2 border-slate-200">
              <h5 className="font-semibold text-gray-900 text-xl mb-1">Scene A: High Key</h5>
              <p className="text-sm text-gray-600 uppercase tracking-wide mb-4">White Background</p>

              <div className="space-y-3 mb-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700"><strong className="text-gray-900">BACKDROP:</strong> White Seamless Paper</p>
                </div>
                <div className="bg-cyan-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700"><strong className="text-gray-900">LIGHTING:</strong> Even, flat illumination (2 lights)</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700"><strong className="text-gray-900">GOAL:</strong> Force the meter to underexpose (turn grey)</p>
                </div>
              </div>
            </div>

            {/* Scene B: Low Key */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-950 p-6 rounded-xl border-2 border-slate-700">
              <h5 className="font-semibold text-white text-xl mb-1">Scene B: Low Key</h5>
              <p className="text-sm text-gray-300 uppercase tracking-wide mb-4">Black Background</p>

              <div className="space-y-3 mb-4">
                <div className="bg-slate-700 p-3 rounded-lg">
                  <p className="text-sm text-gray-200"><strong className="text-white">BACKDROP:</strong> Black Velvet / Fabric</p>
                </div>
                <div className="bg-slate-600 p-3 rounded-lg">
                  <p className="text-sm text-gray-200"><strong className="text-white">LIGHTING:</strong> Directional, moody (1 light + fill)</p>
                </div>
                <div className="bg-slate-500 p-3 rounded-lg">
                  <p className="text-sm text-gray-200"><strong className="text-white">GOAL:</strong> Force the meter to overexpose (wash out)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
            <p className="text-gray-700">
              <span className="font-bold text-red-600">⚠️ CRITICAL:</span> Once the lighting is set, <strong>DO NOT move the lights</strong>. We are testing the camera's meter, not the lighting setup.
            </p>
          </div>
        </div>

        {/* Module 16: Phase 1 - High Key Detailed Shot List */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_16 // PHASE 1 DETAILS</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Phase 1: High Key
            </h4>
            <p className="text-gray-600 mt-2">
              Frames 01-12: White seamless background with even/flat lighting
            </p>
          </div>

          <div className="space-y-6">
            {/* White Cube */}
            <div className="border-l-4 border-red-500 pl-6">
              <h5 className="font-semibold text-gray-900 mb-3 text-lg">WHITE CUBE (Frames 01-04):</h5>
              <div className="space-y-2">
                <div className="bg-slate-50 p-3 rounded-lg flex justify-between items-center">
                  <span className="font-mono text-sm text-gray-700"><strong>01:</strong> f/11 @ 1/60, N</span>
                  <span className="text-xs text-red-600">→ Underexposed (Grey in Grey)</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg flex justify-between items-center">
                  <span className="font-mono text-sm text-gray-700"><strong>02:</strong> f/11 @ 1/60, +1</span>
                  <span className="text-xs text-blue-600">→ Brighter, closer to white</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg flex justify-between items-center">
                  <span className="font-mono text-sm text-gray-700"><strong>03:</strong> f/11 @ 1/60, +2</span>
                  <span className="text-xs text-green-600">→ Correct White Tone</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg flex justify-between items-center">
                  <span className="font-mono text-sm text-gray-700"><strong>04:</strong> f/11 @ 1/60, -1</span>
                  <span className="text-xs text-slate-600">→ Silhouette / Dark Grey</span>
                </div>
              </div>
            </div>

            {/* Grey Cube */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h5 className="font-semibold text-gray-900 mb-3 text-lg">GREY CUBE (Frames 05-08):</h5>
              <div className="space-y-2">
                <div className="bg-slate-50 p-3 rounded-lg flex justify-between items-center">
                  <span className="font-mono text-sm text-gray-700"><strong>05:</strong> f/11 @ 1/60, N</span>
                  <span className="text-xs text-green-600">→ Correct (Grey on White)</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg flex justify-between items-center">
                  <span className="font-mono text-sm text-gray-700"><strong>06:</strong> f/11 @ 1/60, +1</span>
                  <span className="text-xs text-orange-600">→ Overexposed Grey</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg flex justify-between items-center">
                  <span className="font-mono text-sm text-gray-700"><strong>07:</strong> f/11 @ 1/60, +2</span>
                  <span className="text-xs text-orange-600">→ Washed Out Grey</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg flex justify-between items-center">
                  <span className="font-mono text-sm text-gray-700"><strong>08:</strong> f/11 @ 1/60, -1</span>
                  <span className="text-xs text-slate-600">→ Dark Grey</span>
                </div>
              </div>
            </div>

            {/* Black Cube */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h5 className="font-semibold text-gray-900 mb-3 text-lg">BLACK CUBE (Frames 09-12):</h5>
              <div className="space-y-2">
                <div className="bg-slate-50 p-3 rounded-lg flex justify-between items-center">
                  <span className="font-mono text-sm text-gray-700"><strong>09:</strong> f/11 @ 1/60, N</span>
                  <span className="text-xs text-orange-600">→ Overexposed (Grey on White)</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg flex justify-between items-center">
                  <span className="font-mono text-sm text-gray-700"><strong>10:</strong> f/11 @ 1/60, +1</span>
                  <span className="text-xs text-red-600">→ Severely Overexposed</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg flex justify-between items-center">
                  <span className="font-mono text-sm text-gray-700"><strong>11:</strong> f/11 @ 1/60, -1</span>
                  <span className="text-xs text-blue-600">→ Darker, better black</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg flex justify-between items-center">
                  <span className="font-mono text-sm text-gray-700"><strong>12:</strong> f/11 @ 1/60, -2</span>
                  <span className="text-xs text-green-600">→ Correct Black Tone</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Module 17: Shot List Frames 13-24 (Low Key) */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_17 // PHASE 2 DETAILS</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Shot List: Frames 13-24
            </h4>
            <p className="text-gray-600 mt-2">
              Low Key Studio: Black Velvet background with directional lighting
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-100 p-4 rounded-lg">
              <h6 className="font-semibold text-gray-900 mb-2">WHITE CUBE:</h6>
              <div className="space-y-1 text-sm text-gray-700">
                <p>13 (N)</p>
                <p>14 (-1)</p>
                <p>15 (-2)</p>
                <p>16 (+1)</p>
              </div>
            </div>

            <div className="bg-slate-200 p-4 rounded-lg">
              <h6 className="font-semibold text-gray-900 mb-2">GREY CUBE:</h6>
              <div className="space-y-1 text-sm text-gray-700">
                <p>17 (N)</p>
                <p>18 (-1)</p>
                <p>19 (-2)</p>
                <p>20 (+1)</p>
              </div>
            </div>

            <div className="bg-slate-300 p-4 rounded-lg">
              <h6 className="font-semibold text-gray-900 mb-2">BLACK CUBE:</h6>
              <div className="space-y-1 text-sm text-gray-700">
                <p>21 (N)</p>
                <p>22 (+1)</p>
                <p>23 (+2)</p>
                <p>24 (-1)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Module 18: Shot List Frames 25-36 (Variables) */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_18 // PHASE 3 DETAILS</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Shot List: Frames 25-36
            </h4>
            <p className="text-gray-600 mt-2">
              Grey card calibration and extreme tests
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-gray-900 mb-3 text-lg border-l-4 border-blue-500 pl-4">PHASE 3A: GREY CARD CALIBRATION (The "Correct" Way)</h5>
              <div className="space-y-2">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700"><strong>25:</strong> White Cube / White BG, GREY CARD, N → Perfect Exposure</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700"><strong>26:</strong> White Cube / White BG, GREY CARD, +1 → High Key Look</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700"><strong>27:</strong> White Cube / White BG, GREY CARD, -1 → Comparison</p>
                </div>
                <div className="bg-slate-800 text-white p-3 rounded-lg">
                  <p className="text-sm"><strong>28:</strong> Black Cube / Black BG, GREY CARD, N → Perfect Exposure</p>
                </div>
                <div className="bg-slate-800 text-white p-3 rounded-lg">
                  <p className="text-sm"><strong>29:</strong> Black Cube / Black BG, GREY CARD, +1 → Shadow Detail</p>
                </div>
                <div className="bg-slate-800 text-white p-3 rounded-lg">
                  <p className="text-sm"><strong>30:</strong> Black Cube / Black BG, GREY CARD, -1 → Deep Black</p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-3 text-lg border-l-4 border-purple-500 pl-4">PHASE 3B: LATITUDE STRESS TEST (Breaking Point)</h5>
              <div className="space-y-2">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700"><strong>31-35:</strong> Grey Cube / Split Light, Reflective (Cube), +3/+4/+5/-3/-4 → Extreme tests</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-3 rounded-lg border-2 border-cyan-300">
                  <p className="text-sm text-gray-700"><strong>36:</strong> Teammate Portrait, Student Choice, N → Final Frame</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Module 19: Documentation Template */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_19 // DOCUMENTATION</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Documentation Template
            </h4>
            <p className="text-gray-600 mt-2">
              Recording your metering data
            </p>
          </div>

          <div className="mb-6 bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
            <p className="text-gray-700">
              <strong className="text-red-600">CRITICAL:</strong> You must record the meter reading <em>before</em> applying compensation. We need to know what the camera wanted to do vs. what you told it to do.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="border border-slate-700 p-3 text-left text-sm">Frame</th>
                  <th className="border border-slate-700 p-3 text-left text-sm">Background</th>
                  <th className="border border-slate-700 p-3 text-left text-sm">Subject</th>
                  <th className="border border-slate-700 p-3 text-left text-sm">Meter Reading</th>
                  <th className="border border-slate-700 p-3 text-left text-sm">Comp.</th>
                  <th className="border border-slate-700 p-3 text-left text-sm">Final Settings (Shot)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-300 p-3 text-sm font-bold text-red-600">01</td>
                  <td className="border border-slate-300 p-3 text-sm text-red-600 font-semibold">WHITE</td>
                  <td className="border border-slate-300 p-3 text-sm text-red-600 font-semibold">WHITE CUBE</td>
                  <td className="border border-slate-300 p-3 text-sm text-red-600 font-mono">f/8 @ 1/60</td>
                  <td className="border border-slate-300 p-3 text-sm text-red-600 font-semibold">N (0)</td>
                  <td className="border border-slate-300 p-3 text-sm text-red-600 font-mono">f/8 @ 1/60</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 p-3 text-sm font-bold text-red-600">02</td>
                  <td className="border border-slate-300 p-3 text-sm text-red-600 font-semibold">WHITE</td>
                  <td className="border border-slate-300 p-3 text-sm text-red-600 font-semibold">WHITE CUBE</td>
                  <td className="border border-slate-300 p-3 text-sm text-red-600 font-mono">f/8 @ 1/60</td>
                  <td className="border border-slate-300 p-3 text-sm text-red-600 font-semibold">+1</td>
                  <td className="border border-slate-300 p-3 text-sm text-red-600 font-mono">f/5.6 @ 1/60</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-300 p-3 text-sm">03</td>
                  <td className="border border-slate-300 p-3 text-sm">WHITE</td>
                  <td className="border border-slate-300 p-3 text-sm">WHITE CUBE</td>
                  <td className="border border-slate-300 p-3 text-sm"></td>
                  <td className="border border-slate-300 p-3 text-sm">+2</td>
                  <td className="border border-slate-300 p-3 text-sm"></td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 p-3 text-sm">04</td>
                  <td className="border border-slate-300 p-3 text-sm">WHITE</td>
                  <td className="border border-slate-300 p-3 text-sm">WHITE CUBE</td>
                  <td className="border border-slate-300 p-3 text-sm"></td>
                  <td className="border border-slate-300 p-3 text-sm">-1</td>
                  <td className="border border-slate-300 p-3 text-sm"></td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-300 p-3 text-sm">05</td>
                  <td className="border border-slate-300 p-3 text-sm">WHITE</td>
                  <td className="border border-slate-300 p-3 text-sm">WHITE CUBE</td>
                  <td className="border border-slate-300 p-3 text-sm"></td>
                  <td className="border border-slate-300 p-3 text-sm">-2</td>
                  <td className="border border-slate-300 p-3 text-sm"></td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 p-3 text-sm">...</td>
                  <td className="border border-slate-300 p-3 text-sm">...</td>
                  <td className="border border-slate-300 p-3 text-sm">...</td>
                  <td className="border border-slate-300 p-3 text-sm">...</td>
                  <td className="border border-slate-300 p-3 text-sm">...</td>
                  <td className="border border-slate-300 p-3 text-sm">...</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-slate-100 p-3 rounded-lg">
              <p className="text-gray-700"><strong className="text-red-600">ISO:</strong> 400 (Constant)</p>
            </div>
            <div className="bg-slate-100 p-3 rounded-lg">
              <p className="text-gray-700"><strong className="text-red-600">LENS:</strong> 50mm f/2.0</p>
            </div>
            <div className="bg-slate-100 p-3 rounded-lg">
              <p className="text-gray-700"><strong className="text-red-600">DATE:</strong> Week 6</p>
            </div>
          </div>
        </div>

        {/* Module 20: Resources & Tools */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_20 // RESOURCES</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Resources & Tools
            </h4>
            <p className="text-gray-600 mt-2">
              Essential references and digital aids
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* The Manual */}
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-6 rounded-xl border-2 border-slate-300">
              <div className="mb-4">
                <div className="w-20 h-24 bg-white rounded border-2 border-slate-400 mx-auto mb-4 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-slate-400" />
                </div>
                <h5 className="font-semibold text-gray-900 text-lg text-center">The Manual</h5>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Pentax K1000 Official Manual</strong>
              </p>
              <p className="text-sm text-gray-600 mb-4">
                The definitive guide to your camera. Pages 12-15 cover the metering system in detail.
              </p>
              <a href="#" className="text-sm text-red-600 font-semibold hover:text-red-700 transition-colors">
                Available on Moodle
              </a>
            </div>

            {/* Digital Tools */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
              <div className="mb-4">
                <div className="w-20 h-24 bg-white rounded border-2 border-blue-300 mx-auto mb-4 flex items-center justify-center">
                  <Camera className="w-10 h-10 text-blue-400" />
                </div>
                <h5 className="font-semibold text-gray-900 text-lg text-center">Digital Tools</h5>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Light Meter Apps</strong>
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Use your phone to double-check your K1000.
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• myLightMeter (iOS)</li>
                <li>• LightMeter-Free (Android)</li>
              </ul>
              <a href="#" className="text-sm text-red-600 font-semibold hover:text-red-700 transition-colors">
                Download for Comparison
              </a>
            </div>

            {/* Advanced Theory */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-900 p-6 rounded-xl border-2 border-slate-600">
              <div className="mb-4">
                <div className="w-20 h-24 bg-slate-800 rounded border-2 border-slate-500 mx-auto mb-4 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-slate-400" />
                </div>
                <h5 className="font-semibold text-white text-lg text-center">Advanced Theory</h5>
              </div>
              <p className="text-sm text-gray-200 mb-3">
                <strong>"The Negative"</strong>
              </p>
              <p className="text-sm text-gray-300 mb-4">
                Ansel Adams' masterwork on exposure and the Zone System. For those who want to go deeper.
              </p>
              <a href="#" className="text-sm text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                Library Ref: 770.28 ADA
              </a>
            </div>
          </div>

          <div className="mt-6 bg-slate-900 text-white p-5 rounded-xl text-center">
            <p className="font-semibold text-lg">NEXT WEEK: THE STUDIO (Bring something in)</p>
          </div>
        </div>

        {/* Module 21: Homework */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">MODULE_21 // HOMEWORK</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Homework: Understanding Your Camera's Metering
            </h4>
            <p className="text-gray-600 mt-2">
              Three assignments to master meter behavior
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column - Assignments */}
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h5 className="font-semibold text-gray-900 mb-2 text-lg">1. Check negative density – result of metering</h5>
                <p className="text-gray-700 mb-3">
                  Take a look at the contact sheet and look at the differences in the frame density. Is there anything that you notice?
                </p>
                <div className="bg-blue-50 p-3 rounded-lg text-sm text-gray-700">
                  <p className="mb-1">Thin negative = underexposed film</p>
                  <p>Dense negative = overexposed film</p>
                </div>
              </div>

              <div className="border-l-4 border-cyan-500 pl-6">
                <h5 className="font-semibold text-gray-900 mb-2 text-lg">2. Take a landscape</h5>
                <p className="text-gray-700">
                  Over the half term you shot a landscape, metering for the shadows. Now take another landscape, but this time meter for the Sky, Shadows and Ground. Then adjust the exposure to what you think should balance the scene.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h5 className="font-semibold text-gray-900 mb-2 text-lg">3. Take a portrait</h5>
                <p className="text-gray-700">
                  Meter the light using your hand, take one photograph using the camera's suggested exposure, and a second photograph with the exposure opened by 1 stop. After processing next week you'll be able to, compare the two images on the contact sheet and decide which exposure renders skin tones more naturally.
                </p>
                <p className="text-sm text-gray-600 italic mt-2">
                  The aim is to understand that a light meter provides a starting point, and then you can interpret the reading to place tones correctly.
                </p>
              </div>
            </div>

            {/* Right Column - Testing the Meter Box */}
            <div className="bg-gradient-to-br from-slate-100 to-blue-50 p-6 rounded-xl border-2 border-slate-300">
              <h5 className="font-semibold text-gray-900 mb-4 text-lg flex items-center gap-2">
                <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">A</span>
                Testing the meter
              </h5>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-700 mb-3">
                    Use the inside of your hand to meter. Your hand is approximately <strong className="text-red-600">1 stop brighter than 18% grey.</strong>
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Stand where your subject is positioned and fill the viewfinder with your palm.
                  </p>
                  <p className="text-sm text-gray-700">
                    Adjust the aperture or shutter speed until the meter needle is centered.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-700 mb-2">
                    Now take <strong className="text-red-600">two photographs:</strong>
                  </p>
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Frame 1 — Metered Reading</p>
                      <p className="text-xs text-gray-700">Take a portrait using the centred meter reading.</p>
                    </div>
                    <div className="bg-cyan-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Frame 2 — Adjusted Reading (+1 stop)</p>
                      <p className="text-xs text-gray-700">Open the exposure by 1 stop (for example, from f/8 to f/5.6) and take a second portrait.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm text-gray-700">
                    Compare the two images on the contact sheet and decide which exposure renders the skin tones more naturally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
