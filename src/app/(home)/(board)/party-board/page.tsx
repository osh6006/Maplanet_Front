import { Suspense } from 'react';

import Banner from '@/components/ui/banner';
import Loading from '@/components/ui/loading';

import { IPartyBoard } from '@/types';
import Sort from '../components/sort';
import Search from '../components/search';
import { partyBoardFilters, sortOptions } from '@/data/board';

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

  // const fetchData = await getHelperBoardData(
  //   searchParams?.page || 1,
  //   searchParams?.searchType,
  //   searchParams?.value
  // );

  // const helperBoardData: IPartyBoard[] = fetchData.board1Data;
  // const searchBoardData: IPartyBoard[] = fetchData.search1Data;
  // const totalBoardCount = fetchData.totalCount;

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
        </div>
      </Suspense>
    </main>
  );
};

export default PartyBoardPage;
