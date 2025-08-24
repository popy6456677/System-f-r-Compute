export enum BootState {
  IDLE,
  PRODUCTION_LOGO,
  BOOTING,
  WELCOME,
  PORTAL,
  DESKTOP,
}

export type WindowType = 'sstore' | 'gamestore' | 'editor' | 'calculator' | 'notes' | 'paint' | 'racing' | 'bussimulator' | 'fileexplorer' | 'browser' | 'settings';

export interface WindowInstance {
    id: number;
    type: WindowType;
    zIndex: number;
    position: { x: number; y: number };
    size: { width: number, height: number };
}

// An app has these core properties.
export interface AppConfig {
    id: WindowType;
    label: string;
    icon: React.ReactNode;
}

// A desktop item can be an icon or a stack.
export interface DesktopIconItem extends AppConfig {
    position: { x: number; y: number };
}

export interface DesktopStackItem {
    id: string; // Unique stack ID
    items: AppConfig[];
    position: { x: number; y: number };
}

export type DesktopItem = DesktopIconItem | DesktopStackItem;
