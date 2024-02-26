'use client';

import Inner from '@/components/ui/inner';
import PostBanner from '@/components/ui/post-banner';
import * as React from 'react';
import Filter from './components/filter';

interface IHelperBoardPageProps {}

const HelperBoardPage: React.FunctionComponent<IHelperBoardPageProps> = (props) => {
  return (
    <div className=''>
      <PostBanner title='쩔 게시판' imgUrl='/images/banner.png' />

      <Inner>
        <div className='mt-8 flex w-full justify-between'>
          <Filter
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
        </div>
      </Inner>
    </div>
  );
};

export default HelperBoardPage;
