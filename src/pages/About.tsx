import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gem, Users, Globe, Award } from 'lucide-react';
import modelImg from '../assets/images/model.jpg';
import leatherbag2 from '../assets/images/leatherbag2.jpg';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Active', value: '5+' },
    { label: 'Custom Pieces', value: '50k+' },
    { label: 'Happy Clients', value: '50k+' },
    { label: 'States', value: '15' },
  ];

  const values = [
    {
      icon: <Gem size={32} />,
      title: 'Uncompromising Quality',
      description: 'We source only the finest materials, from VVS diamonds to 18k solid gold, ensuring every piece stands the test of time.'
    },
    {
      icon: <Users size={32} />,
      title: 'Community First',
      description: 'colebeella is more than a brand; it’s a family. We support emerging artists and give back to the culture that raised us.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Global Inspiration',
      description: 'Our designs are influenced by street culture from around the world, blending Tokyo minimalism with NY grit.'
    },
    {
      icon: <Award size={32} />,
      title: 'Master Craftsmanship',
      description: 'Every item is hand-finished by expert jewelers who have dedicated their lives to the art of bling.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-32">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center"
      >
        <span className="text-[#E33599] font-mono text-sm tracking-widest uppercase mb-4 block">Established 2020</span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
          More Than Just quality.<br className="hidden md:block" /> It's a Lifestyle.
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
          Colebeella  was born from a passion for expression. We believe that jewelry isn't just an accessory—it's a statement. 
          It's about amplifying your inner shine and showing the world who you are without saying a word.
        </p>
      </motion.div>

      {/* The Origin Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 space-y-8">
          <h2 className="text-4xl font-display font-bold">The Origin Story</h2>
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              It started in a small studio apartment in Brooklyn. Our founder, Marcus "Vibe" Thorne, was tired of seeing the same generic designs flooding the market. He wanted pieces that told a story—pieces that had soul.
            </p>
            <p>
              Armed with a sketchbook and a relentless drive, Marcus began designing custom grillz and pendants for local artists. Word spread fast. What began as a side hustle quickly turned into a movement.
            </p>
            <p>
              Today, Colebeella is a global leader in hip-hop jewelry and streetwear, but our core mission remains the same: to empower you to express your unique identity through bold, uncompromising style.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-white/10">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5 relative z-10">
            <img 
              src={modelImg} 
              alt="Founder working" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-[#E3C598]/20 rounded-[2rem] -z-0 hidden md:block" />
        </div>
      </div>

      {/* Our Values */}
      <div>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Our Core Values</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We don't just sell products; we uphold a standard. These are the pillars that define everything we do at VibeVault.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 hover:border-[#E3C598]/30 transition-colors group">
              <div className="w-16 h-16 bg-[#0a0a0a] rounded-2xl flex items-center justify-center text-[#E3C598] mb-6 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{value.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Craftsmanship Section */}
      <div className="bg-[#1a1a1a] rounded-[3rem] overflow-hidden border border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-4xl font-display font-bold mb-6">Artistry in Every Detail</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              We believe that true luxury lies in the details. That's why we refuse to mass-produce our signature pieces. Each item goes through a rigorous 15-step quality control process.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              From 3D modeling to hand-setting stones, our artisans combine traditional techniques with modern technology to create jewelry that is as durable as it is beautiful.
            </p>
            <div className="flex gap-4">
              <div className="h-1 w-20 bg-[#E3C598] rounded-full" />
              <div className="h-1 w-10 bg-gray-700 rounded-full" />
            </div>
          </div>
          <div className="h-full min-h-[400px] relative">
            <img 
              src={leatherbag2} 
              alt="Craftsmanship" 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-transparent lg:bg-gradient-to-t lg:from-transparent lg:to-transparent" />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#E3C598] rounded-[2rem] p-12 md:p-20 text-black text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Ready to Elevate Your Style?</h2>
          <p className="text-lg text-black/80 mb-10 leading-relaxed">
            Join thousands of trendsetters who have found their signature look with VibeVault. 
            Don't just follow the trend—set it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/new" className="px-10 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-900 transition-colors tracking-wide text-center">
              SHOP COLLECTION
            </Link>
            <button className="px-10 py-4 bg-transparent border-2 border-black text-black rounded-full font-bold hover:bg-black/5 transition-colors tracking-wide">
              FOLLOW OUR JOURNEY
            </button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>
    </div>
  );
};

export default About;
