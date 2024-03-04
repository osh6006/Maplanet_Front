import useSWR from 'swr';

interface SWRResponse {
  data: any;
  error: any;
  isLoading: boolean;
}

function MainpageFetcher(): SWRResponse {
  // SWR내의 에러는 API서버에서 내려온 에러를 의미
  const { data, error } = useSWR(`/main`);
  return {
    data,
    error,
    isLoading: !error && !data
  };
}

export default MainpageFetcher;
