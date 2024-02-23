import Avatar from './avatar';
import Badge from './badge';

import { faker } from '@faker-js/faker';
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
  unManner: number;
  view: number;
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
  view
}) => {
  return (
    <div className='flex flex-col rounded-3xl  bg-[#161616] p-10 px-6'>
      <div className='w-fit'>
        <Badge color='bg-main' size='basic'>
          {type}
        </Badge>
      </div>
      <time className='mt-4 font-medium text-gray-400'>{date}</time>
      <h1 className='my-2 text-xl font-semibold'>{title}</h1>
      <div className='my-4 flex flex-nowrap items-center gap-x-2'>
        <Badge size='card' color='bg-[#444]'>
          {meso}
        </Badge>
        <Badge size='card' color='bg-[#444]'>
          {subjob}
        </Badge>
        <Badge size='card' color='bg-[#444]'>
          {map}
        </Badge>
        <Badge size='card' color='bg-[#444]'>
          {time}
        </Badge>
      </div>

      <div className='my-4 flex items-center justify-center gap-x-2'>
        <Button
          color='lightGray'
          size='wide'
          onClick={() => {
            // TODO : Modal Open
          }}>
          상세보기
        </Button>
        <Button
          color='lightGray'
          size='wide'
          onClick={() => {
            // TODO : Move Profile
          }}>
          프로필 보기
        </Button>
        <Button color='discord' size='wide'>
          <Icon src='/svgs/discord-icon.svg' alt='discordIcon' size={15} />
          1:1 대화
        </Button>
      </div>

      <div className='mt-6 flex items-center justify-between leading-3'>
        <div className='flex items-center gap-x-3 text-gray-400'>
          <Avatar imgUrl={faker.image.avatarGitHub()} size={35} />
          <p>{nickName}</p>
          <Icon src={'/svgs/maple.svg'} alt='manner' size={20} />
          <span>·</span>
          <p>{manner}</p>
          <Icon src={'/svgs/un-manner.svg'} alt='report' size={20} />
          <span>·</span>
          <p>{unManner}</p>
        </div>

        <div className='flex items-center gap-x-2 '>
          <Icon src={'/svgs/eyes.svg'} alt='view' size={20} />
          <p>{view}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
