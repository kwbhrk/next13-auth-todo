'use client';
import { useState } from 'react';
import { Button } from '@/app/_components/ui/Button';
import { Input } from '@/app/_components/ui/Input';
import { TaskListClass } from './style';
import { LayoutBox } from '@/app/_components/ui/LayoutBox';
import type { TaskListProps } from './type';

const TaskList = ({ title }: TaskListProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(title);

  const handleClickDeleteTask = () => {
    confirm(`タスク「${title}」を削除しますか？`);
  };

  return (
    <div className={TaskListClass}>
      <LayoutBox align="center" gap="8px" justify="space-between">
        <LayoutBox align="center" gap="8px">
          <Input type="checkbox" />
          {isEdit ? (
            // TODO:フォーカスが外れた時かエンターキーが押された時にAPIを叩く
            <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
          ) : (
            <span onClick={() => setIsEdit(true)}>{title}</span>
          )}
        </LayoutBox>
        <Button
          backgroundColor="#d63838"
          padding="4px"
          fontSize="12px"
          onClick={handleClickDeleteTask}
        >
          削除
        </Button>
      </LayoutBox>
    </div>
  );
};

export default TaskList;
