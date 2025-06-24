import Input from '../core/Input';
import Button from '../core/Button';
import { useState } from 'react';
import Modal from '../core/Modal';

function Task(props) {
  const [openTask, setOpenTask] = useState(null);
  const dispatch = useTasksDispatch();
  return (
    <>
      <Input
        type="checkbox"
        checked={props.task.done}
        className="task-checkbox"
        onChange={(e) => {
          dispatch({
            type: 'changed',
            task: {
              ...props.task,
              done: e.target.checked,
            },
          });
        }}
      />
      <span
        className={
          props.task.done ? 'task-description task-checked' : 'task-description'
        }
      >
        {props.task.text}
      </span>
      <Button
        className="task-delete"
        value="Видалити"
        onClick={() => {
          dispatch({
            type: 'deleted',
            id: props.task.id,
          });
        }}
      />
    </>
  );
}

export default Task;
