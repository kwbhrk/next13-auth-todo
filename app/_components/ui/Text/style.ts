import { css } from '@/styled-system/css';
import { TextProps } from './type';

export const TextClass = ({ bold, fontSize }: TextProps) =>
  css({
    fontSize,
    fontWeight: bold ? 'bold' : 'normal',
  });
