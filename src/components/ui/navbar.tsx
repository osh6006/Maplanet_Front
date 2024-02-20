'use client';

import Image from 'next/image';
import Button from './button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex h-[65px] w-full justify-between bg-black px-[360px] text-white'>
      <div className='flex items-center space-x-4'>
        <Link href='/'>
          <Image src='/images/logo.png' width={200} height={28} alt='logo' />
        </Link>
      </div>
      <div className='flex items-center space-x-7 text-lg'>
        <Link href='/notice'>공지사항</Link>
        <Link href='/carry'>잠쩔</Link>
        <Link href='/request'>겹사 의뢰</Link>
        <Button />
      </div>
    </nav>
  );
};

export default Navbar;
