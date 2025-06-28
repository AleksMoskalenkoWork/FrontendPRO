import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from './Task';
import Button from '@mui/material/Button';
import ModalCmp from '../core/modal/Modal';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function ListCmp() {
  const [openTask, setOpenTask] = useState(null);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.todos);

  if (!tasks) {
    return null;
  }

  if (tasks.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
        <span>List is empty. Add your first task.</span>
      </Box>
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
    handleOpen();
    setOpenTask(task);
  };

  return (
    <>
      <Box>
        <List>
          {tasks.map((task) => (
            <ListItem
              sx={{
                width: '100%',
                paddingLeft: 0,
                paddingRight: 0,
                cursor: 'pointer',
              }}
              key={task.id}
              onClick={handleClick(task)}
            >
              <Task task={task} />
            </ListItem>
          ))}
          {tasks.length && (
            <Button
              onClick={() => {
                dispatch({
                  type: 'todo/clearTodoSaga',
                });
              }}
            >
              Clear task list
            </Button>
          )}
        </List>
        {openTask && (
          <ModalCmp open={open} task={openTask} onClose={() => handleClose()} />
        )}
      </Box>
    </>
  );
}

export default ListCmp;
