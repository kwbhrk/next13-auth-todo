import { LayoutBoxProps } from './type';
import { LayoutBoxClass } from './style';

export const LayoutBox = (props: LayoutBoxProps) => {
  const { children, ...otherProps } = props;
  return <div className={LayoutBoxClass(otherProps)}>{children}</div>;
};
