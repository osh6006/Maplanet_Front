'use server';

import { auth } from '@/libs/auth';

const SERVER_URL = process.env.SERVER_URL;

export async function CompleteMyPost(boardType: string, board_id: number) {
  // token check
  const { user } = auth();

  if (!user) {
    throw new Error('You must be logged in to complete a post.')
  }

  if (user) {
    try {
      console.log(boardType, board_id, user.token);

      const res = await fetch(`${SERVER_URL}/${boardType}/complete/${board_id}` as string, {
        method: 'PATCH',
        headers: {
          Authorization: `${user.token}`
        },
      });

      // mutate data 

      if (res.ok) {
        console.log(res.status)
      }

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
