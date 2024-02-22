import Image from 'next/image';

interface IIconProps {
  src: string;
  alt: string;
  size: number;
  className?: string;
}

const Icon: React.FunctionComponent<IIconProps> = ({ src, alt, size, className }) => {
  return <Image src={src} alt={alt} width={size} height={size} />;
}

export default Icon;
