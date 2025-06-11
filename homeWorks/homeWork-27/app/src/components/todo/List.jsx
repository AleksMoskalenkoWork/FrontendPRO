import { useTasks } from '../../context/TodoContext';
import Modal from '../core/Modal';
import Task from './Task';
import { useState } from 'react';

function List() {
  const tasks = useTasks();
  const [openTask, setOpenTask] = useState(null);

  if (!tasks) {
    return null;
  }

  if (tasks.length === 0) {
    return (
      <span className="empty-state">List is empty. Add your first task.</span>
    );
  }

  const handleClick = (task) => (e) => {
    if (
      (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') ||
      e.target.tagName === 'BUTTON'
    ) {
      return;
    }
    setOpenTask(task);
  };

  return (
    <>
      <ul className="list">
        {tasks.map((task) => (
          <li
            className="list-item"
            key={task.id}
            onClick={handleClick(task)}
            style={{ cursor: 'pointer' }}
          >
            <Task task={task} />
          </li>
        ))}
      </ul>
      {openTask && <Modal task={openTask} onClick={() => setOpenTask(null)} />}
    </>
  );
}

export default List;
