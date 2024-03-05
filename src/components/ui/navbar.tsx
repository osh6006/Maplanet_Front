'use client';

import Icon from './icon';
import Inner from './inner';
import Link from 'next/link';
import Button from './button';
import { Fugaz_One } from 'next/font/google';

const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

const Navbar = () => {
  return (
    <nav className='fixed z-50 flex h-[60px] w-full bg-black px-10 text-white xl:px-0'>
      <Inner>
        <div className='flex h-full items-center justify-between'>
          {/* nav logo */}
          <Link href='/'>
            <p className={`${fugaz.className} text-[28px] pt-1`}>Mapleland PP</p>
          </Link>
          {/* discord channel button */}
          <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center'>
            <Button size='xs' color='discord'>
              <Icon src={'/svgs/discord-icon.svg'} alt='discord' size={15} />
              <span>메이플레닛 디스코드 채널</span>
              <Icon src={'/svgs/link.svg'} alt='link' size={15} />
            </Button>
          </div>
          {/* nav links */}
          <div className='flex items-center space-x-7 whitespace-nowrap text-lg'>
            <Link href='/helper-board'>잠쩔</Link>
            <Link href='/hunter-board'>겹사 의뢰</Link>
            <Link href='/notice'>공지사항</Link>
            <Link href='/board-write'>
              <Button color='main' size='sm'>
                + 새 글
              </Button>
            </Link>
            <Button size='sm' color='discord'>
              <Icon src={'/svgs/discord-icon.svg'} alt='discord' size={15} />
              로그인
            </Button>
          </div>
        </div>
      </Inner>
    </nav>
  );
};

export default Navbar;
