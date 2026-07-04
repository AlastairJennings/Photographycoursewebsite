import { ArrowLeft, Target, Crosshair, Layers, Mountain, Camera, Flower, Eye, Zap, CheckCircle2, AlertCircle, Info, BookOpen } from 'lucide-react';
import { Link } from 'react-router';
import { SEO } from './SEO';
import { getSEOConfig } from '../config/seo-config';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FocusTechniques() {
  const seoConfig = getSEOConfig('focus-techniques');
  
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
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-20 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-rose-200">
              <Target className="w-4 h-4 text-rose-600" />
              <span className="text-xs uppercase tracking-wide text-rose-600 font-medium">Focus Techniques</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Mastering Focus
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-3xl">
              Achieve tack-sharp images every time. Master autofocus modes, manual focus techniques, focus stacking for extreme depth of field, and hyperfocal distance for landscape photography.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
        
        {/* Introduction */}
        <div className="max-w-4xl mb-20">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Focus is the foundation of sharp photography. Whether you're using autofocus or manual focus, understanding how focus systems work and when to use different techniques is essential for creating professional images.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This guide covers everything from basic autofocus modes to advanced techniques like focus stacking and hyperfocal distance calculations that will transform your photography.
          </p>
        </div>

        {/* Autofocus Modes */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Understanding Autofocus Modes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Single Shot AF */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl tracking-tight text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Single-Shot AF (AF-S / One-Shot)
              </h3>
              <p className="text-gray-700 mb-4">
                Camera focuses once when you half-press the shutter button, then locks focus. Ideal for stationary subjects.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Best For:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Portraits and still subjects</li>
                  <li>• Landscape photography</li>
                  <li>• Product photography</li>
                  <li>• Architecture</li>
                </ul>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p>Won't let you take a photo until focus is confirmed</p>
              </div>
            </div>

            {/* Continuous AF */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl tracking-tight text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Continuous AF (AF-C / AI Servo)
              </h3>
              <p className="text-gray-700 mb-4">
                Camera continuously adjusts focus as subject moves. Tracks moving subjects and maintains focus during motion.
              </p>
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Best For:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Sports photography</li>
                  <li>• Wildlife in motion</li>
                  <li>• Children and pets</li>
                  <li>• Action photography</li>
                </ul>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p>Predicts subject movement for sharp action shots</p>
              </div>
            </div>

            {/* Auto AF */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl tracking-tight text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Auto AF (AF-A / AI Focus)
              </h3>
              <p className="text-gray-700 mb-4">
                Camera automatically switches between Single and Continuous modes based on subject movement.
              </p>
              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Best For:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Unpredictable subjects</li>
                  <li>• General photography</li>
                  <li>• Beginners learning focus</li>
                  <li>• Mixed shooting scenarios</li>
                </ul>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p>Less precise than choosing mode manually</p>
              </div>
            </div>

            {/* Manual Focus */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl tracking-tight text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Manual Focus (MF)
              </h3>
              <p className="text-gray-700 mb-4">
                You control focus by rotating the focus ring on the lens. Ultimate precision and creative control.
              </p>
              <div className="bg-orange-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Best For:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Macro photography</li>
                  <li>• Astrophotography</li>
                  <li>• Low light / low contrast</li>
                  <li>• Video and focus pulls</li>
                </ul>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p>Use focus peaking and magnification for accuracy</p>
              </div>
            </div>
          </div>

          {/* Hero Image: Autofocus Points */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1727355612266-26fc2654de41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBhdXRvZm9jdXMlMjBwb2ludHMlMjB2aWV3ZmluZGVyfGVufDF8fHx8MTc2OTk3ODk3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Camera autofocus system with focus points"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Focus Point Selection */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Focus Point Selection
          </h2>
          
          <div className="max-w-4xl mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Modern cameras have dozens or even hundreds of autofocus points. Choosing the right focus point selection mode is crucial for accurate focusing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Single Point AF</h3>
              <p className="text-gray-700 text-sm mb-4">
                You select one focus point manually. Camera focuses only on that specific point.
              </p>
              <div className="bg-white rounded-lg p-3 text-sm text-gray-700">
                <strong>Use when:</strong> You need precise control over exactly what's in focus (portraits, macro)
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Zone/Group AF</h3>
              <p className="text-gray-700 text-sm mb-4">
                Camera uses a cluster of focus points in a selected zone to track subjects.
              </p>
              <div className="bg-white rounded-lg p-3 text-sm text-gray-700">
                <strong>Use when:</strong> Subject moves but stays in general area (sports, wildlife)
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Auto Area AF</h3>
              <p className="text-gray-700 text-sm mb-4">
                Camera automatically selects which focus points to use across entire frame.
              </p>
              <div className="bg-white rounded-lg p-3 text-sm text-gray-700">
                <strong>Use when:</strong> Fast-moving unpredictable action or when you can't choose point quickly
              </div>
            </div>
          </div>
        </div>

        {/* Focus Stacking - Major Section */}
        <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 rounded-2xl p-8 sm:p-12 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center">
              <Layers className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Focus Stacking
            </h2>
          </div>

          <div className="max-w-4xl mb-10">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Focus stacking is a powerful technique that combines multiple images taken at different focus distances to create a final image with depth of field that extends from foreground to background—impossible with a single shot.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Essential for macro photography, product photography, and landscape work where you need extreme sharpness throughout the entire frame.
            </p>
          </div>

          {/* Hero Image: Focus Stacking Example */}
          <div className="rounded-xl overflow-hidden shadow-xl mb-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1598710010652-c8502993f289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2N1cyUyMHN0YWNraW5nJTIwbWFjcm8lMjBwaG90b2dyYXBoeSUyMGZsb3dlcnxlbnwxfHx8fDE3Njk5Nzg5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Macro flower photography showing extreme depth of field from focus stacking"
              className="w-full h-[500px] object-cover"
            />
            <div className="bg-white p-4 text-sm text-gray-600 text-center">
              Example of focus stacking in macro photography - entire flower is sharp from front to back
            </div>
          </div>

          {/* When to Use Focus Stacking */}
          <div className="bg-white rounded-xl p-8 mb-10">
            <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              When to Use Focus Stacking
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Perfect For:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600">•</span>
                    <span><strong>Macro photography:</strong> Insects, flowers, jewelry where depth of field is razor-thin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600">•</span>
                    <span><strong>Product photography:</strong> E-commerce images requiring front-to-back sharpness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600">•</span>
                    <span><strong>Landscape photography:</strong> Foreground flowers to distant mountains all sharp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600">•</span>
                    <span><strong>Tabletop scenes:</strong> Miniatures, models, food photography</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                  Not Suitable For:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    <span>Moving subjects (wind, people, animals)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    <span>Handheld shooting (camera must be perfectly still)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    <span>Fast-paced shooting situations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    <span>Scenes where you want selective focus/bokeh</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Focus Stacking Process */}
          <div className="bg-white rounded-xl p-8 mb-10">
            <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Step-by-Step Focus Stacking Process
            </h3>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="border-l-4 border-violet-600 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                  <h4 className="text-xl font-medium text-gray-900">Set Up Your Equipment</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Mount camera on sturdy tripod</li>
                  <li>• Use cable release or 2-second timer to avoid camera shake</li>
                  <li>• Switch to manual focus mode</li>
                  <li>• Set camera to Manual mode (M) or Aperture Priority (A/Av)</li>
                  <li>• Disable image stabilization (not needed on tripod)</li>
                  <li>• Shoot in RAW format for maximum editing flexibility</li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-violet-600 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                  <h4 className="text-xl font-medium text-gray-900">Choose Your Aperture</h4>
                </div>
                <p className="text-gray-700 mb-3">
                  Select an aperture that balances sharpness with workable depth of field per shot.
                </p>
                <div className="bg-violet-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700"><strong>Recommendation:</strong> f/8 to f/11 for most situations. Avoid very small apertures (f/16 and smaller) due to diffraction softening.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-violet-600 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold text-sm">3</div>
                  <h4 className="text-xl font-medium text-gray-900">Take Your Image Sequence</h4>
                </div>
                <p className="text-gray-700 mb-3">
                  Focus on the nearest point in your subject, then gradually move focus toward the back, taking a photo at each focus distance.
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Start with focus on the closest part of your subject</li>
                  <li>• Take a photo</li>
                  <li>• Turn focus ring slightly toward infinity</li>
                  <li>• Take another photo</li>
                  <li>• Repeat until the farthest point is in focus</li>
                </ul>
                <div className="bg-violet-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>How many shots?</strong> Depends on magnification and depth of field:
                  </p>
                  <ul className="text-sm text-gray-700 mt-2 space-y-1">
                    <li>• <strong>Extreme macro (1:1):</strong> 10-30+ images</li>
                    <li>• <strong>Regular macro:</strong> 5-15 images</li>
                    <li>• <strong>Product photography:</strong> 3-10 images</li>
                    <li>• <strong>Landscape:</strong> 2-5 images</li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className="border-l-4 border-violet-600 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold text-sm">4</div>
                  <h4 className="text-xl font-medium text-gray-900">Merge in Post-Processing</h4>
                </div>
                <p className="text-gray-700 mb-3">
                  Use focus stacking software to automatically align and blend your images.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900 mb-2">Software Options:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Adobe Photoshop:</strong> Edit → Auto-Blend Layers</li>
                      <li>• <strong>Helicon Focus:</strong> Dedicated stacking software</li>
                      <li>• <strong>Zerene Stacker:</strong> Professional option</li>
                      <li>• <strong>Adobe Lightroom:</strong> Photo Merge (limited)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900 mb-2">Photoshop Method:</p>
                    <ol className="text-sm text-gray-700 space-y-1">
                      <li>1. Load all images as layers</li>
                      <li>2. Select all layers</li>
                      <li>3. Edit → Auto-Align Layers</li>
                      <li>4. Edit → Auto-Blend Layers</li>
                      <li>5. Select "Stack Images"</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Focus Stacking Tips */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Pro Tips for Focus Stacking
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Overlap Your Focus Points</p>
                    <p className="text-sm text-gray-600">Ensure adjacent images have overlapping sharp areas for smooth blending</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Keep Exposure Consistent</p>
                    <p className="text-sm text-gray-600">Use manual mode to prevent exposure shifts between frames</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Focus Rail for Precision</p>
                    <p className="text-sm text-gray-600">Macro focusing rails move camera instead of changing focus ring for ultimate precision</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Shoot Extra Frames</p>
                    <p className="text-sm text-gray-600">Better to have too many than miss a focus distance and have gaps</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Block Wind for Outdoor Stacking</p>
                    <p className="text-sm text-gray-600">Use windbreaks or shoot in calm conditions - any movement ruins the stack</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Live View for Accuracy</p>
                    <p className="text-sm text-gray-600">Use live view and zoom in to precisely see where focus is for each shot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hyperfocal Distance - Major Section */}
        <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 rounded-2xl p-8 sm:p-12 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
              <Mountain className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Hyperfocal Distance
            </h2>
          </div>

          <div className="max-w-4xl mb-10">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Hyperfocal distance is the focus distance that gives you maximum depth of field—from half the hyperfocal distance to infinity. Master this concept and you'll achieve front-to-back sharpness in landscape photography with a single shot.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Essential knowledge for landscape, architectural, and street photographers who need extensive depth of field without focus stacking.
            </p>
          </div>

          {/* Hero Image: Landscape Depth of Field */}
          <div className="rounded-xl overflow-hidden shadow-xl mb-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1693131822087-8f66d88f3b7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBkZXB0aCUyMG9mJTIwZmllbGQlMjBtb3VudGFpbnMlMjBpbmZpbml0eXxlbnwxfHx8fDE3Njk5Nzg5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Landscape photograph with extreme depth of field showing mountains in distance"
              className="w-full h-[500px] object-cover"
            />
            <div className="bg-white p-4 text-sm text-gray-600 text-center">
              Using hyperfocal distance for maximum depth of field in landscape photography
            </div>
          </div>

          {/* Understanding Hyperfocal Distance */}
          <div className="bg-white rounded-xl p-8 mb-10">
            <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Understanding the Concept
            </h3>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-900 mb-3">The Magic Formula:</p>
                  <p className="text-gray-700 mb-4">
                    When you focus at the hyperfocal distance, everything from <strong>half that distance to infinity</strong> will be acceptably sharp.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Example:</strong> If the hyperfocal distance is 20 feet, focusing at 20 feet gives you sharpness from 10 feet to infinity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">What Affects Hyperfocal Distance:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900 mb-2">1. Focal Length</p>
                    <p className="text-sm text-gray-700">Wider lenses = shorter hyperfocal distance = easier to achieve front-to-back sharpness</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900 mb-2">2. Aperture</p>
                    <p className="text-sm text-gray-700">Smaller aperture (higher f-number) = shorter hyperfocal distance = more depth of field</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900 mb-2">3. Sensor Size</p>
                    <p className="text-sm text-gray-700">Larger sensors = longer hyperfocal distance. Full frame vs crop sensor affects calculations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hyperfocal Distance Chart */}
          <div className="bg-white rounded-xl p-8 mb-10">
            <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Quick Reference Chart (Full Frame)
            </h3>
            
            <p className="text-gray-600 text-sm mb-6">
              Hyperfocal distances in feet for common landscape photography scenarios. Focus at these distances for sharpness from half the distance to infinity.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="p-3 text-left font-medium text-gray-900">Focal Length</th>
                    <th className="p-3 text-center font-medium text-gray-900">f/8</th>
                    <th className="p-3 text-center font-medium text-gray-900">f/11</th>
                    <th className="p-3 text-center font-medium text-gray-900">f/16</th>
                    <th className="p-3 text-center font-medium text-gray-900">f/22</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-900">14mm</td>
                    <td className="p-3 text-center text-gray-700">3.1 ft</td>
                    <td className="p-3 text-center text-gray-700">2.3 ft</td>
                    <td className="p-3 text-center text-gray-700">1.6 ft</td>
                    <td className="p-3 text-center text-gray-700">1.1 ft</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-900">16mm</td>
                    <td className="p-3 text-center text-gray-700">4.1 ft</td>
                    <td className="p-3 text-center text-gray-700">3.0 ft</td>
                    <td className="p-3 text-center text-gray-700">2.1 ft</td>
                    <td className="p-3 text-center text-gray-700">1.5 ft</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-900">20mm</td>
                    <td className="p-3 text-center text-gray-700">6.4 ft</td>
                    <td className="p-3 text-center text-gray-700">4.6 ft</td>
                    <td className="p-3 text-center text-gray-700">3.2 ft</td>
                    <td className="p-3 text-center text-gray-700">2.3 ft</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-900">24mm</td>
                    <td className="p-3 text-center text-gray-700">9.2 ft</td>
                    <td className="p-3 text-center text-gray-700">6.7 ft</td>
                    <td className="p-3 text-center text-gray-700">4.6 ft</td>
                    <td className="p-3 text-center text-gray-700">3.4 ft</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-900">28mm</td>
                    <td className="p-3 text-center text-gray-700">12.5 ft</td>
                    <td className="p-3 text-center text-gray-700">9.1 ft</td>
                    <td className="p-3 text-center text-gray-700">6.3 ft</td>
                    <td className="p-3 text-center text-gray-700">4.5 ft</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-900">35mm</td>
                    <td className="p-3 text-center text-gray-700">19.6 ft</td>
                    <td className="p-3 text-center text-gray-700">14.2 ft</td>
                    <td className="p-3 text-center text-gray-700">9.8 ft</td>
                    <td className="p-3 text-center text-gray-700">7.1 ft</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-900">50mm</td>
                    <td className="p-3 text-center text-gray-700">39.9 ft</td>
                    <td className="p-3 text-center text-gray-700">29.0 ft</td>
                    <td className="p-3 text-center text-gray-700">20.0 ft</td>
                    <td className="p-3 text-center text-gray-700">14.5 ft</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> For crop sensor cameras (APS-C), multiply the focal length by 1.5x (Nikon/Sony) or 1.6x (Canon) to find the equivalent full-frame focal length, then use the chart.
              </p>
            </div>
          </div>

          {/* How to Use Hyperfocal Distance */}
          <div className="bg-white rounded-xl p-8 mb-10">
            <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              How to Apply Hyperfocal Distance
            </h3>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Method 1: Using the Distance Scale</h4>
                <p className="text-gray-700 mb-4">
                  Many lenses have a distance scale with depth of field markers showing what will be in focus.
                </p>
                <ol className="space-y-2 text-gray-700">
                  <li><strong>1.</strong> Find the hyperfocal distance for your focal length and aperture from the chart</li>
                  <li><strong>2.</strong> Set your lens to that distance using the distance scale</li>
                  <li><strong>3.</strong> Check the depth of field markers align with infinity on one side</li>
                  <li><strong>4.</strong> Everything from half that distance to infinity is now sharp</li>
                </ol>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Method 2: The Double-Distance Rule (Simplified)</h4>
                <p className="text-gray-700 mb-4">
                  Quick approximation when you don't have charts or distance scales.
                </p>
                <ol className="space-y-2 text-gray-700">
                  <li><strong>1.</strong> Find the closest object you want sharp</li>
                  <li><strong>2.</strong> Focus on a point <strong>twice that distance</strong> from your camera</li>
                  <li><strong>3.</strong> Use f/11 or smaller for landscapes</li>
                  <li><strong>4.</strong> Result: Acceptable sharpness from your near object to infinity</li>
                </ol>
                <div className="bg-blue-50 rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> Flowers at 5 feet from camera? Focus at 10 feet using f/11 for sharpness from ~5 feet to infinity.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Method 3: Smartphone Apps</h4>
                <p className="text-gray-700 mb-4">
                  Use depth of field calculator apps that compute hyperfocal distance in real-time.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900 mb-2">Popular Apps:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• PhotoPills (iOS/Android)</li>
                      <li>• HyperFocal Pro (iOS)</li>
                      <li>• DOF Calculator (Android)</li>
                      <li>• SetMyCamera (iOS/Android)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900 mb-2">Input Required:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Camera sensor size</li>
                      <li>• Focal length</li>
                      <li>• Aperture (f-stop)</li>
                      <li>• Circle of confusion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practical Scenarios */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Real-World Hyperfocal Scenarios
            </h3>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
                <h4 className="font-medium text-gray-900 mb-2">Scenario 1: Landscape with Foreground Flowers</h4>
                <p className="text-gray-700 text-sm mb-3">
                  <strong>Setup:</strong> 20mm lens, flowers 3 feet away, mountains in distance
                </p>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Solution:</strong> At f/11, hyperfocal distance is 4.6 feet. Focus at 4.6 feet for sharpness from 2.3 feet to infinity—covers your flowers and mountains!
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
                <h4 className="font-medium text-gray-900 mb-2">Scenario 2: Street Photography</h4>
                <p className="text-gray-700 text-sm mb-3">
                  <strong>Setup:</strong> 35mm lens, want everything from 10 feet onward sharp
                </p>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Solution:</strong> At f/11, hyperfocal distance is 14.2 feet. Focus at 14.2 feet or use zone focus preset—everything from 7 feet to infinity stays sharp for fast shooting.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
                <h4 className="font-medium text-gray-900 mb-2">Scenario 3: Architecture Interior</h4>
                <p className="text-gray-700 text-sm mb-3">
                  <strong>Setup:</strong> 14mm lens, need entire room sharp from 5 feet away
                </p>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Solution:</strong> At f/11, hyperfocal distance is only 2.3 feet! Focus just past 2 feet and everything from 1.15 feet to infinity is sharp with this ultra-wide lens.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button Focus */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Back Button Focus
          </h2>

          <div className="max-w-4xl mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Back button focus separates focusing from the shutter button. Instead of half-pressing the shutter to focus, you use a dedicated button (usually AF-ON) on the back of your camera.
            </p>
          </div>

          {/* Hero Image: Manual Focus */}
          <div className="rounded-xl overflow-hidden shadow-lg mb-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1653228709354-c9494aae9ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51YWwlMjBmb2N1cyUyMGxlbnMlMjBwaG90b2dyYXBoeSUyMGNsb3NldXB8ZW58MXx8fHwxNzY5OTc4OTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Camera lens showing manual focus and back button controls"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Why Use Back Button Focus?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Focus and recompose:</strong> Lock focus once, recompose without refocusing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Instant manual focus:</strong> Just stop pressing the button—no switch needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Better for tracking:</strong> Hold button for continuous AF, release to lock</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Prevents accidental refocus:</strong> Shutter button only takes photo</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4">How to Set Up (Typical):</h3>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1.</strong> Go to camera's custom function menu</li>
                <li><strong>2.</strong> Find AF button settings</li>
                <li><strong>3.</strong> Set AF-ON button to "AF Start"</li>
                <li><strong>4.</strong> Set shutter button to "Metering Start" (disable AF)</li>
                <li><strong>5.</strong> Press AF-ON to focus, shutter to shoot</li>
              </ol>
              <div className="bg-blue-50 rounded-lg p-4 mt-6">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Menu navigation varies by brand. Check your camera manual under "Custom Controls" or "Button Configuration."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Focus Problems */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Common Focus Problems & Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Front/Back Focus</h3>
                  <p className="text-gray-700 text-sm mb-3">Camera consistently focuses slightly in front of or behind your subject.</p>
                  <p className="text-gray-700 text-sm"><strong>Solution:</strong> Use AF micro-adjustment in camera menu, or send lens for calibration.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Hunting in Low Light</h3>
                  <p className="text-gray-700 text-sm mb-3">Autofocus searches back and forth, can't lock on.</p>
                  <p className="text-gray-700 text-sm"><strong>Solution:</strong> Use center focus point (most sensitive), add light, or switch to manual focus.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Focus Through Glass/Fence</h3>
                  <p className="text-gray-700 text-sm mb-3">Camera focuses on foreground obstruction instead of subject behind.</p>
                  <p className="text-gray-700 text-sm"><strong>Solution:</strong> Use single-point AF, place lens close to obstacle, use wider aperture.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Soft Images at Large Apertures</h3>
                  <p className="text-gray-700 text-sm mb-3">Images aren't sharp even when focus looks correct.</p>
                  <p className="text-gray-700 text-sm"><strong>Solution:</strong> Stop down 1-2 stops from maximum (f/1.4 → f/2.8), check for camera shake.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Wrong Subject in Focus</h3>
                  <p className="text-gray-700 text-sm mb-3">Camera chooses wrong subject when using auto-area AF.</p>
                  <p className="text-gray-700 text-sm"><strong>Solution:</strong> Switch to single-point AF for precise control over focus location.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Blurry Action Shots</h3>
                  <p className="text-gray-700 text-sm mb-3">Moving subjects are out of focus despite using AF.</p>
                  <p className="text-gray-700 text-sm"><strong>Solution:</strong> Switch to Continuous AF (AF-C), increase shutter speed, use predictive tracking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Practice Exercises */}
        <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-2xl p-8 sm:p-12 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Practice Exercises
            </h2>
          </div>

          <div className="space-y-6">
            {/* Exercise 1: Focus Stacking */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white flex items-center justify-center font-bold">1</div>
                <h3 className="text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                  Focus Stacking Challenge
                </h3>
              </div>
              
              <p className="text-gray-700 mb-4">
                <strong>Assignment:</strong> Create a focus-stacked image of a small object with extreme depth.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-medium text-gray-900 mb-2">Setup:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Find a 3D object (flower, shell, figurine)</li>
                    <li>• Mount camera on tripod</li>
                    <li>• Use macro lens or close focus distance</li>
                    <li>• Set aperture to f/8</li>
                    <li>• Manual focus mode</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-2">Process:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Take 8-12 images, adjusting focus slightly</li>
                    <li>• Start at nearest point, end at farthest</li>
                    <li>• Import into Photoshop</li>
                    <li>• Use Auto-Blend Layers</li>
                    <li>• Compare single shot vs. stacked result</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-violet-50 rounded-lg p-4 mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Learning Goal:</strong> Understand how focus stacking dramatically increases depth of field and when it's worth the extra effort.
                </p>
              </div>
            </div>

            {/* Exercise 2: Hyperfocal Distance */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white flex items-center justify-center font-bold">2</div>
                <h3 className="text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                  Hyperfocal Distance Test
                </h3>
              </div>
              
              <p className="text-gray-700 mb-4">
                <strong>Assignment:</strong> Shoot a landscape using hyperfocal distance vs. infinity focus—compare the results.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-medium text-gray-900 mb-2">Shot 1 - Infinity Focus:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Find scene with foreground & background</li>
                    <li>• Use 24mm at f/11</li>
                    <li>• Focus on distant mountain/building</li>
                    <li>• Take photo</li>
                    <li>• Note if foreground is soft</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-2">Shot 2 - Hyperfocal Focus:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Same scene, same settings</li>
                    <li>• Use chart: 24mm at f/11 = 6.7 feet</li>
                    <li>• Focus at 6.7 feet using distance scale</li>
                    <li>• Take photo</li>
                    <li>• Compare: foreground should be sharper!</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Learning Goal:</strong> See the practical difference hyperfocal distance makes in landscape photography—maximizing depth of field in a single shot.
                </p>
              </div>
            </div>

            {/* Exercise 3: Autofocus Modes */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-white flex items-center justify-center font-bold">3</div>
                <h3 className="text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                  Autofocus Mode Comparison
                </h3>
              </div>
              
              <p className="text-gray-700 mb-4">
                <strong>Assignment:</strong> Photograph a moving subject using different AF modes to learn when each excels.
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-2">Test 1: Single-Shot AF (AF-S)</p>
                  <p className="text-sm text-gray-700">Try to photograph someone walking toward you. Notice: camera focuses once and locks—moving subject goes out of focus.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-2">Test 2: Continuous AF (AF-C)</p>
                  <p className="text-sm text-gray-700">Same moving subject. Notice: camera continuously adjusts focus as they approach—subject stays sharp.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-2">Test 3: Back Button Focus</p>
                  <p className="text-sm text-gray-700">Set up back button focus. Practice focusing on one subject, recomposing, and shooting without refocusing.</p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Learning Goal:</strong> Develop intuition for which AF mode to use in different situations—still subjects, action, unpredictable movement.
                </p>
              </div>
            </div>
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
                <p className="text-lg font-medium mb-2">Match AF mode to your subject</p>
                <p className="text-gray-300">Single-shot for stationary, continuous for motion, manual for precision and challenging conditions.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Focus stacking creates impossible depth of field</p>
                <p className="text-gray-300">Multiple images focused at different distances combine for front-to-back sharpness in macro and product photography.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Hyperfocal distance maximizes depth of field</p>
                <p className="text-gray-300">Focus at the hyperfocal distance for sharpness from half that distance to infinity—essential for landscape photography.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Back button focus increases control</p>
                <p className="text-gray-300">Separating focus from the shutter gives you focus-and-recompose freedom and prevents accidental refocusing.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Single-point AF for precise control</p>
                <p className="text-gray-300">When you need exact focus placement, use single-point selection rather than letting the camera choose.</p>
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
              to="/resources/lens-guide"
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                Lens Selection Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Learn how lens choice affects depth of field and focus characteristics
              </p>
            </Link>

            <Link
              to="/resources/exposure-triangle"
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                Exposure Triangle
              </h3>
              <p className="text-gray-600 text-sm">
                Understand how aperture affects both exposure and depth of field
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
                Use selective focus and depth of field as composition tools
              </p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
