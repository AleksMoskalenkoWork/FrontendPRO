import { useState } from 'react';
import Button from '../core/Button';
import Input from '../core/Input';

function Form() {
  const [text, setText] = useState('');

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
          <Button className="form-button" value="Додати" />
        </form>
      </div>
    </>
  );
}

export default Form;
