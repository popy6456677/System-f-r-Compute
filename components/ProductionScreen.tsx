import React from 'react';

const ProductionScreen: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-900 text-white animate-fadeInAndOut">
      <h2 className="text-4xl font-light tracking-widest">
        Foxy S Production
      </h2>
       <style>{`
        @keyframes fadeInAndOut {
          0%, 100% { opacity: 0; }
          20%, 80% { opacity: 1; }
        }
       .animate-fadeInAndOut {
         animation: fadeInAndOut 2s ease-in-out forwards;
       }
      `}</style>
    </div>
  );
};

export default ProductionScreen;