'use client';

import Image from 'next/image';
import Button from './button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex h-[65px] w-full justify-between bg-black px-[360px] text-white relative'>
      <div className='flex items-center space-x-4'>
        <Link href='/'>
          <Image src='/images/logo.png' width={200} height={28} alt='logo' />
        </Link>
      </div>
      <div className='flex items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Button text='메이플래닛 디스코드 이동하기' />
      </div>
      <div className='flex items-center space-x-7 text-lg'>
        <Link href='/notice'>공지사항</Link>
        <Link href='/board1'>잠쩔</Link>
        <Link href='/board2'>겹사 의뢰</Link>
        <Button text='로그인' />
      </div>
    </nav>
  );
};

export default Navbar;
