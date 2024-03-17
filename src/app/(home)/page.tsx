'use client';

import Image from 'next/image';
import Board from './components/board';
import Icon from '@/components/ui/icon';
import GetHomeData from '@/actions/home';
import Inner from '@/components/ui/inner';
import Loading from '@/components/ui/loading';

import { getCookies } from 'cookies-next';

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  const { data, isLoading, error } = GetHomeData();

  console.log('클라이언트 사이드 모든 쿠키2 : ', getCookies());

  if (isLoading)
    return (
      <div className='flex h-[500px] items-center justify-center'>
        <Loading size={100} />
      </div>
    );

  if (error) return <div>에러가 발생했습니다.</div>;

  const category = ['쩔', '겹사', '쩔 매너 유저', '현상 수배'];
  // const bgImage = ['/images/option-bg-1.png', '/images/option-bg-3.png', '/images/option-bg-1.png', '/images/option-bg-3.png'];

  return (
    <Inner>
      <main className='relative flex w-full flex-col items-center justify-between text-white'>
        {/* 로고 배너*/}
        <div className='my-[40px] flex flex-col items-center gap-4'>
          <Icon src='/images/pig.png' alt='logo' size={150} />
          <div>
            <span className='mr-5 tracking-widest text-[#d6d6d6]'>메 이 플 랜 드</span>
            <span className='tracking-widest text-[#d6d6d6]'>커 뮤 니 티</span>
          </div>
          <div className='mb-5 mt-2'>
            <Image src='/svgs/main-logo.svg' alt='logo' height={50} width={350} />
          </div>
        </div>
        {/* 방문자 수 */}
        <div className='absolute right-0 my-[40px] flex flex-col gap-2 text-sm font-light text-[#c3c3c3]'>
          <p>
            전체 방문 유저:{' '}
            <span className='font-normal text-[#fff]'>{data.visitorsData?.total_visitors}</span>
          </p>
          <p>
            오늘 방문 유저:{' '}
            <span className='font-normal text-[#fff]'>{data.visitorsData?.today_visitors}</span>
          </p>
          <p>
            현재 접속 유저:{' '}
            <span className='font-normal text-[#fff]'>{data.visitorsData?.logged_in_user}</span>
          </p>
        </div>

        {/* 메인 컨텐츠 부분 */}
        <div className='grid w-full grid-cols-2 grid-rows-2 gap-10'>
          {category.map((item, index) => {
            return <Board key={index} category={item} />;
          })}
        </div>
      </main>
    </Inner>
  );
};

export default HomePage;
