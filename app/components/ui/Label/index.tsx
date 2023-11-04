import { LabelProps } from './type';
import * as style from './style';

export const Label = ({
  htmlFor,
  text,
  fontSize = '14px',
  required = false,
  children,
}: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={style.labelClass}>
      <span className={style.labelTextClass(fontSize)}>{text}</span>
      {required && <span className={style.labelRequiredClass}>*</span>}
      {children}
    </label>
  );
};
