import FormErrorMessage from '@/components/ui/form-error-message';
import Input from '@/components/ui/input';
import { IHelperPost } from '@/types';
import { Control, Controller } from 'react-hook-form';

interface IBoardTitleInputProps {
  control?: Control<IHelperPost, any, IHelperPost>;
}

const BoardTitleInput: React.FunctionComponent<IBoardTitleInputProps> = ({ control }) => {
  return (
    <Controller
      name='title'
      control={control}
      rules={{
        required: '제목은 필수로 입력해야 합니다.',
        pattern: {
          value: /^[0-9]*$/,
          message: '숫자만 입력 가능합니다.'
        },
        minLength: {
          message: '최소 5글자 이상 입력해야 합니다.',
          value: 5
        },
        maxLength: {
          message: '30글자 이상은 입력이 불가합니다.',
          value: 30
        }
      }}
      render={({ field: { value, onChange, name }, fieldState: { error, invalid } }) => {
        return (
          <div className='space-y-2'>
            <Input
              name='title'
              type='text'
              value={value || ''}
              invalid={invalid}
              onChange={onChange}
              placeholder='제목을 입력해 주세요'
              labelRequired
            />
            {error ? <FormErrorMessage>{error.message}</FormErrorMessage> : null}
          </div>
        );
      }}
    />
  );
};

export default BoardTitleInput;
