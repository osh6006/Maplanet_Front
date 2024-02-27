'use client';

import Avatar from './avatar';
import Badge from './badge';

import Icon from './icon';
import Button from './button';

interface IPostCardProps {
  type: string;
  date: string;
  title: string;
  meso: string;
  subjob: string;
  map: string;
  time: string;
  nickName: string;
  manner: number;
  avatarUrl: string;
  unManner: number;
  view: number;
  completed: boolean;
}

const PostCard: React.FunctionComponent<IPostCardProps> = ({
  type,
  date,
  title,
  meso,
  subjob,
  map,
  time,
  nickName,
  manner,
  unManner,
  view,
  avatarUrl,
  completed
}) => {
  return (
    <div className='relative w-full flex-col rounded-3xl bg-[#161616] px-6 py-6 sm:flex sm:w-[320px]'>
      {completed ? (
        <div className='absolute inset-0 z-30 flex items-center justify-center'>
          <div className='relative flex h-full w-full items-center justify-center'>
            <h1 className='z-10 text-3xl font-semibold'>완료</h1>
            <div className='absolute inset-0 bg-black/90 blur-sm '></div>
          </div>
        </div>
      ) : (
        ''
      )}
      <div className='flex w-full items-center justify-between'>
        <Badge className='bg-lightGray' size='basic'>
          <Icon src='/svgs/hunt.svg' size={20} alt='meso' />
          {type}
        </Badge>
        <time className='font-medium text-gray-400'>{'3일 전'}</time>
      </div>

      <h1 className='my-2 text-xl font-semibold'>{title}</h1>
      <div className='my-8 flex flex-wrap items-center gap-2'>
        <Badge size='card' className='bg-lightGray text-yellow'>
          <Icon src='/svgs/money.svg' size={20} alt='meso' />
          {meso}
        </Badge>
        <Badge size='card' className='bg-lightGray'>
          {subjob}
        </Badge>
        <Badge size='card' className='bg-lightGray'>
          {map}
        </Badge>
        <Badge size='card' className='bg-lightGray'>
          {time}
        </Badge>
      </div>

      <div className='flex items-center justify-between gap-x-2  text-nowrap'>
        <Button
          color='lightGray'
          size='card'
          onClick={() => {
            // TODO : Modal Open
          }}>
          상세보기
        </Button>
        <Button
          color='lightGray'
          size='card'
          onClick={() => {
            // TODO : Move Profile
          }}>
          프로필 보기
        </Button>
        <Button color='discord' size='card'>
          1:1 대화
        </Button>
      </div>

      <div className='mt-6 flex items-center justify-between '>
        <div className='flex items-center gap-x-2 text-gray-400'>
          {/* Avatar URL */}
          <div className='flex items-center gap-x-1 text-nowrap text-sm font-semibold'>
            <Avatar imgUrl={'/svgs/snail.svg'} size={30} />
            <p className=''>{nickName}</p>
          </div>

          <div className='flex items-center gap-x-1'>
            <Icon src={'/svgs/maple.svg'} alt='manner' size={15} />
            <span>·</span>
            <p>{manner}</p>
          </div>
          <div className='flex items-center gap-x-1'>
            <Icon src={'/svgs/un-manner.svg'} alt='unmanner' size={15} />
            <span>·</span>
            <p>{unManner}</p>
          </div>
        </div>

        <div className='flex items-center gap-x-1 font-light'>
          <Icon src={'/svgs/eyes.svg'} alt='view' size={20} />
          <p className='leading-3'>{view}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
