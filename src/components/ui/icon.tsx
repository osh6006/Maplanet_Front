import Image from 'next/image';

import * as React from 'react';

interface IIconProps {
  src: string;
  alt: string;
}

const Icon: React.FunctionComponent<IIconProps> = (props) => {
  return <Image src='/svgs/discord-icon.svg' alt='Discord' width={15} height={15} />;
};

export default Icon;
