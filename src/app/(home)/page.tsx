'use client';

import Image from 'next/image';
import Board from './components/board';
import Inner from '@/components/ui/inner';
import Loading from '@/components/ui/loading';

import GetHomeData from '@/actions/home';

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  const { data, isLoading, error } = GetHomeData() as {
    data: {
      visitorsData: {
        total_visitors: number;
        today_visitors: number;
        logged_in_user: number;
      };
    };
    isLoading: boolean;
    error: any;
  };

  if (isLoading)
    return (
      <div className='flex h-[500px] items-center justify-center'>
        <Loading size={100} />
      </div>
    );

  if (error) return <div>에러가 발생했습니다</div>;

  const category = ['심쩔', '겹사', '나무꾼', '파티 모집'];
  return (
    <Inner>
      <main className='relative flex w-full flex-col items-center justify-between text-white'>
        {/* 로고 배너*/}
        <div className='my-10 flex w-full flex-col justify-between  sm:flex-row'>
          <div className='flex flex-1 flex-col items-center gap-4'>
            <div className='mb-5 mt-2'>
              <Image src='/svgs/main-logo.svg' alt='logo' height={50} width={350} />
            </div>
          </div>
          {/* 방문자 수 */}
          <div className='right-0 mt-2 flex flex-row flex-wrap items-center justify-center  gap-2 gap-x-2 text-sm font-light text-[#c3c3c3] sm:flex-col md:absolute'>
            <div className='flex flex-col items-center gap-2 sm:flex-row'>
              <p>전체 방문 유저</p>
              <strong className='font-normal text-[#fff]'>
                {data.visitorsData.total_visitors}
              </strong>
            </div>
            <div className='flex flex-col items-center gap-2 sm:flex-row'>
              <p>오늘 방문 유저</p>
              <strong className='font-normal text-[#fff]'>
                {data.visitorsData.today_visitors}
              </strong>
            </div>
            <div className='flex flex-col items-center gap-2 sm:flex-row'>
              <p>현재 접속 유저</p>
              <strong className='font-normal text-[#fff]'>
                {data.visitorsData.logged_in_user}
              </strong>
            </div>
          </div>
        </div>

        {/* 메인 컨텐츠 부분 */}
        <div className='grid w-full grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-2 sm:gap-10'>
          {category.map((category, index) => {
            return <Board key={index} category={category} />;
          })}
        </div>
      </main>
    </Inner>
  );
};

export default HomePage;
