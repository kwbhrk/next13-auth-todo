import Link from 'next/link';
import { ButtonClass } from './style';
import { ButtonProps } from './type';

export const Button = (props: ButtonProps) => {
  const { onClick, isLink, href, children, ...otherProps } = props;

  // リンクのみのボタン
  if (isLink && href) {
    return (
      <Link href={href} className={ButtonClass(otherProps)}>
        {children}
      </Link>
    );
  }

  // クリックイベントも設定したボタン
  return (
    <button className={ButtonClass(otherProps)} onClick={onClick}>
      {children}
    </button>
  );
};
