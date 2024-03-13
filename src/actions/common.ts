const SERVER_URL = process.env.SERVER_URL;
const CLIENT_SEVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

interface ICommonFetchParam {
  url: string;
  option?: RequestInit | undefined;
}

interface IBoardFetchParam extends ICommonFetchParam {
  page?: number | string;
  searchType?: string;
  value?: string;
}

export async function fetchBoardData<T>({
  url,
  option,
  page,
  searchType,
  value
}: IBoardFetchParam): Promise<T | undefined> {
  if (!searchType) {
    const res = await fetch(`${SERVER_URL}${url}?page=${page}` as string, option);

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error(`Sent the data to "${url}" url, but an error seems to have occurred.`);
    }

    console.log(res.json);
    return res.json();
  }

  if (searchType && value && url) {
    const res = await fetch(
      `${SERVER_URL}${url}/search?page=${page}&${searchType}=${value}` as string,
      {
        cache: 'no-store'
      }
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error(`Sent the data to "${url}/search" url, but an error seems to have occurred.`);
    }

    return res.json();
  }
}
export async function publicGetData<T>(url: string) {}

export async function privatePostData<T>(formData: T) {}
