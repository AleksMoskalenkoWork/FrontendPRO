import { useSelector } from 'react-redux';
import Task from './Task';

function List() {
  const tasks = useSelector((state) => state.tasks);
  if (!tasks) {
    return null;
  }

  if (tasks.length === 0) {
    return (
      <div className="list-empty_state">
        <span>List is empty. Add your first task.</span>
      </div>
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
