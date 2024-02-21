'use client';

import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelRequired?: boolean;
  name: string;
  invalid: boolean;
  icon?: React.ReactNode;
}

export default function Input({
  label,
  name,
  type,
  icon,
  invalid,
  labelRequired,
  ...props
}: InputProps) {
  return (
    <div className='flex items-center justify-between '>
      <label
        className={clsx(
          ' mb-1 block font-medium',
          labelRequired ? 'after:ml-1 after:text-warning after:content-["*"]' : ''
        )}
        htmlFor={name}>
        {label}
      </label>
      <div className='relative'>
        <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3'></div>
        <input
          id={name}
          className='h-[30px] w-full appearance-none rounded-md border px-4 py-2 text-sm text-black placeholder-gray-400 shadow-sm focus:border-main focus:outline-none 
              focus:ring-2 focus:ring-main [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
          {...props}
        />
        <div className='absolute bottom-2 end-2 flex items-center gap-x-1 '>{icon}</div>
      </div>
    </div>
  );
}
