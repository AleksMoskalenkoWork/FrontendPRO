import { useTasks } from '../../context/TodoContext';
import Task from './Task';

function List() {
  const tasks = useTasks();
  if (!tasks) {
    return null;
  }

  if (tasks.length === 0) {
    return (
      <span className="empty-state">List is empty. Add your first task.</span>
    );
  }

  return (
    <>
      <ul className="list">
        {tasks.map((task) => (
          <li className="list-item" key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
