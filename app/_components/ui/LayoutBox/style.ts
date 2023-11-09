import { css } from '@/styled-system/css';
import { LayoutBoxProps } from './type';

export const LayoutBoxClass = ({
  direction = 'row',
  gap = '2x',
  rowGap = '2x',
  align = 'start',
  justify = 'center',
  wrap = 'nowrap',
  background = '#ffffff',
}: LayoutBoxProps) =>
  css({
    display: 'flex',
    width: '100%',
    gap,
    rowGap,
    direction,
    alignItems: align,
    flexDirection: direction,
    justifyContent: justify,
    flexWrap: wrap,
    backgroundColor: background,
  });
