import { Suspense } from 'react';
import { getHunterBoardData } from '@/actions/hunter-board';

import Sort from '../components/sort';
import Search from '../components/search';
import Banner from '@/components/ui/banner';
import Pagination from '../components/pagination';
import HunterCard from '../components/hunter-card';

import { IHunterBoard } from '@/types';

import { hunterBoardFilters, sortOptions } from '@/data/board';

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
  const totalBoardCount = fetchData.totalCount;

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
              <HunterCard {...el} key={el.board2_id} badges={[el.place_theif_nickname]} />
            ))}

            {searchBoardData?.map((el) => (
              <HunterCard {...el} key={el.board2_id} badges={[el.place_theif_nickname]} />
            ))}
          </div>
          <Pagination totalPost={totalBoardCount || 0} itemsPerPage={5} pagePerItem={12} />
        </div>
      </Suspense>
    </main>
  );
};

export default HunterBoardPage;
