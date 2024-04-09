import { Suspense } from 'react';

import Pagination from '../components/ui/pagination';
import HunterCard from '../components/ui/hunter-card';

import { IHunterBoard } from '@/types';

import BoardResult from '../components/ui/board-result';
import { fetchBoardData } from '@/actions/board';

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
    <>
      <BoardResult.Wrapper>
        <BoardResult.List
          list={hunterBoardData || []}
          render={(board) => {
            return (
              <BoardResult.Item key={board.board2_id}>
                <HunterCard
                  {...board}
                  badges={[
                    {
                      name: board.place_theif_nickname,
                      iconSrc: '/svgs/sword.svg',
                      alt: 'sub_job_icon',
                      width: 14,
                      height: 14
                    }
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
              <BoardResult.Item key={board.board2_id}>
                <HunterCard
                  {...board}
                  badges={[
                    {
                      name: board.place_theif_nickname,
                      iconSrc: '/svgs/sword.svg',
                      alt: 'sub_job_icon',
                      width: 14,
                      height: 14
                    }
                  ]}
                />
              </BoardResult.Item>
            );
          }}
        />
      </BoardResult.Wrapper>
      <Pagination totalPost={totalBoardCount || 0} itemsPerPage={5} pagePerItem={12} />
    </>
  );
};

export default HunterBoardPage;
