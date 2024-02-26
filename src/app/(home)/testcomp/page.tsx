'use client';
import clsx from 'clsx';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { IHelperPost, Job } from '@/types';

import Icon from '@/components/ui/icon';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';
import Radio from '@/components/ui/radio';
import Select from '@/components/ui/select';
import Button from '@/components/ui/button';
import FormErrorMessage from '@/components/ui/form-error-message';
import { filterJobList } from '@/util/util';
import PostCard from '@/components/ui/post-card';
import PostBanner from '@/components/ui/post-banner';
import Inner from '@/components/ui/inner';

const TestCompPage: React.FunctionComponent<any> = ({}) => {
  const { control, handleSubmit, watch } = useForm<IHelperPost>();

  const onSubmit: SubmitHandler<IHelperPost> = (data) => {
    console.log(data);
  };

  const jobWatch = watch('main_job') || null;

  return (
    <div className=''>
      <PostBanner title='테스트 배너' imgUrl='' />
      <Inner>
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
                <div className='flex-col'>
                  <div className='flex items-center justify-between space-y-2'>
                    <Label name={name} label='제목' required />
                    <Input
                      name={name}
                      type='text'
                      value={value || ''}
                      invalid={invalid}
                      onChange={onChange}
                      placeholder='(만) 메소'
                      icon={
                        <div className='flex items-center gap-x-1'>
                          <span className=' items-center text-[15px] leading-4 text-black'>
                            (만) 메소
                          </span>
                          <button
                            type='button'
                            onClick={() => handleReset()}
                            className={clsx(value ? 'block' : 'hidden')}>
                            <Icon src='/svgs/x.svg' alt='money' size={15} />
                          </button>
                        </div>
                      }
                    />
                  </div>
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
                  {error ? <FormErrorMessage>{error.message}</FormErrorMessage> : null}
                </div>
              );
            }}
          />

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

          <Controller
            name='hunting_ground'
            control={control}
            rules={{ required: '사냥터를 선택해 주세요' }}
            render={({ field: { value, onChange, name }, fieldState: { error, invalid } }) => {
              return (
                <div className='flex items-center justify-center space-y-2'>
                  <Label name={name} label='제목' required />
                  <Select
                    value={value || ''}
                    invalid={invalid}
                    onChange={onChange}
                    placeHolder='사냥터를 선택하세요'
                    disabled={false}
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
            name='main_job'
            control={control}
            rules={{ required: '직업을 선택해 주세요' }}
            render={({ field: { onChange, name }, fieldState: { error } }) => {
              return (
                <>
                  <Radio label={'전사'} name={name} id='전사' value={'전사'} onChange={onChange} />
                  <Radio
                    label={'마법사'}
                    name={name}
                    id='마법사'
                    onChange={onChange}
                    value={'마법사'}
                  />
                  <Radio label={'도적'} name={name} id='도적' onChange={onChange} value={'도적'} />
                  <Radio label={'궁수'} name={name} id='궁수' onChange={onChange} value={'궁수'} />
                  {error ? <FormErrorMessage>{error.message}</FormErrorMessage> : null}
                </>
              );
            }}
          />

          <Controller
            name='sub_job'
            control={control}
            rules={{ required: '서브 직업을 선택해 주세요' }}
            disabled={!jobWatch ? true : false}
            render={({
              field: { value, onChange, name, disabled },
              fieldState: { error, invalid }
            }) => {
              // 사용자가 체크박스로 1차 직업을 변경하는 경우 자동으로 2차 직업의 첫번째 값으로 변경
              let newValue = value;
              if (!filterJobList(jobWatch as Job).some((el: any) => el.value === value)) {
                newValue = '';
              }
              return (
                <>
                  <div className='flex items-center justify-center space-y-2'>
                    <Label name={name} label='제목' required />
                    <Select
                      value={newValue}
                      invalid={invalid}
                      onChange={onChange}
                      placeHolder='서브 직업을 선택하세요'
                      options={filterJobList(jobWatch as Job)}
                      disabled={disabled}
                      isJob
                    />
                    {error ? <FormErrorMessage>{error.message}</FormErrorMessage> : null}
                  </div>
                  <span className='w-full text-right text-yellow'>
                    *모든 쩔은 2차 전직부터 가능합니다.
                  </span>
                </>
              );
            }}
          />

          <Controller
            name='level'
            control={control}
            rules={{
              required: '레벨은 필수로 입력해야 합니다.',
              pattern: {
                value: /^[0-9]*$/,
                message: '숫자만 입력 가능합니다.'
              },
              max: {
                message: '최소 10Lv 이상 입력해야 합니다.',
                value: 5
              },
              maxLength: {
                message: '200Lv 이상은 입력이 불가능 합니다.',
                value: 30
              }
            }}
            disabled={false}
            render={({
              field: { value, onChange, name, disabled },
              fieldState: { error, invalid }
            }) => {
              return (
                <div className='space-y-2'>
                  <div className='flex'>
                    <Input
                      disabled={disabled}
                      name='title'
                      type='text'
                      value={value || ''}
                      invalid={invalid}
                      onChange={onChange}
                      placeholder='제목을 입력해 주세요'
                      labelRequired
                    />

                    <Button
                      size='xs'
                      color='main'
                      type='button'
                      onClick={() => {
                        // TODO : state로 disabled 조정
                      }}>
                      협의가능
                    </Button>
                  </div>

                  {error ? <FormErrorMessage>{error.message}</FormErrorMessage> : null}
                </div>
              );
            }}
          />

          <Controller
            name='level'
            control={control}
            rules={{
              required: '레벨은 필수로 입력해야 합니다.'
            }}
            render={({ field: { value, onChange, name }, fieldState: { error, invalid } }) => {
              return (
                <div className='space-y-2'>
                  <Input
                    name={name}
                    type='text'
                    value={value || ''}
                    invalid={invalid}
                    onChange={onChange}
                    placeholder='제목을 입력해 주세요'
                    labelRequired
                    icon={
                      <span className=' items-center text-[15px] leading-4 text-black'>LV</span>
                    }
                  />
                  {error ? <FormErrorMessage>{error.message}</FormErrorMessage> : null}
                </div>
              );
            }}
          />

          <Button color='discord' size='xl' type='submit' className='mt-10'>
            test
          </Button>
        </form>

        <PostCard
          type='잠쩔'
          date='2024-04-12'
          title='1시간당 메소 150만에 4시간 해드립니다.'
          meso='100,000,000'
          subjob='스피어 맨'
          map='죽은 나무의 숲 4'
          time='4시간'
          nickName='축지법 아저씨'
          manner={44}
          unManner={2}
          view={20}
          avatarUrl=''
          completed
        />
      </Inner>
    </div>
  );
};

export default TestCompPage;
