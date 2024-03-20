'use client';

import toast from 'react-hot-toast';
import usePost from '@/hooks/use-post';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import BoardRadio from './board-radio';
import BoardInput from './board-input';
import BoardFloors from './board-floors';
import Button from '@/components/ui/button';
import BoardTimeInput from './board-time-input';

import { IPartyBoardPost } from '@/types';
import { postBoardData } from '@/actions/board';

interface IPartyBoardFormProps {}

const PartyBoardForm: React.FunctionComponent<IPartyBoardFormProps> = ({}) => {
  const { control, handleSubmit } = useForm<IPartyBoardPost>();
  const { isLoading, setIsLoading, error, setError } = usePost();
  const router = useRouter();

  if (error) throw new Error(error + '');

  const onSubmit: SubmitHandler<IPartyBoardPost> = async (data) => {
    setIsLoading(true);

    let parsingData = { ...data };
    parsingData = { ...data, parking: Boolean(data.parking) };

    if (data.progress_time === null) {
      parsingData = { ...parsingData, progress_time: 0 };
    }

    parsingData = filterFloor(parsingData);

    const result = await postBoardData({
      url: '/board4/post',
      data: parsingData
    });

    if (result && !result.isError) {
      toast.success(result.message);
      router.push('/party-board');
    } else {
      setError(result?.message!);
      toast.error(result?.message!);
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-x-8'>
      <div className='flex flex-col gap-y-8'>
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
              message: '50글자 이상은 입력이 불가합니다.',
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
          placeholder='사냥터를 입력해 주세요'
          disabled={isLoading}
          rules={{
            required: '사냥터는 필수로 입력해야 합니다.',
            minLength: {
              message: '최소 2글자 이상 입력해야 합니다.',
              value: 2
            },
            maxLength: {
              message: '20글자 이상은 입력이 불가합니다.',
              value: 12
            }
          }}
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

        <BoardRadio
          control={control}
          name='main_job'
          label='주차'
          disabled={isLoading}
          rules={{ required: '주차 여부를 선택해 주세요' }}
          options={[
            { id: '주차 가능', label: '주차 가능', value: 'true' },
            { id: '주차 불가', label: '주차 불가', value: 'false' }
          ]}
        />
      </div>
      <div className='flex flex-col gap-y-8'>
        <BoardInput
          control={control}
          name='recruit_people_count'
          label='모집 인원'
          placeholder='모집 인원 수'
          disabled={isLoading}
          type='number'
          rules={{
            required: '모집 인원 수 필수로 입력해야 합니다.',
            pattern: {
              value: /^[0-9]*$/,
              message: '숫자만 입력 가능합니다.'
            },
            min: {
              message: '최소 2명 이상 모집해야 합니다.',
              value: 2
            },

            max: {
              message: '10명 초과로는 구하실 수 없습니다.',
              value: 6
            }
          }}
          icon={<span className=' items-center text-[15px] font-semibold text-black'>명</span>}
        />
        <BoardFloors control={control} />
      </div>
      <div></div>
      <div className='mt-4'>
        <Button size='wide' color='main' disabled={isLoading}>
          등록하기
        </Button>
      </div>
    </form>
  );
};

function filterFloor(boardData: IPartyBoardPost) {
  if (!boardData.second_floor) {
    boardData.second_floor = '';
  }

  if (!boardData.third_floor) {
    boardData.third_floor = '';
  }

  if (!boardData.fourth_floor) {
    boardData.fourth_floor = '';
  }

  if (!boardData.fifth_floor) {
    boardData.fifth_floor = '';
  }

  if (!boardData.sixth_floor) {
    boardData.sixth_floor = '';
  }

  return boardData;
}

export default PartyBoardForm;
