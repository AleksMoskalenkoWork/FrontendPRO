import Modal from '../core/Modal';
import Task from './Task';
import { useState } from 'react';

function List() {
  const [openTask, setOpenTask] = useState(null);

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
          <li className="list-item" key={task.id} onClick={handleClick(task)}>
            <Task task={task} />
          </li>
        ))}
      </ul>
      {openTask && <Modal task={openTask} onClick={() => setOpenTask(null)} />}
    </>
  );
}

export default List;
