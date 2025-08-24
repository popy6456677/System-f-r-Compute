
import React from 'react';

interface DesktopIconProps {
  label: string;
  icon: React.ReactNode;
  onClick: (event: React.MouseEvent) => void;
  index: number;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ label, icon, onClick, index }) => {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center justify-center space-y-2 w-24 h-24 rounded-lg focus:outline-none focus:bg-white/10 hover:bg-white/10 transition-colors duration-200 animate-icon-appear"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="text-white w-12 h-12">
        {icon}
      </div>
      <span className="text-white text-sm shadow-black [text-shadow:1px_1px_2px_var(--tw-shadow-color)]">{label}</span>
    </button>
  );
};

export default DesktopIcon;
