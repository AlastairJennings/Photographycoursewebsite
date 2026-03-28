import { Link } from 'react-router';
import { ArrowLeft, Camera, Sun, Moon, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ZoneSystem() {
  return (
    <div className="bg-gradient-to-br from-gray-50/30 via-white to-slate-50/30 min-h-screen">
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
          <h1 className="text-4xl sm:text-6xl tracking-tight bg-gradient-to-r from-gray-800 via-gray-600 to-slate-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Roslindale, serif' }}>
            The Zone System
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Master exposure and tonal control with Ansel Adams' revolutionary technique
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1657589905175-2b83621fdff7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbnNlbCUyMGFkYW1zJTIwbGFuZHNjYXBlJTIwYmxhY2slMjB3aGl0ZSUyMG1vdW50YWlufGVufDF8fHx8MTc2OTgxMDkwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Dramatic landscape photography demonstrating tonal range"
            className="w-full h-[400px] sm:h-[500px] object-cover"
          />
          <div className="bg-gray-900 text-white p-4 text-center">
            <p className="text-sm italic">Example of a full tonal range from pure black to pure white</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            What is the Zone System?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            The Zone System is a photographic technique for determining optimal film exposure and development, formalized by <strong>Ansel Adams</strong> and <strong>Fred Archer</strong> in 1939-1940. It provides photographers with a systematic method of precisely defining the relationship between the way they visualize the photographic subject and the final results.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            The system divides a scene into 11 zones (0 through X), ranging from pure black to pure white, with middle gray at Zone V. By understanding and applying the Zone System, photographers can previsualize how a scene will be rendered and make informed decisions about exposure and development to achieve their creative vision.
          </p>

          <div className="p-6 sm:p-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl mb-6">
            <p className="text-xl sm:text-2xl italic text-center mb-2">
              "The negative is the score, and the print is the performance."
            </p>
            <p className="text-sm text-gray-400 text-center">— Ansel Adams</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1686996077700-f83036b4640f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGxpZ2h0JTIwbWV0ZXIlMjBjYW1lcmElMjBleHBvc3VyZXxlbnwxfHx8fDE3Njk4MTA5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Light meter and camera exposure metering"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-gray-100">
                <p className="text-sm text-gray-700">Precise metering is essential for the Zone System</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1631144685408-60cddad4e6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGhpc3RvZ3JhbSUyMGV4cG9zdXJlJTIwbWV0ZXJ8ZW58MXx8fHwxNzY5ODEwOTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Camera histogram showing exposure distribution"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-gray-100">
                <p className="text-sm text-gray-700">Modern histograms are the digital equivalent of zone visualization</p>
              </div>
            </div>
          </div>
        </div>

        {/* The 11 Zones */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            The 11 Zones Explained
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Each zone represents one stop of exposure difference from the adjacent zones. Understanding these zones helps you place tones exactly where you want them in your final image.
          </p>

          {/* Visual Tonal Scale */}
          <div className="mb-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1580122252289-8eccefa9ce2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdoaXRlJTIwdG9uYWwlMjByYW5nZSUyMGdyYWRpZW50fGVufDF8fHx8MTc2OTgxMDkwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tonal gradient from black to white"
                className="w-full h-32 object-cover"
              />
            </div>
            <div className="mt-4 flex justify-between text-xs text-gray-600 font-mono">
              <span>Zone 0</span>
              <span>Zone I</span>
              <span>Zone II</span>
              <span>Zone III</span>
              <span>Zone IV</span>
              <span className="font-bold text-orange-600">Zone V</span>
              <span>Zone VI</span>
              <span>Zone VII</span>
              <span>Zone VIII</span>
              <span>Zone IX</span>
              <span>Zone X</span>
            </div>
          </div>

          <div className="space-y-3">
            {/* Zone 0 */}
            <div className="flex items-start gap-4 p-4 sm:p-5 bg-black text-white rounded-lg">
              <div className="font-bold text-xl min-w-[70px] font-mono">Zone 0</div>
              <div className="flex-1">
                <p className="font-semibold mb-1">Pure Black</p>
                <p className="text-sm text-gray-300">Complete absence of light. No texture or detail. Maximum density on film. Examples: Deep cave shadows, unlit areas.</p>
              </div>
            </div>

            {/* Zone I */}
            <div className="flex items-start gap-4 p-4 sm:p-5 rounded-lg" style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>
              <div className="font-bold text-xl min-w-[70px] font-mono">Zone I</div>
              <div className="flex-1">
                <p className="font-semibold mb-1">Near Black</p>
                <p className="text-sm text-gray-300">Effective threshold of film. First hint of tone with slight texture barely visible. Examples: Dark shadows under trees at dusk.</p>
              </div>
            </div>

            {/* Zone II */}
            <div className="flex items-start gap-4 p-4 sm:p-5 rounded-lg" style={{ backgroundColor: '#333333', color: '#ffffff' }}>
              <div className="font-bold text-xl min-w-[70px] font-mono">Zone II</div>
              <div className="flex-1">
                <p className="font-semibold mb-1">Textured Black</p>
                <p className="text-sm text-gray-300">First appearance of texture. Deep shadows with minimal detail visible. Examples: Black clothing with visible fabric texture.</p>
              </div>
            </div>

            {/* Zone III */}
            <div className="flex items-start gap-4 p-4 sm:p-5 rounded-lg" style={{ backgroundColor: '#4d4d4d', color: '#ffffff' }}>
              <div className="font-bold text-xl min-w-[70px] font-mono">Zone III</div>
              <div className="flex-1">
                <p className="font-semibold mb-1">Average Dark Materials</p>
                <p className="text-sm text-gray-300">Dark materials and low values showing adequate texture. Examples: Dark foliage, shadows with detail, dark wood.</p>
              </div>
            </div>

            {/* Zone IV */}
            <div className="flex items-start gap-4 p-4 sm:p-5 rounded-lg" style={{ backgroundColor: '#666666', color: '#ffffff' }}>
              <div className="font-bold text-xl min-w-[70px] font-mono">Zone IV</div>
              <div className="flex-1">
                <p className="font-semibold mb-1">Dark Foliage & Stone</p>
                <p className="text-sm text-gray-300">Average dark foliage, dark stone, or landscape shadow. Normal shadow value for Caucasian skin in sunlight.</p>
              </div>
            </div>

            {/* Zone V - KEY ZONE */}
            <div className="flex items-start gap-4 p-4 sm:p-5 rounded-lg border-4 border-orange-500" style={{ backgroundColor: '#808080', color: '#ffffff' }}>
              <div className="font-bold text-xl min-w-[70px] font-mono">Zone V</div>
              <div className="flex-1">
                <p className="font-semibold mb-1 flex items-center gap-2">
                  Middle Gray (18% Gray Card)
                  <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded font-sans">Key Zone</span>
                </p>
                <p className="text-sm text-gray-300">The pivotal zone. Clear north sky, dark skin, gray stone, average weathered wood. <strong>This is what your camera meter aims for.</strong></p>
              </div>
            </div>

            {/* Zone VI */}
            <div className="flex items-start gap-4 p-4 sm:p-5 rounded-lg" style={{ backgroundColor: '#999999', color: '#000000' }}>
              <div className="font-bold text-xl min-w-[70px] font-mono">Zone VI</div>
              <div className="flex-1">
                <p className="font-semibold mb-1">Average Caucasian Skin</p>
                <p className="text-sm text-gray-700">Diffuse daylight on average Caucasian skin, light stone, shadows on snow in sunlit landscapes.</p>
              </div>
            </div>

            {/* Zone VII */}
            <div className="flex items-start gap-4 p-4 sm:p-5 rounded-lg" style={{ backgroundColor: '#b3b3b3', color: '#000000' }}>
              <div className="font-bold text-xl min-w-[70px] font-mono">Zone VII</div>
              <div className="flex-1">
                <p className="font-semibold mb-1">Very Light Skin & Light Gray</p>
                <p className="text-sm text-gray-700">Very light skin tones, light gray objects, average snow with acute side lighting.</p>
              </div>
            </div>

            {/* Zone VIII */}
            <div className="flex items-start gap-4 p-4 sm:p-5 rounded-lg" style={{ backgroundColor: '#cccccc', color: '#000000' }}>
              <div className="font-bold text-xl min-w-[70px] font-mono">Zone VIII</div>
              <div className="flex-1">
                <p className="font-semibold mb-1">Whites with Texture</p>
                <p className="text-sm text-gray-700">High values with delicate textures. Snow in flat lighting, textured white surfaces, white painted walls.</p>
              </div>
            </div>

            {/* Zone IX */}
            <div className="flex items-start gap-4 p-4 sm:p-5 rounded-lg" style={{ backgroundColor: '#e6e6e6', color: '#000000' }}>
              <div className="font-bold text-xl min-w-[70px] font-mono">Zone IX</div>
              <div className="flex-1">
                <p className="font-semibold mb-1">Near White</p>
                <p className="text-sm text-gray-700">Slight tone without texture. Glaring white surfaces, snow in full sunlight, bright clouds.</p>
              </div>
            </div>

            {/* Zone X */}
            <div className="flex items-start gap-4 p-4 sm:p-5 bg-white border-2 border-gray-300 rounded-lg">
              <div className="font-bold text-xl min-w-[70px] font-mono">Zone X</div>
              <div className="flex-1">
                <p className="font-semibold mb-1">Pure White</p>
                <p className="text-sm text-gray-700">Pure white of the paper base. Complete lack of density. Light sources, specular reflections, sun on water.</p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Use the Zone System */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            How to Use the Zone System
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Step 1: Previsualization</h3>
              </div>
              <p className="text-gray-700">
                Before taking the photo, visualize how you want the final image to look. Identify the important tones in your scene and decide which zone they should fall in.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-fuchsia-600 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Step 2: Meter the Scene</h3>
              </div>
              <p className="text-gray-700">
                Use a spot meter to measure different areas of your scene. Remember: your camera meter wants to make everything Zone V (middle gray).
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Step 3: Place and Fall</h3>
              </div>
              <p className="text-gray-700">
                <strong>Place</strong> your key tone on the zone you want it to be. Other tones will <strong>fall</strong> where they may based on the scene's actual brightness range.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <Moon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Step 4: Expose for Shadows</h3>
              </div>
              <p className="text-gray-700">
                Classic rule: "Expose for the shadows, develop for the highlights." Ensure shadow detail is captured on the negative; you can control highlights in development.
              </p>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Adaptation: "Expose to the Right"</h3>
            <p className="text-gray-700 mb-3">
              In digital photography, the Zone System concept has evolved into "Expose to the Right" (ETTR). This technique involves exposing as bright as possible without clipping highlights, maximizing data capture in your RAW file.
            </p>
            <p className="text-gray-700">
              Digital sensors capture more tonal information in highlights than shadows, opposite to film. Check your histogram and ensure highlights aren't clipped (Zone IX-X depending on the scene).
            </p>
          </div>
        </div>

        {/* Practical Example with Image */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            Practical Example: Photographing a Forest Landscape
          </h2>
          
          <div className="mb-8 rounded-xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759355861893-c9d33bed8df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBzaGFkb3dzJTIwc3VubGlnaHQlMjBjb250cmFzdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2OTgxMDkwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Forest scene with sunlight and shadows demonstrating tonal range"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Scene: Forest with Sunlit Clearing</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="min-w-[50px] h-12 rounded-xl bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center text-white font-bold font-mono">
                  III
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1">Deep Forest Shadows</p>
                  <p className="text-sm text-gray-700">You want these dark but with some visible texture. Place at Zone III to preserve shadow detail while maintaining the moody darkness of the forest floor.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border-2 border-orange-500">
                <div className="min-w-[50px] h-12 rounded-xl bg-gray-500 flex items-center justify-center text-white font-bold font-mono">
                  V
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                    Green Foliage in Shade
                    <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded">Key Tone</span>
                  </p>
                  <p className="text-sm text-gray-700">Average tone, meter here for your base exposure. This is your key tone at Zone V. The foliage in open shade represents the middle gray value.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="min-w-[50px] h-12 rounded-xl bg-gray-300 flex items-center justify-center text-gray-900 font-bold font-mono border-2 border-gray-400">
                  VII
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1">Sunlit Grass & Foliage</p>
                  <p className="text-sm text-gray-700">Bright but should retain texture. Will fall at Zone VII, two stops above Zone V. The sunlight creates a bright, luminous appearance while maintaining leaf and grass detail.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="min-w-[50px] h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-900 font-bold font-mono border-2 border-gray-400">
                  IX
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1">Bright Sky Through Trees</p>
                  <p className="text-sm text-gray-700">Very bright, minimal detail needed. Falls at Zone IX. Check histogram to ensure it's not clipped unless you want pure white for creative effect.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-5 bg-white rounded-lg shadow-sm border-l-4 border-green-600">
              <p className="font-semibold text-gray-900 mb-2">Exposure Decision:</p>
              <p className="text-gray-700">
                Meter the green foliage in shade (Zone V) and expose normally. This placement ensures shadows at Zone III retain texture, sunlit areas at Zone VII remain bright but detailed, and the sky at Zone IX is acceptable if detail isn't critical there. The resulting image has a full tonal range from textured shadows to bright highlights.
              </p>
            </div>
          </div>
        </div>

        {/* Another Example - High Contrast Scene */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            Working with High Contrast Scenes
          </h2>

          <div className="mb-6 rounded-xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1769450240696-7cbeaa5fb3a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYXRpYyUyMGxhbmRzY2FwZSUyMGhpZ2glMjBjb250cmFzdCUyMHNoYWRvd3N8ZW58MXx8fHwxNzY5ODEwOTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Dramatic high contrast landscape photography"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <p className="text-gray-700 mb-6 text-lg">
            When faced with scenes that exceed your camera's dynamic range (typically 8-10 zones for digital, 7-9 for film), you must make creative decisions about what tones to preserve and what to sacrifice.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Option 1: Expose for Highlights</h3>
              <p className="text-sm text-gray-700 mb-3">
                Place your brightest important tone at Zone VIII to preserve highlight detail. Shadows may fall to Zone 0-I (pure black).
              </p>
              <p className="text-xs text-gray-600 italic">
                Best for: Backlit subjects, dramatic silhouettes, high-key photography
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Option 2: Expose for Shadows</h3>
              <p className="text-sm text-gray-700 mb-3">
                Place your darkest important shadow at Zone III to ensure texture. Highlights may blow out to Zone X (pure white).
              </p>
              <p className="text-xs text-gray-600 italic">
                Best for: Low-key photography, moody scenes, when shadow detail is critical
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg md:col-span-2">
              <h3 className="font-semibold text-gray-900 mb-3">Option 3: Compromise Exposure</h3>
              <p className="text-sm text-gray-700 mb-3">
                Find a middle ground that captures partial detail in both highlights and shadows. Some information will be lost at both ends, but you'll have a more balanced exposure.
              </p>
              <p className="text-xs text-gray-600 italic">
                Best for: Scenes where both highlight and shadow detail matter, HDR candidates
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm mb-8">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            Key Takeaways
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-violet-50 rounded-xl">
              <div className="text-3xl mb-3">👁️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Previsualization</h3>
              <p className="text-sm text-gray-700">See the final image in your mind before pressing the shutter. Know where you want each tone to fall.</p>
            </div>

            <div className="p-6 bg-fuchsia-50 rounded-xl">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Zone V is Key</h3>
              <p className="text-sm text-gray-700">Your meter always aims for middle gray. Adjust exposure to place tones where you want them, not where the camera thinks they should be.</p>
            </div>

            <div className="p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-semibold text-gray-900 mb-2">Control Contrast</h3>
              <p className="text-sm text-gray-700">Understanding zones helps you manage the tonal range and contrast in your images, creating the mood you envision.</p>
            </div>
          </div>
        </div>

        {/* Further Reading */}
        <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-8 sm:p-12 shadow-sm">
          <h2 className="text-3xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            Further Learning
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Recommended Books</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span><em className="font-semibold">The Negative</em> by Ansel Adams</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span><em className="font-semibold">The Print</em> by Ansel Adams</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span><em className="font-semibold">The Camera</em> by Ansel Adams</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 mt-1">•</span>
                  <span><em className="font-semibold">Way Beyond Monochrome</em> by Ralph Lambrecht & Chris Woodhouse (digital adaptation)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Practice Exercises</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold mt-1">01</span>
                  <span>Purchase or create an 18% gray card and practice metering with it in different lighting conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold mt-1">02</span>
                  <span>Photograph the same scene exposed for different zones and compare the results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold mt-1">03</span>
                  <span>Use your camera's histogram to identify where different tones fall in a scene</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold mt-1">04</span>
                  <span>Convert a color image to black and white and analyze its tonal distribution across the zones</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
