import Sort from '../components/ui/sort';
import Search from '../components/ui/search';
import Banner from '@/components/ui/banner';
import BoardInner from '../components/ui/board-inner';

import { partyBoardFilters, sortOptions } from '@/data/board';

interface IHunterBoardLayoutProps {
  children: React.ReactNode;
}

const WoodCutterBoardLayout: React.FunctionComponent<IHunterBoardLayoutProps> = ({ children }) => {
  return (
    <main>
      <Banner title='나무꾼' imgUrl='/images/banner.png' />
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
