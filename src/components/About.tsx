import alastairImage from 'figma:asset/7c775ac9e741e81198c21977108b20ee357844f5.png';

export function About() {
  const team = [
    {
      name: 'Alastair Jennings',
      role: 'Lead Instructor & Photographer',
      bio: 'With over 32 years working as a professional photographer, videographer and writer. Alastair teaches Photography and film in the south of England, writes for newspapers, magazines and websites . He has taught hundreds of students the art of photography.',
      image: alastairImage,
      gradient: 'from-violet-600 to-purple-600',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-pink-50/30 via-white to-orange-50/30 min-h-screen" aria-label="About Us">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-12">
        <div className="mb-16">
          <h1 className="text-3xl sm:text-5xl tracking-tight bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 bg-clip-text text-transparent mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            About The Photo Course
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            We believe that photography is more than just technical skill—it's about seeing the world differently and capturing moments that matter. Our team of experienced photographers is dedicated to helping you master both the art and science of photography.
          </p>
        </div>

        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'Roslindale, serif' }}>
            Meet Our Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl tracking-tight text-gray-900 mb-2" style={{ fontFamily: 'Roslindale, serif' }}>
                  {member.name}
                </h3>
                <p className={`text-sm uppercase tracking-wider mb-4 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-xl p-12 text-center">
          <h2 className="text-4xl tracking-tight text-gray-900 mb-6" style={{ fontFamily: 'Roslindale, serif' }}>
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The Photo Course was created to provide accessible, high-quality photography education that combines technical expertise with creative vision. We're passionate about empowering photographers at every level to tell their stories through compelling images.
          </p>
        </div>
      </div>
    </section>
  );
}