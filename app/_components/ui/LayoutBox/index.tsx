import { LayoutBoxProps } from './type';
import { LayoutBoxClass } from './style';

export const LayoutBox = ({ children, ...restProps }: LayoutBoxProps) => (
  <div className={LayoutBoxClass(restProps)}>{children}</div>
);
