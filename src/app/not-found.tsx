'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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
      <div className='flex text-white font-bold text-2xl place-content-between'>
        <Link href='/'>
          <button className='bg-main py-3 px-5 rounded mr-5'>메인</button>
        </Link>
        <button className='bg-zinc-500 py-3 px-5 rounded' onClick={() => router.back()}>이전 페이지</button>
      </div>
    </div>
  );
};

export default NotFound;
