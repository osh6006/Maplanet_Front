import Spinner from '@/components/ui/spinner';
import * as React from 'react';

interface ILoadingProps {
}

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
  return <Spinner />;
};

export default Loading;
