import { ArrowLeft, Palette, Heart, Sparkles, Circle, Droplet, Sun, Waves, BookOpen, Camera, CheckCircle2, Info, AlertCircle } from 'lucide-react';
import { Link } from 'react-router';
import { SEO } from './SEO';
import { getSEOConfig } from '../config/seo-config';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ColourTheory() {
  const seoConfig = getSEOConfig('colour-theory');
  
  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoConfig} />
      
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-6">
          <Link 
            to="/resources" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-wide">Back to Resources</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-yellow-50 to-blue-50 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-20 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-red-200">
              <Palette className="w-4 h-4 text-red-600" />
              <span className="text-xs uppercase tracking-wide text-red-600 font-medium">Colour Theory</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Colour Theory for Photographers
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-3xl">
              Harness the emotional power of colour. Learn Kandinsky's colour theory, understand how red, yellow, and blue evoke profound emotions, and create photographs that resonate with viewers on a deeper level.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
        
        {/* Introduction */}
        <div className="max-w-4xl mb-20">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Colour is one of the most powerful tools in photography. Beyond technical accuracy, colour communicates emotion, sets mood, and creates psychological impact. Understanding colour theory transforms how you see, compose, and create meaningful images.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This guide explores colour relationships, emotional associations, and practical techniques for using colour intentionally in your photography.
          </p>
        </div>

        {/* Kandinsky's Colour Theory */}
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-2xl p-8 sm:p-12 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Kandinsky's Colour Theory
            </h2>
          </div>

          <div className="max-w-4xl mb-10">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Wassily Kandinsky, the pioneering abstract artist, believed colours possess inherent emotional and spiritual properties. His theories on colour psychology provide photographers with a framework for creating emotionally resonant images.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Kandinsky associated specific emotions and sensations with each colour, believing they could affect the viewer's inner state as powerfully as music.
            </p>
          </div>

          {/* Kandinsky's Primary Colours */}
          <div className="bg-white rounded-xl p-8 mb-10">
            <h3 className="text-2xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              The Primary Colours: Kandinsky's Emotional Palette
            </h3>

            <div className="space-y-8">
              {/* Red */}
              <div className="border-l-4 border-red-600 pl-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex-shrink-0 shadow-lg"></div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-medium text-gray-900 mb-2">Red: Passion and Energy</h4>
                    <p className="text-gray-700 mb-3">
                      Kandinsky described red as a "living, lively, restless colour" — warm, passionate, and energetic. Red moves toward the viewer with intensity and vitality.
                    </p>
                  </div>
                </div>
                <div className="bg-red-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Emotional Associations:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-2">Positive:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Passion, love, warmth</li>
                        <li>• Energy, excitement, vitality</li>
                        <li>• Strength, power, courage</li>
                        <li>• Action, movement, dynamism</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-2">Negative:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Danger, warning, aggression</li>
                        <li>• Anger, hostility</li>
                        <li>• Heat, intensity (overwhelming)</li>
                        <li>• Urgency, stress</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>In Photography:</strong> Use red to create dramatic focal points, convey passion in portraits, or establish energy in action shots. Red advances in images, commanding attention.
                    </p>
                  </div>
                </div>
              </div>

              {/* Yellow */}
              <div className="border-l-4 border-yellow-500 pl-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex-shrink-0 shadow-lg"></div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-medium text-gray-900 mb-2">Yellow: Joy and Optimism</h4>
                    <p className="text-gray-700 mb-3">
                      Kandinsky saw yellow as the "most disturbing colour" in its pure form — restless, eccentric, and radiating energy like the sun. Yellow expands outward with warmth and luminosity.
                    </p>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Emotional Associations:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-2">Positive:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Joy, happiness, cheerfulness</li>
                        <li>• Optimism, hope, positivity</li>
                        <li>• Warmth, sunshine, light</li>
                        <li>• Energy, enthusiasm, playfulness</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-2">Negative:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Anxiety, restlessness</li>
                        <li>• Caution, cowardice</li>
                        <li>• Instability, madness (in excess)</li>
                        <li>• Overwhelming brightness</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>In Photography:</strong> Yellow evokes happiness and draws the eye. Use it to create uplifting images, highlight subjects, or convey warmth and energy. Best used as accent rather than dominant colour.
                    </p>
                  </div>
                </div>
              </div>

              {/* Blue */}
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex-shrink-0 shadow-lg"></div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-medium text-gray-900 mb-2">Blue: Calm and Spirituality</h4>
                    <p className="text-gray-700 mb-3">
                      Kandinsky described blue as "the heavenly colour" — a colour that recedes, drawing the viewer inward toward infinity and contemplation. Blue is peaceful, spiritual, and introspective.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Emotional Associations:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-2">Positive:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Calm, peace, tranquillity</li>
                        <li>• Trust, loyalty, stability</li>
                        <li>• Depth, spirituality, infinity</li>
                        <li>• Intelligence, wisdom, truth</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-2">Negative:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Sadness, melancholy, depression</li>
                        <li>• Coldness, distance</li>
                        <li>• Isolation, loneliness</li>
                        <li>• Passivity, lack of energy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>In Photography:</strong> Blue creates depth and calm. Use it for peaceful landscapes, contemplative portraits, or to establish a mood of introspection. Blue recedes, making backgrounds feel distant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kandinsky Quote */}
          <div className="bg-white rounded-xl p-8 border-l-4 border-purple-600">
            <blockquote className="text-xl italic text-gray-700 mb-4">
              "Colour is a power which directly influences the soul. Colour is the keyboard, the eyes are the hammers, the soul is the piano with many strings."
            </blockquote>
            <p className="text-gray-600">— Wassily Kandinsky, <em>Concerning the Spiritual in Art</em> (1911)</p>
          </div>
        </div>

        {/* The Colour Wheel */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            The Colour Wheel
          </h2>

          <div className="max-w-4xl mb-10">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The colour wheel is a fundamental tool for understanding colour relationships. It shows how colours relate to each other and helps photographers create harmonious or contrasting colour schemes.
            </p>
          </div>

          {/* Colour Wheel Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl mb-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1661894802883-4bad65bcfcd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvdXIlMjB3aGVlbCUyMHBhaW50JTIwYXJ0aXN0fGVufDF8fHx8MTc2OTk3OTQzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Colour wheel showing primary, secondary, and tertiary colours"
              className="w-full h-[500px] object-cover"
            />
            <div className="bg-white p-4 text-sm text-gray-600 text-center">
              The colour wheel organises colours by their relationships
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Primary Colours */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-red-600"></div>
                <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
                <div className="w-8 h-8 rounded-full bg-blue-600"></div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Primary Colours</h3>
              <p className="text-gray-700 text-sm mb-3">
                Red, Yellow, Blue — cannot be created by mixing other colours. The foundation of all other colours.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Photography use:</strong> Create bold, vibrant images with primary colour schemes
              </p>
            </div>

            {/* Secondary Colours */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-orange-500"></div>
                <div className="w-8 h-8 rounded-full bg-green-600"></div>
                <div className="w-8 h-8 rounded-full bg-purple-600"></div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Secondary Colours</h3>
              <p className="text-gray-700 text-sm mb-3">
                Orange (Red + Yellow), Green (Yellow + Blue), Purple (Blue + Red) — created by mixing two primary colours.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Photography use:</strong> Natural, balanced colour schemes
              </p>
            </div>

            {/* Tertiary Colours */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-red-400"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-600"></div>
                <div className="w-6 h-6 rounded-full bg-green-400"></div>
                <div className="w-6 h-6 rounded-full bg-blue-400"></div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Tertiary Colours</h3>
              <p className="text-gray-700 text-sm mb-3">
                Created by mixing a primary and adjacent secondary colour. Red-orange, yellow-green, blue-purple, etc.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Photography use:</strong> Subtle, sophisticated colour relationships
              </p>
            </div>
          </div>
        </div>

        {/* Colour Relationships */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Colour Relationships
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Complementary */}
            <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full bg-orange-500"></div>
                  <div className="w-10 h-10 rounded-full bg-blue-600"></div>
                </div>
                <h3 className="text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                  Complementary
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Colours opposite each other on the colour wheel. Create maximum contrast and vibration when placed together.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Examples:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Red and Green</li>
                  <li>• Blue and Orange</li>
                  <li>• Yellow and Purple</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Effect:</strong> High impact, energetic, attention-grabbing. Natural examples: sunset (orange/blue), autumn leaves (red/green)
              </p>
            </div>

            {/* Analogous */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full bg-yellow-400"></div>
                  <div className="w-10 h-10 rounded-full bg-orange-400"></div>
                  <div className="w-10 h-10 rounded-full bg-red-500"></div>
                </div>
                <h3 className="text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                  Analogous
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Colours next to each other on the colour wheel. Create harmonious, pleasing colour schemes with subtle variation.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Examples:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Blue, Blue-green, Green</li>
                  <li>• Red, Red-orange, Orange</li>
                  <li>• Yellow, Yellow-green, Green</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Effect:</strong> Harmonious, calming, cohesive. Often found in nature — ocean, forests, sunsets
              </p>
            </div>

            {/* Triadic */}
            <div className="bg-gradient-to-br from-red-50 via-yellow-50 to-blue-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full bg-red-600"></div>
                  <div className="w-10 h-10 rounded-full bg-yellow-400"></div>
                  <div className="w-10 h-10 rounded-full bg-blue-600"></div>
                </div>
                <h3 className="text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                  Triadic
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Three colours evenly spaced on the colour wheel. Creates vibrant, balanced schemes with visual interest.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Examples:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Red, Yellow, Blue (primary)</li>
                  <li>• Orange, Green, Purple (secondary)</li>
                  <li>• Red-orange, Yellow-green, Blue-purple</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Effect:</strong> Vibrant, balanced, energetic. Works well when one colour dominates and others accent
              </p>
            </div>

            {/* Monochromatic */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-900 rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-200"></div>
                  <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                  <div className="w-10 h-10 rounded-full bg-blue-800"></div>
                </div>
                <h3 className="text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                  Monochromatic
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Variations of a single colour through different tints, shades, and tones. Creates cohesive, sophisticated images.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Technique:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Tint: Add white (lighter)</li>
                  <li>• Shade: Add black (darker)</li>
                  <li>• Tone: Add grey (muted)</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Effect:</strong> Elegant, unified, minimalist. Creates mood through colour intensity rather than variety
              </p>
            </div>
          </div>
        </div>

        {/* Emotional Photography with Primary Colours */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-white mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Using Colour to Evoke Emotion
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mb-12">
            Beyond technical colour theory, photographers must understand the psychological and emotional impact of colours. Here's how to use colour intentionally to create powerful emotional responses.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Warm Colours */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-3">Warm Colours</h3>
              <p className="text-gray-300 text-sm mb-4">
                Red, orange, yellow — advance toward the viewer, create energy, warmth, and excitement.
              </p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Create intimacy and closeness</li>
                <li>• Stimulate energy and action</li>
                <li>• Evoke passion and excitement</li>
                <li>• Draw attention and focus</li>
              </ul>
            </div>

            {/* Cool Colours */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-3">Cool Colours</h3>
              <p className="text-gray-300 text-sm mb-4">
                Blue, green, purple — recede from the viewer, create calm, distance, and introspection.
              </p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Create depth and distance</li>
                <li>• Evoke calm and tranquillity</li>
                <li>• Suggest professionalism</li>
                <li>• Encourage contemplation</li>
              </ul>
            </div>

            {/* Neutral Colours */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center mb-4">
                <Circle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-3">Neutral Colours</h3>
              <p className="text-gray-300 text-sm mb-4">
                Black, white, grey, brown — provide balance, sophistication, and let other colours shine.
              </p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Create elegance and timelessness</li>
                <li>• Provide visual rest</li>
                <li>• Support other colours</li>
                <li>• Establish mood and tone</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Student Projects - Kandinsky-Inspired */}
        <div className="bg-gradient-to-br from-red-50 via-yellow-50 to-blue-50 rounded-2xl p-8 sm:p-12 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-blue-600 flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Student Projects: Emotional Colour Photography
            </h2>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mb-10">
            These projects challenge you to create photographs using red, yellow, and blue to evoke specific emotions, inspired by Kandinsky's colour theory. Focus on capturing the emotional essence of each colour.
          </p>

          <div className="space-y-8">
            {/* Project 1: Red - Passion */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Project Red: Capture Passion and Energy
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Create a series of photographs where red is the dominant colour. Your goal is to evoke feelings of passion, energy, vitality, or intensity.
                  </p>
                </div>
              </div>

              {/* Red Example Image */}
              <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1765658737231-0af03872246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwcmVkJTIwZW1vdGlvbiUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2OTk3OTQzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Vibrant red photography evoking passion and energy"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Assignment Requirements:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Create 5-10 images featuring red as the dominant colour</li>
                    <li>• Red should occupy at least 40% of the frame</li>
                    <li>• Focus on subjects that naturally evoke emotion (people, flowers, objects)</li>
                    <li>• Experiment with different shades: bright red, deep crimson, scarlet</li>
                    <li>• Consider lighting: how does it affect red's intensity?</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Subject Ideas:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Red flowers (roses, poppies, tulips)</li>
                    <li>• Red clothing or fabric in motion</li>
                    <li>• Red architecture or urban details</li>
                    <li>• Red food (strawberries, tomatoes, peppers)</li>
                    <li>• Red light at sunset or artificial sources</li>
                    <li>• Red objects against contrasting backgrounds</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 text-white rounded-lg p-6 mt-6">
                <p className="font-medium mb-2">Reflection Questions:</p>
                <ul className="text-sm space-y-1">
                  <li>• What emotions does your red photograph evoke?</li>
                  <li>• How does the intensity of red change the emotional impact?</li>
                  <li>• Did you use complementary colours (green) to enhance the red?</li>
                  <li>• How does lighting affect the warmth or coolness of red?</li>
                </ul>
              </div>
            </div>

            {/* Project 2: Yellow - Joy */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Project Yellow: Capture Joy and Optimism
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Create a series of photographs where yellow is the dominant colour. Your goal is to evoke feelings of joy, happiness, warmth, or playfulness.
                  </p>
                </div>
              </div>

              {/* Yellow Example Image */}
              <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1669662491520-fa39cfb0f277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjB5ZWxsb3clMjBoYXBwaW5lc3MlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3Njk5Nzk0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Bright yellow photography evoking joy and happiness"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Assignment Requirements:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Create 5-10 images featuring yellow as the primary colour</li>
                    <li>• Capture the luminous, radiant quality of yellow</li>
                    <li>• Explore how yellow interacts with light</li>
                    <li>• Use yellow as accent colour in some images for comparison</li>
                    <li>• Photograph during golden hour for natural yellow light</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Subject Ideas:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Sunflowers, daffodils, or dandelions</li>
                    <li>• Yellow buildings or doors</li>
                    <li>• Autumn leaves in golden light</li>
                    <li>• Yellow balloons, umbrellas, or clothing</li>
                    <li>• Lemons, bananas, or corn</li>
                    <li>• Golden hour landscapes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 text-white rounded-lg p-6 mt-6">
                <p className="font-medium mb-2">Reflection Questions:</p>
                <ul className="text-sm space-y-1">
                  <li>• Does your image feel uplifting and optimistic?</li>
                  <li>• How does yellow change in different lighting conditions?</li>
                  <li>• Did you use purple (complementary) to make yellow pop?</li>
                  <li>• Is yellow overwhelming or balanced in your composition?</li>
                </ul>
              </div>
            </div>

            {/* Project 3: Blue - Calm */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Project Blue: Capture Calm and Spirituality
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Create a series of photographs where blue is the dominant colour. Your goal is to evoke feelings of calm, peace, depth, or contemplation.
                  </p>
                </div>
              </div>

              {/* Blue Example Image */}
              <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1768463852214-5f300e733c41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwYmx1ZSUyMGNhbG0lMjBzZXJlbmUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3Njk5Nzk0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Deep blue photography evoking calm and serenity"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Assignment Requirements:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Create 5-10 images featuring blue as the dominant colour</li>
                    <li>• Capture the receding, peaceful quality of blue</li>
                    <li>• Explore different blues: navy, cerulean, sky blue, teal</li>
                    <li>• Focus on creating depth and atmosphere</li>
                    <li>• Photograph during blue hour for ethereal blue light</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Subject Ideas:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Ocean, lakes, or water reflections</li>
                    <li>• Sky at different times (dawn, day, dusk)</li>
                    <li>• Blue flowers (hydrangeas, delphiniums)</li>
                    <li>• Blue architecture or painted surfaces</li>
                    <li>• Blue hour cityscapes</li>
                    <li>• Ice, frost, or winter scenes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 text-white rounded-lg p-6 mt-6">
                <p className="font-medium mb-2">Reflection Questions:</p>
                <ul className="text-sm space-y-1">
                  <li>• Does your image feel peaceful and contemplative?</li>
                  <li>• How does blue create a sense of depth or distance?</li>
                  <li>• Did you use orange (complementary) to add warmth?</li>
                  <li>• How does the shade of blue affect the mood (dark vs light)?</li>
                </ul>
              </div>
            </div>

            {/* Project 4: Triadic Challenge */}
            <div className="bg-white rounded-xl p-8 border-4 border-purple-600">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Advanced Project: Triadic Harmony (Red + Yellow + Blue)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Create a single photograph or series that incorporates all three primary colours — red, yellow, and blue — in a balanced, harmonious composition that evokes complex emotions.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-purple-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Assignment Requirements:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• All three primary colours must be present</li>
                    <li>• One colour should dominate (60%), one support (30%), one accent (10%)</li>
                    <li>• Colours should work together, not compete</li>
                    <li>• Create 3-5 images exploring this relationship</li>
                    <li>• Focus on emotional impact of the combination</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Composition Tips:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Use blue as background (recedes)</li>
                    <li>• Place red as focal point (advances)</li>
                    <li>• Add yellow as highlight or accent</li>
                    <li>• Look for scenes with natural triadic balance</li>
                    <li>• Consider toy stores, playgrounds, festivals</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-100 via-yellow-100 to-blue-100 rounded-lg p-6">
                <p className="font-medium text-gray-900 mb-2">The Ultimate Challenge:</p>
                <p className="text-sm text-gray-700 mb-3">
                  Following Kandinsky's belief that colours influence the soul like music, try to create a photograph that evokes a specific emotion through the interaction of red, yellow, and blue.
                </p>
                <p className="text-sm text-gray-700 italic">
                  "The harmony of colours can only be based on the principle of purposefully touching the human soul." — Wassily Kandinsky
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Tips */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Practical Colour Photography Tips
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Shoot in RAW</h3>
                  <p className="text-gray-700 text-sm">
                    RAW files preserve all colour information, giving you maximum flexibility to adjust colour temperature, saturation, and hue in post-processing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Use Correct White Balance</h3>
                  <p className="text-gray-700 text-sm">
                    Proper white balance ensures colours appear accurate and true to your vision. Adjust in-camera or in post for creative effect.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Simplify Your Palette</h3>
                  <p className="text-gray-700 text-sm">
                    Powerful colour photography often uses 2-3 colours maximum. Too many colours create visual chaos and dilute emotional impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Study Light Quality</h3>
                  <p className="text-gray-700 text-sm">
                    Golden hour light warms colours. Blue hour cools them. Overcast light saturates them. Understand how light affects colour perception.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Calibrate Your Monitor</h3>
                  <p className="text-gray-700 text-sm">
                    An uncalibrated monitor shows inaccurate colours. Use a calibration tool to ensure your colour editing reflects reality.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Create a Mood Board</h3>
                  <p className="text-gray-700 text-sm">
                    Collect images with colour palettes you love. Analyse why they work. Use them as inspiration for your own colour photography.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-8 sm:p-12 text-white mb-20">
          <h2 className="text-3xl sm:text-4xl tracking-tight mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Key Takeaways
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Colour communicates emotion</p>
                <p className="text-gray-300">Kandinsky believed colours affect the soul. Use red for passion, yellow for joy, blue for calm — choose colours intentionally to evoke specific feelings.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Understand colour relationships</p>
                <p className="text-gray-300">Complementary colours create contrast, analogous colours create harmony, triadic colours create balance. Use the colour wheel strategically.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Warm colours advance, cool colours recede</p>
                <p className="text-gray-300">Red, orange, and yellow draw attention and feel close. Blue, green, and purple create depth and feel distant. Use this for composition.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Less is more with colour</p>
                <p className="text-gray-300">Powerful colour photography uses restraint. Limit your palette to 2-3 colours for maximum impact and emotional clarity.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Practice seeing in colour</p>
                <p className="text-gray-300">Train your eye to notice colour relationships in everyday life. The best colour photographs come from photographers who see the world through colour.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Resources */}
        <div className="pt-20 border-t border-gray-200">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Related Resources
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to="/resources/white-balance"
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                White Balance Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Master white balance for accurate colour rendering in all lighting conditions
              </p>
            </Link>

            <Link
              to="/resources/composition-guide"
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                Composition Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Learn to compose images using colour as a compositional element
              </p>
            </Link>

            <Link
              to="/resources/lighting-techniques"
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                Lighting Techniques
              </h3>
              <p className="text-gray-600 text-sm">
                Understand how light quality affects colour saturation and mood
              </p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
