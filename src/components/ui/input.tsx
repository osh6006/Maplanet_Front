'use client';

import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelRequired?: boolean;
  name: string;
  invalid: boolean;
  icon?: React.ReactNode;
}

export default function Input({ name, type, icon, invalid, labelRequired, ...props }: InputProps) {
  return (
    <div className='relative w-full'>
      <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3'></div>
      <input
        id={name}
        className={clsx(
          `w-full rounded-md border px-4 py-2 text-sm font-semibold text-black placeholder-gray-400 shadow-sm focus:border-main focus:outline-none 
        focus:ring-2 focus:ring-main`
        )}
        {...props}
      />
      <div className='absolute bottom-2 end-2 flex items-center gap-x-1'>{icon}</div>
    </div>
  );
}
