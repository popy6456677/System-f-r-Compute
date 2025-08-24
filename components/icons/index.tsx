
import React from 'react';

export const SystemLogoIcon: React.FC = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const StoreIcon: React.FC = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="storeGradient" x1="32" y1="8" x2="32" y2="56" gradientUnits="userSpaceOnUse">
                <stop stopColor="#06B6D4"/>
                <stop offset="1" stopColor="#3B82F6"/>
            </linearGradient>
        </defs>
        <path d="M12 20H52L48 56H16L12 20Z" fill="url(#storeGradient)"/>
        <path d="M24 28V16C24 11.5817 27.5817 8 32 8C36.4183 8 40 11.5817 40 16V28" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const GamepadIcon: React.FC = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="gamepadGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32 32) rotate(90) scale(32)">
                <stop stopColor="#22D3EE"/>
                <stop offset="1" stopColor="#22D3EE" stopOpacity="0"/>
            </radialGradient>
        </defs>
        <path d="M16 20C8.26801 20 2 26.268 2 34V42C2 49.732 8.26801 56 16 56H48C55.732 56 62 49.732 62 42V34C62 26.268 55.732 20 48 20H16Z" fill="#27272A"/>
        <path d="M14 32H26M20 26V38" stroke="#06B6D4" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="42" cy="30" r="4" fill="#06B6D4"/>
        <circle cx="50" cy="38" r="4" fill="#06B6D4"/>
        <rect x="25" y="12" width="14" height="20" rx="4" fill="#18181B"/>
    </svg>
);

export const VideoEditorIcon: React.FC = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4H44L52 12V60H12V4Z" fill="#F9FAFB"/>
        <path d="M44 4L52 12H44V4Z" fill="#E5E7EB"/>
        <path d="M20 24H44" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"/>
        <path d="M20 34H44" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round"/>
        <path d="M20 44H36" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round"/>
    </svg>
);


export const CalculatorIcon: React.FC = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#374151"/>
        <rect x="8" y="8" width="48" height="16" rx="4" fill="#111827"/>
        <circle cx="18" cy="34" r="5" fill="#4B5563"/>
        <circle cx="32" cy="34" r="5" fill="#4B5563"/>
        <circle cx="46" cy="34" r="5" fill="#4B5563"/>
        <circle cx="18" cy="48" r="5" fill="#4B5563"/>
        <circle cx="32" cy="48" r="5" fill="#4B5563"/>
        <circle cx="46" cy="48" r="5" fill="#06B6D4"/>
    </svg>
);

export const NotesIcon: React.FC = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 4H48V60H8V4Z" fill="#FBBF24"/>
        <path d="M8 4H40" stroke="#F87171" strokeWidth="4" strokeLinecap="round"/>
        <rect x="16" y="12" width="8" height="4" rx="2" fill="#374151"/>
        <path d="M16 24H40" stroke="#4B5563" strokeWidth="3" strokeLinecap="round"/>
        <path d="M16 34H40" stroke="#4B5563" strokeWidth="3" strokeLinecap="round"/>
        <path d="M16 44H32" stroke="#4B5563" strokeWidth="3" strokeLinecap="round"/>
    </svg>
);

export const PaintIcon: React.FC = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 4C14.3269 4 4 14.3269 4 32C4 44.4087 15.6599 56.5502 24 60C36 52 40.2312 48.2435 46 46C56 42 60 22 48 12C42 7 36 4 32 4Z" fill="#6B46C1"/>
        <circle cx="44" cy="20" r="6" fill="#F87171"/>
        <circle cx="28" cy="18" r="5" fill="#34D399"/>
        <circle cx="22" cy="34" r="7" fill="#FBBF24"/>
        <circle cx="38" cy="38" r="8" fill="#3B82F6"/>
    </svg>
);

export const FolderIcon: React.FC = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="folderGradient" x1="32" y1="14" x2="32" y2="52" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60A5FA"/>
                <stop offset="1" stopColor="#3B82F6"/>
            </linearGradient>
        </defs>
        <path d="M4 20C4 16.6863 6.68629 14 10 14H24L30 20H54C57.3137 20 60 22.6863 60 26V48C60 51.3137 57.3137 54 54 54H10C6.68629 54 4 51.3137 4 48V20Z" fill="url(#folderGradient)"/>
    </svg>
);

