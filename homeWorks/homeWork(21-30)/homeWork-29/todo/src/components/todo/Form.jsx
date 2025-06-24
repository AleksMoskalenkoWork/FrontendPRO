import { useState } from 'react';
import Button from '../core/Button';
import { useDispatch } from 'react-redux';
import { addTask } from '../../features/tasksSlice';

function TodoForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addTask(text));
    setText('');
  }

  return (
    <div className="page-container">
      <h1 className="form-title">TODO List</h1>
      <div className="form-wrapper">
        <div className="form-input_wrapper">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="form-input"
          />
        </div>

        <Button className="form-button" value="Додати" onClick={handleClick} />
      </div>
    </div>
  );
}

export default TodoForm;
