import Sort from '../components/sort';
import PostBanner from '@/app/(home)/(board)/components/post-banner';
import Search from '../components/search';
import PostCard from '@/app/(home)/(board)/components/post-card';
import Pagination from '../components/pagination';

interface IHelperBoardPageProps {}

const HelperBoardPage: React.FunctionComponent<IHelperBoardPageProps> = async ({
  searchParams
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  // TODO : fetch data using searchParams

  return (
    <div className=''>
      <PostBanner title='쩔 게시판' imgUrl='/images/banner.png' />

      <div className='mx-auto max-w-[500px] sm:max-w-[670px] lg:max-w-[1000px] xl:max-w-[1440px] xl:px-20'>
        <div className='mt-8 flex w-full flex-col justify-between gap-y-4 px-10 sm:flex-row sm:px-0'>
          <Sort
            options={[
              {
                name: '최신 순',
                value: 'recently',
                icon: undefined
              },
              {
                name: '가격 순',
                value: 'recently  ',
                icon: undefined
              }
            ]}
          />
          <Search
            filters={[
              {
                value: 'searchMeso',
                name: '메소',
                imgUrl: ''
              },
              {
                value: 'searchTitle',
                name: '제목',
                imgUrl: ''
              },
              {
                value: 'searchNickname',
                name: '닉네임',
                imgUrl: ''
              },
              {
                value: 'searchHuntingGround',
                name: '사냥터',
                imgUrl: ''
              },
              {
                value: 'searchLevel',
                name: '레벨',
                imgUrl: ''
              },
              {
                value: 'searchSubJob',
                name: '서브 직업',
                imgUrl: ''
              },
              {
                value: 'searchProgressKind',
                name: '진행 상태',
                imgUrl: ''
              },
              {
                value: 'searchProgressTime',
                name: '진행 시간',
                imgUrl: ''
              },
              {
                value: 'searchDiscordName',
                name: '디스코드 이름',
                imgUrl: ''
              }
            ]}
          />
        </div>

        <div className='mx-10 mt-4 grid grid-cols-1 place-items-center gap-7 sm:mx-0 sm:grid-cols-2 sm:place-items-start lg:grid-cols-3 xl:grid-cols-4'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
            <PostCard
              type='잠쩔'
              date='2024-04-12'
              title='1시간당 메소 150만에 4시간 해드립니다.'
              meso='100,000,000'
              subjob='스피어 맨'
              map='죽은 나무의 숲 4'
              time='4시간'
              nickName='축지법 아저씨'
              manner={44}
              unManner={2}
              view={20}
              avatarUrl=''
              completed={false}
              key={el}
            />
          ))}
        </div>
        <Pagination totalPost={123} itemsPerPage={5} />
      </div>
    </div>
  );
};

export default HelperBoardPage;
