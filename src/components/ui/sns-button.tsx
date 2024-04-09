'use client';

import Link from 'next/link';
import Icon from './icon';
import clsx from 'clsx';

interface ISNSButtonProps {
  href: string;
  imageUrl: string;
  alt: string;
  title: string;
  color: 'bg-kakao text-black' | 'bg-discord text-white';
}

const SNSButton: React.FunctionComponent<ISNSButtonProps> = ({
  alt,
  imageUrl,
  href,
  title,
  color
}) => {
  return (
    <Link href={href} target='_blank' className='group'>
      <button
        className={clsx(
          ' relative z-20 flex items-center justify-center gap-x-2 rounded-full px-4 py-3 transition-all active:scale-95',
          color
        )}>
        <Icon alt={alt} src={imageUrl} width={20} height={20} />
        <span className='absolute  opacity-0 group-hover:static group-hover:opacity-100 group-hover:transition-all'>
          {title}
        </span>
        <Icon src={'/svgs/link.svg'} alt='link' width={15} height={15} />
      </button>
    </Link>
  );
};

export default SNSButton;
