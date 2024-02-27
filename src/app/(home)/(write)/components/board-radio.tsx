import { Control, Controller, RegisterOptions } from 'react-hook-form';

import Radio from '@/components/ui/radio';
import FormErrorMessage from '@/components/ui/form-error-message';

import { IHelperPost } from '@/types';
import Label from '@/components/ui/label';

interface IBoardRadioProps {
  control: Control<IHelperPost, any, IHelperPost>;
  name: string;
  label: string;
  rules?:
    | Omit<
        RegisterOptions<IHelperPost, keyof IHelperPost>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
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
  options
}) => {
  return (
    <Controller
      name={name as keyof IHelperPost}
      control={control}
      rules={rules}
      render={({ field: { onChange, name }, fieldState: { error } }) => {
        return (
          <div className='space-y-2'>
            <div className='flex w-full justify-between'>
              <Label name={name} label={label} required className='flex-1' />
              <div className='flex flex-1 items-center '>
                {options.map((el) => (
                  <Radio
                    label={el.label}
                    name={name}
                    id={el.id}
                    value={el.value}
                    onChange={onChange}
                    key={el.value}
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
