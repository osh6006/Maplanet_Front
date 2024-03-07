import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
  UseControllerProps
} from 'react-hook-form';

import Radio from '@/components/ui/radio';
import FormErrorMessage from '@/components/ui/form-error-message';

import { IHelperBoardPost } from '@/types';
import Label from '@/components/ui/label';

interface IBoardRadioProps extends UseControllerProps<FieldValues> {
  control: any;
  label: string;
  options: {
    id: string;
    label: string;
    value: string;
  }[];
}

const BoardRadio: React.FunctionComponent<IBoardRadioProps> = ({
  control,
  name,
  rules,
  label,
  options,
  disabled
}) => {
  return (
    <Controller
      name={name as keyof IHelperBoardPost}
      control={control}
      rules={rules}
      disabled={disabled}
      render={({ field: { onChange, name }, fieldState: { error } }) => {
        return (
          <div className='space-y-2'>
            <div className='flex w-full justify-between'>
              <Label name={name} label={label} required className='flex-1' />
              <div className='flex flex-1 items-center gap-x-4'>
                {options.map((el) => (
                  <Radio
                    label={el.label}
                    name={name}
                    id={el.id}
                    value={el.value}
                    onChange={onChange}
                    key={el.value}
                    disabled={disabled}
                  />
                ))}
              </div>
            </div>
            {error ? <FormErrorMessage>{error.message}</FormErrorMessage> : null}
          </div>
        );
      }}
    />
  );
};

export default BoardRadio;
