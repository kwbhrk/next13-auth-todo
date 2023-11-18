import { ErrorMessage } from '@hookform/error-message';
import { ErrorText } from './ErrorText';
import type { FieldErrors } from 'react-hook-form';

type ErrorTextProps = {
  name?: string;
  errors: FieldErrors;
};

export const Error = ({ name = '', errors }: ErrorTextProps) => (
  <ErrorMessage
    errors={errors}
    name={name}
    render={({ messages }) =>
      messages &&
      Object.entries(messages).map(([type, message]) => (
        <ErrorText key={type} message={String(message)} />
      ))
    }
  />
);
