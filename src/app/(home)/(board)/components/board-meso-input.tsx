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
  defaultValue,
  disabled
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      disabled={disabled}
      render={({ field: { value, name, onChange }, fieldState: { error, invalid } }) => {
        const handleReset = () => {
          onChange('');
        };

        return (
          <div className='flex-col '>
            <div className='flex justify-between gap-y-2'>
              <Label name={name} label='메소' required className='flex-1' />
              <div className='space-y-4'>
                <Input
                  name={name}
                  type='text'
                  value={value || ''}
                  invalid={invalid}
                  onChange={onChange}
                  placeholder='(만) 메소'
                  icon={
                    <div className='flex items-center gap-x-1'>
                      <span className=' items-center text-[15px] text-black'>(만) 메소</span>
                      <button
                        type='button'
                        onClick={() => handleReset()}
                        className={clsx(value ? 'block' : 'hidden')}>
                        <Icon src='/svgs/x.svg' alt='money' size={15} />
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
                      onChange(Number(value || 0) + 100);
                    }}>
                    +100만
                  </Button>
                  <Button
                    size='xs'
                    color='gray'
                    type='button'
                    onClick={() => {
                      onChange(Number(value || 0) + 50);
                    }}>
                    +50만
                  </Button>
                  <Button
                    size='xs'
                    color='gray'
                    type='button'
                    onClick={() => {
                      onChange(Number(value || 0) + 10);
                    }}>
                    +10만
                  </Button>
                  <Button
                    size='xs'
                    color='gray'
                    type='button'
                    onClick={() => {
                      onChange(Number(value || 0) + 5);
                    }}>
                    +5만
                  </Button>
                  <Button
                    size='xs'
                    color='gray'
                    type='button'
                    onClick={() => {
                      // TODO : state를 통해 disabled
                    }}>
                    협의 가능
                  </Button>
                </div>
              </div>
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
