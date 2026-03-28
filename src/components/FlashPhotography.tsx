import { ArrowLeft, Zap, Lightbulb, Layers, Sun, Camera, Sparkles, BookOpen, CheckCircle2, Info, AlertCircle, Target, Settings, Eye } from 'lucide-react';
import { Link } from 'react-router';
import { SEO } from './SEO';
import { getSEOConfig } from '../config/seo-config';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FlashPhotography() {
  const seoConfig = getSEOConfig('flash-photography');
  
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
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-20 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/30">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-xs uppercase tracking-wide text-white font-medium">Flash Photography Basics</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white mb-8 leading-tight" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Flash Photography Basics
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-100 leading-relaxed max-w-3xl">
              Master the art of adding light. Learn to expose for backgrounds in manual mode, control flash power for perfect subjects, work with off-camera flash, and create professional three-light setups.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
        
        {/* Introduction */}
        <div className="max-w-4xl mb-20">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Flash photography gives you complete control over light, allowing you to create images impossible with ambient light alone. Whether you're shooting portraits, events, or creative projects, understanding flash fundamentals transforms your photography.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This guide covers the essential technique of manually exposing for your background and adjusting flash power for your subject, off-camera flash setups, light modifiers, and professional three-point lighting configurations.
          </p>
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1689799514792-c536a1e0759e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGFzaCUyMHBob3RvZ3JhcGh5JTIwcG9ydHJhaXQlMjBzdHVkaW8lMjBsaWdodGluZ3xlbnwxfHx8fDE3Njk5ODA2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional flash photography portrait with studio lighting"
            className="w-full h-[600px] object-cover"
          />
          <div className="bg-white p-4 text-sm text-gray-600 text-center">
            Flash photography allows complete control over lighting for professional results
          </div>
        </div>

        {/* Understanding Flash Exposure */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Understanding Flash Exposure
          </h2>

          <div className="max-w-4xl mb-10">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Flash photography is fundamentally different from ambient light photography because you're working with <strong>two separate light sources</strong> that are controlled independently: the existing ambient light and the flash output.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-2xl p-8 sm:p-12 mb-10">
            <h3 className="text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              The Two-Exposure System
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border-4 border-blue-600">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-medium text-gray-900 mb-4">Ambient Exposure</h4>
                <p className="text-gray-700 mb-6">
                  The existing light in the scene (daylight, room lights, streetlights, etc.)
                </p>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Controlled By:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Shutter Speed</strong> (primary control)</li>
                    <li>• <strong>Aperture</strong> (affects both ambient & flash)</li>
                    <li>• <strong>ISO</strong> (affects both ambient & flash)</li>
                  </ul>
                </div>

                <div className="bg-gray-900 text-white rounded-lg p-4">
                  <p className="text-xs">
                    <strong>Key Concept:</strong> Shutter speed controls how much ambient light hits the sensor. Faster shutter = darker background.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border-4 border-orange-600">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-medium text-gray-900 mb-4">Flash Exposure</h4>
                <p className="text-gray-700 mb-6">
                  The burst of light from your flash illuminating the subject
                </p>
                
                <div className="bg-orange-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Controlled By:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Flash Power</strong> (primary control)</li>
                    <li>• <strong>Distance</strong> to subject</li>
                    <li>• <strong>Aperture</strong> (affects both ambient & flash)</li>
                    <li>• <strong>ISO</strong> (affects both ambient & flash)</li>
                  </ul>
                </div>

                <div className="bg-gray-900 text-white rounded-lg p-4">
                  <p className="text-xs">
                    <strong>Key Concept:</strong> Flash duration is so brief (1/1000s to 1/20000s) that shutter speed doesn't affect flash exposure (within sync speed limits).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 mt-8 border-4 border-purple-600">
              <div className="flex items-start gap-4">
                <Sparkles className="w-8 h-8 text-purple-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-3">The Magic of Independent Control</h4>
                  <p className="text-gray-700 mb-4">
                    Because ambient and flash exposures are controlled separately, you can:
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Make the background darker or brighter <em>without affecting the subject</em></li>
                    <li>• Make the subject brighter or darker <em>without affecting the background</em></li>
                    <li>• Create dramatic lighting effects impossible with ambient light alone</li>
                    <li>• Shoot in any lighting condition and still get perfectly lit subjects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Flash Sync Speed */}
          <div className="bg-red-50 rounded-xl p-8 border border-red-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-gray-900 mb-3">Important: Flash Sync Speed</h4>
                <p className="text-gray-700 mb-4">
                  Your camera has a maximum <strong>flash sync speed</strong> (typically 1/200s to 1/250s). This is the fastest shutter speed you can use with flash.
                </p>
                <p className="text-gray-700 mb-4">
                  At faster shutter speeds, the shutter curtains don't fully open at once, resulting in a black band across your image.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Check your camera manual</strong> for your specific sync speed. Most cameras display a warning or automatically limit shutter speed when flash is active.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Manual Exposure + Flash Power Technique */}
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-8 sm:p-12 mb-20 text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              The Professional Technique: Manual Exposure + Flash Power
            </h2>
          </div>

          <div className="mb-10">
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              This is the fundamental technique used by professional photographers for complete creative control. You expose for the background using manual mode, then adjust flash power to properly expose your subject.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              This technique separates you from auto modes and gives you full creative authority over every aspect of the image.
            </p>
          </div>

          {/* Step-by-Step Process */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-10 border border-white/20">
            <h3 className="text-3xl tracking-tight mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Step-by-Step Process
            </h3>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-white/5 rounded-xl p-6 border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold flex-shrink-0 text-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-3">Set Camera to Manual Mode (M)</h4>
                    <p className="text-gray-200 mb-4">
                      Switch your camera to full manual mode. You need complete control over shutter speed, aperture, and ISO.
                    </p>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-sm text-gray-300">
                        This is crucial — auto modes will fight against your creative decisions when flash is introduced.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white/5 rounded-xl p-6 border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold flex-shrink-0 text-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-3">Turn Off Your Flash (Temporarily)</h4>
                    <p className="text-gray-200 mb-4">
                      Disable the flash or remove it from the camera. You need to meter the ambient light without flash interference.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white/5 rounded-xl p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold flex-shrink-0 text-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-3">Expose for the Background</h4>
                    <p className="text-gray-200 mb-4">
                      Point your camera at the background (not the subject). Adjust shutter speed, aperture, and ISO until the background looks exactly how you want it.
                    </p>
                    
                    <div className="bg-blue-900/30 rounded-lg p-4 mb-4 border border-blue-500/30">
                      <p className="text-sm font-medium text-blue-200 mb-3">Three Common Background Exposure Choices:</p>
                      <div className="space-y-3">
                        <div className="bg-black/30 rounded p-3">
                          <p className="text-sm font-medium text-white mb-1">1. Dramatic Dark Background</p>
                          <p className="text-xs text-gray-300">Underexpose by 1-2 stops. Subject will "pop" against dark background. Great for dramatic portraits.</p>
                          <p className="text-xs text-gray-400 mt-1">Example: 1/200s, f/5.6, ISO 100 → Dark, moody scene</p>
                        </div>
                        
                        <div className="bg-white/10 rounded p-3">
                          <p className="text-sm font-medium text-white mb-1">2. Balanced Background</p>
                          <p className="text-xs text-gray-300">Expose normally. Background visible but subject still stands out with flash. Natural-looking.</p>
                          <p className="text-xs text-gray-400 mt-1">Example: 1/125s, f/4, ISO 400 → Balanced ambient exposure</p>
                        </div>
                        
                        <div className="bg-white/20 rounded p-3">
                          <p className="text-sm font-medium text-white mb-1">3. Bright Airy Background</p>
                          <p className="text-xs text-gray-300">Expose normally or slightly over. Bright, magazine-style look. Requires more flash power.</p>
                          <p className="text-xs text-gray-400 mt-1">Example: 1/100s, f/2.8, ISO 800 → Bright, well-lit environment</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-sm text-gray-300">
                        <strong>Remember:</strong> At this point, your subject will likely be underexposed or even completely dark. That's fine — the flash will fix that in the next steps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white/5 rounded-xl p-6 border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold flex-shrink-0 text-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-3">Lock in Your Settings</h4>
                    <p className="text-gray-200 mb-4">
                      Once the background looks right, <strong>don't change your camera settings</strong>. Lock in your shutter speed, aperture, and ISO.
                    </p>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-sm text-gray-300">
                        From this point forward, you'll only adjust flash power to control subject brightness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white/5 rounded-xl p-6 border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold flex-shrink-0 text-lg">
                    5
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-3">Add Flash & Set to Manual Mode</h4>
                    <p className="text-gray-200 mb-4">
                      Attach your flash and set it to <strong>Manual (M) mode</strong> — not TTL, not Auto. Start with 1/4 or 1/8 power.
                    </p>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-sm text-gray-300">
                        <strong>Why manual flash?</strong> TTL mode tries to expose "correctly" but doesn't know your creative intent. Manual gives you precise, repeatable control.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-white/5 rounded-xl p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold flex-shrink-0 text-lg">
                    6
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-3">Take a Test Shot</h4>
                    <p className="text-gray-200 mb-4">
                      Photograph your subject with the flash. Check the results on your LCD screen and histogram.
                    </p>
                    <div className="bg-green-900/30 rounded-lg p-4 border border-green-500/30">
                      <p className="text-sm text-gray-300 mb-2">Evaluate:</p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Is the background still as you intended? (It should be)</li>
                        <li>• Is the subject too bright, too dark, or just right?</li>
                        <li>• Check highlights on face — are they blown out?</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="bg-white/5 rounded-xl p-6 border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold flex-shrink-0 text-lg">
                    7
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-3">Adjust Flash Power Only</h4>
                    <p className="text-gray-200 mb-4">
                      If the subject is too dark, increase flash power (1/4 → 1/2 → 1/1). If too bright, decrease power (1/4 → 1/8 → 1/16).
                    </p>
                    
                    <div className="bg-purple-900/30 rounded-lg p-4 mb-4 border border-purple-500/30">
                      <p className="text-sm font-medium text-purple-200 mb-2">Flash Power Scale:</p>
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                        <div className="text-gray-400">Full Power:</div>
                        <div className="text-white">1/1 (brightest, longest recycle)</div>
                        
                        <div className="text-gray-400">Half:</div>
                        <div>1/2</div>
                        
                        <div className="text-gray-400">Quarter:</div>
                        <div>1/4</div>
                        
                        <div className="text-gray-400">Eighth:</div>
                        <div>1/8 (good starting point)</div>
                        
                        <div className="text-gray-400">Lower:</div>
                        <div>1/16, 1/32, 1/64, 1/128...</div>
                      </div>
                    </div>

                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-sm text-gray-300">
                        <strong>Key principle:</strong> Camera settings control background. Flash power controls subject. Keep them separate in your mind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 8 */}
              <div className="bg-white/5 rounded-xl p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold flex-shrink-0 text-lg">
                    8
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-3">Shoot with Confidence</h4>
                    <p className="text-gray-200 mb-4">
                      Once you've dialled in the perfect exposure, your settings are locked. Every shot will be consistently exposed, regardless of ambient light changes.
                    </p>
                    <div className="bg-green-900/30 rounded-lg p-4 border border-green-500/30">
                      <p className="text-sm text-gray-300">
                        This is why professionals love this technique — consistency and repeatability. No auto mode guessing, no exposure surprises.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practical Example */}
          <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-500/40">
            <h3 className="text-2xl font-medium mb-6">Real-World Example: Evening Portrait</h3>
            
            <div className="space-y-4">
              <div className="bg-black/40 rounded-lg p-4">
                <p className="font-medium mb-2">Scenario:</p>
                <p className="text-sm text-gray-200">
                  You're photographing a portrait at dusk. The city skyline in the background is beautiful with lights turning on, but your subject's face is dark.
                </p>
              </div>

              <div className="bg-black/40 rounded-lg p-4">
                <p className="font-medium mb-2">Step 1-2: Manual mode, flash off</p>
                <p className="text-sm text-gray-200">Camera set to Manual, flash removed temporarily</p>
              </div>

              <div className="bg-blue-500/30 rounded-lg p-4 border border-blue-400/50">
                <p className="font-medium mb-2">Step 3: Expose for city skyline background</p>
                <p className="text-sm text-gray-200 mb-2">
                  Settings: <strong>1/60s, f/4, ISO 800</strong>
                </p>
                <p className="text-sm text-gray-200">
                  Result: City skyline looks perfect — lights glowing, sky has nice blue hour colour. Subject is completely dark (that's fine!).
                </p>
              </div>

              <div className="bg-black/40 rounded-lg p-4">
                <p className="font-medium mb-2">Step 4: Lock settings</p>
                <p className="text-sm text-gray-200">
                  Keep 1/60s, f/4, ISO 800 — don't change them!
                </p>
              </div>

              <div className="bg-orange-500/30 rounded-lg p-4 border border-orange-400/50">
                <p className="font-medium mb-2">Step 5: Add flash in manual mode</p>
                <p className="text-sm text-gray-200">Flash set to 1/8 power</p>
              </div>

              <div className="bg-black/40 rounded-lg p-4">
                <p className="font-medium mb-2">Step 6: Test shot</p>
                <p className="text-sm text-gray-200">Subject is a bit dark. Background still perfect.</p>
              </div>

              <div className="bg-purple-500/30 rounded-lg p-4 border border-purple-400/50">
                <p className="font-medium mb-2">Step 7: Increase flash power</p>
                <p className="text-sm text-gray-200 mb-2">
                  Change flash to <strong>1/4 power</strong>
                </p>
                <p className="text-sm text-gray-200">
                  Result: Subject perfectly lit, city skyline unchanged. Perfect!
                </p>
              </div>

              <div className="bg-green-500/30 rounded-lg p-4 border border-green-400/50">
                <p className="font-medium mb-2">Step 8: Final settings</p>
                <p className="text-sm text-gray-200 mb-2">
                  <strong>Camera:</strong> 1/60s, f/4, ISO 800 (controls background)
                </p>
                <p className="text-sm text-gray-200 mb-2">
                  <strong>Flash:</strong> 1/4 power manual (controls subject)
                </p>
                <p className="text-sm text-gray-200">
                  Beautiful cityscape with perfectly lit subject. Magazine-quality results!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Example Image: Night Portrait */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759905196245-986337eb00ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMHBvcnRyYWl0JTIwZmxhc2glMjBwaG90b2dyYXBoeSUyMG91dGRvb3J8ZW58MXx8fHwxNzY5OTgwNjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Night portrait using flash photography technique with balanced background"
            className="w-full h-[600px] object-cover"
          />
          <div className="bg-white p-4 text-sm text-gray-600 text-center">
            Flash allows perfect subject exposure whilst maintaining ambient background atmosphere
          </div>
        </div>

        {/* Off-Camera Flash */}
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-2xl p-8 sm:p-12 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Off-Camera Flash
            </h2>
          </div>

          <div className="max-w-4xl mb-10">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Taking your flash off the camera transforms your lighting from flat and direct to dimensional and professional. Off-camera flash gives you complete control over light direction, quality, and mood.
            </p>
          </div>

          {/* Hero Image: Off-Camera Flash Setup */}
          <div className="rounded-xl overflow-hidden shadow-lg mb-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1613378249465-7974844166a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmYlMjBjYW1lcmElMjBmbGFzaCUyMHNwZWVkbGlnaHQlMjB3aXJlbGVzc3xlbnwxfHx8fDE3Njk5ODA2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Off-camera flash speedlight wireless setup"
              className="w-full h-[500px] object-cover"
            />
            <div className="bg-white p-4 text-sm text-gray-600 text-center">
              Off-camera flash provides directional, professional lighting impossible with on-camera flash
            </div>
          </div>

          {/* Why Off-Camera Flash? */}
          <div className="bg-white rounded-xl p-8 mb-10">
            <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Why Use Off-Camera Flash?
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                <h4 className="text-lg font-medium text-gray-900 mb-3">On-Camera Flash Problems:</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>❌ Flat, unflattering light directly at subject</li>
                  <li>❌ Harsh shadows behind subject</li>
                  <li>❌ Red-eye in portraits</li>
                  <li>❌ "Deer in headlights" look</li>
                  <li>❌ No dimension or depth</li>
                  <li>❌ Amateurish "snapshot" quality</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <h4 className="text-lg font-medium text-gray-900 mb-3">Off-Camera Flash Benefits:</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✅ Directional, dimensional lighting</li>
                  <li>✅ Flattering shadows and highlights</li>
                  <li>✅ Control over light placement and angle</li>
                  <li>✅ Professional magazine-quality results</li>
                  <li>✅ Creative lighting possibilities</li>
                  <li>✅ Can use modifiers (softboxes, umbrellas)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Triggering Methods */}
          <div className="bg-white rounded-xl p-8 mb-10">
            <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              How to Trigger Off-Camera Flash
            </h3>

            <div className="space-y-6">
              <div className="border-2 border-purple-600 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-medium text-gray-900 mb-3">1. Wireless Radio Triggers (Recommended)</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      Small radio transmitter on camera hot shoe, receiver on flash. Most reliable method.
                    </p>
                    <div className="bg-purple-50 rounded-lg p-4 mb-3">
                      <p className="text-sm font-medium text-gray-900 mb-2">Pros:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Works at long distances (30-100m)</li>
                        <li>• No line-of-sight required</li>
                        <li>• Very reliable</li>
                        <li>• Can trigger multiple flashes</li>
                        <li>• Adjust flash power from camera (on advanced systems)</li>
                      </ul>
                    </div>
                    <p className="text-xs text-gray-600">
                      <strong>Popular systems:</strong> Godox X system, PocketWizard, Profoto Air, Yongnuo
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-blue-600 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-medium text-gray-900 mb-3">2. Optical Triggers</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      Off-camera flash "sees" the on-camera flash fire and triggers in response.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4 mb-3">
                      <p className="text-sm font-medium text-gray-900 mb-2">Pros:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Built into many modern flashes</li>
                        <li>• No additional equipment needed</li>
                        <li>• Free if flash has optical slave mode</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4 mb-3">
                      <p className="text-sm font-medium text-gray-900 mb-2">Cons:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Requires line of sight</li>
                        <li>• Limited range (5-15m)</li>
                        <li>• Can be triggered by other flashes</li>
                        <li>• Doesn't work well outdoors in bright light</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-green-600 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-medium text-gray-900 mb-3">3. TTL Cable / Sync Cable</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      Physical cable connects camera to flash. Old school but 100% reliable.
                    </p>
                    <div className="bg-green-50 rounded-lg p-4 mb-3">
                      <p className="text-sm font-medium text-gray-900 mb-2">Pros:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Absolutely reliable</li>
                        <li>• No batteries needed for trigger</li>
                        <li>• Inexpensive</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Cons:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Cable limits movement and distance</li>
                        <li>• Trip hazard</li>
                        <li>• Awkward for dynamic shooting</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Off-Camera Flash Positions */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Common Off-Camera Flash Positions
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6">
                <h4 className="text-lg font-medium text-gray-900 mb-3">45° Front Side Light</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Classic portrait lighting. Flash at 45° to subject's side and slightly above eye level.
                </p>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Effect:</strong> Dimensional face modelling, flattering shadows, professional look
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Use for:</strong> Headshots, portraits, interviews
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                <h4 className="text-lg font-medium text-gray-900 mb-3">90° Side Light</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Flash directly to the side. Half the face lit, half in shadow.
                </p>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Effect:</strong> Dramatic, high-contrast, artistic mood
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Use for:</strong> Creative portraits, dramatic character shots, fine art
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                <h4 className="text-lg font-medium text-gray-900 mb-3">Backlight / Rim Light</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Flash behind subject, pointing towards camera. Creates glowing edge.
                </p>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Effect:</strong> Separation from background, glowing hair/outline, depth
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Use for:</strong> Editorial, fashion, separating subject from background
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                <h4 className="text-lg font-medium text-gray-900 mb-3">High Above (Overhead)</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Flash high above and slightly in front, angled down at subject.
                </p>
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Effect:</strong> Simulates sunlight, flattering for most faces, natural look
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Use for:</strong> Outdoor fill flash, natural-looking portraits, events
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Light Modifiers */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Light Modifiers
          </h2>

          <div className="max-w-4xl mb-10">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Bare flash creates harsh, hard light with sharp shadows. Light modifiers soften and shape the light for more flattering, professional results.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg mb-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1763365894901-675a14ca8888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGFzaCUyMG1vZGlmaWVyJTIwc29mdGJveCUyMHVtYnJlbGxhJTIwZGlmZnVzZXJ8ZW58MXx8fHwxNzY5OTgwNjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Photography light modifiers including softboxes and umbrellas"
              className="w-full h-[500px] object-cover"
            />
            <div className="bg-white p-4 text-sm text-gray-600 text-center">
              Light modifiers transform harsh flash into soft, flattering professional lighting
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Softboxes</h3>
              <p className="text-gray-700 text-sm mb-4">
                Enclosed boxes with diffusion panels that create soft, even, directional light.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <p className="text-sm font-medium text-gray-900 mb-2">Best for:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Portrait photography</li>
                  <li>• Product photography</li>
                  <li>• Controlled studio lighting</li>
                  <li>• Flattering skin tones</li>
                </ul>
              </div>
              <p className="text-xs text-gray-600">
                <strong>Sizes:</strong> Small (30-60cm) for headshots. Large (90-120cm) for full-body. Strip boxes for edge lighting.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Umbrellas</h3>
              <p className="text-gray-700 text-sm mb-4">
                Affordable modifiers that spread and soften light. Shoot-through or reflective types.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <p className="text-sm font-medium text-gray-900 mb-2">Best for:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Large groups</li>
                  <li>• Event photography</li>
                  <li>• Budget-friendly lighting</li>
                  <li>• Quick setup situations</li>
                </ul>
              </div>
              <p className="text-xs text-gray-600">
                <strong>Types:</strong> White shoot-through (soft, even). Silver reflective (brighter, more contrast). Gold (warm tone).
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Beauty Dishes</h3>
              <p className="text-gray-700 text-sm mb-4">
                Shallow dishes that create focused, contrasty yet flattering light.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <p className="text-sm font-medium text-gray-900 mb-2">Best for:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Fashion photography</li>
                  <li>• Beauty / makeup shots</li>
                  <li>• Headshots with "pop"</li>
                  <li>• Highlighting facial features</li>
                </ul>
              </div>
              <p className="text-xs text-gray-600">
                <strong>Signature look:</strong> Soft yet defined light with subtle falloff. Creates catchlights in eyes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Grids & Snoots</h3>
              <p className="text-gray-700 text-sm mb-4">
                Narrow the light beam to create focused spots and prevent light spill.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <p className="text-sm font-medium text-gray-900 mb-2">Best for:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Hair lights</li>
                  <li>• Background accent lights</li>
                  <li>• Dramatic spotlighting</li>
                  <li>• Precise light control</li>
                </ul>
              </div>
              <p className="text-xs text-gray-600">
                <strong>Grids:</strong> Honeycomb patterns (10°, 20°, 30° angles). <strong>Snoots:</strong> Tube creates tight spot.
              </p>
            </div>
          </div>
        </div>

        {/* Three-Light Setup */}
        <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 rounded-2xl p-8 sm:p-12 mb-20 text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
              <Layers className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Three-Point Lighting Setup
            </h2>
          </div>

          <div className="mb-10">
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              Three-point lighting is the foundational professional lighting setup used in photography, film, and video. It uses three separate lights — key light, fill light, and rim/back light — to create dimensional, flattering illumination with complete control over mood and drama.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              This is the system that creates magazine covers, Hollywood portraits, and professional headshots.
            </p>
          </div>

          {/* The Three Lights Explained */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Key Light */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-2xl font-medium mb-3">Key Light</h3>
              <p className="text-gray-300 text-sm mb-4">
                The main light. Primary source that creates the dominant illumination and shadow pattern on your subject.
              </p>
              <div className="bg-orange-500/20 rounded-lg p-4 border border-orange-500/40">
                <p className="text-sm font-medium mb-2">Position:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 45° to the side of subject</li>
                  <li>• Slightly above eye level</li>
                  <li>• Aimed down at face</li>
                </ul>
              </div>
              <div className="mt-4 bg-white/5 rounded-lg p-3">
                <p className="text-xs text-gray-400">
                  <strong>Power:</strong> Brightest light (full or 1/2 power). Use modifier: Softbox for flattering skin tones.
                </p>
              </div>
            </div>

            {/* Fill Light */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-2xl font-medium mb-3">Fill Light</h3>
              <p className="text-gray-300 text-sm mb-4">
                Secondary light that fills in shadows created by the key light. Controls contrast and mood.
              </p>
              <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/40">
                <p className="text-sm font-medium mb-2">Position:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Opposite side from key light</li>
                  <li>• Near camera height</li>
                  <li>• Fills shadow side of face</li>
                </ul>
              </div>
              <div className="mt-4 bg-white/5 rounded-lg p-3">
                <p className="text-xs text-gray-400">
                  <strong>Power:</strong> Lower than key (1/4 to 1/2 key light power). Use umbrella or large softbox for even fill.
                </p>
              </div>
            </div>

            {/* Rim/Back Light */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-2xl font-medium mb-3">Rim/Back Light</h3>
              <p className="text-gray-300 text-sm mb-4">
                Light from behind subject that creates separation from background and adds depth.
              </p>
              <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-500/40">
                <p className="text-sm font-medium mb-2">Position:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Behind subject</li>
                  <li>• Opposite side from key</li>
                  <li>• High, angled down</li>
                </ul>
              </div>
              <div className="mt-4 bg-white/5 rounded-lg p-3">
                <p className="text-xs text-gray-400">
                  <strong>Power:</strong> Medium (1/4 to 1/2 power). Use grid or snoot to prevent lens flare. Creates glowing edge on hair/shoulder.
                </p>
              </div>
            </div>
          </div>

          {/* Lighting Diagram */}
          <div className="bg-white/5 rounded-xl p-8 mb-10 border border-white/10">
            <h3 className="text-2xl font-medium mb-6">Three-Point Lighting Diagram</h3>
            
            <div className="bg-black/40 rounded-xl p-8 border border-white/10">
              <div className="max-w-2xl mx-auto">
                {/* Simple ASCII diagram */}
                <pre className="text-sm text-gray-300 font-mono whitespace-pre leading-relaxed">
{`
                    RIM LIGHT (3)
                         🔦
                          |
                          |
                     
    KEY LIGHT (1)                    FILL LIGHT (2)
         🔦 \\                        / 🔦
              \\                    /
                \\                /
                  \\            /
                    \\        /
                      \\    /
                        👤  SUBJECT
                        
                        
                        📷
                      CAMERA
`}
                </pre>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="bg-orange-500/20 rounded-lg p-4 border border-orange-500/40">
                  <p className="text-sm text-orange-200">
                    <strong>Key Light:</strong> Front-left at 45°, slightly above eye level
                  </p>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/40">
                  <p className="text-sm text-blue-200">
                    <strong>Fill Light:</strong> Front-right near camera, fills shadows
                  </p>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-500/40">
                  <p className="text-sm text-purple-200">
                    <strong>Rim Light:</strong> Back-right, creates separation and depth
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Three-Light Setup */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-3xl tracking-tight mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Setting Up Three-Point Lighting
            </h3>

            <div className="space-y-6">
              <div className="bg-black/40 rounded-lg p-6 border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Start with Key Light Only</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Position key light at 45° to subject's side, slightly above eye level. Use a softbox. Set to full or 1/2 power.
                    </p>
                    <p className="text-gray-400 text-xs">
                      Test shot: Subject should have nice modelling on face with shadow on opposite side. This shadow will be filled later.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 rounded-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Add Fill Light</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Position on opposite side from key, near camera. Set power to 1/4 or 1/2 of key light power.
                    </p>
                    <p className="text-gray-400 text-xs mb-3">
                      Test shot: Shadows should soften but still be visible. Adjust power for desired mood — less fill = more dramatic, more fill = softer look.
                    </p>
                    <div className="bg-blue-500/20 rounded p-3 border border-blue-500/40">
                      <p className="text-xs text-blue-200">
                        <strong>Lighting Ratio:</strong> Key:Fill ratio of 2:1 (key twice as bright as fill) creates flattering portraits. 4:1 for more dramatic look.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 rounded-lg p-6 border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Add Rim/Back Light</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Position behind subject on opposite side from key light, high and angled down. Use grid or snoot to control spill. Set to 1/4 to 1/2 power.
                    </p>
                    <p className="text-gray-400 text-xs mb-3">
                      Test shot: Should see glowing edge on subject's hair and shoulder. Creates separation from background. Adjust angle to avoid lens flare.
                    </p>
                    <div className="bg-purple-500/20 rounded p-3 border border-purple-500/40">
                      <p className="text-xs text-purple-200">
                        <strong>Pro tip:</strong> Rim light is optional but adds professional polish. Can use coloured gel for creative edge lighting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 rounded-lg p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Fine-Tune & Adjust</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      With all three lights active, make final adjustments to power levels, positions, and modifiers.
                    </p>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>• Check histogram for proper exposure</li>
                      <li>• Ensure no blown highlights on face</li>
                      <li>• Verify rim light doesn't cause lens flare</li>
                      <li>• Adjust fill light power to control mood</li>
                      <li>• Take multiple test shots and review carefully</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mood Control with Three-Point Lighting */}
          <div className="bg-white/5 rounded-xl p-8 mt-10 border border-white/10">
            <h3 className="text-2xl font-medium mb-6">Controlling Mood with Light Ratios</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 rounded-lg p-6 border border-amber-500/30">
                <h4 className="text-lg font-medium mb-3">Low Contrast (Bright & Airy)</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Key and fill nearly equal power. Very soft shadows.
                </p>
                <p className="text-xs text-gray-400">
                  <strong>Ratio:</strong> 1:1 or 2:1<br/>
                  <strong>Use for:</strong> Beauty, commercial, high-key portraits
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-lg p-6 border border-blue-500/30">
                <h4 className="text-lg font-medium mb-3">Medium Contrast (Classic)</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Key light clearly stronger than fill. Visible but flattering shadows.
                </p>
                <p className="text-xs text-gray-400">
                  <strong>Ratio:</strong> 2:1 to 3:1<br/>
                  <strong>Use for:</strong> Professional headshots, editorial, most portraits
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-lg p-6 border border-gray-500/30">
                <h4 className="text-lg font-medium mb-3">High Contrast (Dramatic)</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Key light much stronger. Deep, defined shadows.
                </p>
                <p className="text-xs text-gray-400">
                  <strong>Ratio:</strong> 4:1 or higher<br/>
                  <strong>Use for:</strong> Dramatic portraits, film noir, character studies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Student Projects */}
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 sm:p-12 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Student Projects
            </h2>
          </div>

          <div className="space-y-8">
            {/* Project 1: Manual Exposure + Flash */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Project: Manual Exposure + Flash Power Technique
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Master the professional technique of exposing for the background in manual mode, then adjusting flash power for the subject.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Assignment:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Find a location with interesting background (window, cityscape, sunset, room with lights)</li>
                    <li>• Set camera to Manual mode</li>
                    <li>• Without flash: Expose for background only</li>
                    <li>• Lock camera settings (shutter, aperture, ISO)</li>
                    <li>• Add flash in manual mode, adjust power for subject</li>
                    <li>• Create 3 versions: dark background, balanced, bright background</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Learning Goals:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Understand separation of ambient and flash exposure</li>
                    <li>• Learn to control background brightness independently</li>
                    <li>• Master flash power adjustment</li>
                    <li>• Experience creative control over final image</li>
                    <li>• Compare results against camera's auto flash mode</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 text-white rounded-lg p-6 mt-6">
                <p className="font-medium mb-2">Deliverable:</p>
                <p className="text-sm">
                  Submit 3 images showing same subject with different background exposures (dark, balanced, bright). Include settings used for each.
                </p>
              </div>
            </div>

            {/* Project 2: Off-Camera Flash */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Project: Off-Camera Flash Exploration
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Experiment with off-camera flash positions to understand how light direction affects mood and dimension.
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 mb-6">
                <p className="font-medium text-gray-900 mb-3">Assignment:</p>
                <p className="text-sm text-gray-700 mb-4">
                  Photograph the same subject with flash in four different positions:
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>1. <strong>On-camera</strong> (for comparison)</li>
                  <li>2. <strong>45° front side light</strong> (classic portrait position)</li>
                  <li>3. <strong>90° side light</strong> (dramatic split lighting)</li>
                  <li>4. <strong>Rim/back light</strong> (separation and edge glow)</li>
                </ul>
              </div>

              <div className="bg-gray-900 text-white rounded-lg p-6">
                <p className="font-medium mb-2">Analysis Questions:</p>
                <ul className="text-sm space-y-1">
                  <li>• Which position creates the most flattering portrait?</li>
                  <li>• How does light direction affect mood?</li>
                  <li>• Which creates the most three-dimensional look?</li>
                  <li>• What's the difference between on-camera and off-camera flash?</li>
                </ul>
              </div>
            </div>

            {/* Project 3: Three-Point Lighting */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Project: Three-Point Lighting Setup
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Create a professional three-point lighting setup using three off-camera flashes.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <p className="font-medium text-gray-900 mb-3">Assignment:</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Set up key light at 45° with softbox</li>
                  <li>• Add fill light opposite side, lower power</li>
                  <li>• Add rim light behind subject with grid</li>
                  <li>• Photograph portrait with complete three-point setup</li>
                  <li>• Create comparison shots showing:</li>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>- Key light only</li>
                    <li>- Key + Fill</li>
                    <li>- Key + Fill + Rim (complete setup)</li>
                  </ul>
                </ul>
              </div>

              <div className="bg-gray-900 text-white rounded-lg p-6">
                <p className="font-medium mb-2">Advanced Challenge:</p>
                <p className="text-sm">
                  Create three versions with different lighting ratios: low contrast (2:1), medium contrast (3:1), and high contrast/dramatic (4:1 or higher). Compare the mood each creates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Flash Photography Tips */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Essential Flash Photography Tips
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Always Shoot RAW with Flash</h3>
                  <p className="text-gray-700 text-sm">
                    RAW files give you maximum flexibility to adjust white balance, recover highlights, and fine-tune flash balance in post-production.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Watch Your Sync Speed</h3>
                  <p className="text-gray-700 text-sm">
                    Don't exceed your camera's flash sync speed (typically 1/200-1/250s) unless using High-Speed Sync mode. Check your camera manual.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Use Manual Flash Mode for Control</h3>
                  <p className="text-gray-700 text-sm">
                    TTL is convenient but unpredictable. Manual flash mode gives you precise, repeatable results every time.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Bounce Flash When Possible</h3>
                  <p className="text-gray-700 text-sm">
                    If using on-camera flash indoors, bounce off ceiling or walls for softer, more natural light. Avoid bouncing off coloured surfaces.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Carry Spare Batteries</h3>
                  <p className="text-gray-700 text-sm">
                    Flash drains batteries quickly, especially at higher power settings. Always have fresh spares. Consider rechargeable battery packs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Bigger Modifiers = Softer Light</h3>
                  <p className="text-gray-700 text-sm">
                    The larger your light source relative to subject, the softer the light. Large softbox creates much softer light than bare flash.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 rounded-2xl p-8 sm:p-12 text-white mb-20">
          <h2 className="text-3xl sm:text-4xl tracking-tight mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Key Takeaways
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Separate control: background vs subject</p>
                <p className="text-gray-300">Camera settings (shutter, aperture, ISO) control ambient background. Flash power controls subject brightness. This independent control is the foundation of professional flash photography.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Master the manual exposure + flash power technique</p>
                <p className="text-gray-300">Expose for background first (flash off), lock settings, then add flash and adjust power for subject. This gives complete creative control over every aspect of your image.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Off-camera flash creates dimension</p>
                <p className="text-gray-300">Moving flash off-camera transforms flat lighting into dimensional, professional results. Light direction controls mood — 45° creates classic flattering portraits, 90° creates drama.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Three-point lighting is the professional standard</p>
                <p className="text-gray-300">Key light (main), fill light (softens shadows), rim light (separation). This system creates magazine-quality portraits with complete control over contrast and mood through lighting ratios.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Modifiers transform light quality</p>
                <p className="text-gray-300">Bare flash is harsh. Softboxes, umbrellas, and beauty dishes soften and shape light. Larger modifiers = softer light. Grids and snoots focus and control light spill.</p>
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
                Understanding aperture, shutter speed, and ISO is fundamental to controlling flash exposure
              </p>
            </Link>

            <Link
              to="/resources/histogram-guide"
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                Histogram Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Learn to read histograms to ensure perfect flash exposure and avoid blown highlights
              </p>
            </Link>

            <Link
              to="/resources/colour-theory"
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                Colour Theory
              </h3>
              <p className="text-gray-600 text-sm">
                Understanding colour relationships helps when using gels and colour temperature with flash
              </p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
