import clsx from 'clsx';
import Image from 'next/image';

interface ILoadingProps {
  size: number;
}

const Loading: React.FunctionComponent<ILoadingProps> = ({ size }) => {
  return (
    <div className={clsx('flex flex-col items-center justify-center gap-y-4')}>
      <Image alt='loading' src={'/images/loading.webp'} width={size} height={size} />
      <p className='text-lg font-bold'>Loading...</p>
    </div>
  );
};

export default Loading;
