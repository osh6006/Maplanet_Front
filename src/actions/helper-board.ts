const SERVER_URL = process.env.SERVER_URL;

export async function getHelperBoardData(page?: string, searchType?: string, value?: string) {
  if (!searchType) {
    const res = await fetch(`${SERVER_URL}/board1?page=${page}` as string, {
      cache: 'force-cache'
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to getHelperBoardData');
    }

    return res.json();
  }

  if (searchType && value) {
    console.log(`${SERVER_URL}/board1/search?page=${page}&${searchType}=${value}`);

    const res = await fetch(
      `${SERVER_URL}/board1/search?page=${page}&${searchType}=${value}` as string,
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

export async function getHelperBoardDetail(id: number) {
  const res = await fetch(`${SERVER_URL}/board1/detail/${id}` as string, {
    cache: 'force-cache'
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to getHelperBoardDetail');
  }

  return res.json();
}
