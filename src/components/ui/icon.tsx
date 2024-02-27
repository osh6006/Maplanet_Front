import Image from 'next/image';

interface IIconProps {
  src: string;
  alt: string;
  size: number;
  className?: string;
}

const Icon: React.FunctionComponent<IIconProps> = ({ src, alt, size, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size || 15}
      height={size || 15}
      style={{
        height: size,
        width: size
      }}
    />
  );
};

export default Icon;
