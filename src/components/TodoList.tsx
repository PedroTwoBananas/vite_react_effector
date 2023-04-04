import TodoItem from './TodoItem';
import { useStore } from 'effector-react';
import { $tasks } from '../model';

const TodoList = () => {
  const tasks = useStore($tasks);
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TodoList;
