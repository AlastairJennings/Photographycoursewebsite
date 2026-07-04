import { Link } from 'react-router';
import { Camera, FileText, Aperture, Lightbulb, Palette, Contrast } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Resource {
  id: string;
  title: string;
  description: string;
  icon: 'camera' | 'aperture' | 'lightbulb' | 'filetext' | 'palette' | 'contrast';
  gradient: string;
  link: string;
  available: boolean;
  thumbnail: string;
}

const resources: Resource[] = [
  {
    id: 'zone-system',
    title: 'The Zone System',
    description: 'Master exposure and tonal control with Ansel Adams\' revolutionary zone system. Learn to previsualize and control every tone in your images.',
    icon: 'camera',
    gradient: 'from-gray-800 to-gray-600',
    link: '/resources/zone-system',
    available: true,
    thumbnail: 'https://images.unsplash.com/photo-1657589905175-2b83621fdff7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbnNlbCUyMGFkYW1zJTIwbGFuZHNjYXBlJTIwYmxhY2slMjB3aGl0ZSUyMG1vdW50YWlufGVufDF8fHx8MTc2OTgxMDkwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'exposure-triangle',
    title: 'Exposure Triangle Guide',
    description: 'A comprehensive visual guide to understanding the relationship between ISO, Aperture, and Shutter Speed and how they work together.',
    icon: 'aperture',
    gradient: 'from-violet-600 to-purple-600',
    link: '/resources/exposure-triangle',
    available: true,
    thumbnail: 'https://images.unsplash.com/photo-1729857037662-221cc636782a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBvc3VyZSUyMHRyaWFuZ2xlJTIwcGhvdG9ncmFwaHklMjBkaWFncmFtJTIwYXBlcnR1cmUlMjBzaHV0dGVyJTIwSVNPfGVufDF8fHx8MTc2OTgxMTE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'composition-rules',
    title: 'Composition Quick Reference',
    description: 'Visual reference guide for the essential composition rules with stunning examples to improve your photographic vision.',
    icon: 'filetext',
    gradient: 'from-orange-500 to-red-500',
    link: '/resources/composition-guide',
    available: true,
    thumbnail: 'https://images.unsplash.com/photo-1557684753-3fddcaf72e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWxlJTIwb2YlMjB0aGlyZHMlMjBjb21wb3NpdGlvbiUyMGdyaWQlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3Njk4MTExODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'lighting-techniques',
    title: 'Lighting Techniques',
    description: 'Essential lighting patterns and techniques for portrait, product, and landscape photography. From natural light to studio setups.',
    icon: 'lightbulb',
    gradient: 'from-fuchsia-600 to-pink-600',
    link: '/resources/lighting-techniques',
    available: true,
    thumbnail: 'https://images.unsplash.com/photo-1768818653161-0ad28dede131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBsaWdodGluZyUyMHBvcnRyYWl0JTIwcGhvdG9ncmFwaHklMjBzZXR1cHxlbnwxfHx8fDE3Njk4MTExODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'white-balance',
    title: 'White Balance & Color Temperature',
    description: 'Master color accuracy and creative color grading. Understand Kelvin scale, custom white balance, and how to use color temperature creatively.',
    icon: 'lightbulb',
    gradient: 'from-amber-500 to-yellow-500',
    link: '/resources/white-balance',
    available: true,
    thumbnail: 'https://images.unsplash.com/photo-1728575908094-9583b51f936f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5yaXNlJTIwc3Vuc2V0JTIwY29sb3IlMjB0ZW1wZXJhdHVyZSUyMHdhcm0lMjBsaWdodxlbnwxfHx8fDE3Njk4MTE3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'histogram-guide',
    title: 'Understanding Histograms',
    description: 'Learn to read and interpret your camera\'s histogram for perfect exposure every time. Avoid blown highlights and crushed shadows.',
    icon: 'aperture',
    gradient: 'from-blue-500 to-cyan-500',
    link: '/resources/histogram-guide',
    available: true,
    thumbnail: 'https://images.unsplash.com/photo-1714201623874-3c654c1f0fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBoaXN0b2dyYW0lMjBleHBvc3VyZSUyMGNoYXJ0fGVufDF8fHx8MTc2OTgxMTc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'raw-vs-jpeg',
    title: 'RAW vs JPEG',
    description: 'Understand the differences between file formats, when to use each, and why RAW files give you maximum editing flexibility.',
    icon: 'filetext',
    gradient: 'from-green-500 to-emerald-500',
    link: '/resources/raw-vs-jpeg',
    available: true,
    thumbnail: 'https://images.unsplash.com/photo-1649297554304-70425a8e82cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXclMjBmaWxlJTIwZm9ybWF0JTIwcGhvdG9ncmFwaHklMjBkaWdpdGFsfGVufDF8fHx8MTc2OTgxMTc4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'lens-guide',
    title: 'Lens Selection Guide',
    description: 'Choose the right lens for every situation. Comprehensive guide to focal lengths, apertures, and specialty lenses for different photography styles.',
    icon: 'camera',
    gradient: 'from-indigo-500 to-purple-500',
    link: '/resources/lens-guide',
    available: true,
    thumbnail: 'https://images.unsplash.com/photo-1761640771643-30c67571e91a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGNhbWVyYSUyMGxlbnMlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2OTgxMTc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'focus-techniques',
    title: 'Focus Techniques',
    description: 'Master autofocus modes, focus points, manual focus techniques, and achieve tack-sharp images every time.',
    icon: 'aperture',
    gradient: 'from-rose-500 to-pink-500',
    link: '/resources/focus-techniques',
    available: true,
    thumbnail: 'https://images.unsplash.com/photo-1769698821565-54b4bbcdc235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNybyUyMHBob3RvZ3JhcGh5JTIwY2xvc2UlMjB1cCUyMGZvY3VzJTIwZGV0YWlsfGVufDF8fHx8MTc2OTgxMTc4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'colour-theory',
    title: 'Colour Theory for Photographers',
    description: 'Understanding colour relationships, harmonies, and how to use colour to create mood and emotion in your images.',
    icon: 'palette',
    gradient: 'from-pink-500 to-purple-500',
    link: '/resources/colour-theory',
    available: true,
    thumbnail: 'https://images.unsplash.com/photo-1761145275111-e62cbdba6f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwY29sb3IlMjBwYWxldHRlJTIwcGFpbnQlMjBhcnRpc3RpY3xlbnwxfHx8fDE3Njk5ODAwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'black-white-conversion',
    title: 'Black & White Conversion',
    description: 'Master monochrome photography, conversion techniques, and the zone system for stunning black and white images.',
    icon: 'contrast',
    gradient: 'from-gray-700 to-gray-900',
    link: '/resources/black-white-conversion',
    available: true,
    thumbnail: 'https://images.unsplash.com/photo-1638029318990-ce043cb912d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdoaXRlJTIwbW9ub2Nocm9tZSUyMGZpbG0lMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3Njk5ODAwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'long-exposure',
    title: 'Long Exposure Techniques',
    description: 'Create dreamy water, light trails, and star trails. Master ND filters, bulb mode, and creative long exposure photography.',
    icon: 'camera',
    gradient: 'from-blue-600 to-indigo-600',
    link: '/resources/long-exposure',
    available: true,
    thumbnail: 'https://images.unsplash.com/photo-1693288175485-7aef92b7f65a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25nJTIwZXhwb3N1cmUlMjBsaWdodCUyMHRyYWlscyUyMG5pZ2h0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY5ODExNzgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'flash-photography',
    title: 'Flash Photography Basics',
    description: 'Control light with confidence. Master on-camera and off-camera flash, modifiers, and creative lighting techniques.',
    icon: 'camera',
    gradient: 'from-orange-500 to-amber-500',
    link: '/resources/flash-photography',
    available: true,
    thumbnail: 'https://images.unsplash.com/photo-1757687917412-d092094648fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVlZGxpZ2h0JTIwZmxhc2glMjBwaG90b2dyYXBoeSUyMHN0cm9iZXxlbnwxfHx8fDE3Njk5ODA5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'post-processing',
    title: 'Post-Processing Workflow',
    description: 'From RAW to final image. Learn Lightroom, Photoshop, organization systems, and non-destructive editing workflows.',
    icon: 'camera',
    gradient: 'from-purple-600 to-violet-600',
    link: '/resources/post-processing',
    available: true,
    thumbnail: 'https://images.unsplash.com/photo-1698945298361-365595d400eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjcmVlbiUyMHBob3RvJTIwZWRpdGluZyUyMHNvZnR3YXJlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2OTk4MTQ3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

const iconComponents = {
  camera: Camera,
  aperture: Aperture,
  lightbulb: Lightbulb,
  filetext: FileText,
  palette: Palette,
  contrast: Contrast,
};

export function FactSheets() {
  return (
    <section className="bg-gradient-to-br from-pink-50/30 via-white to-blue-50/30 min-h-screen" aria-label="Photography Resources">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-12">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-5xl tracking-tight bg-gradient-to-r from-violet-600 via-fuchsia-600 to-blue-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Photography Resources
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            Essential guides, reference materials, and technical information to support your photography journey.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {resources.map((resource) => {
            const IconComponent = iconComponents[resource.icon];
            
            if (resource.available) {
              return (
                <Link
                  key={resource.id}
                  to={resource.link}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
                >
                  {/* Thumbnail Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={resource.thumbnail}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-r ${resource.gradient} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-2xl tracking-tight text-gray-900 group-hover:text-violet-600 transition-colors" style={{ fontFamily: 'Roslindale, serif' }}>
                        {resource.title}
                      </h2>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full flex-shrink-0 ml-2">
                        Available
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm mb-4">
                      {resource.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <span className="text-sm font-semibold text-violet-600 group-hover:text-violet-700">
                      Read More →
                    </span>
                  </div>
                </Link>
              );
            } else {
              return (
                <div
                  key={resource.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 opacity-60"
                >
                  {/* Thumbnail Image - Grayscale */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={resource.thumbnail}
                      alt={resource.title}
                      className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-r ${resource.gradient} flex items-center justify-center shadow-lg opacity-50`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
                        {resource.title}
                      </h2>
                      <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 text-xs font-semibold rounded-full flex-shrink-0 ml-2">
                        Coming Soon
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {resource.description}
                    </p>
                  </div>
                </div>
              );
            }
          })}
        </div>

        {/* Downloadable Resources Section */}
        <div className="bg-white rounded-xl p-12 shadow-sm">
          <div className="max-w-2xl mx-auto text-center">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-3xl tracking-tight text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
              Downloadable Fact Sheets
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're working on creating downloadable PDF fact sheets and quick reference guides. Check back soon for printable materials you can take into the field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}