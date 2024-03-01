import { Control, Controller, RegisterOptions } from 'react-hook-form';

import Label from '@/components/ui/label';
import Select from '@/components/ui/select';
import FormErrorMessage from '@/components/ui/form-error-message';

import { IHelperPost, Job } from '@/types';

import { filterJobList } from '@/util/util';

interface IBoardSelectProps {
  control: Control<IHelperPost, any, IHelperPost>;
  name: string;
  label: string;
  placeholder: string;
  rules?:
    | Omit<
        RegisterOptions<IHelperPost, keyof IHelperPost>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
  jobWatch: string | null;
}

const BoardSelect: React.FunctionComponent<IBoardSelectProps> = ({
  control,
  label,
  name,
  placeholder,
  rules,
  jobWatch
}) => {
  return (
    <Controller
      name={name as keyof IHelperPost}
      control={control}
      rules={rules}
      disabled={!jobWatch ? true : false}
      render={({ field: { value, onChange, name, disabled }, fieldState: { error, invalid } }) => {
        // 사용자가 체크박스로 1차 직업을 변경하는 경우 자동으로 2차 직업의 첫번째 값으로 변경
        let newValue = value;
        if (!filterJobList(jobWatch as Job).some((el: any) => el.value === value)) {
          newValue = '';
        }
        return (
          <>
            <div className='flex items-center justify-center space-y-2'>
              <Label name={name} label={label} required className='flex-1' />
              <div className='flex-1'>
                <Select
                  value={newValue as string}
                  invalid={invalid}
                  onChange={onChange}
                  placeHolder={placeholder}
                  options={filterJobList(jobWatch as Job)}
                  disabled={disabled}
                  isJob
                />
              </div>
            </div>
            {error ? <FormErrorMessage>{error.message}</FormErrorMessage> : null}
            <span className='w-full text-right text-yellow'>
              *모든 쩔은 2차 전직부터 가능합니다.
            </span>
          </>
        );
      }}
    />
  );
};

export default BoardSelect;
