
import React from 'react';

interface PortalScreenProps {
  onEnterDesktop: () => void;
}

const PortalScreen: React.FC<PortalScreenProps> = ({ onEnterDesktop }) => {
  return (
    <div
      className="w-full h-full bg-cover bg-center relative flex justify-center items-center animate-fadeIn"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/systemx80desktop/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>
      <div className="relative flex flex-col items-center text-white">
        <h2 className="text-4xl font-light tracking-wider mb-8 text-shadow-lg">Loading Complete</h2>
        <button
          onClick={onEnterDesktop}
          className="portal-btn relative w-48 h-48 rounded-full border-2 border-cyan-400/50 flex items-center justify-center text-lg font-bold tracking-widest uppercase text-cyan-300 transition-all duration-300 hover:bg-cyan-400/10 hover:text-white hover:shadow-cyan-glow"
        >
          <div className="portal-ring absolute w-full h-full rounded-full border-2 border-cyan-400/70"></div>
          <div className="portal-ring absolute w-full h-full rounded-full border-2 border-cyan-400/40"></div>
          <span className="z-10">Enter Desktop</span>
        </button>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
        }
        .text-shadow-lg {
          text-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
        }
        .portal-btn .portal-ring {
          transition: all 0.4s ease-out;
        }
        .portal-btn:hover .portal-ring:nth-of-type(1) {
          transform: scale(1.2);
          opacity: 0;
        }
        .portal-btn:hover .portal-ring:nth-of-type(2) {
          transform: scale(1.5);
          opacity: 0;
        }
        .hover\\:shadow-cyan-glow:hover {
          box-shadow: 0 0 25px 5px rgba(34, 211, 238, 0.4);
        }
      `}</style>
    </div>
  );
};

export default PortalScreen;