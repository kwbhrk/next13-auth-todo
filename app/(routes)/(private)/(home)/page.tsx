import { headers } from 'next/headers';
import { TaskLists } from './TaskLists';
import { Text } from '@/app/_components/ui/Text';

export const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/task`, {
    headers: headers(),
  });

  if (!response.ok) {
    return <Text fontSize="16px">エラーが発生しました。</Text>;
  }

  const { tasks } = await response.json();

  return <TaskLists tasks={tasks} />;
};

export default Home;
