import { CardClass, FormClass } from './style';
import { FormCardProps } from './type';

export const FormCard = ({ onSubmit, children }: FormCardProps) => (
  <div className={CardClass}>
    <form onSubmit={onSubmit} className={FormClass}>
      {children}
    </form>
  </div>
);
