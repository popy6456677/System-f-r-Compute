
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { WindowType, WindowInstance, DesktopItem, DesktopIconItem, DesktopStackItem, AppConfig } from '../types';
import DesktopIcon from './DesktopIcon';
import Window from './Window';
import SStore from './MStore';
import GameStore from './GameStore';
import ShutdownMenu from './ShutdownMenu';
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

const StackPopover: React.FC<{
  stack: DesktopStackItem;
  onClose: () => void;
  onAppClick: (appId: WindowType) => void;
}> = ({ stack, onClose, onAppClick }) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  
  return (
    <div ref={popoverRef} className="fixed bg-gray-800/80 backdrop-blur-lg border border-white/10 rounded-lg shadow-2xl p-4 flex flex-col z-[1001] animate-scaleIn" style={{ top: stack.position.y + 20, left: stack.position.x + 20 }}>
      <h4 className="text-white font-bold mb-3 px-2">Stack</h4>
      <div className="grid grid-cols-3 gap-2">
        {stack.items.map(app => (
          <button key={app.id} onClick={() => onAppClick(app.id)} className="flex flex-col items-center justify-start space-y-1 w-24 h-24 p-2 rounded-lg hover:bg-white/10 transition-colors">
            <div className="text-white w-10 h-10">{app.icon}</div>
            <span className="text-white text-xs text-center truncate w-full">{app.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};


// --- Desktop Component ---

const ALL_INSTALLED_APPS: WindowType[] = [
    'sstore', 'gamestore', 'editor', 'calculator', 'notes', 'paint', 
    'racing', 'bussimulator', 'fileexplorer', 'browser', 'settings'
];

const APP_CONFIGS: AppConfig[] = [
    { id: 'sstore', label: 'MStore', icon: <StoreIcon /> },
    { id: 'gamestore', label: 'GameStore', icon: <GamepadIcon /> },
    { id: 'editor', label: 'Editor', icon: <VideoEditorIcon /> },
    { id: 'calculator', label: 'Calculator', icon: <CalculatorIcon /> },
    { id: 'notes', label: 'Notes', icon: <NotesIcon /> },
    { id: 'paint', label: 'Paint', icon: <PaintIcon /> },
    { id: 'racing', label: 'Racing', icon: <RacingIcon /> },
    { id: 'bussimulator', label: 'Bus Simulator', icon: <BusSimulatorIcon /> },
    { id: 'fileexplorer', label: 'File Explorer', icon: <FolderIcon /> },
    { id: 'browser', label: 'Browser', icon: <BrowserIcon /> },
    { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
];

const checkCollision = (itemA: DesktopItem, itemB: DesktopItem): boolean => {
    const boxA = { x: itemA.position.x, y: itemA.position.y, width: 96, height: 96 };
    const boxB = { x: itemB.position.x, y: itemB.position.y, width: 96, height: 96 };

    return (
        boxA.x < boxB.x + boxB.width &&
        boxA.x + boxA.width > boxB.x &&
        boxA.y < boxB.y + boxB.height &&
        boxA.y + boxA.height > boxB.y
    );
}

interface DesktopProps {
  onShutdown: () => void;
  onRestart: () => void;
}

const Desktop: React.FC<DesktopProps> = ({ onShutdown, onRestart }) => {
  const [windows, setWindows] = useState<WindowInstance[]>([]);
  const [desktopItems, setDesktopItems] = useState<DesktopItem[]>([]);
  const [nextWindowId, setNextWindowId] = useState(0);
  const [maxZIndex, setMaxZIndex] = useState(100);
  const [installedApps, setInstalledApps] = useState<Set<WindowType>>(new Set(ALL_INSTALLED_APPS));
  const [time, setTime] = useState(new Date());
  const [openStackId, setOpenStackId] = useState<string | null>(null);
  const [isShutdownMenuOpen, setShutdownMenuOpen] = useState(false);
  
  const draggedItemIdRef = useRef<WindowType | string | null>(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const hasDraggedRef = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let initialItems: DesktopItem[];
    try {
      const savedData = localStorage.getItem('desktopItems');
      if (savedData) {
        initialItems = JSON.parse(savedData).map((item: any) => {
          if (item.items) { // It's a stack
             return {
                ...item,
                items: item.items.map((app: any) => ({...app, icon: APP_CONFIGS.find(c => c.id === app.id)?.icon }))
             }
          }
          return {...item, icon: APP_CONFIGS.find(c => c.id === item.id)?.icon };
        });

      } else {
        const savedPositionsData = localStorage.getItem('desktopIconPositions');
        if (savedPositionsData) { // Migration from old format
            const savedPositions = JSON.parse(savedPositionsData);
            initialItems = APP_CONFIGS.filter(app => installedApps.has(app.id)).map(app => ({
                ...app,
                position: savedPositions[app.id] || { x: 16, y: 16 },
            }));
            localStorage.removeItem('desktopIconPositions');
        } else {
          throw new Error("No saved positions");
        }
      }
    } catch (e) {
      initialItems = APP_CONFIGS.filter(app => installedApps.has(app.id)).map((app, index) => ({
        ...app,
        position: {
          x: 16 + Math.floor(index / 8) * 112,
          y: 16 + (index % 8) * 104,
        },
      }));
    }
    setDesktopItems(initialItems);
  }, [installedApps]);
  
  useEffect(() => {
    if (desktopItems.length > 0) {
        const itemsToSave = desktopItems.map(item => {
             if ('items' in item) {
                return { ...item, items: item.items.map(({icon, ...rest}) => rest) };
             }
             const { icon, ...rest } = item;
             return rest;
        });
      localStorage.setItem('desktopItems', JSON.stringify(itemsToSave));
    }
  }, [desktopItems]);


  const handleIconMouseDown = useCallback((e: React.MouseEvent, itemId: WindowType | string) => {
    e.preventDefault();
    e.stopPropagation();
    if(openStackId) setOpenStackId(null);

    draggedItemIdRef.current = itemId;
    hasDraggedRef.current = false;
    
    const item = desktopItems.find(i => i.id === itemId);
    if(item) {
        dragOffsetRef.current = {
            x: e.clientX - item.position.x,
            y: e.clientY - item.position.y
        };
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }, [desktopItems, openStackId]);
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    e.preventDefault();
    if (!draggedItemIdRef.current) return;
    
    if(!hasDraggedRef.current) { // Only set hasDragged on first move
        const item = desktopItems.find(i => i.id === draggedItemIdRef.current);
        const initialX = item?.position.x ?? 0;
        const initialY = item?.position.y ?? 0;
        if(Math.abs(e.clientX - (initialX + dragOffsetRef.current.x)) > 5 || Math.abs(e.clientY - (initialY + dragOffsetRef.current.y)) > 5) {
            hasDraggedRef.current = true;
        }
    }
    
    const newX = e.clientX - dragOffsetRef.current.x;
    const newY = e.clientY - dragOffsetRef.current.y;

    setDesktopItems(prev =>
      prev.map(item =>
        item.id === draggedItemIdRef.current
          ? { ...item, position: { x: newX, y: newY } }
          : item
      )
    );
  }, []);

  const openWindow = useCallback((type: WindowType) => {
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


  const handleMouseUp = useCallback((e: MouseEvent) => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    
    const draggedId = draggedItemIdRef.current;
    if (!draggedId) return;

    if (!hasDraggedRef.current) {
        // This was a click, not a drag
        const item = desktopItems.find(i => i.id === draggedId);
        if (item) {
            if ('items' in item) { // is stack
                setOpenStackId(item.id);
            } else { // is icon
                openWindow(item.id as WindowType);
            }
        }
    } else {
        // This was a drag, check for stacking
        const draggedItem = desktopItems.find(i => i.id === draggedId);
        if (!draggedItem || 'items' in draggedItem) { // can't drag stacks into other things for now
            draggedItemIdRef.current = null;
            return;
        }

        const targetItem = desktopItems.find(item => {
            if (item.id === draggedId) return false;
            return checkCollision(draggedItem, item);
        });

        if (targetItem) {
            setDesktopItems(currentItems => {
                const newItems = currentItems.filter(i => i.id !== draggedId);
                const targetIndex = newItems.findIndex(i => i.id === targetItem.id);
                const draggedAppConfig = APP_CONFIGS.find(app => app.id === draggedItem.id);
                if (!draggedAppConfig) return currentItems;


                if (targetIndex > -1 && 'items' in newItems[targetIndex]) { // Target is a stack
                    const targetStack = newItems[targetIndex] as DesktopStackItem;
                    targetStack.items.push(draggedAppConfig);
                    newItems[targetIndex] = targetStack;
                } else if (targetIndex > -1) { // Target is an icon, create new stack
                    const targetIcon = newItems[targetIndex] as DesktopIconItem;
                    const targetAppConfig = APP_CONFIGS.find(app => app.id === targetIcon.id);
                    if (!targetAppConfig) return currentItems;

                    const newStack: DesktopStackItem = {
                        id: `stack-${Date.now()}`,
                        items: [ targetAppConfig, draggedAppConfig ],
                        position: targetIcon.position,
                    };
                    newItems.splice(targetIndex, 1, newStack);
                }
                return newItems;
            });
        }
    }

    draggedItemIdRef.current = null;
  }, [desktopItems, handleMouseMove, openWindow]);

  const closeWindow = useCallback((id: number) => {
    setWindows(prev => prev.filter(win => win.id !== id));
  }, []);
  
  const focusWindow = useCallback((id: number) => {
      setWindows(prev => prev.map(win => win.id === id ? { ...win, zIndex: maxZIndex + 1 } : win));
      setMaxZIndex(prev => prev + 1);
  }, [maxZIndex]);

  const handleInstallApp = useCallback((appId: WindowType) => {
    setTimeout(() => {
        setInstalledApps(prev => {
            const newSet = new Set(prev);
            newSet.add(appId);
            const appConfig = APP_CONFIGS.find(a => a.id === appId);
            if (appConfig && !desktopItems.find(i => i.id === appId)) {
                setDesktopItems(prevItems => [...prevItems, {
                    ...appConfig,
                    position: { x: 16, y: 16 }
                }]);
            }
            return newSet;
        });
    }, 1500); // Simulate download time
  }, [desktopItems]);

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
      const app = APP_CONFIGS.find(a => a.id === type);
      return app ? app.label : 'Application';
  }
  
  const openStackApp = (appId: WindowType) => {
    openWindow(appId);
    setOpenStackId(null);
  };

  return (
    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/seed/systemx80desktop/1920/1080)' }}>
      <main className="h-full w-full relative">
        {/* Desktop Icons */}
        <div className="p-4 h-full w-full">
          {desktopItems.map((item) => (
            <DesktopIcon
              key={item.id}
              item={item}
              onMouseDown={(e) => handleIconMouseDown(e, item.id)}
              isDragging={draggedItemIdRef.current === item.id}
            />
          ))}
        </div>

        {/* Stack Popover */}
        {openStackId && (
            <StackPopover 
                stack={desktopItems.find(i => i.id === openStackId) as DesktopStackItem}
                onClose={() => setOpenStackId(null)}
                onAppClick={openStackApp}
            />
        )}


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
        <div className="flex items-center space-x-2 relative">
            <button 
                onClick={() => setShutdownMenuOpen(prev => !prev)}
                className="w-10 h-10 p-2 text-cyan-400 hover:bg-white/10 rounded-md transition-colors"
                aria-label="Start Menu"
            >
                <SystemLogoIcon />
            </button>
            {isShutdownMenuOpen && (
                <ShutdownMenu 
                    onShutdown={onShutdown} 
                    onRestart={onRestart} 
                    onClose={() => setShutdownMenuOpen(false)} 
                />
            )}
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
    </div>
  );
};

export default Desktop;
