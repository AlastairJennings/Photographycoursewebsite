import { Link } from 'react-router';
import { ArrowLeft, BookOpen, Camera } from 'lucide-react';

export function IntroPhotoWeek01() {
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
            <span className="text-6xl font-bold text-gray-300">01</span>
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">Module 01 // Camera Basics</span>
          </div>
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Get to Know Your Camera
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Creative Photography & Technical Mastery
          </p>
        </div>

        {/* Course Overview Section */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-violet-600 font-semibold">SECTION_01 // FOUNDATIONS</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Course Overview
            </h4>
            <p className="text-gray-600 mt-2">
              Understanding the foundations of photography
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 bg-violet-50 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Creative Photography</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span>Understanding the art of photography</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span>How cameras see vs. how we see</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span>Introduction to visual storytelling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span>Finding your creative voice</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Technical Mastery</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Key controls: Dials, buttons, and menus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Understanding switches and modes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Camera handling and ergonomics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Essential settings configuration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practical Exercises Section */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-purple-600 font-semibold">SECTION_02 // HANDS-ON</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Practical Exercises
            </h4>
            <p className="text-gray-600 mt-2">
              Hands-on camera practice to build your skills
            </p>
          </div>

          <div className="p-6 bg-violet-50 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-violet-600" />
              Practical Session: Hands-On
            </h4>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Exercise 01: Aperture Control</p>
                <p className="text-gray-700 mb-2">Shoot the same subject at three different apertures:</p>
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                  <li>f/3.5 (wide aperture - shallow depth of field)</li>
                  <li>f/8 (mid-range - balanced depth)</li>
                  <li>f/16 (narrow aperture - deep depth of field)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Exercise 02: Shutter Speed Control</p>
                <p className="text-gray-700 mb-2">Capture motion at three different shutter speeds:</p>
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                  <li>1/30s (motion blur visible)</li>
                  <li>1/250s (balanced motion capture)</li>
                  <li>1/1000s (frozen action)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 bg-orange-50 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-orange-600" />
              Mastering Exposure Modes
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">P (Program)</p>
                <p className="text-sm text-gray-700">Camera chooses aperture and shutter speed, you control ISO and exposure compensation</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">S/Tv (Shutter Priority)</p>
                <p className="text-sm text-gray-700">You set shutter speed, camera adjusts aperture automatically</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">A/Av (Aperture Priority)</p>
                <p className="text-sm text-gray-700">You set aperture, camera adjusts shutter speed automatically</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">M (Manual Mode)</p>
                <p className="text-sm text-gray-700">You control both aperture and shutter speed for complete creative control</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Practical Session: First Steps & Lightroom Intro
            </h4>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-gray-900">Exercise 01: Orientation</p>
                <p className="text-sm text-gray-700">Familiarize yourself with your camera's main controls</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Exercise 02: First Shots</p>
                <p className="text-sm text-gray-700">Take your first photographs using different exposure modes</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Exercise 03: Lightroom</p>
                <p className="text-sm text-gray-700">Import your images, explore the Library module, and discover the Develop module basics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Review & Critique Section */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-fuchsia-600 font-semibold">SECTION_03 // EVALUATION</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Image Review & Critique Framework
            </h4>
            <p className="text-gray-600 mt-2">
              How we evaluate your work throughout the course
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-fuchsia-50 to-violet-50 rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
              Image Review & <span className="text-fuchsia-600">Critique</span>
            </h4>
            <p className="text-gray-700 mb-6">
              Throughout the course, your work will be evaluated using this comprehensive framework:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Subject Clarity</h5>
                <p className="text-sm text-gray-700">Is the main subject clear and well-defined? Does it command attention?</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Exposure Balance</h5>
                <p className="text-sm text-gray-700">Are the highlights and shadows properly balanced? Is detail preserved?</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Focus Precision</h5>
                <p className="text-sm text-gray-700">Is the intended subject sharp? Is depth of field used effectively?</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Compositional Flow</h5>
                <p className="text-sm text-gray-700">Does the composition guide the viewer's eye? Are elements well-balanced?</p>
              </div>
              <div className="p-4 bg-white rounded-lg sm:col-span-2">
                <h5 className="font-semibold text-gray-900 mb-2">Visual Storytelling</h5>
                <p className="text-sm text-gray-700">Does the image convey emotion or tell a story? Is there impact?</p>
              </div>
            </div>
          </div>
        </div>

        {/* Homework & Projects Section */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm border-2 border-orange-200">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-orange-600 font-semibold">SECTION_04 // ASSIGNMENTS</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Homework & Weekly Projects
            </h4>
            <p className="text-gray-600 mt-2">
              Your assignments for this week and beyond
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg mb-6">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
              Homework & <span className="text-orange-600">Weekly Projects</span>
            </h4>

            <div className="space-y-6">
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Primary Assignment (Weekly)</h5>
                <p className="text-gray-700">
                  Each week, capture 3-6 images that demonstrate the techniques learned in that module. Focus on quality over quantity.
                </p>
              </div>

              <div className="p-5 bg-white rounded-lg">
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Creative Project: "My Week in Six Pictures"</h5>
                <p className="text-gray-700 mb-4">
                  Tell a visual story of your week using exactly 6 photographs. This ongoing project helps you develop narrative skills and see photographic opportunities in everyday life.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Document moments that represent your week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Think about the sequence and how images relate to each other</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Practice consistent style and vision across the series</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Share and discuss with fellow students</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-violet-50 to-blue-50 rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
              The 10-Week <span className="text-violet-600">Subject Project</span>
            </h4>
            <p className="text-gray-700 mb-6">
              Choose a single subject to photograph consistently throughout the 10-week course. This long-term project helps you develop depth, consistency, and mastery.
            </p>

            <h5 className="text-lg font-semibold text-gray-900 mb-4">Subject Inspiration:</h5>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg">
                <h6 className="font-semibold text-gray-900 mb-2">Nature & Flora</h6>
                <p className="text-sm text-gray-700">A specific tree, garden, or natural area through the seasons</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h6 className="font-semibold text-gray-900 mb-2">Animals & Pets</h6>
                <p className="text-sm text-gray-700">Your pet or local wildlife in different contexts</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h6 className="font-semibold text-gray-900 mb-2">Urban & Architecture</h6>
                <p className="text-sm text-gray-700">A building, street corner, or urban landscape</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h6 className="font-semibold text-gray-900 mb-2">People & Portraits</h6>
                <p className="text-sm text-gray-700">A willing friend or family member</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h6 className="font-semibold text-gray-900 mb-2">Objects & Still Life</h6>
                <p className="text-sm text-gray-700">A favorite object photographed in various ways</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h6 className="font-semibold text-gray-900 mb-2">Abstract & Conceptual</h6>
                <p className="text-sm text-gray-700">Light, shadow, reflections, or patterns</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
