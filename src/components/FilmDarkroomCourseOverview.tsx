import { Link } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function FilmDarkroomCourseOverview() {
  const weeks = [
    {
      number: 1,
      title: 'Introduction',
      description: 'Welcome to analog photography! Get an overview of the entire workflow from camera to final print. Learn about essential film camera components, the film development process (tank, spool, developer, stop, fix, wash, drying), and darkroom printing equipment (enlarger, lens, contact sheets, test strips, and the complete printing workflow).',
      available: true,
    },
    {
      number: 2,
      title: 'Film Development',
      description: 'Develop your first roll of 35mm black & white film and create contact sheets. Master loading film reels in darkness, the four-chemical process (developer, stop bath, fixer, wash), and critical development variables (time, temperature, agitation). Learn darkroom safety protocols and troubleshoot common development faults.',
      available: true,
    },
    {
      number: 3,
      title: 'Printing First Steps',
      description: 'Transform negatives into stunning darkroom prints. Master contact sheets, test strips, and your first enlargements. Dive deep into exposure theory, the Zone System, understanding 18% middle grey, metering techniques, and the golden rule: "Expose for the shadows, develop for the highlights." Apply exposure compensation and complete a practical Zone System project.',
      available: true,
    },
    {
      number: 4,
      title: 'Printing and Grading',
      description: 'Master variable contrast paper and multigrade printing techniques. Learn how to use the LPL 7451 color head to select contrast grades from 00 to 5. Diagnose and compensate for problematic negatives (thin/dense) using grade selection strategies. Understand how reflected light meters can be fooled by white and black subjects, and practice bracketing exposures to test film latitude.',
      available: true,
    },
    {
      number: 5,
      title: 'Dodging & Burning',
      description: 'Master local exposure control in the darkroom. Learn dodging (lightening areas), burning (darkening areas), and print mapping techniques. Create balanced prints by compressing tonal range to fit paper limitations. Practice rescuing challenging negatives and explore advanced pre-flashing techniques. Study master printers like Pablo Inirio and understand digital scanning for archiving analog work.',
      available: true,
    },
    {
      number: 6,
      title: 'Studio Metering & Masking for Print',
      description: 'Master the Pentax K1000\'s reflective meter and understand its 18% grey bias. Learn precision masking techniques for burning skies and creating image maps for print planning. Conduct systematic studio experiments testing meter behavior with white, grey, and black subjects across 36 frames. Calibrate your camera using the grey card technique and develop film to analyze metering decisions.',
      available: true,
    },
    {
      number: 7,
      title: 'Creative Darkroom Techniques',
      description: 'Coming soon',
      available: false,
    },
    {
      number: 8,
      title: 'Alternative Processes',
      description: 'Coming soon',
      available: false,
    },
    {
      number: 9,
      title: 'Final Project Work',
      description: 'Coming soon',
      available: false,
    },
    {
      number: 10,
      title: 'Exhibition & Presentation',
      description: 'Coming soon',
      available: false,
    },
  ];

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
                  <span className="text-blue-600 text-xl">•</span>
                  <span>Master 35mm film camera operation and manual controls</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">•</span>
                  <span>Load, expose, and develop black & white film</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">•</span>
                  <span>Create professional darkroom prints using enlargers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">•</span>
                  <span>Understand exposure, metering, and the Zone System</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">•</span>
                  <span>Build a portfolio of analog photographic work</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Details</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 text-xl">•</span>
                  <span><strong>Duration:</strong> 10 weeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 text-xl">•</span>
                  <span><strong>Level:</strong> Beginner to Intermediate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 text-xl">•</span>
                  <span><strong>Format:</strong> Hands-on practical sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 text-xl">•</span>
                  <span><strong>Materials:</strong> Film and paper provided</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-600 text-xl">•</span>
                  <span><strong>Equipment:</strong> Cameras and darkroom access included</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enrollment CTA - Wiltshire College */}
        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-8 sm:p-12 mb-12 shadow-lg text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1684710087097-4b87480ad8ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwdW5pdmVyc2l0eSUyMGJ1aWxkaW5nJTIwRW5nbGFuZHxlbnwxfHx8fDE3Njk5NzIxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="College Building"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl tracking-tight mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
                  Enroll in the In-Person Course
                </h2>
                <p className="text-lg text-blue-50 leading-relaxed mb-2">
                  Join us for this hands-on 10-week photography course at Wiltshire College and University Centre in Salisbury.
                </p>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Experience traditional film photography with expert instruction, professional darkroom facilities, and all equipment provided.
                </p>
              </div>
              
              <div className="flex-shrink-0 bg-white rounded-lg p-6 shadow-xl">
                <div className="text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Taught at</p>
                  <div className="text-2xl font-bold text-blue-600 mb-1" style={{ fontFamily: 'Roslindale, serif' }}>
                    Wiltshire College
                  </div>
                  <p className="text-sm text-gray-600">& University Centre</p>
                  <p className="text-xs text-gray-500 mt-2">Salisbury</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.wiltshire.ac.uk/course/photography-film-darkroom-course/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Sign Up at Wiltshire College
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              
              <a
                href="mailto:info@thephotocourse.com?subject=Film%20%26%20Darkroom%20Course%20Enquiry"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Us for More Info
              </a>
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
                    ? 'border-blue-200 hover:border-blue-400 hover:shadow-md' 
                    : 'border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                        week.available 
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white' 
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
                        to={`/courses/film-darkroom/week-0${week.number}`}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
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
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Camera</h3>
              <p className="text-sm text-gray-700">
                35mm film camera (manual or semi-automatic). We can provide cameras if you don't have one.
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Film & Paper</h3>
              <p className="text-sm text-gray-700">
                Kentmere 400 film and Ilford multigrade paper available in stock room at cost.
              </p>
            </div>

            <div className="p-6 bg-cyan-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Darkroom Access</h3>
              <p className="text-sm text-gray-700">
                Full access to professional darkroom facilities with enlargers, chemistry, and equipment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}