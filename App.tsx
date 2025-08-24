
import React, { useState, useEffect } from 'react';
import { BootState } from './types';
import ProductionScreen from './components/ProductionScreen';
import BootScreen from './components/BootScreen';
import WelcomeScreen from './components/WelcomeScreen';
import PortalScreen from './components/PortalScreen';
import Desktop from './components/Desktop';
import { PlayIcon } from './components/icons';

const App: React.FC = () => {
  const [bootState, setBootState] = useState<BootState>(BootState.IDLE);

  useEffect(() => {
    if (bootState === BootState.PRODUCTION_LOGO) {
      const timer = setTimeout(() => {
        setBootState(BootState.BOOTING);
      }, 2000);
      return () => clearTimeout(timer);
    }
    if (bootState === BootState.BOOTING) {
      const timer = setTimeout(() => {
        setBootState(BootState.WELCOME);
      }, 3000);
      return () => clearTimeout(timer);
    }
    if (bootState === BootState.WELCOME) {
      const timer = setTimeout(() => {
        setBootState(BootState.PORTAL);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [bootState]);

  const handleEnterDesktop = () => {
    setBootState(BootState.DESKTOP);
  };

  const handleShutdown = () => {
    setBootState(BootState.IDLE);
  }

  const handleRestart = () => {
    setBootState(BootState.PRODUCTION_LOGO);
  }

  const renderIdleScreen = () => (
    <div 
        className="w-full h-full bg-cover bg-center relative flex justify-center items-center" 
        style={{ backgroundImage: 'url(https://picsum.photos/seed/systemx80/1920/1080)' }}
    >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <button 
            onClick={() => setBootState(BootState.PRODUCTION_LOGO)}
            className="group relative z-10 flex flex-col items-center justify-center text-white bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl px-12 py-8 transition-all duration-300 transform hover:scale-105 hover:border-cyan-400/50"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative w-24 h-24 mb-4 text-cyan-400 group-hover:text-white transition-colors">
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl group-hover:bg-cyan-400/40 transition-all duration-300"></div>
                <PlayIcon />
            </div>
            <span className="relative text-3xl font-bold tracking-wider group-hover:text-shadow-cyan transition-text-shadow">Play System</span>
        </button>
        <style>{`
          @keyframes tilt {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(0.5deg); }
          }
          .animate-tilt {
            animation: tilt 10s infinite linear;
          }
          .group-hover\\:text-shadow-cyan:hover {
              text-shadow: 0 0 10px rgba(34, 211, 238, 0.7);
          }
          .transition-text-shadow {
              transition: text-shadow 0.3s ease-in-out;
          }
        `}</style>
    </div>
  );

  const renderContent = () => {
    switch (bootState) {
      case BootState.IDLE:
        return renderIdleScreen();
      case BootState.PRODUCTION_LOGO:
        return <ProductionScreen />;
      case BootState.BOOTING:
        return <BootScreen />;
      case BootState.WELCOME:
        return <WelcomeScreen />;
      case BootState.PORTAL:
        return <PortalScreen onEnterDesktop={handleEnterDesktop} />;
      case BootState.DESKTOP:
        return <Desktop onShutdown={handleShutdown} onRestart={handleRestart} />;
      default:
        return renderIdleScreen();
    }
  };

  return (
    <div className="bg-black w-screen h-screen overflow-hidden font-sans">
      {renderContent()}
    </div>
  );
};

export default App;
