import { LabelProps } from './type';
import * as style from './style';

export const Label = ({
  htmlFor,
  text,
  fontSize = '14px',
  fullWidth = false,
  required = false,
  children,
}: LabelProps) => (
  <label htmlFor={htmlFor} className={style.labelClass(fullWidth)}>
    <span className={style.labelTextClass(fontSize)}>{text}</span>
    {required && <span className={style.labelRequiredClass}>*</span>}
    {children}
  </label>
);
