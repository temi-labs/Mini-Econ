import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-6 border border-white/10">
          <ShoppingBag size={48} className="text-gray-600" />
        </div>
        <h2 className="text-3xl font-display font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          Looks like you haven't added any items to your cart yet. 
          Explore our collection and find something that speaks to your style.
        </p>
        <Link 
          to="/products" 
          className="px-8 py-3 bg-[#E3C598] text-black rounded-full font-bold hover:bg-[#d4b485] transition-colors"
        >
          START SHOPPING
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-12">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <motion.div 
              key={`${item.id}-${item.selectedSize}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-[#1a1a1a] p-6 rounded-3xl border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-6 group hover:border-[#E3C598]/30 transition-colors"
            >
              <div className="w-24 h-24 bg-gray-800 rounded-2xl overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display font-bold text-lg truncate pr-4">{item.name}</h3>
                  <button 
                    onClick={() => removeFromCart(item.id, item.selectedSize)}
                    className="text-gray-500 hover:text-red-500 transition-colors p-1"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="capitalize">{item.category}</span>
                  {item.selectedSize && (
                    <>
                      <span className="w-1 h-1 bg-gray-600 rounded-full" />
                      <span>Size: <span className="text-white font-bold">{item.selectedSize}</span></span>
                    </>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center bg-black/30 rounded-full border border-white/10 px-3 py-1">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize)}
                      className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center font-mono text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)}
                      className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <span className="font-mono text-lg text-[#E3C598]">${item.price * item.quantity}</span>
                </div>
              </div>
            </motion.div>
          ))}
          
          <button 
            onClick={clearCart}
            className="text-sm text-gray-500 hover:text-white underline decoration-gray-700 underline-offset-4 transition-colors"
          >
            Clear Cart
          </button>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-[#1a1a1a] p-8 rounded-[2rem] border border-white/10 sticky top-24">
            <h3 className="font-display font-bold text-2xl mb-6">Order Summary</h3>
            
            <div className="space-y-4 mb-8 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span className="font-mono text-white">${total}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span className="font-mono text-white">Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Tax</span>
                <span className="font-mono text-white">Calculated at checkout</span>
              </div>
              <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                <span className="font-bold text-lg">Total</span>
                <span className="font-mono text-2xl text-[#E3C598]">${total}</span>
              </div>
            </div>

            <Link to="/checkout" className="w-full py-4 bg-[#E3C598] text-black rounded-full font-bold tracking-wide hover:bg-[#d4b485] transition-colors flex items-center justify-center gap-2 mb-4 group">
              CHECKOUT <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <p className="text-xs text-center text-gray-500">
              Secure Checkout - SSL Encrypted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
