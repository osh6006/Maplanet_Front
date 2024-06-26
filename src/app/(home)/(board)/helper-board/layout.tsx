import Sort from '../components/ui/sort';
import Search from '../components/ui/search';
import Banner from '@/components/ui/banner';
import BoardInner from '../components/ui/board-inner';

import { helperBoardFilters, sortOptions } from '@/data/board';

interface IHelperboardLayoutProps {
  children: React.ReactNode;
}

const HelperboardLayout: React.FunctionComponent<IHelperboardLayoutProps> = ({ children }) => {
  return (
    <main>
      <Banner title='심알바' imgUrl='/images/banner.png' />
      <BoardInner>
        <div className='mt-8 flex flex-col justify-between gap-y-4 sm:flex-row'>
          <Sort options={sortOptions} />
          <Search filters={helperBoardFilters} />
        </div>
        {children}
      </BoardInner>
    </main>
  );
};

export default HelperboardLayout;
