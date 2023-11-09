import { css } from '@/styled-system/css';

export const labelClass = css({
  width: '100%',
});

export const labelTextClass = (fontSize: string) =>
  css({
    fontSize,
  });

export const labelRequiredClass = css({
  color: '#d63838',
});
