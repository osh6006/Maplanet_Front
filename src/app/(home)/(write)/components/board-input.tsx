import { Control, Controller, RegisterOptions } from 'react-hook-form';

import Input from '@/components/ui/input';
import Label from '@/components/ui/label';
import FormErrorMessage from '@/components/ui/form-error-message';

import { IHelperPost } from '@/types';

interface IBoardInputProps {
  control: Control<IHelperPost, any, IHelperPost>;
  name: string;
  label: string;
  disabled: boolean;
  icon?: React.ReactNode;
  placeholder: string;
  rules?:
    | Omit<
        RegisterOptions<IHelperPost, keyof IHelperPost>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
}

const BoardTitleInput: React.FunctionComponent<IBoardInputProps> = ({
  control,
  name,
  label,
  placeholder,
  rules,
  disabled,
  icon
}) => {
  return (
    <Controller
      name={name as keyof IHelperPost}
      control={control}
      rules={rules}
      disabled={disabled}
      render={({ field: { value, onChange, name }, fieldState: { error, invalid } }) => {
        return (
          <div className='flex justify-between gap-y-2'>
            <Label name={name} label={label} required className='flex-1' />
            <div className='flex-1 space-y-2'>
              <Input
                name='title'
                type='text'
                value={(value as string) || ''}
                invalid={invalid}
                onChange={onChange}
                placeholder={placeholder}
                labelRequired
                icon={icon}
              />
              {error ? <FormErrorMessage>{error.message}</FormErrorMessage> : null}
            </div>
          </div>
        );
      }}
    />
  );
};

export default BoardTitleInput;
