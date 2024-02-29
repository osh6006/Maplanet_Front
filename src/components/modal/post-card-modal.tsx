'use client';

import Avatar from '../ui/avatar';
import Button from '../ui/button';
import Icon from '../ui/icon';
import Modal from './modal';

import { faker } from '@faker-js/faker';

interface IPostCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  postId: number | number;
}

const PostCardModal: React.FunctionComponent<IPostCardModalProps> = ({ isOpen, onClose }) => {
  // data fetching using swr

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        className='relative min-w-[370px] max-w-2xl rounded-md bg-tableBackground px-10 py-14'
        onClick={(e) => e.stopPropagation()}>
        <button className='absolute right-5 top-5' onClick={onClose}>
          <Icon size={25} src='/svgs/x.svg' alt='X' />
        </button>

        <div className='flex flex-col gap-4 sm:flex-row'>
          <div className='flex basis-[30%] flex-col items-center gap-y-2'>
            <Avatar imgUrl={faker.image.avatarGitHub()} size={100} />
            <h1 className='text-xl'>축지법 아저씨</h1>
            <div className='flex items-center justify-center gap-x-2'>
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
          <div className='grid flex-1 grid-cols-3 gap-2'>
            <dl className='flex flex-col items-center justify-center rounded-md border text-center'>
              <dt className='flex items-center justify-center gap-x-2 text-sm'>퀘스트 종류</dt>
              <dd className='text-lg font-semibold'>심쩔</dd>
            </dl>
            <dl className='flex flex-col items-center justify-center rounded-md border text-center'>
              <dt className='flex items-center justify-center gap-x-2 text-sm'>
                <Icon src='/svgs/money.svg' size={15} alt='meso' />
                메소
              </dt>
              <dd className='text-lg font-semibold'>1000000</dd>
            </dl>
            <dl className='flex flex-col items-center justify-center rounded-md border text-center'>
              <dt className='flex items-center justify-center gap-x-2 text-sm'>사냥터</dt>
              <dd className='text-lg font-semibold'>죽은 나무의 숲4</dd>
            </dl>
            <dl className='flex flex-col items-center justify-center rounded-md border text-center'>
              <dt className='flex items-center justify-center gap-x-2 text-sm'>직업</dt>
              <dd className='text-lg font-semibold'>클레릭</dd>
            </dl>
            <dl className='flex flex-col items-center justify-center rounded-md border text-center'>
              <dt className='flex items-center justify-center gap-x-2 text-sm'>레벨</dt>
              <dd className='text-lg font-semibold'>56</dd>
            </dl>
            <dl className='flex flex-col items-center justify-center rounded-md border text-center'>
              <dt className='flex items-center justify-center gap-x-2 text-sm'>닉네임</dt>
              <dd className='text-lg font-semibold'>지발돈좀</dd>
            </dl>
            <dl className='flex flex-col items-center justify-center rounded-md border text-center'>
              <dt className='flex items-center justify-center gap-x-2 text-sm'>자리유무</dt>
              <dd className='text-lg font-semibold'>없음</dd>
            </dl>
            <dl className='flex flex-col items-center justify-center rounded-md border text-center'>
              <dt className='flex items-center justify-center gap-x-2 text-sm'>시간</dt>
              <dd className='text-lg font-semibold'>5시간</dd>
            </dl>
          </div>
        </div>
        <div className='mt-4 text-base'>
          1 시간당 메소 150만에 4시간 해드립니다. 사기 절대 없고, 매너지수 보시면 알겠지만
          메크로같은거 안돌립니다. 1 시간당 메소 150만에 4시간 해드립니다. 사기 절대 없고,{' '}
        </div>
      </div>
    </Modal>
  );
};

export default PostCardModal;
