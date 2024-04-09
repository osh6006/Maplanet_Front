'use client';

import Avatar from '@/components/ui/avatar';
import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Inner from '@/components/ui/inner';
import Link from 'next/link';
import Spinner from '@/components/ui/spinner';
import GetProfileData from '@/actions/profile';
import { IBoard1ProfileResponse } from '@/types/interfaces/profile';
import ReportCount from '@/actions/report';
import { MannerCount } from '@/actions/manner-count';
import { filterImageUrl } from '@/util/util';

interface IProfileBannerProps {
  type: 'my' | 'user';
  board: string;
  userId: number;
  page: number;
}

const ProfileBanner: React.FunctionComponent<IProfileBannerProps> = ({
  board,
  userId,
  page,
  type
}) => {
  const { data, mutate, isLoading, error } = GetProfileData(board, userId, page) as {
    data: IBoard1ProfileResponse;
    mutate: any;
    isLoading: boolean;
    error: any;
  };

  if (isLoading) return <Spinner></Spinner>;

  if (error) return <div>에러가 발생했습니다.</div>;

  const mannerIncreaseOrDecrease = async (userId: number) => {
    await MannerCount(userId);
    mutate({ ...data, manner_count: data.userProfile.manner_count });
  };

  const reportIncreaseOrDecrease = async (userId: number) => {
    await ReportCount(userId);
    mutate({ ...data, report_count: data.userProfile.report_count });
  };

  return (
    <div className='flex h-[193px] items-center bg-[#000]'>
      <Inner>
        <div className='flex w-[50%] items-center justify-between'>
          <div className='flex'>
            <Avatar imgUrl={filterImageUrl(data.userProfile.discord_image)} size={80} />
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

          {type === 'user' ? (
            <div className='flex w-[200px] flex-col items-center justify-center gap-y-2 text-nowrap px-4'>
              <Button color='discord' size='wide'>
                <Link
                  href={`discord://discord.com/users/${data.userProfile.discord_id}`}
                  target='_blanck'
                  className='flex items-center justify-center gap-2'>
                  <Icon src='/svgs/discord-icon.svg' alt='discordIcon' width={20} height={20} />
                  1:1 대화
                </Link>
              </Button>
              <Button
                color='lightGray'
                size='wide'
                onClick={() => mannerIncreaseOrDecrease(userId)}>
                매너 추천
              </Button>
              <Button
                color='lightGray'
                size='wide'
                onClick={() => reportIncreaseOrDecrease(userId)}>
                유저 신고하기
              </Button>
            </div>
          ) : null}
        </div>
      </Inner>
    </div>
  );
};

export default ProfileBanner;
