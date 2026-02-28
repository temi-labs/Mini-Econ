import React from 'react';
import Products from './Products';

const New: React.FC = () => {
  return (
    <div>
      <div className="bg-[#E3C598] text-black py-4 text-center font-bold tracking-widest uppercase text-sm">
        New Arrivals - Fresh Drops Every Friday!!
      </div>
      <Products />
    </div>
  );
};

export default New;
