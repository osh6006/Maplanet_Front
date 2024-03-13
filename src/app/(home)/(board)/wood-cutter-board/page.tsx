import { Suspense } from 'react';
import { getWoodCutterBoardData } from '@/actions/wood-cutter-board';
import { sortOptions, woodCutterBoardFilters } from '@/data/board';

import Sort from '../components/sort';
import Search from '../components/search';
import Banner from '@/components/ui/banner';
import Loading from '@/components/ui/loading';
import Pagination from '../components/pagination';
import WoodCutterCard from '../components/wood-cutter-board/wood-cutter-card';

import { IWoodCutterBoard } from '@/types';
import BoardResult from '../components/board-result';

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

  const fetchData = await getWoodCutterBoardData(
    searchParams?.page || 1,
    searchParams?.searchType,
    searchParams?.value
  );

  const woodCutterBoardData: IWoodCutterBoard[] = fetchData.board3Data;
  const searchBoardData: IWoodCutterBoard[] = fetchData.search3Data;
  const totalBoardCount = fetchData.totalCount;

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
            {woodCutterBoardData?.map((el) => (
              <WoodCutterCard
                key={el.board3_id}
                {...el}
                badges={[
                  el.sub_job,
                  el.progress_time + ' 시간',
                  el.hunting_ground,
                  'Lv .' + el.level
                ]}
              />
            ))}
            {searchBoardData?.map((el) => (
              <WoodCutterCard
                key={el.board3_id}
                {...el}
                badges={['300000', '스피어맨', '4시간', '죽은 나무의 숲', 'Lv. 60']}
              />
            ))}
          </ul>

          <BoardResult.Wrapper>
            <BoardResult.List
              list={woodCutterBoardData || []}
              render={(board) => {
                return (
                  <BoardResult.Item key={board.board3_id}>
                    <WoodCutterCard
                      {...board}
                      badges={[
                        board.sub_job,
                        board.progress_time + ' 시간',
                        board.hunting_ground,
                        'Lv .' + board.level
                      ]}
                    />
                  </BoardResult.Item>
                );
              }}
            />

            <BoardResult.List
              list={searchBoardData || []}
              render={(board) => {
                return (
                  <BoardResult.Item key={board.board3_id}>
                    <WoodCutterCard
                      {...board}
                      badges={[
                        board.sub_job,
                        board.progress_time + ' 시간',
                        board.hunting_ground,
                        'Lv .' + board.level
                      ]}
                    />
                  </BoardResult.Item>
                );
              }}
            />
          </BoardResult.Wrapper>

          <Pagination totalPost={totalBoardCount} itemsPerPage={5} pagePerItem={12} />
        </div>
      </Suspense>
    </main>
  );
};

export default WoodCutterBoardPage;
