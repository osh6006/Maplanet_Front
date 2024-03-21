import {
  IBoard1ProfileResponse,
  IBoard2ProfileResponse,
  IBoard3ProfileResponse,
  IBoard4ProfileResponse
} from '@/types/interfaces/profile';

import useSWR from 'swr';

// export async function getProfileData(board: string, userId: number, page: number) {
//   try {
//     const res = await fetch(`${SERVER_URL}/userprofile/${board}/${userId}?page=${page}` as string, {
//       cache: 'force-cache'
//     });
//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to get user profile banner data');
//     }
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     throw new Error('Failed to get user profile banner data');
//   }
// }

interface SWRResponse {
  data: any;
  error: any;
  isLoading: boolean;
}

function GetProfileData(board: string, userId: number, page: number): SWRResponse {
  // SWR내의 에러는 API서버에서 내려온 에러를 의미
  const { data, error } = useSWR(`/userprofile/${board}/${userId}?page=${page}`);

  return {
    data,
    error,
    isLoading: !error && !data
  };
}

export default GetProfileData;
