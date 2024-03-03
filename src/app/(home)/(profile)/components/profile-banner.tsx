import Avatar from '@/components/ui/avatar';
import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Inner from '@/components/ui/inner';
import * as React from 'react';
import { faker } from '@faker-js/faker';

interface IProfileBannerProps {}

const ProfileBanner: React.FunctionComponent<IProfileBannerProps> = (props) => {
  return (
    <div className='flex h-[193px] items-center bg-[#000]'>
      <Inner>
        <div className='flex w-[50%] items-center justify-between'>
          <div className='flex'>
            <Avatar imgUrl={faker.image.avatarGitHub()} size={80} />
            <div className='flex flex-col  justify-center ml-[20px] '>
              <div className='flex gap-3 items-end mb-2'>
                <h1 className='text-[28px] font-bold'>축지법 아저씨</h1>
                <span className='pb-[2px]'>#brian_1#2323</span>
              </div>
              <div className='flex gap-x-1'>
                <p className='text-[12px] bg-main rounded-[3px] px-[6px] py-[2px]'>
                  잠쩔50회진행
                </p>
                <div className='flex items-center gap-x-1'>
                  {/* <Icon src={'/svgs/maple.svg'} alt='manner' size={15} />
                  <span>·</span> */}
                  <p className='text-[12px] bg-[#cd6133] rounded-[3px] px-[6px] py-[2px]'>매너 지수 4</p>
                </div>
                <div className='flex items-center gap-x-1'>
                  {/* <Icon src={'/svgs/un-manner.svg'} alt='unmanner' size={15} />
                  <span>·</span> */}
                  <p className='text-[12px] bg-red rounded-[3px] px-[6px] py-[2px]'>전과 3범</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col w-[200px] items-center justify-center gap-y-2 text-nowrap px-4'>
            <Button color='discord' size='wide'>
              <Icon src='/svgs/discord-icon.svg' alt='discordIcon' size={20} />
              1:1 대화
            </Button>
            <Button color='lightGray' size='wide'>
              매너 추천
            </Button>
            <Button color='lightGray' size='wide'>
              유저 신고하기
            </Button>
          </div>
        </div>
      </Inner>
    </div>
  );
};

export default ProfileBanner;
