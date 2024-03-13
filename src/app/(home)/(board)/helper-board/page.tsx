import { Suspense } from 'react';
import { getHelperBoardData } from '@/actions/helper-board';
import { helperBoardFilters, sortOptions } from '@/data/board';

import Sort from '../components/sort';
import Search from '../components/search';
import Banner from '@/components/ui/banner';
import Loading from '@/components/ui/loading';
import Pagination from '../components/pagination';
import BoardResult from '../components/board-result';
import HelperCard from '../components/helper-board/helper-card';

import { IHelperBoard } from '@/types';

interface IHelperBoardPageProps {}

const HelperBoardPage: React.FunctionComponent<IHelperBoardPageProps> = async ({
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

  const fetchData = await getHelperBoardData(
    searchParams?.page || 1,
    searchParams?.searchType,
    searchParams?.value
  );

  const helperBoardData: IHelperBoard[] = fetchData.board1Data;
  const searchBoardData: IHelperBoard[] = fetchData.search1Data;
  const totalBoardCount = fetchData.totalCount;

  return (
    <main>
      <Banner title='쩔 게시판' imgUrl='/images/banner.png' />
      <Suspense
        fallback={
          <div className='flex h-[500px] items-center justify-center'>
            <Loading size={100} />
          </div>
        }>
        <div className='mx-auto max-w-[500px] sm:max-w-[670px] lg:max-w-[1000px] xl:max-w-[1440px] xl:px-20'>
          <div className='mt-8 flex w-full flex-col justify-between gap-y-4 px-10 sm:flex-row sm:px-0'>
            <Sort options={sortOptions} />
            <Search filters={helperBoardFilters} />
          </div>

          <BoardResult.Wrapper>
            <BoardResult.List
              list={helperBoardData || []}
              render={(board) => {
                return (
                  <BoardResult.Item key={board.board1_id}>
                    <HelperCard
                      {...board}
                      badges={[board.sub_job, board.progress_time + ' 시간']}
                    />
                  </BoardResult.Item>
                );
              }}
            />

            <BoardResult.List
              list={searchBoardData || []}
              render={(board) => {
                return (
                  <BoardResult.Item key={board.board1_id}>
                    <HelperCard {...board} />
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

export default HelperBoardPage;
