'use client';

import Avatar from '../ui/avatar';
import Badge from '../ui/badge';
import Button from '../ui/button';
import Icon from '../ui/icon';
import Modal from './modal';

import { faker } from '@faker-js/faker';

interface IPostCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  postId: number | number;
}

const DL = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex items-center justify-around gap-x-2 rounded-md px-1 py-2 text-center'>
      {children}
    </div>
  );
};
const DT = ({ children }: { children: React.ReactNode }) => {
  return <div className='flex flex-1 items-center gap-x-2 text-lg font-semibold'>{children}</div>;
};

const DD = ({ children }: { children: React.ReactNode }) => {
  return <div className='flex flex-1 items-center justify-end text-lg'>{children}</div>;
};

const PostCardModal: React.FunctionComponent<IPostCardModalProps> = ({ isOpen, onClose }) => {
  // data fetching using swr

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <div className='flex flex-col gap-4'>
          <div className='flex justify-center gap-y-2'>
            <div className='flex flex-1 items-center gap-x-4'>
              <Avatar imgUrl={faker.image.avatarGitHub()} size={40} />
              <div className='flex flex-col gap-x-2'>
                <h1 className='text-xl'>축지법 아저씨</h1>
                <div className='flex items-center gap-x-3'>
                  <div className='flex items-center gap-x-1'>
                    <Icon src={'/svgs/maple.svg'} alt='manner' size={15} />
                    <span>·</span>
                    <p>{13}</p>
                  </div>
                  <div className='flex items-center gap-x-1'>
                    <Icon src={'/svgs/un-manner.svg'} alt='unmanner' size={15} />
                    <span>·</span>
                    <p>{14}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-1 items-center justify-between gap-x-2'>
              <Button
                color='discord'
                size='wide'
                onClick={() => {
                  // TODO : Move Profile
                  console.log('asdf');
                }}>
                1:1 대화
              </Button>
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
                <Badge className='max-w-14 bg-main' size='card'>
                  심쩔
                </Badge>
              </DD>
            </DL>
            <DL>
              <DT>메소</DT>
              <DD>1000000</DD>
            </DL>
            <DL>
              <DT>사냥터</DT>
              <DD>죽은 나무의 숲4</DD>
            </DL>
            <DL>
              <DT>직업</DT>
              <DD>클레릭</DD>
            </DL>
            <DL>
              <DT>레벨</DT>
              <DD>56</DD>
            </DL>
            <DL>
              <DT>메이플 닉네임</DT>
              <DD>지발돈좀</DD>
            </DL>
            <DL>
              <DT>자리유무</DT>
              <DD>없음</DD>
            </DL>
            <DL>
              <DT>시간</DT>
              <DD>5시간</DD>
            </DL>
          </div>
        </div>
        <div className='mt-4 rounded-lg bg-[#494949] px-5 py-5 text-base leading-7'>
          <p>
            1 시간당 메소 150만에 4시간 해드립니다. 사기 절대 없고, 매너지수 보시면 알겠지만
            메크로같은거 안돌립니다. 1 시간당 메소 150만에 4시간 해드립니다. 사기 절대 없고,{' '}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default PostCardModal;
