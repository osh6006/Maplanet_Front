'use client';

import { useState } from 'react';

import useOutsideClick from '@/hooks/use-outside-click';
import clsx from 'clsx';
import Icon from '@/components/ui/icon';

interface IOption {
  value: string;
  name: string;
  imgUrl: string;
}

interface IFilterProps {
  value: string;
  placeHolder: string;
  disabled?: boolean;
  options?: IOption[];
  onChange: (...event: any[]) => void;
}

const Filter: React.FunctionComponent<IFilterProps> = ({
  placeHolder,
  options,
  disabled,
  onChange
}) => {
  const { isOpen, setIsOpen, ref } = useOutsideClick();
  const [selectedOption, setSelectedOption] = useState<IOption>({
    name: '',
    value: '',
    imgUrl: ''
  });

  const handleOptionClick = (option: IOption) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
  };
  return (
    <div
      ref={ref}
      className='relative inline-block w-full flex-col items-center gap-x-2 rounded-md bg-lightGray'>
      <button
        disabled={disabled}
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          'flex w-full items-center justify-between gap-x-5 rounded-md px-4 py-2 font-semibold'
        )}>
        {selectedOption.name ? selectedOption.name : placeHolder}
        <div className={clsx('transition-all', isOpen ? 'rotate-[180deg]' : '')}>
          <Icon src='/svgs/triangle.svg' alt='triangle' size={15} />
        </div>
      </button>

      {isOpen && (
        <ul className='absolute left-0 z-10 mt-2 grid w-full cursor-pointer grid-cols-3 overflow-hidden rounded-md bg-white text-black sm:w-[300px]'>
          {options?.map((option) => (
            <li
              key={option?.value}
              onClick={() => handleOptionClick(option)}
              className='relative whitespace-nowrap px-2 py-3 text-center transition-colors hover:bg-main hover:text-white'>
              <>{option?.name}</>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
