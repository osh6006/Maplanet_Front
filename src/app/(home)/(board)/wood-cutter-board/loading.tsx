import Loading from '@/components/ui/loading';

export default function loading() {
  return (
    <div className='mt-20 flex h-[500px] items-center justify-center '>
      <Loading size={150} />
    </div>
  );
}
