import Sort from '../components/sort';
import Search from '../components/search';
import Banner from '@/components/ui/banner';
import BoardInner from '../components/board-inner';

import { partyBoardFilters, sortOptions } from '@/data/board';

interface IHunterBoardLayoutProps {
  children: React.ReactNode;
}

const WoodCutterBoardLayout: React.FunctionComponent<IHunterBoardLayoutProps> = ({ children }) => {
  return (
    <main>
      <Banner title='파티 구인' imgUrl='/images/banner.png' />
      <BoardInner>
        <div className='mt-8 flex flex-col justify-between gap-y-4 sm:flex-row'>
          <Sort options={sortOptions} />
          <Search filters={partyBoardFilters} />
        </div>
        {children}
      </BoardInner>
    </main>
  );
};

export default WoodCutterBoardLayout;
