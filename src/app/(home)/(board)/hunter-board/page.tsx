import { Suspense } from 'react';

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

export const dynamic = 'force-dynamic';

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
    <Suspense fallback={<div>Loading..</div>}>
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
    </Suspense>
  );
};

export default HunterBoardPage;
