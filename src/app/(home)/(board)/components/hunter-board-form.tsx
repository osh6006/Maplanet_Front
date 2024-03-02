'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import BoardInput from './board-input';
import BoardMesoInput from './board-meso-input';

import { IHunterPost } from '@/types';
import BoardRadio from './board-radio';
import Button from '@/components/ui/button';

interface IHunterBoardFormProps {}

const HunterBoardForm: React.FunctionComponent<IHunterBoardFormProps> = ({}) => {
  const { control, handleSubmit } = useForm<IHunterPost>();

  const onSubmit: SubmitHandler<IHunterPost> = (data) => {
    console.log(data);
  };

  return (
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
  );
};

export default HunterBoardForm;
