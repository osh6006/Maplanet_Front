import { Suspense } from 'react';
import { fetchBoardData } from '@/actions/board';

import Loading from '@/components/ui/loading';
import Pagination from '../components/ui/pagination';
import BoardResult from '../components/ui/board-result';
import WoodCutterCard from '../components/ui/wood-cutter-card';

import { IWoodCutterBoard } from '@/types';

export const dynamic = 'force-dynamic';

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
    <>
      <BoardResult.Wrapper>
        <BoardResult.List
          list={woodCutterBoardData || []}
          render={(board) => {
            return (
              <BoardResult.Item key={board.board3_id}>
                <WoodCutterCard
                  {...board}
                  badges={[
                    {
                      name: board.sub_job,
                      iconSrc: '/svgs/sword.svg',
                      alt: 'sub_job_icon'
                    },
                    {
                      name:
                        board.progress_time === 0 ? '시간 협의 가능' : board.progress_time + '시간',
                      iconSrc: '/svgs/time.svg',
                      alt: 'time_icon'
                    },
                    {
                      name: board.hunting_ground,
                      iconSrc: '/svgs/map.svg',
                      alt: 'hunting_ground_icon'
                    },
                    {
                      name: 'Lv .' + board.level,
                      iconSrc: '/svgs/LV.svg',
                      alt: 'level_icon'
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
              <BoardResult.Item key={board.board3_id}>
                <WoodCutterCard
                  {...board}
                  badges={[
                    {
                      name: board.sub_job,
                      iconSrc: '/svgs/sword.svg',
                      alt: 'sub_job_icon'
                    },
                    {
                      name:
                        board.progress_time === 0 ? '시간 협의 가능' : board.progress_time + '시간',
                      iconSrc: '/svgs/time.svg',
                      alt: 'time_icon'
                    },
                    {
                      name: board.hunting_ground,
                      iconSrc: '/svgs/map.svg',
                      alt: 'hunting_ground_icon'
                    },
                    {
                      name: 'Lv .' + board.level,
                      iconSrc: '/svgs/LV.svg',
                      alt: 'level_icon'
                    }
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

export default WoodCutterBoardPage;
