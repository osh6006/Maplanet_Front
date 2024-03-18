'use client';

import Avatar from '@/components/ui/avatar';
import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Inner from '@/components/ui/inner';
import * as React from 'react';
import Link from 'next/link';
import Spinner from '@/components/ui/spinner';
import GetProfileData from '@/actions/profile';
import { IBoard1ProfileResponse, IUserProfileData } from '@/types/interfaces/profile';
import { MannerCount } from '@/actions/manner-count';

interface IProfileBannerProps {
  type: string;
  board: string;
  userId: number;
  page: number;
}

const ProfileBanner: React.FunctionComponent<IProfileBannerProps> = ({ board, userId, page }) => {
  const { data, isLoading, error } = GetProfileData(board, userId, page) as {
    data: IBoard1ProfileResponse;
    isLoading: boolean;
    error: any;
  };

  if (isLoading) return <Spinner></Spinner>;

  if (error) return <div>에러가 발생했습니다.</div>;

  const mannerIncreaseOrDecrease = async (userId: number) => {
    console.log('userId:', userId);
    await MannerCount(userId);
  };
  return (
    <div className='flex h-[193px] items-center bg-[#000]'>
      <Inner>
        <div className='flex w-[50%] items-center justify-between'>
          <div className='flex'>
            <Avatar imgUrl={data.userProfile.discord_image} size={80} />
            <div className='ml-[20px] flex  flex-col justify-center '>
              <div className='mb-2 flex items-end gap-3'>
                <h1 className='text-[28px] font-bold'>{data.userProfile.discord_global_name}</h1>
                {/* FIXME: username # 위치 물어보기 */}
                <span className='pb-[2px]'>#{data.userProfile.discord_username}</span>
              </div>
              <div className='flex gap-x-1'>
                <p className='rounded-[3px] bg-main px-[6px] py-[2px] text-[12px]'>
                  심쩔{data.userProfile.progress_count}회진행
                </p>
                <div className='flex items-center gap-x-1'>
                  <p className='rounded-[3px] bg-[#cd6133] px-[6px] py-[2px] text-[12px]'>
                    매너 지수 {data.userProfile.manner_count}
                  </p>
                </div>
                <div className='flex items-center gap-x-1'>
                  <p className='rounded-[3px] bg-red px-[6px] py-[2px] text-[12px]'>
                    전과 {data.userProfile.report_count}범
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex w-[200px] flex-col items-center justify-center gap-y-2 text-nowrap px-4'>
            <Button color='discord' size='wide'>
              <Link
                href={`discord://discord.com/users/${data.userProfile.discord_id}`}
                target='_blanck'
                className='flex items-center justify-center gap-2'>
                <Icon src='/svgs/discord-icon.svg' alt='discordIcon' size={20} />
                1:1 대화
              </Link>
            </Button>
            <Button
              color='lightGray'
              size='wide'
              onClick={async () => await mannerIncreaseOrDecrease(userId)}>
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
