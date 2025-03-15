import { getSession } from '@/lib/session';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default async function middeleware(req: NextRequest) {
   const session = await getSession();
   if (!session || !session.user)
      return NextResponse.redirect(new URL('/auth/signin', req.url));
   return NextResponse.next();
}

export const config = {
   matcher: ['/profile', '/dashboard'],
};
