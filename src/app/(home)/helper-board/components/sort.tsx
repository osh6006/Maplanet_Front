import clsx from 'clsx';

import useOutsideClick from '@/hooks/use-outside-click';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface IOption {
  name: string;
  value: string;
  icon?: React.ReactNode;
}

interface IFilterProps {
  options: IOption[];
}

const Sort: React.FunctionComponent<IFilterProps> = ({ options }) => {
  const { isOpen, setIsOpen, ref } = useOutsideClick();

  const [selectedOption, setSelectedOption] = useState<IOption>({
    name: options[0]?.name || '노 필터',
    value: options[0]?.value || '',
    icon: options[0]?.icon || <></>
  });

  const handleOptionClick = (option: IOption) => {
    setSelectedOption(option);

    // TODO : filter URL

    setIsOpen(false);
  };

  return (
    <div
      className='relative inline-block  flex-col items-center gap-x-2 rounded-md bg-lightGray'
      ref={ref}>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          'flex w-full min-w-32 items-center justify-between rounded-md px-4 py-2 font-semibold'
        )}>
        {selectedOption.name}
        <div className={clsx('transition-all', isOpen ? 'rotate-[180deg]' : '')}>
          <Icon src='/svgs/triangle.svg' alt='triangle' size={15} />
        </div>
      </button>

      {isOpen ? (
        <ul className='absolute right-0 mt-2 w-full cursor-pointer rounded-md bg-white text-black '>
          {options?.map((option) => (
            <li
              key={option?.value}
              onClick={() => handleOptionClick(option)}
              className='relative p-2 transition-colors hover:text-main'>
              {option?.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Sort;
