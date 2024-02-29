'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FunctionComponent<IModalProps> = ({ children, onClose, isOpen }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isOpen) return null;

  return (
    <>
      {isClient ? (
        createPortal(
          <div
            className='fixed inset-0 z-[5000] flex items-center justify-center bg-black/65 px-10'
            onClick={onClose}>
            {children}
          </div>,
          document.getElementById('modal-root') as HTMLElement
        )
      ) : (
        <></>
      )}
    </>
  );

  return;
};

export default Modal;
