'use client';

import { IHunterPost } from '@/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import BoardMesoInput from './board-meso-input';

interface IHunterBoardFormProps {}

const HunterBoardForm: React.FunctionComponent<IHunterBoardFormProps> = ({}) => {
  const { control, handleSubmit, watch } = useForm<IHunterPost>();

  const onSubmit: SubmitHandler<IHunterPost> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-x-8'>
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
        defaultValue={0}
      />
    </form>
  );
};

export default HunterBoardForm;
