import * as React from 'react';

interface INavInnerProps {
  children: React.ReactNode;
}

const NavInner: React.FunctionComponent<INavInnerProps> = ({ children }) => {
  return <div className='relative mx-auto w-full max-w-[1200px] px-10 xl:p-0 '>{children}</div>;
};

export default NavInner;
