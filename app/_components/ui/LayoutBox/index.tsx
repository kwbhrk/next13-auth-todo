import { LayoutBoxProps } from './type';
import { LayoutBoxClass } from './style';

export const LayoutBox = ({ children, ...otherProps }: LayoutBoxProps) => (
  <div className={LayoutBoxClass(otherProps)}>{children}</div>
);
