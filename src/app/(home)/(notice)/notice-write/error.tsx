'use client'; // Error components must be Client Components

import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useEffect } from 'react';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='flex h-full min-h-[500px] flex-col items-center justify-center gap-y-4'>
      <Icon alt='' width={160} height={150} src='/images/bug_pig.webp' />
      <div className='text-center'>
        <h1 className='mb-4 text-3xl font-bold'>데이터를 불러오는 중 에러가 발생하였습니다!</h1>
        <p className='mb-8 text-lg text-gray-300'>다시 한번 시도해 주세요!</p>
      </div>
      <Button color='main' size='lg' onClick={reset}>
        Retry
      </Button>
    </div>
  );
}
