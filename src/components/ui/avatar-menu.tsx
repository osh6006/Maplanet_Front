'use client';

import { useUser } from '@/hooks/stores/user-store';
import useOutsideClick from '@/hooks/use-outside-click';
import Avatar from './avatar';
import clsx from 'clsx';

interface IAvatarMenuProps {
  userCookie: string;
}

const AvatarMenu: React.FunctionComponent<IAvatarMenuProps> = ({ userCookie }) => {
  const { isOpen, ref, setIsOpen } = useOutsideClick();

  const [nickName, avatarUrl] = userCookie.split(',');

  return (
    <div
      className={clsx(
        'relative flex cursor-pointer flex-col items-center rounded-full',
        isOpen ? 'border-4 border-main' : 'border-4 border-transparent'
      )}
      onClick={() => setIsOpen(!isOpen)}
      ref={ref}>
      <Avatar imgUrl={avatarUrl} size={30} />
      {isOpen ? (
        <ul className='absolute left-0 z-[60] mt-10 min-w-[150px] rounded-md bg-white px-2 py-2 text-sm text-black shadow-md'>
          <li className='w-full rounded-sm p-1 transition-all hover:bg-main hover:text-white'>
            프로필
          </li>
          <li className='w-full rounded-sm p-1 transition-all hover:bg-main hover:text-white'>
            로그아웃
          </li>
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default AvatarMenu;
