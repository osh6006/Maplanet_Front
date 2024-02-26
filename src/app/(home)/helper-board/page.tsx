import PostBanner from '@/components/ui/post-banner';
import * as React from 'react';

interface IHelperBoardPageProps {}

const HelperBoardPage: React.FunctionComponent<IHelperBoardPageProps> = (props) => {
  return (
    <div>
      <PostBanner title='쩔 게시판' imgUrl='/images/banner.png' />
    </div>
  );
};

export default HelperBoardPage;
