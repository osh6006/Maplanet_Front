import Image from 'next/image';

interface IIconProps {
  src: string;
  alt: string;
  className?: string;
}

const Icon: React.FunctionComponent<IIconProps> = ({ src, alt, className }) => {
  return <Image src={src} alt={alt} width={15} height={15} className={className} />;
};

export default Icon;
