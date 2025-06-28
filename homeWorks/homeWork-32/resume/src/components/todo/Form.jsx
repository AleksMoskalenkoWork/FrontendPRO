import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Form() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  function handleClick() {
    if (!text.trim()) return;
    dispatch({ type: 'todo/addTodoSaga', payload: text });
    setText('');
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 className="form-title">ToDoList</h1>

        <Box sx={{ display: 'flex', width: '100%' }}>
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
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button sx={{ marginLeft: '8px' }} onClick={handleClick}>
            Додати
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Form;
