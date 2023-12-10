'use client';
import { useMemo, useState } from 'react';
import { Task } from '@/app/_components/ui/Task';
import { LayoutBox } from '@/app/_components/ui/LayoutBox';
import { Button } from '@/app/_components/ui/Button';
import { Modal } from '@/app/_components/ui/Modal';
import { Input } from '@/app/_components/ui/Input';
import { Text } from '@/app/_components/ui/Text';
import { TaskListWrapperClass } from './style';
import { TaskType } from './type';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema } from '@/app/_schema/task';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Error } from '@/app/_components/ui/Error';
import { ErrorText } from '@/app/_components/ui/Error/ErrorText';
import { Label } from '@/app/_components/ui/Label';

export const TaskLists = ({ tasks = [] }: { tasks: TaskType[] }) => {
  const [isShowAddTask, setIsShowAddTask] = useState(false);
  const [checkedTaskList, setCheckedTaskList] = useState<number[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<TaskType>({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: zodResolver(taskSchema),
  });

  const router = useRouter();
  const handleSubmitAddTask = handleSubmit(async ({ content }) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/task`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });

    if (response?.ok) {
      setIsShowAddTask(false);
      reset({ content: '' });
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

  const handleChangeCheckedTaskLists = (id: number) => {
    // idがcheckedTaskListに存在する場合は削除する
    if (checkedTaskList.includes(id)) {
      const updatedCheckedTaskLists = checkedTaskList.filter((item) => item !== id);
      setCheckedTaskList(updatedCheckedTaskLists);
      return;
    }

    // idがcheckedTaskListに存在しない場合は追加する
    setCheckedTaskList([...checkedTaskList, id]);
  };

  // チェックボックスを一括で選択・解除する
  const handleChangeAllCheckedTaskLists = () => {
    // checkedTaskListに全てのタスクのidが存在する場合は削除する
    if (checkedTaskList.length === tasks.length) {
      setCheckedTaskList([]);
      return;
    }
    // checkedTaskListに全てのタスクのidを追加する
    const updatedCheckedTaskLists = tasks.map((task) => task.id);
    setCheckedTaskList(updatedCheckedTaskLists);
  };

  // 全てのタスクを削除する
  const handleClickDeleteAllTasks = async () => {
    // checkedTaskListが空の場合はタスクが選択されていないアラートを出す
    if (checkedTaskList.length === 0) {
      alert('タスクを1件以上選択してください。');
      return;
    }

    if (!confirm(`タスクを一括削除しますか？`)) return;

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/task`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ids: checkedTaskList }),
    });

    if (response?.ok) {
      setCheckedTaskList([]);
      router.push('/');
      router.refresh();
      return;
    }

    const error = await response.json();
    const result = confirm(error.message);
    if (result && response.status === 401) {
      router.push('/login');
    }
  };

  // 全てのタスクにチェックが入っている場合はtrueを返す
  const isCheckedAllTask = useMemo(
    () => checkedTaskList.length === tasks.length,
    [checkedTaskList, tasks]
  );

  // checkedTaskListにidが存在する場合はtrueを返す
  const isCheckedTask = (id: number) => checkedTaskList.includes(id);

  return (
    <div className={TaskListWrapperClass}>
      <LayoutBox gap="12px" direction="column">
        <LayoutBox direction="column" align="center" gap="8px" width="100%">
          <LayoutBox direction="column" gap="16px" width="100%">
            <LayoutBox gap="4px" align="center" justify="space-between" width="100%">
              <Text bold>タスク一覧</Text>
              <Button padding="4px 8px" onClick={() => setIsShowAddTask(!isShowAddTask)}>
                タスク追加
              </Button>
            </LayoutBox>
            {tasks.length !== 0 && (
              <LayoutBox gap="8px" align="center" justify="flex-start">
                <Label htmlFor="delete-tasks">
                  <LayoutBox gap="4px" align="center">
                    <Input
                      id="delete-tasks"
                      type="checkbox"
                      checked={isCheckedAllTask}
                      onChange={handleChangeAllCheckedTaskLists}
                    />
                    <Text fontSize="14px">タスクを全選択</Text>
                  </LayoutBox>
                </Label>
                {
                  // checkedTaskListにタスクが選択されている場合のみタスク一括削除ボタンを表示する
                  checkedTaskList.length !== 0 && (
                    <Button
                      backgroundColor="#d63838"
                      padding="4px"
                      fontSize="12px"
                      onClick={handleClickDeleteAllTasks}
                    >
                      選択中タスクを削除
                    </Button>
                  )
                }
              </LayoutBox>
            )}
          </LayoutBox>
          <LayoutBox direction="column" gap="4px" width="100%">
            {tasks.length !== 0 ? (
              tasks.map((task: TaskType) => (
                <Task
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  isCheckedTask={isCheckedTask(task.id)}
                  onChange={handleChangeCheckedTaskLists}
                />
              ))
            ) : (
              <Text fontSize="14px">現在登録されているタスクはありません。</Text>
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
