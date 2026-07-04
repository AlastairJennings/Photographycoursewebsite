import { Link } from 'react-router';
import { ArrowLeft, BookOpen, Camera, Eye, Sliders, Wand2, Layers, CheckCircle2 } from 'lucide-react';

// Week 08: Advanced Editing & Processing
export function IntroPhotoWeek08() {
  return (
    <div className="bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 min-h-screen">
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
            <span className="text-6xl font-bold text-gray-300">08</span>
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">Session 08 // Advanced Editing & Processing</span>
          </div>
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Advanced Editing & Processing
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Transforming RAW Files into Polished Images
          </p>
        </div>

        {/* 10-Week Roadmap */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">The 10-Week Roadmap</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Course Overview
            </h4>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-semibold text-gray-400 mb-1">Week 01</div>
              <div className="text-xs text-gray-600">Camera Basics</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-semibold text-gray-400 mb-1">Week 02</div>
              <div className="text-xs text-gray-600">Exposure Triangle</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-semibold text-gray-400 mb-1">Week 03</div>
              <div className="text-xs text-gray-600">Composition</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-semibold text-gray-400 mb-1">Week 04</div>
              <div className="text-xs text-gray-600">Light & Lighting</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-semibold text-gray-400 mb-1">Week 05</div>
              <div className="text-xs text-gray-600">Focus & Depth</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-semibold text-gray-400 mb-1">Week 06</div>
              <div className="text-xs text-gray-600">Color & White Balance</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-semibold text-gray-400 mb-1">Week 07</div>
              <div className="text-xs text-gray-600">Metering & Exposure</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg border-2 border-blue-700 shadow-md">
              <div className="text-sm font-semibold text-white mb-1">Week 08</div>
              <div className="text-xs text-blue-100 font-medium">Advanced Editing</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-semibold text-gray-400 mb-1">Week 09</div>
              <div className="text-xs text-gray-600">Visual Storytelling</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-semibold text-gray-400 mb-1">Week 10</div>
              <div className="text-xs text-gray-600">Portfolio & Project</div>
            </div>
          </div>
        </div>

        {/* Today's Agenda */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">Today's Agenda</span>
            <h4 className="text-2xl font-semibold text-gray-900 mt-2" style={{ fontFamily: 'Roslindale, serif' }}>
              Session Overview
            </h4>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-3 mb-2">
                <Eye className="w-5 h-5 text-blue-600" />
                <h5 className="font-semibold text-gray-900">Student Review: Metering Portfolio</h5>
              </div>
              <p className="text-sm text-gray-600">Reviewing exposure control from last week's assignment</p>
            </div>

            <div className="p-5 bg-indigo-50 rounded-lg border border-indigo-100">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <h5 className="font-semibold text-gray-900">Non-Destructive Editing Workflow</h5>
              </div>
              <p className="text-sm text-gray-600">Building a professional editing foundation</p>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg border border-purple-100">
              <div className="flex items-center gap-3 mb-2">
                <Camera className="w-5 h-5 text-purple-600" />
                <h5 className="font-semibold text-gray-900">Advanced RAW Processing</h5>
              </div>
              <p className="text-sm text-gray-600">Maximizing image quality from RAW files</p>
            </div>

            <div className="p-5 bg-violet-50 rounded-lg border border-violet-100">
              <div className="flex items-center gap-3 mb-2">
                <Sliders className="w-5 h-5 text-violet-600" />
                <h5 className="font-semibold text-gray-900">Selective Adjustments & Masking</h5>
              </div>
              <p className="text-sm text-gray-600">Precision edits with layer masking techniques</p>
            </div>

            <div className="p-5 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-3 mb-2">
                <Wand2 className="w-5 h-5 text-blue-600" />
                <h5 className="font-semibold text-gray-900">Retouching & Healing Tools</h5>
              </div>
              <p className="text-sm text-gray-600">Professional cleanup and enhancement</p>
            </div>

            <div className="p-5 bg-indigo-50 rounded-lg border border-indigo-100">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                <h5 className="font-semibold text-gray-900">Practical Task & Homework</h5>
              </div>
              <p className="text-sm text-gray-600">Advanced processing challenge</p>
            </div>
          </div>
        </div>

        {/* Student Review */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-8">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">Critique Session</span>
            <h4 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3" style={{ fontFamily: 'Roslindale, serif' }}>
              Student Review
            </h4>
            <p className="text-gray-600 mt-3 max-w-2xl">
              Analyzing the Week 7 Metering Portfolio. We will focus on the 'Three-Tone Test' and how you managed extreme exposures.
            </p>
          </div>

          <div className="mb-4">
            <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Review Criteria</span>
          </div>

          <div className="space-y-0 divide-y divide-gray-100">
            <div className="py-6 grid md:grid-cols-[120px_1fr] gap-4">
              <div className="text-xs uppercase tracking-widest text-orange-500 font-bold pt-1">Point 01</div>
              <div>
                <h5 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, serif' }}>Exposure Accuracy</h5>
                <p className="text-gray-600">Did the camera successfully reach 18% gray for each tone? How did you compensate to maintain the original color?</p>
              </div>
            </div>
            <div className="py-6 grid md:grid-cols-[120px_1fr] gap-4">
              <div className="text-xs uppercase tracking-widest text-orange-500 font-bold pt-1">Point 02</div>
              <div>
                <h5 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, serif' }}>Spot Metering Precision</h5>
                <p className="text-gray-600">Was the spot meter placed accurately on the target tone? Look for consistency across the three images.</p>
              </div>
            </div>
            <div className="py-6 grid md:grid-cols-[120px_1fr] gap-4">
              <div className="text-xs uppercase tracking-widest text-orange-500 font-bold pt-1">Point 03</div>
              <div>
                <h5 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, serif' }}>Histogram Analysis</h5>
                <p className="text-gray-600">Examine the distribution of tones. Are the highlights clipped or the shadows crushed unnecessarily?</p>
              </div>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-300 uppercase tracking-widest">Ref: REVIEW_V8 // SESSION_08</div>
        </div>

        {/* Focal Length & Distortion */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-8">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">Optics & Perspective</span>
            <h4 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3" style={{ fontFamily: 'Roslindale, serif' }}>
              Focal Length & Distortion
            </h4>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div>
              <div className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-3">Portraiture</div>
              <h5 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, serif' }}>The 85mm Standard</h5>
              <p className="text-sm text-gray-600">85mm gives a natural facial perspective; avoid very wide angles for close portraits.</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-3">Landscape</div>
              <h5 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, serif' }}>Wide-Angle View</h5>
              <p className="text-sm text-gray-600">Wide lenses capture more scene but may introduce edge distortion—compose carefully.</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-3">Wildlife</div>
              <h5 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, serif' }}>Telephoto Reach</h5>
              <p className="text-sm text-gray-600">Use 200mm+ to keep distance; longer glass helps isolate subjects without distortion.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-4">Focal Length Ranges</div>
              <h5 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, serif' }}>Standard Categories</h5>
              <div className="space-y-2">
                {[
                  { label: 'Ultra Wide', range: '14mm – 24mm' },
                  { label: 'Wide', range: '24mm – 35mm' },
                  { label: 'Standard', range: '35mm – 85mm' },
                  { label: 'Telephoto', range: '85mm – 200mm' },
                  { label: 'Super Telephoto', range: '200mm+' },
                ].map(({ label, range }) => (
                  <div key={label} className="flex justify-between py-2 border-b border-gray-100 text-sm">
                    <span className="text-gray-700 font-medium">{label}</span>
                    <span className="text-blue-600 font-semibold">{range}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-4">Distortion Characteristics</div>
              <h5 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, serif' }}>Key Effects</h5>
              <div className="space-y-2">
                {[
                  { left: 'Barrel (Wide)', leftNote: 'Curves outward', right: 'Pincushion (Tele)', rightNote: 'Curves inward' },
                  { left: 'Compression', leftNote: 'Flattens depth', right: 'Expansion', rightNote: 'Exaggerates depth' },
                  { left: 'Vignetting', leftNote: 'Dark corners', right: '', rightNote: '' },
                ].map(({ left, leftNote, right, rightNote }, i) => (
                  <div key={i} className="flex justify-between py-2 border-b border-gray-100 text-sm">
                    <div>
                      <span className="text-gray-700 font-medium">{left}</span>
                      {leftNote && <span className="text-blue-600 ml-2 font-semibold">{leftNote}</span>}
                    </div>
                    {right && (
                      <div>
                        <span className="text-gray-700 font-medium">{right}</span>
                        <span className="text-blue-600 ml-2 font-semibold">{rightNote}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 text-xs text-gray-300 uppercase tracking-widest">Ref: FOCAL_LENGTH_V8 // SESSION_08</div>
        </div>

        {/* APS-C vs Full Frame */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div>
              <div className="mb-6">
                <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">Sensor Science</span>
                <h4 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3" style={{ fontFamily: 'Roslindale, serif' }}>
                  APS-C vs.<br />Full Frame
                </h4>
              </div>
              <p className="text-gray-600 mb-8">
                Most cameras feature either an APS-C or Full Frame sensor. Focal lengths on your lens relate to a Full Frame equivalent, creating a "Crop Factor" on smaller sensors.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-900 text-white rounded-lg p-5">
                  <div className="text-xs uppercase tracking-widest text-orange-400 font-bold mb-3">Canon Crop Factor</div>
                  <div className="text-4xl font-bold mb-4">1.6x</div>
                  <div className="text-xs uppercase tracking-widest text-orange-400 font-bold mb-1">Nikon / Sony / Fuji / Pentax</div>
                  <div className="text-4xl font-bold">1.5x</div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">Technical Equivalents</span>
                <h4 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3" style={{ fontFamily: 'Roslindale, serif' }}>
                  The Math of<br />Perspective
                </h4>
              </div>

              <div className="mb-6">
                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-3">Standard 18-55mm Lens</div>
                <div className="space-y-2">
                  {[
                    { brand: 'Nikon / Sony / Fuji (1.5x)', equiv: '27mm – 83mm' },
                    { brand: 'Canon (1.6x)', equiv: '29mm – 88mm' },
                  ].map(({ brand, equiv }) => (
                    <div key={brand} className="flex justify-between py-2 border-b border-gray-100 text-sm">
                      <span className="text-gray-700">{brand}</span>
                      <span className="text-blue-600 font-semibold">{equiv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-3">Common Focal Lengths (1.5x)</div>
                <div className="space-y-2">
                  {[
                    { prime: '24mm Prime', equiv: '36mm (Wide)' },
                    { prime: '35mm Prime', equiv: '52.5mm (Standard)' },
                    { prime: '50mm Prime', equiv: '75mm (Portrait)' },
                    { prime: '85mm Prime', equiv: '127.5mm (Telephoto)' },
                  ].map(({ prime, equiv }) => (
                    <div key={prime} className="flex justify-between py-2 border-b border-gray-100 text-sm">
                      <span className="text-gray-700">{prime}</span>
                      <span className="text-blue-600 font-semibold">{equiv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Focal Length Effect: APS-C vs. Full Frame */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-8">
            <h4 className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
              Focal Length Effect: APS-C vs. Full Frame
            </h4>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-orange-500 font-bold mb-3">APS-C Sensor (1.5x Crop)</div>
              <h5 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, serif' }}>Narrower Field of View</h5>
              <p className="text-sm text-gray-600 mb-4">On an APS-C sensor, a 50mm lens behaves like a 75mm lens on Full Frame. The crop factor magnifies the subject, so the lens captures only the area within the equivalent crop box.</p>
              <div className="bg-gray-900 text-white rounded-lg p-4">
                <div className="text-xs uppercase tracking-widest text-orange-400 font-bold mb-1">50mm on APS-C (1.5x)</div>
                <div className="text-2xl font-bold">Equivalent: 75mm FF</div>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-3">Full Frame Sensor (Baseline)</div>
              <h5 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, serif' }}>Full Field of View</h5>
              <p className="text-sm text-gray-600 mb-4">On a Full Frame sensor, a 50mm lens captures the true 50mm perspective. This is the baseline for all focal length equivalents.</p>
              <div className="bg-gray-900 text-white rounded-lg p-4">
                <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-1">50mm on Full Frame</div>
                <div className="text-2xl font-bold">True: 50mm</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sensor Size Comparison: 24mm */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <h4 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>
              Sensor Size Comparison for 24mm
            </h4>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900 text-white rounded-lg p-8 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">Full Frame</div>
              <div className="text-4xl font-bold mb-1">24mm = 24mm</div>
              <div className="text-sm text-gray-400">True focal length — no crop</div>
            </div>
            <div className="bg-gray-800 text-white rounded-lg p-8 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-widest text-orange-400 font-bold mb-2">APS-C</div>
              <div className="text-4xl font-bold mb-1">24mm = 36mm</div>
              <div className="text-sm text-gray-400">1.5x crop factor applied</div>
            </div>
          </div>
        </div>

        {/* Focal Length Practical Guide */}
        <div className="mb-8 bg-white rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="mb-8">
            <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">Focal Length Mastery</span>
            <h4 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3" style={{ fontFamily: 'Roslindale, serif' }}>
              Focal Length Practical Guide
            </h4>
          </div>

          <div className="mb-4">
            <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Understanding the Spectrum</span>
          </div>

          <div className="space-y-0 divide-y divide-gray-100">
            {[
              { range: '14–24mm', label: 'Ultra Wide', uses: 'Expansive landscapes, environmental portraits, dramatic perspectives.' },
              { range: '24–35mm', label: 'Wide', uses: 'General landscapes, street photography, architectural work.' },
              { range: '35–85mm', label: 'Standard', uses: 'Portraits, everyday photography, natural perspective.' },
              { range: '85–200mm', label: 'Telephoto', uses: 'Compressed backgrounds, portrait isolation, sports.' },
              { range: '200mm+', label: 'Super Telephoto', uses: 'Wildlife, distant subjects, extreme compression.' },
            ].map(({ range, label, uses }) => (
              <div key={range} className="py-5 grid md:grid-cols-[180px_1fr] gap-4 items-start">
                <div>
                  <div className="text-lg font-bold text-blue-600">{range}</div>
                  <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold mt-0.5">{label}</div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pt-1">{uses}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-xs text-gray-300 uppercase tracking-widest">Ref: FOCAL_LENGTH_GUIDE_V8 // SESSION_08</div>
        </div>
      </div>
    </div>
  );
}
