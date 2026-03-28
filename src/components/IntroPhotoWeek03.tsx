import { Link } from 'react-router';
import { ArrowLeft, BookOpen } from 'lucide-react';

export function IntroPhotoWeek03() {
  return (
    <div className="bg-gradient-to-br from-orange-50/30 via-white to-red-50/30 min-h-screen">
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
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Week 3: Composition - The Art of Framing
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Mastering composition & visual storytelling
          </p>
        </div>

        {/* Session Agenda */}
        <div className="mb-8 p-6 sm:p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Session Agenda</h4>
          <p className="text-sm text-gray-600 mb-6 italic">Duration: 120 minutes | Key Objective: Transitioning from technical mastery to creative intent. Learning to see the world through a structured visual lens.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-orange-600">01</span>
              <div>
                <p className="font-semibold text-gray-900">Lanyards & Housekeeping</p>
                <p className="text-sm text-gray-600">Course updates and logistics</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-orange-600">02</span>
              <div>
                <p className="font-semibold text-gray-900">Student Image Review</p>
                <p className="text-sm text-gray-600">The PSAM Challenge from Week 2</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-orange-600">03</span>
              <div>
                <p className="font-semibold text-gray-900">The Language of Composition</p>
                <p className="text-sm text-gray-600">Understanding visual storytelling</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-orange-600">04</span>
              <div>
                <p className="font-semibold text-gray-900">The Composition Toolkit</p>
                <p className="text-sm text-gray-600">10 essential composition rules</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-orange-600">05</span>
              <div>
                <p className="font-semibold text-gray-900">Practical: The College Walk</p>
                <p className="text-sm text-gray-600">Hands-on compositional exercises</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-orange-600">06</span>
              <div>
                <p className="font-semibold text-gray-900">Homework & Next Steps</p>
                <p className="text-sm text-gray-600">Weekly assignment and preparation</p>
              </div>
            </div>
          </div>
        </div>

        {/* What is Composition? */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <h4 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            What is Composition?
          </h4>
          <div className="p-6 bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-lg mb-6">
            <p className="text-lg text-gray-900 mb-4 font-semibold">
              "The intentional arrangement of visual elements within the frame to guide the viewer's eye and tell a story."
            </p>
            <p className="text-gray-700 mb-3">
              It's the bridge between technical settings and creative vision. <strong>It's not just what you shoot, but how you choose to show it.</strong>
            </p>
            <div className="p-5 bg-white rounded-lg mt-4">
              <p className="text-gray-900 font-semibold mb-2">The Goal:</p>
              <p className="text-gray-700">
                To move from <span className="text-orange-600 font-semibold">"taking"</span> a picture to <span className="text-orange-600 font-semibold">"making"</span> an image with specific intent.
              </p>
            </div>
          </div>
        </div>

        {/* The 10 Composition Rules */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <h4 className="text-2xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            The Composition Toolkit: <span className="text-orange-600">10 Essential Rules</span>
          </h4>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Rule 01 */}
            <div className="p-5 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl font-bold text-orange-600">01</span>
                <h5 className="text-xl font-bold text-gray-900 mt-1">Rule of Thirds</h5>
              </div>
              <p className="text-gray-700 text-sm">
                The most fundamental rule of visual structure. It's about creating balance and tension by avoiding the center. Align horizons with the top or bottom third lines for more impact.
              </p>
            </div>

            {/* Rule 02 */}
            <div className="p-5 bg-red-50 rounded-lg border-l-4 border-red-500">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl font-bold text-red-600">02</span>
                <h5 className="text-xl font-bold text-gray-900 mt-1">Simplify the Scene</h5>
              </div>
              <p className="text-gray-700 text-sm">
                Look through the viewfinder and block out the rest of the world. If it doesn't add to the story, remove it. Photography is an art of exclusion.
              </p>
            </div>

            {/* Rule 03 */}
            <div className="p-5 bg-pink-50 rounded-lg border-l-4 border-pink-500">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl font-bold text-pink-600">03</span>
                <h5 className="text-xl font-bold text-gray-900 mt-1">Fill the Frame</h5>
              </div>
              <p className="text-gray-700 text-sm">
                Don't be afraid to get close. Filling the frame removes distracting dead space and forces your viewer to engage directly with the subject. "If your pictures aren't good enough, you're not close enough." — Robert Capa
              </p>
            </div>

            {/* Rule 04 */}
            <div className="p-5 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl font-bold text-blue-600">04</span>
                <h5 className="text-xl font-bold text-gray-900 mt-1">Leading Lines</h5>
              </div>
              <p className="text-gray-700 text-sm">
                Lines act as a visual path for your viewer. They can create energy or a sense of journey within the frame, guiding the eye toward the subject. Roads, rivers, fences, architectural elements.
              </p>
            </div>

            {/* Rule 05 */}
            <div className="p-5 bg-purple-50 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl font-bold text-purple-600">05</span>
                <h5 className="text-xl font-bold text-gray-900 mt-1">High & Low Angles</h5>
              </div>
              <p className="text-gray-700 text-sm">
                Don't just shoot from eye level. Changing your physical height changes the emotional connection to the subject. Low angle = heroic/powerful. High angle = vulnerable/small.
              </p>
            </div>

            {/* Rule 06 */}
            <div className="p-5 bg-cyan-50 rounded-lg border-l-4 border-cyan-500">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl font-bold text-cyan-600">06</span>
                <h5 className="text-xl font-bold text-gray-900 mt-1">Reflections</h5>
              </div>
              <p className="text-gray-700 text-sm">
                Use water, glass, or mirrors to create symmetry and double the visual interest. Reflections can add depth and visual complexity to your composition.
              </p>
            </div>

            {/* Rule 07 */}
            <div className="p-5 bg-slate-50 rounded-lg border-l-4 border-slate-500">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl font-bold text-slate-600">07</span>
                <h5 className="text-xl font-bold text-gray-900 mt-1">Negative Space</h5>
              </div>
              <p className="text-gray-700 text-sm">
                Empty space emphasizes isolation and gives subjects room to breathe. Sometimes what you don't include is as important as what you do.
              </p>
            </div>

            {/* Rule 08 */}
            <div className="p-5 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl font-bold text-emerald-600">08</span>
                <h5 className="text-xl font-bold text-gray-900 mt-1">Foreground Interest</h5>
              </div>
              <p className="text-gray-700 text-sm">
                Add depth by including interesting foreground elements. This creates layers in your image and draws the viewer into the scene.
              </p>
            </div>

            {/* Rule 09 */}
            <div className="p-5 bg-amber-50 rounded-lg border-l-4 border-amber-500">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl font-bold text-amber-600">09</span>
                <h5 className="text-xl font-bold text-gray-900 mt-1">Isolated Frames</h5>
              </div>
              <p className="text-gray-700 text-sm">
                Use natural frames within the scene to draw attention to your subject. Doorways, windows, arches, and foliage can all act as frames within frames.
              </p>
            </div>

            {/* Rule 10 */}
            <div className="p-5 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl font-bold text-indigo-600">10</span>
                <h5 className="text-xl font-bold text-gray-900 mt-1">Patterns & Symmetry</h5>
              </div>
              <p className="text-gray-700 text-sm">
                Repeating elements and symmetrical compositions create visual harmony. Patterns naturally draw the eye and create a sense of order and rhythm.
              </p>
            </div>
          </div>

          <div className="mt-6 p-5 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg">
            <p className="italic text-center">
              "There are rules to composition to guide you, but remember they can be broken. Learn the rules so you can break them intentionally for creative effect."
            </p>
          </div>
        </div>

        {/* Practical Session */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <h4 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2" style={{ fontFamily: 'Roslindale, serif' }}>
            <BookOpen className="w-6 h-6 text-orange-600" />
            Practical Session: The College Walk
          </h4>
          <p className="text-gray-700 mb-6">
            Time to put theory into practice. During this hands-on session, you'll explore your surroundings and apply the composition rules you've just learned.
          </p>
          
          <div className="space-y-4">
            <div className="p-5 bg-orange-50 rounded-lg">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-xl font-bold text-orange-600">01</span>
                <p className="font-semibold text-gray-900 mt-0.5">The Rule of Thirds</p>
              </div>
              <p className="text-gray-700 text-sm ml-8">
                Practice placing subjects at grid intersections rather than centering them. Enable your camera's grid overlay.
              </p>
            </div>

            <div className="p-5 bg-red-50 rounded-lg">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-xl font-bold text-red-600">02</span>
                <p className="font-semibold text-gray-900 mt-0.5">Leading Lines</p>
              </div>
              <p className="text-gray-700 text-sm ml-8">
                Use the college architecture, paths, and corridors to create strong leading lines that guide the viewer's eye.
              </p>
            </div>

            <div className="p-5 bg-pink-50 rounded-lg">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-xl font-bold text-pink-600">03</span>
                <p className="font-semibold text-gray-900 mt-0.5">Perspective Shift</p>
              </div>
              <p className="text-gray-700 text-sm ml-8">
                Photograph the same subject from three different heights: eye-level, ground-level, and from above.
              </p>
            </div>

            <div className="p-5 bg-blue-50 rounded-lg">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-xl font-bold text-blue-600">04</span>
                <p className="font-semibold text-gray-900 mt-0.5">Simplify & Isolate</p>
              </div>
              <p className="text-gray-700 text-sm ml-8">
                Find a busy scene and isolate one clean element. Remove distractions through framing or depth of field.
              </p>
            </div>
          </div>
        </div>

        {/* Homework Assignment */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 sm:p-8 shadow-sm">
          <h4 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Homework: <span className="text-orange-600">Week 3 Assignment</span>
          </h4>

          <div className="space-y-6">
            <div className="p-5 bg-white rounded-lg border-2 border-orange-300">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Primary Assignment</h5>
              <p className="text-gray-700 mb-4">
                Capture <strong>5 distinct images</strong>, each demonstrating a different rule from the Composition Toolkit.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Each image should clearly demonstrate ONE specific composition rule</span>
                </p>
                <p className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Choose from: Rule of Thirds, Simplify, Fill the Frame, Leading Lines, Perspective Shift, Reflections, Foreground Interest, Patterns, or Framing</span>
                </p>
                <p className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Note which rule you applied to each image</span>
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Learning Goal</h5>
                <p className="text-gray-700">
                  Move from <span className="text-orange-600 font-semibold">"taking"</span> images to <span className="text-orange-600 font-semibold">"making"</span> images with specific compositional intent.
                </p>
              </div>

              <div className="p-5 bg-white rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Submission</h5>
                <p className="text-gray-700">
                  Upload your 5 images to Google Drive by <strong>Sunday evening</strong> for review during Week 4.
                </p>
              </div>
            </div>

            <div className="p-5 bg-white rounded-lg border-2 border-orange-300">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">10-Week Subject Project: Week 3</h5>
              <p className="text-gray-700">
                Continue photographing your chosen subject. This week, focus on using at least <strong>3 different composition rules</strong> while photographing your subject. Experiment with different perspectives, framing, and visual elements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
