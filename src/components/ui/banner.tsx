interface IBannerProps {
  title: string;
  imgUrl?: string;
}

const Banner: React.FunctionComponent<IBannerProps> = ({ imgUrl, title }) => {
  return (
    <div className='relative flex h-[200px] w-[100dvw] items-center justify-center  '>
      <div
        className='absolute bottom-0 left-0 right-0 top-0  blur-sm'
        style={{
          backgroundImage: `url(${imgUrl})`,
          // other styles
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}></div>
      <div className='absolute -bottom-2 left-0 right-0 top-0 bg-black/55'></div>
      <h1 className='z-[2] text-[40px] font-bold'>{title}</h1>
    </div>
  );
};

export default Banner;
