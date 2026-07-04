import { ArrowLeft, FileImage, FileType, HardDrive, Zap, Palette, Clock, CheckCircle2, XCircle, Info } from 'lucide-react';
import { Link } from 'react-router';
import { SEO } from './SEO';
import { getSEOConfig } from '../config/seo-config';

export function RawVsJpeg() {
  const seoConfig = getSEOConfig('raw-vs-jpeg');
  
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
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-20 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-green-200">
              <FileImage className="w-4 h-4 text-green-600" />
              <span className="text-xs uppercase tracking-wide text-green-600 font-medium">File Format Guide</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              RAW vs JPEG
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-3xl">
              Understanding file formats is crucial for maximizing image quality and editing flexibility. Learn the technical differences, advantages, and when to use each format.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
        
        {/* Introduction */}
        <div className="max-w-4xl mb-20">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Every digital camera offers at least two file format options: RAW and JPEG. While JPEG is convenient and universally compatible, RAW files provide maximum image quality and editing flexibility. Understanding the differences helps you make informed decisions about which format to use for different shooting situations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Think of it this way: JPEG is like buying a finished meal, while RAW is buying fresh ingredients. JPEG is ready to eat (use) immediately, but RAW gives you complete control over how the final dish (image) is prepared.
          </p>
        </div>

        {/* Quick Comparison */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 sm:p-12 mb-20">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Quick Comparison
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* RAW */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <FileImage className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                  RAW Format
                </h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Maximum image quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Full editing flexibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Non-destructive editing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">12-14 bit color depth</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Large file sizes (20-40 MB)</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Requires processing software</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Slower shooting speeds</span>
                </li>
              </ul>
            </div>

            {/* JPEG */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <FileType className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl tracking-tight text-gray-900" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                  JPEG Format
                </h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Small file sizes (3-6 MB)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ready to share immediately</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Universal compatibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Fast shooting speeds</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">8-bit color depth only</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Lossy compression</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Limited editing latitude</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* What is RAW? */}
        <div className="mb-20">
          <div className="max-w-4xl">
            <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              What is RAW?
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A RAW file contains the unprocessed data directly from your camera's sensor. It's called "RAW" because the data hasn't been processed, compressed, or manipulated in any way—it's the raw sensor information.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When you shoot RAW, your camera records all the data it captured without applying any sharpening, noise reduction, contrast, or color adjustments. This gives you maximum control over the final image during post-processing.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium mb-2">Technical Note:</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      RAW files are typically 12-bit or 14-bit, meaning they can capture 4,096 to 16,384 shades per color channel (compared to JPEG's 256 shades). This translates to 68 billion to 4 trillion possible colors versus JPEG's 16.8 million.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl tracking-tight text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Common RAW File Extensions
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-700"><strong>.CR3, .CR2</strong> — Canon cameras</li>
                <li className="text-gray-700"><strong>.NEF</strong> — Nikon cameras</li>
                <li className="text-gray-700"><strong>.ARW</strong> — Sony cameras</li>
                <li className="text-gray-700"><strong>.RAF</strong> — Fujifilm cameras</li>
                <li className="text-gray-700"><strong>.ORF</strong> — Olympus cameras</li>
                <li className="text-gray-700"><strong>.DNG</strong> — Digital Negative (Adobe's universal RAW format)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What is JPEG? */}
        <div className="mb-20">
          <div className="max-w-4xl">
            <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              What is JPEG?
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                JPEG (Joint Photographic Experts Group) is a compressed image format that has been processed and optimized by your camera. When you shoot JPEG, the camera applies all your settings—white balance, sharpening, contrast, saturation, and noise reduction—then compresses the file to save space.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The JPEG format uses lossy compression, meaning some image data is permanently discarded to reduce file size. While the compression is sophisticated and often imperceptible, it does limit how much you can adjust the image later.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium mb-2">Why JPEG Compression Matters:</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      JPEG compression works by grouping similar pixels together and discarding subtle variations. This is why heavily edited JPEGs can show "banding" or "posterization"—there simply isn't enough color data left to create smooth gradients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Differences */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Technical Differences
          </h2>
          
          <div className="grid gap-6">
            {/* Bit Depth */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Bit Depth & Color Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">RAW (12-14 bit)</p>
                      <div className="bg-gray-100 rounded-lg p-4">
                        <p className="text-gray-700 text-sm">
                          68 billion to 4 trillion possible colors • Smooth gradients • Maximum shadow/highlight recovery
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">JPEG (8-bit)</p>
                      <div className="bg-gray-100 rounded-lg p-4">
                        <p className="text-gray-700 text-sm">
                          16.8 million colors • Risk of banding in gradients • Limited recovery range
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* File Size */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                  <HardDrive className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    File Size & Storage
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">RAW</p>
                      <div className="bg-gray-100 rounded-lg p-4">
                        <p className="text-gray-700 text-sm">
                          20-40 MB per image (varies by camera) • ~250-500 images per 16GB card • Requires more storage
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">JPEG</p>
                      <div className="bg-gray-100 rounded-lg p-4">
                        <p className="text-gray-700 text-sm">
                          3-6 MB per image (varies by settings) • ~2,500-5,000 images per 16GB card • Storage efficient
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Processing Speed */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Processing Speed & Buffer
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">RAW</p>
                      <div className="bg-gray-100 rounded-lg p-4">
                        <p className="text-gray-700 text-sm">
                          Slower burst speeds • Fills buffer quickly • Longer write times to memory card
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">JPEG</p>
                      <div className="bg-gray-100 rounded-lg p-4">
                        <p className="text-gray-700 text-sm">
                          Faster burst speeds • Extended burst shooting • Quick write times
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl tracking-tight text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                    Post-Processing Workflow
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">RAW</p>
                      <div className="bg-gray-100 rounded-lg p-4">
                        <p className="text-gray-700 text-sm">
                          Requires processing software (Lightroom, Capture One) • More time per image • Non-destructive editing
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">JPEG</p>
                      <div className="bg-gray-100 rounded-lg p-4">
                        <p className="text-gray-700 text-sm">
                          Ready to use immediately • Quick editing possible • Destructive editing (degrades with each save)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Editing Flexibility Comparison */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Editing Flexibility: Where RAW Shines
          </h2>
          
          <div className="max-w-4xl mb-10">
            <p className="text-lg text-gray-700 leading-relaxed">
              The real advantage of RAW becomes apparent when you need to make significant adjustments to your images. Here are scenarios where RAW provides dramatically better results:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border border-orange-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Exposure Recovery</h3>
              <p className="text-gray-700 mb-4">
                RAW files can recover 2-4 stops of underexposure and 1-2 stops of overexposure with minimal quality loss.
              </p>
              <div className="bg-white/50 rounded-lg p-4 text-sm text-gray-600">
                <strong>JPEG:</strong> Limited to about 1 stop of recovery before severe quality degradation appears
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4">White Balance Correction</h3>
              <p className="text-gray-700 mb-4">
                RAW files allow complete white balance adjustment without quality loss—change from tungsten to daylight instantly.
              </p>
              <div className="bg-white/50 rounded-lg p-4 text-sm text-gray-600">
                <strong>JPEG:</strong> White balance is "baked in" and can only be approximated with color shifts
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Shadow & Highlight Detail</h3>
              <p className="text-gray-700 mb-4">
                RAW preserves all sensor data in shadows and highlights, allowing extensive recovery of detail.
              </p>
              <div className="bg-white/50 rounded-lg p-4 text-sm text-gray-600">
                <strong>JPEG:</strong> Clipped highlights are pure white and lost; crushed shadows lose detail permanently
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Color Grading & Toning</h3>
              <p className="text-gray-700 mb-4">
                12-14 bit color depth provides smooth gradients and transitions, even with extreme color adjustments.
              </p>
              <div className="bg-white/50 rounded-lg p-4 text-sm text-gray-600">
                <strong>JPEG:</strong> 8-bit depth can show banding and posterization with heavy color adjustments
              </div>
            </div>
          </div>
        </div>

        {/* When to Use Each Format */}
        <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 rounded-2xl p-8 sm:p-12 mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            When to Use Each Format
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Shoot RAW When */}
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Shoot RAW When:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Image quality is paramount</p>
                    <p className="text-sm text-gray-600">Professional work, portfolio pieces, fine art</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Lighting is challenging</p>
                    <p className="text-sm text-gray-600">High contrast scenes, mixed lighting, difficult white balance</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Extensive editing planned</p>
                    <p className="text-sm text-gray-600">Commercial work, compositing, heavy retouching</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">You need maximum recovery</p>
                    <p className="text-sm text-gray-600">Weddings, events where you can't reshoot</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Color accuracy matters</p>
                    <p className="text-sm text-gray-600">Product photography, fashion, portraits</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Shoot JPEG When */}
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                Shoot JPEG When:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Speed is essential</p>
                    <p className="text-sm text-gray-600">Sports, action, wildlife with long bursts</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Immediate sharing needed</p>
                    <p className="text-sm text-gray-600">Social media, news, quick turnaround events</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Storage is limited</p>
                    <p className="text-sm text-gray-600">Long trips, backup limitations, small memory cards</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Exposure is perfect</p>
                    <p className="text-sm text-gray-600">Controlled studio lighting, consistent conditions</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">No editing intended</p>
                    <p className="text-sm text-gray-600">Snapshots, documentation, archival work</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* RAW + JPEG: The Best of Both Worlds */}
        <div className="mb-20">
          <div className="max-w-4xl">
            <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              RAW + JPEG: The Best of Both Worlds
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Most cameras allow you to shoot RAW + JPEG simultaneously. This gives you the flexibility of RAW files while having immediately usable JPEGs for quick sharing.
            </p>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200 mb-8">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Common Strategies:</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-1">RAW + Small JPEG</p>
                  <p className="text-sm text-gray-600">Use small JPEGs for quick previews and sharing, RAW for final edits</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-1">RAW + Medium JPEG</p>
                  <p className="text-sm text-gray-600">Balance between quality and file size—JPEGs good for most uses</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-1">RAW + Large Fine JPEG</p>
                  <p className="text-sm text-gray-600">Maximum flexibility, but doubles storage requirements</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-900 font-medium mb-2">Storage Consideration:</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Shooting RAW + JPEG requires significantly more storage space and slows down burst shooting. Make sure you have fast memory cards (UHS-II or better) and adequate storage capacity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Recommendations */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-gray-900 mb-12" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Workflow Recommendations
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Beginner</h3>
              <p className="text-gray-700 mb-4">
                Start with JPEG to learn fundamentals without workflow complexity.
              </p>
              <p className="text-sm text-gray-600">
                Once comfortable with exposure and composition, transition to RAW to unlock creative potential.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Enthusiast</h3>
              <p className="text-gray-700 mb-4">
                Shoot RAW for important work, JPEG for casual shooting and quick sharing.
              </p>
              <p className="text-sm text-gray-600">
                Learn to process RAW files efficiently to make the extra workflow time worthwhile.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Professional</h3>
              <p className="text-gray-700 mb-4">
                Default to RAW for all client work, with JPEG as backup or for immediate delivery.
              </p>
              <p className="text-sm text-gray-600">
                Invest in fast storage, backup systems, and streamlined RAW processing workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-white">
          <h2 className="text-3xl sm:text-4xl tracking-tight mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Key Takeaways
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4">RAW is Best For:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Professional and portfolio work</li>
                <li>• Challenging lighting conditions</li>
                <li>• Images requiring extensive editing</li>
                <li>• Maximum quality and flexibility</li>
                <li>• Color-critical work</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">JPEG is Best For:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Fast-paced action shooting</li>
                <li>• Immediate sharing needs</li>
                <li>• Storage-limited situations</li>
                <li>• Perfect exposure conditions</li>
                <li>• Minimal post-processing</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-lg text-gray-300 leading-relaxed">
              <strong className="text-white">Bottom Line:</strong> If you have the storage space and time to process files, shoot RAW for important work. It gives you the maximum creative control and quality. For everything else, JPEG is perfectly capable and more convenient.
            </p>
          </div>
        </div>

        {/* Related Resources */}
        <div className="mt-20 pt-20 border-t border-gray-200">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Related Resources
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to="/resources/histogram-guide"
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                Histogram Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Learn to read histograms to ensure perfect exposure in-camera
              </p>
            </Link>

            <Link
              to="/resources/white-balance"
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                White Balance
              </h3>
              <p className="text-gray-600 text-sm">
                Master white balance to get accurate colors straight from camera
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
                Understand aperture, shutter speed, and ISO fundamentals
              </p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}