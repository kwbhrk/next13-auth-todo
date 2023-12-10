import type { TextProps } from './type';
import { TextClass } from './style';

export const Text = ({ children, ...restProps }: TextProps) => (
  <span className={TextClass(restProps)}>{children}</span>
);
