import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Checkout: React.FC = () => {
  const { cart, total, subtotal, discount, applyCoupon, removeCoupon, clearCart } = useCart();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) return;
    const success = applyCoupon(couponCode.toUpperCase());
    if (success) {
      showToast('Coupon applied successfully!', 'success');
      setCouponCode('');
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code');
      showToast('Invalid coupon code', 'error');
    }
  };

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    country: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      showToast('Order placed successfully!', 'success');
      // Generate a random order ID
      const orderId = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
      navigate(`/tracking?orderId=${orderId}`);
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-display font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-400 mb-8">Add some items to your cart to proceed to checkout.</p>
        <button 
          onClick={() => navigate('/products')}
          className="px-8 py-3 bg-[#E3C598] text-black rounded-full font-bold hover:bg-[#d4b485] transition-colors"
        >
          Browse Collection
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold mb-12">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Shipping Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="bg-[#1a1a1a] p-8 rounded-[2rem] border border-white/5">
            <h2 className="text-xl font-bold mb-6">Contact Information</h2>
            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E3C598]"
                  placeholder="your@email.com"
                />
              </div>

              <h2 className="text-xl font-bold mt-8 mb-6">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E3C598]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E3C598]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E3C598]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E3C598]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2">ZIP Code</label>
                  <input
                    type="text"
                    name="zip"
                    required
                    value={formData.zip}
                    onChange={handleInputChange}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E3C598]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Country</label>
                <select
                  name="country"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E3C598]"
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                </select>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Order Summary */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="bg-[#1a1a1a] p-8 rounded-[2rem] border border-white/5 sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-400">
                      Qty: {item.quantity} {item.selectedSize && `• Size: ${item.selectedSize}`}
                    </p>
                  </div>
                  <div className="font-mono text-sm">${item.price * item.quantity}</div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-4 space-y-2 mb-6">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span className="font-mono text-white">${subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span className="font-mono text-white">Free</span>
              </div>
              
              {/* Discount Section */}
              {discount ? (
                <div className="flex justify-between text-[#E3C598]">
                  <span>Discount ({discount.code})</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono">
                      -{discount.type === 'percentage' ? `${discount.amount}%` : `$${discount.amount}`}
                    </span>
                    <button onClick={removeCoupon} className="text-xs underline hover:text-white">Remove</button>
                  </div>
                </div>
              ) : (
                <div className="pt-2 pb-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Discount code"
                      className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E3C598]"
                    />
                    <button
                      type="button"
                      onClick={handleApplyCoupon}
                      className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {couponError && <p className="text-red-500 text-xs mt-1">{couponError}</p>}
                  <p className="text-xs text-gray-500 mt-2">
                    Available codes: <span className="text-[#E3C598] font-mono">WELCOME10</span>, <span className="text-[#E3C598] font-mono">VIBE20</span>
                  </p>
                </div>
              )}

              <div className="flex justify-between text-xl font-bold pt-4 border-t border-white/10">
                <span>Total</span>
                <span className="font-mono text-[#E3C598]">${total}</span>
              </div>
            </div>

            <button
              type="submit"
              form="checkout-form"
              disabled={isProcessing}
              className="w-full bg-[#E3C598] text-black font-bold py-4 rounded-full hover:bg-[#d4b485] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>Processing...</>
              ) : (
                <>PAY NOW ${total}</>
              )}
            </button>
            <p className="text-xs text-center text-gray-500 mt-4">
              Secure checkout powered by Stripe. Your data is encrypted.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
