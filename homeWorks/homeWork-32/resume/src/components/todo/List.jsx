import Task from './Task';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import ModalCmp from '../core/modal/Modal';

function List() {
  const [openTask, setOpenTask] = useState(null);
  const [open, setOpen] = useState(false);

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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = (task) => (e) => {
    if (
      (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') ||
      (e.target.tagName === 'INPUT' && e.target.type === 'text') ||
      e.target.tagName === 'BUTTON'
    ) {
      return;
    }
    console.log('click');
    handleOpen();
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
            onClick={() => {
              dispatch({
                type: 'todo/clearTodoSaga',
              });
            }}
          >
            Очистити список задач
          </Button>
        )}
      </ul>
      {openTask && (
        <ModalCmp open={open} task={openTask} onClose={() => handleClose()} />
      )}
    </>
  );
}

export default List;
