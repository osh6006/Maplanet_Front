import Image from 'next/image';

interface IIconProps {
  src: string;
  alt: string;
  size: number;
  className?: string;
  priority?: boolean;
}

const Icon: React.FunctionComponent<IIconProps> = ({ src, alt, size, className, priority }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{
        height: size,
        width: size
      }}
      className={className}
      priority={priority}
    />
  );
};

export default Icon;
