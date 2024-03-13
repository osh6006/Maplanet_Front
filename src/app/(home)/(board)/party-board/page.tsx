import { Suspense } from 'react';

import Banner from '@/components/ui/banner';
import Loading from '@/components/ui/loading';

import { IPartyBoard } from '@/types';
import Sort from '../components/sort';
import Search from '../components/search';
import { partyBoardFilters, sortOptions } from '@/data/board';
import Pagination from '../components/pagination';
import PartyCard from '../components/party-board/party-card';
import { getPartyBoardData } from '@/actions/party-board';
import BoardResult from '../components/board-result';
import { fetchBoardData } from '@/actions/common';

interface IPartyBoardPageProps {}

const PartyBoardPage: React.FunctionComponent<IPartyBoardPageProps> = async ({
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

  const fetchData = await fetchBoardData<{
    board4Data?: IPartyBoard[];
    search4Data?: IPartyBoard[];
    totalCount?: number;
  }>({
    url: '/board4',
    page: searchParams?.page || '1',
    searchType: searchParams?.searchType,
    value: searchParams?.value,
    option: {
      cache: 'no-store'
    }
  });

  const partyBoardData = fetchData?.board4Data || [];
  const searchBoardData = fetchData?.search4Data || [];
  const totalBoardCount = fetchData?.totalCount || 0;

  return (
    <main>
      <Suspense
        fallback={
          <div className='flex h-[500px] items-center justify-center'>
            <Loading size={100} />
          </div>
        }>
        <Banner title='파티 구하기' imgUrl='/images/banner.png' />
        <div className='mx-auto max-w-[500px] sm:max-w-[670px] lg:max-w-[1000px] xl:max-w-[1440px] xl:px-20'>
          <div className='mt-8 flex w-full flex-col justify-between gap-y-4 px-10 sm:flex-row sm:px-0'>
            <Sort options={sortOptions} />
            <Search filters={partyBoardFilters} />
          </div>

          <BoardResult.Wrapper>
            <BoardResult.List
              list={partyBoardData || []}
              render={(board) => {
                return (
                  <BoardResult.Item key={board.board4_id}>
                    <PartyCard
                      {...board}
                      badges={[
                        board.progress_time,
                        board.hunting_ground,
                        `${board.recruit_people_count}명 모집`
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
                  <BoardResult.Item key={board.board4_id}>
                    <PartyCard
                      {...board}
                      badges={[
                        board.progress_time,
                        board.hunting_ground,
                        `${board.recruit_people_count}명 모집`
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

export default PartyBoardPage;
