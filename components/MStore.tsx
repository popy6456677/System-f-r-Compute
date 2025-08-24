import React, { useState, useEffect } from 'react';
import { WindowType } from '../types';
import { GamepadIcon, VideoEditorIcon, CalculatorIcon, NotesIcon, PaintIcon, BrowserIcon } from './icons';

// Data for the apps available in the store
const STORE_APPS: { id: WindowType; name: string; description: string; icon: JSX.Element; }[] = [
    { id: 'gamestore', name: 'GameStore', description: 'Your portal to a world of immersive games. Download and play the latest titles.', icon: <GamepadIcon /> },
    { id: 'browser', name: 'Web Browser', description: 'Access YouTube and your other favorite sites on the web. Fast and secure browsing.', icon: <BrowserIcon /> },
    { id: 'editor', name: 'Editor', description: 'A simple and clean text editor for all your writing needs. Supports plain text.', icon: <VideoEditorIcon /> },
    { id: 'calculator', name: 'Calculator', description: 'Perform basic and complex calculations with ease. A handy tool for everyday math.', icon: <CalculatorIcon /> },
    { id: 'notes', name: 'Notes', description: 'Quickly jot down thoughts, ideas, and reminders. Keep your notes organized.', icon: <NotesIcon /> },
    { id: 'paint', name: 'Paint', description: 'Unleash your creativity with this simple drawing and painting application.', icon: <PaintIcon /> },
];

interface AppItemProps {
  app: typeof STORE_APPS[0];
  onInstall: () => void;
  isInstalled: boolean;
  isInstalling: boolean;
}

const AppItem: React.FC<AppItemProps> = ({ app, onInstall, isInstalled, isInstalling }) => (
    <div className="flex flex-col bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm shadow-lg p-6 text-center items-center">
        <div className="w-16 h-16 text-cyan-400 mb-4">{app.icon}</div>
        <h3 className="text-xl font-bold text-white">{app.name}</h3>
        <p className="text-sm text-gray-300 mt-2 flex-grow h-20 overflow-hidden">{app.description}</p>
        <button
            onClick={onInstall}
            disabled={isInstalled || isInstalling}
            className="mt-4 w-full px-6 py-2 text-sm font-bold text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600"
            aria-label={`Download ${app.name}`}
        >
            {isInstalled ? 'Installed' : isInstalling ? 'Installing...' : 'Download'}
        </button>
    </div>
);


interface SStoreProps {
    installedApps: Set<WindowType>;
    onInstall: (app: WindowType) => void;
}

const SStore: React.FC<SStoreProps> = ({ installedApps, onInstall }) => {
    const [installingApps, setInstallingApps] = useState<Set<WindowType>>(new Set());

    const handleInstall = (appId: WindowType) => {
        setInstallingApps(prev => new Set(prev).add(appId));
        onInstall(appId);
    };

    useEffect(() => {
        const newlyInstalled = new Set([...installingApps].filter(app => installedApps.has(app)));
        if (newlyInstalled.size > 0) {
            setInstallingApps(prev => new Set([...prev].filter(app => !newlyInstalled.has(app))));
        }
    }, [installedApps, installingApps]);

    return (
        <div>
            <h2 className="text-4xl font-bold text-white mb-6">SStore</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {STORE_APPS.map((app) => (
                    <AppItem
                        key={app.id}
                        app={app}
                        onInstall={() => handleInstall(app.id)}
                        isInstalled={installedApps.has(app.id)}
                        isInstalling={installingApps.has(app.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SStore;