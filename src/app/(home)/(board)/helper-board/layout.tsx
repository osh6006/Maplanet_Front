import Sort from '../components/sort';
import Search from '../components/search';
import Banner from '@/components/ui/banner';
import BoardInner from '../components/board-inner';

import { helperBoardFilters, sortOptions } from '@/data/board';

export const dynamic = 'force-dynamic';

interface IHelperboardLayoutProps {
  children: React.ReactNode;
}

const HelperboardLayout: React.FunctionComponent<IHelperboardLayoutProps> = ({ children }) => {
  return (
    <main>
      <Banner title='쩔 게시판' imgUrl='/images/banner.png' />
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
