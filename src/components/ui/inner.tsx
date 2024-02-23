import * as React from 'react';

interface IInnerProps {
  children: React.ReactNode;
}

const Inner: React.FunctionComponent<IInnerProps> = ({ children }) => {
  return <div className='mx-auto w-full max-w-[1200px] '>{children}</div>;
};

export default Inner;
