import Avatar from '@/components/ui/avatar';
import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { filterImageUrl } from '@/util/util';
import Link from 'next/link';

interface IPostModalHeaderProps {
  discord_id: string;
  discord_image: string;
  discord_global_name: string;
  manner_count: number;
  report_count: number;
}

const BoardModalHeader: React.FunctionComponent<IPostModalHeaderProps> = ({
  discord_id,
  discord_global_name,
  discord_image,
  manner_count,
  report_count
}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-y-4'>
      <div className='flex w-full flex-1 items-center justify-between  gap-x-4'>
        <div className='flex items-center gap-x-2'>
          <Avatar imgUrl={filterImageUrl(discord_image!)} size={40} />
          <h1 className='text-xl'>{discord_global_name}</h1>
        </div>

        <div className='flex gap-x-2 '>
          <div className='flex items-center gap-x-3'>
            <div className='flex items-center gap-x-1'>
              <Icon src={'/svgs/maple.svg'} alt='manner' size={15} />
              <span>·</span>
              <p>{manner_count}</p>
            </div>
            <div className='flex items-center gap-x-1'>
              <Icon src={'/svgs/un-manner.svg'} alt='unmanner' size={15} />
              <span>·</span>
              <p>{report_count}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex w-full flex-1 items-center justify-between gap-x-2'>
        <Link
          href={`discord://discord.com/users/${discord_id}`}
          target='_blanck'
          className='w-full'>
          <Button color='discord' size='wide'>
            1:1 대화
          </Button>
        </Link>
        <Button
          color='lightGray'
          size='wide'
          onClick={() => {
            // TODO : Move Profile
            console.log('asdf');
          }}>
          프로필 보기
        </Button>
      </div>
    </div>
  );
};

export default BoardModalHeader;
