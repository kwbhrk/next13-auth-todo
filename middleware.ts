export { default } from 'next-auth/middleware';

// api・loginは認証チェック&リダイレクト対象から外す
export const config = {
  matcher: ['/((?!api|login|signup).*)'],
};
