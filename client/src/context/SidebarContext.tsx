import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextType {
  selected: string;
  setSelected: (label: string) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selected, setSelected] = useState<string>('LearnerDashboard');

  return (
    <SidebarContext.Provider value={{ selected, setSelected }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebarContext must be used within a SidebarProvider');
  }
  return context;
};
