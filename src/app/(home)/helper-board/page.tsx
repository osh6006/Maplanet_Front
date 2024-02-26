'use client';

import Sort from './components/sort';
import Inner from '@/components/ui/inner';
import PostBanner from '@/components/ui/post-banner';
import Search from './components/search';

interface IHelperBoardPageProps {}

const HelperBoardPage: React.FunctionComponent<IHelperBoardPageProps> = (props) => {
  return (
    <div className=''>
      <PostBanner title='쩔 게시판' imgUrl='/images/banner.png' />

      <Inner>
        <div className='mt-8 flex w-full justify-between '>
          <Sort
            options={[
              {
                name: '최신 순',
                value: 'recently',
                icon: undefined
              },
              {
                name: '가격 순',
                value: 'recently',
                icon: undefined
              }
            ]}
          />
          <Search />
        </div>
      </Inner>
    </div>
  );
};

export default HelperBoardPage;
