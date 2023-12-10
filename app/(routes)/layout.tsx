import './global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/app/_components/layouts/Header';
import AuthProvider from '@/app/_components/provider/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'タスク',
  description: 'タスク管理アプリケーション',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          {children}
          <div id="modal"></div>
        </AuthProvider>
      </body>
    </html>
  );
}
