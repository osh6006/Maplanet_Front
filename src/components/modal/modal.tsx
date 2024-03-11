'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Icon from '../ui/icon';

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
            className='fixed inset-0 z-[5000] flex items-center justify-center  bg-black/65 '
            onClick={onClose}>
            <div
              className='relative mx-10 max-h-[500px] min-w-[360px] max-w-2xl overflow-x-hidden overflow-y-scroll rounded-md bg-tableBackground py-16 sm:max-h-full sm:overflow-hidden sm:px-12'
              onClick={(e) => {
                e.stopPropagation();
              }}>
              <button className='absolute right-5 top-5 flex w-full justify-end' onClick={onClose}>
                <Icon size={25} src='/svgs/x.svg' alt='X' priority />
              </button>
              {children}
            </div>
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
