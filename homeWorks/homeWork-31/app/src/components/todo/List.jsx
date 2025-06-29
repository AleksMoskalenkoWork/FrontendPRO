import Button from '../core/Button';
import Modal from '../core/Modal';
import Task from './Task';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function List() {
  const [openTask, setOpenTask] = useState(null);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.todos);

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
      (e.target.tagName === 'INPUT' && e.target.type === 'text') ||
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
        {tasks.length && (
          <Button
            className="list-clear"
            value="Очистити список задач"
            onClick={() => {
              dispatch({
                type: 'todo/clearTodoSaga',
              });
            }}
          />
        )}
      </ul>
      {openTask && <Modal task={openTask} onClick={() => setOpenTask(null)} />}
    </>
  );
}

export default List;
