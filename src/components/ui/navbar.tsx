'use client';

import Image from 'next/image';
import Button from './button';
import Link from 'next/link';
import Icon from './icon';

const Navbar = () => {
  return (
    <nav className='relative flex h-[65px] w-full justify-between bg-black px-[360px] '>
      <div className='flex items-center'>
        <Link href='/'>
          <Image priority={true} src='/images/logo.png' width='200' height='50' alt='logo' />
        </Link>
      </div>
      <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center'>
        <Button size='xs' color='discord'>
          <Icon src={'/svgs/discord-icon.svg'} alt='discord' />
          <>메이플레닛 디스코드 채널</>
          <Icon src={'/svgs/link.svg'} alt='link' />
        </Button>
      </div>
      <div className='flex items-center space-x-7 whitespace-nowrap text-lg'>
        <Link href='/notice'>공지사항</Link>
        <Link href='/board1'>잠쩔</Link>
        <Link href='/board2'>겹사 의뢰</Link>
        <Button size='xs' color='discord'>
          <Icon src={'/svgs/discord-icon.svg'} alt='discord' />
          로그인
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
