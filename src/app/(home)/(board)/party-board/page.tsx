import { Suspense } from 'react';

import Banner from '@/components/ui/banner';
import Loading from '@/components/ui/loading';

import { IPartyBoard } from '@/types';
import Sort from '../components/sort';
import Search from '../components/search';
import { partyBoardFilters, sortOptions } from '@/data/board';
import Pagination from '../components/pagination';
import PartyCard from '../components/party-board/party-card';
import { getPartyBoardData } from '@/actions/party-board';

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

  const fetchData = await getPartyBoardData(
    searchParams?.page || 1,
    searchParams?.searchType,
    searchParams?.value
  );

  const partyBoardData: IPartyBoard[] = fetchData.board1Data;
  const searchBoardData: IPartyBoard[] = fetchData.search4Data;
  const totalBoardCount = fetchData.totalCount;

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
          <ul className='mx-10 mt-4 grid grid-cols-1 place-items-center gap-7 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {partyBoardData?.map((el) => (
              <PartyCard
                key={el.board4_id}
                {...el}
                badges={[el.progress_time, el.hunting_ground, `${el.recruit_people_count}명 모집`]}
              />
            ))}
            {searchBoardData?.map((el) => (
              <PartyCard
                key={el.board4_id}
                {...el}
                badges={[el.progress_time, el.hunting_ground, `${el.recruit_people_count}명 모집`]}
              />
            ))}
          </ul>

          <Pagination totalPost={totalBoardCount} itemsPerPage={5} pagePerItem={12} />
        </div>
      </Suspense>
    </main>
  );
};

export default PartyBoardPage;
