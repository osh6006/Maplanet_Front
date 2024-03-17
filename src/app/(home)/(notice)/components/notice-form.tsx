'use client';

import toast from 'react-hot-toast';
import usePost from '@/hooks/use-post';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { postBoardData } from '@/actions/board';

import { INoticePost } from '@/types';
import NoticeInput from './notice-input';
import Button from '@/components/ui/button';
import NoticeTextArea from './notice-textarea';

interface INoticeFormProps {}

const NoticeForm: React.FunctionComponent<INoticeFormProps> = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm<INoticePost>();
  const { isLoading, setIsLoading, error, setError } = usePost();

  if (error) throw new Error(error + '');

  const onSubmit: SubmitHandler<INoticePost> = async (data) => {
    // TODO : fetch New Data
    setIsLoading(true);

    const result = await postBoardData<INoticePost>({
      url: '/notice',
      data: data
    });

    if (result && !result.isError) {
      toast.success(result.message);
      router.push('/notice');
    } else {
      setError(result?.message!);
      toast.error(result?.message!);
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mx-auto space-y-4 lg:w-1/2'>
      <NoticeInput
        name='title'
        label='제목'
        control={control}
        placeholder='제목을 입력해 주세요'
        disabled={isLoading}
        rules={{
          required: '제목을 입력해 주세요',
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
      <NoticeInput
        name='category'
        label='분류'
        control={control}
        disabled={isLoading}
        placeholder='분류를 입력해 주세요'
        rules={{
          required: '분류를 입력해 주세요',
          minLength: {
            message: '최소 5글자 이상 입력해야 합니다.',
            value: 2
          },
          maxLength: {
            message: '10글자 이상은 입력이 불가합니다.',
            value: 30
          }
        }}
      />
      <NoticeTextArea
        label='내용'
        name='content'
        control={control}
        disabled={isLoading}
        placeholder='내용을 입력해 주세요'
        rules={{
          required: '내용을 입력해 주세요'
        }}
      />
      <Button size='wide' color='main' disabled={isLoading}>
        {isLoading ? '로딩중...' : '등록'}
      </Button>
    </form>
  );
};

export default NoticeForm;
