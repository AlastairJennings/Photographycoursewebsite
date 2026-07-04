import { ArrowLeft, Image, Sliders, Layers, FolderOpen, Download, Sparkles, BookOpen, CheckCircle2, Info, AlertCircle, Monitor, Palette, Zap, Settings, Eye } from 'lucide-react';
import { Link } from 'react-router';
import { SEO } from './SEO';
import { getSEOConfig } from '../config/seo-config';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PostProcessing() {
  const seoConfig = getSEOConfig('post-processing');
  
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
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-20 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/30">
              <Sliders className="w-4 h-4 text-white" />
              <span className="text-xs uppercase tracking-wide text-white font-medium">Post-Processing Workflow</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white mb-8 leading-tight" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Post-Processing Workflow
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-100 leading-relaxed max-w-3xl">
              Transform RAW captures into stunning final images. Master professional workflows in Lightroom, Photoshop, and Capture One, with non-destructive editing techniques and efficient organisation systems.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
        
        {/* Introduction */}
        <div className="max-w-4xl mb-20">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Post-processing is where you refine your vision, bringing out the best in your photographs. A professional workflow ensures consistency, efficiency, and non-destructive editing that preserves your original RAW files whilst giving you complete creative control.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This guide covers industry-standard software (Adobe Lightroom, Photoshop, Capture One), alternative options, and the complete workflow from import through organisation to final export.
          </p>
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1764974033674-fe324b36c1e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMGVkaXRpbmclMjBsaWdodHJvb20lMjB3b3Jrc3BhY2UlMjBjb21wdXRlcnxlbnwxfHx8fDE3Njk5ODExNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional photo editing workspace with Lightroom"
            className="w-full h-[600px] object-cover"
          />
          <div className="bg-white p-4 text-sm text-gray-600 text-center">
            Professional post-processing transforms RAW captures into polished final images
          </div>
        </div>

        {/* Non-Destructive Editing Philosophy */}
        <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 rounded-2xl p-8 sm:p-12 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              The Non-Destructive Editing Philosophy
            </h2>
          </div>

          <div className="max-w-4xl mb-10">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Professional photographers never modify their original RAW files. All edits are stored as instructions — metadata, adjustment layers, and settings — that can be changed or removed at any time without degrading image quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border-4 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-medium text-gray-900">Non-Destructive Editing</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Original RAW file remains untouched. All adjustments stored separately as instructions.
              </p>
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Benefits:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Can always revert to original</li>
                  <li>✓ No quality loss from repeated edits</li>
                  <li>✓ Experiment freely without risk</li>
                  <li>✓ Create multiple versions from one RAW</li>
                  <li>✓ Change your mind anytime</li>
                  <li>✓ Professional standard workflow</li>
                </ul>
              </div>
              <div className="bg-gray-900 text-white rounded-lg p-4">
                <p className="text-sm">
                  <strong>How it works:</strong> Lightroom stores edits in catalog database. Photoshop uses adjustment layers. Capture One uses sessions/catalogs.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border-4 border-red-500">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-medium text-gray-900">Destructive Editing</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Directly modifying pixel data, permanently altering the file. Avoid this workflow.
              </p>
              <div className="bg-red-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Problems:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✗ Original data lost forever</li>
                  <li>✗ Quality degrades with each save</li>
                  <li>✗ Cannot undo after closing file</li>
                  <li>✗ Compression artifacts accumulate</li>
                  <li>✗ Limits creative flexibility</li>
                  <li>✗ Unprofessional approach</li>
                </ul>
              </div>
              <div className="bg-gray-900 text-white rounded-lg p-4">
                <p className="text-sm">
                  <strong>Examples to avoid:</strong> Opening JPEG in basic editor, saving over original. Editing in Instagram and re-saving. Using "Save" instead of "Export".
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 text-white rounded-xl p-8 mt-10">
            <h3 className="text-2xl font-medium mb-4">The Golden Rule</h3>
            <p className="text-lg mb-4">
              <strong>Never overwrite your original RAW files.</strong> Always work non-destructively, export edited versions as separate files.
            </p>
            <p className="text-sm text-blue-100">
              Your RAW files are like film negatives — they're precious originals that should be preserved perfectly forever.
            </p>
          </div>
        </div>

        {/* The Complete Workflow */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            The Complete Post-Processing Workflow
          </h2>

          <div className="space-y-6">
            {/* Step 1: Import & Backup */}
            <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-purple-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold flex-shrink-0 text-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Import & Backup
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Transfer images from camera/memory card to computer. Create immediate backup to prevent data loss.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <p className="font-medium text-gray-900 mb-3">Best Practices:</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Don't delete from card until backed up:</strong> Keep originals on card until safe on computer</li>
                      <li>• <strong>Import to organized folder:</strong> Use date-based structure (2025/02-February/2025-02-01-Shoot-Name)</li>
                      <li>• <strong>Create immediate backup:</strong> External hard drive or cloud storage (or both)</li>
                      <li>• <strong>Apply metadata on import:</strong> Copyright, keywords, location if applicable</li>
                      <li>• <strong>3-2-1 backup rule:</strong> 3 copies, 2 different media types, 1 off-site</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Cull & Select */}
            <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold flex-shrink-0 text-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Cull & Select
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Review all images and identify keepers. Reject out-of-focus, badly exposed, or duplicate shots.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <p className="font-medium text-gray-900 mb-3">Selection Methods:</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Star ratings:</strong> 5 stars (portfolio), 4 (deliver to client), 3 (good), 2 (maybe), 1 (technical reference), 0 (reject)</li>
                      <li>• <strong>Flag system:</strong> Pick (good), Reject (delete), Unflagged (undecided)</li>
                      <li>• <strong>Colour labels:</strong> Red (urgent edit), Yellow (needs work), Green (ready to deliver), etc.</li>
                      <li>• <strong>Multiple passes:</strong> First pass removes obvious rejects. Second pass rates keepers. Third pass identifies hero shots</li>
                      <li>• <strong>Be ruthless:</strong> Only edit the best. Editing 200 mediocre shots takes longer than perfecting 20 great ones</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Global Adjustments */}
            <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold flex-shrink-0 text-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Global Adjustments (RAW Processing)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Apply foundational edits to entire image: exposure, white balance, contrast, colour.
                  </p>
                  <div className="bg-green-50 rounded-lg p-6 mb-4">
                    <p className="font-medium text-gray-900 mb-3">Editing Order (Lightroom/Capture One):</p>
                    <ol className="text-sm text-gray-700 space-y-2">
                      <li>1. <strong>Lens corrections:</strong> Enable profile corrections for distortion/vignetting</li>
                      <li>2. <strong>Crop & straighten:</strong> Composition and horizon levelling</li>
                      <li>3. <strong>White balance:</strong> Correct colour temperature (or creative adjustment)</li>
                      <li>4. <strong>Exposure:</strong> Overall brightness adjustment</li>
                      <li>5. <strong>Contrast:</strong> Tonal separation (highlights, shadows, whites, blacks)</li>
                      <li>6. <strong>Vibrance/Saturation:</strong> Colour intensity</li>
                      <li>7. <strong>Clarity/Texture:</strong> Midtone contrast and detail</li>
                      <li>8. <strong>Tone curve:</strong> Fine-tune contrast and mood</li>
                      <li>9. <strong>HSL adjustments:</strong> Individual colour refinement</li>
                      <li>10. <strong>Sharpening:</strong> Detail enhancement (output sharpening comes later)</li>
                      <li>11. <strong>Noise reduction:</strong> Clean up high-ISO grain</li>
                    </ol>
                  </div>
                  <div className="bg-gray-900 text-white rounded-lg p-4">
                    <p className="text-sm">
                      <strong>Pro tip:</strong> Work top-to-bottom in adjustment panels. Foundation first (exposure, white balance), refinement later (colours, sharpening).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Local Adjustments */}
            <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-orange-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center text-white font-bold flex-shrink-0 text-lg">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Local Adjustments (Selective Edits)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Refine specific areas: brighten faces, darken skies, enhance eyes, dodge and burn.
                  </p>
                  <div className="bg-orange-50 rounded-lg p-6">
                    <p className="font-medium text-gray-900 mb-3">Local Adjustment Tools:</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Graduated filter:</strong> Darken skies, create vignettes</li>
                      <li>• <strong>Radial filter:</strong> Draw attention to subject, create spotlights</li>
                      <li>• <strong>Adjustment brush:</strong> Paint adjustments onto specific areas</li>
                      <li>• <strong>AI masking (modern software):</strong> Select subject, sky, background automatically</li>
                      <li>• <strong>Dodge & burn:</strong> Lighten highlights, deepen shadows for dimension</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5: Advanced Retouching (Optional) */}
            <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-red-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-pink-600 flex items-center justify-center text-white font-bold flex-shrink-0 text-lg">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Advanced Retouching (Photoshop)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    For images requiring pixel-level work: remove objects, advanced compositing, frequency separation.
                  </p>
                  <div className="bg-red-50 rounded-lg p-6">
                    <p className="font-medium text-gray-900 mb-3">When to Move to Photoshop:</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Remove distractions (power lines, blemishes, unwanted objects)</li>
                      <li>• Advanced portrait retouching (frequency separation, skin smoothing)</li>
                      <li>• Compositing multiple images</li>
                      <li>• Complex selections and masking</li>
                      <li>• Text and graphic overlays</li>
                      <li>• Advanced creative effects impossible in RAW processors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6: Export */}
            <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-indigo-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0 text-lg">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Export for Intended Use
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Create final files optimized for specific purposes: web, print, social media, client delivery.
                  </p>
                  <div className="bg-indigo-50 rounded-lg p-6">
                    <p className="font-medium text-gray-900 mb-3">Export Settings by Use:</p>
                    <div className="space-y-4">
                      <div className="bg-white rounded p-4">
                        <p className="font-medium text-sm text-gray-900 mb-2">Web/Portfolio:</p>
                        <p className="text-xs text-gray-700">JPEG, sRGB, 2048px long edge, Quality 80-90%, sharpen for screen</p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <p className="font-medium text-sm text-gray-900 mb-2">Social Media (Instagram):</p>
                        <p className="text-xs text-gray-700">JPEG, sRGB, 1080px square or 1080×1350px portrait, Quality 85%, sharpen medium</p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <p className="font-medium text-sm text-gray-900 mb-2">Print (High Quality):</p>
                        <p className="text-xs text-gray-700">TIFF or JPEG, Adobe RGB or ProPhoto RGB, full resolution (300 PPI), Quality 100%, sharpen for print</p>
                      </div>
                      <div className="bg-white rounded p-4">
                        <p className="font-medium text-sm text-gray-900 mb-2">Client Delivery:</p>
                        <p className="text-xs text-gray-700">JPEG, sRGB, 4000px long edge, Quality 90-95%, embedded copyright metadata</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Software Deep Dive: Adobe Lightroom */}
        <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 rounded-2xl p-8 sm:p-12 mb-20 text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Image className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Adobe Lightroom Classic
            </h2>
          </div>

          <div className="mb-10">
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              Industry-standard software for RAW processing, organization, and batch editing. Lightroom Classic is the professional photographer's primary tool for managing and developing thousands of images efficiently.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-medium mb-4">Strengths</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Catalog system:</strong> Manage 100,000+ images in searchable database
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Batch editing:</strong> Apply edits to hundreds of images instantly
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Non-destructive RAW processing:</strong> Complete tonal and colour control
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>AI-powered masking:</strong> Select subject, sky, people automatically
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Presets:</strong> One-click looks, create custom presets
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Integration:</strong> Seamless handoff to Photoshop for advanced work
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-medium mb-4">Best For</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 mt-2"></div>
                  <div>Wedding and event photographers (batch editing hundreds of images)</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 mt-2"></div>
                  <div>Landscape photographers (powerful local adjustments, graduated filters)</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 mt-2"></div>
                  <div>Stock photographers (keyword tagging, metadata management)</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 mt-2"></div>
                  <div>Anyone managing large photo libraries</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 mt-2"></div>
                  <div>Photographers who shoot RAW and need efficient workflow</div>
                </li>
              </ul>
            </div>
          </div>

          {/* Lightroom Modules */}
          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-medium mb-6">Lightroom Classic Modules</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-medium mb-2">Library Module</h4>
                <p className="text-sm text-gray-300">Import, organize, rate, keyword, search. The command centre for your catalog.</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-medium mb-2">Develop Module</h4>
                <p className="text-sm text-gray-300">Where the magic happens. All RAW adjustments, local edits, and creative processing.</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-medium mb-2">Map Module</h4>
                <p className="text-sm text-gray-300">View photos on map based on GPS data. Organize by location.</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-medium mb-2">Book Module</h4>
                <p className="text-sm text-gray-300">Create photo books with templates and layouts for printing.</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-medium mb-2">Slideshow Module</h4>
                <p className="text-sm text-gray-300">Create presentations with music and transitions.</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-medium mb-2">Print Module</h4>
                <p className="text-sm text-gray-300">Print layouts, contact sheets, and fine art prints.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/20 rounded-xl p-6 mt-10 border border-blue-500/40">
            <p className="font-medium mb-2">Pricing:</p>
            <p className="text-sm text-gray-200">
              Adobe Creative Cloud Photography Plan: £9.98/month (includes Lightroom Classic, Lightroom CC, Photoshop, 20GB cloud storage)
            </p>
          </div>
        </div>

        {/* Software Deep Dive: Adobe Photoshop */}
        <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 rounded-2xl p-8 sm:p-12 mb-20 text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <Layers className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Adobe Photoshop
            </h2>
          </div>

          <div className="mb-10">
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              The most powerful image editing software in the world. Photoshop handles pixel-level retouching, compositing, advanced masking, and creative effects that go beyond RAW processing.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-medium mb-4">Strengths</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Layer-based editing:</strong> Non-destructive workflow with adjustment layers
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Advanced retouching:</strong> Healing brush, clone stamp, content-aware fill
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Precise masking:</strong> Complex selections, layer masks, alpha channels
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Compositing:</strong> Combine multiple images seamlessly
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>AI tools:</strong> Neural filters, sky replacement, subject selection
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Unlimited creative possibilities:</strong> Filters, effects, text, graphics
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-medium mb-4">Best For</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0 mt-2"></div>
                  <div>Portrait retouching (skin smoothing, frequency separation)</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0 mt-2"></div>
                  <div>Removing distractions (power lines, blemishes, unwanted objects)</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0 mt-2"></div>
                  <div>Compositing (focus stacking, HDR blending, panoramas)</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0 mt-2"></div>
                  <div>Product photography (perfect backgrounds, detailed retouching)</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0 mt-2"></div>
                  <div>Creative manipulation beyond traditional photography</div>
                </li>
              </ul>
            </div>
          </div>

          {/* Essential Photoshop Techniques */}
          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-medium mb-6">Essential Photoshop Techniques</h3>
            
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-6 border-l-4 border-purple-500">
                <h4 className="text-lg font-medium mb-2">Frequency Separation</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Separates texture from colour/tone, allowing you to smooth skin whilst preserving texture. Essential for professional portrait retouching.
                </p>
                <p className="text-xs text-gray-400">
                  <strong>Use:</strong> Portrait retouching, beauty photography, commercial work
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6 border-l-4 border-blue-500">
                <h4 className="text-lg font-medium mb-2">Dodge & Burn</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Selectively lighten (dodge) and darken (burn) areas to add dimension, shape faces, and direct viewer's eye.
                </p>
                <p className="text-xs text-gray-400">
                  <strong>Use:</strong> Portrait dimension, landscape enhancement, sculpting light
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6 border-l-4 border-green-500">
                <h4 className="text-lg font-medium mb-2">Layer Masking</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Hide or reveal parts of layers non-destructively. Foundation of professional Photoshop workflow.
                </p>
                <p className="text-xs text-gray-400">
                  <strong>Use:</strong> Compositing, selective adjustments, blending multiple exposures
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6 border-l-4 border-orange-500">
                <h4 className="text-lg font-medium mb-2">Content-Aware Fill</h4>
                <p className="text-sm text-gray-300 mb-3">
                  AI-powered tool that intelligently fills selected areas based on surrounding content. Magic for removing distractions.
                </p>
                <p className="text-xs text-gray-400">
                  <strong>Use:</strong> Removing power lines, unwanted people, sensor dust spots
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-6 border-l-4 border-red-500">
                <h4 className="text-lg font-medium mb-2">Curves & Levels</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Precise tonal control with adjustment layers. Curves is the most powerful tool in Photoshop.
                </p>
                <p className="text-xs text-gray-400">
                  <strong>Use:</strong> Contrast control, colour grading, fixing exposure issues
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6 mt-10 border border-purple-500/40">
            <p className="font-medium mb-2">Lightroom vs Photoshop:</p>
            <p className="text-sm text-gray-200">
              <strong>Lightroom:</strong> Organize and develop 95% of images. <strong>Photoshop:</strong> Advanced retouching for the best 5%. Most photographers use both.
            </p>
          </div>
        </div>

        {/* Software Deep Dive: Capture One */}
        <div className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 rounded-2xl p-8 sm:p-12 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
              <Settings className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Capture One
            </h2>
          </div>

          <div className="max-w-4xl mb-10">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Professional-grade RAW processor favoured by commercial, fashion, and studio photographers. Known for exceptional colour handling and tethered shooting capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-xl p-8 shadow-sm border-4 border-orange-500">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Strengths</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Superior colour accuracy:</strong> Industry-leading colour rendering and grading tools
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Tethered shooting:</strong> Best-in-class live shooting workflow for studio
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Layer-based adjustments:</strong> More flexible local editing than Lightroom
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Advanced masking:</strong> Luma masks, colour-based masks, refinement tools
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Sessions workflow:</strong> Project-based organization (alternative to catalog)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Better highlight recovery:</strong> Exceptional RAW processing engine
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border-4 border-red-500">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Best For</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-600 flex-shrink-0 mt-2"></div>
                  <div>Commercial and fashion photographers (colour accuracy critical)</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-600 flex-shrink-0 mt-2"></div>
                  <div>Studio photographers (tethered shooting workflow)</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-600 flex-shrink-0 mt-2"></div>
                  <div>Product photographers (colour-critical work, layers)</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-600 flex-shrink-0 mt-2"></div>
                  <div>Phase One camera users (optimized for Phase One hardware)</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-600 flex-shrink-0 mt-2"></div>
                  <div>Photographers prioritizing ultimate image quality over speed</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Capture One vs Lightroom</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-medium text-gray-900 mb-2">Choose Capture One if:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Colour accuracy is paramount</li>
                  <li>• You shoot tethered in studio</li>
                  <li>• You need advanced masking tools</li>
                  <li>• You prefer session-based workflow</li>
                  <li>• Budget allows for higher price</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-gray-900 mb-2">Choose Lightroom if:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• You need to manage huge catalogs (100k+ images)</li>
                  <li>• Batch editing speed is priority</li>
                  <li>• You want Adobe ecosystem integration</li>
                  <li>• You prefer catalog-based organization</li>
                  <li>• You're budget-conscious (cheaper subscription)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-100 rounded-xl p-6 mt-10 border border-orange-300">
            <p className="font-medium text-gray-900 mb-2">Pricing:</p>
            <p className="text-sm text-gray-700">
              Perpetual license: £279 (one-time purchase). Subscription: From £12.50/month. Free trial available.
            </p>
          </div>
        </div>

        {/* Alternative Software */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Alternative Post-Processing Software
          </h2>

          <div className="max-w-4xl mb-10">
            <p className="text-lg text-gray-700 leading-relaxed">
              While Adobe dominates the market, excellent alternatives exist at various price points — from free open-source options to professional-grade paid software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Affinity Photo */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                  A
                </div>
                <h3 className="text-xl font-medium text-gray-900">Affinity Photo</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Professional Photoshop alternative with one-time purchase. Full layer support, RAW editing, advanced retouching.
              </p>
              <div className="bg-purple-50 rounded-lg p-4 mb-3">
                <p className="text-xs font-medium text-gray-900 mb-2">Strengths:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• One-time £69.99 payment (no subscription)</li>
                  <li>• Very similar interface to Photoshop</li>
                  <li>• Excellent performance</li>
                  <li>• Full RAW support</li>
                </ul>
              </div>
              <p className="text-xs text-gray-600">
                <strong>Best for:</strong> Photographers escaping Adobe subscriptions
              </p>
            </div>

            {/* DxO PhotoLab */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold">
                  D
                </div>
                <h3 className="text-xl font-medium text-gray-900">DxO PhotoLab</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Advanced RAW processor with best-in-class noise reduction and lens corrections. Technical excellence focused.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-3">
                <p className="text-xs font-medium text-gray-900 mb-2">Strengths:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Best noise reduction available (DxO Prime)</li>
                  <li>• Automatic lens corrections</li>
                  <li>• Excellent RAW processing</li>
                  <li>• ClearView Plus for haze removal</li>
                </ul>
              </div>
              <p className="text-xs text-gray-600">
                <strong>Best for:</strong> High-ISO shooting, optical corrections
              </p>
            </div>

            {/* ON1 Photo RAW */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold">
                  O1
                </div>
                <h3 className="text-xl font-medium text-gray-900">ON1 Photo RAW</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                All-in-one RAW editor and organizer. Lightroom + Photoshop alternative in one application.
              </p>
              <div className="bg-green-50 rounded-lg p-4 mb-3">
                <p className="text-xs font-medium text-gray-900 mb-2">Strengths:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Combines organization + editing</li>
                  <li>• AI-powered masking and selection</li>
                  <li>• Layer-based workflow</li>
                  <li>• Perpetual license option</li>
                </ul>
              </div>
              <p className="text-xs text-gray-600">
                <strong>Best for:</strong> One-stop workflow solution
              </p>
            </div>

            {/* Luminar Neo */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center text-white font-bold">
                  L
                </div>
                <h3 className="text-xl font-medium text-gray-900">Luminar Neo</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                AI-first photo editor with intelligent tools for quick, creative edits. Beginner-friendly with powerful results.
              </p>
              <div className="bg-orange-50 rounded-lg p-4 mb-3">
                <p className="text-xs font-medium text-gray-900 mb-2">Strengths:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• AI sky replacement</li>
                  <li>• AI-powered portrait enhancement</li>
                  <li>• User-friendly interface</li>
                  <li>• Fast creative results</li>
                </ul>
              </div>
              <p className="text-xs text-gray-600">
                <strong>Best for:</strong> Creative edits, AI-assisted workflow
              </p>
            </div>

            {/* GIMP */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-4 border-green-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold">
                  G
                </div>
                <h3 className="text-xl font-medium text-gray-900">GIMP (Free)</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Free, open-source Photoshop alternative. Powerful but steeper learning curve. Completely free forever.
              </p>
              <div className="bg-green-50 rounded-lg p-4 mb-3">
                <p className="text-xs font-medium text-gray-900 mb-2">Strengths:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• 100% free and open-source</li>
                  <li>• Layer-based editing</li>
                  <li>• Extensive plugins available</li>
                  <li>• Cross-platform (Windows, Mac, Linux)</li>
                </ul>
              </div>
              <p className="text-xs text-gray-600">
                <strong>Best for:</strong> Budget-conscious photographers, students
              </p>
            </div>

            {/* Darktable */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-4 border-green-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-700 to-zinc-900 flex items-center justify-center text-white font-bold">
                  DT
                </div>
                <h3 className="text-xl font-medium text-gray-900">Darktable (Free)</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Free, open-source RAW processor and digital darkroom. Lightroom alternative with no cost.
              </p>
              <div className="bg-green-50 rounded-lg p-4 mb-3">
                <p className="text-xs font-medium text-gray-900 mb-2">Strengths:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Completely free</li>
                  <li>• Non-destructive RAW processing</li>
                  <li>• Catalogue management</li>
                  <li>• Powerful but complex interface</li>
                </ul>
              </div>
              <p className="text-xs text-gray-600">
                <strong>Best for:</strong> Linux users, free Lightroom alternative
              </p>
            </div>

            {/* RawTherapee */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-4 border-green-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-700 to-cyan-900 flex items-center justify-center text-white font-bold">
                  RT
                </div>
                <h3 className="text-xl font-medium text-gray-900">RawTherapee (Free)</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Free RAW converter with advanced controls. Technical and powerful for no cost.
              </p>
              <div className="bg-green-50 rounded-lg p-4 mb-3">
                <p className="text-xs font-medium text-gray-900 mb-2">Strengths:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Free and open-source</li>
                  <li>• Advanced RAW processing controls</li>
                  <li>• Batch processing</li>
                  <li>• Excellent highlight recovery</li>
                </ul>
              </div>
              <p className="text-xs text-gray-600">
                <strong>Best for:</strong> Technical photographers on budget
              </p>
            </div>

            {/* Photopea */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-4 border-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center text-white font-bold">
                  PP
                </div>
                <h3 className="text-xl font-medium text-gray-900">Photopea (Free Web)</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Free web-based Photoshop clone. No installation needed, works in browser. Surprisingly capable.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-3">
                <p className="text-xs font-medium text-gray-900 mb-2">Strengths:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Completely free (ad-supported)</li>
                  <li>• No installation required</li>
                  <li>• Photoshop-like interface</li>
                  <li>• Opens PSD files</li>
                </ul>
              </div>
              <p className="text-xs text-gray-600">
                <strong>Best for:</strong> Quick edits, beginners, ChromeOS users
              </p>
            </div>

            {/* Pixelmator Pro */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
                  P
                </div>
                <h3 className="text-xl font-medium text-gray-900">Pixelmator Pro (Mac)</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Beautiful Mac-native photo editor. Affordable one-time purchase with powerful AI tools.
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 mb-3">
                <p className="text-xs font-medium text-gray-900 mb-2">Strengths:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Native Mac app (optimized for M1/M2)</li>
                  <li>• Beautiful, intuitive interface</li>
                  <li>• ML-powered tools</li>
                  <li>• £49.99 one-time purchase</li>
                </ul>
              </div>
              <p className="text-xs text-gray-600">
                <strong>Best for:</strong> Mac users wanting affordable Photoshop alternative
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 mt-10 border border-green-200">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Choosing the Right Software</h3>
                <p className="text-gray-700 mb-4">
                  There's no "best" software — only best for <em>your</em> needs, budget, and workflow. Consider:
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Budget:</strong> Free options (GIMP, Darktable) vs one-time (Affinity, Pixelmator) vs subscription (Adobe, Capture One)</li>
                  <li>• <strong>Learning curve:</strong> Beginner-friendly (Luminar Neo) vs professional tools (Photoshop, Capture One)</li>
                  <li>• <strong>Workflow:</strong> Organization + editing (Lightroom, ON1) vs editing only (Affinity Photo, Photoshop)</li>
                  <li>• <strong>Platform:</strong> Cross-platform vs Mac-only (Pixelmator Pro) vs web-based (Photopea)</li>
                  <li>• <strong>Feature needs:</strong> Basic RAW processing vs advanced retouching vs AI tools</li>
                </ul>
                <p className="text-sm text-gray-700 mt-4">
                  <strong>Recommendation:</strong> Try free trials before committing. Many photographers use multiple tools — Lightroom for organization + batch editing, Photoshop for advanced work.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Organization & Cataloging */}
        <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 rounded-2xl p-8 sm:p-12 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-700 to-gray-900 flex items-center justify-center">
              <FolderOpen className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Organization & Cataloguing
            </h2>
          </div>

          <div className="max-w-4xl mb-10">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Professional organization saves time, prevents lost images, and ensures you can find any photo years later. Invest time upfront in good habits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Folder Structure
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-4 font-mono text-sm">
                <div className="space-y-1 text-gray-700">
                  <div>📁 Photography/</div>
                  <div className="ml-4">📁 2025/</div>
                  <div className="ml-8">📁 01-January/</div>
                  <div className="ml-12">📁 2025-01-15-Wedding-Smith/</div>
                  <div className="ml-16">📁 RAW/</div>
                  <div className="ml-16">📁 Exports/</div>
                  <div className="ml-12">📁 2025-01-20-Portrait-Session/</div>
                  <div className="ml-16">📁 RAW/</div>
                  <div className="ml-16">📁 Exports/</div>
                  <div className="ml-8">📁 02-February/</div>
                  <div className="ml-12">📁 2025-02-01-Landscape-Iceland/</div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Naming Convention:</p>
                <p className="text-sm text-gray-700">
                  <strong>YYYY-MM-DD-Shoot-Description</strong><br/>
                  Date first = chronological sorting<br/>
                  Descriptive = easy searching
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Metadata & Keywords
              </h3>
              
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-2">Copyright Information</p>
                  <p className="text-sm text-gray-700">
                    Add your name, copyright, contact info on import. Protects your work.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-2">Keywords (Tags)</p>
                  <p className="text-sm text-gray-700 mb-2">
                    Searchable tags: "portrait", "landscape", "wedding", "Iceland", "sunset"
                  </p>
                  <p className="text-xs text-gray-600">
                    Hierarchy: Location → Country → City. Genre → Portrait → Headshot
                  </p>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-2">Location Data</p>
                  <p className="text-sm text-gray-700">
                    GPS coordinates (if camera supports) or manual location tagging.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-2">Captions</p>
                  <p className="text-sm text-gray-700">
                    Describe image contents for future searching and client delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Backup Strategy (3-2-1 Rule)
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-4 border-purple-500">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-2xl mb-4">
                  3
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Three Copies</h4>
                <p className="text-sm text-gray-700">
                  Original + two backups. Never rely on single copy.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-4 border-blue-500">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl mb-4">
                  2
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Two Media Types</h4>
                <p className="text-sm text-gray-700">
                  Internal drive + external hard drive. Or SSD + cloud. Different technologies.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-4 border-green-500">
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-2xl mb-4">
                  1
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">One Off-site</h4>
                <p className="text-sm text-gray-700">
                  Cloud storage (Backblaze, Google Drive) or drive at different location. Protects from fire/theft.
                </p>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-6 mt-6 border border-red-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 mb-2">Hard Drives Fail</p>
                  <p className="text-sm text-gray-700">
                    All hard drives fail eventually. It's not "if", it's "when". The question is: will you have backups when it happens? Professional photographers treat backup as essential business expense, not optional luxury.
                  </p>
                </div>
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
            {/* Project 1: Complete Workflow */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Project: Complete Post-Processing Workflow
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Take a photo shoot from import through to final delivery, practicing the complete professional workflow.
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 mb-6">
                <p className="font-medium text-gray-900 mb-3">Assignment:</p>
                <ol className="text-sm text-gray-700 space-y-2">
                  <li>1. Shoot 50-100 images (any subject)</li>
                  <li>2. Import to Lightroom with organized folder structure (YYYY-MM-DD-Description)</li>
                  <li>3. Add copyright metadata and 5-10 keywords on import</li>
                  <li>4. Cull ruthlessly — flag/star your best 10-15 images</li>
                  <li>5. Edit one image completely (global + local adjustments)</li>
                  <li>6. Copy edits to similar images (batch editing)</li>
                  <li>7. Export for web (JPEG, sRGB, 2048px, quality 85%)</li>
                  <li>8. Create backup to external drive</li>
                </ol>
              </div>

              <div className="bg-gray-900 text-white rounded-lg p-6">
                <p className="font-medium mb-2">Learning Goals:</p>
                <p className="text-sm">
                  Experience the complete workflow from start to finish. Understand how organization, culling, editing, and backup fit together. Practice non-destructive editing principles.
                </p>
              </div>
            </div>

            {/* Project 2: Before & After Comparison */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Project: Before & After Portfolio
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Create side-by-side comparisons showing the power of post-processing.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Assignment:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Select 5 RAW images with potential</li>
                    <li>• Process each thoughtfully in Lightroom</li>
                    <li>• Create before/after comparison exports</li>
                    <li>• Document specific adjustments made</li>
                    <li>• Explain your creative decisions</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="font-medium text-gray-900 mb-3">Analysis Questions:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• What was wrong with the original RAW?</li>
                    <li>• Which adjustments had biggest impact?</li>
                    <li>• How does post-processing support your vision?</li>
                    <li>• Did you over-process any images?</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Project 3: Advanced Retouching */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Project: Photoshop Advanced Retouching
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Learn pixel-level editing by removing distractions and performing portrait retouching.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-6 mb-6">
                <p className="font-medium text-gray-900 mb-3">Assignment:</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">Part A: Remove Distractions</p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Find landscape image with power lines, litter, or unwanted elements</li>
                      <li>• Use Photoshop's Spot Healing, Clone Stamp, Content-Aware Fill</li>
                      <li>• Create clean, distraction-free final image</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">Part B: Portrait Retouching</p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Take or find portrait needing skin retouching</li>
                      <li>• Remove blemishes non-destructively (healing brush on new layer)</li>
                      <li>• Subtle dodge & burn to add dimension</li>
                      <li>• Keep skin texture — avoid "plastic" over-smoothing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 text-white rounded-lg p-6">
                <p className="font-medium mb-2">Golden Rule of Retouching:</p>
                <p className="text-sm">
                  If you can tell it's been retouched, you've done too much. Aim for natural enhancement, not obvious manipulation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 rounded-2xl p-8 sm:p-12 text-white mb-20">
          <h2 className="text-3xl sm:text-4xl tracking-tight mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Key Takeaways
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Always work non-destructively</p>
                <p className="text-gray-300">Never modify original RAW files. Use adjustment layers, catalogs, and metadata to preserve originals whilst maintaining complete creative control.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Professional workflow: import → cull → edit → export</p>
                <p className="text-gray-300">Follow systematic process: organized import with metadata, ruthless culling, global then local adjustments, export optimized for intended use. Consistency creates efficiency.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Lightroom for organization and batch editing, Photoshop for pixel work</p>
                <p className="text-gray-300">Use right tool for the job. Lightroom excels at managing thousands of images and RAW processing. Photoshop handles advanced retouching and compositing. Most professionals use both.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">Excellent free alternatives exist</p>
                <p className="text-gray-300">Don't let budget stop you. GIMP, Darktable, RawTherapee, and Photopea offer professional-grade editing at zero cost. Paid options like Affinity Photo provide one-time purchase alternative to Adobe subscriptions.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium mb-2">3-2-1 backup rule is non-negotiable</p>
                <p className="text-gray-300">Three copies, two different media types, one off-site. Hard drives fail. Protect years of work with proper backup strategy. Professional photographers never skip backups.</p>
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
              to="/resources/raw-vs-jpeg"
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                RAW vs JPEG
              </h3>
              <p className="text-gray-600 text-sm">
                Understanding RAW files is fundamental to professional post-processing workflow
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
                Colour theory principles guide effective colour grading and HSL adjustments
              </p>
            </Link>

            <Link
              to="/resources/black-white-conversion"
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                Black & White Conversion
              </h3>
              <p className="text-gray-600 text-sm">
                Advanced monochrome conversion techniques using post-processing tools
              </p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
