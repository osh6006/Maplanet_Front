'use server';

import { cookies } from 'next/headers';

const SERVER_URL = process.env.SERVER_URL;

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
}: IBoardDetailFetchParam<T>): Promise<
  { isError: boolean; message: string; error?: any } | undefined
> {
  const cookieStore = cookies();
  const cookie = cookieStore.get('Authorization');

  console.log(cookie?.value);

  try {
    const res = await fetch(`${SERVER_URL}${url}` as string, {
      method: 'POST',
      headers: {
        Authorization: `${cookie?.value}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    });

    if (!res.ok) {
      const result = await res.json();

      console.log(result);

      return {
        isError: true,
        message:
          result.message || `Sent the data to "${url}" url, but an error seems to have occurred.`,
        error: result.error
      };
    }

    const result = await res.json();

    return {
      isError: false,
      message: result.msg || `등록에 성공 하였습니다.`
    };
  } catch (error) {
    return {
      isError: true,
      message: `Sent the data to "${url}/post" url, but an error seems to have occurred.`,
      error: error
    };
  }
}
