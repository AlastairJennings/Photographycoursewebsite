import { useState } from 'react';
import { Link } from 'react-router';
import { ChevronDown, Download, Camera, BookOpen, CheckCircle2, Image as ImageIcon, ArrowLeft, ArrowRight } from 'lucide-react';
import { MultiSchema } from './Schema';
import { generateCourseSchema, generateBreadcrumbSchema } from '../utils/schema-generator';

export function IntroPhotographyCourse() {
  const [openModule, setOpenModule] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
  };

  // Generate structured data
  const courseSchema = generateCourseSchema({
    name: 'Introduction to Photography',
    description: 'A comprehensive 10-week course covering everything from camera basics to creative storytelling. Master the fundamentals and develop your unique photographic vision.',
    url: '/courses/introduction-to-photography',
    courseCode: 'PHOTO-101',
    educationalLevel: 'Beginner',
    timeRequired: 'P10W', // 10 weeks
    numberOfLessons: 10,
    teaches: [
      'Camera fundamentals and settings',
      'Composition and framing',
      'Lighting techniques',
      'Portrait photography',
      'Landscape photography',
      'Creative storytelling',
    ],
    hasCourseInstance: {
      courseMode: 'online',
      courseWorkload: 'PT10H', // 10 hours total
    },
    inLanguage: 'en',
    datePublished: '2026-01-01',
    dateModified: '2026-01-21',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Courses', url: '/courses' },
    { name: 'Introduction to Photography', url: '/courses/introduction-to-photography' },
  ]);

  return (
    <div className="bg-gradient-to-br from-violet-50/30 via-white to-fuchsia-50/30 min-h-screen">
      {/* Structured Data */}
      <MultiSchema schemas={[courseSchema, breadcrumbSchema]} />
      
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
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Introduction to Photography
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            A comprehensive 10-week course covering everything from camera basics to creative storytelling. Master the fundamentals and develop your unique photographic vision.
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
                  <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Safety:</strong> Basic photography safety guidelines and best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Orientation:</strong> Course structure and learning objectives</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Hardware:</strong> Camera with manual controls (DSLR or mirrorless recommended)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Software:</strong> Adobe Lightroom (Classic or CC)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Resources</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Reading Materials:</strong> Recommended photography books and articles</span>
                </li>
                <li className="flex items-start gap-3">
                  <Camera className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Practice Exercises:</strong> Weekly shooting assignments</span>
                </li>
                <li className="flex items-start gap-3">
                  <ImageIcon className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Portfolio Development:</strong> Build your body of work throughout the course</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 10-Week Course Roadmap */}
        <div className="bg-white rounded-xl p-8 sm:p-12 mb-8 shadow-sm">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            10-Week Course Roadmap
          </h2>

          <div className="space-y-2">
            {/* Week 1 */}
            <Link to="/courses/introduction-to-photography/week-01" className="block">
              <div className="bg-white border border-gray-200 overflow-hidden hover:border-violet-300 hover:shadow-md transition-all">
                <div className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                      01
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                        Get to Know Your Camera
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Creative Photography & Technical Mastery</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600 flex-shrink-0" />
                </div>
              </div>
            </Link>

            {/* Week 2 */}
            <Link to="/courses/introduction-to-photography/week-02" className="block">
              <div className="bg-white border border-gray-200 overflow-hidden hover:border-violet-300 hover:shadow-md transition-all">
                <div className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                      02
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                        Mastering the Exposure Triangle
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Unlocking the power of Aperture, ISO, and Shutter Speed</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600 flex-shrink-0" />
                </div>
              </div>
            </Link>

            {/* Week 3 */}
            <Link to="/courses/introduction-to-photography/week-03" className="block">
              <div className="bg-white border border-gray-200 overflow-hidden hover:border-violet-300 hover:shadow-md transition-all">
                <div className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                      03
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                        Composition: The Art of Framing
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Mastering composition & visual storytelling</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600 flex-shrink-0" />
                </div>
              </div>
            </Link>

            {/* Week 4 */}
            <Link to="/courses/introduction-to-photography/week-04" className="block">
              <div className="bg-white border border-gray-200 overflow-hidden hover:border-violet-300 hover:shadow-md transition-all">
                <div className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                      04
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                        Aperture & Depth of Field Mastery
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Creative Photography and Portfolio Development</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600 flex-shrink-0" />
                </div>
              </div>
            </Link>

            {/* Week 5 */}
            <Link to="/courses/introduction-to-photography/week-05" className="block">
              <div className="bg-white border border-gray-200 overflow-hidden hover:border-violet-300 hover:shadow-md transition-all">
                <div className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                      05
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                        Shutter Speed & Motion Control
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Master the temporal dimension of photography</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600 flex-shrink-0" />
                </div>
              </div>
            </Link>

            {/* Week 6 */}
            <Link to="/courses/introduction-to-photography/week-06" className="block">
              <div className="bg-white border border-gray-200 overflow-hidden hover:border-violet-300 hover:shadow-md transition-all">
                <div className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                      06
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                        Focus Modes and Options
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Master sharpness and creative control</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600 flex-shrink-0" />
                </div>
              </div>
            </Link>

            {/* Week 7 */}
            <Link to="/courses/introduction-to-photography/week-07" className="block">
              <div className="bg-white border border-gray-200 overflow-hidden hover:border-violet-300 hover:shadow-md transition-all">
                <div className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                      07
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                        Metering and Exposure Control
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Precision light measurement & creative override</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600 flex-shrink-0" />
                </div>
              </div>
            </Link>

            {/* Week 8 */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(8)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    08
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Advanced Editing
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Local adjustments and creative effects</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 8 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 8 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <p className="text-gray-700">Take your editing to the next level with advanced Lightroom techniques including local adjustments, graduated filters, and creative color grading.</p>
                </div>
              )}
            </div>

            {/* Week 9 */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(9)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    09
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Visual Storytelling
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Creating narrative through images</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 9 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 9 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <p className="text-gray-700">Learn how to create compelling visual narratives and develop your unique photographic voice.</p>
                </div>
              )}
            </div>

            {/* Week 10 */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleModule(10)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    10
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                      Portfolio & Final Project
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">Curating and presenting your work</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openModule === 10 ? 'rotate-180' : ''}`} />
              </button>
              
              {openModule === 10 && (
                <div className="px-4 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                  <p className="text-gray-700">Present your 10-week subject project and learn how to curate a compelling photography portfolio.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Resources & Support */}
        <div className="bg-gradient-to-br from-blue-50 to-violet-50 rounded-xl p-8 sm:p-12 shadow-sm">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Resources, FAQ & Feedback
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-blue-600" />
                Downloads & Support
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Portfolio Checklist:</strong> Step-by-step guide to curating your work</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Print Prep Guide:</strong> Prepare images for professional printing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Quick Reference Cheatsheets:</strong> Camera settings and composition guides</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Software Tutorials:</strong> Lightroom workflow videos and guides</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Do I need a specific camera brand?</p>
                  <p className="text-sm text-gray-700">No! Any camera with manual controls will work - Canon, Nikon, Sony, Fujifilm, etc. The principles are universal.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Is Lightroom required?</p>
                  <p className="text-sm text-gray-700">While we teach using Adobe Lightroom, you can follow along with similar software. However, Lightroom is industry-standard and recommended.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">How much time should I dedicate weekly?</p>
                  <p className="text-sm text-gray-700">Plan for 3-5 hours per week including lessons, practice shooting, and editing time.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Course Feedback</h3>
            <p className="text-gray-700">Your feedback helps us improve. Please share your thoughts, questions, and suggestions throughout the course. We're here to support your photographic journey!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
