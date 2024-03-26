import Link from 'next/link';
import toast from 'react-hot-toast';
import { navbarLinks } from '@/data/links';

import Icon from '../ui/icon';
import Button from '../ui/button';
import AvatarMenu from '../ui/avatar-menu';

interface IDesktopNavProps {
  userInfo?: string;
  accessToken?: string;
}

const DISCORD_LINK = process.env.NEXT_PUBLIC_DISCORD_LOGIN_LINK; 

const DesktopNav: React.FunctionComponent<IDesktopNavProps> = ({ accessToken, userInfo }) => {
  
  return (
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
              <Icon src={'/svgs/discord-icon.svg'} alt='discord' size={15} />
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
  );
};

export default DesktopNav;
