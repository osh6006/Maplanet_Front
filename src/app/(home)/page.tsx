'use client';

import FormErrorMessage from '@/components/ui/form-error-message';
import Icon from '@/components/ui/icon';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';
import Radio from '@/components/ui/radio';
import Select from '@/components/ui/select';
import { IJamjjulPost } from '@/types';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  const { control, handleSubmit } = useForm<IJamjjulPost>();

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
          render={({ field: { value, name, onChange }, fieldState: { error, invalid } }) => {
            const handleReset = () => {
              onChange('');
            };
            return (
              <div className='flex items-center justify-between space-y-2'>
                <Label name={name} label='제목' required />
                <Input
                  name={name}
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
          render={({ field: { value, onChange, name }, fieldState: { error, invalid } }) => {
            return (
              <div className='space-y-2'>
                <Input
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

        <Controller
          name='hunting_ground'
          control={control}
          rules={{ required: '사냥터를 선택해 주세요' }}
          render={({ field: { value, onChange, name }, fieldState: { error, invalid } }) => {
            return (
              <div className='flex items-center justify-center space-y-2'>
                <Label name={name} label='제목' required />
                <Select
                  label='제목'
                  value={value}
                  name='hunting_ground'
                  invalid={invalid}
                  onChange={onChange}
                  placeHolder='사냥터를 선택하세요'
                  labelRequired
                  options={[
                    {
                      name: '죽은 나무의 숲',
                      value: '죽은 나무의 숲',
                      imgUrl: '/images/option-bg-1.png'
                    },
                    {
                      name: '따듯한 모래밭',
                      value: '따듯한 모래밭',
                      imgUrl: '/images/option-bg-2.png'
                    },
                    {
                      name: '남쪽 던전 숲1',
                      value: '남쪽 던전 숲1',
                      imgUrl: '/images/option-bg-3.png'
                    },
                    {
                      name: '남쪽 던전 숲2',
                      value: '남쪽 던전 숲2',
                      imgUrl: '/images/option-bg-4.png'
                    }
                  ]}
                />
                {error ? <FormErrorMessage>{error.message}</FormErrorMessage> : null}
              </div>
            );
          }}
        />

        <Controller
          name='job'
          control={control}
          rules={{ required: '직업을 선택해 주세요' }}
          render={({ field: { onChange, name }, fieldState: { error } }) => {
            return (
              <>
                <Radio label={'전사'} name={name} id='전사' onChange={onChange} value={'전사'} />
                <Radio
                  label={'마법사'}
                  name={name}
                  id='마법사'
                  onChange={onChange}
                  value={'마법사'}
                />
                <Radio label={'궁수'} name={name} id='궁수' onChange={onChange} value={'궁수'} />
                <Radio label={'도적'} name={name} id='도적' onChange={onChange} value={'도적'} />
                {error ? <FormErrorMessage>{error.message}</FormErrorMessage> : null}
              </>
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
