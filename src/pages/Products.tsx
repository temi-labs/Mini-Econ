import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, Star, Heart, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { motion } from 'framer-motion';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');
  const [sortBy, setSortBy] = useState<'default' | 'newest' | 'oldest'>('default');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.shippingDate || 0).getTime() - new Date(a.shippingDate || 0).getTime();
    }
    if (sortBy === 'oldest') {
      return new Date(a.shippingDate || 0).getTime() - new Date(b.shippingDate || 0).getTime();
    }
    return 0;
  });

  const categories = ['all', 'jewelry', 'clothing', 'bags', 'shoes'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
        <div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">Collection</h1>
          <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
            Explore our curated selection of premium hip-hop jewelry, streetwear, and accessories.
          </p>
        </div>
        
        <div className="w-full lg:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
            <div className="relative group z-20">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] rounded-full border border-white/10 hover:border-[#E3C598] transition-colors text-sm text-gray-400 hover:text-white whitespace-nowrap">
                <span>Sort: {sortBy === 'default' ? 'Default' : sortBy === 'newest' ? 'Newest' : 'Oldest'}</span>
                <Filter size={16} />
              </button>
              <div className="absolute left-0 sm:right-0 sm:left-auto mt-2 w-48 bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <button 
                  onClick={() => setSortBy('default')}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 ${sortBy === 'default' ? 'text-[#E3C598]' : 'text-gray-400'}`}
                >
                  Default
                </button>
                <button 
                  onClick={() => setSortBy('newest')}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 ${sortBy === 'newest' ? 'text-[#E3C598]' : 'text-gray-400'}`}
                >
                  Newest (Shipping)
                </button>
                <button 
                  onClick={() => setSortBy('oldest')}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 ${sortBy === 'oldest' ? 'text-[#E3C598]' : 'text-gray-400'}`}
                >
                  Oldest (Shipping)
                </button>
              </div>
            </div>

            <button className="p-2 bg-[#1a1a1a] rounded-full border border-white/10 hover:border-[#E3C598] transition-colors sm:hidden">
              <Filter size={20} />
            </button>
          </div>

          <div className="w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
            <div className="flex bg-[#1a1a1a] rounded-full p-1 border border-white/10 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all capitalize whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-[#E3C598] text-black shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <button className="hidden sm:block p-3 bg-[#1a1a1a] rounded-full border border-white/10 hover:border-[#E3C598] transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sortedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={`/products/${product.id}`} className="group block h-full">
              <div className="bg-[#1a1a1a] rounded-[2rem] p-4 border border-white/5 group-hover:border-[#E3C598]/50 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gray-800">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 w-10 h-10 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#E3C598] hover:text-black transition-colors z-10">
                    <Heart size={18} />
                  </div>
                  {product.category === 'clothing' && (
                    <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] uppercase tracking-wider text-white border border-white/10">
                      {product.sizes?.length} Sizes
                    </div>
                  )}
                </div>
                
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#E3C598]">
                    <Star size={12} fill="#E3C598" />
                    {product.rating}
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl mb-2 group-hover:text-[#E3C598] transition-colors">
                  {product.name}
                </h3>
                
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/5">
                  <span className="font-mono text-xl text-white">${product.price}</span>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#E3C598] group-hover:border-[#E3C598] group-hover:text-black transition-all">
                    <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
