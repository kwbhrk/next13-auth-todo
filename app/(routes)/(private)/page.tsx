import { css } from '@/styled-system/css';
import TodoList from '@/app/_components/ui/TodoList';
// import { getServerSession } from 'next-auth';
// import { authOptions } from './lib/auth';

export default async function Home() {
  // const session = await getServerSession(authOptions);

  return (
    <div
      className={css({
        padding: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        maxWidth: '1280px',
        margin: '0 auto',
      })}
    >
      <TodoList title="aaaa" />
      <TodoList title="aaaa" />
      <TodoList title="aaaa" />
      <TodoList title="aaaa" />
      <TodoList title="aaaa" />
      <TodoList title="aaaa" />
      <TodoList title="aaaa" />
      {/* {JSON.stringify(session)} */}
    </div>
  );
}
