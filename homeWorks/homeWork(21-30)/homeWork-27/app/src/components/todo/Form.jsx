import { useState } from 'react';
import Button from '../core/Button';
import Input from '../core/Input';
import { useTasksDispatch } from '../../context/TodoContext';

function Form() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();

  let nextId = 0;

  return (
    <>
      <div className="form-wrapper">
        <h1 className="form-title">ToDoList</h1>

        <form className="form">
          <Input
            className="form-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            className="form-button"
            value="Додати"
            onClick={() => {
              setText('');
              dispatch({
                type: 'added',
                id: nextId++,
                text: text,
              });
            }}
          />
        </form>
      </div>
    </>
  );
}

export default Form;
