export type ButtonProps = {
  padding?: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  border?: string;
  bold?: boolean;
  width?: string;
  href?: string;
  isLink?: boolean;
  externalLink?: boolean;
  children?: React.ReactNode;
} & React.JSX.IntrinsicElements['button'];
