'use client';

import Image from 'next/image';
import Button from './button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='relative flex h-[65px] w-full justify-between bg-black px-[360px] text-white'>
      <div className='flex items-center space-x-4'>
        <Link href='/'>
          <Image src='/images/logo.png' width={200} height={28} alt='logo' />
        </Link>
      </div>
      <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center'>
        <Button size='sm' color='discord'>
          <>메이플레닛 디스코드 채널</>
        </Button>
      </div>
      <div className='flex items-center space-x-7 text-lg'>
        <Link href='/notice'>공지사항</Link>
        <Link href='/board1'>잠쩔</Link>
        <Link href='/board2'>겹사 의뢰</Link>
        <Button size='sm' color='discord'>
          <>로그인</>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
