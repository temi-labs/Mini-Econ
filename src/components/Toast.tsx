import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const icons = {
    success: <CheckCircle size={18} className="text-black" />,
    error: <AlertCircle size={18} className="text-white" />,
    info: <Info size={18} className="text-black" />,
  };

  const styles = {
    success: 'bg-[#E3C598] text-black border-[#E3C598]',
    error: 'bg-red-500 text-white border-red-500',
    info: 'bg-white text-black border-white',
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className={`pointer-events-auto flex items-center gap-3 px-6 py-3 rounded-full shadow-2xl border ${styles[type]} min-w-[300px] justify-between`}
      >
        <div className="flex items-center gap-3">
          {icons[type]}
          <span className="text-sm font-bold tracking-wide">{message}</span>
        </div>
        <button onClick={onClose} className="hover:opacity-70 transition-opacity">
          <X size={14} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;
