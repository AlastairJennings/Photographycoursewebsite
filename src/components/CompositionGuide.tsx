import { Link } from 'react-router';
import { ArrowLeft, Grid3x3, Maximize2, Move, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CompositionGuide() {
  return (
    <div className="bg-gradient-to-br from-orange-50/30 via-white to-red-50/30 min-h-screen">
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
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            Composition Quick Reference
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Essential rules and techniques for creating compelling photographs
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1557684753-3fddcaf72e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWxlJTIwb2YlMjB0aGlyZHMlMjBjb21wb3NpdGlvbiUyMGdyaWQlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3Njk4MTExODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Photography composition grid overlay"
            className="w-full h-[400px] sm:h-[500px] object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            What Makes a Great Composition?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            Composition is the intentional arrangement of visual elements within your frame. It's the difference between <strong>taking</strong> a picture and <strong>making</strong> a photograph. Good composition guides your viewer's eye, creates visual interest, and communicates your intended message.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            These rules are not rigid laws but proven guidelines that help create balanced, engaging images. Once you understand them, you'll know when—and how—to break them for creative effect.
          </p>

          <div className="p-6 sm:p-8 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl">
            <p className="text-xl sm:text-2xl italic text-center">
              "Learn the rules like a pro, so you can break them like an artist."
            </p>
            <p className="text-sm text-orange-100 text-center mt-2">— Pablo Picasso</p>
          </div>
        </div>

        {/* The 10 Essential Rules */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            10 Essential Composition Rules
          </h2>

          {/* Rule 1: Rule of Thirds */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-2xl">
                01
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>Rule of Thirds</h3>
                <p className="text-gray-600">The foundation of compositional balance</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Divide your frame into a 3x3 grid using two horizontal and two vertical lines. Place your subject or key elements along these lines or at their intersections (power points).
                </p>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Why it works:</p>
                  <p className="text-sm text-gray-700">Creates visual tension and interest. Centered subjects can feel static; off-center placement adds dynamism.</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1557684753-3fddcaf72e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWxlJTIwb2YlMjB0aGlyZHMlMjBjb21wb3NpdGlvbiUyMGdyaWQlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3Njk4MTExODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Rule of thirds example"
                  className="w-full h-64 object-cover"
                />
                <div className="p-3 bg-gray-100">
                  <p className="text-xs text-gray-700">Horizon on the bottom third, subject on the right power point</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rule 2: Leading Lines */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl">
                02
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>Leading Lines</h3>
                <p className="text-gray-600">Guide the viewer's eye through your image</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Use natural or man-made lines to draw the viewer's eye toward your main subject. Roads, rivers, fences, shadows, and architectural elements all create visual paths.
                </p>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Common leading lines:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Roads and pathways</li>
                    <li>• Rivers and shorelines</li>
                    <li>• Fences and railings</li>
                    <li>• Architectural elements</li>
                    <li>• Shadows and light beams</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1583669764660-2b6aacbf9814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkaW5nJTIwbGluZXMlMjBwaG90b2dyYXBoeSUyMGNvbXBvc2l0aW9uJTIwZXhhbXBsZXxlbnwxfHx8fDE3Njk4MTExODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Leading lines example"
                  className="w-full h-64 object-cover"
                />
                <div className="p-3 bg-gray-100">
                  <p className="text-xs text-gray-700">Pathway creates a natural leading line toward the subject</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rule 3: Symmetry and Patterns */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl">
                03
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>Symmetry & Patterns</h3>
                <p className="text-gray-600">Create harmony and visual rhythm</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Symmetrical compositions create a sense of balance and harmony. Patterns—whether natural or man-made—draw the eye and create visual interest through repetition.
                </p>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Pro tip:</p>
                  <p className="text-sm text-gray-700">Breaking a pattern with an unexpected element can create even more impact than the pattern alone.</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760943852235-9366304cd5e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeW1tZXRyeSUyMHBhdHRlcm4lMjBhcmNoaXRlY3R1cmFsJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY5ODExMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Symmetry and patterns example"
                  className="w-full h-64 object-cover"
                />
                <div className="p-3 bg-gray-100">
                  <p className="text-xs text-gray-700">Perfect symmetry creates a powerful, balanced composition</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rule 4: Fill the Frame */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-2xl">
                04
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>Fill the Frame</h3>
                <p className="text-gray-600">Get closer to eliminate distractions</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Move closer to your subject or zoom in to eliminate unnecessary elements. Filling the frame creates intimacy and forces viewers to engage with your subject.
                </p>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2 italic">"If your pictures aren't good enough, you're not close enough."</p>
                  <p className="text-xs text-gray-600 mt-2">— Robert Capa, War Photographer</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1657554748109-ea59d63bc9b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXB0aCUyMG9mJTIwZmllbGQlMjBib2tlaCUyMHNoYWxsb3clMjBmb2N1cyUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2OTgxMTE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Fill the frame example"
                  className="w-full h-64 object-cover"
                />
                <div className="p-3 bg-gray-100">
                  <p className="text-xs text-gray-700">Close-up eliminates distractions and creates impact</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rule 5: Negative Space */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-500 to-gray-600 flex items-center justify-center text-white font-bold text-2xl">
                05
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Roslindale, serif' }}>Negative Space</h3>
                <p className="text-gray-600">Give your subject room to breathe</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  The opposite of filling the frame—intentionally leave empty space around your subject. This creates a sense of isolation, scale, or contemplation.
                </p>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">When to use:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Minimalist photography</li>
                    <li>• Emphasizing solitude or isolation</li>
                    <li>• Creating breathing room</li>
                    <li>• Drawing attention to a small subject</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1557684753-3fddcaf72e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWxlJTIwb2YlMjB0aGlyZHMlMjBjb21wb3NpdGlvbiUyMGdyaWQlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3Njk4MTExODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Negative space example"
                  className="w-full h-64 object-cover"
                />
                <div className="p-3 bg-gray-100">
                  <p className="text-xs text-gray-700">Empty space emphasizes the subject and creates mood</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Grid of Remaining Rules */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-l-4 border-amber-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-bold text-amber-600">06</span>
                <h4 className="text-xl font-bold text-gray-900">Framing Within a Frame</h4>
              </div>
              <p className="text-sm text-gray-700">Use natural frames like doorways, windows, or arches to draw attention to your subject and add depth.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border-l-4 border-rose-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-bold text-rose-600">07</span>
                <h4 className="text-xl font-bold text-gray-900">Depth & Layers</h4>
              </div>
              <p className="text-sm text-gray-700">Create depth by including foreground, middle ground, and background elements. This adds dimension to 2D images.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border-l-4 border-indigo-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-bold text-indigo-600">08</span>
                <h4 className="text-xl font-bold text-gray-900">Perspective & Angle</h4>
              </div>
              <p className="text-sm text-gray-700">Change your shooting height. Low angles make subjects powerful; high angles show vulnerability or context.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border-l-4 border-teal-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-bold text-teal-600">09</span>
                <h4 className="text-xl font-bold text-gray-900">Balance & Symmetry</h4>
              </div>
              <p className="text-sm text-gray-700">Distribute visual weight evenly (symmetrical) or unevenly with counterbalance (asymmetrical) for equilibrium.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border-l-4 border-violet-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-bold text-violet-600">10</span>
                <h4 className="text-xl font-bold text-gray-900">Simplify</h4>
              </div>
              <p className="text-sm text-gray-700">When in doubt, simplify. Remove anything that doesn't contribute to your message. Less is often more.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-xl border-l-4 border-gray-400">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-bold text-gray-300">+1</span>
                <h4 className="text-xl font-bold text-white">Break the Rules</h4>
              </div>
              <p className="text-sm text-gray-200">Once you know the rules, experiment with breaking them intentionally for creative effect and personal style.</p>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            Common Composition Mistakes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-red-600">✗</span>
                <span>Centering Everything</span>
              </h3>
              <p className="text-sm text-gray-700 mb-2">Placing your subject dead center creates static, boring images.</p>
              <p className="text-xs text-green-700"><strong>Solution:</strong> Use the rule of thirds for more dynamic placement.</p>
            </div>

            <div className="p-6 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-red-600">✗</span>
                <span>Cluttered Backgrounds</span>
              </h3>
              <p className="text-sm text-gray-700 mb-2">Distracting elements compete for attention with your subject.</p>
              <p className="text-xs text-green-700"><strong>Solution:</strong> Move closer, change angle, or use shallow depth of field.</p>
            </div>

            <div className="p-6 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-red-600">✗</span>
                <span>Merging Elements</span>
              </h3>
              <p className="text-sm text-gray-700 mb-2">Trees "growing" out of heads, poles bisecting subjects.</p>
              <p className="text-xs text-green-700"><strong>Solution:</strong> Move yourself or your subject to separate visual elements.</p>
            </div>

            <div className="p-6 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-red-600">✗</span>
                <span>Too Much Empty Space</span>
              </h3>
              <p className="text-sm text-gray-700 mb-2">Excessive negative space without purpose makes subject feel lost.</p>
              <p className="text-xs text-green-700"><strong>Solution:</strong> Use negative space intentionally, not accidentally.</p>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 sm:p-12 shadow-sm">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            Composition Practice Challenges
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Grid3x3 className="w-5 h-5 text-orange-600" />
                <span>The Grid Challenge</span>
              </h3>
              <p className="text-sm text-gray-700">
                Enable your camera's grid overlay. For one week, only take photos where your subject aligns with the grid lines or intersections. Train your eye to see composition.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-orange-600" />
                <span>One Rule, Ten Photos</span>
              </h3>
              <p className="text-sm text-gray-700">
                Choose one composition rule. Take 10 different photos that demonstrate that rule in different ways. This deepens your understanding of each technique.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Move className="w-5 h-5 text-orange-600" />
                <span>The Same Subject Challenge</span>
              </h3>
              <p className="text-sm text-gray-700">
                Find one interesting subject. Photograph it using 5 different composition techniques. See how dramatically composition changes the story.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Maximize2 className="w-5 h-5 text-orange-600" />
                <span>Break the Rules Day</span>
              </h3>
              <p className="text-sm text-gray-700">
                Once you've mastered the rules, intentionally break them. Center everything. Avoid leading lines. Create chaos. Learn what works by exploring what doesn't.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
