import { useTasksDispatch } from '../../context/TodoContext';
import Input from '../core/Input';
import Button from '../core/Button';
import { useFormik } from 'formik';
import { useEffect } from 'react';

function Task(props) {
  const dispatch = useTasksDispatch();

  const todoItem = useFormik({
    initialValues: {
      done: props.task.done,
    },
    onSubmit: () => {
      dispatch({
        type: 'deleted',
        id: props.task.id,
      });
    },
  });

  useEffect(() => {
    dispatch({
      type: 'changed',
      task: {
        ...props.task,
        done: todoItem.values.done,
      },
    });
  }, [todoItem.values.done]);

  return (
    <>
      <form className="list-item_form" onSubmit={todoItem.handleSubmit}>
        <Input
          type="checkbox"
          name="done"
          checked={todoItem.values.done}
          className="task-checkbox"
          onChange={todoItem.handleChange}
        />
        <span
          className={
            props.task.done
              ? 'task-description task-checked'
              : 'task-description'
          }
        >
          {props.task.text}
        </span>
        <Button type="submit" className="task-delete" value="Видалити" />
      </form>
    </>
  );
}

export default Task;
