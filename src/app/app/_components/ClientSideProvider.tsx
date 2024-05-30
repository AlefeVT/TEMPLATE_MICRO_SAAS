'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void; // Add setSidebarOpen property
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

interface ClientSideProviderProps {
  children: ReactNode;
  session: any;
}

export const ClientSideProvider = ({ children, session }: ClientSideProviderProps) => {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  );
};
