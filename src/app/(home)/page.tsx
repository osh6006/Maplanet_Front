'use client';

import FormErrorMessage from '@/components/ui/form-error-message';
import Icon from '@/components/ui/icon';
import Input from '@/components/ui/input';
import { IJamjjulPost } from '@/types';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IJamjjulPost>();

  const onSubmit: SubmitHandler<IJamjjulPost> = (data) => {
    console.log(data);
  };

  return (
    <div className='flex flex-col items-center justify-between '>
      <div>Home Page</div>
      <div>Deploy Test!!</div>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-2 text-white'>
        <Controller
          name='meso'
          control={control}
          rules={{
            required: '메소는 필수로 입력해야 합니다.',
            pattern: {
              value: /^[0-9]*$/,
              message: '숫자만 입력 가능합니다.'
            }
          }}
          render={({ field: { value, onChange }, fieldState: { error, invalid } }) => {
            const handleReset = () => {
              onChange('');
            };
            return (
              <div className='space-y-2'>
                <Input
                  label='meso'
                  name='meso'
                  type='number'
                  value={value}
                  invalid={invalid}
                  onChange={onChange}
                  placeholder='(만) 메소'
                  icon={
                    <button type='button' onClick={() => handleReset()}>
                      <Icon src='/svgs/x.svg' alt='money' />
                    </button>
                  }
                />
                {error ? <FormErrorMessage>{error.message}</FormErrorMessage> : null}
              </div>
            );
          }}
        />

        <Controller
          name='title'
          control={control}
          rules={{
            required: '메소는 필수로 입력해야 합니다.',
            pattern: {
              value: /^[0-9]*$/,
              message: '숫자만 입력 가능합니다.'
            }
          }}
          render={({ field: { value, onChange }, fieldState: { error, invalid } }) => {
            const handleReset = () => {
              onChange('');
            };
            return (
              <div className='space-y-2'>
                <Input
                  label='제목'
                  name='title'
                  type='number'
                  value={value}
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

        <button type='submit' className='mt-10'>
          test
        </button>
      </form>
    </div>
  );
};

export default HomePage;
