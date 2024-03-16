import { RequestCookies, ResponseCookies } from 'next/dist/compiled/@edge-runtime/cookies';
import { NextRequest, NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const res = NextResponse.next({
    request: {
      headers: new Headers(request.headers)
    }
  });
  const cookie = request.cookies.get('Authorization')?.value;

  if (cookie) {
    const res = NextResponse.redirect(request.url);
    applySetCookie(request, res);
    return res;
  }

  return res;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/'
};

function applySetCookie(req: NextRequest, res: NextResponse): void {
  const resCookies = new ResponseCookies(res.headers);
  const newReqHeaders = new Headers(req.headers);
  const newReqCookies = new RequestCookies(newReqHeaders);

  resCookies.getAll().forEach((cookie) => newReqCookies.set(cookie));

  NextResponse.next({
    request: { headers: newReqHeaders }
  }).headers.forEach((value, key) => {
    if (key === 'x-middleware-override-headers' || key.startsWith('x-middleware-request-')) {
      res.headers.set(key, value);
    }
  });
}
