import { css } from '@/styled-system/css';

export const TodoListClass = css({
  border: '1px solid #e4e4e7',
  borderRadius: '4px',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  justifyContent: 'space-between',
  minWidth: '480px',
  width: '100%',
  cursor: 'pointer',
});

export const TodoListLeftClass = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const TodoListRightClass = css({
  display: 'flex',
  gap: '4px',
});
