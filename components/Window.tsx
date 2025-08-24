import React, { useState, useRef, useEffect } from 'react';
import { ResizeIcon } from './icons';

interface WindowProps {
  title: string;
  onClose: () => void;
  onFocus: () => void;
  children: React.ReactNode;
  zIndex: number;
  initialPosition: { x: number; y: number };
  initialSize: { width: number; height: number };
}

const Window: React.FC<WindowProps> = ({ title, onClose, onFocus, children, zIndex, initialPosition, initialSize }) => {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleDragMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('.resize-handle')) return;
    onFocus();
    setIsDragging(true);
    const rect = windowRef.current?.getBoundingClientRect();
    if (rect) {
      dragOffset.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };
  
  const handleResizeMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onFocus();
    setIsResizing(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault();
        setPosition({
          x: e.clientX - dragOffset.current.x,
          y: e.clientY - dragOffset.current.y,
        });
      }
      if (isResizing && windowRef.current) {
        e.preventDefault();
        const rect = windowRef.current.getBoundingClientRect();
        setSize({
          width: Math.max(350, e.clientX - rect.left),
          height: Math.max(250, e.clientY - rect.top),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing]);

  return (
    <div
      ref={windowRef}
      className="fixed bg-gray-800/70 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-scaleIn"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        zIndex: zIndex,
        cursor: isDragging ? 'grabbing' : 'default',
      }}
      onMouseDown={onFocus}
    >
      {/* Title Bar */}
      <div
        className="flex items-center justify-between p-2 bg-gray-900/50 border-b border-white/10 flex-shrink-0"
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        onMouseDown={handleDragMouseDown}
      >
        <span className="font-bold text-white pl-2 select-none">{title}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="w-8 h-8 flex justify-center items-center rounded-full bg-red-500 hover:bg-red-600 text-white font-bold transition-colors"
          aria-label="Close window"
        >
          &times;
        </button>
      </div>

      {/* Content */}
      <div className="flex-grow overflow-hidden">
        {children}
      </div>
      
      {/* Resize Handle */}
      <div
        className="resize-handle absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize text-white/40"
        onMouseDown={handleResizeMouseDown}
      >
        <ResizeIcon />
      </div>

      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scaleIn {
          animation: scaleIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Window;