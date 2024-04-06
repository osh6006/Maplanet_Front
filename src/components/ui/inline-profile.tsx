import Avatar from './avatar';
import Icon from './icon';

interface IInlineProfileProps {
  discordNickName: string;
  imgUrl: string;
  manner?: number;
  unManner?: number;
}

const InlineProfile: React.FunctionComponent<IInlineProfileProps> = ({
  manner,
  unManner,
  imgUrl,
  discordNickName
}) => {
  return (
    <div className='flex items-center gap-x-2 text-[16px] text-base text-gray-400'>
      {/* Avatar URL From Server*/}
      <div className='flex items-center gap-x-2 text-nowrap  font-semibold'>
        <Avatar imgUrl={imgUrl || '/svgs/snail.svg'} size={32} />
        <p>{discordNickName}</p>
      </div>
      <div className='flex items-center gap-x-1'>
        <Icon src={'/svgs/maple.svg'} alt='manner' size={16} />
        <p>{manner || 0}</p>
      </div>
      <div className='flex items-center gap-x-1'>
        <Icon src={'/svgs/un-manner.svg'} alt='unmanner' size={16} />
        <p>{unManner || 0}</p>
      </div>
    </div>
  );
};

export default InlineProfile;
