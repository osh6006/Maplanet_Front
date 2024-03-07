import { IHelperBoardPost } from '@/types';

const SERVER_URL = process.env.SERVER_URL;
const CLIENT_SEVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export async function getHelperBoardData(
  page?: number | string,
  searchType?: string,
  value?: string
) {
  if (!searchType) {
    const res = await fetch(`${SERVER_URL}/board1?page=${page}` as string, {
      cache: 'no-store'
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to getHelperBoardData');
    }

    console.log(res.json);
    return res.json();
  }

  if (searchType && value) {
    const res = await fetch(
      `${SERVER_URL}/board1/search?page=${page}&${searchType}=${value}` as string,
      {
        cache: 'no-store'
      }
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to getHelperBoardData');
    }

    return res.json();
  }
}

export async function getHelperBoardDetail(id: number) {
  const res = await fetch(`${SERVER_URL}/board1/detail/${id}` as string, {
    cache: 'no-store'
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to getHelperBoardDetail');
  }

  return res.json();
}

export async function postHelperBoard(boardData: IHelperBoardPost) {
  try {
    const res = await fetch(`${CLIENT_SEVER_URL}/board1/post`, {
      method: 'POST',
      body: JSON.stringify(boardData),
      headers: {
        'content-type': 'application/json'
      }
    });
    if (!res.ok) {
      throw new Error('Failed to PostHelperBoard');
    }
  } catch (error) {
    throw new Error('Failed to PostHelperBoard : ', error!);
  }
}
