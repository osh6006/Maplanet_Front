import { Suspense } from 'react';
import { sortOptions, woodCutterBoardFilters } from '@/data/board';
import { fetchBoardData } from '@/actions/common';

import Sort from '../components/ui/sort';
import Search from '../components/ui/search';
import Banner from '@/components/ui/banner';
import Loading from '@/components/ui/loading';
import Pagination from '../components/ui/pagination';
import BoardResult from '../components/ui/board-result';
import WoodCutterCard from '../components/ui/wood-cutter-card';

import { IWoodCutterBoard } from '@/types';

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

  const fetchData = await fetchBoardData<{
    board3Data?: IWoodCutterBoard[];
    search3Data?: IWoodCutterBoard[];
    totalCount?: number;
  }>({
    url: '/board3',
    page: searchParams?.page || '1',
    searchType: searchParams?.searchType,
    value: searchParams?.value,
    option: {
      cache: 'no-store'
    }
  });

  const woodCutterBoardData = fetchData?.board3Data || [];
  const searchBoardData = fetchData?.search3Data || [];
  const totalBoardCount = fetchData?.totalCount || 0;

  return (
    <Suspense
      fallback={
        <div className='flex h-[500px] items-center justify-center'>
          <Loading size={100} />
        </div>
      }>
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
    </Suspense>
  );
};

export default WoodCutterBoardPage;
