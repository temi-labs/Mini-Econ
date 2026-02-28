import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, ShieldCheck, Truck, Clock, Quote } from 'lucide-react';
import { products } from '../data/products';
import modelImg from '../assets/images/model.jpg';
import model2Img from '../assets/images/model2.jpg';
import model3Img from '../assets/images/model3.jpg';
import { motion } from 'framer-motion';




const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 3 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-[#1a1a1a] border border-white/10 rounded-2xl flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(210,31,60,0.1)]">
            <span className="text-2xl md:text-3xl font-mono font-bold text-[#D21F3C]">
              {value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs text-gray-500 uppercase tracking-wider">{unit}</span>
        </div>
      ))}
    </div>
  );
};

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-[#744f37]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#744f37]" />
        </div>

        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center">
          {/* Background Text Overlay */}
          <div className="absolute inset-0 flex justify-center items-center gap-[15rem] md:gap-[28rem] pointer-events-none select-none overflow-hidden">
            {/* <div classname="flex items-start">
              <span className="text-[20vw] md:text-[35vw] font-display font-bold text-[#F2ECE6]/10 leading-none opacity-90 translate-y-10">7</span>
            </div> */}
             {/* <span className="text-[20vw] md:text-[35vw] font-display font-bold text-[#F2ECE6]/10 leading-none opacity-90 translate-y-10">7</span> */}
             <div className="flex items-start">
              <span className="text-[55vw] md:text-[55vw] font-display font-bold text-[#F2ECE6]/10 leading-none opacity-90 translate-y-10">6</span>
               <span className="text-[55vw] md:text-[55vw] font-display font-bold text-[#F2ECE6]/10 leading-none opacity-90 translate-y-10">0</span>
               <span className="text-[10vw] md:text-[10vw] font-display font-light text-[#F2ECE6]/10 mt-[5vw] md:mt-[8vw] opacity-90">%</span>
             </div>
          </div>

          {/* Central Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 text-center flex flex-col items-center h-full justify-center"
          >
            {/* Dates */}
            <div className="flex items-center justify-center gap-4 md:gap-12 w-full mb-4 md:mb-8">
              <div className="flex items-center gap-2 md:gap-4">
                <span className="text-white text-sm md:text-lg font-medium tracking-widest">10.08</span>
                <div className="w-8 md:w-16 h-[1px] bg-white/50"></div>
              </div>
               {/* Model Image Container */}
              <div className="relative w-[250px] h-[450px] md:w-[400px] md:h-[650px] z-10 mt-10 md:mt-0">
                <img 
                  src={modelImg} 
                  alt="Fashion Model" 
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover shadow-2xl rounded-lg"
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg" />
                {/* Text Over Image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                  <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight drop-shadow-lg mb-2">
                    <br /><br /><br/>OUTER<br/>WEEK
                  </h1>
                  <p className="text-white text-[10px] md:text-xs font-medium tracking-wide leading-relaxed drop-shadow-md">
                    From chilly mornings to winter days,<br/>
                    shop the collection at 70% off.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <div className="w-8 md:w-16 h-[1px] bg-white/50"></div>
                <span className="text-white text-sm md:text-lg font-medium tracking-widest">10.18</span>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="absolute bottom-10 w-full flex justify-between px-8 md:px-12 text-white text-xs md:text-sm tracking-widest uppercase font-medium">
               <span>Only Online</span>
               <span>20 F/W New Collection</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collage / Styling Tip Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
             <div className="relative">
               <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl font-display font-bold text-white stroke-text-black opacity-40">00</span>
               <img 
                 src={model2Img} 
                 alt="Model Sitting" 
                 loading="lazy"
                 decoding="async"
                 className="w-full aspect-[3/4] object-cover"
               />
               {/* <div className="absolute -right-4 top-10 bg-white px-2 py-8 writing-vertical-rl text-xs font-bold tracking-widest text-black shadow-lg hidden md:block">
                 VIBE FOR WOMEN
               </div> */}
             </div>
             <div>
               <h2 className="text-4xl font-display font-bold text-white leading-none">VIBE<br/>OUTER<br/>WEEK</h2>
               <p className="text-white mt-4 font-serif italic text-4xl">Styling Tip.</p>
               <p className="text-sm text-white/90 mt-2 max-w-xs leading-relaxed">
                 Semi-loose fit modern & classic daily jacket. 
                 Modern, feminine, casual mood all compatible.
                 High utility Vibe Outer Line steady seller product.
               </p>
             </div>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-4 pt-0 lg:pt-20">
             <div className="relative mb-8 " >
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl font-display font-bold text-white stroke-text-black opacity-40">01</span>
                <img 
                  src={modelImg} 
                  alt="Model Close up" 
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[3/4] object-cover"
                />
             </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 flex flex-col gap-8 pt-0 lg:pt-40 ">
             <div className="relative ">
                 <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl font-display font-bold text-white stroke-text-black opacity-40">02</span>
                <img 
                  src={model3Img} 
                  alt="Model Standing" 
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute -right-10 top-1/2 -translate-y-1/2 -rotate-90 text-4xl font-handwriting text-[#f5b452] hidden md:block font-bold">
                   Women look
                </div>
             </div>
             <div className=" p-6 shadow-sm border border-gray-100 bg-[#c5bfba]  ">
                <h3 className="font-display font-bold text-xl text-[#1a1a1a] mb-2">OUTER</h3>
                <p className="text-xs text-gray-500 mb-4">SPJKA49W01<br/>CHECK TR JACKET</p>
                <Link to="/products" className="inline-block px-6 py-2 border border-[#76523a] text-[#1a1a1a] text-xs font-bold tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-colors">
                  SHOP NOW
                </Link>
             </div>
             {/* <div className="relative w-full aspect-[3/4] overflow-hidden relative w-[250px] h-[450px] md:w-[400px] md:h-[650px] z-10 mt-10 md:mt-0">
                <img 
                  src="src/assets/images/sneakers3.jpg" 
                  alt="Jacket Detail" 
                  className="w-full  object-cover shadow-2xl rounded-lg"
                />
             </div> */}
          </div>
        </div>
      </section>

      {/* New Arrivals Section (Updated Colors) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 text-[#cd2f29]">New Arrivals</h2>
            {/* <p className="text-[#cd2f29] text-5xl md:text-7xl font-dispaly font-bold mb-4 text-sm leading-relaxed">
              New Arrivals
            </p> */}
            <p className="text-[#ffffff] max-w-xl text-sm leading-relaxed">
              express yourself through our range of jewelry types.
            </p>
          </div>
          {/* <div className="flex items-center gap-4 mt-8 md:mt-0">
             <span className="text-6xl font-display font-bold text-[#fffff]/10">By Type</span>
             <Link to="/new" className="px-10 py-3 bg-[#1a1a1a] text-white rounded-full font-bold text-sm hover:bg-[#333] transition-colors shadow-lg">
               SHOP NOW
             </Link>
          </div> */}
        </div>

        {/* Categories Filter */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-8">
          {['All', 'Bracelets', 'Pendants', 'Rings', 'Chains', 'Grillz'].map((cat, i) => (
            <button 
              key={cat}
              className={`px-6 py-2 rounded-full text-sm border transition-all whitespace-nowrap flex-shrink-0 ${
                i === 0 
                  ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]' 
                  : 'bg-transparent text-[#fffff] border-[#ccc] hover:border-[#ffa361] hover:text-[#cd2f29]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} className="group">
              <div className="bg-[#1a1a1a] rounded-3xl p-4 border border-white/10 group-hover:border-[#997B66] transition-all duration-300 h-full flex flex-col relative overflow-hidden shadow-sm hover:shadow-md">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#997B66] hover:text-white transition-colors">
                    <Heart size={14} />
                  </div>
                </div>
                
                <div className="flex justify-between items-start mb-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] uppercase tracking-wider text-[#c5bfba] border border-[#997B66]/20">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Star size={10} fill="#d1a412" className="text-[#997B66]" />
                    {product.rating}
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg mb-1 text-white">{product.name}</h3>
                <div className="flex justify-between items-end mt-auto">
                  <span className="font-mono text-lg text-gray-200">${product.price}</span>
                  <span className="text-xs text-gray-500 line-through">${Math.round(product.price * 1.2)}</span>
                </div>
              </div>
            </Link>
          ))}
          
           {/* More Info Card (links to New page) */}
           <Link to="/new" className="bg-[#1a1a1a] rounded-3xl p-4 border border-white/10 flex flex-col justify-center items-center text-center group hover:bg-[#997B66] hover:text-white transition-colors duration-300 shadow-sm text-white">
             <div className="w-16 h-16 rounded-full border border-current flex items-center justify-center mb-4 group-hover:border-white">
              <ArrowRight size={24} />
             </div>
             <div className="flex items-center gap-4 mt-8 md:mt-0" />
             <h3 className="font-display font-bold text-xl">View All <br /> Products</h3>
           </Link>
        </div>
      </section>

      {/* Trending Collections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-4xl md:text-5xl font-display text-[#c5bfba] font-bold mb-12 text-center">Trending Collections</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-[2rem] overflow-hidden group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1000" 
              alt="Iced Out" 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-display font-bold mb-2">The Iced Out Collection</h3>
              <p className="text-gray-300 mb-6 max-w-sm">Maximum shine for those who demand attention. VVS diamonds set in premium gold.</p>
              <span className="inline-flex items-center gap-2 text-[#D21F3C] font-bold group-hover:gap-4 transition-all">
                EXPLORE <ArrowRight size={18} />
              </span>
            </div>
          </div>
          <div className="relative h-[400px] rounded-[2rem] overflow-hidden group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1000" 
              alt="Gold Chains" 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-display font-bold mb-2">Cuban Link Essentials</h3>
              <p className="text-gray-300 mb-6 max-w-sm">Timeless classics that never go out of style. Solid gold chains built to last.</p>
              <span className="inline-flex items-center gap-2 text-[#D21F3C] font-bold group-hover:gap-4 transition-all">
                EXPLORE <ArrowRight size={18} />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1a1a1a] rounded-[2rem] p-12 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Quote size={200} />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Marcus J.", role: "Verified Buyer", text: "The quality is unmatched. I've bought chains from other places, but VibeVault is on another level. The shine is crazy!" },
                { name: "Sarah K.", role: "Verified Buyer", text: "Customer service was amazing. They helped me design a custom pendant for my husband and he absolutely loves it." },
                { name: "David R.", role: "Verified Buyer", text: "Fast shipping and the packaging was premium. Felt like I was opening a treasure chest. Definitely coming back for more." }
              ].map((review, i) => (
                <div key={i} className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/5 hover:border-[#D21F3C]/20 transition-colors">
                  <div className="flex gap-1 text-[#D21F3C] mb-4">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={14} fill="#D21F3C" />)}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{review.text}"</p>
                  <div>
                    <p className="font-bold text-white">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1a1a1a] rounded-[2rem] p-12 border border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full border-2 border-[#D21F3C] flex items-center justify-center shadow-[0_0_20px_rgba(210,31,60,0.3)]">
              <div className="w-16 h-16 bg-[#D21F3C] rounded-full" />
            </div>
            <div>
              <h3 className="text-5xl font-display font-bold mb-2">14,500+</h3>
              <p className="text-gray-400 text-sm max-w-xs">
                With a proud track record of delivering exceptional quality and style, we are thrilled to announce...
              </p>
            </div>
          </div>
          
          <div className="flex -space-x-4">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="w-16 h-16 rounded-full bg-gray-800 border-4 border-[#1a1a1a] overflow-hidden">
                 <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=100`} alt="User" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                 {/* <img src="src/assets/images/model.jpg"  alt="User" className="w-full h-full object-cover" /> */}
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
