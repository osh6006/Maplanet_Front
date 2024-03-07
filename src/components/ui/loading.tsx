import clsx from 'clsx';
import Image from 'next/image';

interface ILoadingProps {
  size: number;
}

const Loading: React.FunctionComponent<ILoadingProps> = ({ size }) => {
  return (
    <div className={clsx('flex flex-col items-center justify-center gap-y-4')}>
      <Image alt='loading' src={'/images/loading.webp'} width={size} height={size} />
      <p className='animate-loading text-lg font-semibold'>로 딩 중...</p>
    </div>
  );
};

export default Loading;
