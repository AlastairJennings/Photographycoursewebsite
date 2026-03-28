import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface CameraSpec {
  name: string;
  image: string;
  prices: {
    usd: string;
    gbp: string;
    eur: string;
  };
  releaseDate: string;
  specs: {
    sensorSize: string;
    stillsResolution: string;
    videoResolution: string;
    videoFrameRate: string;
    dimensions: string;
    weight: string;
    continuousShooting: string;
    screen: string;
    screenArticulated: string;
    memoryCard: string;
  };
  intro: string;
  buildQuality: string;
  handling: string;
  performance: string;
  verdict: string;
}

const cameras: CameraSpec[] = [
  {
    name: "Sony A1 II",
    image: "https://images.unsplash.com/photo-1711289163428-75e546d9ffa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTb255JTIwQTElMjBJSSUyMG1pcnJvcmxlc3MlMjBjYW1lcmF8ZW58MXx8fHwxNzcwMDY0NjIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    prices: { usd: "$6,499", gbp: "£6,299", eur: "€7,299" },
    releaseDate: "November 2024",
    specs: {
      sensorSize: "Full-frame (35mm)",
      stillsResolution: "50.1 MP",
      videoResolution: "8K at 30p, 4K at 120p",
      videoFrameRate: "30fps (8K), 120fps (4K)",
      dimensions: "136.1 x 96.9 x 82.7mm",
      weight: "743g (body only)",
      continuousShooting: "30fps mechanical, 30fps electronic",
      screen: "3.2-inch",
      screenArticulated: "Fully articulated touchscreen",
      memoryCard: "Dual CFexpress Type A / SD UHS-II"
    },
    intro: "The Sony A1 II is the ultimate \"do-everything\" flagship mirrorless camera, building on the legendary A1 with refined ergonomics and enhanced AI-powered autofocus. If budget isn't a constraint, this camera delivers professional-grade performance across every photographic discipline.",
    buildQuality: "Exceptional magnesium alloy construction with comprehensive weather sealing. The body feels solid and substantial in hand, with improved button layout and a dedicated AI processing unit. Build quality is befitting of a flagship professional camera.",
    handling: "Refined ergonomics improve upon the original A1 with a deeper grip and better-positioned controls. The new AI processor enables more intuitive subject recognition. Menu system remains comprehensive but can be overwhelming for newcomers. Excellent EVF with 9.44m-dot resolution.",
    performance: "Outstanding across all metrics. The 30fps continuous shooting with full AF tracking is class-leading. AI autofocus is remarkably intelligent, reliably tracking subjects even in challenging conditions. 8K video with no recording limits. Minimal rolling shutter in electronic shutter mode. Battery life is excellent.",
    verdict: "The Sony A1 II represents the pinnacle of mirrorless camera technology. It's expensive, but for professionals who need absolute versatility—from sports to landscape to studio work—it delivers without compromise. The do-everything champion."
  },
  {
    name: "Canon EOS R5 Mark II",
    image: "https://images.unsplash.com/photo-1671116559951-916ea2dba662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5vbiUyMEVPUyUyMFI1JTIwTWFyayUyMElJJTIwY2FtZXJhfGVufDF8fHx8MTc3MDA2NDYyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    prices: { usd: "$4,299", gbp: "£4,499", eur: "€5,199" },
    releaseDate: "August 2024",
    specs: {
      sensorSize: "Full-frame (35mm)",
      stillsResolution: "45 MP",
      videoResolution: "8K RAW at 60p, 4K at 120p",
      videoFrameRate: "60fps (8K), 120fps (4K)",
      dimensions: "138.5 x 98.3 x 88.2mm",
      weight: "738g (body only)",
      continuousShooting: "30fps electronic shutter, 12fps mechanical",
      screen: "3.2-inch",
      screenArticulated: "Fully articulated touchscreen",
      memoryCard: "Dual CFexpress Type B / SD UHS-II"
    },
    intro: "Canon's stacked-sensor powerhouse delivers blistering speed combined with Canon's legendary colour science and Dual Pixel AF II. A regular pick for action, wildlife, and all-round professional work, the R5 Mark II removes the overheating limitations of its predecessor.",
    buildQuality: "Professional-grade magnesium alloy body with extensive weather sealing. Feels robust and confidence-inspiring. Excellent button placement and tactile feedback. Superior to competitors in ergonomic design.",
    handling: "Outstanding ergonomics that Canon is famous for. Deep grip, intuitive button layout, and a sensible menu system. The joystick and touch-and-drag AF make focusing effortless. Bright EVF with excellent refresh rate. Battery life is class-leading.",
    performance: "Exceptional autofocus with subject detection for people, animals, and vehicles. 30fps electronic burst mode is ideal for fast action. No overheating issues in 8K video. Eye Control AF is a unique advantage. Image stabilization is among the best at 8.5 stops. RAW burst mode pre-records.",
    verdict: "The R5 Mark II is a superb all-rounder that excels in action and wildlife photography. Canon's colour science and reliable AF make it a professional workhorse. If you're in the Canon ecosystem, this is the flagship to own."
  },
  {
    name: "Nikon Z9",
    image: "https://images.unsplash.com/photo-1624913503207-9c8c795dfeea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWtvbiUyMFo5JTIwcHJvZmVzc2lvbmFsJTIwY2FtZXJhfGVufDF8fHx8MTc3MDA2NDYyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    prices: { usd: "$5,496", gbp: "£5,499", eur: "€6,299" },
    releaseDate: "October 2021",
    specs: {
      sensorSize: "Full-frame (35mm)",
      stillsResolution: "45.7 MP",
      videoResolution: "8K at 60p, 4K at 120p",
      videoFrameRate: "60fps (8K), 120fps (4K)",
      dimensions: "149 x 149.5 x 90.5mm",
      weight: "1340g (body only)",
      continuousShooting: "20fps RAW, 120fps JPEG",
      screen: "3.2-inch",
      screenArticulated: "Fully articulated touchscreen",
      memoryCard: "Dual CFexpress Type B"
    },
    intro: "The Nikon Z9 remains one of the most cited choices for uncompromising professional action and reliability. Built like a tank with a stacked sensor delivering blackout-free shooting, it's the camera that put Nikon mirrorless on the professional map.",
    buildQuality: "Tank-like construction that's second to none. Massive integrated vertical grip. Fully weather-sealed and dust-resistant. No mechanical shutter means fewer failure points. This camera inspires absolute confidence in any shooting condition.",
    handling: "Large and heavy, designed for professional sports and wildlife photographers. Deep grip and excellent button layout. Dedicated controls for every function. No mechanical shutter means silent operation. Bright EVF with zero blackout. Menu system is comprehensive and logical.",
    performance: "Phenomenal autofocus with 3D subject tracking that locks on and doesn't let go. 20fps RAW shooting with full AF/AE. Pre-release capture. High-speed buffer can handle extended bursts. 8K video with no overheating. In-body stabilization is excellent. Battery lasts all day.",
    verdict: "The Z9 is the choice for professional sports and wildlife photographers who demand absolute reliability. It's big and expensive, but delivers uncompromising performance. A future-proof investment for serious professionals."
  },
  {
    name: "Nikon Z8",
    image: "https://images.unsplash.com/photo-1635753956829-28d22f4d68e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWtvbiUyMFo4JTIwbWlycm9ybGVzcyUyMGNhbWVyYXxlbnwxfHx8fDE3Njk5ODMzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    prices: { usd: "$3,996", gbp: "£3,799", eur: "€4,499" },
    releaseDate: "May 2023",
    specs: {
      sensorSize: "Full-frame (35mm)",
      stillsResolution: "45.7 MP",
      videoResolution: "8K at 60p, 4K at 120p",
      videoFrameRate: "60fps (8K), 120fps (4K)",
      dimensions: "144 x 118.5 x 83mm",
      weight: "910g (body only)",
      continuousShooting: "20fps RAW, 120fps JPEG",
      screen: "3.2-inch",
      screenArticulated: "Fully articulated touchscreen",
      memoryCard: "Dual CFexpress Type B / SD UHS-II"
    },
    intro: "The Z8 packs Z9 performance into a more compact, travel-friendly body. With identical sensor and processor, it delivers flagship AF and speed while being significantly lighter. It appears repeatedly as a top wildlife and action option for photographers who don't need the integrated grip.",
    buildQuality: "Excellent magnesium alloy construction with comprehensive weather sealing. More portable than Z9 while maintaining professional build quality. Well-sealed against dust and moisture. Feels solid without being overwhelming.",
    handling: "Much more portable than the Z9 while retaining excellent ergonomics. Deep grip works well even with large telephoto lenses. Comprehensive control layout. No mechanical shutter for silent operation. Excellent EVF. Dual card slots offer flexibility with CFexpress and SD.",
    performance: "Identical sensor and processor to Z9 means flagship-level performance. Outstanding 3D tracking autofocus. 20fps continuous shooting with full AF tracking. Pre-release capture. 8K video with minimal rolling shutter. Excellent in-body stabilization. Battery life is very good.",
    verdict: "The Z8 is the sweet spot in Nikon's lineup—Z9 performance in a more manageable package. Perfect for wildlife and action photographers who travel. Essentially a mini Z9 at a lower price point. Highly recommended."
  },
  {
    name: "Canon EOS R6 Mark III",
    image: "https://images.unsplash.com/photo-1608003308807-2c1800bb8704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5vbiUyMEVPUyUyMFI2JTIwY2FtZXJhJTIwYm9keXxlbnwxfHx8fDE3Njk5ODMzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    prices: { usd: "$2,899", gbp: "£2,799", eur: "€3,299" },
    releaseDate: "March 2025",
    specs: {
      sensorSize: "Full-frame (35mm)",
      stillsResolution: "24 MP",
      videoResolution: "6K at 60p, 4K at 120p",
      videoFrameRate: "60fps (6K), 120fps (4K)",
      dimensions: "138.4 x 98.4 x 88.4mm",
      weight: "670g (body only)",
      continuousShooting: "40fps electronic shutter, 12fps mechanical",
      screen: "3.2-inch",
      screenArticulated: "Fully articulated touchscreen",
      memoryCard: "Dual SD UHS-II"
    },
    intro: "A standout 2025/26 hybrid pick that delivers a very strong stills experience with serious video specifications. The R6 Mark III balances resolution, speed, and video capability, making it ideal for photographers who need excellent hybrid performance without flagship pricing.",
    buildQuality: "Professional build quality with weather sealing throughout. Lightweight yet robust magnesium alloy construction. Excellent button layout and build precision. More compact than R5 Mark II while maintaining pro-level construction.",
    handling: "Superb ergonomics characteristic of Canon's design philosophy. Comfortable grip, intuitive controls, and excellent button placement. Lighter weight makes it ideal for all-day shooting. Dual SD card slots are convenient and affordable. Menu system is user-friendly.",
    performance: "Incredible 40fps electronic shutter for capturing decisive moments. Outstanding Dual Pixel AF II with subject detection. Excellent low-light performance from the 24MP sensor. 6K video with Canon Log. In-body stabilization up to 8 stops. Eye Control AF available. Battery life is exceptional.",
    verdict: "The R6 Mark III is the perfect hybrid camera for enthusiast and professional photographers who shoot both stills and video. Lower resolution means better low-light performance and smaller files. Exceptional value in Canon's lineup."
  },
  {
    name: "Nikon Z6 III",
    image: "https://images.unsplash.com/photo-1624913503207-9c8c795dfeea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWtvbiUyMFo2JTIwSUlJJTIwY2FtZXJhfGVufDF8fHx8MTc3MDA2NDYyNXww&ixlib=rb-4.1.0&q=80&w=1080",
    prices: { usd: "$2,496", gbp: "£2,499", eur: "€2,899" },
    releaseDate: "June 2024",
    specs: {
      sensorSize: "Full-frame (35mm)",
      stillsResolution: "24.5 MP",
      videoResolution: "6K at 60p, 4K at 120p",
      videoFrameRate: "60fps (6K), 120fps (4K)",
      dimensions: "134 x 101.5 x 69mm",
      weight: "760g (body only)",
      continuousShooting: "20fps RAW (electronic), 14fps (mechanical)",
      screen: "3.2-inch",
      screenArticulated: "Fully articulated touchscreen",
      memoryCard: "Dual CFexpress Type B / SD UHS-II"
    },
    intro: "The sweet-spot mid-range full-frame that keeps turning up across guides for performance per pound. The Z6 III features a partially stacked sensor for improved speed while maintaining excellent image quality. Perfect for photographers who need professional features without flagship pricing.",
    buildQuality: "Solid magnesium alloy construction with excellent weather sealing. Compact and well-built without feeling budget. Professional-level build quality at an enthusiast price point. Comprehensive sealing against elements.",
    handling: "Excellent ergonomics with deep grip and well-placed controls. Compact body is comfortable for extended shooting. Dual card slots (CFexpress/SD) offer flexibility. User-friendly menu system. Bright EVF with good resolution. Lightweight enough for travel.",
    performance: "Partially stacked sensor delivers impressive speed. Excellent 3D tracking autofocus inherited from Z9/Z8. 20fps electronic shooting. Very good low-light performance from 24.5MP sensor. 6K video with minimal rolling shutter. Strong in-body stabilization. Good battery life.",
    verdict: "The Z6 III is the best value full-frame hybrid camera for serious photographers. It delivers flagship features in a mid-range package. Outstanding performance per pound. Highly recommended for enthusiasts stepping up to professional tools."
  },
  {
    name: "Sony A7R V",
    image: "https://images.unsplash.com/photo-1696695071723-e279711f191f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTb255JTIwQTdSJTIwViUyMGNhbWVyYXxlbnwxfHx8fDE3NzAwNjQ2MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    prices: { usd: "$3,898", gbp: "£3,799", eur: "€4,399" },
    releaseDate: "October 2022",
    specs: {
      sensorSize: "Full-frame (35mm)",
      stillsResolution: "61 MP",
      videoResolution: "8K at 24p, 4K at 60p",
      videoFrameRate: "24fps (8K), 60fps (4K)",
      dimensions: "131.3 x 96.9 x 82.4mm",
      weight: "723g (body only)",
      continuousShooting: "10fps",
      screen: "3.2-inch",
      screenArticulated: "Fully articulated touchscreen",
      memoryCard: "Dual SD UHS-II"
    },
    intro: "A high-resolution detail monster that's routinely recommended for landscape, studio, and commercial photography. The A7R V's 61-megapixel sensor captures extraordinary detail while AI-powered autofocus ensures tack-sharp images even at high magnifications.",
    buildQuality: "Solid magnesium alloy construction with good weather sealing. Compact considering the sensor resolution. Well-built with attention to detail. Weather-resistant gaskets throughout. Premium feel without being heavy.",
    handling: "Improved ergonomics over previous A7R models with deeper grip. Excellent control layout. New four-axis articulating screen is versatile for any angle. Dual SD card slots are convenient. Menu system remains comprehensive but improved. Bright EVF with high resolution.",
    performance: "Outstanding image quality with incredible detail from 61MP sensor. Excellent dynamic range for landscape work. AI-powered autofocus with subject recognition. Pixel-shift multi-shooting mode for 240MP images. 8K video available but primarily a stills camera. Good battery life. In-body stabilization is effective.",
    verdict: "The A7R V is the ultimate camera for landscape, architectural, and studio photographers who prioritize resolution and detail. Image quality is extraordinary. If you need maximum detail and print large, this is the camera. Excellent value for high-resolution work."
  },
  {
    name: "Fujifilm X-T5",
    image: "https://images.unsplash.com/photo-1704002100582-a0ab0c15829f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGdWppZmlsbSUyMFhUNSUyMGNhbWVyYXxlbnwxfHx8fDE3NzAwNjQ2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    prices: { usd: "$1,699", gbp: "£1,599", eur: "€1,899" },
    releaseDate: "November 2022",
    specs: {
      sensorSize: "APS-C (X-Trans CMOS 5 HR)",
      stillsResolution: "40.2 MP",
      videoResolution: "6.2K at 30p, 4K at 60p",
      videoFrameRate: "30fps (6.2K), 60fps (4K)",
      dimensions: "129.5 x 91 x 63.8mm",
      weight: "557g (body only)",
      continuousShooting: "15fps mechanical, 20fps electronic",
      screen: "3-inch",
      screenArticulated: "Three-way tilting touchscreen",
      memoryCard: "Dual SD UHS-II"
    },
    intro: "An APS-C classic that delivers superb image quality and a brilliant photography-first shooting experience. The X-T5 combines high resolution, classic design, and Fujifilm's legendary colour science in a compact, beautifully designed body that's a joy to use.",
    buildQuality: "Premium construction with weather-sealed magnesium alloy body. Classic retro design with physical dials. Feels like a precision instrument. Excellent build quality at this price point. Compact and lightweight without feeling cheap.",
    handling: "Superb handling with dedicated dials for shutter speed, ISO, and exposure compensation. Photography-first design encourages engagement. Compact size makes it perfect for travel. Three-way tilting screen. Dual SD card slots. Intuitive menu system. Excellent EVF.",
    performance: "Outstanding image quality from 40MP APS-C sensor with X-Trans colour filter array. Fujifilm's colour science produces beautiful JPEGs straight from camera. Film simulation modes are excellent. Good autofocus with subject detection. 6.2K video. In-body stabilization up to 7 stops. Excellent battery life.",
    verdict: "The X-T5 is the best APS-C camera for photographers who love the craft of photography. Image quality rivals full-frame cameras. Compact size and excellent lens selection make it perfect for travel and street photography. Outstanding value. Highly recommended."
  },
  {
    name: "Fujifilm GFX 100S II",
    image: "https://images.unsplash.com/photo-1552457511-ec4c178a4a9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGdWppZmlsbSUyMEdGWCUyMG1lZGl1bSUyMGZvcm1hdCUyMGNhbWVyYXxlbnwxfHx8fDE3Njk5ODMzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    prices: { usd: "$4,999", gbp: "£4,799", eur: "€5,499" },
    releaseDate: "September 2023",
    specs: {
      sensorSize: "Medium format (43.8 x 32.9mm)",
      stillsResolution: "102 MP",
      videoResolution: "4K at 60p",
      videoFrameRate: "60fps (4K)",
      dimensions: "150 x 104.2 x 87.2mm",
      weight: "883g (body only)",
      continuousShooting: "7fps",
      screen: "3.2-inch",
      screenArticulated: "Three-way tilting touchscreen",
      memoryCard: "Dual SD UHS-II"
    },
    intro: "Medium format mirrorless that's repeatedly singled out when ultimate tonality, detail, and colour depth matter. The GFX 100S II makes medium format accessible with a relatively compact body and improved autofocus, delivering image quality that surpasses full-frame cameras.",
    buildQuality: "Solid magnesium alloy construction with weather sealing. Remarkably compact for a medium format camera. Professional build quality. Well-sealed against dust and moisture. Premium materials and finish throughout.",
    handling: "Surprisingly manageable for medium format. Deep grip and excellent ergonomics. Physical dials for key settings. Compact compared to traditional medium format systems. Dual SD card slots keep costs down. Intuitive menu system inherited from X Series. Excellent EVF.",
    performance: "Extraordinary image quality with exceptional detail, dynamic range, and colour depth from 102MP medium format sensor. Improved autofocus with subject detection. 7fps is adequate for most subjects. 4K video. In-body stabilization up to 8 stops. Pixel-shift mode for 400MP images. Good battery life for medium format.",
    verdict: "The GFX 100S II delivers medium format image quality in a relatively affordable and portable package. Perfect for landscape, portrait, and commercial photographers who demand the ultimate in tonality and detail. If image quality is paramount, medium format is the answer."
  },
  {
    name: "Nikon Z5 II",
    image: "https://images.unsplash.com/photo-1654983412769-10f0eced2231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWtvbiUyMFo1JTIwY2FtZXJhJTIwYm9keXxlbnwxfHx8fDE3NzAwNjQ2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    prices: { usd: "$1,396", gbp: "£1,299", eur: "€1,499" },
    releaseDate: "January 2025",
    specs: {
      sensorSize: "Full-frame (35mm)",
      stillsResolution: "24.3 MP",
      videoResolution: "4K at 60p",
      videoFrameRate: "60fps (4K)",
      dimensions: "134 x 100.5 x 69.5mm",
      weight: "690g (body only)",
      continuousShooting: "11fps",
      screen: "3.2-inch",
      screenArticulated: "Fully articulated touchscreen",
      memoryCard: "Dual SD UHS-II"
    },
    intro: "The \"best value / best entry to full-frame\" camera that multiple outlets keep praising, especially at current UK pricing. The Z5 II brings professional features and Nikon's excellent Z-mount system to an accessible price point, making it perfect for enthusiasts entering full-frame photography.",
    buildQuality: "Good magnesium alloy construction with weather sealing. Solid build quality for the price. Feels professional without the flagship weight. Weather-resistant design. Dual SD card slots add reliability.",
    handling: "Excellent ergonomics with comfortable grip. Compact body ideal for travel. Well-placed controls. User-friendly menu system. Fully articulating screen. Bright EVF. Lightweight enough for all-day shooting. Dual SD card slots are convenient and affordable.",
    performance: "Very good image quality from proven 24.3MP sensor. Excellent low-light performance. Improved autofocus with subject detection. 11fps continuous shooting. 4K 60p video. In-body stabilization up to 5.5 stops. Good battery life. Access to excellent Nikon Z-mount lenses.",
    verdict: "The Z5 II is the best entry point to full-frame photography. It delivers professional features at an enthusiast price. Excellent value for money, especially in the UK market. Perfect for photographers upgrading from APS-C or entering the Nikon Z system. Highly recommended for the budget-conscious."
  }
];

