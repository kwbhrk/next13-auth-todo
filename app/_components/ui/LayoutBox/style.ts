import { css } from '@/styled-system/css';
import { LayoutBoxProps } from './type';

export const LayoutBoxClass = ({
  width = '100%',
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
    width,
    gap,
    rowGap,
    direction,
    alignItems: align,
    flexDirection: direction,
    justifyContent: justify,
    flexWrap: wrap,
    backgroundColor: background,
  });
