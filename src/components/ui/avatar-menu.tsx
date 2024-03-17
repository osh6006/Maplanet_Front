'use client';

import useOutsideClick from '@/hooks/use-outside-click';
import Avatar from './avatar';
import clsx from 'clsx';
import { logOut } from '@/actions/auth';
import { useRouter } from 'next/navigation';

interface IAvatarMenuProps {
  userCookie: string;
}

const AvatarMenu: React.FunctionComponent<IAvatarMenuProps> = ({ userCookie }) => {
  const router = useRouter();
  const { isOpen, ref, setIsOpen } = useOutsideClick();
  const [nickName, avatarUrl] = userCookie.split(',');

  const handleMyProfile = () => {
    // TODO : 내 프로필로 이동
  };

  const handleLogout = async () => {
    // TODO : 쿠키 삭제 후 리다이렉트

    console.log('click');

    await logOut();
  };

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
            내 프로필
          </li>
          <li
            onClick={handleLogout}
            className='w-full rounded-sm p-1 transition-all hover:bg-main hover:text-white'>
            로그아웃
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default AvatarMenu;
