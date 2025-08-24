
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { WindowType, WindowInstance } from '../types';
import DesktopIcon from './DesktopIcon';
import Window from './Window';
import SStore from './MStore';
import GameStore from './GameStore';
import { StoreIcon, GamepadIcon, VideoEditorIcon, CalculatorIcon, NotesIcon, PaintIcon, SystemLogoIcon, WifiIcon, BluetoothIcon, EraserIcon, BrushIcon, AirplaneIcon, RacingIcon, BusSimulatorIcon, PersonIcon, FolderIcon, BrowserIcon, PlusIcon, SettingsIcon } from './icons';

// --- Application Components ---

// Editor Application
const Editor: React.FC = () => {
  return (
    <div className="w-full h-full bg-gray-900/50 flex flex-col">
      <textarea
        className="flex-grow w-full bg-transparent text-white p-4 resize-none focus:outline-none font-mono"
        defaultValue="Welcome to the Editor. Start typing here."
        aria-label="Text Editor"
      />
    </div>
  );
};

// Calculator Application
const Calculator: React.FC = () => {
    const [display, setDisplay] = useState('0');
    const [isNewEntry, setIsNewEntry] = useState(true);

    const handleInput = (val: string) => {
        if (display.length >= 16) return;
        if (isNewEntry) {
            setDisplay(val);
            setIsNewEntry(false);
        } else {
            setDisplay(display + val);
        }
    };
    
    const handleOperator = (op: string) => {
        if (display.endsWith(' ') || display === '0') return;
        setDisplay(display + ` ${op} `);
        setIsNewEntry(false);
    }
    
    const handleClear = () => {
        setDisplay('0');
        setIsNewEntry(true);
    };

    const handleCalculate = () => {
        try {
            // Basic safety check for eval
            const sanitized = display.replace(/[^-()\d/*+.]/g, '');
            const result = eval(sanitized);
            setDisplay(String(result));
            setIsNewEntry(true);
        } catch (error) {
            setDisplay('Error');
            setIsNewEntry(true);
        }
    }

    const buttons = [ '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+' ];
    const isOperator = (val: string) => ['/', '*', '-', '+'].includes(val);

    return (
        <div className="bg-gray-800 p-4 rounded-b-lg">
            <div className="bg-gray-900 text-white text-3xl text-right p-4 mb-4 rounded break-all">{display}</div>
            <div className="grid grid-cols-4 gap-2">
                <button onClick={handleClear} className="col-span-4 bg-red-500 hover:bg-red-600 text-white p-4 rounded-lg text-xl">C</button>
                {buttons.map(btn => (
                    <button 
                        key={btn}
                        onClick={() => {
                            if (btn === '=') handleCalculate();
                            else if (isOperator(btn)) handleOperator(btn);
                            else handleInput(btn);
                        }}
                        className={`p-4 rounded-lg text-xl ${isOperator(btn) || btn === '=' ? 'bg-cyan-600 hover:bg-cyan-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
};

// Notes Application
const Notes: React.FC = () => {
    return (
      <div className="w-full h-full bg-yellow-100 flex flex-col">
        <textarea
          className="flex-grow w-full bg-transparent text-gray-800 p-4 resize-none focus:outline-none font-sans"
          defaultValue="My awesome notes..."
          aria-label="Notes Editor"
        />
      </div>
    );
};

// Paint Application
const Paint: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState('#ffffff');
    const [brushSize, setBrushSize] = useState(5);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.fillStyle = '#1a1a1a';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
        }
    }, []);

    const startDrawing = (e: React.MouseEvent) => {
        setIsDrawing(true);
        draw(e);
    };

    const stopDrawing = () => {
        setIsDrawing(false);
        const canvas = canvasRef.current;
        if(canvas) {
            const ctx = canvas.getContext('2d');
            if(ctx) ctx.beginPath();
        }
    };

    const draw = (e: React.MouseEvent) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (ctx && canvas) {
            const rect = canvas.getBoundingClientRect();
            ctx.lineWidth = brushSize;
            ctx.lineCap = 'round';
            ctx.strokeStyle = color;
            ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
        }
    };

    return (
        <div className="w-full h-full bg-gray-700 flex flex-col">
            <div className="bg-gray-800 p-2 flex items-center space-x-4">
                <input type="color" value={color} onChange={e => setColor(e.target.value)} className="bg-transparent" />
                <input type="range" min="1" max="50" value={brushSize} onChange={e => setBrushSize(parseInt(e.target.value))} />
            </div>
            <canvas
                ref={canvasRef}
                width={800}
                height={560}
                className="w-full h-full"
                onMouseDown={startDrawing}
                onMouseUp={stopDrawing}
                onMouseMove={draw}
                onMouseLeave={stopDrawing}
            />
        </div>
    );
};

const Racing: React.FC = () => (
    <div className="w-full h-full bg-black text-white flex justify-center items-center">
        <p>Racing Game... (Placeholder)</p>
    </div>
);
const BusSimulator: React.FC = () => (
    <div className="w-full h-full bg-black text-white flex justify-center items-center">
        <p>Bus Simulator... (Placeholder)</p>
    </div>
);
const FileExplorer: React.FC = () => (
    <div className="w-full h-full bg-gray-900/50 text-white p-4">
        <p>File Explorer... (Placeholder)</p>
    </div>
);
const Browser: React.FC = () => (
    <div className="w-full h-full bg-white">
        <iframe src="https://www.google.com/webhp?igu=1" className="w-full h-full border-0" title="Web Browser"></iframe>
    </div>
);
const Settings: React.FC = () => (
    <div className="w-full h-full bg-gray-900/50 text-white p-4">
        <p>Settings... (Placeholder)</p>
    </div>
);


// --- Desktop Component ---

const ALL_APPS: WindowType[] = [
    'sstore', 'gamestore', 'editor', 'calculator', 'notes', 'paint', 
    'racing', 'bussimulator', 'fileexplorer', 'browser', 'settings'
];

const DESKTOP_APPS = [
    { id: 'sstore' as WindowType, label: 'MStore', icon: <StoreIcon /> },
    { id: 'gamestore' as WindowType, label: 'GameStore', icon: <GamepadIcon /> },
    { id: 'editor' as WindowType, label: 'Editor', icon: <VideoEditorIcon /> },
    { id: 'calculator' as WindowType, label: 'Calculator', icon: <CalculatorIcon /> },
    { id: 'notes' as WindowType, label: 'Notes', icon: <NotesIcon /> },
    { id: 'paint' as WindowType, label: 'Paint', icon: <PaintIcon /> },
    { id: 'racing' as WindowType, label: 'Racing', icon: <RacingIcon /> },
    { id: 'bussimulator' as WindowType, label: 'Bus Simulator', icon: <BusSimulatorIcon /> },
    { id: 'fileexplorer' as WindowType, label: 'File Explorer', icon: <FolderIcon /> },
    { id: 'browser' as WindowType, label: 'Browser', icon: <BrowserIcon /> },
    { id: 'settings' as WindowType, label: 'Settings', icon: <SettingsIcon /> },
];

const Desktop: React.FC = () => {
  const [windows, setWindows] = useState<WindowInstance[]>([]);
  const [nextWindowId, setNextWindowId] = useState(0);
  const [maxZIndex, setMaxZIndex] = useState(100);
  const [installedApps, setInstalledApps] = useState<Set<WindowType>>(new Set(ALL_APPS));
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const openWindow = useCallback((type: WindowType, event: React.MouseEvent) => {
    event.stopPropagation();
    const existingWindow = windows.find(win => win.type === type);
    if(existingWindow) {
        focusWindow(existingWindow.id);
        return;
    }

    const newWindow: WindowInstance = {
      id: nextWindowId,
      type: type,
      zIndex: maxZIndex + 1,
      position: { x: 50 + (windows.length % 10) * 20, y: 50 + (windows.length % 10) * 20 },
      size: { width: 800, height: 600 }
    };
    setNextWindowId(prev => prev + 1);
    setMaxZIndex(prev => prev + 1);
    setWindows(prev => [...prev, newWindow]);
  }, [windows, nextWindowId, maxZIndex]);

  const closeWindow = useCallback((id: number) => {
    setWindows(prev => prev.filter(win => win.id !== id));
  }, []);
  
  const focusWindow = useCallback((id: number) => {
      setWindows(prev => prev.map(win => win.id === id ? { ...win, zIndex: maxZIndex + 1 } : win));
      setMaxZIndex(prev => prev + 1);
  }, [maxZIndex]);

  const handleInstallApp = useCallback((app: WindowType) => {
    setTimeout(() => {
        setInstalledApps(prev => new Set(prev).add(app));
    }, 1500); // Simulate download time
  }, []);

  const renderWindowContent = (type: WindowType) => {
    switch (type) {
      case 'sstore': return <SStore installedApps={installedApps} onInstall={handleInstallApp} />;
      case 'gamestore': return <GameStore installedApps={installedApps} onInstall={handleInstallApp} />;
      case 'editor': return <Editor />;
      case 'calculator': return <Calculator />;
      case 'notes': return <Notes />;
      case 'paint': return <Paint />;
      case 'racing': return <Racing />;
      case 'bussimulator': return <BusSimulator />;
      case 'fileexplorer': return <FileExplorer />;
      case 'browser': return <Browser />;
      case 'settings': return <Settings />;
      default: return null;
    }
  };

  const getWindowTitle = (type: WindowType) => {
      const app = DESKTOP_APPS.find(a => a.id === type);
      return app ? app.label : 'Application';
  }

  return (
    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/seed/systemx80desktop/1920/1080)' }}>
      <main className="h-full w-full">
        {/* Desktop Icons */}
        <div className="flex flex-col flex-wrap content-start p-4">
          {DESKTOP_APPS.filter(app => installedApps.has(app.id)).map((app, index) => (
            <DesktopIcon
              key={app.id}
              label={app.label}
              icon={app.icon}
              onClick={(e) => openWindow(app.id, e)}
              index={index}
            />
          ))}
        </div>

        {/* Windows */}
        {windows.map(win => (
          <Window
            key={win.id}
            title={getWindowTitle(win.type)}
            onClose={() => closeWindow(win.id)}
            onFocus={() => focusWindow(win.id)}
            zIndex={win.zIndex}
            initialPosition={win.position}
            initialSize={win.size}
          >
            {renderWindowContent(win.type)}
          </Window>
        ))}
      </main>

      {/* Taskbar */}
      <footer className="absolute bottom-0 left-0 right-0 h-12 bg-gray-900/50 backdrop-blur-lg border-t border-white/10 flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
            <button className="w-10 h-10 p-2 text-cyan-400 hover:bg-white/10 rounded-md">
                <SystemLogoIcon />
            </button>
        </div>
        <div className="flex items-center space-x-4 text-white text-sm">
            <span>{time.toLocaleTimeString()}</span>
            <span>{time.toLocaleDateString()}</span>
             <div className="flex items-center space-x-2">
                <WifiIcon connected={true} />
                <BluetoothIcon />
            </div>
        </div>
      </footer>
       <style>{`
        @keyframes icon-appear {
            from {
                opacity: 0;
                transform: scale(0.8) translateY(10px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
        .animate-icon-appear {
            animation: icon-appear 0.4s ease-out forwards;
            opacity: 0; /* Start hidden */
        }
      `}</style>
    </div>
  );
};

export default Desktop;
