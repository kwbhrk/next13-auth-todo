import { css } from '@/styled-system/css';
import { TextProps } from './type';

export const TextClass = ({ bold }: TextProps) =>
  css({
    fontWeight: bold ? 'bold' : 'normal',
  });
