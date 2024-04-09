'use client';

import Link from 'next/link';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Fugaz_One } from 'next/font/google';

import Icon from '../ui/icon';
import Button from '../ui/button';
import AvatarMenu from '../ui/avatar-menu';

import { navbarLinks } from '@/data/links';

interface IDesktopNavProps {
  userInfo?: string;
  accessToken?: string;
}

const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });
const DISCORD_LINK = process.env.NEXT_PUBLIC_DISCORD_LOGIN_LINK;

const DesktopNav: React.FunctionComponent<IDesktopNavProps> = ({ accessToken, userInfo }) => {
  const router = useRouter();

  return (
    <>
      {/* nav logo */}
      <button onClick={() => router.push('/')} className='hidden sm:block'>
        <p className={`${fugaz.className} pt-1 text-[28px]`}>Mapleland PP</p>
      </button>

      <div className='hidden items-center gap-x-4 sm:flex'>
        <ul className='flex items-center space-x-7 whitespace-nowrap text-lg'>
          {navbarLinks.map((el) => (
            <li key={el.name}>
              <Link href={el.href}>{el.name}</Link>
            </li>
          ))}
        </ul>
        {/* TODO: 로그인시 새글 등록 뜨게하고 로그아웃시 안뜨게 수정 */}
        <div className='flex items-center gap-x-2'>
          {accessToken ? (
            <AvatarMenu userCookie={userInfo || ''} />
          ) : (
            <Link href={DISCORD_LINK || '#'}>
              <Button size='sm' color='discord'>
                <Icon src={'/svgs/discord-icon.svg'} alt='discord' width={15} height={15} />
                로그인
              </Button>
            </Link>
          )}
          <Link href='/board-write'>
            <Button
              color='main'
              size='sm'
              onClick={() => {
                if (!accessToken) toast.error('로그인을 해주세요!');
              }}>
              + 새 글
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DesktopNav;
