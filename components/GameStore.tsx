import React, { useState, useEffect } from 'react';
import { WindowType } from '../types';

interface GameItemProps {
  name: string;
  description: string;
  imageUrl: string;
  onInstall: () => void;
  isInstalled: boolean;
  isInstalling: boolean;
}

const GameItem: React.FC<GameItemProps> = ({ name, description, imageUrl, onInstall, isInstalled, isInstalling }) => (
    <div className="flex bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm shadow-lg">
        <img src={imageUrl} alt={`${name} banner`} className="w-48 h-full object-cover hidden sm:block" />
        <div className="p-6 flex flex-col">
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="text-sm text-gray-300 mt-2 flex-grow">{description}</p>
            <button
                onClick={onInstall}
                disabled={isInstalled || isInstalling}
                className="mt-4 self-start px-6 py-2 text-sm font-bold text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600"
                aria-label={`Download ${name}`}
            >
                {isInstalled ? 'Installed' : isInstalling ? 'Installing...' : 'Download'}
            </button>
        </div>
    </div>
);


interface GameStoreProps {
    installedApps: Set<WindowType>;
    onInstall: (app: WindowType) => void;
}


const GameStore: React.FC<GameStoreProps> = ({ installedApps, onInstall }) => {
  const [installingGame, setInstallingGame] = useState<WindowType | null>(null);

  const games = [
    {
      id: 'racing' as WindowType,
      name: 'Racing',
      description: 'Experience adrenaline-pumping races with hyper-realistic graphics and responsive controls. Fully integrated into System X80 for seamless performance.',
      imageUrl: 'https://picsum.photos/seed/racinggame/400/300'
    },
    {
      id: 'bussimulator' as WindowType,
      name: 'Bus Simulator',
      description: 'Immerse yourself in the life of a city bus driver. Featuring a detailed open world, realistic physics, and atmospheric sound design for smooth gameplay.',
      imageUrl: 'https://picsum.photos/seed/bussimgame/400/300'
    }
  ];

  const handleInstall = (gameId: WindowType) => {
    setInstallingGame(gameId);
    onInstall(gameId);
  };

  useEffect(() => {
    if (installingGame && installedApps.has(installingGame)) {
      setInstallingGame(null);
    }
  }, [installedApps, installingGame]);


  return (
    <div>
      <h2 className="text-4xl font-bold text-white mb-2">GameStore</h2>
      <p className="text-gray-300 mb-6">Your portal to a world of high-performance gaming. All games are fully integrated with System X80 to ensure a flawless launch and excellent gameplay.</p>
      {games.length > 0 ? (
        <div className="flex flex-col gap-6">
          {games.map((game) => (
            <GameItem
              key={game.id}
              name={game.name}
              description={game.description}
              imageUrl={game.imageUrl}
              onInstall={() => handleInstall(game.id)}
              isInstalled={installedApps.has(game.id)}
              isInstalling={installingGame === game.id}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-80 bg-black/20 rounded-lg">
          <p className="text-gray-400 text-xl">The game library is currently empty.</p>
        </div>
      )}
    </div>
  );
};

export default GameStore;