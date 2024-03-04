import Avatar from './avatar';
import Icon from './icon';

interface IInlineProfileProps {
  discordNickName: string;
  imgUrl: string;
  manner: number;
  unManner: number;
}

const InlineProfile: React.FunctionComponent<IInlineProfileProps> = ({
  manner,
  unManner,
  imgUrl,
  discordNickName
}) => {
  return (
    <div className='flex items-center gap-x-2 text-gray-400'>
      {/* Avatar URL From Server*/}
      <div className='flex items-center gap-x-1 text-nowrap text-sm font-semibold'>
        <Avatar imgUrl={imgUrl || '/svgs/snail.svg'} size={30} />
        <p>{discordNickName}</p>
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
  );
};

export default InlineProfile;
