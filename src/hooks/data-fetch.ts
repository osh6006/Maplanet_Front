import useSWR from 'swr';

const url = 'http://13.209.210.215:3000';

const fetcher = async (url: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

function MainpageFetcher() {
  const { data, error } = useSWR(`${url}/main`, fetcher);

  return {
    data,
    error,
    isLoading: !error && !data,
  };
}

export default MainpageFetcher;
