"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import ConnectionComponent from './ConnectionComponent';

interface ConnectionModalContextType {
  isOpen: boolean;
  close: () => void;
  open: () => void;
}

const ConnectionModalContext = createContext<ConnectionModalContextType | undefined>(undefined);

const ConnectionModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const close = () => {
    setOpen(false);
  };

  const open = () => {
    setOpen(true);
  };

  return (
    <ConnectionModalContext.Provider value={{ isOpen, close, open }}>
      {children}
      {isOpen && (
        <div className='fixed top-0 left-0'>
          <div className="modal__overlay" onClick={close} />
          <div className="modal__container">
            <ConnectionComponent />
          </div>
        </div>
      )}
    </ConnectionModalContext.Provider>
  );
};

export default ConnectionModalProvider;

export const useConnectionModal = (): ConnectionModalContextType => {
  const context = useContext(ConnectionModalContext);
  if (context === undefined) {
    throw new Error('useConnectionModal must be used within a ConnectionModalProvider');
  }
  return context;
};
