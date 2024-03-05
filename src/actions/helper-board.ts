const SERVER_URL = process.env.SERVER_URL;

export async function getHelperBoardData(page?: string) {
  const res = await fetch(`${SERVER_URL}/board1` as string, {
    cache: 'force-cache'
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
