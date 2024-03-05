'use client';
import clsx from 'clsx';
import useSWR from 'swr';

import Link from 'next/link';
import Avatar from '../ui/avatar';
import Badge from '../ui/badge';
import Button from '../ui/button';
import Icon from '../ui/icon';
import Modal from './modal';
import Loading from '../ui/loading';

import { filterImageUrl } from '@/util/util';
import { IHelperBoardDetail } from '@/types/interfaces/helper';

interface IPostCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  postId: number;
}

const DL = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex items-center justify-around gap-x-2 whitespace-nowrap rounded-md px-1 py-2 text-center'>
      {children}
    </div>
  );
};
const DT = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-1 items-center gap-x-2 whitespace-nowrap text-lg font-semibold'>
      {children}
    </div>
  );
};

const DD = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-1 items-center justify-end whitespace-nowrap text-lg'>{children}</div>
  );
};

const PostCardModal: React.FunctionComponent<IPostCardModalProps> = ({
  isOpen,
  onClose,
  postId
}) => {
  // data fetching using swr
  const { data, error, isLoading } = useSWR<IHelperBoardDetail>(`/board1/detail/${postId}`);

  if (isLoading) {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <Loading size={100} />
      </Modal>
    );
  }

  if (error) {
    return <div>서버 에러!</div>;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <div className='flex flex-col gap-4'>
          <div className='flex justify-center gap-y-2'>
            <div className='flex flex-1 items-center gap-x-4'>
              <Avatar imgUrl={filterImageUrl(data?.discord_image!)} size={40} />
              <div className='flex flex-col gap-x-2'>
                <h1 className='text-xl'>{data?.discord_global_name}</h1>
                <div className='flex items-center gap-x-3'>
                  <div className='flex items-center gap-x-1'>
                    <Icon src={'/svgs/maple.svg'} alt='manner' size={15} />
                    <span>·</span>
                    <p>{data?.manner_count}</p>
                  </div>
                  <div className='flex items-center gap-x-1'>
                    <Icon src={'/svgs/un-manner.svg'} alt='unmanner' size={15} />
                    <span>·</span>
                    <p>{data?.report_count}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-1 items-center justify-between gap-x-2'>
              <Link
                href={`discord://discord.com/users/${data?.discord_id}`}
                target='_blanck'
                className='w-full'>
                <Button color='discord' size='wide'>
                  1:1 대화
                </Button>
              </Link>
              <Button
                color='lightGray'
                size='wide'
                onClick={() => {
                  // TODO : Move Profile
                  console.log('asdf');
                }}>
                프로필 보기
              </Button>
            </div>
          </div>

          <hr className='my-5' />

          <div className='grid flex-1 grid-cols-2 gap-x-4 '>
            <DL>
              <DT>퀘스트 종류</DT>
              <DD>
                <Badge
                  className={clsx(
                    'max-w-14 ',
                    data?.progress_kind === '잠쩔' ? 'bg-main' : 'bg-violet'
                  )}
                  size='card'>
                  {data?.progress_kind}
                </Badge>
              </DD>
            </DL>
            <DL>
              <DT>메소</DT>
              <DD>{data?.meso}</DD>
            </DL>
            <DL>
              <DT>사냥터</DT>
              <DD>{data?.hunting_ground}</DD>
            </DL>
            <DL>
              <DT>직업</DT>
              <DD>{data?.sub_job}</DD>
            </DL>
            <DL>
              <DT>레벨</DT>
              <DD>{data?.level}</DD>
            </DL>
            <DL>
              <DT>메이플 닉네임</DT>
              <DD>{data?.maple_nickname}</DD>
            </DL>
            <DL>
              <DT>자리유무</DT>
              <DD>{data?.position ? '있음' : '없음'}</DD>
            </DL>
            <DL>
              <DT>시간</DT>
              <DD>{data?.progress_time || 0}</DD>
            </DL>
          </div>
        </div>
        <div className='mt-4 rounded-lg bg-[#494949] px-5 py-5 text-base leading-7'>
          <p>{data?.title}</p>
        </div>
      </div>
    </Modal>
  );
};

export default PostCardModal;
