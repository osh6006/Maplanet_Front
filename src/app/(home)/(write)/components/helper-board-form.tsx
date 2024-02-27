'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { IHelperPost } from '@/types';
import BoardMesoInput from './board-meso-input';
import Button from '@/components/ui/button';

interface IHelperBoardFormProps {}

const HelperBoardForm: React.FunctionComponent<IHelperBoardFormProps> = () => {
  const { control, handleSubmit, watch } = useForm<IHelperPost>();

  const onSubmit: SubmitHandler<IHelperPost> = (data) => {
    console.log(data);
  };

  const jobWatch = watch('main_job') || null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-x-4'>
      <div className='flex flex-col gap-y-4'>
        <BoardMesoInput control={control} />
      </div>
      <div className='flex flex-col gap-y-4'>
        <div className=''>
          <Button size='wide' color='main'>
            등록하기
          </Button>
        </div>
      </div>
    </form>
  );
};

export default HelperBoardForm;
