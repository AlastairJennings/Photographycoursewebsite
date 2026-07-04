import { Link } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function IntroPhotographyCourseOverview() {
  const weeks = [
    {
      number: 1,
      title: 'Get to Know Your Camera',
      description: 'Start your photography journey by understanding your camera. Learn creative photography fundamentals, how cameras see versus how we see, and master key controls including dials, buttons, menus, switches, and modes. Complete hands-on exercises with aperture control (f/3.5, f/8, f/16) and shutter speed control (1/30s, 1/250s, 1/1000s).',
      available: true,
    },
    {
      number: 2,
      title: 'Mastering the Exposure Triangle',
      description: 'Unlock the power of Aperture, ISO, and Shutter Speed. Understand the fundamental relationship between these three elements and how they work together to create perfect exposures. Learn to use PSAM modes (Program, Shutter Priority, Aperture Priority, Manual) and complete the PSAM Challenge—shooting one image in each mode.',
      available: true,
    },
    {
      number: 3,
      title: 'Composition: The Art of Framing',
      description: 'Master visual storytelling through composition. Learn the Rule of Thirds, leading lines, framing, negative space, symmetry, and patterns. Understand visual weight, balance, and how to create compelling images. Complete practical exercises focusing on compositional techniques and submit 5 images demonstrating different composition rules.',
      available: true,
    },
    {
      number: 4,
      title: 'Aperture & Depth of Field Mastery',
      description: 'Master aperture control and depth of field to create professional imagery. Learn f-stop mechanics, bokeh techniques, subject isolation, and the three optical pillars (aperture, focal length, distance). Complete studio projects including bokeh portraits, largo perspective, macro close-ups, and miniature effects. Submit the Aperture Storyboard—a visual narrative using strategic depth of field.',
      available: true,
    },
    {
      number: 5,
      title: 'Shutter Speed & Motion Control',
      description: 'Master the temporal dimension of photography—freezing action or expressing movement through light and time. Learn Shutter Priority mode, the reciprocal rule for camera shake prevention, sensor crop compensation, and Auto ISO safety nets. Complete studio projects including flash action capture, Rock \'n\' Roll cover motion blur, and light spirograph painting. Submit The Motion Challenge—two images demonstrating both frozen action and intentional blur.',
      available: true,
    },
    {
      number: 6,
      title: 'Focus modes and options',
      description: 'Understand how to work with available light to create stunning photographs at any time of day. Master golden hour, blue hour, and diffused light techniques.',
      available: true,
    },
    {
      number: 7,
      title: 'Metering and Exposure Control',
      description: 'Master precision light measurement and creative exposure override. Learn metering modes, exposure compensation, and how to achieve perfect exposure in any lighting condition.',
      available: true,
    },
    {
      number: 8,
      title: 'Advanced Editing & Processing',
      description: 'Transform RAW files into polished images with professional editing workflows, selective adjustments, masking techniques, and retouching tools.',
      available: true,
    },
    {
      number: 9,
      title: 'Lenses & Focal Length',
      description: 'Take your editing to the next level with advanced Lightroom techniques including local adjustments, graduated filters, and creative color grading.',
      available: false,
    },
    {
      number: 10,
      title: 'Professional Practice & Portfolio',
      description: 'Present your 10-week subject project and learn how to curate a compelling photography portfolio. Showcase your best work and receive feedback.',
      available: false,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-violet-50/30 via-white to-fuchsia-50/30 min-h-screen">
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

        {/* Course Information */}
        <div className="bg-white rounded-xl p-8 sm:p-12 mb-12 shadow-sm">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Course Overview
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-violet-600 text-xl">•</span>
                  <span>Master your camera's technical controls and settings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-600 text-xl">•</span>
                  <span>Understand exposure, aperture, and shutter speed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-600 text-xl">•</span>
                  <span>Develop your creative vision and compositional skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-600 text-xl">•</span>
                  <span>Edit and enhance images in Adobe Lightroom</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-600 text-xl">•</span>
                  <span>Create a compelling photography portfolio</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Details</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-fuchsia-600 text-xl">•</span>
                  <span><strong>Duration:</strong> 10 weeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fuchsia-600 text-xl">•</span>
                  <span><strong>Level:</strong> Beginner to Intermediate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fuchsia-600 text-xl">•</span>
                  <span><strong>Format:</strong> Lectures and practical sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fuchsia-600 text-xl">•</span>
                  <span><strong>Software:</strong> Adobe Lightroom (Classic or CC)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fuchsia-600 text-xl">•</span>
                  <span><strong>Equipment:</strong> Camera with manual controls (DSLR or mirrorless)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 10-Week Structure */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            10-Week Course Structure
          </h2>

          <div className="grid gap-6">
            {weeks.map((week) => (
              <div 
                key={week.number}
                className={`bg-white rounded-xl p-6 sm:p-8 shadow-sm border-2 transition-all ${
                  week.available 
                    ? 'border-violet-200 hover:border-violet-400 hover:shadow-md' 
                    : 'border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                        week.available 
                          ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white' 
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        {week.number}
                      </div>
                      <h3 className="text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                        Week {week.number}: {week.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {week.description}
                    </p>

                    {week.available && (
                      <Link
                        to={`/courses/introduction-to-photography/week-0${week.number}`}
                        className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-semibold transition-colors"
                      >
                        Read more about Week {week.number}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Requirements */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            What You'll Need
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-violet-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Camera</h3>
              <p className="text-sm text-gray-700">
                Any camera with manual controls—DSLR, mirrorless, or even advanced compact cameras. Smartphone cameras are not recommended for this course.
              </p>
            </div>

            <div className="p-6 bg-fuchsia-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Software</h3>
              <p className="text-sm text-gray-700">
                Adobe Lightroom (Classic or CC). A free trial is available, or consider the Photography Plan subscription.
              </p>
            </div>

            <div className="p-6 bg-orange-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Commitment</h3>
              <p className="text-sm text-gray-700">
                Weekly practical assignments and a 10-week subject project to develop your skills and build a cohesive portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}