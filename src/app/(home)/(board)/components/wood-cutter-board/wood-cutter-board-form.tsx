'use client';

import usePost from '@/hooks/use-post';
import { IWoodCutterBoardPost } from '@/types';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IWoodCutterBoardFormProps {}

const WoodCutterBoardForm: React.FunctionComponent<IWoodCutterBoardFormProps> = (props) => {
  const { control, handleSubmit } = useForm<IWoodCutterBoardPost>();
  const { isLoading, setIsLoading, isError, setIsError } = usePost();
  const router = useRouter();

  const onSubmit: SubmitHandler<IWoodCutterBoardPost> = async (data) => {
    setIsLoading(true);
    try {
      if (data.meso === '협의 가능') {
        const newData = { ...data, meso: null };
        // TODO : fetch New Data
        setIsLoading(false);
      } else {
        // TODO : fetch data
        setIsLoading(false);
      }

      router.back();
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return <form></form>;
};

export default WoodCutterBoardForm;
