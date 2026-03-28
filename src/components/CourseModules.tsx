import { useState } from 'react';
import { Link } from 'react-router';
import { Play, Clock, CheckCircle, BookOpen, ArrowRight } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Lesson {
  id: number;
  title: string;
  module: string;
  description: string;
  duration: string;
  completed: boolean;
  locked: boolean;
  thumbnail: string;
  color: string;
  slug: string; // URL slug for the course
}

export function CourseModules() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [filterModule, setFilterModule] = useState<string>('All');

  const lessons: Lesson[] = [
    {
      id: 1,
      title: 'Introduction to Photography',
      module: 'Fundamentals',
      description: 'Start your photography journey with the essential concepts and techniques',
      duration: '12 min',
      completed: true,
      locked: false,
      thumbnail: 'https://images.unsplash.com/photo-1719483391454-8b4ebd746007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBiYXNpY3MlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjUzMTI1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-violet-600 to-purple-600',
      slug: '/courses/introduction-to-photography',
    },
    {
      id: 2,
      title: 'Photography Film & Darkroom Course',
      module: 'Fundamentals',
      description: 'Master traditional film photography and darkroom processing techniques',
      duration: '45 min',
      completed: false,
      locked: false,
      thumbnail: 'https://images.unsplash.com/photo-1697238724718-29cc8b1a2340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2FtZXJhJTIwZmlsbXxlbnwxfHx8fDE3NjUyNzM3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-violet-600 to-purple-600',
      slug: '/courses/film-darkroom',
    },
  ];

  const modules = ['All', 'Fundamentals'];

  const filteredLessons = filterModule === 'All'
    ? lessons
    : lessons.filter(lesson => lesson.module === filterModule);

  return (
    <section className="bg-gradient-to-br from-violet-50/30 via-white to-fuchsia-50/30 min-h-screen" aria-label="Course Modules">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-12">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl tracking-tight bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 bg-clip-text text-transparent" style={{ fontFamily: 'Roslindale, serif' }}>
            Course Modules
          </h1>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {modules.map((module) => (
            <button
              key={module}
              onClick={() => setFilterModule(module)}
              className={`px-5 h-10 text-sm transition-all border ${
                filterModule === module
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white border-transparent'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'
              }`}
            >
              {module}
            </button>
          ))}
        </div>

        {selectedLesson && (
          <div className="mb-12">
            <VideoPlayer lesson={selectedLesson} onClose={() => setSelectedLesson(null)} />
          </div>
        )}

        <div className="space-y-1 border-t border-gray-200">
          {filteredLessons.map((lesson) => (
            <Link
              key={lesson.id}
              to={lesson.slug}
              className="block bg-white border-b border-gray-200 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all group"
            >
              <div className="py-6 px-8 flex items-start gap-8">
                {/* Featured Image */}
                <div className="w-32 h-32 flex-shrink-0 relative overflow-hidden">
                  <ImageWithFallback
                    src={lesson.thumbnail}
                    alt={lesson.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${lesson.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  {lesson.completed && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-gray-900" />
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <h3 className="text-3xl mb-2 tracking-tight text-gray-900 group-hover:opacity-70 transition-opacity leading-tight" style={{ fontFamily: 'Roslindale, serif' }}>
                    {lesson.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed uppercase tracking-wide">
                    {lesson.description}
                  </p>
                  
                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-wide">
                    <span className={`bg-gradient-to-r ${lesson.color} bg-clip-text text-transparent`}>
                      {lesson.module}
                    </span>
                    <span className="text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {lesson.duration}
                    </span>
                    {lesson.completed && (
                      <span className="text-gray-400">Completed</span>
                    )}
                    <div className="ml-auto">
                      <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white h-8 px-4 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-[10px]">
                        <BookOpen className="w-3 h-3" />
                        View Course
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}