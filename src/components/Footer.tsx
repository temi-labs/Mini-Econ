import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Check } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate API call
    setTimeout(() => {
      setSubscribed(true);
      showToast('Successfully subscribed to newsletter!', 'success');
      setEmail('');
    }, 500);
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold font-display text-white tracking-wider">
              VIBEVAULT
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elevate your style with our personalized jewelry consultation. 
              Craft a one-of-a-kind statement piece that reflects your unique style.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-display font-bold mb-6">SHOP</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/products?category=jewelry" className="hover:text-[#E3C598] transition-colors">Jewelry</Link></li>
              <li><Link to="/products?category=clothing" className="hover:text-[#E3C598] transition-colors">Clothing</Link></li>
              <li><Link to="/products?category=bags" className="hover:text-[#E3C598] transition-colors">Bags</Link></li>
              <li><Link to="/new" className="hover:text-[#E3C598] transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">SUPPORT</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-[#E3C598] transition-colors">Our Story</Link></li>
              <li><Link to="/tracking" className="hover:text-[#E3C598] transition-colors">Track Order</Link></li>
              <li><Link to="/contact" className="hover:text-[#E3C598] transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-[#E3C598] transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-[#E3C598] transition-colors">Shipping & Returns</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">NEWSLETTER</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            
            {subscribed ? (
              <div className="bg-[#E3C598]/10 border border-[#E3C598] rounded-xl p-4 flex items-center gap-3 text-[#E3C598]">
                <div className="w-8 h-8 rounded-full bg-[#E3C598] flex items-center justify-center text-black">
                  <Check size={16} />
                </div>
                <div>
                  <p className="font-bold text-sm">Thank you!</p>
                  <p className="text-xs opacity-80">You're on the list.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="bg-[#1a1a1a] border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-[#E3C598] w-full"
                />
                <button type="submit" className="bg-[#E3C598] text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-[#d4b485] transition-colors">
                  JOIN
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} VIBEVAULT. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#E3C598] transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-gray-400 hover:text-[#E3C598] transition-colors"><Twitter size={18} /></a>
            <a href="#" className="text-gray-400 hover:text-[#E3C598] transition-colors"><Facebook size={18} /></a>
            <a href="#" className="text-gray-400 hover:text-[#E3C598] transition-colors"><Youtube size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
