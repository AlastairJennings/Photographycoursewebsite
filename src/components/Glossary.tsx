import { useState } from 'react';
import { Search } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  subtitle?: string;
}

export function Glossary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const glossaryTerms: GlossaryTerm[] = [
    {
      term: 'Aperture',
      subtitle: 'The size of the hole that the light goes through',
      definition: 'The opening in a lens through which light passes. Measured in f-stops (f/1.4, f/2.8, etc.), it controls depth of field and exposure.',
      category: 'Camera Settings',
    },
    {
      term: 'Shutter Speed',
      subtitle: 'How long the sensor sees light',
      definition: 'The length of time the camera shutter remains open to expose the sensor to light. Measured in seconds or fractions of seconds.',
      category: 'Camera Settings',
    },
    {
      term: 'ISO',
      subtitle: 'Sensitivity to light',
      definition: 'The sensitivity of your camera sensor to light. Higher ISO values allow shooting in darker conditions but may introduce noise.',
      category: 'Camera Settings',
    },
    {
      term: 'Exposure Triangle',
      subtitle: 'Balancing the three elements',
      definition: 'The relationship between aperture, shutter speed, and ISO that determines the overall exposure of an image.',
      category: 'Concepts',
    },
    {
      term: 'Depth of Field',
      subtitle: 'What appears sharp',
      definition: 'The distance between the nearest and farthest objects in a photo that appear acceptably sharp. Controlled primarily by aperture.',
      category: 'Concepts',
    },
    {
      term: 'Bokeh',
      subtitle: 'Beautiful blur',
      definition: 'The aesthetic quality of the blur produced in out-of-focus parts of an image, often characterized by soft, circular highlights.',
      category: 'Concepts',
    },
    {
      term: 'Rule of Thirds',
      subtitle: 'Dividing the frame',
      definition: 'A composition guideline that divides an image into nine equal parts using two horizontal and two vertical lines.',
      category: 'Composition',
    },
    {
      term: 'Leading Lines',
      subtitle: 'Guiding the eye',
      definition: 'Lines within an image that lead the viewer&apos;s eye toward the main subject or through the photograph.',
      category: 'Composition',
    },
    {
      term: 'Golden Hour',
      subtitle: 'Magic light timing',
      definition: 'The period shortly after sunrise or before sunset when daylight is redder and softer, ideal for photography.',
      category: 'Lighting',
    },
    {
      term: 'Blue Hour',
      subtitle: 'Twilight glow',
      definition: 'The period of twilight when the sun is below the horizon and indirect sunlight takes on a blue shade.',
      category: 'Lighting',
    },
    {
      term: 'RAW',
      subtitle: 'Unprocessed image data',
      definition: 'An unprocessed image file that contains all data captured by the camera sensor, allowing maximum editing flexibility.',
      category: 'File Formats',
    },
    {
      term: 'JPEG',
      subtitle: 'Compressed image format',
      definition: 'A compressed image file format that is smaller in size but has less editing flexibility than RAW files.',
      category: 'File Formats',
    },
    {
      term: 'White Balance',
      subtitle: 'Color accuracy',
      definition: 'The process of removing unrealistic color casts to ensure whites appear white regardless of lighting conditions.',
      category: 'Camera Settings',
    },
    {
      term: 'Histogram',
      subtitle: 'Exposure graph',
      definition: 'A graph showing the tonal distribution in an image, helping to evaluate exposure and contrast.',
      category: 'Concepts',
    },
    {
      term: 'Focal Length',
      subtitle: 'Field of view',
      definition: 'The distance between the lens and the image sensor when focused at infinity, determining the field of view.',
      category: 'Equipment',
    },
    {
      term: 'Prime Lens',
      subtitle: 'Fixed focal length',
      definition: 'A lens with a fixed focal length that cannot zoom but often provides superior image quality and wider apertures.',
      category: 'Equipment',
    },
    {
      term: 'Zoom Lens',
      subtitle: 'Variable focal length',
      definition: 'A lens with variable focal length, allowing you to adjust the field of view without changing lenses.',
      category: 'Equipment',
    },
    {
      term: 'Metering',
      subtitle: 'Measuring light',
      definition: 'The camera&apos;s method of measuring the light in a scene to determine proper exposure settings.',
      category: 'Camera Settings',
    },
    {
      term: 'Chromatic Aberration',
      subtitle: 'Color fringing',
      definition: 'A lens defect causing color fringing around edges, especially noticeable in high-contrast areas.',
      category: 'Technical',
    },
    {
      term: 'Vignetting',
      subtitle: 'Corner darkening',
      definition: 'The darkening of image corners compared to the center, which can occur naturally or be added in post-processing.',
      category: 'Technical',
    },
    {
      term: 'Multigrade Paper',
      subtitle: 'Variable contrast paper',
      definition: 'Photographic paper that responds to different colors of light. One sheet can produce any contrast grade (00-5) by changing yellow or magenta filtration.',
      category: 'Darkroom',
    },
    {
      term: 'Bracketing',
      subtitle: 'Exposure insurance',
      definition: 'Taking multiple shots of the same scene at different exposures (normal, underexposed, overexposed) to ensure at least one perfect exposure.',
      category: 'Techniques',
    },
    {
      term: 'Test Strip',
      subtitle: 'Finding perfect exposure',
      definition: 'A darkroom technique where a strip of photographic paper is exposed in incremental steps to determine optimal printing time.',
      category: 'Darkroom',
    },
    {
      term: 'Contact Sheet',
      subtitle: 'Visual index of negatives',
      definition: 'A print made by placing negatives directly on photographic paper, creating a reference sheet of all frames for selection and evaluation.',
      category: 'Darkroom',
    },
    {
      term: 'Paper Grade',
      subtitle: 'Contrast control',
      definition: 'The contrast level of photographic paper, ranging from Grade 00 (very low contrast) to Grade 5 (very high contrast). Grade 2 is considered normal.',
      category: 'Darkroom',
    },
    {
      term: 'Thin Negative',
      subtitle: 'Underexposed film',
      definition: 'A negative that is pale and transparent due to underexposure. Prints flat and muddy at normal grades; requires high contrast grades (3-5) to compensate.',
      category: 'Film Photography',
    },
    {
      term: 'Dense Negative',
      subtitle: 'Overexposed film',
      definition: 'A negative that is dark and opaque due to overexposure. Requires long exposure times and low contrast grades (00-1) to print successfully.',
      category: 'Film Photography',
    },
    {
      term: 'Grey Card',
      subtitle: '18% reflectance standard',
      definition: 'A card that reflects 18% of light, representing middle grey. Used for accurate light meter readings since all meters are calibrated to this standard.',
      category: 'Techniques',
    },
    {
      term: 'Reciprocity',
      subtitle: 'Exposure equivalents',
      definition: 'The relationship where changes in aperture can be compensated by opposite changes in shutter speed to maintain the same exposure.',
      category: 'Concepts',
    },
    {
      term: 'Film Latitude',
      subtitle: 'Exposure forgiveness',
      definition: 'The range of exposures that film can tolerate while still producing an acceptable image. Greater latitude means more forgiving film.',
      category: 'Film Photography',
    },
  ];

  const categories = ['All', ...Array.from(new Set(glossaryTerms.map(t => t.category)))];

  const categoryColors: Record<string, string> = {
    'All': 'from-gray-900 to-gray-900',
    'Camera Settings': 'from-violet-600 to-purple-600',
    'Concepts': 'from-fuchsia-600 to-pink-600',
    'Composition': 'from-orange-500 to-red-500',
    'Lighting': 'from-blue-600 to-cyan-600',
    'File Formats': 'from-emerald-600 to-teal-600',
    'Equipment': 'from-amber-600 to-yellow-600',
    'Technical': 'from-indigo-600 to-violet-600',
    'Darkroom': 'from-gray-600 to-gray-900',
    'Film Photography': 'from-gray-600 to-gray-900',
    'Techniques': 'from-gray-600 to-gray-900',
  };

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="bg-gradient-to-br from-pink-50/30 via-white to-orange-50/30 min-h-screen" aria-label="Photography Glossary">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-12">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-5xl tracking-tight bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 bg-clip-text text-transparent" style={{ fontFamily: 'Roslindale, serif' }}>
            Glossary
          </h1>
        </div>

        <div className="max-w-3xl mb-8">
          <div className="relative mb-8">
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 h-14 border-2 border-gray-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-offset-0 focus:ring-2 bg-white transition-all"
              style={{
                boxShadow: searchQuery ? '0 0 0 2px transparent, 0 0 0 4px rgba(139, 92, 246, 0.1)' : 'none',
                borderImage: searchQuery ? 'linear-gradient(to right, rgb(139 92 246), rgb(217 70 239)) 1' : 'none'
              }}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-5 h-10 transition-all text-sm ${
                  selectedCategory === category
                    ? `bg-gradient-to-r ${categoryColors[category] || categoryColors.All} text-white border-transparent`
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          {filteredTerms.map((item, index) => {
            // Split definition into first three words and the rest
            const words = item.definition.split(' ');
            const firstThreeWords = words.slice(0, 3).join(' ');
            const remainingWords = words.slice(3).join(' ');
            
            return (
              <div key={index} className="hover:opacity-90 transition-all group cursor-pointer overflow-hidden rounded-xl bg-white border border-gray-200">
                {/* Mobile: Stack layout */}
                <div className="flex flex-col sm:hidden">
                  <div className="p-4 bg-gray-100 border-b border-gray-200">
                    <h3 className={`text-lg tracking-tight leading-tight bg-gradient-to-r ${categoryColors[item.category] || categoryColors.All} bg-clip-text text-transparent`} style={{ fontFamily: 'Roslindale, serif' }}>
                      {item.term}
                    </h3>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-900 text-sm leading-snug mb-3">
                      <span className="tracking-tight" style={{ fontFamily: 'Roslindale, serif' }}>{firstThreeWords}</span>
                      {' '}
                      <span className="text-gray-600">{remainingWords}</span>
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-[9px] uppercase tracking-wider">
                      <span className="text-gray-400">DEC 18, 2024</span>
                      <span className="text-gray-400">3 MIN.</span>
                      <span className={`bg-gradient-to-r ${categoryColors[item.category] || categoryColors.All} bg-clip-text text-transparent`}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Desktop: Side-by-side layout */}
                <div className="hidden sm:flex items-stretch h-16">
                  {/* Left side - Light grey panel with gradient term name */}
                  <div className="w-64 flex-shrink-0 flex items-center justify-center p-4 bg-gray-100">
                    <h3 className={`text-xl tracking-tight leading-tight bg-gradient-to-r ${categoryColors[item.category] || categoryColors.All} bg-clip-text text-transparent`} style={{ fontFamily: 'Roslindale, serif' }}>
                      {item.term}
                    </h3>
                  </div>
                  
                  {/* Right side - White panel with description */}
                  <div className="flex-1 px-6 pt-3 pb-6 min-w-0 flex flex-col justify-between relative">
                    <p className="text-gray-900 text-sm leading-snug line-clamp-2">
                      <span className="tracking-tight" style={{ fontFamily: 'Roslindale, serif' }}>{firstThreeWords}</span>
                      {' '}
                      <span className="text-gray-600">{remainingWords}</span>
                    </p>
                    
                    {/* Metadata at bottom left of right section */}
                    <div className="flex items-center gap-3 text-[9px] uppercase tracking-wider">
                      <span className="text-gray-400">DECEMBER 18, 2024</span>
                      <span className="text-gray-400">3 MIN.</span>
                      <span className={`bg-gradient-to-r ${categoryColors[item.category] || categoryColors.All} bg-clip-text text-transparent`}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-gray-500">No terms found matching your search</p>
          </div>
        )}
      </div>
    </section>
  );
}