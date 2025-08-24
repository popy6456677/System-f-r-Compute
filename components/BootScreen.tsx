import React from 'react';
import { SystemLogoIcon } from './icons';

const BootScreen: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-900 text-white animate-fadeIn">
      <div className="relative flex justify-center items-center">
        <div className="absolute w-48 h-48 border-2 border-cyan-500/30 rounded-full animate-pulse"></div>
        <div className="absolute w-64 h-64 border-2 border-cyan-500/20 rounded-full animate-pulse delay-75"></div>
        <div className="animate-pulse w-32 h-32 text-cyan-400">
            <SystemLogoIcon />
        </div>
      </div>
      <h1 className="text-4xl font-light tracking-widest mt-8">SYSTEM X80</h1>
      <div className="mt-12 w-1/4 h-1 bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-cyan-400 animate-loading-bar"></div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-loading-bar {
          animation: loading-bar 2.8s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BootScreen;