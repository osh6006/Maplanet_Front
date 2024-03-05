import { hunterBoardFilters, sortOptions } from '@/data/board';

import Sort from '../components/sort';
import Search from '../components/search';

import Pagination from '../components/pagination';
import PostCard from '@/app/(home)/(board)/components/post-card';
import Banner from '@/components/ui/banner';
import { Suspense } from 'react';
import { getHunterBoardData } from '@/actions/hunter-board';
import { IHunterBoard } from '@/types';
import { filterImageUrl } from '@/util/util';

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

  const fetchData = await getHunterBoardData(
    searchParams?.page || '1',
    searchParams?.searchType,
    searchParams?.value
  );

  const hunterBoardData: IHunterBoard[] = fetchData.board2Data;
  const searchBoardData: IHunterBoard[] = fetchData.search2Data;
  const totalBoardCount = fetchData.getBoard2Count;

  return (
    <main>
      <Banner title='겹사 의뢰' imgUrl='/images/banner.png' />
      <Suspense>
        <div className='mx-auto max-w-[500px] sm:max-w-[670px] lg:max-w-[1000px] xl:max-w-[1440px] xl:px-20'>
          <div className='mt-8 flex w-full flex-col justify-between gap-y-4 px-10 sm:flex-row sm:px-0'>
            <Sort options={sortOptions} />
            <Search filters={hunterBoardFilters} />
          </div>

          <div className='mx-10 mt-4 grid grid-cols-1 place-items-center gap-7 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {hunterBoardData?.map((el) => (
              <PostCard
                id={el.board2_id}
                type={el.report_kind}
                date={el.created_at}
                title={el.title}
                meso={el.meso + ''}
                badges={[el.place_theif_nickname]}
                discordNickName='축지법 아저씨'
                manner={el.manner_count}
                unManner={el.report_count}
                view={el.view_count}
                avatarUrl={filterImageUrl(el.discord_image)}
                completed={el.complete}
                key={el.board2_id}
                boardType={'board2'}
              />
            ))}

            {searchBoardData?.map((el) => (
              <PostCard
                id={el.board2_id}
                type={el.report_kind}
                date={el.created_at}
                title={el.title}
                meso={el.meso + ''}
                badges={[el.place_theif_nickname]}
                discordNickName='축지법 아저씨'
                manner={el.manner_count}
                unManner={el.report_count}
                view={el.view_count}
                avatarUrl={filterImageUrl(el.discord_image)}
                completed={el.complete}
                key={el.board2_id}
                boardType={'board2'}
              />
            ))}
          </div>
          <Pagination totalPost={totalBoardCount || 0} itemsPerPage={5} />
        </div>
      </Suspense>
    </main>
  );
};

export default HunterBoardPage;
