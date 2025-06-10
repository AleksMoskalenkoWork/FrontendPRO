import { useTasks } from '../../context/TodoContext';
import Task from './Task';

function List() {
  const tasks = useTasks();
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
