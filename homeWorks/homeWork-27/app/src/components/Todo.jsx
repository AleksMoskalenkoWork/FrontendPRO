import { createContext, useState } from 'react';
import Button from './core/Button';
import Input from './core/Input';
import { useTasksDispatch } from '../context/TodoContext';

let nextId = 0;

function Todo() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <>
      <div className="todo-wrapper">
        <h1 className="todo-title">ToDoList</h1>

        <form className="todo-form">
          <Input
            className="todo-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            className="todo-button"
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
        <div>
          {/* <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <Task task={task} />
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </>
  );
}

export default Todo;
