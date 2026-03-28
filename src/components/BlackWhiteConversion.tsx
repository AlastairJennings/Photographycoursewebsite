import { ArrowLeft, Layers, Sliders, CircleDot, Square, Eye, Camera, BookOpen, CheckCircle2, Info, AlertCircle, Palette } from 'lucide-react';
import { Link } from 'react-router';
import { SEO } from './SEO';
import { getSEOConfig } from '../config/seo-config';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BlackWhiteConversion() {
  const seoConfig = getSEOConfig('black-white-conversion');
  
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
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-20 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/30">
              <Layers className="w-4 h-4 text-white" />
              <span className="text-xs uppercase tracking-wide text-white font-medium">Black & White Conversion</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white mb-8 leading-tight" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Black & White Conversion
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-3xl">
              Master the art of monochrome photography. Learn Ansel Adams' Zone System, understand tonal relationships, and create powerful black and white images that transcend colour.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
        
        {/* Introduction */}
        <div className="max-w-4xl mb-20">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Black and white photography strips away the distraction of colour, revealing the essence of form, texture, contrast, and light. By eliminating colour, you force viewers to focus on composition, tonal relationships, and emotional content.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This guide explores the Zone System developed by Ansel Adams, conversion techniques, and how to create compelling monochrome images in the digital age.
          </p>
        </div>

        {/* Why Black and White */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Why Shoot Black & White?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Emphasises Form and Texture</h3>
              <p className="text-gray-700 text-sm">
                Without colour, shapes, patterns, and textures become primary visual elements. Black and white reveals the structure and geometry of your subjects.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mb-4">
                <Sliders className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Creates Timeless Images</h3>
              <p className="text-gray-700 text-sm">
                Black and white photographs feel classic and timeless. They remove temporal cues that colour often provides, creating images that transcend specific eras.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mb-4">
                <CircleDot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Enhances Mood and Drama</h3>
              <p className="text-gray-700 text-sm">
                Monochrome images excel at conveying emotion and atmosphere. High contrast creates drama, low contrast evokes subtlety and softness.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Simplifies Complex Scenes</h3>
              <p className="text-gray-700 text-sm">
                Colour can be distracting. Black and white simplifies busy scenes, helping viewers focus on your intended subject and compositional elements.
              </p>
            </div>
          </div>
        </div>

        {/* The Zone System - Major Section */}
        <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 rounded-2xl p-8 sm:p-12 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <Square className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              The Zone System
            </h2>
          </div>

          <div className="max-w-4xl mb-10">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Developed by Ansel Adams and Fred Archer in 1939, the Zone System is a framework for controlling exposure and development to achieve precise tonal values in black and white photography. It divides the tonal range into 11 zones from pure black to pure white.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Though created for film photography, the Zone System principles remain invaluable for digital photographers, providing a methodical approach to exposure and contrast control.
            </p>
          </div>

          {/* Hero Image: Dramatic Black and White Landscape */}
          <div className="rounded-xl overflow-hidden shadow-xl mb-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1744489467461-8335ad5c628e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBwaG90b2dyYXBoeSUyMHlvc2VtaXRlJTIwbW91bnRhaW5zJTIwZHJhbWF0aWN8ZW58MXx8fHwxNzY5OTc5NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Dramatic black and white landscape showing full tonal range"
              className="w-full h-[500px] object-cover"
            />
            <div className="bg-white p-4 text-sm text-gray-600 text-center">
              Landscape photography demonstrating the full tonal range from deep shadows to bright highlights
            </div>
          </div>

          {/* Understanding the 11 Zones */}
          <div className="bg-white rounded-xl p-8 mb-10">
            <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              The 11 Zones Explained
            </h3>
            
            <p className="text-gray-700 mb-6">
              Each zone represents one stop of exposure difference. Zone V is your starting point — middle grey at 18% reflectance, the tone your camera's meter aims for.
            </p>

            {/* Zone Chart */}
            <div className="space-y-3 mb-8">
              {/* Zone 0 */}
              <div className="flex items-start gap-4 bg-black text-white rounded-lg p-4">
                <div className="w-16 h-16 flex-shrink-0 bg-black border border-white rounded"></div>
                <div>
                  <p className="font-bold mb-1">Zone 0 — Pure Black</p>
                  <p className="text-sm text-gray-300">Maximum black, no detail. Complete shadow areas with no texture or information.</p>
                </div>
              </div>

              {/* Zone I */}
              <div className="flex items-start gap-4 bg-gray-900 text-white rounded-lg p-4">
                <div className="w-16 h-16 flex-shrink-0 bg-gray-900 border border-gray-700 rounded"></div>
                <div>
                  <p className="font-bold mb-1">Zone I — Near Black</p>
                  <p className="text-sm text-gray-300">Almost black with barely perceptible tonality. First hint of texture without true detail.</p>
                </div>
              </div>

              {/* Zone II */}
              <div className="flex items-start gap-4 bg-gray-800 text-white rounded-lg p-4">
                <div className="w-16 h-16 flex-shrink-0 bg-gray-800 border border-gray-600 rounded"></div>
                <div>
                  <p className="font-bold mb-1">Zone II — First Detail in Shadows</p>
                  <p className="text-sm text-gray-300">Darkest area where texture becomes visible. Deep shadows with slight detail.</p>
                  <p className="text-xs text-gray-400 mt-1">Example: Dark tree bark, deep shadow in fabric folds</p>
                </div>
              </div>

              {/* Zone III */}
              <div className="flex items-start gap-4 bg-gray-700 text-white rounded-lg p-4">
                <div className="w-16 h-16 flex-shrink-0 bg-gray-700 border border-gray-500 rounded"></div>
                <div>
                  <p className="font-bold mb-1">Zone III — Average Dark Materials</p>
                  <p className="text-sm text-gray-300">Dark materials with full texture and detail visible. Good shadow detail.</p>
                  <p className="text-xs text-gray-400 mt-1">Example: Dark foliage, black clothing with texture, shadowed areas with detail</p>
                </div>
              </div>

              {/* Zone IV */}
              <div className="flex items-start gap-4 bg-gray-600 text-white rounded-lg p-4">
                <div className="w-16 h-16 flex-shrink-0 bg-gray-600 border border-gray-400 rounded"></div>
                <div>
                  <p className="font-bold mb-1">Zone IV — Dark Grey</p>
                  <p className="text-sm text-gray-300">Average dark foliage, dark stone, or shadow on light-toned subjects. Rich with detail.</p>
                  <p className="text-xs text-gray-400 mt-1">Example: Shaded green grass, dark skin tones, weathered wood</p>
                </div>
              </div>

              {/* Zone V - Middle Grey */}
              <div className="flex items-start gap-4 bg-gray-500 text-white rounded-lg p-4 border-4 border-blue-600">
                <div className="w-16 h-16 flex-shrink-0 bg-gray-500 border border-gray-400 rounded"></div>
                <div>
                  <p className="font-bold mb-1">Zone V — Middle Grey (18% Grey Card)</p>
                  <p className="text-sm mb-2">The pivotal zone. Clear north sky, dark skin, grey stone. Where your camera meter aims.</p>
                  <div className="bg-blue-900 rounded px-3 py-2 text-xs">
                    <strong>Critical:</strong> This is your reference point. All other zones are measured relative to Zone V.
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Example: 18% grey card, clear blue sky, weathered concrete</p>
                </div>
              </div>

              {/* Zone VI */}
              <div className="flex items-start gap-4 bg-gray-400 text-gray-900 rounded-lg p-4">
                <div className="w-16 h-16 flex-shrink-0 bg-gray-400 border border-gray-500 rounded"></div>
                <div>
                  <p className="font-bold mb-1">Zone VI — Light Grey</p>
                  <p className="text-sm text-gray-700">Average Caucasian skin in sunlight, light stone, shadows on snow. One stop brighter than middle grey.</p>
                  <p className="text-xs text-gray-600 mt-1">Example: Light skin tones, overcast sky, painted white surfaces in shadow</p>
                </div>
              </div>

              {/* Zone VII */}
              <div className="flex items-start gap-4 bg-gray-300 text-gray-900 rounded-lg p-4">
                <div className="w-16 h-16 flex-shrink-0 bg-gray-300 border border-gray-400 rounded"></div>
                <div>
                  <p className="font-bold mb-1">Zone VII — Very Light Grey</p>
                  <p className="text-sm text-gray-700">Very light objects with visible texture. Lightest areas that still show detail and substance.</p>
                  <p className="text-xs text-gray-600 mt-1">Example: Snow in shade, white clothing with texture, light-coloured sand</p>
                </div>
              </div>

              {/* Zone VIII */}
              <div className="flex items-start gap-4 bg-gray-200 text-gray-900 rounded-lg p-4">
                <div className="w-16 h-16 flex-shrink-0 bg-gray-200 border border-gray-300 rounded"></div>
                <div>
                  <p className="font-bold mb-1">Zone VIII — Very Light with Slight Texture</p>
                  <p className="text-sm text-gray-700">High-key values with delicate texture. Last zone where texture is discernible.</p>
                  <p className="text-xs text-gray-600 mt-1">Example: Snow in sunlight, white shirt in bright light, highlights on chrome</p>
                </div>
              </div>

              {/* Zone IX */}
              <div className="flex items-start gap-4 bg-gray-100 text-gray-900 rounded-lg p-4">
                <div className="w-16 h-16 flex-shrink-0 bg-gray-100 border border-gray-200 rounded"></div>
                <div>
                  <p className="font-bold mb-1">Zone IX — Near White</p>
                  <p className="text-sm text-gray-700">Almost pure white with barely perceptible tonality. Slight texture without true detail.</p>
                  <p className="text-xs text-gray-600 mt-1">Example: Glaring snow, bright light sources, specular highlights</p>
                </div>
              </div>

              {/* Zone X */}
              <div className="flex items-start gap-4 bg-white text-gray-900 rounded-lg p-4 border border-gray-200">
                <div className="w-16 h-16 flex-shrink-0 bg-white border border-gray-300 rounded"></div>
                <div>
                  <p className="font-bold mb-1">Zone X — Pure White</p>
                  <p className="text-sm text-gray-700">Maximum white, paper base, blown highlights. No detail or texture, just pure white.</p>
                  <p className="text-xs text-gray-600 mt-1">Example: Light sources, specular reflections, paper white</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 mb-2">Key Concept: "Expose for the Shadows, Develop for the Highlights"</p>
                  <p className="text-sm text-gray-700 mb-3">
                    Adams' famous mantra for film photography. In digital, it translates to: expose to preserve shadow detail (you can always reduce highlights in post), then adjust contrast and tones during conversion.
                  </p>
                  <p className="text-sm text-gray-700">
                    Most images should contain a range of zones, though not necessarily all 11. The full tonal range from Zone II to Zone VIII typically produces rich, detailed images.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Using the Zone System in Digital Photography */}
          <div className="bg-white rounded-xl p-8 mb-10">
            <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Applying the Zone System in Digital Photography
            </h3>

            <div className="space-y-6">
              <div className="border-l-4 border-gray-700 pl-6">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Step 1: Visualise in Zones</h4>
                <p className="text-gray-700 mb-3">
                  Before shooting, look at your scene and identify which zones different elements should fall into. Where do you want shadow detail? What should be pure white?
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Practice:</strong> Point your camera's spot meter at different parts of the scene. Note the exposure readings. Elements with similar reflectance should meter similarly.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-gray-700 pl-6">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Step 2: Meter for Zone V</h4>
                <p className="text-gray-700 mb-3">
                  Use your camera's spot meter to measure a middle-toned area (Zone V). This becomes your baseline exposure.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Tip:</strong> An 18% grey card in your scene's lighting is perfect. Alternatively, find something that should be middle grey — grass, stone, blue sky.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-gray-700 pl-6">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Step 3: Place Your Subject</h4>
                <p className="text-gray-700 mb-3">
                  Decide which zone your main subject should occupy, then adjust exposure accordingly. Each stop change moves elements one zone up or down.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Example:</strong> Want dark foliage (naturally Zone IV) to appear in Zone III for a moodier image?
                  </p>
                  <p className="text-sm text-gray-700">
                    Meter the foliage (camera will try to make it Zone V), then underexpose by 2 stops to place it in Zone III.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-gray-700 pl-6">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Step 4: Check Your Histogram</h4>
                <p className="text-gray-700 mb-3">
                  The histogram is your digital zone system visualiser. Left side = shadows (Zones 0-IV), middle = middle tones (Zone V), right = highlights (Zones VI-X).
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Goal:</strong> Data should extend across most of the histogram without clipping at either end (unless you intentionally want pure black or white).
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-gray-700 pl-6">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Step 5: Develop with Zones in Mind</h4>
                <p className="text-gray-700 mb-3">
                  During black and white conversion, adjust contrast and tones to achieve your visualised zone distribution. Use curves to control individual zones precisely.
                </p>
              </div>
            </div>
          </div>

          {/* Ansel Adams Quote */}
          <div className="bg-white rounded-xl p-8 border-l-4 border-gray-700">
            <blockquote className="text-xl italic text-gray-700 mb-4">
              "The negative is the equivalent of the composer's score, and the print the performance."
            </blockquote>
            <p className="text-gray-600">— Ansel Adams</p>
            <p className="text-sm text-gray-600 mt-4">
              In digital photography, your RAW file is the score, and your black and white conversion is the performance. The Zone System gives you the tools to conduct that performance with precision.
            </p>
          </div>
        </div>

        {/* Black and White Conversion Techniques */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Conversion Techniques
          </h2>

          <div className="max-w-4xl mb-10">
            <p className="text-lg text-gray-700 leading-relaxed">
              Not all black and white conversions are equal. Here are the main methods, from basic to advanced.
            </p>
          </div>

          {/* Conversion Method Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Desaturate - Poor Method */}
            <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-medium text-gray-900">Desaturate (Avoid)</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Simply removing saturation treats all colours equally, resulting in flat, lifeless images with poor tonal separation.
              </p>
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Why avoid:</strong> Red and green objects that appear different in colour may render as identical grey tones. No creative control over tonal relationships.
                </p>
              </div>
            </div>

            {/* Greyscale Mode - Basic */}
            <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-yellow-200">
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6 text-yellow-600" />
                <h3 className="text-xl font-medium text-gray-900">Greyscale Mode (Basic)</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Converting to greyscale mode uses a predetermined formula to convert colours. Better than desaturate but still limited control.
              </p>
              <div className="bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Use when:</strong> Quick conversion needed, or as starting point before further adjustments.
                </p>
              </div>
            </div>

            {/* Channel Mixer - Good */}
            <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-medium text-gray-900">Channel Mixer (Good)</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Control the contribution of red, green, and blue channels to the final greyscale image. Simulates traditional colour filter effects.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Tip:</strong> Keep total of RGB percentages at 100% to maintain proper exposure. Red filter effect: 60% Red, 30% Green, 10% Blue.
                </p>
              </div>
            </div>

            {/* Black & White Adjustment Layer - Best */}
            <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-medium text-gray-900">Black & White Adjustment (Best)</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                The most powerful method. Independently control how each colour channel converts to greyscale, preserving colour information non-destructively.
              </p>
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Photoshop Method:</p>
                <ol className="text-sm text-gray-700 space-y-1">
                  <li>1. Layer → New Adjustment Layer → Black & White</li>
                  <li>2. Adjust individual colour sliders</li>
                  <li>3. Add preset or custom tint if desired</li>
                  <li>4. Use curves for further tonal refinement</li>
                </ol>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Lightroom:</strong> Use the B&W Mix panel after clicking "Black & White" in HSL/Color panel. Each slider controls how that colour converts.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image: Black and White Portrait */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1542849767-ea79cd81b779?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25vY2hyb21lJTIwcG9ydHJhaXQlMjBsaWdodGluZyUyMGNvbnRyYXN0fGVufDF8fHx8MTc2OTk3OTczNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Monochrome portrait showing dramatic lighting and contrast"
              className="w-full h-[500px] object-cover"
            />
            <div className="bg-white p-4 text-sm text-gray-600 text-center">
              Black and white portrait demonstrating the power of tonal contrast and lighting
            </div>
          </div>
        </div>

        {/* Simulating Film Filters */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 sm:p-12 mb-20">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Simulating Traditional Film Filters
          </h2>

          <p className="text-lg text-gray-700 mb-8 max-w-4xl">
            In film photography, coloured filters were placed over the lens to control how different colours rendered in black and white. You can simulate these digitally using the Black & White adjustment sliders.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Red Filter */}
            <div className="bg-white rounded-xl p-6 border-2 border-red-500">
              <div className="w-12 h-12 rounded-full bg-red-600 mb-4"></div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Red Filter Effect</h3>
              <p className="text-sm text-gray-700 mb-4">
                Dramatically darkens blue skies, lightens red objects. Classic landscape photography look.
              </p>
              <div className="bg-red-50 rounded-lg p-3">
                <p className="text-xs font-medium text-gray-900 mb-2">Slider Settings:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Reds: +60 to +80</li>
                  <li>• Yellows: +20 to +40</li>
                  <li>• Blues: -80 to -100</li>
                  <li>• Greens: -20 to -40</li>
                </ul>
              </div>
            </div>

            {/* Orange Filter */}
            <div className="bg-white rounded-xl p-6 border-2 border-orange-500">
              <div className="w-12 h-12 rounded-full bg-orange-500 mb-4"></div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Orange Filter Effect</h3>
              <p className="text-sm text-gray-700 mb-4">
                Darkens skies moderately, enhances skin tones, increases contrast. Versatile for portraits and landscapes.
              </p>
              <div className="bg-orange-50 rounded-lg p-3">
                <p className="text-xs font-medium text-gray-900 mb-2">Slider Settings:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Reds: +40 to +60</li>
                  <li>• Oranges: +40 to +60</li>
                  <li>• Yellows: +20 to +30</li>
                  <li>• Blues: -40 to -60</li>
                </ul>
              </div>
            </div>

            {/* Yellow Filter */}
            <div className="bg-white rounded-xl p-6 border-2 border-yellow-500">
              <div className="w-12 h-12 rounded-full bg-yellow-400 mb-4"></div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Yellow Filter Effect</h3>
              <p className="text-sm text-gray-700 mb-4">
                Subtle sky darkening, slightly lightens foliage. Natural-looking, great starting point.
              </p>
              <div className="bg-yellow-50 rounded-lg p-3">
                <p className="text-xs font-medium text-gray-900 mb-2">Slider Settings:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Yellows: +30 to +50</li>
                  <li>• Greens: +10 to +20</li>
                  <li>• Blues: -20 to -40</li>
                  <li>• Keep reds near 0</li>
                </ul>
              </div>
            </div>

            {/* Green Filter */}
            <div className="bg-white rounded-xl p-6 border-2 border-green-500">
              <div className="w-12 h-12 rounded-full bg-green-600 mb-4"></div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Green Filter Effect</h3>
              <p className="text-sm text-gray-700 mb-4">
                Lightens foliage dramatically, darkens skies and reds. Perfect for nature and forest scenes.
              </p>
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-xs font-medium text-gray-900 mb-2">Slider Settings:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Greens: +60 to +80</li>
                  <li>• Yellows: +20 to +30</li>
                  <li>• Reds: -40 to -60</li>
                  <li>• Blues: -20 to -30</li>
                </ul>
              </div>
            </div>

            {/* Blue Filter */}
            <div className="bg-white rounded-xl p-6 border-2 border-blue-500">
              <div className="w-12 h-12 rounded-full bg-blue-600 mb-4"></div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Blue Filter Effect</h3>
              <p className="text-sm text-gray-700 mb-4">
                Lightens blue skies, enhances haze and fog. Creates ethereal, soft atmospheric effects.
              </p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-xs font-medium text-gray-900 mb-2">Slider Settings:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Blues: +60 to +80</li>
                  <li>• Cyans: +40 to +60</li>
                  <li>• Reds: -40 to -60</li>
                  <li>• Yellows: -20 to -40</li>
                </ul>
              </div>
            </div>

            {/* No Filter */}
            <div className="bg-white rounded-xl p-6 border-2 border-gray-400">
              <div className="w-12 h-12 rounded-full bg-gray-400 mb-4"></div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">No Filter (Panchromatic)</h3>
              <p className="text-sm text-gray-700 mb-4">
                Balanced conversion with all colours weighted relatively equally. Natural tonal relationships.
              </p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs font-medium text-gray-900 mb-2">Slider Settings:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• All sliders: 0 to +/-10</li>
                  <li>• Subtle adjustments only</li>
                  <li>• Preserves natural relationships</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Techniques */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Advanced Black & White Techniques
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Dodging and Burning</h3>
              <p className="text-gray-700 text-sm mb-4">
                Ansel Adams' darkroom technique for selectively lightening (dodging) or darkening (burning) areas to guide the viewer's eye and enhance tonal range.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Digital Method:</p>
                <p className="text-sm text-gray-700 mb-2">
                  1. Create a 50% grey layer in Overlay blend mode
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  2. Paint with white (dodge) or black (burn) at low opacity
                </p>
                <p className="text-sm text-gray-700">
                  3. Build up effect gradually for natural results
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Curves for Zone Control</h3>
              <p className="text-gray-700 text-sm mb-4">
                Use curves adjustment to target specific zones and refine tonal relationships with surgical precision.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Technique:</p>
                <p className="text-sm text-gray-700 mb-2">
                  • Add points on the curve for zones you want to adjust
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  • Steeper curve = more contrast
                </p>
                <p className="text-sm text-gray-700">
                  • S-curve adds contrast to midtones while protecting highlights and shadows
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Split Toning</h3>
              <p className="text-gray-700 text-sm mb-4">
                Add subtle colour casts to highlights and shadows for a sophisticated, vintage, or stylised black and white look.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Popular Combinations:</p>
                <p className="text-sm text-gray-700 mb-1">
                  • Warm highlights, cool shadows (classic)
                </p>
                <p className="text-sm text-gray-700 mb-1">
                  • Sepia tones throughout (vintage)
                </p>
                <p className="text-sm text-gray-700">
                  • Blue shadows, neutral highlights (modern)
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Luminosity Masks</h3>
              <p className="text-gray-700 text-sm mb-4">
                Create selections based on tonal values, allowing you to adjust specific zones without affecting others.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Application:</p>
                <p className="text-sm text-gray-700 mb-2">
                  • Target highlights, midtones, or shadows separately
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  • Perfect for implementing the Zone System digitally
                </p>
                <p className="text-sm text-gray-700">
                  • Enables precise, natural-looking adjustments
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Student Projects */}
        <div className="bg-gradient-to-br from-slate-100 to-zinc-100 rounded-2xl p-8 sm:p-12 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Student Projects
            </h2>
          </div>

          <div className="space-y-8">
            {/* Project 1: Zone System Exercise */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Zone System Photography Exercise
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Create a photograph that demonstrates the full tonal range from Zone II to Zone VIII, applying Ansel Adams' Zone System principles.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Assignment:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Find a scene with a wide tonal range</li>
                    <li>• Use spot metering to identify Zone V</li>
                    <li>• Adjust exposure to place key elements in intended zones</li>
                    <li>• Check histogram to verify tonal distribution</li>
                    <li>• Shoot in RAW for maximum flexibility</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Conversion Process:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Convert to black and white in post</li>
                    <li>• Label the zones in your final image</li>
                    <li>• Identify what falls in each zone</li>
                    <li>• Use curves to refine tonal relationships</li>
                    <li>• Compare with original colour version</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 text-white rounded-lg p-6 mt-6">
                <p className="font-medium mb-2">Learning Goal:</p>
                <p className="text-sm">
                  Understand how to pre-visualise the final black and white image, control exposure to achieve your vision, and apply the Zone System to create photographs with rich tonal range.
                </p>
              </div>
            </div>

            {/* Project 2: Filter Simulation */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Colour Filter Comparison Project
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Photograph the same scene and convert it using three different filter simulations to see how colour filters affect tonal relationships.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="font-medium text-gray-900 mb-3">Requirements:</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Choose a scene with varied colours (landscape with sky, foliage, and earth tones ideal)</li>
                  <li>• Shoot one colour image in RAW</li>
                  <li>• Create three black and white conversions:</li>
                  <li className="ml-6">1. Red filter effect</li>
                  <li className="ml-6">2. Green filter effect</li>
                  <li className="ml-6">3. No filter (balanced) effect</li>
                  <li>• Present all three side-by-side with notes on differences</li>
                </ul>
              </div>

              <div className="bg-gray-900 text-white rounded-lg p-6">
                <p className="font-medium mb-2">Analysis Questions:</p>
                <ul className="text-sm space-y-1">
                  <li>• Which version has the most dramatic sky?</li>
                  <li>• How does foliage render differently in each version?</li>
                  <li>• Which filter effect best suits this particular scene?</li>
                  <li>• What mood does each version create?</li>
                </ul>
              </div>
            </div>

            {/* Project 3: High and Low Key */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    High Key and Low Key Portraits
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Create two portrait photographs — one high key (predominantly light tones) and one low key (predominantly dark tones).
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">High Key Portrait:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Most tones in Zones VI-VIII</li>
                    <li>• Bright, airy, optimistic mood</li>
                    <li>• Soft lighting, white backgrounds</li>
                    <li>• Minimal shadows</li>
                    <li>• Overexpose slightly, then refine</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Low Key Portrait:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Most tones in Zones II-IV</li>
                    <li>• Dramatic, mysterious, intense mood</li>
                    <li>• Hard directional lighting</li>
                    <li>• Emphasis on shadows</li>
                    <li>• Underexpose slightly, preserve highlights</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 text-white rounded-lg p-6 mt-6">
                <p className="font-medium mb-2">Learning Goal:</p>
                <p className="text-sm">
                  Master tonal control to create specific moods. Understand that black and white photography isn't about using all zones — sometimes limiting your tonal range creates stronger impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Tips */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Practical Tips for Black & White Photography
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Always Shoot in Colour (RAW)</h3>
                  <p className="text-gray-700 text-sm">
                    Even if your final image will be black and white, shoot in colour RAW. This preserves colour information for more control during conversion. You can always go black and white, but you can't add colour back.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Look for Contrast and Texture</h3>
                  <p className="text-gray-700 text-sm">
                    Without colour, contrast and texture become your primary compositional tools. Seek out scenes with interesting patterns, strong light/shadow interplay, and varied surfaces.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Use Monochrome Preview Mode</h3>
                  <p className="text-gray-700 text-sm">
                    Many cameras offer a monochrome preview or picture style. The final RAW file is still in colour, but the LCD and viewfinder show black and white, helping you visualise the final image while shooting.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Study the Masters</h3>
                  <p className="text-gray-700 text-sm">
                    Ansel Adams, Henri Cartier-Bresson, Sebastião Salgado — study how master photographers used light, composition, and tonal range. Analyse what makes their images powerful without colour.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Don't Overdo Contrast</h3>
                  <p className="text-gray-700 text-sm">
                    Beginners often crank contrast too high. While dramatic contrast can be effective, subtle tonal gradations often create more sophisticated images. Aim for rich midtones, not just pure blacks and whites.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Consider Grain for Film Look</h3>
                  <p className="text-gray-700 text-sm">
                    Adding subtle grain can give digital black and white images a more organic, film-like quality. Use grain tools in Lightroom or Photoshop, but apply tastefully — a little goes a long way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image: Dramatic Contrast */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1641615873382-ab1541a039fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdoaXRlJTIwcGhvdG9ncmFwaHklMjBkcmFtYXRpYyUyMGNvbnRyYXN0fGVufDF8fHx8MTc2OTk3OTczNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Dramatic black and white photography showing powerful contrast"
            className="w-full h-[600px] object-cover"
          />
          <div className="bg-white p-4 text-sm text-gray-600 text-center">
            Powerful black and white photography relies on strong tonal relationships and dramatic lighting
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-white mb-20">
          <h2 className="text-3xl sm:text-4xl tracking-tight mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Key Takeaways
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">The Zone System provides precision</p>
                <p className="text-gray-300">Ansel Adams' 11-zone system gives you a framework for controlling exposure and tones. Pre-visualise where elements should fall, then expose and process accordingly.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Not all conversions are equal</p>
                <p className="text-gray-300">Use Black & White adjustment layers for maximum control. Avoid simple desaturation. Adjust how each colour converts to create compelling tonal relationships.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Colour filters affect tonal rendering</p>
                <p className="text-gray-300">Simulate traditional film filters digitally. Red darkens skies dramatically, green lightens foliage, yellow provides balanced results. Choose based on your creative vision.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Always shoot in colour RAW</p>
                <p className="text-gray-300">Preserve colour information for conversion flexibility. You can always go black and white later, but you can't add colour information back to a greyscale file.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Black and white reveals essence</p>
                <p className="text-gray-300">Without colour, form, texture, contrast, and composition become paramount. Black and white strips away distraction, revealing the fundamental structure of your image.</p>
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
              to="/resources/exposure-triangle"
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                Exposure Triangle
              </h3>
              <p className="text-gray-600 text-sm">
                Master exposure control essential for implementing the Zone System
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
                Understand how light creates the tonal range crucial to black and white photography
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
                Learn compositional techniques that work powerfully in monochrome
              </p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
