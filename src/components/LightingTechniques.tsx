import { Link } from 'react-router';
import { ArrowLeft, Sun, Lightbulb, Moon, Sunrise } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function LightingTechniques() {
  return (
    <div className="bg-gradient-to-br from-fuchsia-50/30 via-white to-pink-50/30 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-12">
        {/* Back Button */}
        <Link
          to="/resources"
          className="mb-8 text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Resources
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Lighting Techniques
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Master natural and artificial light for stunning portraits, products, and landscapes
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1768818653161-0ad28dede131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBsaWdodGluZyUyMHBvcnRyYWl0JTIwcGhvdG9ncmFwaHklMjBzZXR1cHxlbnwxfHx8fDE3Njk4MTExODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional studio lighting setup"
            className="w-full h-[400px] sm:h-[500px] object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            The Power of Light
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            The word "photography" literally means "writing with light." Understanding light—its quality, direction, color, and intensity—is fundamental to creating compelling images. Whether you're working with natural sunlight or studio strobes, mastering lighting techniques transforms your photography.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            This guide covers essential lighting patterns, techniques, and setups for portraits, products, and landscapes using both natural and artificial light sources.
          </p>

          <div className="p-6 sm:p-8 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white rounded-xl">
            <p className="text-xl sm:text-2xl italic text-center mb-2">
              "Light makes photography. Embrace light. Admire it. Love it. But above all, know light."
            </p>
            <p className="text-sm text-pink-100 text-center">— George Eastman, Founder of Kodak</p>
          </div>
        </div>

        {/* Understanding Light Quality */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Understanding Light Quality
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-l-4 border-amber-500">
              <div className="flex items-center gap-3 mb-4">
                <Sun className="w-8 h-8 text-amber-600" />
                <h3 className="text-2xl font-bold text-gray-900">Hard Light</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Created by small, direct light sources. Produces strong, defined shadows with high contrast.
              </p>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-white rounded-lg">
                  <p className="font-semibold text-gray-900">Characteristics:</p>
                  <ul className="text-gray-700 mt-1 space-y-1">
                    <li>• Sharp shadow edges</li>
                    <li>• High contrast</li>
                    <li>• Dramatic mood</li>
                    <li>• Emphasizes texture</li>
                  </ul>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="font-semibold text-gray-900">Sources:</p>
                  <p className="text-gray-700 mt-1">Midday sun, bare flash, small light source</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <Moon className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Soft Light</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Created by large, diffused light sources. Produces gentle, gradual shadows with low contrast.
              </p>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-white rounded-lg">
                  <p className="font-semibold text-gray-900">Characteristics:</p>
                  <ul className="text-gray-700 mt-1 space-y-1">
                    <li>• Soft shadow edges</li>
                    <li>• Low contrast</li>
                    <li>• Flattering for portraits</li>
                    <li>• Even, gentle illumination</li>
                  </ul>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="font-semibold text-gray-900">Sources:</p>
                  <p className="text-gray-700 mt-1">Cloudy day, softbox, large window, reflector</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <p className="text-gray-700 text-sm">
              <strong>Pro Tip:</strong> The closer a light source is to your subject, the softer it becomes (relative to subject size). A large window 20 feet away acts like hard light, but the same window 3 feet away creates beautiful soft light.
            </p>
          </div>
        </div>

        {/* Natural Light Techniques */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Natural Light Techniques
          </h2>

          {/* Golden Hour */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <Sunrise className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>Golden Hour</h3>
                <p className="text-gray-600">The photographer's magic time</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  The hour after sunrise and before sunset when sunlight is warm, golden, and directional. Produces stunning, flattering light for portraits and landscapes.
                </p>
                <div className="p-4 bg-amber-50 rounded-lg mb-4">
                  <p className="font-semibold text-gray-900 mb-2">Characteristics:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Warm, golden color temperature</li>
                    <li>• Soft, directional light</li>
                    <li>• Long, dramatic shadows</li>
                    <li>• Natural skin tone enhancement</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Best for:</p>
                  <p className="text-sm text-gray-700">Portraits, landscapes, lifestyle photography, romantic scenes</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1632776088367-d0709928731e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjBob3VyJTIwYmFja2xpZ2h0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY5ODExMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Golden hour backlit photography"
                  className="w-full h-64 object-cover"
                />
                <div className="p-3 bg-gray-100">
                  <p className="text-xs text-gray-700">Golden hour creates warm, glowing backlight</p>
                </div>
              </div>
            </div>
          </div>

          {/* Window Light */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold text-2xl">
                <Sun className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>Window Light</h3>
                <p className="text-gray-600">The natural studio softbox</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Windows provide beautiful, directional soft light—free and available. The size and quality of light depends on window size, time of day, and weather conditions.
                </p>
                <div className="p-4 bg-blue-50 rounded-lg mb-4">
                  <p className="font-semibold text-gray-900 mb-2">Positioning Tips:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 45° angle for classic portrait lighting</li>
                    <li>• 90° (side light) for dramatic mood</li>
                    <li>• Backlighting for rim light effects</li>
                    <li>• Use white walls as natural reflectors</li>
                  </ul>
                </div>
                <div className="p-4 bg-cyan-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Pro Tip:</p>
                  <p className="text-sm text-gray-700">North-facing windows (in Northern Hemisphere) provide consistent, soft light throughout the day.</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1654432673709-849b59084d09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwd2luZG93JTIwbGlnaHQlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2OTgxMTE5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Natural window light portrait"
                  className="w-full h-64 object-cover"
                />
                <div className="p-3 bg-gray-100">
                  <p className="text-xs text-gray-700">Soft, directional window light creates beautiful portraits</p>
                </div>
              </div>
            </div>
          </div>

          {/* Overcast Days */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-500 to-gray-600 flex items-center justify-center text-white font-bold text-2xl">
                <Moon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>Overcast/Cloudy Light</h3>
                <p className="text-gray-600">Nature's giant softbox</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Clouds act as a massive diffuser, creating incredibly soft, even light perfect for portraits and detail work. No harsh shadows to manage.
                </p>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Advantages:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Extremely soft, flattering light</li>
                    <li>• No harsh shadows to manage</li>
                    <li>• Even exposure across scene</li>
                    <li>• Shoot anytime without harsh midday sun</li>
                    <li>• Rich, saturated colors</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Best Subjects:</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Portraits (especially headshots)</li>
                  <li>• Product photography</li>
                  <li>• Macro and detail work</li>
                  <li>• Nature and flowers</li>
                  <li>• Street photography</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Classic Portrait Lighting Patterns */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Classic Portrait Lighting Patterns
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            These timeless lighting patterns work with natural light (windows) or studio lights. Each creates a distinct mood and flatters different face shapes.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Rembrandt Lighting */}
            <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rembrandt Lighting</h3>
              <div className="mb-4 rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1646933597890-c52f3033a230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW1icmFuZHQlMjBsaWdodGluZyUyMHBvcnRyYWl0JTIwZHJhbWF0aWMlMjBzaGFkb3d8ZW58MXx8fHwxNzY5ODExMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Rembrandt lighting portrait example"
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Named after the Dutch painter. Light at 45° creates a triangle of light on the shadowed cheek.
              </p>
              <div className="p-3 bg-white rounded-lg">
                <p className="text-xs text-gray-600"><strong>Key Feature:</strong> Inverted triangle of light on shadow side cheek</p>
                <p className="text-xs text-gray-600 mt-1"><strong>Mood:</strong> Dramatic, moody, classic</p>
              </div>
            </div>

            {/* Loop Lighting */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Loop Lighting</h3>
              <div className="mb-4 rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1654432673709-849b59084d09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwd2luZG93JTIwbGlnaHQlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2OTgxMTE5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Loop lighting portrait example"
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Most popular portrait lighting. Light slightly above and to the side creates a small shadow "loop" from the nose.
              </p>
              <div className="p-3 bg-white rounded-lg">
                <p className="text-xs text-gray-600"><strong>Key Feature:</strong> Small nose shadow angling toward corner of mouth</p>
                <p className="text-xs text-gray-600 mt-1"><strong>Mood:</strong> Natural, flattering, versatile</p>
              </div>
            </div>

            {/* Butterfly/Paramount Lighting */}
            <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border-l-4 border-pink-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Butterfly (Paramount) Lighting</h3>
              <div className="mb-4 rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1768818653161-0ad28dede131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBsaWdodGluZyUyMHBvcnRyYWl0JTIwcGhvdG9ncmFwaHklMjBzZXR1cHxlbnwxfHx8fDE3Njk4MTExODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Butterfly lighting portrait example"
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Light directly in front and above subject. Creates butterfly-shaped shadow under nose. Glamorous Hollywood style.
              </p>
              <div className="p-3 bg-white rounded-lg">
                <p className="text-xs text-gray-600"><strong>Key Feature:</strong> Butterfly shadow under nose, emphasizes cheekbones</p>
                <p className="text-xs text-gray-600 mt-1"><strong>Mood:</strong> Glamorous, beauty, fashion</p>
              </div>
            </div>

            {/* Split Lighting */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Split Lighting</h3>
              <div className="mb-4 rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1646933597890-c52f3033a230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW1icmFuZHQlMjBsaWdodGluZyUyMHBvcnRyYWl0JTIwZHJhbWF0aWMlMjBzaGFkb3d8ZW58MXx8fHwxNzY5ODExMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Split lighting portrait example"
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Light at 90° to subject. Divides face into equal light and shadow halves. Very dramatic and moody.
              </p>
              <div className="p-3 bg-white rounded-lg">
                <p className="text-xs text-gray-600"><strong>Key Feature:</strong> Exactly half face lit, half in shadow</p>
                <p className="text-xs text-gray-600 mt-1"><strong>Mood:</strong> Dramatic, mysterious, edgy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Lighting Setup */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Basic Studio Lighting Setup
          </h2>

          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1763365894901-675a14ca8888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGxpZ2h0aW5nJTIwc2V0dXAlMjBzb2Z0Ym94JTIwdW1icmVsbGF8ZW58MXx8fHwxNzY5ODExMTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Studio lighting equipment and setup"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-amber-600" />
                <h3 className="text-lg font-bold text-gray-900">Key Light</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Your main light source. Typically the brightest light, positioned at 30-45° from subject.
              </p>
              <div className="p-3 bg-white rounded-lg text-xs text-gray-600">
                <strong>Purpose:</strong> Primary illumination and creates main shadows/dimension
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900">Fill Light</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Softer light opposite key light. Fills in shadows created by key light without eliminating them.
              </p>
              <div className="p-3 bg-white rounded-lg text-xs text-gray-600">
                <strong>Purpose:</strong> Reduce contrast, reveal shadow detail, control mood
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-900">Back/Hair Light</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Behind and above subject. Creates separation from background and highlights hair/shoulders.
              </p>
              <div className="p-3 bg-white rounded-lg text-xs text-gray-600">
                <strong>Purpose:</strong> Separate subject from background, add depth, rim light
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-4">Light Modifiers</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="p-3 bg-white rounded-lg">
                <p className="font-semibold text-gray-900">Softbox</p>
                <p className="text-xs text-gray-600 mt-1">Creates soft, directional light. Great for portraits.</p>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <p className="font-semibold text-gray-900">Umbrella</p>
                <p className="text-xs text-gray-600 mt-1">Spreads light broadly. Affordable, versatile.</p>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <p className="font-semibold text-gray-900">Beauty Dish</p>
                <p className="text-xs text-gray-600 mt-1">Between hard and soft. Fashion and beauty standard.</p>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <p className="font-semibold text-gray-900">Reflector</p>
                <p className="text-xs text-gray-600 mt-1">Bounces existing light. No power needed.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Tips */}
        <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-xl p-8 sm:p-12 shadow-sm">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Lighting Tips & Tricks
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Sun className="w-5 h-5 text-fuchsia-600" />
                <span>The Inverse Square Law</span>
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                When you double the distance from light to subject, light intensity decreases by a factor of four. Use this to control light falloff and background brightness.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-fuchsia-600" />
                <span>DIY Reflectors</span>
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Use white walls, foam core boards, aluminum foil, or even white bedsheets as reflectors. Free, effective, and surprisingly professional-looking results.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Moon className="w-5 h-5 text-fuchsia-600" />
                <span>Catchlights Matter</span>
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                The reflection of your light source in the subject's eyes brings life to portraits. Position your key light to create appealing catchlights at 10 or 2 o'clock.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Sunrise className="w-5 h-5 text-fuchsia-600" />
                <span>Direction Creates Mood</span>
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Front lighting is flat and safe. Side lighting is dramatic. Backlighting is ethereal and romantic. Choose direction based on the story you want to tell.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
