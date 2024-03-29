'use server';

import { cookies } from 'next/headers';

const SERVER_URL = process.env.SERVER_URL;

export async function CompleteMyPost(boardType: string, board_id: number) {
  const cookiesList = cookies();
  const hasTokenCookie = cookiesList.has('Authorization');
  const accessToken = cookiesList.get('Authorization')?.value;

  if (accessToken && hasTokenCookie) {
    try {
      console.log(boardType, board_id)

      const res = await fetch(`${SERVER_URL}/${boardType}/complete/${board_id}` as string, {
        method: 'PATCH',
        headers: {
          Authorization: `${accessToken}`
        }
      });

      if (res.ok) console.log('complete post res status', res.status);

      if (!res.ok) {
        throw new Error('Failed to complete my post');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
