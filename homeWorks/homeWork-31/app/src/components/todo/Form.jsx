import { useState } from 'react';
import Button from '../core/Button';
import Input from '../core/Input';
import { useDispatch } from 'react-redux';

function Form() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  function handleClick() {
    setText('');
    dispatch({ type: 'todo/addTodoSaga', payload: text });
  }

  return (
    <>
      <div className="form-wrapper">
        <h1 className="form-title">ToDoList</h1>

        <div className="form">
          <Input
            className="form-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            className="form-button"
            value="Додати"
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}

export default Form;
