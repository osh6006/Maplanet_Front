const SERVER_URL = process.env.SERVER_URL;
const CLIENT_SEVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export async function getPartyBoardData(
  page?: number | string,
  searchType?: string,
  value?: string
) {
  if (!searchType) {
    const res = await fetch(`${SERVER_URL}/board4?page=${page}` as string, {
      cache: 'no-store'
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to getPartyBoardData');
    }

    return res.json();
  }

  if (searchType && value) {
    const res = await fetch(
      `${SERVER_URL}/board4/search?page=${page}&${searchType}=${value}` as string,
      {
        cache: 'no-store'
      }
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to getPartyBoardData');
    }

    return res.json();
  }

  return [];
}

export async function getPartyBoardDetail(id: number) {
  try {
    const res = await fetch(`${SERVER_URL}/board4/detail/${id}` as string, {
      cache: 'no-store'
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to getPartyBoardDetail');
    }

    return res.json();
  } catch (error) {
    throw new Error('Failed to getPartyBoardDetail : ', error!);
  }
}
