import { Suspense } from 'react';

import Banner from '@/components/ui/banner';
import Loading from '@/components/ui/loading';

import { IWoodCutterBoard } from '@/types';
import Sort from '../components/sort';
import Search from '../components/search';
import { sortOptions, woodCutterBoardFilters } from '@/data/board';
import WoodCutterCard from '../components/wood-cutter-board/wood-cutter-card';
import Pagination from '../components/pagination';

interface IWoodCutterBoardPageProps {}

const WoodCutterBoardPage: React.FunctionComponent<IWoodCutterBoardPageProps> = async ({
  searchParams
}: {
  searchParams?: {
    page?: string;
    query?: string;
    value?: string;
    searchType?: string;
  };
}) => {
  // TODO : Fetch Data from server

  // const fetchData = await getHelperBoardData(
  //   searchParams?.page || 1,
  //   searchParams?.searchType,
  //   searchParams?.value
  // );

  // const helperBoardData: IWoodCutterBoard[] = fetchData.board1Data;
  // const searchBoardData: IWoodCutterBoard[] = fetchData.search1Data;
  // const totalBoardCount = fetchData.totalCount;

  return (
    <main>
      <Suspense
        fallback={
          <div className='flex h-[500px] items-center justify-center'>
            <Loading size={100} />
          </div>
        }>
        <Banner title='나무꾼 구하기' imgUrl='/images/banner.png' />
        <div className='mx-auto max-w-[500px] sm:max-w-[670px] lg:max-w-[1000px] xl:max-w-[1440px] xl:px-20'>
          <div className='mt-8 flex w-full flex-col justify-between gap-y-4 px-10 sm:flex-row sm:px-0'>
            <Sort options={sortOptions} />
            <Search filters={woodCutterBoardFilters} />
          </div>

          <ul className='mx-10 mt-4 grid grid-cols-1 place-items-center gap-7 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {[1, 2, 3, 4, 5, 6]?.map((el) => (
              <WoodCutterCard
                key={el}
                level={60}
                board3_id={11}
                user_id={15}
                discord_id={'12312332'}
                meso={800000}
                title={'죽숲 1시간당 50만 메소에 합니다'}
                hunting_ground={'따뜻한 모래밭'}
                sub_job={'위자드(썬,콜)'}
                progress_time={'4 시간'}
                discord_global_name='디스코드 닉네임 테스트'
                discord_image=''
                view_count={49}
                complete={false}
                created_at='2024-02-28T15:46:22.964Z'
                updated_at='2024-03-05T01:30:40.000Z'
                report_count={5}
                manner_count={15}
                badges={['300000', '스피어맨', '4시간', '죽은 나무의 숲', 'Lv. 60']}
              />
            ))}
            {/* {[1, 2, 3, 4, 5, 6]?.map((el) => (
              <WoodCutterCard
                key={el}
                level={60}
                board3_id={11}
                user_id={15}
                discord_id={'12312332'}
                meso={800000}
                title={'잠쩔해드려요'}
                hunting_ground={'따뜻한 모래밭'}
                sub_job={'위자드(썬,콜)'}
                progress_time={'4 시간'}
                discord_global_name='디스코드 닉네임 테스트'
                discord_image=''
                view_count={49}
                complete={false}
                created_at='2024-02-28T15:46:22.964Z'
                updated_at='2024-03-05T01:30:40.000Z'
                report_count={5}
                manner_count={15}
                badges={['300000', '스피어맨', '4시간', '죽은 나무의 숲', 'Lv. 60']}
              />
            ))} */}
          </ul>

          <Pagination totalPost={123} itemsPerPage={5} pagePerItem={12} />
        </div>
      </Suspense>
    </main>
  );
};

export default WoodCutterBoardPage;
