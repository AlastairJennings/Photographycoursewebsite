import { X, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Lesson {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
  locked: boolean;
}

interface VideoPlayerProps {
  lesson: Lesson;
  onClose: () => void;
}

export function VideoPlayer({ lesson, onClose }: VideoPlayerProps) {
  return (
    <div className="bg-white border border-gray-200">
      <div className="relative bg-black aspect-video flex items-center justify-center">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1679415353773-4198fc369d0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjB3b3JraW5nJTIwc3R1ZGlvfGVufDF8fHx8MTc2NTEzMDY1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Video thumbnail"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white hover:bg-gray-100 text-gray-900 w-16 h-16 flex items-center justify-center transition-colors">
            <Play className="w-6 h-6 ml-1" />
          </button>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black bg-opacity-30 hover:bg-opacity-50 text-white w-10 h-10 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="p-8">
        <h2 className="text-2xl tracking-tight text-gray-900 mb-4">{lesson.title}</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          In this lesson, you&apos;ll learn essential photography techniques and practical tips that you can apply immediately to improve your photography skills.
        </p>
        
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-sm tracking-widest uppercase text-gray-500 mb-6">Lesson Resources</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-700">
              <div className="w-1 h-1 bg-gray-900"></div>
              Downloadable practice files
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <div className="w-1 h-1 bg-gray-900"></div>
              Quiz to test your knowledge
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <div className="w-1 h-1 bg-gray-900"></div>
              Certificate of completion
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
