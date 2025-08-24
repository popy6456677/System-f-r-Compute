
import React from 'react';

interface DesktopIconProps {
  label: string;
  icon: React.ReactNode;
  position: { x: number; y: number };
  onMouseDown: (event: React.MouseEvent) => void;
  isDragging: boolean;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ label, icon, position, onMouseDown, isDragging }) => {
  return (
    <div
      className="absolute flex flex-col items-center justify-center space-y-2 w-28 h-26 rounded-lg focus:outline-none transition-transform duration-100"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndex: isDragging ? 1000 : 1,
        transition: isDragging ? 'none' : 'transform 0.1s',
      }}
      onMouseDown={onMouseDown}
    >
        <button className="flex flex-col items-center justify-center space-y-2 w-24 h-24 rounded-lg focus:outline-none focus:bg-white/10 hover:bg-white/10 transition-colors duration-200">
            <div className="text-white w-12 h-12">
                {icon}
            </div>
            <span className="text-white text-sm shadow-black [text-shadow:1px_1px_2px_var(--tw-shadow-color)] truncate w-full px-1">{label}</span>
        </button>
    </div>
  );
};

export default DesktopIcon;