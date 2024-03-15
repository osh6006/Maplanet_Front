import toast from 'react-hot-toast';

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
  try {
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
        throw new Error(
          `Sent the data to "${url}/search" url, but an error seems to have occurred.`
        );
      }

      return res.json();
    }
  } catch (error) {
    throw new Error(`Sent the data to "${url}/search" url, but an error seems to have occurred.`);
  }
}

interface IBoardDetailFetchParam<T> extends ICommonFetchParam {
  url: string;
  data: T;
}

export async function postBoardData<T>({
  url,
  data
}: IBoardDetailFetchParam<T>): Promise<boolean | undefined> {
  console.log(data);
  console.log(url);

  try {
    const res = await fetch(`https://maplanet.store${url}/post` as string, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TEMP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error(`Sent the data to "${url}/post" url, but an error seems to have occurred.`);
    }

    return true;
  } catch (error) {
    throw new Error(`Sent the data to "${url}/post" url, but an error seems to have occurred.`);
  }
}
