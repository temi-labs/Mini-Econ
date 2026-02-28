import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package, Truck, CheckCircle, MapPin, Search } from 'lucide-react';

const Tracking: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlOrderId = searchParams.get('orderId');
  const [orderId, setOrderId] = useState(urlOrderId || '');
  const [activeStep, setActiveStep] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (urlOrderId) {
      setOrderId(urlOrderId);
      // Simulate fetching order status
      setActiveStep(2); 
    }
  }, [urlOrderId]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim()) return;
    
    setIsSearching(true);
    setSearchParams({ orderId });
    
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      setActiveStep(Math.floor(Math.random() * 3) + 1); // Random status for demo
    }, 1000);
  };

  const steps = [
    { icon: <Package size={20} />, label: 'Order Placed', date: 'Feb 23, 2026', time: '10:30 AM' },
    { icon: <CheckCircle size={20} />, label: 'Processing', date: 'Feb 24, 2026', time: '02:15 PM' },
    { icon: <Truck size={20} />, label: 'Shipped', date: 'Feb 25, 2026', time: '09:45 AM' },
    { icon: <MapPin size={20} />, label: 'Delivered', date: 'Expected Feb 28', time: '' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-display font-bold mb-4">Track Your Order</h1>
        <p className="text-gray-400">Enter your order ID to see the current status of your shipment.</p>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-16">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter Order ID (e.g., ORD-123456)"
            className="w-full bg-[#1a1a1a] border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-[#E3C598] pr-12"
          />
          <button 
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#E3C598] rounded-full text-black hover:bg-[#d4b485] transition-colors"
          >
            {isSearching ? (
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
            ) : (
              <Search size={20} />
            )}
          </button>
        </form>
      </div>

      {/* Order Status Card */}
      {orderId && !isSearching && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1a1a1a] rounded-[2rem] p-8 md:p-12 border border-white/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 pb-8 border-b border-white/5">
            <div>
              <p className="text-gray-400 text-sm mb-1">Order ID</p>
              <h2 className="text-2xl font-mono font-bold text-[#E3C598]">{orderId}</h2>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <p className="text-gray-400 text-sm mb-1">Estimated Delivery</p>
              <h3 className="text-xl font-bold">February 28, 2026</h3>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Progress Bar Background */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10 md:hidden" /> {/* Mobile Vertical Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-white/10 hidden md:block" /> {/* Desktop Horizontal Line */}
            
            {/* Active Progress Bar */}
            <div 
              className="absolute top-8 left-0 h-0.5 bg-[#E3C598] hidden md:block transition-all duration-1000" 
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
             <div 
              className="absolute left-8 top-0 w-0.5 bg-[#E3C598] md:hidden transition-all duration-1000" 
              style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex md:flex-col items-center md:text-center gap-6 md:gap-4">
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center border-4 z-10 transition-colors duration-500 ${
                      index <= activeStep 
                        ? 'bg-[#E3C598] border-[#1a1a1a] text-black' 
                        : 'bg-[#0a0a0a] border-[#1a1a1a] text-gray-600'
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="flex-1 md:flex-none">
                    <h4 className={`font-bold mb-1 ${index <= activeStep ? 'text-white' : 'text-gray-600'}`}>
                      {step.label}
                    </h4>
                    <p className="text-xs text-gray-500">{step.date}</p>
                    <p className="text-xs text-gray-500">{step.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Tracking;
