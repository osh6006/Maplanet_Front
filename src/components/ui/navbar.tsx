'use client';

import { Fugaz_One } from 'next/font/google';

import Inner from './inner';
import Link from 'next/link';
import DesktopNav from '../navbar/desktop-nav';
import MobileNav from '../navbar/mobile-nav';
import NavInner from '../navbar/nav-inner';

const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

interface INavbarProps {
  userInfo?: string;
  accessToken?: string;
}

const Navbar: React.FunctionComponent<INavbarProps> = ({ accessToken, userInfo }) => {
  return (
    <nav className='fixed z-50 flex h-[60px] w-full bg-black text-white xl:px-0'>
      <NavInner>
        <div className='flex h-full items-center justify-center sm:justify-between'>
          {/* nav logo */}
          <Link href='/' className='z-10'>
            <p className={`${fugaz.className} pt-1 text-[28px]`}>Mapleland PP</p>
          </Link>

          {/* nav links */}
          <MobileNav accessToken={accessToken} userInfo={userInfo} />
          <DesktopNav accessToken={accessToken} userInfo={userInfo} />
        </div>
      </NavInner>
    </nav>
  );
};

export default Navbar;
