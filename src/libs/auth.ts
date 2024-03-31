import { cookies } from 'next/headers';

export function auth() {
  const cookiesList = cookies();
  const hasTokenCookie = cookiesList.has('Authorization');
  const accessToken = hasTokenCookie ? cookiesList.get('Authorization')?.value : null;

  return {
    user: accessToken ? { token: accessToken } : null
  };
}