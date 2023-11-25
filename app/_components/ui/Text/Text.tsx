import type { TextProps } from './type';
import { TextClass } from './style';

export const Text = ({ children, ...otherProps }: TextProps) => (
  <span className={TextClass(otherProps)}>{children}</span>
);
