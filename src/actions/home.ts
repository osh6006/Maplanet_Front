// useSWR 방식으로 데이터를 가져오는 방법

import useSWR from 'swr';



// 자주 동적으로 업데이트를 해야되는 경우에는 useSWR을 사용하는 것이 좋다. client side rendering을 위해서
function GetHomeData()  {
  // SWR내의 에러는 API서버에서 내려온 에러를 의미
  const { data, error, isLoading } = useSWR(`/main`);

  return {
    data,
    error,
    isLoading,
  };
}

// 일반 fetch 방식 

// interface IHomeDataProps {
//   board1Data: IHelperBoard[];
//   board2Data: IHunterBoard[];
//   board3Data: IWoodBoard[];
//   board4Data: IPartyBoard[];
//   visitorsData: IVisitorsData[];
// }

// async function GetHomeData(): Promise<IHomeDataProps> {
//   try {
//     const response = await fetch(`${SERVER_URL}/main` as string, {});
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
