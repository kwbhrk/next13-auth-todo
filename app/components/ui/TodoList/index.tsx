'use client';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import { TodoListClass, TodoListLeftClass, TodoListRightClass } from './style';
import type { TodoListProps } from './type';

const TodoList = ({ title }: TodoListProps) => {
  return (
    <div className={TodoListClass}>
      <div className={TodoListLeftClass}>
        <Input type="checkbox" />
        {title}
      </div>
      <div className={TodoListRightClass}>
        <Button backgroundColor="#d63838" padding="5px" fontSize="12px">
          編集
        </Button>
        <Button backgroundColor="gray" padding="5px" fontSize="12px">
          削除
        </Button>
      </div>
    </div>
  );
};

export default TodoList;
