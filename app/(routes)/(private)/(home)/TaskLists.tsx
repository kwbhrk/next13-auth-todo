'use client';
import { useState } from 'react';
import { TaskList } from '@/app/_components/ui/TaskList';
import { LayoutBox } from '@/app/_components/ui/LayoutBox';
import { Button } from '@/app/_components/ui/Button';
import { Modal } from '@/app/_components/ui/Modal';
import { Input } from '@/app/_components/ui/Input';
import { Text } from '@/app/_components/ui/Text/Text';
import { TaskListWrapperClass } from './style';
import { TaskType } from './type';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema } from '@/app/_schema/task';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Error } from '@/app/_components/ui/Error';
import { ErrorText } from '@/app/_components/ui/Error/ErrorText';

export const TaskLists = ({ tasks = [] }: { tasks: TaskType[] }) => {
  const [isShowAddTask, setIsShowAddTask] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TaskType>({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: zodResolver(taskSchema),
  });

  // TODO: ここにタスクのチェック状態を管理するstateを配列で追加する
  const router = useRouter();
  const handleSubmitAddTask = handleSubmit(async ({ content }) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/task`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });

    if (response?.ok) {
      setIsShowAddTask(false);
      router.push('/');
      router.refresh();
      return;
    }

    const error = await response.json();
    setError('root.server', {
      type: 'server',
      message: error.message,
    });
  });

  return (
    <div className={TaskListWrapperClass}>
      <LayoutBox gap="12px" direction="column">
        <LayoutBox direction="column" align="center" gap="8px" width="100%">
          <LayoutBox gap="4px" align="center" justify="space-between" width="100%">
            <Text bold>タスク一覧</Text>
            <Button padding="4px 8px" onClick={() => setIsShowAddTask(!isShowAddTask)}>
              タスク追加
            </Button>
          </LayoutBox>
          <LayoutBox direction="column" gap="4px" width="100%">
            {tasks.length !== 0 ? (
              tasks.map((task: TaskType) => (
                <TaskList key={task.id} id={task.id} content={task.content} />
              ))
            ) : (
              <Text>現在登録されているタスクはありません。</Text>
            )}
          </LayoutBox>
        </LayoutBox>
      </LayoutBox>
      <Modal isOpen={isShowAddTask} closeModal={() => setIsShowAddTask(false)}>
        <form onSubmit={handleSubmitAddTask}>
          <LayoutBox direction="column" gap="8px">
            <Input type="text" placeholder="タスク名を入力" {...register('content')} fullWidth />
            <Error name="content" errors={errors} />
            {!errors['content'] && errors.root?.server && (
              <ErrorText message={errors.root.server.message} />
            )}
            <Button padding="4px 8px" width="100%">
              タスクを追加する
            </Button>
          </LayoutBox>
        </form>
      </Modal>
    </div>
  );
};
