import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { itemCount } = useCart();
  const { user, logout } = useAuth();
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'CATALOG', path: '/products' },
    { name: 'OUR STORY', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full border border-[#E3C598] flex items-center justify-center group-hover:bg-[#E3C598] transition-colors duration-300">
              <div className="w-4 h-4 bg-[#E3C598] rounded-full group-hover:bg-[#0a0a0a] transition-colors duration-300" />
            </div>
            <span className="text-xl font-bold tracking-wider font-display text-white">VIBEVAULT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs tracking-widest hover:text-[#E3C598] transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-[#E3C598]' : 'text-gray-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-white hover:text-[#E3C598] transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            
            <Link to="/cart" className="text-white hover:text-[#E3C598] transition-colors relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#E3C598] text-[#0a0a0a] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-400">HI, {user.name.toUpperCase()}</span>
                <button 
                  onClick={logout}
                  className="px-4 py-1.5 border border-white/20 rounded-full text-xs hover:bg-white hover:text-black transition-all duration-300"
                >
                  LOGOUT
                </button>
              </div>
            ) : (
              <Link 
                to="/login"
                className="px-6 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-[#E3C598] transition-colors duration-300"
              >
                LOGIN
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#E3C598] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm tracking-widest text-gray-400 hover:text-[#E3C598] py-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                <Link to="/cart" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-gray-400 hover:text-[#E3C598]">
                  <ShoppingBag size={18} />
                  <span className="text-sm tracking-widest">CART ({itemCount})</span>
                </Link>
                {user ? (
                  <button onClick={() => { logout(); setIsOpen(false); }} className="text-left text-sm tracking-widest text-gray-400 hover:text-[#E3C598]">
                    LOGOUT
                  </button>
                ) : (
                  <Link to="/login" onClick={() => setIsOpen(false)} className="text-sm tracking-widest text-gray-400 hover:text-[#E3C598]">
                    LOGIN
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
