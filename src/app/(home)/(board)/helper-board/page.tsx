import { Suspense } from 'react';
import { getHelperBoardData } from '@/actions/helper-board';
import { helperBoardFilters, sortOptions } from '@/data/board';

import Sort from '../components/sort';
import Banner from '@/components/ui/banner';
import Search from '../components/search';
import Pagination from '../components/pagination';
import HelperCard from '../components/helper-card';

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
      <Suspense fallback={<div>loading...</div>}>
        <div className='mx-auto max-w-[500px] sm:max-w-[670px] lg:max-w-[1000px] xl:max-w-[1440px] xl:px-20'>
          <div className='mt-8 flex w-full flex-col justify-between gap-y-4 px-10 sm:flex-row sm:px-0'>
            <Sort options={sortOptions} />
            <Search filters={helperBoardFilters} />
          </div>

          <ul className='mx-10 mt-4 grid grid-cols-1 place-items-center gap-7 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {helperBoardData?.map((el) => (
              <HelperCard
                key={el.board1_id}
                {...el}
                badges={[el.hunting_ground, el.progress_time + ' 시간', el.sub_job]}
              />
            ))}
            {searchBoardData?.map((el) => (
              <HelperCard
                key={el.board1_id}
                {...el}
                badges={[el.hunting_ground, el.progress_time + ' 시간', el.sub_job]}
              />
            ))}
          </ul>
          <Pagination totalPost={totalBoardCount || 0} itemsPerPage={5} pagePerItem={12} />
        </div>
      </Suspense>
    </main>
  );
};

export default HelperBoardPage;
