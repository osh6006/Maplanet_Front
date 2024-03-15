import { Suspense } from 'react';

import BoardResult from '../components/ui/board-result';
import HelperCard from '../components/ui/helper-card';

import { IHelperBoard } from '@/types';
import { fetchBoardData } from '@/actions/common';
import Pagination from '../components/ui/pagination';

export const dynamic = 'force-dynamic';

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

  const fetchData = await fetchBoardData<{
    board1Data?: IHelperBoard[];
    search1Data?: IHelperBoard[];
    totalCount?: number;
  }>({
    url: '/board1',
    page: searchParams?.page || '1',
    searchType: searchParams?.searchType,
    value: searchParams?.value,
    option: {
      cache: 'no-store'
    }
  });

  const helperBoardData = fetchData?.board1Data || [];
  const searchBoardData = fetchData?.search1Data || [];
  const totalBoardCount = fetchData?.totalCount || 0;

  return (
    <Suspense fallback={<div>loading...</div>}>
      <BoardResult.Wrapper>
        <BoardResult.List
          list={helperBoardData || []}
          render={(board) => {
            return (
              <BoardResult.Item key={board.board1_id}>
                <HelperCard
                  {...board}
                  badges={[
                    board.sub_job,
                    board.progress_time === 0 ? '시간 협의 가능' : board.progress_time + '시간'
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
              <BoardResult.Item key={board.board1_id}>
                <HelperCard {...board} />
              </BoardResult.Item>
            );
          }}
        />
      </BoardResult.Wrapper>
      <Pagination totalPost={totalBoardCount || 0} itemsPerPage={5} pagePerItem={12} />
    </Suspense>
  );
};

export default HelperBoardPage;
