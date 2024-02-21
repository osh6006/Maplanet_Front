'use client';

import useOutsideClick from '@/hooks/use-outside-click';
import clsx from 'clsx';
import * as React from 'react';
import Icon from './icon';

interface IOption {
  value: string;
  name: string;
  imgUrl: string;
}

interface ISelectProps {
  label: string;
  value: string;
  name: string;
  labelRequired?: boolean;
  invalid: boolean;
  onChange: (...event: any[]) => void;
  placeHolder: string;
  options?: IOption[];
}

const Select: React.FunctionComponent<ISelectProps> = ({
  label,
  labelRequired,
  name,
  value,
  invalid,
  placeHolder,
  options,
  onChange
}) => {
  const { isOpen, setIsOpen, ref } = useOutsideClick();
  const [_, setSelectedOption] = React.useState<IOption>();

  const handleOptionClick = (option: IOption) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className='text-lef relative inline-block w-full text-black '>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          'flex h-[30px] w-full items-center justify-between rounded-md bg-white px-4 py-2 text-sm font-semibold focus:border-none focus:outline-none',
          invalid ? 'focus:ring-2 focus:ring-warning' : 'focus:ring-2 focus:ring-main'
        )}>
        {value ? value : placeHolder}
        <Icon src='/svgs/triangle.svg' alt='triangle' />
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2  w-full overflow-hidden rounded-md border bg-transparent'>
          {options?.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className='relative h-[38px] cursor-pointer bg-cover '>
              <p
                className={clsx(
                  'absolute left-2 top-2 z-10 text-sm ',
                  option.imgUrl ? 'text-white' : 'text-black'
                )}>
                {option.name}
              </p>
              <div
                className={clsx(
                  'absolute inset-0 w-full transition-all ',
                  option.imgUrl ? 'blur-sm hover:blur-none' : 'bg-white hover:bg-slate-300 '
                )}
                style={{
                  backgroundImage: `url(${option.imgUrl})`,
                  // other styles
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  width: 'auto',
                  height: 'auto'
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
