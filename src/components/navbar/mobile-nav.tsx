'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Fugaz_One } from 'next/font/google';

import Icon from '../ui/icon';
import Button from '../ui/button';
import AvatarMenu from '../ui/avatar-menu';

import { navbarLinks } from '@/data/links';
import useOutsideClick from '@/hooks/use-outside-click';

const DISCORD_LINK = process.env.NEXT_PUBLIC_DISCORD_LOGIN_LINK;
const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

interface IMobileNavProps {
  userInfo?: string;
  accessToken?: string;
}

const MobileNav: React.FunctionComponent<IMobileNavProps> = ({ userInfo, accessToken }) => {
  const router = useRouter();
  const { ref, isOpen, handleClose, handleOpen } = useOutsideClick();

  return (
    <>
      <div className='absolute left-0 flex w-full items-center justify-between  px-3 sm:hidden'>
        <button onClick={handleOpen}>
          <Icon size={30} src='/svgs/menu.svg' alt='menu' />
        </button>

        {/* nav logo */}
        <button onClick={() => router.push('/')} className=''>
          <p className={`${fugaz.className} pt-1 text-[28px]`}>Mapleland PP</p>
        </button>

        {accessToken ? (
          <AvatarMenu userCookie={userInfo || ''} />
        ) : (
          <Link href={DISCORD_LINK || '#'}>
            <Button size='sm' color='discord'>
              <Icon src={'/svgs/discord-icon.svg'} alt='discord' size={15} />
            </Button>
          </Link>
        )}
        {isOpen ? (
          <div ref={ref} className='fixed inset-y-0 left-0 z-20 w-1/2 bg-background px-4'>
            <button className='absolute right-3 top-6' onClick={handleClose}>
              <Icon size={20} src='/svgs/X.svg' alt='menu' />
            </button>

            <button
              onClick={() => {
                handleClose();
                router.push('/');
              }}
              className='mt-12'>
              <p className={`${fugaz.className} pt-1 text-[22px]`}>Mapleland PP</p>
            </button>

            <ul className='mt-16 flex flex-col gap-y-4 whitespace-nowrap text-lg'>
              {navbarLinks.map((el) => (
                <li
                  key={el.name}
                  onClick={() => {
                    router.push(el.href);
                    handleClose();
                  }}>
                  {el.name}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default MobileNav;
