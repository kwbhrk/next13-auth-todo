import { css } from '@/styled-system/css';
import { ButtonProps } from './type';

export const ButtonClass = ({
  padding = '8px',
  fontSize = '14px',
  bold = false,
  border = 'none',
  width,
  color = '#ffffff',
  backgroundColor = '#18181b',
}: ButtonProps) =>
  css({
    borderRadius: '4px',
    cursor: 'pointer',
    color,
    padding,
    fontSize,
    fontWeight: bold ? 'bold' : 'normal',
    width,
    border,
    backgroundColor,
  });
