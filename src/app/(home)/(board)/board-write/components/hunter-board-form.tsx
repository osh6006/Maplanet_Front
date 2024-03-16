'use client';

import toast from 'react-hot-toast';
import usePost from '@/hooks/use-post';
import { useRouter } from 'next/navigation';
import { postBoardData } from '@/actions/common';
import { SubmitHandler, useForm } from 'react-hook-form';

import BoardInput from './board-input';
import BoardRadio from './board-radio';
import Button from '@/components/ui/button';
import BoardMesoInput from './board-meso-input';

import { IHunterBoardPost } from '@/types';

interface IHunterBoardFormProps {}

const HunterBoardForm: React.FunctionComponent<IHunterBoardFormProps> = ({}) => {
  const router = useRouter();
  const { control, handleSubmit } = useForm<IHunterBoardPost>();
  const { isLoading, setIsLoading, error, setError } = usePost();

  if (error) throw new Error(error + '');

  const onSubmit: SubmitHandler<IHunterBoardPost> = async (data) => {
    setIsLoading(true);

    let parsingData = { ...data };

    if (data.meso === null) {
      parsingData = { ...parsingData, meso: 0 };
    }

    // TODO : fetch New Data
    const result = await postBoardData({
      url: '/board2/post',
      data: parsingData
    });

    if (result && !result.isError) {
      toast.success(result.message);
      router.push('/hunter-board');
    } else {
      setError(result?.message!);
      toast.error(result?.message!);
    }

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='mx-auto grid max-w-[80%] grid-cols-1 gap-x-8 gap-y-8 lg:max-w-[50%]'>
      <BoardMesoInput
        name='meso'
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
        control={control}
      />

      <BoardInput
        control={control}
        disabled={isLoading}
        name='title'
        label='제목'
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

      <BoardRadio
        control={control}
        disabled={isLoading}
        name='report_kind'
        label='의뢰 종류'
        rules={{ required: '의뢰 종류를 선택해 주세요' }}
        options={[
          { id: '겹사', label: '겹사', value: '겹사' },
          { id: '인기도 하락', label: '인기도 하락', value: '인기도 하락' }
        ]}
      />
      <BoardInput
        control={control}
        disabled={isLoading}
        name='request_nickname'
        label='의뢰인 닉네임'
        placeholder='메이플 랜드 닉네임을 입력해 주세요'
        rules={{
          required: '의뢰인 닉네임 필수로 입력해야 합니다.',
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
        disabled={isLoading}
        name='place_theif_nickname'
        label='비매너 유저 닉네임'
        placeholder='메이플 랜드 닉네임 입력해 주세요'
        rules={{
          required: '비매너 유저 닉네임은 필수로 입력해야 합니다.',
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

      <Button size='wide' color='main' disabled={false}>
        {isLoading ? '등록중...' : '등록하기'}
      </Button>
    </form>
  );
};

export default HunterBoardForm;