export const BrowserIcon: React.FC = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="browserGradient" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F43F5E"/>
                <stop offset="0.5" stopColor="#3B82F6"/>
                <stop offset="1" stopColor="#FBBF24"/>
            </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="28" stroke="url(#browserGradient)" strokeWidth="8"/>
        <circle cx="32" cy="32" r="12" fill="#F9FAFB"/>
    </svg>
);

export const RacingIcon: React.FC = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="28" height="28" fill="#F9FAFB"/>
        <rect x="32" y="32" width="28" height="28" fill="#F9FAFB"/>
        <rect x="32" y="4" width="28" height="28" fill="#111827"/>
        <rect x="4" y="32" width="28" height="28" fill="#111827"/>
        <path d="M4 60L60 4" stroke="#EF4444" strokeWidth="6" strokeLinecap="round"/>
    </svg>
);


export const BusSimulatorIcon: React.FC = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="56" height="48" rx="12" fill="#FBBF24"/>
        <rect x="10" y="20" width="44" height="24" rx="4" fill="#111827"/>
        <circle cx="18" cy="52" r="6" fill="#27272A"/>
        <circle cx="46" cy="52" r="6" fill="#27272A"/>
        <path d="M4 28H8" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <path d="M56 28H60" stroke="white" strokeWidth="4" strokeLinecap="round"/>
    </svg>
);

export const WifiIcon: React.FC<{ connected?: boolean }> = ({ connected = false }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      {connected ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0zM21 21l-9-9-9 9" />
      )}
    </svg>
);

export const BluetoothIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 3-3 3m3-6l3 3-3 3m-3.75 3.75h11.25m-11.25-11.25h11.25" />
    </svg>
);

export const EraserIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.357-.466.557-.327l5.603 3.112z" />
    </svg>
);

export const BrushIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 011.622-3.385m5.043.025a15.998 15.998 0 001.622-3.385m3.388 1.62a15.998 15.998 0 00-1.62-3.385m-1.622 3.385a15.998 15.998 0 01-3.388 1.621m-5.043-.025a15.998 15.998 0 01-1.622-3.385m-1.622 3.385a15.998 15.998 0 00-3.388-1.622m7.732 9.732l6.363 6.364a3 3 0 004.243-4.243l-6.364-6.363m-4.243 4.243l-4.243-4.243m0 0a3 3 0 10-4.243 4.243m4.243-4.243l4.243 4.243" />
    </svg>
);

export const AirplaneIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
);

export const PersonIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);

export const PlusIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

export const SettingsIcon: React.FC = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="gearGradient" x1="32" y1="4" x2="32" y2="60" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9CA3AF"/>
                <stop offset="1" stopColor="#4B5563"/>
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <path d="M32 18C28.6863 18 26 20.6863 26 24C26 27.3137 28.6863 30 32 30V40C28.6863 40 26 42.6863 26 46C26 49.3137 28.6863 52 32 52C35.3137 52 38 49.3137 38 46C38 42.6863 35.3137 40 32 40V30C35.3137 30 38 27.3137 38 24C38 20.6863 35.3137 18 32 18Z" fill="url(#gearGradient)"/>
        <path d="M51.5147 22.4853L48 26L42 20L45.5147 16.4853C47.0773 14.9227 49.5227 14.9227 51.0853 16.4853L51.5147 16.9147C53.0773 18.4773 53.0773 20.9227 51.5147 22.4853Z" fill="url(#gearGradient)"/>
        <path d="M12.4853 41.5147L16 38L22 44L18.4853 47.5147C16.9227 49.0773 14.4773 49.0773 12.9147 47.5147L12.4853 47.0853C10.9227 45.5227 10.9227 43.0773 12.4853 41.5147Z" fill="url(#gearGradient)"/>
        <circle cx="32" cy="32" r="8" fill="#06B6D4" filter="url(#glow)"/>
    </svg>
);

export const ResizeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m-5.625 0H19.5v5.625" />
    </svg>
);

export const PlayIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.357-.466.557-.327l5.603 3.112z" />
    </svg>
);

export const PowerIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
    </svg>
);

export const RestartIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-4.991-2.696a8.25 8.25 0 00-11.664 0l-3.181 3.183" />
    </svg>
);
