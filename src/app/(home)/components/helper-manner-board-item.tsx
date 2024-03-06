import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import InlineProfile from '@/components/ui/inline-profile';
import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface IHelperMannerBoardItemProps {
  boardId: number;
  userId: number;
  discordId: string;
  profileImg: string;
  profileName: string;
  manner: number;
  cost: number;
}

const HelperMannerBoardItem: React.FunctionComponent<IHelperMannerBoardItemProps> = ({
  boardId,
  userId,
  discordId,
  profileImg,
  profileName,
  manner,
  cost
}) => {
  const router = useRouter();

  console.log(
    'helper manner board:',
    'board id:',
    boardId,
    'user id:',
    userId,
    'discord id:',
    discordId
  );
  // 쩔, 겹사 보드
  return (
    <li className='flex h-[94px] w-full list-none items-center justify-between gap-1 rounded-xl bg-tableBackground px-[17px]'>
      {/* 프로필 */}
      <InlineProfile imgUrl={''} manner={manner} unManner={15} discordNickName={profileName} />

      {/* 버튼 */}
      <div className='flex gap-2'>
        <Button
          color='lightGray'
          size='sm'
          onClick={() => {
            console.log('userId', userId);
            router.push(`/profile/${userId}`);
          }}>
          프로필 보기
        </Button>
        <Button color='discord' size='sm'>
          <Icon src='/svgs/discord-icon.svg' alt='discord-icon' size={12}></Icon>
          <span>1:1 대화</span>
        </Button>
      </div>
    </li>
  );
};

export default HelperMannerBoardItem;
