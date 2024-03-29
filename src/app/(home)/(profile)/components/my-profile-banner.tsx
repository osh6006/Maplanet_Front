import Avatar from '@/components/ui/avatar';
import Inner from '@/components/ui/inner';
import * as React from 'react';
import { filterImageUrl } from '@/util/util';
import { GetMyProfileData } from '@/actions/my-profile';


interface IMyProfileBannerProps {
  board: string;
  page: number;
}

const MyProfileBanner: React.FunctionComponent<IMyProfileBannerProps> = async ({ board, page }) => {
  console.log('My profile banner', board, page)
  const data = await GetMyProfileData(board, page)
  
  return (
    <div className='flex h-[193px] items-center bg-[#000]'>
      <Inner>
        <div className='flex w-[50%] items-center justify-between'>
          <div className='flex'>
            <Avatar imgUrl={filterImageUrl(data.myProfile.discord_image)} size={80} />
            <div className='ml-[20px] flex  flex-col justify-center '>
              <div className='mb-2 flex items-end gap-3'>
                <h1 className='text-[28px] font-bold'>{data.myProfile.discord_global_name}</h1>
                <span className='pb-[2px]'>#{data.myProfile.discord_username}</span>
              </div>
              <div className='flex gap-x-1'>
                <p className='rounded-[3px] bg-main px-[6px] py-[2px] text-[12px]'>
                  심쩔{data.myProfile.progress_count}회진행
                </p>
                <div className='flex items-center gap-x-1'>
                  <p className='rounded-[3px] bg-[#cd6133] px-[6px] py-[2px] text-[12px]'>
                    매너 지수 {data.myProfile.manner_count}
                  </p>
                </div>
                <div className='flex items-center gap-x-1'>
                  <p className='rounded-[3px] bg-red px-[6px] py-[2px] text-[12px]'>
                    전과 {data.myProfile.report_count}범
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Inner>
    </div>
  );
};

export default MyProfileBanner;