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
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          paddingBottom: '8px',
          paddingTop: '8px',
          //   height: '80px',
          border: `1px solid ${
            theme.palette.mode === 'light' ? 'black' : 'white'
          }`,
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
        />
        <Box sx={{ width: '75%' }}>
          {edit ? (
            <TextField
              variant="outlined"
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  padding: 0, // убирает отступы контейнера, если нужно
                },
                '& .MuiOutlinedInput-input': {
                  padding: '8px 12px', // задаёт нужные отступы для текстового поля
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
              }}
            >
              {props.task.text}
            </span>
          )}
        </Box>
        <Box>
          <Button
            sx={{ marginRight: '8px' }}
            onClick={() => {
              setEdit(!edit);
              {
                edit && editHandleClick();
              }
            }}
          >
            {edit ? 'Зберегти' : 'Редагувати'}
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
            Видалити
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Task;
