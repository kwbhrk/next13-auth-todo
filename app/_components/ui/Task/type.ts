export type TaskListProps = {
  id: number;
  content: string;
  isCheckedTask: boolean;
  onChange: (id: number) => void;
};
