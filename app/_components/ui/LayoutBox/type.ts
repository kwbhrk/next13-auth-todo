export type LayoutBoxProps = {
  width?: string;
  direction?: 'row' | 'column';
  gap?: string;
  rowGap?: string;
  align?: 'start' | 'center' | 'end';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  wrap?: 'wrap' | 'nowrap';
  background?: string;
  children?: React.ReactNode;
};
