const SERVER_URL = process.env.SERVER_URL;

export async function getNotice(page?: string) {
  try {
    const res = await fetch(`${SERVER_URL}?page=${page}` as string, {
      cache: 'no-store'
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to getNotice');
    }
    return res.json();
  } catch (error) {
    throw new Error('Failed to getNotice');
  }
}
