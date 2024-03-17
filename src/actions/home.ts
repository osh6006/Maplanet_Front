// useSWR 방식

import { IHelperBoard, IHunterBoard } from '@/types';
import { IVisitorsData } from '@/types/interfaces/visitors';

// const SERVER_URL = process.env.SERVER_URL;

import useSWR from 'swr';

interface SWRResponse {
  data: any;
  error: any;
  isLoading: boolean;
}

interface IHomeDataDetail {
  board1Data: IHelperBoard[];
  board2Data: IHunterBoard[];
  visitorsData: IVisitorsData[];
}

function GetHomeData(): SWRResponse {
  // SWR내의 에러는 API서버에서 내려온 에러를 의미
  const { data, error } = useSWR<IHomeDataDetail>(`/main`);
  return {
    data,
    error,
    isLoading: !error && !data
  };
}

// 일반 fetch 방식

// interface IHomeDataProps {
//   board1Data: IHelperBoard[];
//   board2Data: IHunterBoard[];
//   visitorsData: IVisitorsData[];
// }

// async function GetHomeData(): Promise<IHomeData> {
//   try {
//     const response = await fetch(`${SERVER_URL}/main` as string, {
//       cache: 'force-cache'
//     });
//     if (!response.ok) {
//       throw new Error('Failed to get homepage data.');
//     }
//     const data = await response.json();

//     return data;
//   } catch {
//     throw new Error('Failed to get homepage data.');
//   }
// }

export default GetHomeData;
