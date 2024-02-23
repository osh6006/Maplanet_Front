'use client';

import clsx from 'clsx';
import { useState } from 'react';
import useOutsideClick from '@/hooks/use-outside-click';

import Icon from './icon';
import Badge from './badge';

interface IOption {
  value: string;
  name: string;
  imgUrl: string;
}

interface ISelectProps {
  value: string;
  invalid: boolean;
  onChange: (...event: any[]) => void;
  placeHolder: string;
  options?: IOption[];
  isJob?: boolean;
}

const Select: React.FunctionComponent<ISelectProps> = ({
  value,
  invalid,
  placeHolder,
  options,
  isJob,
  onChange
}) => {
  const { isOpen, setIsOpen, ref } = useOutsideClick();
  const [_, setSelectedOption] = useState<IOption>();

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
        <div className={clsx('transition-all', isOpen ? 'rotate-[180deg]' : '')}>
          <Icon src='/svgs/triangle.svg' alt='triangle' size={15} />
        </div>
      </button>

      {isOpen && (
        <ul className='absolute right-0 mt-2  w-full overflow-hidden rounded-md border bg-transparent'>
          {options?.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className='relative h-[38px] cursor-pointer bg-cover '>
              <p
                className={clsx(
                  'absolute left-2 top-2 z-[20] text-sm ',
                  option.imgUrl ? 'text-white' : 'text-black'
                )}>
                {isJob ? (
                  <div className='flex items-center gap-x-2'>
                    <Badge
                      color={option.name.split(' ')[0] === '2차' ? 'bg-teal-500' : 'bg-violet-500'}>
                      {option.name.split(' ')[0]}
                    </Badge>
                    <p>{option.name.split(' ')[1]}</p>
                  </div>
                ) : (
                  <>{option.name}</>
                )}
              </p>
              <div
                className={clsx(
                  'absolute inset-0 z-[10] w-full transition-all ',
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
