import Modal from '../core/Modal';
import Task from './Task';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoRequest } from '../../features/todoSlice';

function List() {
  const [openTask, setOpenTask] = useState(null);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos);
  const { todos, status, error } = useSelector((state) => state.todo);

  useEffect(() => {
    if (todos.length) {
      return (
        <div className="list-empty_state">
          <span>List is empty. Add your first task.</span>
        </div>
      );
    }
  }, [status, error, todos]);

  if (!tasks) {
    return null;
  }

  //   if (tasks.length === 0) {
  //     return (
  //       <div className="list-empty_state">
  //         <span>List is empty. Add your first task.</span>
  //       </div>
  //     );
  //   }

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
