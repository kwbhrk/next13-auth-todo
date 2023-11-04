export type LayoutBoxProps = {
  direction?: 'row' | 'column';
  gap?: string;
  rowGap?: string;
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  wrap?: 'wrap' | 'nowrap';
  background?: string;
  children?: React.ReactNode;
};
