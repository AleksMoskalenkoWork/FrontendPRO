import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function Task(props) {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState('');
  const dispatch = useDispatch();

  const theme = useTheme();

  function editHandleClick() {
    if (!editText.trim()) return;
    dispatch({
      type: 'todo/editTodoSaga',
      payload: { id: props.task.id, text: editText },
    });
    setText('');
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'row', sm: 'row' },
          alignItems: { xs: 'center', sm: 'center' },
          justifyContent: 'space-between',
          width: '100%',
          paddingBottom: '8px',
          paddingTop: '8px',
          border: `1px solid ${
            theme.palette.mode === 'light' ? 'black' : 'white'
          }`,
          gap: 1,
        }}
      >
        <Checkbox
          type="checkbox"
          checked={props.task.completed}
          onChange={() => {
            dispatch({
              type: 'todo/completedTodoSaga',
              payload: props.task.id,
            });
          }}
          sx={{ alignSelf: { xs: 'flex-start', sm: 'center' } }}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', width: '50%' }}>
          {edit ? (
            <TextField
              variant="outlined"
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  padding: 0,
                },
                '& .MuiOutlinedInput-input': {
                  padding: '8px 12px',
                },
              }}
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            <span
              style={{
                textDecoration: props.task.completed ? 'line-through' : 'none',
                display: 'inline-block',
                maxWidth: '50%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {props.task.text}
            </span>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Button
            sx={{ marginRight: '8px' }}
            onClick={() => {
              setEdit(!edit);
              {
                edit && editHandleClick();
              }
            }}
          >
            {edit ? 'Save' : 'Edit'}
          </Button>
          <Button
            sx={{ marginRight: '8px' }}
            onClick={() => {
              dispatch({
                type: 'todo/deleteTodoSaga',
                payload: props.task.id,
              });
            }}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Task;
