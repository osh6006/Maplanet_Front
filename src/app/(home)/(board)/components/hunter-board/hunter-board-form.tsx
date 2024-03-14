'use client';

import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import BoardInput from '../board-input';
import BoardRadio from '../board-radio';
import Button from '@/components/ui/button';
import BoardMesoInput from '../board-meso-input';

import usePost from '@/hooks/use-post';

import { IHunterBoardPost } from '@/types';

interface IHunterBoardFormProps {}

const HunterBoardForm: React.FunctionComponent<IHunterBoardFormProps> = ({}) => {
  const { control, handleSubmit } = useForm<IHunterBoardPost>();
  const { isLoading, setIsLoading, isError, setIsError } = usePost();
  const router = useRouter();

  const onSubmit: SubmitHandler<IHunterBoardPost> = async (data) => {
    setIsLoading(true);
    // try {
    //   if (data.meso === '협의 가능') {
    //     const newData = { ...data, meso: null };
    //     // TODO : fetch New Data
    //     await postHunterBoard(newData);
    //     setIsLoading(false);
    //   } else {
    //     // TODO : fetch data
    //     await postHunterBoard(data);
    //     setIsLoading(false);
    //   }

    //   router.back();
    // } catch (error) {
    //   setIsError(true);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <>
      {isError ? (
        <div className='mb-10 flex h-28 w-full items-center justify-center rounded-md border-2 border-red'>
          서버에서 에러가 발생하였습니다! 잠시 후 다시 시도해 주세요
        </div>
      ) : null}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto grid max-w-[80%] grid-cols-1 gap-x-8 gap-y-8 lg:max-w-[50%]'>
        <BoardMesoInput
          name='meso'
          rules={{
            required: '메소는 필수로 입력해야 합니다.',
            pattern: {
              value: /^[0-9]*$/,
              message: '숫자만 입력 가능합니다.'
            }
          }}
          control={control}
        />

        <BoardInput
          control={control}
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
          disabled={false}
        />

        <BoardRadio
          control={control}
          name='report_kind'
          label='의뢰 종류'
          rules={{ required: '의뢰 종류를 선택해 주세요' }}
          options={[
            { id: '겹사', label: '겹사', value: 'true' },
            { id: '인기도 하락', label: '인기도 하락', value: 'false' }
          ]}
        />
        <BoardInput
          control={control}
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
          disabled={false}
        />

        <BoardInput
          control={control}
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
          disabled={false}
        />

        <Button size='wide' color='main' disabled={false}>
          등록하기
        </Button>
      </form>
    </>
  );
};

export default HunterBoardForm;
