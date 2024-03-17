import { Suspense } from 'react';
import { fetchBoardData } from '@/actions/board';

import Loading from '@/components/ui/loading';
import Pagination from '../components/ui/pagination';
import BoardResult from '../components/ui/board-result';
import PartyCard from '../components/ui/party-card';

import { IPartyBoard } from '@/types';

export const dynamic = 'force-dynamic';

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
    <>
      <BoardResult.Wrapper>
        <BoardResult.List
          list={partyBoardData || []}
          render={(board) => {
            return (
              <BoardResult.Item key={board.board4_id}>
                <PartyCard
                  {...board}
                  badges={[
                    board.progress_time === 0 ? '시간 협의 가능' : board.progress_time + ' 시간',
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
                    board.progress_time === 0 ? '시간 협의 가능' : board.progress_time + ' 시간',
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
    </>
  );
};

export default PartyBoardPage;
