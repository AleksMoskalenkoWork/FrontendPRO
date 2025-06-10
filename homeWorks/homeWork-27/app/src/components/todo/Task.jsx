import { useState } from 'react';
import { useTasksDispatch } from '../../context/TodoContext';
import Input from '../core/Input';
import Button from '../core/Button';

function Task(props) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  return (
    <>
      <Input type="checkbox" className="task-checkbox" />
      <span className="task-description">{props.task.text}</span>
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
