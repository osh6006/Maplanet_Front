'use client';

import usePost from '@/hooks/use-post';
import { IWoodCutterBoardPost } from '@/types';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import BoardMesoInput from '../board-meso-input';
import BoardInput from '../board-input';
import BoardRadio from '../board-radio';
import BoardSelect from '../board-select';
import BoardTimeInput from '../board-time-input';
import Button from '@/components/ui/button';

interface IWoodCutterBoardFormProps {}

const WoodCutterBoardForm: React.FunctionComponent<IWoodCutterBoardFormProps> = (props) => {
  const { control, handleSubmit, watch } = useForm<IWoodCutterBoardPost>();
  const { isLoading, setIsLoading, isError, setIsError } = usePost();
  const router = useRouter();

  const onSubmit: SubmitHandler<IWoodCutterBoardPost> = async (data) => {
    setIsLoading(true);
    try {
      if (data.meso === '협의 가능') {
        const newData = { ...data, meso: null };
        // TODO : fetch New Data
        setIsLoading(false);
      } else {
        // TODO : fetch data
        setIsLoading(false);
      }

      router.back();
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const jobWatch = watch('main_job') || null;

  return (
    <>
      {isError ? (
        <div className='mb-6 flex h-28 w-full items-center justify-center rounded-md border-2 border-red'>
          서버에서 에러가 발생하였습니다! 잠시 후 다시 시도해 주세요
        </div>
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-x-8'>
        <div className='flex flex-col gap-y-8'>
          <BoardMesoInput
            name='meso'
            control={control}
            disabled={isLoading}
            rules={{
              required: '메소는 필수로 입력해야 합니다.',
              pattern: {
                value: /^[0-9]*$|^협의 가능$/,
                message: '숫자만 입력 가능합니다.'
              }
            }}
          />

          <BoardInput
            control={control}
            name='title'
            label='제목'
            disabled={isLoading}
            placeholder='제목을 입력해 주세요'
            rules={{
              required: '제목은 필수로 입력해야 합니다.',
              minLength: {
                message: '최소 5글자 이상 입력해야 합니다.',
                value: 5
              },
              maxLength: {
                message: '30글자 이상은 입력이 불가합니다.',
                value: 30
              }
            }}
          />

          <BoardInput
            control={control}
            name='maple_nickname'
            label='메이플 랜드 닉네임'
            placeholder='메이플 랜드 닉네임을 입력해 주세요'
            disabled={isLoading}
            rules={{
              required: '닉네임은 필수로 입력해야 합니다.',
              minLength: {
                message: '최소 2글자 이상 입력해야 합니다.',
                value: 2
              },
              maxLength: {
                message: '12글자 이상은 입력이 불가합니다.',
                value: 12
              }
            }}
          />

          <BoardInput
            control={control}
            name='hunting_ground'
            label='사냥터'
            disabled={isLoading}
            placeholder='사냥터를 입력해 주세요'
            rules={{
              required: '제목은 필수로 입력해야 합니다.',
              minLength: {
                message: '최소 5글자 이상 입력해야 합니다.',
                value: 5
              },
              maxLength: {
                message: '20글자 이상은 입력이 불가합니다.',
                value: 20
              }
            }}
          />
        </div>
        <div className='flex flex-col gap-y-8'>
          <BoardRadio
            control={control}
            name='main_job'
            label='직업'
            disabled={isLoading}
            rules={{ required: '직업을 선택해 주세요' }}
            options={[
              { id: '전사', label: '전사', value: '전사' },
              { id: '마법사', label: '마법사', value: '마법사' },
              { id: '도적', label: '도적', value: '도적' },
              { id: '궁수', label: '궁수', value: '궁수' }
            ]}
          />

          <BoardSelect
            control={control}
            jobWatch={jobWatch}
            label='서브 직업'
            name='sub_job'
            disabled={isLoading}
            placeholder='서브 직업을 선택해 주세요'
            rules={{ required: '서브 직업을 선택해 주세요' }}
          />

          <BoardTimeInput
            control={control}
            name='progress_time'
            disabled={isLoading}
            rules={{
              required: '시간은 필수로 입력해야 합니다.',
              pattern: {
                value: /^[0-9]*$/,
                message: '숫자만 입력 가능합니다.'
              },
              max: {
                message: '20 시간 이상은 입력이 불가능 합니다.',
                value: 20
              },

              min: {
                message: '최소 1 이상이어야 합니다. ',
                value: 1
              }
            }}
          />

          <BoardInput
            control={control}
            name='level'
            label='레벨'
            placeholder='레벨을 입력해 주세요'
            disabled={isLoading}
            type='number'
            rules={{
              required: '레벨은 필수로 입력해야 합니다.',
              pattern: {
                value: /^[0-9]*$/,
                message: '숫자만 입력 가능합니다.'
              },
              max: {
                message: '200Lv 이상은 입력이 불가능 합니다.',
                value: 200
              },

              min: {
                message: '최소 10Lv 이상이어야 합니다. ',
                value: 10
              }
            }}
            icon={<span className=' items-center text-[15px] font-semibold text-black'>LV</span>}
          />
        </div>

        <div></div>
        <div className='mt-12'>
          <Button size='wide' color='main' disabled={isLoading}>
            등록하기
          </Button>
        </div>
      </form>
    </>
  );
};

export default WoodCutterBoardForm;
