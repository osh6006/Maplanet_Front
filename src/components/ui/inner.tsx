import * as React from 'react';

interface IInnerProps {
  children: React.ReactNode;
}

const Inner: React.FunctionComponent<IInnerProps> = ({ children }) => {
  return <div className='mx-auto flex w-full max-w-[1200px] justify-between px-4'>{children}</div>;
};

export default Inner;
