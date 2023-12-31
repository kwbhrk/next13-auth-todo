import { forwardRef } from 'react';
import type { InputProps } from './type';
import { InputClass } from './style';

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ fullWidth, onChange, ...props }, ref) => (
    <input {...props} ref={ref} className={InputClass({ fullWidth })} onChange={onChange} />
  )
);
