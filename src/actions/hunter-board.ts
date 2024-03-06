import { IHunterBoardPost } from '@/types';

const SERVER_URL = process.env.SERVER_URL;
const CLIENT_SEVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export async function getHunterBoardData(page?: string, searchType?: string, value?: string) {
  if (!searchType) {
    const res = await fetch(`${SERVER_URL}/board2?page=${page}` as string, {
      cache: 'force-cache'
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to getHelperBoardData');
    }

    return res.json();
  }

  if (searchType && value) {
    const res = await fetch(
      `${SERVER_URL}/board2/search?page=${page}&${searchType}=${value}` as string,
      {
        cache: 'force-cache'
      }
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to getHelperBoardData');
    }

    return res.json();
  }
}

export async function postHunterBoard(boardData: IHunterBoardPost) {
  try {
    const res = await fetch(`${CLIENT_SEVER_URL}/board2/post`, {
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
