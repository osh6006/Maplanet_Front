'use client';

import clsx from 'clsx';
import { Controller } from 'react-hook-form';

import { FieldValues, UseControllerProps } from 'react-hook-form';

import Icon from '@/components/ui/icon';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';
import Button from '@/components/ui/button';
import FormErrorMessage from '@/components/ui/form-error-message';

interface IBoardMesoInputProps extends UseControllerProps<FieldValues> {
  control: any;
}

const BoardMesoInput: React.FunctionComponent<IBoardMesoInputProps> = ({
  control,
  rules,
  name,
  disabled
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      disabled={disabled}
      render={({ field: { value, name, onChange, disabled }, fieldState: { error, invalid } }) => {
        const handleReset = () => {
          onChange('');
        };

        const newDisabled = value === '협의 가능' || disabled;

        return (
          <div className='flex-col '>
            <div className='flex justify-between gap-y-2'>
              <Label name={name} label='메소' required className='flex-1' />
              <div className='space-y-4'>
                <Input
                  name={name}
                  disabled={newDisabled}
                  type='text'
                  value={value || ''}
                  invalid={invalid}
                  onChange={onChange}
                  placeholder='메소'
                  icon={
                    <div className='flex items-center gap-x-1'>
                      <Icon src='/svgs/money.svg' alt='x' size={20} />
                      <button
                        disabled={newDisabled}
                        type='button'
                        onClick={() => handleReset()}
                        className={clsx(value ? 'block' : 'hidden')}>
                        <Icon src='/svgs/x.svg' alt='x' size={15} />
                      </button>
                    </div>
                  }
                />
                <div className='my-2 flex gap-x-2'>
                  <Button
                    size='xs'
                    color='gray'
                    type='button'
                    onClick={() => {
                      if (!newDisabled) {
                        onChange(Number(value || 0) + 1000000);
                      }
                    }}>
                    +100만
                  </Button>
                  <Button
                    size='xs'
                    color='gray'
                    type='button'
                    onClick={() => {
                      if (!newDisabled) {
                        onChange(Number(value || 0) + 500000);
                      }
                    }}>
                    +50만
                  </Button>
                  <Button
                    size='xs'
                    color='gray'
                    type='button'
                    onClick={() => {
                      if (!newDisabled) {
                        onChange(Number(value || 0) + 100000);
                      }
                    }}>
                    +10만
                  </Button>
                  <Button
                    size='xs'
                    color='gray'
                    type='button'
                    onClick={() => {
                      if (!newDisabled) {
                        onChange(Number(value || 0) + 50000);
                      }
                    }}>
                    +5만
                  </Button>
                  <Button
                    size='xs'
                    color={newDisabled ? 'main' : 'gray'}
                    type='button'
                    onClick={() => {
                      if (newDisabled) {
                        onChange('');
                      } else {
                        onChange('협의 가능');
                      }
                    }}>
                    {newDisabled ? '협의 가능' : '협의 가능'}
                  </Button>
                </div>
              </div>
            </div>
            <div className='mt-2'>
              {newDisabled ? (
                <p className='text-right text-yellow'>협의 가능을 선택하셨습니다. </p>
              ) : null}
            </div>
            <div className='mt-2'>
              {error ? <FormErrorMessage>{error.message}</FormErrorMessage> : null}
            </div>
          </div>
        );
      }}
    />
  );
};

export default BoardMesoInput;
