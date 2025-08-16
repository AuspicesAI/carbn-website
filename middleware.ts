import { NextResponse, NextRequest } from 'next/server';

// Canonicalize host to WWW domain to align with Amplify Hosting redirect
// Redirect auspicesai.com -> www.auspicesai.com (308 permanent)
export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get('host');

  if (host === 'auspicesai.com') {
    url.host = 'www.auspicesai.com';
    url.protocol = 'https:';
    return NextResponse.redirect(url, { status: 308 });
  }

  return NextResponse.next();
}

// Skip middleware for static assets and API routes if desired
export const config = {
  matcher: [
    // Run on all paths except _next static files and assets
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
