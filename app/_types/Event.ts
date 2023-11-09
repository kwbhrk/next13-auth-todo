import type { MouseEvent, ChangeEvent, FormEvent, FocusEvent, KeyboardEvent } from 'react';

export type EventType = {
  onClick: (event: MouseEvent<HTMLInputElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTextArea: (event: HTMLTextAreaElement) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onFocus: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp: (event: KeyboardEvent<HTMLInputElement>) => void;
};
