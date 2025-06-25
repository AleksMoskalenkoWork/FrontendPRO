import Input from '../core/Input';
import Button from '../core/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Task(props) {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState('');
  const dispatch = useDispatch();

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
      <div className="task-content_wrapper">
        {edit ? (
          <Input
            className="task-input"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <span
            className={
              props.task.completed
                ? 'task-description task-checked'
                : 'task-description'
            }
          >
            {props.task.text}
          </span>
        )}
      </div>
      <div>
        <Button
          className="task-edit"
          value={edit ? 'Зберегти' : 'Редагувати'}
          onClick={() => {
            setEdit(!edit);
            {
              edit &&
                dispatch({
                  type: 'todo/editTodoSaga',
                  payload: { id: props.task.id, text: editText },
                });
            }
          }}
        />
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
      </div>
    </>
  );
}

export default Task;
