export type ButtonProps = {
  padding?: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  border?: string;
  bold?: boolean;
  width?: string;
  isLink?: boolean;
  href?: string;
  children?: React.ReactNode;
} & React.JSX.IntrinsicElements['button'];
