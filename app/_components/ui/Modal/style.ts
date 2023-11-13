import { css } from '@/styled-system/css';

export const modalClass = css({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  contain: 'content',
});

export const modalContentClass = css({
  position: 'relative',
  zIndex: 1,
  boxSizing: 'border-box',
  margin: '0 10px',
  width: '100%',
  maxWidth: '600px',
  maxHeight: '90vh',
  padding: '40px',
  overflowY: 'auto',
  backgroundColor: '#fff',
  borderRadius: '5px',
});

export const modalCloseButtonClass = css({
  position: 'absolute',
  top: '5px',
  right: '10px',
  padding: 0,
  fontSize: '1.5rem',
  lineHeight: 1,
  color: '#7c7c80',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
});

export const modalOverlayClass = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0 0 0 / 50%)',
});
