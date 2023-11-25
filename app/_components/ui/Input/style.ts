import { css } from '@/styled-system/css';

export const InputClass = ({ fullWidth = false }) =>
  css({
    border: '1px solid #e4e4e7',
    borderRadius: '4px',
    padding: '4px 8px',
    width: fullWidth ? '100%' : 'auto',
  });
