'use client';

import Icon from '../ui/icon';
import AvatarMenu from '../ui/avatar-menu';
import Link from 'next/link';
import Button from '../ui/button';
import useOutsideClick from '@/hooks/use-outside-click';

const DISCORD_LINK = process.env.NEXT_PUBLIC_DISCORD_LOGIN_LINK;

interface IMobileNavProps {
  userInfo?: string;
  accessToken?: string;
}

const MobileNav: React.FunctionComponent<IMobileNavProps> = ({ userInfo, accessToken }) => {
  const { ref, isOpen, setIsOpen } = useOutsideClick();

  const handleClose = () => {};
  const handleOpen = () => {};

  return (
    <div className='absolute left-0 flex w-full items-center justify-between px-3 sm:hidden'>
      <Icon size={30} src='/svgs/menu.svg' alt='menu' />
      {accessToken ? (
        <AvatarMenu userCookie={userInfo || ''} />
      ) : (
        <Link href={DISCORD_LINK || '#'}>
          <Button size='sm' color='discord'>
            <Icon src={'/svgs/discord-icon.svg'} alt='discord' size={15} />
          </Button>
        </Link>
      )}
      <div className='fixed inset-y-0 left-0 w-1/2 bg-red'></div>
    </div>
  );
};

export default MobileNav;
