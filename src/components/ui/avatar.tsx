import clsx from 'clsx';
import Image from 'next/image';
import * as React from 'react';

interface IAvatarProps {
  imgUrl: string;
  size: number;
}

const Avatar: React.FunctionComponent<IAvatarProps> = ({ imgUrl, size }) => {
  return <Image alt='avatar' src={imgUrl} height={size} width={size} className='rounded-full' />;
};

export default Avatar;
