'use client';

import Icon from './icon';
import Inner from './inner';
import Link from 'next/link';
import Button from './button';
import { Fugaz_One } from 'next/font/google';
import AvatarMenu from './avatar-menu';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

interface INavbarProps {
  userInfo?: string;
  accessToken?: string;
}

const Navbar: React.FunctionComponent<INavbarProps> = ({ accessToken, userInfo }) => {
  const router = useRouter();
  const handleNewPostBtn = () => {
    if (accessToken) router.push('/board-write');
    else toast.error('로그인을 해주세요!');
  };

  return (
    <nav className='fixed z-50 flex h-[60px] w-full bg-black px-10 text-white xl:px-0'>
      <Inner>
        <div className='flex h-full items-center justify-between'>
          {/* nav logo */}
          <Link href='/'>
            <p className={`${fugaz.className} pt-1 text-[28px]`}>Mapleland PP</p>
          </Link>

          {/* nav links */}
          <div className='flex items-center space-x-7 whitespace-nowrap text-lg'>
            <Link href='/helper-board'>쩔</Link>
            <Link href='/hunter-board'>겹사</Link>
            <Link href='/party-board'>파티</Link>
            <Link href='/wood-cutter-board'>나무꾼</Link>
            <Link href='/notice'>공지사항</Link>

            {/* TODO: 로그인시 새글 등록 뜨게하고 로그아웃시 안뜨게 수정 */}
            <div className='flex space-x-3'>
              {accessToken ? (
                <AvatarMenu userCookie={userInfo || ''} />
              ) : (
                <Link href={'https://maplanet.store/auth/discord'}>
                  <Button size='sm' color='discord'>
                    <Icon src={'/svgs/discord-icon.svg'} alt='discord' size={15} />
                    로그인
                  </Button>
                </Link>
              )}
              <Button color='main' size='sm' onClick={handleNewPostBtn}>
                + 새 글
              </Button>
            </div>
          </div>
        </div>
      </Inner>
    </nav>
  );
};

export default Navbar;
