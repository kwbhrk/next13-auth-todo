import { css } from '@/styled-system/css';

export const labelClass = (fullWidth: boolean) =>
  css({
    width: fullWidth ? '100%' : 'auto',
  });

export const labelTextClass = (fontSize: string) =>
  css({
    fontSize,
  });

export const labelRequiredClass = css({
  color: '#d63838',
});
