import { Link } from 'react-router';
import { ArrowLeft, Download, ExternalLink, CheckCircle2, Camera, Focus, Aperture, Crosshair, Eye } from 'lucide-react';

export function IntroPhotoWeek06() {
  return (
    <div className="bg-gradient-to-br from-violet-50/30 via-white to-fuchsia-50/30 min-h-screen">
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
            <span className="text-6xl font-bold text-gray-300">06</span>
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">Week 06 // Focus Modes and Options</span>
          </div>
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Focus Modes and Options
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Master sharpness and creative control through autofocus modes, manual focusing techniques, and the three pillars of depth of field
          </p>
        </div>

        {/* Module 1: Overview & Learning Outcomes */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">MODULE_01 // OVERVIEW</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Overview & Learning Outcomes
            </h4>
            <p className="text-gray-600 mt-2">
              Mastering autofocus systems, manual focus precision, and depth of field control
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">This Week's Mission</h4>
            <p className="text-gray-700 mb-6 leading-relaxed">
              This week we explore <strong className="text-red-600">focus control</strong> and <strong className="text-red-600">manual mode mastery</strong>—the essential skills that give you complete creative control over where your images are sharp and how you guide your viewer's eye through depth of field.
            </p>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div className="p-4 bg-violet-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-red-600" />
                  <span>Autofocus Modes</span>
                </h5>
                <p className="text-sm text-gray-700">
                  Master AF-S, AF-C, and AF-A for different shooting scenarios
                </p>
              </div>

              <div className="p-4 bg-fuchsia-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Focus className="w-5 h-5 text-red-600" />
                  <span>Manual Focus</span>
                </h5>
                <p className="text-sm text-gray-700">
                  Use focus peaking, magnification, and distance scales for pinpoint accuracy
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Aperture className="w-5 h-5 text-red-600" />
                  <span>Depth of Field</span>
                </h5>
                <p className="text-sm text-gray-700">
                  Control sharpness using aperture, focal length, and subject distance
                </p>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Crosshair className="w-5 h-5 text-red-600" />
                  <span>AF Area Modes</span>
                </h5>
                <p className="text-sm text-gray-700">
                  Choose between single-point, zone, and wide-area focus patterns
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 border-l-4 border-violet-500 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">What You'll Learn</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Understand autofocus servo modes (AF-S, AF-C, AF-A)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Master manual focus tools and techniques</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Control the three pillars of depth of field</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Navigate difficult focus situations</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Use AF area modes strategically</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Apply focus-and-recompose technique</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Implement back-button focus workflow</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Create images with intentional sharpness</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Module 2: Autofocus Modes */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">MODULE_02 // AUTOFOCUS SYSTEMS</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Mastering Autofocus Modes
            </h4>
            <p className="text-gray-600 mt-2">
              Understanding servo modes and when to use each one
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-violet-500 pl-6">
              <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-red-600">AF-S / ONE-SHOT</span>
                <span className="text-sm text-gray-500 font-normal">(Single Servo)</span>
              </h5>
              <p className="text-gray-700 mb-3">
                The camera <strong>locks focus</strong> when you half-press the shutter button and holds that focus point until you take the shot or release the button.
              </p>
              <div className="bg-violet-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-900 mb-2">BEST FOR:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">Portraits</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">Landscapes</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">Still Life</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">Architecture</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">Macro</span>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-fuchsia-500 pl-6">
              <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-red-600">AF-C / AI SERVO</span>
                <span className="text-sm text-gray-500 font-normal">(Continuous Servo)</span>
              </h5>
              <p className="text-gray-700 mb-3">
                The camera <strong>continuously tracks and adjusts focus</strong> as long as you hold the shutter button half-pressed. Perfect for subjects in motion.
              </p>
              <div className="bg-fuchsia-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-900 mb-2">BEST FOR:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">Sports</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">Wildlife</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">Street Photography</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">Action</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">Children/Pets</span>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-red-600">AF-A / AI FOCUS</span>
                <span className="text-sm text-gray-500 font-normal">(Automatic Servo)</span>
              </h5>
              <p className="text-gray-700 mb-3">
                The camera <strong>automatically switches between AF-S and AF-C</strong> based on whether your subject is stationary or moving. A "smart" mode for general shooting.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-900 mb-2">BEST FOR:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">General Photography</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">Unpredictable Subjects</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">Mixed Scenarios</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">Beginners</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-lg">
            <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Eye className="w-5 h-5 text-orange-600" />
              <span>PRO TIP: Choose Your Mode Deliberately</span>
            </h5>
            <p className="text-gray-700">
              While AF-A seems convenient, experienced photographers prefer to <strong>choose AF-S or AF-C manually</strong> because it gives them complete control. Know your subject, know your mode.
            </p>
          </div>
        </div>

        {/* Module 3: The Science of Sharpness */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">MODULE_03 // FOCUS FUNDAMENTALS</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              The Science of Sharpness
            </h4>
            <p className="text-gray-600 mt-2">
              Understanding what focus really means—technically and creatively
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-gray-900 mb-3">What Is Focus?</h5>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-violet-50 p-6 rounded-lg">
                  <h6 className="font-semibold text-gray-900 mb-2">Technical Definition</h6>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Focus occurs when <strong>light rays from a subject converge perfectly on your camera's sensor</strong>. The lens adjusts the distance between its glass elements to bring different distances into sharp focus, creating a plane (the "focal plane") where everything appears crisp and detailed.
                  </p>
                </div>

                <div className="bg-fuchsia-50 p-6 rounded-lg">
                  <h6 className="font-semibold text-gray-900 mb-2">Creative Definition</h6>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Focus is a <strong>storytelling tool</strong>. Where you place your focus tells the viewer <em>"look here first."</em> Shallow depth of field isolates subjects, while deep focus brings context. Master focus, master visual narrative.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-violet-500 pl-6">
              <h5 className="font-semibold text-gray-900 mb-2">The Focal Plane</h5>
              <p className="text-gray-700 leading-relaxed">
                The focal plane is an imaginary flat surface parallel to your sensor where everything is in perfect focus. Objects in front of or behind this plane will be progressively less sharp. The <strong>depth of field</strong> determines how much area on either side of the focal plane remains acceptably sharp.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-purple-600" />
                <span>Creative Intent: Guiding the Viewer's Eye</span>
              </h5>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong className="text-red-600">Critical Focus:</strong> Place your sharpest point on the most important element—the subject's eyes in a portrait, the peak of a mountain, the product in still life.
                </p>
                <p>
                  <strong className="text-red-600">Shallow Depth of Field:</strong> Use wide apertures (f/1.4–f/2.8) to isolate your subject from distracting backgrounds. The viewer's eye naturally goes to what's sharp.
                </p>
                <p>
                  <strong className="text-red-600">Deep Depth of Field:</strong> Use narrow apertures (f/8–f/16) when you want everything sharp—landscapes, architecture, group photos—so the viewer can explore the entire frame.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Module 4: Auto Focus vs Manual Focus */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">MODULE_04 // FOCUS METHODS</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Auto Focus vs Manual Focus
            </h4>
            <p className="text-gray-600 mt-2">
              Weighing the advantages and disadvantages of each approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-violet-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Camera className="w-8 h-8 text-violet-600" />
                <h5 className="text-xl font-semibold text-gray-900">Auto Focus</h5>
              </div>
              <p className="text-sm text-gray-600 mb-4">Speed & Convenience</p>

              <div className="mb-4">
                <h6 className="font-semibold text-green-700 mb-2 text-sm">✓ ADVANTAGES</h6>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><strong>Fast & efficient</strong> — locks on quickly for decisive moments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><strong>Excellent for moving subjects</strong> — AF-C tracks action reliably</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><strong>User-friendly</strong> — less technical knowledge required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><strong>Consistent accuracy</strong> — modern systems are highly reliable</span>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="font-semibold text-red-700 mb-2 text-sm">✗ DISADVANTAGES</h6>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Struggles in low light</strong> — needs contrast to lock on</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Can focus on the wrong area</strong> — especially in busy scenes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Less creative control</strong> — camera makes the decision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Hunts in difficult conditions</strong> — flat surfaces, low contrast</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-purple-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Focus className="w-8 h-8 text-purple-600" />
                <h5 className="text-xl font-semibold text-gray-900">Manual Focus</h5>
              </div>
              <p className="text-sm text-gray-600 mb-4">Artistry & Control</p>

              <div className="mb-4">
                <h6 className="font-semibold text-green-700 mb-2 text-sm">✓ ADVANTAGES</h6>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><strong>Pinpoint accuracy</strong> — you decide exactly what's sharp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><strong>Works in any light</strong> — no contrast needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><strong>Complete creative control</strong> — perfect for intentional blur/bokeh</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><strong>Essential for macro</strong> — critical focus on tiny details</span>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="font-semibold text-red-700 mb-2 text-sm">✗ DISADVANTAGES</h6>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Slower</strong> — requires time and precision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Challenging for fast subjects</strong> — difficult to track motion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Requires practice</strong> — skill and muscle memory needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Harder in bright viewfinders</strong> — can be difficult to judge sharpness</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-lg">
            <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Eye className="w-5 h-5 text-orange-600" />
              <span>The Hybrid Approach</span>
            </h5>
            <p className="text-gray-700">
              Professional photographers don't choose one over the other—they <strong>use both strategically</strong>. Use autofocus for fast-paced shooting, then switch to manual for critical precision work like landscapes, macro, or low-light situations where AF struggles.
            </p>
          </div>
        </div>

        {/* Module 5: Manual Focus Tools */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">MODULE_05 // MANUAL FOCUS MASTERY</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Manual Focus: Precision & Control
            </h4>
            <p className="text-gray-600 mt-2">
              Modern tools that make manual focusing easier and more accurate
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-violet-500 pl-6">
              <h5 className="font-semibold text-gray-900 mb-2 text-lg flex items-center gap-2">
                <span className="text-red-600">Focus Peaking</span>
              </h5>
              <p className="text-gray-700 mb-3">
                A <strong>visual aid</strong> that highlights areas in sharp focus by outlining high-contrast edges with a bright color (usually red, yellow, or white). As you turn the focus ring, the colored highlights move across your frame, showing exactly what's sharp in real-time.
              </p>
              <div className="bg-violet-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">How to use it:</strong> Enable focus peaking in your camera's menu, choose a bright peaking color, and watch the highlighted edges as you focus. When the color outlines your subject, you've nailed focus.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-fuchsia-500 pl-6">
              <h5 className="font-semibold text-gray-900 mb-2 text-lg flex items-center gap-2">
                <span className="text-red-600">Focus Magnification</span>
              </h5>
              <p className="text-gray-700 mb-3">
                This tool <strong>digitally zooms into your live view</strong> (on the LCD screen or electronic viewfinder) by 5x or 10x, allowing you to verify critical sharpness at the pixel level. Essential for macro, product photography, and any situation where precision matters.
              </p>
              <div className="bg-fuchsia-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">How to use it:</strong> Press the magnification button (usually marked with a + or magnifying glass icon), position the zoomed area over your subject, and fine-tune focus until it's perfectly sharp.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h5 className="font-semibold text-gray-900 mb-2 text-lg flex items-center gap-2">
                <span className="text-red-600">Distance Scales</span>
              </h5>
              <p className="text-gray-700 mb-3">
                Many lenses have <strong>physical distance markings</strong> on the focus ring showing how far away your focus point is (in feet or meters). These scales are especially useful for <strong>zone focusing</strong>—pre-setting focus to a specific distance range so you can shoot quickly without focusing.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">How to use it:</strong> Check the distance scale on your lens barrel, align the focus ring to your desired distance, and use depth of field markers (if available) to estimate what will be sharp at your chosen aperture. Great for street photography.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-lg">
            <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Eye className="w-5 h-5 text-orange-600" />
              <span>PRO TIP: Master Manual Focus</span>
            </h5>
            <p className="text-gray-700">
              <strong>Switch your lens to "MF"</strong> mode, then use the focus ring slowly and deliberately. <strong>Focus magnification is your best friend</strong>—zoom in, nail the focus, zoom out, shoot. With practice, manual focus becomes second nature.
            </p>
          </div>
        </div>

        {/* Module 6: Advanced AF Modes */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">MODULE_06 // MANUFACTURER SYSTEMS</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Advanced AF Modes by Manufacturer
            </h4>
            <p className="text-gray-600 mt-2">
              Brand-specific autofocus technologies and terminology
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <h5 className="text-xl font-semibold text-gray-900">Canon</h5>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">AI Focus AF</p>
                  <p className="text-sm text-gray-700">Automatically switches between One-Shot and AI Servo based on subject movement</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Zone AF</p>
                  <p className="text-sm text-gray-700">Divides the frame into zones; camera focuses within selected zone for balance of precision and flexibility</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <h5 className="text-xl font-semibold text-gray-900">Nikon</h5>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Dynamic-Area AF</p>
                  <p className="text-sm text-gray-700">Uses a selected focus point plus surrounding points to track subjects that briefly leave the primary point</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">3D-Tracking</p>
                  <p className="text-sm text-gray-700">Advanced tracking mode that follows moving subjects across the frame using color and spatial information</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <h5 className="text-xl font-semibold text-gray-900">Sony</h5>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Wide AF</p>
                  <p className="text-sm text-gray-700">Camera automatically selects focus points across a wide area—great for general shooting</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Tracking AF</p>
                  <p className="text-sm text-gray-700">Real-time tracking that locks onto a subject and follows it throughout the frame</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">4D FOCUS</p>
                  <p className="text-sm text-gray-700">Sony's hybrid phase-detection system offering fast, accurate autofocus with subject tracking</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
            <h5 className="font-semibold text-gray-900 mb-2">Note on Terminology</h5>
            <p className="text-sm text-gray-700">
              While the basic principles are the same across brands, each manufacturer uses different terminology for similar features. Check your camera's manual to understand which terms apply to your specific model.
            </p>
          </div>
        </div>

        {/* Module 7: Difficult Focus Situations */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">MODULE_07 // PROBLEM SOLVING</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Tackling Difficult Focus Situations
            </h4>
            <p className="text-gray-600 mt-2">
              How to solve common focusing challenges
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 border-l-4 border-violet-500 p-6 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-3 text-lg">
                Problem #1: Low Light
              </h5>
              <p className="text-gray-700 mb-3">
                <strong className="text-red-600">The Issue:</strong> Autofocus systems need contrast to work. In very low light, there's not enough contrast for the AF sensors to detect edges, causing the lens to "hunt" back and forth without locking on.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">✓ SOLUTIONS:</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 font-bold">•</span>
                    <span><strong>Switch to manual focus</strong> and use focus magnification or focus peaking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 font-bold">•</span>
                    <span><strong>Use the AF-assist beam</strong> (small light on camera/flash that illuminates subject)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 font-bold">•</span>
                    <span><strong>Add temporary light</strong> to focus, then turn it off for the shot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 font-bold">•</span>
                    <span><strong>Focus on a high-contrast edge</strong> at the same distance, then recompose</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-3 text-lg">
                Problem #2: Low Contrast Subjects
              </h5>
              <p className="text-gray-700 mb-3">
                <strong className="text-red-600">The Issue:</strong> Flat, uniform surfaces (white walls, clear blue skies, smooth fabric) offer nothing for autofocus to grab onto. The lens hunts because there are no distinct edges or patterns.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">✓ SOLUTIONS:</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><strong>Look for edges or textures</strong> at the same distance as your subject</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><strong>Focus on the border</strong> between your subject and another object</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><strong>Use manual focus</strong>—your eye can judge sharpness even without contrast</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><strong>Add a temporary reference point</strong> (tape, post-it note) to focus on, then remove it</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-3 text-lg">
                Problem #3: Busy Backgrounds
              </h5>
              <p className="text-gray-700 mb-3">
                <strong className="text-red-600">The Issue:</strong> Your subject is clear to you, but the autofocus system sees a cluttered scene with multiple potential focus points. The camera focuses on the background instead of your intended subject.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">✓ SOLUTIONS:</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>Use single-point AF</strong> mode and place the point exactly on your subject</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>Switch to manual focus</strong> for complete control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>Get closer</strong> to your subject so the background takes up less of the frame</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>Use a wider aperture</strong> to blur the background, making your subject more obvious</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Module 8: Smart Focus Techniques */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">MODULE_08 // PRACTICAL TECHNIQUES</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Smart Focus Techniques
            </h4>
            <p className="text-gray-600 mt-2">
              Professional workflows for better focus control
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-violet-500 pl-6">
              <h5 className="font-semibold text-gray-900 mb-2 text-lg">
                Focus & Recompose
              </h5>
              <p className="text-gray-700 mb-3">
                A powerful technique when your focus point isn't where you want it in the composition. <strong>Lock focus on your subject</strong> (half-press shutter in AF-S mode), then <strong>move the camera to reframe</strong> your shot before fully pressing the shutter.
              </p>
              <div className="bg-violet-50 p-4 rounded-lg space-y-2">
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Step 1:</strong> Move your focus point (or center point) over a high-contrast edge on your subject
                </p>
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Step 2:</strong> Half-press the shutter button to lock focus
                </p>
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Step 3:</strong> While holding the button, recompose your frame
                </p>
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Step 4:</strong> Fully press the shutter to take the shot
                </p>
              </div>
              <div className="mt-3 bg-yellow-50 p-3 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-yellow-800">⚠ Caution:</strong> Focus & recompose changes the focus distance when you move the camera. At very shallow depths of field (f/1.4–f/2), this can cause slight focus shifts. For critical work, use manual focus or position your AF point directly on the subject.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-fuchsia-500 pl-6">
              <h5 className="font-semibold text-gray-900 mb-2 text-lg">
                Use Live View Magnification
              </h5>
              <p className="text-gray-700 mb-3">
                For <strong>critical manual focus</strong>—especially in macro, product, and landscape photography—switch to Live View on your LCD, then digitally zoom in 5x or 10x to verify sharpness at the pixel level.
              </p>
              <div className="bg-fuchsia-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">
                  <strong className="text-gray-900">Perfect for:</strong>
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-700">Macro Photography</span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-700">Product Shoots</span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-700">Landscape Hyperfocal</span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-700">Studio Work</span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-700">Tripod Shooting</span>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h5 className="font-semibold text-gray-900 mb-2 text-lg">
                Back-Button Focus
              </h5>
              <p className="text-gray-700 mb-3">
                An advanced pro technique where you <strong>separate focusing from the shutter button</strong>. Instead of half-pressing the shutter to focus, you assign focus to a button on the back of your camera (usually AF-ON or AE-L/AF-L button).
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-900 mb-2">Why use it?</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><strong>Better control:</strong> Focus and shutter are independent—no accidental refocusing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><strong>Faster workflow:</strong> Lock focus once, shoot multiple times without refocusing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><strong>Hybrid shooting:</strong> Easily switch between AF and MF without changing modes</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-700 mt-3">
                  <strong className="text-gray-900">How to set it up:</strong> Dive into your camera's custom functions menu, find the "Shutter/AF-ON button" setting, and assign AF to the back button only.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-lg">
            <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Eye className="w-5 h-5 text-orange-600" />
              <span>PRO TIP: Don't Fear Manual Focus</span>
            </h5>
            <p className="text-gray-700">
              Manual focus isn't a fallback—it's a <strong>creative superpower</strong>. When autofocus fails or you need absolute precision, manual focus gives you ultimate control. Practice it regularly, and it becomes instinctive.
            </p>
          </div>
        </div>

        {/* Module 9: AF Area Modes */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">MODULE_09 // AF AREA SELECTION</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              AF Area Modes: Precision Control
            </h4>
            <p className="text-gray-600 mt-2">
              Choosing which focus points your camera uses
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-violet-50 border-l-4 border-violet-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Crosshair className="w-6 h-6 text-violet-600" />
                <h5 className="font-semibold text-gray-900 text-lg">Single-Point AF</h5>
              </div>
              <p className="text-gray-700 mb-3">
                The camera uses <strong>one AF point</strong> that you select manually. This gives you <strong>exact control</strong> over what's in focus—perfect when you know exactly where you want sharpness.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-900 mb-2">BEST FOR:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-violet-50 rounded-full text-xs text-gray-700">Portrait Photography</span>
                  <span className="px-3 py-1 bg-violet-50 rounded-full text-xs text-gray-700">Macro Details</span>
                  <span className="px-3 py-1 bg-violet-50 rounded-full text-xs text-gray-700">Still Subjects</span>
                  <span className="px-3 py-1 bg-violet-50 rounded-full text-xs text-gray-700">Precise Composition</span>
                </div>
              </div>
            </div>

            <div className="bg-fuchsia-50 border-l-4 border-fuchsia-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Crosshair className="w-6 h-6 text-fuchsia-600" />
                <h5 className="font-semibold text-gray-900 text-lg">Dynamic-Area AF</h5>
              </div>
              <p className="text-gray-700 mb-3">
                Uses your <strong>selected primary point plus surrounding points</strong> to track subjects that briefly move away from your main focus point. The camera maintains focus even if the subject shifts slightly.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-900 mb-2">BEST FOR:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-fuchsia-50 rounded-full text-xs text-gray-700">Sports Photography</span>
                  <span className="px-3 py-1 bg-fuchsia-50 rounded-full text-xs text-gray-700">Wildlife in Motion</span>
                  <span className="px-3 py-1 bg-fuchsia-50 rounded-full text-xs text-gray-700">Active Children</span>
                  <span className="px-3 py-1 bg-fuchsia-50 rounded-full text-xs text-gray-700">Erratic Movement</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Crosshair className="w-6 h-6 text-purple-600" />
                <h5 className="font-semibold text-gray-900 text-lg">Zone AF</h5>
              </div>
              <p className="text-gray-700 mb-3">
                Divides the frame into <strong>zones or blocks of focus points</strong>. You select a zone, and the camera focuses on the closest or most prominent subject within that area. A balance between precision and flexibility.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-900 mb-2">BEST FOR:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-50 rounded-full text-xs text-gray-700">Action Photography</span>
                  <span className="px-3 py-1 bg-purple-50 rounded-full text-xs text-gray-700">Group Shots</span>
                  <span className="px-3 py-1 bg-purple-50 rounded-full text-xs text-gray-700">Street Photography</span>
                  <span className="px-3 py-1 bg-purple-50 rounded-full text-xs text-gray-700">Unpredictable Subjects</span>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Crosshair className="w-6 h-6 text-orange-600" />
                <h5 className="font-semibold text-gray-900 text-lg">Wide-Area / Auto-Area AF</h5>
              </div>
              <p className="text-gray-700 mb-3">
                The camera uses <strong>all available focus points</strong> across the frame and automatically decides what to focus on (usually the closest subject or a detected face). Great for quick snapshots when you don't have time to select points.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-900 mb-2">BEST FOR:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-50 rounded-full text-xs text-gray-700">General Photography</span>
                  <span className="px-3 py-1 bg-orange-50 rounded-full text-xs text-gray-700">Casual Shooting</span>
                  <span className="px-3 py-1 bg-orange-50 rounded-full text-xs text-gray-700">Family Events</span>
                  <span className="px-3 py-1 bg-orange-50 rounded-full text-xs text-gray-700">Beginners</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-6 rounded-lg">
            <h5 className="font-semibold text-gray-900 mb-2">Choosing the Right Area Mode</h5>
            <p className="text-gray-700">
              <strong>Static subjects:</strong> Use Single-Point AF for maximum control. <strong>Moving subjects:</strong> Use Dynamic-Area or Zone AF. <strong>Uncertain situations:</strong> Wide-Area works, but you sacrifice creative control. Match the mode to your subject and shooting style.
            </p>
          </div>
        </div>

        {/* Module 10: The Three Pillars of Depth of Field */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">MODULE_10 // DEPTH OF FIELD CONTROL</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              The Three Pillars of Depth of Field
            </h4>
            <p className="text-gray-600 mt-2">
              The three variables that control how much of your image is sharp
            </p>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              <strong>Depth of Field (DOF)</strong> is the zone of acceptable sharpness in front of and behind your focal point. It's controlled by three interconnected factors. Master these three pillars, and you control exactly what's sharp and what's blurred in every photograph.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 border-l-4 border-violet-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Aperture className="w-8 h-8 text-violet-600" />
                <h5 className="font-semibold text-gray-900 text-xl">Pillar #1: Aperture (F-Stop)</h5>
              </div>
              <p className="text-gray-700 mb-4">
                Aperture has the <strong>most dramatic effect</strong> on depth of field. The size of your lens opening determines how much light enters and how much of your scene is sharp.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border-2 border-violet-200">
                  <h6 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-2xl text-red-600">f/1.4 – f/2.8</span>
                  </h6>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong className="text-violet-600">WIDE APERTURE</strong> = <strong className="text-red-600">SHALLOW DOF</strong>
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Lower f-numbers create a very thin zone of sharpness. Everything in front of and behind your focal point blurs quickly.
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    <strong>Effect:</strong> Beautiful bokeh, subject isolation, dreamy backgrounds
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    <strong>Best for:</strong> Portraits, macro, isolating subjects, creative blur
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border-2 border-violet-200">
                  <h6 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-2xl text-red-600">f/8 – f/16</span>
                  </h6>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong className="text-violet-600">NARROW APERTURE</strong> = <strong className="text-red-600">DEEP DOF</strong>
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Higher f-numbers create a wide zone of sharpness. Much more of your scene—from foreground to background—stays in focus.
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    <strong>Effect:</strong> Maximum sharpness throughout the frame
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    <strong>Best for:</strong> Landscapes, architecture, group photos, product shots
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-violet-100 p-3 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-violet-900">Remember:</strong> A <strong>lower f-number</strong> (wide aperture) = <strong>shallower depth of field</strong>. A <strong>higher f-number</strong> (narrow aperture) = <strong>deeper depth of field</strong>. It's counterintuitive at first, but becomes second nature with practice.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Camera className="w-8 h-8 text-purple-600" />
                <h5 className="font-semibold text-gray-900 text-xl">Pillar #2: Focal Length (MM)</h5>
              </div>
              <p className="text-gray-700 mb-4">
                The focal length of your lens affects <strong>compression and depth of field</strong>. Longer lenses create shallower DOF; wider lenses create deeper DOF.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
                  <h6 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-2xl text-red-600">85mm+</span>
                  </h6>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong className="text-purple-600">TELEPHOTO LENS</strong> = <strong className="text-red-600">SHALLOWER DOF</strong>
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Longer focal lengths compress the scene and create a thinner plane of focus, even at the same aperture. The background appears closer and more blurred.
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    <strong>Best for:</strong> Portrait isolation, wildlife, sports, subject separation
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
                  <h6 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-2xl text-red-600">24mm–35mm</span>
                  </h6>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong className="text-purple-600">WIDE-ANGLE LENS</strong> = <strong className="text-red-600">DEEPER DOF</strong>
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Shorter focal lengths expand the scene and naturally increase depth of field. More of the frame stays sharp from foreground to background.
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    <strong>Best for:</strong> Landscapes, architecture, environmental portraits, street
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-purple-100 p-3 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-purple-900">Pro Insight:</strong> A 200mm lens at f/4 will have <strong>much shallower DOF</strong> than a 24mm lens at f/4, even though they're both at the same aperture. Focal length matters significantly.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Focus className="w-8 h-8 text-orange-600" />
                <h5 className="font-semibold text-gray-900 text-xl">Pillar #3: Subject Distance (Meters)</h5>
              </div>
              <p className="text-gray-700 mb-4">
                How close you are to your subject has a <strong>dramatic impact</strong> on depth of field. The closer you focus, the shallower your DOF becomes.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border-2 border-orange-200">
                  <h6 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-2xl text-red-600">Close</span>
                  </h6>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong className="text-orange-600">NEAR FOCUS</strong> = <strong className="text-red-600">SHALLOW DOF</strong>
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    When you're very close to your subject (macro photography, close-up portraits), the depth of field becomes <strong>razor-thin</strong>. Even at f/8, only a small slice is sharp.
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    <strong>Example:</strong> Macro flower at 6 inches—DOF might be only 2-3mm deep!
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border-2 border-orange-200">
                  <h6 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-2xl text-red-600">Far</span>
                  </h6>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong className="text-orange-600">FAR FOCUS</strong> = <strong className="text-red-600">DEEP DOF</strong>
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    When your subject is farther away, more of the scene falls within the acceptable sharpness zone. At very long distances, depth of field can extend to infinity.
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    <strong>Example:</strong> Landscape focused at 30 feet—almost everything is sharp
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-orange-100 p-3 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-orange-900">Hyperfocal Distance:</strong> In landscape photography, there's a specific focus distance where <strong>everything from half that distance to infinity is acceptably sharp</strong>. Mastering hyperfocal distance lets you maximize sharpness throughout your scene.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-300 p-6 rounded-xl">
            <h5 className="font-semibold text-gray-900 mb-4 text-lg flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <span>Putting It All Together</span>
            </h5>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">FOR SHALLOW DEPTH OF FIELD:</p>
                <ul className="space-y-1">
                  <li>✓ Use a <strong>wide aperture</strong> (f/1.4–f/2.8)</li>
                  <li>✓ Use a <strong>longer focal length</strong> (85mm+)</li>
                  <li>✓ Get <strong>close to your subject</strong></li>
                </ul>
                <p className="text-xs text-gray-600 mt-3 italic">
                  <strong>Result:</strong> Beautiful bokeh, isolated subject, dreamy blur
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">FOR DEEP DEPTH OF FIELD:</p>
                <ul className="space-y-1">
                  <li>✓ Use a <strong>narrow aperture</strong> (f/8–f/16)</li>
                  <li>✓ Use a <strong>shorter focal length</strong> (24mm–35mm)</li>
                  <li>✓ Focus <strong>farther from your subject</strong></li>
                </ul>
                <p className="text-xs text-gray-600 mt-3 italic">
                  <strong>Result:</strong> Everything sharp from front to back
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Module 11: Q&A Focus Mastery */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">MODULE_11 // COMMON QUESTIONS</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Q&A: Focus Mastery
            </h4>
            <p className="text-gray-600 mt-2">
              Answers to the most common focus questions
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-violet-500 pl-6">
              <h5 className="font-semibold text-gray-900 mb-2 text-lg text-red-600">
                Why is my lens "hunting"?
              </h5>
              <p className="text-gray-700">
                <strong>Autofocus systems need contrast or light to lock on.</strong> In low light or when shooting a flat surface (like a white wall or clear blue sky), the lens may struggle to find a focus point. The lens moves back and forth searching for contrast—this is "hunting."
              </p>
              <div className="mt-3 bg-violet-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Solutions:</strong> Switch to manual focus, use your AF-assist beam, find a high-contrast edge at the same distance, or temporarily add light to help the camera focus.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-fuchsia-500 pl-6">
              <h5 className="font-semibold text-gray-900 mb-2 text-lg text-red-600">
                What is "focus and recompose"?
              </h5>
              <p className="text-gray-700">
                In <strong>AF-S mode</strong>, you can <strong>lock focus on your subject</strong> by half-pressing the shutter button, then <strong>move the camera</strong> to adjust your composition before fully pressing the shutter to take the shot. This lets you place your focus point exactly where you want it, even if your AF point isn't positioned there.
              </p>
              <div className="mt-3 bg-fuchsia-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Tip:</strong> Be cautious with very shallow DOF (f/1.4–f/2)—moving the camera changes the focus distance slightly, which can cause focus shifts. For critical work, use single-point AF or manual focus instead.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h5 className="font-semibold text-gray-900 mb-2 text-lg text-red-600">
                What is "back-button focus"?
              </h5>
              <p className="text-gray-700">
                A professional technique where <strong>focus is assigned to a button on the back of the camera</strong> (usually AF-ON or AE-L/AF-L), <strong>separating it from the shutter release</strong> for better control. This means the shutter button only takes the picture—it doesn't refocus.
              </p>
              <div className="mt-3 bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Benefits:</strong> You can lock focus once and shoot multiple times without the camera refocusing. It's faster, gives you more control, and makes it easy to switch between AF and MF on the fly. Many pros never go back once they try it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Module 12: This Week's Assignment */}
        <div className="mb-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 sm:p-8 shadow-md border-2 border-red-200">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-red-600 font-semibold">HOMEWORK // WEEK 06</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              The Focus Challenge
            </h4>
            <p className="text-gray-600 mt-2">
              Demonstrate mastery of focus and depth of field control
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6 border-2 border-red-300">
            <h5 className="font-semibold text-gray-900 mb-4 text-lg">THE TASK</h5>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Capture <strong className="text-red-600">2 distinct images</strong> demonstrating mastery of focus and depth of field:
            </p>
            
            <div className="space-y-4">
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="font-semibold text-gray-900 mb-2">Image #1: Critical Focus on a Small Subject</p>
                <p className="text-sm text-gray-700">
                  One image must show <strong>critical focus on a small subject</strong> with a <strong className="text-red-600">shallow depth of field</strong>. Use a wide aperture (f/1.4–f/2.8) and demonstrate pinpoint sharpness exactly where you intend it—eyes in a portrait, a single flower stamen, a product detail.
                </p>
              </div>

              <div className="bg-fuchsia-50 p-4 rounded-lg border-l-4 border-fuchsia-500">
                <p className="font-semibold text-gray-900 mb-2">Image #2: Maximum Depth of Field</p>
                <p className="text-sm text-gray-700">
                  The other image must demonstrate <strong className="text-red-600">maximum depth of field</strong>. Use a narrow aperture (f/8–f/16) and show sharpness throughout the frame—from foreground to background. Think landscapes, architecture, or layered compositions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h5 className="font-semibold text-gray-900 mb-3">GOAL</h5>
            <p className="text-gray-700 leading-relaxed">
              Master the <strong>precision of manual focus</strong> and the <strong>creative control of the three pillars of depth of field</strong> (aperture, focal length, subject distance). Show that you can intentionally control where sharpness begins and ends in your images.
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-lg mb-6">
            <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Eye className="w-5 h-5 text-orange-600" />
              <span>PRO TIP: Use Focus Peaking & Magnification</span>
            </h5>
            <p className="text-gray-700 text-sm">
              To ensure your critical focus is <strong>exactly where you want it</strong>, use focus peaking for real-time visual feedback and magnification to zoom in and verify sharpness at the pixel level. These tools make manual focusing precise and reliable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-violet-100 p-4 rounded-lg">
              <h6 className="font-semibold text-gray-900 mb-2 text-sm">SUBMISSION DETAILS</h6>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Format:</strong> High-Res JPEG // sRGB
              </p>
              <p className="text-sm text-gray-700">
                <strong>Review:</strong> Be ready to discuss next week
              </p>
            </div>

            <div className="bg-purple-100 p-4 rounded-lg">
              <h6 className="font-semibold text-gray-900 mb-2 text-sm">DEADLINE</h6>
              <p className="text-sm text-gray-700">
                Upload your Focus Challenge images to the portal by <strong>next Thursday at 18:00</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Module 13: Looking Ahead */}
        <div className="bg-gradient-to-br from-slate-900 to-violet-900 text-white rounded-xl p-6 sm:p-8 shadow-lg">
          <div className="mb-4">
            <span className="text-sm uppercase tracking-wider text-fuchsia-400 font-semibold">LOOKING AHEAD</span>
            <h4 className="text-2xl font-semibold mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Next Steps
            </h4>
          </div>

          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="text-fuchsia-400">📤</span>
                <span>Homework Submission</span>
              </h5>
              <p className="text-gray-300 text-sm">
                Upload your Focus Challenge images to the portal by next Thursday at 18:00. We'll review them together and discuss your creative decisions around focus placement and depth of field control.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="text-fuchsia-400">📚</span>
                <span>Week 07: Metering & Exposure Control</span>
              </h5>
              <p className="text-gray-300 text-sm">
                Next week, we'll <strong>dive deep into how your camera sees light</strong>—understanding metering modes, histograms, exposure compensation, and how to nail perfect exposure in any lighting situation.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-fuchsia-800">
            <p className="text-sm text-gray-400">
              MOD_06 // PG_10 // SESSION_WRAP_V1
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link
            to="/courses/introduction-to-photography/week-05"
            className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Week 05
          </Link>
          
          <Link
            to="/courses/introduction-to-photography"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-semibold transition-colors"
          >
            Back to Course Overview
          </Link>
        </div>
      </div>
    </div>
  );
}
