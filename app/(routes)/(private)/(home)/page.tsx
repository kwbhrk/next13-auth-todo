import { headers } from 'next/headers';
import { TaskLists } from './TaskLists';

export const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/task`, {
    headers: headers(),
  });

  // TODO: 500エラーの場合はエラーページへ遷移させる
  if (!response.ok) {
    return <div>エラーが発生しました。</div>;
  }

  const { tasks } = await response.json();

  return <TaskLists tasks={tasks} />;
};

export default Home;
