import Image from 'next/image';

interface IIconProps {
  src: string;
  alt: string;
}

const Icon: React.FunctionComponent<IIconProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} width={15} height={15} />;
};

export default Icon;
