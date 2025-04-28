import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Helper: Check if the user is authenticated (based on a cookie)
function isAuthenticated(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  return !!token; // If token exists, user is authenticated
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // --- 1. Logging each request ---
  console.log(`[Middleware] Incoming request: ${pathname}`);

  // --- 2. Protect specific routes ---
  if (pathname.startsWith('/dashboard') || pathname.startsWith('/admin')) {
    if (!isAuthenticated(request)) {
      console.log(`[Middleware] Unauthorized access attempt: ${pathname}`);

      // Redirect to login if not authenticated
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('from', pathname); // optional: to remember where user came from
      return NextResponse.redirect(loginUrl);
    }
  }

  // --- 3. Example: Redirect '/' to '/home' ---
  if (pathname === '/') {
    console.log(`[Middleware] Redirecting / to /home`);
    return NextResponse.redirect(new URL('/home', request.url));
  }

  // --- 4. Otherwise, continue normally ---
  return NextResponse.next();
}

// Run middleware only for these routes
export const config = {
  matcher: ['/', '/dashboard/:path*', '/admin/:path*', '/home'],
};
