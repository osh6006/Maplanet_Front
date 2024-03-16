import clsx from 'clsx';
import { TWirteType } from '../page';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

interface IWriteTypeWrapperProps {
  writeType: TWirteType;
  selectedWriteType: TWirteType;
  name: string;
}

const WriteTypeWrapper: React.FunctionComponent<IWriteTypeWrapperProps> = ({
  writeType,
  selectedWriteType,
  name
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (type: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('writeType', type);
    return `${pathname}?${params.toString()}`;
  };

  const handleWriteType = (type: string) => {
    router.push(createPageURL(type));
  };

  return (
    <div
      onClick={() => handleWriteType(writeType)}
      className={clsx(
        `group relative flex h-[80px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-tableBackground px-4 text-2xl font-semibold
      shadow-md hover:text-main`,
        selectedWriteType === writeType ? ' text-main' : ''
      )}>
      <div
        className={clsx(
          'absolute h-full w-full -translate-x-[40px] border-b-2 border-main',
          selectedWriteType === writeType ? 'animate-actSlideRight' : 'hidden'
        )}
      />
      {/* <div
        className={clsx(
          'absolute  right-0 h-20 w-20 bg-center duration-300 ',
          selectedWriteType === writeType
            ? 'bottom-0 right-0'
            : '-bottom-20 group-hover:bottom-0 group-hover:transition-all'
        )}
        style={{
          backgroundImage: `url(/images/horn-mushroom.webp)`,
          backgroundRepeat: 'no-repeat'
        }}
      /> */}
      <div
        className={clsx(
          'absolute left-0 h-20 w-20 bg-center duration-500 ',
          selectedWriteType === writeType ? ' top-0 duration-500' : '-top-20 '
        )}
        style={{
          backgroundImage: `url(/images/maple.webp)`,
          backgroundRepeat: 'no-repeat'
        }}
      />
      {name}
    </div>
  );
};

export default WriteTypeWrapper;
