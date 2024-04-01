'use server';

import { cookies } from 'next/headers';
import { auth } from '@/libs/auth';

const SERVER_URL = process.env.SERVER_URL;

export async function GetMyProfileData(board: string, page: number) {
  const { user } = auth();

  if (user) {
    try {
      const res = await fetch(`${SERVER_URL}/myprofile/${board}?page=${page}` as string, {
        method: 'GET',
        headers: {
          Authorization: `${user?.token}`
        }
      });

      if (res.ok) {
        console.log('my profile data res status', res.status);
      }

      if (!res.ok) {
        throw new Error('Failed to get user profile data');
      }

      return res.json();
    } catch (error) {
      console.log(error);
    }
  }
}
