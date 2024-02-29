import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import InlineProfile from '@/components/ui/inline-profile';
import * as React from 'react';

interface IBoardItemProps {
  id: number;
  category: string;
  profile: string;
  date: string;
  title: string;
  cost?: number;
  type: string[];
  map: string;
}

const BoardItem: React.FunctionComponent<IBoardItemProps> = (props) => {
  const addCommasToCost = (cost: number | undefined) => {
    if (cost === undefined) return 0;
    return cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const wantedCost = (cost: number | undefined) => {
    if (cost === undefined) return 0;
    const dividedCost = cost / 10000;
    return addCommasToCost(dividedCost);
  };

  // 쩔, 겹사 보드
  if (props.category === '쩔' || props.category === '겹사') {
    return (
      <li className='flex w-full list-none flex-col justify-center gap-1 rounded-xl bg-tableBackground px-4 py-4'>
        {/* 첫번째 내용 */}
        <div className='flex'>
          {/* 프로필 */}
          <InlineProfile imgUrl='' manner={12} unManner={15} discordNickName='test' />
          {/* 날짜, 조회수 */}
          <div className='ml-2 flex flex-grow items-center justify-between text-xs text-[#aeaeae]'>
            2024-02-12
            <div className='flex items-center gap-x-1'>
              <Icon src='/svgs/eyes.svg' alt='eyes' size={12} />
              <div className='ml-[1px]'>23</div>
            </div>
          </div>
        </div>

        {/* 두번째 내용 */}
        <div className='my-2 text-base'>1 시간당 메소 150만에 4시간 해드립니다</div>

        {/* 세번째 내용 */}
        <div className='flex'>
          <div className='mr-12 flex items-center gap-1'>
            <Icon src='/svgs/money.svg' alt='money' size={14} />
            <span className='text-sm text-[#ff6666]'>{addCommasToCost(props.cost)}</span>
          </div>
          <div className='flex items-center gap-8 text-sm text-[#cecece]'>
            <div className='flex items-center gap-1'>
              <Icon src='/svgs/잠쩔.svg' alt='잠쩔' size={12} />
              잠쩔
            </div>
            <div className='flex items-center gap-1'>
              <Icon src='/svgs/심쩔.svg' alt='심쩔' size={12} />
              심쩔
            </div>
            <div className='flex items-center gap-1'>
              <Icon src='/svgs/map.svg' alt='map' size={12} />
              죽음의 숲
            </div>
            <div className='flex items-center gap-1'>
              <Icon src='/svgs/time.svg' alt='time' size={12} />
              <span>1시간</span>
            </div>
            <div className='flex items-center gap-1'>
              <Icon src='/svgs/jobs.svg' alt='jobs' size={12} />
              직업
            </div>
          </div>
        </div>
      </li>
    );
  }

  // 매너 유저, 현상 수배 보드
  if (props.category === '쩔 매너 유저' || props.category === '현상 수배') {
    return (
      <li className='flex h-[94px] w-full list-none items-center justify-between gap-1 rounded-xl bg-tableBackground px-[17px]'>
        {/* 프로필 */}
        <InlineProfile imgUrl='' manner={12} unManner={15} discordNickName='test' />

        {/* 현상금 */}
        {props.category === '현상 수배' && (
          <div className='flex items-center'>
            <span className='mr-[7px] text-xl text-[#ff6666]'>{wantedCost(props.cost)}</span>
            <span className='text-xs'>(만)메소</span>
          </div>
        )}
        {/* 버튼 */}
        <div className='flex gap-2'>
          <Button color='main' size='xs'>
            프로필 보기
          </Button>
          <Button color='discord' size='xs'>
            <Icon src='/svgs/discord-icon.svg' alt='discord-icon' size={12}></Icon>
            <span>1:1 대화</span>
          </Button>
        </div>
      </li>
    );
  }
};

export default BoardItem;