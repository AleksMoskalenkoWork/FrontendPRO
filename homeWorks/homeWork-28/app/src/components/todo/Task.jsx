import { useTasksDispatch } from '../../context/TodoContext';
import Input from '../core/Input';
import Button from '../core/Button';

function Task(props) {
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
