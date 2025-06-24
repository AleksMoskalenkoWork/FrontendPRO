import Input from '../core/Input';
import Button from '../core/Button';
import { useDispatch } from 'react-redux';

function Task(props) {
  const dispatch = useDispatch();
  console.log(props.task.completed);

  return (
    <>
      <Input
        type="checkbox"
        checked={props.task.completed}
        className="task-checkbox"
        onChange={() => {
          dispatch({
            type: 'todo/completedTodoSaga',
            payload: props.task.id,
          });
        }}
      />
      <span
        className={
          props.task.completed
            ? 'task-description task-checked'
            : 'task-description'
        }
      >
        {props.task.text}
      </span>
      <Button
        className="task-delete"
        value="Видалити"
        onClick={() => {
          dispatch({
            type: 'todo/deleteTodoSaga',
            payload: props.task.id,
          });
        }}
      />
    </>
  );
}

export default Task;
