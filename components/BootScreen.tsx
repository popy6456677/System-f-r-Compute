
import React from 'react';
import { SystemLogoIcon } from './icons';

const BootScreen: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-900 text-white animate-fadeIn overflow-hidden">
      <div className="relative flex justify-center items-center">
        <div className="absolute w-48 h-48 border-2 border-cyan-500/30 rounded-full animate-ping-slow"></div>
        <div className="absolute w-64 h-64 border-2 border-cyan-500/20 rounded-full animate-ping-slow" style={{ animationDelay: '0.2s' }}></div>
        <div className="animate-pulse-bright w-32 h-32 text-cyan-400">
            <SystemLogoIcon />
        </div>
      </div>
      <h1 className="text-4xl font-light tracking-widest mt-8 animate-text-glow">SYSTEM X80</h1>
      <div className="mt-12 w-1/4 h-1 bg-gray-700 rounded-full overflow-hidden relative">
        <div className="h-full bg-cyan-400 animate-loading-bar"></div>
        <div className="absolute top-0 left-0 h-full w-full bg-white/20 animate-loading-shimmer"></div>
      </div>
      <p className="mt-4 text-sm text-gray-400 tracking-widest">INITIALIZING CORE...</p>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes loading-shimmer {
          0% { transform: translateX(-100%) skewX(-30deg); }
          100% { transform: translateX(250%) skewX(-30deg); }
        }
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(34, 211, 238, 0.5); }
          50% { text-shadow: 0 0 20px rgba(34, 211, 238, 1); }
        }
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        @keyframes pulse-bright {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 5px #22d3ee); }
          50% { opacity: 0.8; filter: drop-shadow(0 0 15px #22d3ee); }
        }
        .animate-loading-bar {
          animation: loading-bar 2.8s ease-in-out forwards;
        }
        .animate-loading-shimmer {
          animation: loading-shimmer 1.5s ease-in-out infinite;
          animation-delay: 0.2s;
        }
        .animate-text-glow {
            animation: text-glow 2s ease-in-out infinite;
        }
        .animate-ping-slow {
            animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-pulse-bright {
            animation: pulse-bright 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default BootScreen;