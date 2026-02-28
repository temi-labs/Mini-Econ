import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ArrowLeft, ShieldCheck, Truck } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { motion } from 'framer-motion';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const { showToast } = useToast();
  
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.sizes ? product.sizes[0] : undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description');

  // gallery state: use either explicit images array or fall back to single image
  const gallery = product.images && product.images.length ? product.images : [product.image];
  const [selectedImage, setSelectedImage] = useState<string>(gallery[0]);

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
    showToast(`${product.name} added to cart!`, 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft size={20} /> Back to Collection
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Image Gallery */}
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square rounded-[2rem] overflow-hidden bg-[#1a1a1a] border border-white/5"
          >
            <img 
              src={selectedImage} 
              alt={product.name} 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-4 gap-4">
            {gallery.map((src, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(src)}
                className={`aspect-square rounded-xl overflow-hidden bg-[#1a1a1a] border border-white/5 cursor-pointer hover:border-[#E3C598] transition-colors ${
                  selectedImage === src ? 'border-[#E3C598]' : ''
                }`}
              >
                <img
                  src={src}
                  alt={`${product.name} view ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-[#E3C598]/10 rounded-full text-xs uppercase tracking-wider text-[#E3C598] border border-[#E3C598]/20">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-[#E3C598] text-sm">
              <Star size={14} fill="#E3C598" />
              <span className="font-bold">{product.rating}</span>
              <span className="text-gray-500">(128 reviews)</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">{product.name}</h1>
          
          <div className="flex items-end gap-4 mb-8">
            <span className="text-4xl font-mono text-[#E3C598]">${product.price}</span>
            <span className="text-lg text-gray-500 line-through mb-1">${Math.round(product.price * 1.2)}</span>
          </div>

          <div className="space-y-8 mb-12">
            {/* Size Selector */}
            {product.sizes && (
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-bold tracking-wide text-gray-300">SELECT SIZE</label>
                  <button className="text-xs text-[#E3C598] underline">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                        selectedSize === size
                          ? 'bg-[#E3C598] text-black scale-110'
                          : 'bg-[#1a1a1a] text-gray-400 border border-white/10 hover:border-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">
              {product.description} Designed for the modern trendsetter, this piece combines premium materials with expert craftsmanship. Perfect for elevating any outfit.
            </p>

            {/* Actions */}
            <div className="flex gap-4">
              <div className="flex items-center bg-[#1a1a1a] rounded-full border border-white/10 px-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-mono">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-[#E3C598] text-black rounded-full font-bold tracking-wide hover:bg-[#d4b485] transition-colors flex items-center justify-center gap-2 py-4"
              >
                <ShoppingBag size={20} /> ADD TO CART
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 py-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#E3C598]" size={24} />
              <div>
                <h4 className="font-bold text-sm">Lifetime Warranty</h4>
                <p className="text-xs text-gray-500">Guaranteed quality</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="text-[#E3C598]" size={24} />
              <div>
                <h4 className="font-bold text-sm">Free Shipping</h4>
                <p className="text-xs text-gray-500">On orders over $200</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs: Description & Reviews */}
      <div className="mt-24">
        <div className="flex gap-8 border-b border-white/10 mb-8">
          <button
            onClick={() => setActiveTab('description')}
            className={`pb-4 text-sm font-bold tracking-widest transition-colors ${
              activeTab === 'description' ? 'text-[#E3C598] border-b-2 border-[#E3C598]' : 'text-gray-500 hover:text-white'
            }`}
          >
            DESCRIPTION
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-4 text-sm font-bold tracking-widest transition-colors ${
              activeTab === 'reviews' ? 'text-[#E3C598] border-b-2 border-[#E3C598]' : 'text-gray-500 hover:text-white'
            }`}
          >
            REVIEWS (128)
          </button>
        </div>

        {activeTab === 'description' ? (
          <div className="max-w-3xl text-gray-400 leading-relaxed space-y-4">
            <p>
              Experience the pinnacle of urban luxury with the {product.name}. 
              Each piece is meticulously crafted by our master jewelers using only the finest materials.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Premium materials sourced ethically</li>
              <li>Hand-finished details for superior quality</li>
              <li>Water and sweat resistant coating</li>
              <li>Includes signature VibeVault display box</li>
            </ul>
          </div>
        ) : (
          <div className="space-y-8 max-w-3xl">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-700" />
                    <div>
                      <h4 className="font-bold text-sm">Alex Johnson</h4>
                      <div className="flex text-[#E3C598] text-xs">
                        {[1, 2, 3, 4, 5].map(star => <Star key={star} size={10} fill="#E3C598" />)}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">
                    {new Date(Date.now() - i * 86400000 * 2).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  Absolutely stunning piece! The quality is unmatched and it shines beautifully in the light. 
                  Shipping was super fast too. Highly recommend!
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
