// components/Popup/Popup.tsx
import React, { Fragment, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
  fullscreen?: boolean;
  hideHeader?: boolean;
}

export const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = '',
  fullscreen = false,
  hideHeader = false,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className={`fixed inset-0 ${fullscreen ? '' : 'overflow-y-auto'}`}>
          <div className={`flex ${fullscreen ? 'min-h-full' : 'min-h-full items-center justify-center'} ${fullscreen ? 'p-0' : 'p-4'} text-center`}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel 
                className={`w-full ${fullscreen ? 'h-full max-w-full m-0 rounded-none' : 'max-w-5xl'} transform overflow-hidden bg-white p-0 text-left align-middle shadow-xl transition-all ${className}`}
              >
                {!hideHeader && (
                  <div className="flex items-center justify-between px-4 py-2 border-b-[2px] border-e6">
                    <Dialog.Title 
                      as="h3" 
                      className="text-lg font-sourceSerif font-bold text-textcolor1"
                    >
                      {title}
                    </Dialog.Title>
                    <button
                      type="button"
                      className="rounded-full p-1 hover:bg-gray-100 transition-all duration-200"
                      onClick={onClose}
                    >
                      <XMarkIcon strokeWidth={2} className="h-5 w-5 text-textcolor1" />
                    </button>
                  </div>
                )}
                <div className={`${hideHeader ? 'h-[100vh]' : fullscreen ? 'h-[calc(100vh-60px)]' : 'max-h-[70vh]'} ${fullscreen && !hideHeader ? '' : 'overflow-y-auto'}`}>
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};