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

export interface DesktopAppConfig {
  id: WindowType;
  label: string;
  icon: React.ReactNode;
  position: { x: number; y: number };
}
