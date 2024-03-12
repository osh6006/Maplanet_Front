import Button from '@/components/ui/button';
import FormErrorMessage from '@/components/ui/form-error-message';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

interface IBoardTimeInputProps extends UseControllerProps<FieldValues> {
  control: any;
}
const BoardTimeInput: React.FunctionComponent<IBoardTimeInputProps> = ({
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
        const newDisabled = value === '협의 가능' || disabled;

        return (
          <div className='flex-col'>
            <div className='flex justify-between'>
              <Label name={name} label='시간' required className='flex-1' />
              <div className='flex flex-1 items-center gap-x-2'>
                <Input
                  name={name}
                  disabled={newDisabled}
                  type='number'
                  value={value || ''}
                  invalid={invalid}
                  onChange={onChange}
                  placeholder='시간을 입력해 주세요'
                />
                <div className='flex gap-x-2'>
                  <Button
                    size='sm'
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
                <p className='text-right text-yellow'>시간 협의 가능을 선택하셨습니다. </p>
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

export default BoardTimeInput;
