'use client';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/app/_components/ui/Button';
import { Input } from '@/app/_components/ui/Input';
import { TaskListClass } from './style';
import { LayoutBox } from '@/app/_components/ui/LayoutBox';
import type { TaskListProps } from './type';
import { EventType } from '@/app/_types/Event';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema } from '@/app/_schema/task';
import { TaskType } from '@/app/(routes)/(private)/(home)/type';
import { useRouter } from 'next/navigation';

export const Task = ({ id, content, isCheckedTask, onChange }: TaskListProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef?.current) return;
    inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
  }, [isEdit]);

  const { register, handleSubmit, setError } = useForm<TaskType>({
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: { content },
    resolver: zodResolver(taskSchema),
  });

  // NOTE: 「react-hook-form」の「refとローカルで独自設定したref」が衝突するのを避け、別々で管理するため分割代入でrefを取り出す
  const { ref, ...rest } = register('content', {
    onChange: (e) => handleChangeResizeInput(e),
  });

  const router = useRouter();
  const handleSubmitUpdateTask = handleSubmit(async ({ content }) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/task`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, content }),
    });

    if (response?.ok) {
      setIsEdit(false);
      router.push('/');
      router.refresh();
      return;
    }

    const error = await response.json();
    const result = confirm(error.message);
    if (result && response.status === 401) {
      router.push('/login');
    }

    setError('root.server', {
      type: 'server',
      message: error.message,
    });
  });

  const handleClickDeleteTask = async () => {
    const result = confirm(`タスク「${content}」を削除しますか？`);
    if (!result) return;

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/task`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ids: [id] }),
    });

    if (response?.ok) {
      router.push('/');
      router.refresh();
      return;
    }

    const error = await response.json();
    if (confirm(error.message) && response.status === 401) {
      router.push('/login');
      return;
    }
    alert(error.message);
  };

  const handleClickEnter: EventType['onKeyDown'] = async (e) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter') return;
    await handleSubmitUpdateTask();
  };

  const handleChangeResizeInput: EventType['onChange'] = (e) => {
    const target = e.target;
    target.style.width = `${target.scrollWidth}px`;
  };

  return (
    <div className={TaskListClass}>
      <LayoutBox align="center" gap="8px" justify="space-between">
        <LayoutBox align="center" gap="8px" width="auto">
          <Input type="checkbox" checked={isCheckedTask} onChange={() => onChange(id)} />
          {isEdit ? (
            <input
              className="content"
              type="text"
              {...rest}
              ref={(e) => {
                ref(e);
                inputRef.current = e;
              }}
              onKeyDown={handleClickEnter}
            />
          ) : (
            <div onClick={() => setIsEdit(true)}>{content}</div>
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
