'use client';

import { InputHTMLAttributes } from 'react';
import Icon from './icon';

interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  invalid?: boolean;
  icon?: React.ReactNode;
  onChange: (...event: any[]) => void;
}

const Radio: React.FunctionComponent<IRadioProps> = ({ label, name, icon, onChange, ...props }) => {
  return (
    <div className='flex items-center gap-x-2'>
      <input
        {...props}
        type='radio'
        value={props.value}
        name={name}
        aria-label={label}
        className='peer hidden'
        onChange={() => onChange(props?.value)}
      />
      {icon}
      <label htmlFor={props.id} className='hidden flex-1 peer-checked:flex '>
        <div className='h-[18px] w-[18px]'>
          <Icon src='/svgs/check-true.svg' alt='chektrue' size={18} />
        </div>
      </label>
      <label htmlFor={props.id} className='flex flex-1 peer-checked:hidden'>
        <div className='h-[18px] w-[18px]'>
          <Icon src='/svgs/check-false.svg' alt='chektrue' size={18} />
        </div>
      </label>
      <label htmlFor={props.id} className='flex w-full gap-x-2 peer-checked:text-main'>
        {label}
      </label>
    </div>
  );
};

export default Radio;
