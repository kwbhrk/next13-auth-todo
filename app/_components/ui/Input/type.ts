export type InputProps = {
  fullWidth?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: <T extends { target: any; type?: any }>(arg: T) => void;
} & React.JSX.IntrinsicElements['input'];
