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
      <div className="form-wrapper">
        <h1 className="form-title">ToDoList</h1>

        <div className="form">
          <TextField
            className="form-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button className="form-button" onClick={handleClick}>
            Додати
          </Button>
        </div>
      </div>
    </>
  );
}

export default Form;
