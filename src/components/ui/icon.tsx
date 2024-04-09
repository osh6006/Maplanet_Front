import Image from 'next/image';

interface IIconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

const Icon: React.FunctionComponent<IIconProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
};

export default Icon;
