import { css } from '@/styled-system/css';

type ErrorTextProps = {
  message: string | undefined;
};

export const ErrorText = ({ message }: ErrorTextProps) => {
  return (
    <span
      className={css({
        color: '#d63838',
        fontSize: '12px',
      })}
    >
      {message}
    </span>
  );
};
