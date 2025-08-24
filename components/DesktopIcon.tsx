
import React from 'react';
import { DesktopItem, WindowType } from '../types';
import { FolderIcon } from './icons';

interface DesktopIconProps {
  item: DesktopItem;
  onMouseDown: (event: React.MouseEvent, id: string | WindowType) => void;
  isDragging: boolean;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ item, onMouseDown, isDragging }) => {
  const isStack = 'items' in item;

  const label = isStack ? `Stack (${item.items.length})` : item.label;
  const icon = isStack ? <FolderIcon /> : item.icon;

  return (
    <div
      className="absolute flex flex-col items-center justify-center w-28 h-26 rounded-lg focus:outline-none transition-transform duration-100 cursor-pointer"
      style={{
        transform: `translate(${item.position.x}px, ${item.position.y}px)`,
        zIndex: isDragging ? 1000 : 1,
        transition: isDragging ? 'none' : 'transform 0.1s',
      }}
      onMouseDown={(e) => onMouseDown(e, item.id)}
    >
      <div className="flex flex-col items-center justify-center space-y-2 w-24 h-24 rounded-lg focus:outline-none focus:bg-white/10 hover:bg-white/10 transition-colors duration-200 relative">
        {isStack && (
          <>
            <div className="absolute w-20 h-20 bg-white/5 rounded-lg transform -rotate-6 top-1 left-2"></div>
            <div className="absolute w-20 h-20 bg-white/10 rounded-lg transform rotate-3 top-2 left-1"></div>
          </>
        )}
        <div className="relative text-white w-12 h-12">
            {icon}
        </div>
        <span className="relative text-white text-sm shadow-black [text-shadow:1px_1px_2px_var(--tw-shadow-color)] truncate w-full px-1 text-center">{label}</span>
      </div>
    </div>
  );
};

export default DesktopIcon;
