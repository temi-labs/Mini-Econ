import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search } from 'lucide-react';

const faqs = [
  {
    category: 'Ordering & Shipping',
    questions: [
      {
        q: 'How long does shipping take?',
        a: 'Domestic orders typically arrive within 3-5 business days. International shipping can take 7-14 business days depending on the destination. All orders include tracking information.'
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes, we ship to most countries worldwide. International shipping rates are calculated at checkout based on your location and the weight of your order.'
      },
      {
        q: 'Can I track my order?',
        a: 'Absolutely! Once your order ships, you will receive a confirmation email with a tracking number. You can also track your order status on our Tracking page.'
      }
    ]
  },
  {
    category: 'Returns & Exchanges',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We offer a 30-day return policy for all unworn items in their original packaging. Custom pieces are final sale and cannot be returned unless there is a manufacturing defect.'
      },
      {
        q: 'How do I initiate a return?',
        a: 'To start a return, please visit our Returns Center or contact our support team. You will need your order number and email address used for the purchase.'
      }
    ]
  },
  {
    category: 'Product Care & Warranty',
    questions: [
      {
        q: 'Does the jewelry come with a warranty?',
        a: 'Yes, all VibeVault pieces come with a lifetime warranty against fading and tarnishing. If your piece fades, we will replace it for free.'
      },
      {
        q: 'How should I clean my jewelry?',
        a: 'We recommend using a soft cloth to wipe down your pieces after wearing. For a deeper clean, use mild soap and warm water, then dry completely with a soft cloth.'
      },
      {
        q: 'Is the jewelry real gold?',
        a: 'We offer both solid gold pieces and high-quality gold plated items. The material is clearly listed in the product description for each item.'
      }
    ]
  }
];

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Ordering & Shipping');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.map(cat => ({
    ...cat,
    questions: cat.questions.filter(
      q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
           q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.questions.length > 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Find answers to common questions about our products, shipping, and policies.
        </p>

        <div className="max-w-md mx-auto relative">
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1a1a1a] border border-white/10 rounded-full py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[#E3C598] transition-colors"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar Categories */}
        <div className="lg:col-span-1 space-y-2">
          {faqs.map((cat) => (
            <button
              key={cat.category}
              onClick={() => {
                setActiveCategory(cat.category);
                setOpenIndex(null);
                setSearchQuery('');
              }}
              className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${
                activeCategory === cat.category && !searchQuery
                  ? 'bg-[#E3C598] text-black font-bold'
                  : 'text-gray-400 hover:bg-[#1a1a1a] hover:text-white'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="lg:col-span-3 space-y-4">
          {(searchQuery ? filteredFaqs : faqs.filter(c => c.category === activeCategory)).map((cat, catIndex) => (
            <div key={cat.category}>
              {searchQuery && <h3 className="text-xl font-bold mb-4 text-[#E3C598]">{cat.category}</h3>}
              <div className="space-y-4">
                {cat.questions.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[#1a1a1a] rounded-2xl border border-white/5 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                      >
                        <span className="font-medium text-lg pr-8">{faq.q}</span>
                        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-colors ${isOpen ? 'bg-[#E3C598] text-black border-[#E3C598]' : 'text-gray-400'}`}>
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
          
          {searchQuery && filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No results found for "{searchQuery}". Try a different search term.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
