import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/_libs/auth';
import { LogoutMenu } from './Logout';
import { LoginMenu } from './Login';
import * as style from './style';

/**
 * ヘッダー
 */
const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className={style.headerClass}>
      <h1>
        <Link href="/" className={style.headerLogoClass}>
          タスク管理
        </Link>
      </h1>
      <div className={style.headerButtonGroupClass}>{session ? <LogoutMenu /> : <LoginMenu />}</div>
    </header>
  );
};

export default Header;
