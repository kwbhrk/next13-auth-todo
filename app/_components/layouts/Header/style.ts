import { css } from '@/styled-system/css';

export const headerClass = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #e4e4e7',
  padding: '10px',
  minWidth: '480px',
});

export const headerLogoClass = css({ fontSize: 'xl', fontWeight: 'bold' });

export const headerButtonGroupClass = css({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  gap: '8px',
});

export const headerLogoutButtonClass = css({
  background: '#18181b',
  color: '#ffffff',
  padding: '8px 12px',
  borderRadius: '4px',
  fontSize: 'sm',
  fontWeight: 'bold',
});
