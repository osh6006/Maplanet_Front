import { Suspense } from 'react';
import { getHunterBoardData } from '@/actions/hunter-board';

import Sort from '../components/sort';
import Search from '../components/search';
import Banner from '@/components/ui/banner';
import Loading from '@/components/ui/loading';
import Pagination from '../components/pagination';
import HunterCard from '../components/hunter-board/hunter-card';

import { IHunterBoard } from '@/types';

import { hunterBoardFilters, sortOptions } from '@/data/board';
import BoardResult from '../components/board-result';
import { fetchBoardData } from '@/actions/common';

interface IHelperBoardPageProps {}

const HunterBoardPage: React.FunctionComponent<IHelperBoardPageProps> = async ({
  searchParams
}: {
  searchParams?: {
    page?: string;
    query?: string;
    value?: string;
    searchType?: string;
  };
}) => {
  // TODO : fetch data using searchParams

  const fetchData = await fetchBoardData<{
    board2Data?: IHunterBoard[];
    search2Data?: IHunterBoard[];
    totalCount?: number;
  }>({
    url: '/board2',
    page: searchParams?.page || '1',
    searchType: searchParams?.searchType,
    value: searchParams?.value,
    option: {
      cache: 'no-store'
    }
  });

  const hunterBoardData = fetchData?.board2Data || [];
  const searchBoardData = fetchData?.search2Data || [];
  const totalBoardCount = fetchData?.totalCount || 0;

  return (
    <main>
      <Banner title='겹사 의뢰' imgUrl='/images/banner.png' />
      <Suspense
        fallback={
          <div className='flex h-[500px] items-center justify-center'>
            <Loading size={100} />
          </div>
        }>
        <div className='mx-auto max-w-[500px] sm:max-w-[670px] lg:max-w-[1000px] xl:max-w-[1440px] xl:px-20'>
          <div className='mt-8 flex w-full flex-col justify-between gap-y-4 px-10 sm:flex-row sm:px-0'>
            <Sort options={sortOptions} />
            <Search filters={hunterBoardFilters} />
          </div>

          <BoardResult.Wrapper>
            <BoardResult.List
              list={hunterBoardData || []}
              render={(board) => {
                return (
                  <BoardResult.Item key={board.board2_id}>
                    <HunterCard {...board} badges={[board.place_theif_nickname]} />
                  </BoardResult.Item>
                );
              }}
            />

            <BoardResult.List
              list={searchBoardData || []}
              render={(board) => {
                return (
                  <BoardResult.Item key={board.board2_id}>
                    <HunterCard {...board} badges={[board.place_theif_nickname]} />
                  </BoardResult.Item>
                );
              }}
            />
          </BoardResult.Wrapper>

          <Pagination totalPost={totalBoardCount || 0} itemsPerPage={5} pagePerItem={12} />
        </div>
      </Suspense>
    </main>
  );
};

export default HunterBoardPage;
