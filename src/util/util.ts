import useSWR from 'swr'

const url = 'http://13.209.210.215:3000/main';
const fetcher = (url: string) => fetch(url).then(res => res.json())

interface FetchMainpageDataResult {
  data: any;
  isLoading: boolean;
  error: boolean;
}

// 메인페이지 쩔 데이터 가져오기
export const FetchMainPageData = (): FetchMainpageDataResult => {
  const { data, error, isLoading } = useSWR(`${url}`, fetcher)

  return {
    data,
    isLoading,
    error,
  }
}