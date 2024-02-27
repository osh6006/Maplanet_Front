'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/button';

interface Props {
  props: string;
}

const NotFound: React.FunctionComponent<Props> = (props) => {
  const router = useRouter();

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <Image src='/images/danger.png' alt='Danger' width={250} height={200} />
      <Image src={`/images/404.png`} alt='404' width={390} height={130} className='mb-12 mt-6' />
      <p className='text-4xl font-bold text-white'>찾을 수 없는 페이지 입니다.</p>
      <p className='mb-12 mt-5 text-2xl font-medium text-white'>
        요청하신 페이지 경로를 확인해주세요
      </p>
      <div className='flex place-content-between gap-x-4 text-2xl font-bold text-white'>
        <Button size='md' color='main' onClick={() => router.push('/')}>
          메인
        </Button>
        <Button size='md' color='' className='bg-[#7e7e7e]' onClick={() => router.back()}>
          이전 페이지
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
