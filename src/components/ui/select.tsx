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
  placeHolder: string;
  disabled?: boolean;
  options?: IOption[];
  isJob?: boolean;
  onChange: (...event: any[]) => void;
}

const Select: React.FunctionComponent<ISelectProps> = ({
  value,
  invalid,
  placeHolder,
  options,
  isJob,
  disabled,
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
        disabled={disabled}
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          'flex w-full items-center justify-between rounded-md px-4 py-2 text-sm font-semibold focus:border-none focus:outline-none',
          invalid ? 'focus:ring-2 focus:ring-warning' : 'focus:ring-2 focus:ring-main',
          disabled ? 'cursor-not-allowed bg-gray-500 text-gray-400' : 'bg-white'
        )}>
        {value ? value : placeHolder}
        <div className={clsx('transition-all', isOpen ? 'rotate-[180deg]' : '')}>
          <Icon src='/svgs/triangle.svg' alt='triangle' width={15} height={15} />
        </div>
      </button>

      {isOpen && (
        <ul className='absolute right-0 z-30 mt-2 w-full overflow-hidden rounded-md border bg-transparent bg-white'>
          {options?.map((option) => (
            <li
              key={option?.value}
              onClick={() => handleOptionClick(option)}
              className='relative h-[38px] cursor-pointer bg-cover '>
              {option.imgUrl ? (
                <>
                  <div
                    className={clsx(
                      'absolute left-2 top-2 text-sm ',
                      option?.imgUrl ? 'z-[20] text-white' : 'z-[20] text-black'
                    )}></div>
                  <div
                    className={clsx(
                      'absolute inset-0 z-[10] w-full blur-sm transition-all hover:blur-none'
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
                </>
              ) : (
                <>
                  <div className='flex h-full w-full items-center justify-center px-2 transition-colors hover:bg-slate-300'>
                    {isJob ? (
                      <div className='flex w-full items-center gap-x-2 '>
                        <Badge
                          size='select'
                          className={
                            option?.name?.split(' ')[0] === '2차' ? 'bg-green' : 'bg-violet'
                          }>
                          {option?.name?.split(' ')[0] || ''}
                        </Badge>
                        {option?.name?.split(' ')[1] || ''}
                      </div>
                    ) : (
                      <p>{option?.name}</p>
                    )}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
