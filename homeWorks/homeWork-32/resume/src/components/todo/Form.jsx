import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';

function Form() {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  function handleClick() {
    if (!text.trim()) {
      return setError(true);
    }
    dispatch({ type: 'todo/addTodoSaga', payload: text });
    setText('');
    setError(false);
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

        <Box
          sx={{
            display: 'flex',
            width: '100%',
            position: 'relative',
            paddingBottom: '24px',
          }}
        >
          <Box sx={{ display: 'flex', width: '100%' }}>
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
              value={text}
              onChange={(e) => {
                if (e.target.value) {
                  setText(e.target.value);
                  setError(false);
                }
              }}
            />
            {error && (
              <Typography
                variant="span"
                role="alert"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: '8px',
                  color: 'red',
                  fontSize: '14px',
                }}
              >
                Field is empty. Please, enter task name.
              </Typography>
            )}
          </Box>

          <Button sx={{ marginLeft: '8px' }} onClick={handleClick}>
            Add
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Form;
