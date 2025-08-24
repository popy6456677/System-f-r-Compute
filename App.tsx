
import React, { useState, useEffect } from 'react';
import { BootState } from './types';
import ProductionScreen from './components/ProductionScreen';
import BootScreen from './components/BootScreen';
import WelcomeScreen from './components/WelcomeScreen';
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
        setBootState(BootState.DESKTOP);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [bootState]);

  const renderIdleScreen = () => (
    <div 
        className="w-full h-full bg-cover bg-center relative flex justify-center items-center" 
        style={{ backgroundImage: 'url(https://picsum.photos/seed/systemx80/1920/1080)' }}
    >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <button 
            onClick={() => setBootState(BootState.PRODUCTION_LOGO)}
            className="relative z-10 flex flex-col items-center justify-center text-white bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl px-12 py-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
        >
            <div className="w-24 h-24 mb-4 text-cyan-400">
                <PlayIcon />
            </div>
            <span className="text-3xl font-bold tracking-wider">Play System</span>
        </button>
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
      case BootState.DESKTOP:
        return <Desktop />;
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