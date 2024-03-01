'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import NoticeInput from './notice-input';
import { INoticePost } from '@/types';
import NoticeTextArea from './notice-textarea';
import Button from '@/components/ui/button';

interface INoticeFormProps {}

const NoticeForm: React.FunctionComponent<INoticeFormProps> = (props) => {
  const { control, handleSubmit } = useForm<INoticePost>();

  const onSubmit: SubmitHandler<INoticePost> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mx-auto space-y-4 lg:w-1/2'>
      <NoticeInput name='title' label='제목' control={control} placeholder='제목을 입력해 주세요' />
      <NoticeInput
        name='category'
        label='분류'
        control={control}
        placeholder='분류를 입력해 주세요'
      />
      <NoticeTextArea
        label='내용'
        name='content'
        control={control}
        placeholder='내용을 입력해 주세요'
      />
      <Button size='wide' color='main'>
        등록
      </Button>
    </form>
  );
};

export default NoticeForm;