export function TopMirrorlessCameras() {
  return (
    <section className="bg-white">
      <Helmet>
        <title>Top Ten Mirrorless Cameras Right Now - The Photo Course</title>
        <meta name="description" content="Comprehensive buyers guide to the top ten mirrorless cameras in 2025/26, with detailed specifications, pricing, and expert reviews." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50" style={{ minHeight: '300px' }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-16">
          <div className="max-w-3xl">
            <Link 
              to="/reviews/cameras"
              className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 mb-4 text-sm font-medium"
            >
              ← Back to Camera Reviews
            </Link>
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-900 mb-4" 
              style={{ fontFamily: 'Roslindale, Georgia, serif' }}
            >
              Top Ten Mirrorless Cameras Right Now
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              The definitive guide to the best mirrorless cameras in 2025/26, with detailed specifications, real-world testing, and expert recommendations.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Reference Guide */}
      <div className="border-t border-gray-200 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-12">
          <h2 className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
            Quick Reference: How to Choose
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-5 border border-violet-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Sport / Wildlife</h3>
              <p className="text-sm text-gray-600">Canon EOS R5 Mark II, Nikon Z8, Nikon Z9</p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-violet-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Hybrid Photo + Video</h3>
              <p className="text-sm text-gray-600">Canon EOS R6 Mark III, Nikon Z6 III</p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-violet-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Landscape / Detail</h3>
              <p className="text-sm text-gray-600">Sony A7R V, Fujifilm GFX 100S II</p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-violet-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Best Value Full-Frame</h3>
              <p className="text-sm text-gray-600">Nikon Z5 II</p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-violet-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Best APS-C All-Rounder</h3>
              <p className="text-sm text-gray-600">Fujifilm X-T5</p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-violet-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Do-Everything Flagship</h3>
              <p className="text-sm text-gray-600">Sony A1 II</p>
            </div>
          </div>
        </div>
      </div>

      {/* Camera Reviews */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-20">
          <div className="space-y-16">
            {cameras.map((camera, index) => (
              <article key={index} id={camera.name.toLowerCase().replace(/\s+/g, '-')} className="scroll-mt-20">
                {/* Camera Header */}
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-lg">
                      <ImageWithFallback
                        src={camera.image}
                        alt={camera.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                        {camera.name}
                      </h2>
                      
                      {/* Pricing */}
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">Pricing</h3>
                        <div className="flex flex-wrap gap-4 text-lg">
                          <div>
                            <span className="text-gray-600">USD:</span>
                            <span className="ml-2 font-semibold text-gray-900">{camera.prices.usd}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">GBP:</span>
                            <span className="ml-2 font-semibold text-gray-900">{camera.prices.gbp}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">EUR:</span>
                            <span className="ml-2 font-semibold text-gray-900">{camera.prices.eur}</span>
                          </div>
                        </div>
                      </div>

                      {/* Release Date */}
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">Release Date</h3>
                        <p className="text-gray-900">{camera.releaseDate}</p>
                      </div>

                      {/* Key Specs Highlight */}
                      <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg p-4 border border-violet-200">
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="text-gray-600">Sensor:</span>
                            <span className="ml-2 font-medium text-gray-900">{camera.specs.sensorSize}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Resolution:</span>
                            <span className="ml-2 font-medium text-gray-900">{camera.specs.stillsResolution}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Burst:</span>
                            <span className="ml-2 font-medium text-gray-900">{camera.specs.continuousShooting}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Weight:</span>
                            <span className="ml-2 font-medium text-gray-900">{camera.specs.weight}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Full Specifications */}
                  <div className="border-t border-gray-200 bg-gray-50 p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                      Specifications
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600 block mb-1">Sensor Size</span>
                        <span className="font-medium text-gray-900">{camera.specs.sensorSize}</span>
                      </div>
                      <div>
                        <span className="text-gray-600 block mb-1">Stills Resolution</span>
                        <span className="font-medium text-gray-900">{camera.specs.stillsResolution}</span>
                      </div>
                      <div>
                        <span className="text-gray-600 block mb-1">Video Resolution</span>
                        <span className="font-medium text-gray-900">{camera.specs.videoResolution}</span>
                      </div>
                      <div>
                        <span className="text-gray-600 block mb-1">Video Frame Rate</span>
                        <span className="font-medium text-gray-900">{camera.specs.videoFrameRate}</span>
                      </div>
                      <div>
                        <span className="text-gray-600 block mb-1">Dimensions</span>
                        <span className="font-medium text-gray-900">{camera.specs.dimensions}</span>
                      </div>
                      <div>
                        <span className="text-gray-600 block mb-1">Weight</span>
                        <span className="font-medium text-gray-900">{camera.specs.weight}</span>
                      </div>
                      <div>
                        <span className="text-gray-600 block mb-1">Continuous Shooting</span>
                        <span className="font-medium text-gray-900">{camera.specs.continuousShooting}</span>
                      </div>
                      <div>
                        <span className="text-gray-600 block mb-1">Screen Size</span>
                        <span className="font-medium text-gray-900">{camera.specs.screen}</span>
                      </div>
                      <div>
                        <span className="text-gray-600 block mb-1">Screen Type</span>
                        <span className="font-medium text-gray-900">{camera.specs.screenArticulated}</span>
                      </div>
                      <div className="sm:col-span-2 lg:col-span-3">
                        <span className="text-gray-600 block mb-1">Memory Card</span>
                        <span className="font-medium text-gray-900">{camera.specs.memoryCard}</span>
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="p-8 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                        Introduction
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{camera.intro}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                        Build Quality
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{camera.buildQuality}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                        Handling
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{camera.handling}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                        Performance & Image Quality
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{camera.performance}</p>
                    </div>

                    <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg p-6 border border-violet-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
                        Verdict
                      </h3>
                      <p className="text-gray-900 leading-relaxed font-medium">{camera.verdict}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-gray-200 bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, Georgia, serif' }}>
              Ready to Master Your New Camera?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Once you've chosen your perfect camera, explore our comprehensive courses to unlock its full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/courses"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 h-14 text-center"
              >
                Explore Courses
              </Link>
              <Link 
                to="/resources"
                className="inline-flex items-center justify-center gap-3 border-2 border-gray-900 text-gray-900 px-8 h-14 text-center"
              >
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}