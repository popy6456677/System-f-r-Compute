
import React, { useRef, useEffect } from 'react';
import { PowerIcon, RestartIcon } from './icons';

interface ShutdownMenuProps {
    onShutdown: () => void;
    onRestart: () => void;
    onClose: () => void;
}

const ShutdownMenu: React.FC<ShutdownMenuProps> = ({ onShutdown, onRestart, onClose }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div 
            ref={menuRef}
            className="absolute bottom-full mb-2 w-64 bg-gray-800/80 backdrop-blur-lg border border-white/10 rounded-lg shadow-2xl p-2 flex flex-col space-y-1 z-[2000] animate-fadeInUp"
        >
            <button 
                onClick={onShutdown}
                className="flex items-center space-x-3 w-full text-left px-4 py-2 text-white hover:bg-red-500/50 rounded-md transition-colors"
            >
                <PowerIcon />
                <span>Shut Down</span>
            </button>
            <button 
                onClick={onRestart}
                className="flex items-center space-x-3 w-full text-left px-4 py-2 text-white hover:bg-cyan-500/50 rounded-md transition-colors"
            >
                <RestartIcon />
                <span>Restart System</span>
            </button>
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.2s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default ShutdownMenu;
