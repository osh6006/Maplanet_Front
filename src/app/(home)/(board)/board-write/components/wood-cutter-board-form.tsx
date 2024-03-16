'use client';

import toast from 'react-hot-toast';
import usePost from '@/hooks/use-post';
import { useRouter } from 'next/navigation';
import { postBoardData } from '@/actions/common';
import { SubmitHandler, useForm } from 'react-hook-form';

import BoardInput from './board-input';
import BoardRadio from './board-radio';
import BoardSelect from './board-select';
import Button from '@/components/ui/button';
import BoardTimeInput from './board-time-input';
import BoardMesoInput from './board-meso-input';

import { IWoodCutterBoardPost } from '@/types';

interface IWoodCutterBoardFormProps {}

const WoodCutterBoardForm: React.FunctionComponent<IWoodCutterBoardFormProps> = (props) => {
  const router = useRouter();
  const { isLoading, setIsLoading, error, setError } = usePost();
  const { control, handleSubmit, watch } = useForm<IWoodCutterBoardPost>();

  const onSubmit: SubmitHandler<IWoodCutterBoardPost> = async (data) => {
    setIsLoading(true);

    let parsingData = { ...data };

    if (data.meso === null) {
      parsingData = { ...parsingData, meso: 0 };
    }

    if (data.progress_time === null) {
      parsingData = { ...parsingData, progress_time: 0 };
    }

    // TODO : fetch New Data
    const result = await postBoardData<IWoodCutterBoardPost>({
      url: '/board3/post',
      data: parsingData
    });

    if (result && !result.isError) {
      toast.success(result.message);
      router.push('/wood-cutter-board');
    } else {
      setError(result?.message!);
      toast.error(result?.message!);
    }

    setIsLoading(false);
  };

  const jobWatch = watch('main_job') || null;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-x-8'>
        <div className='flex flex-col gap-y-8'>
          <BoardMesoInput
            name='meso'
            control={control}
            disabled={isLoading}
            rules={{
              validate: {
                newRequired: (value) => {
                  if (value === '' || value === undefined) {
                    return '메소는 필수로 입력해야 합니다.';
                  }
                }
              },
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
              pattern: {
                value: /^[0-9]*$/,
                message: '숫자만 입력 가능합니다.'
              },
              validate: {
                newRequired: (value) => {
                  if (value === '' || value === undefined) {
                    return '시간은 필수로 입력해야 합니다.';
                  }
                }
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
