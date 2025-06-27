import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

function Task(props) {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState('');
  const dispatch = useDispatch();

  return (
    <>
      <Checkbox
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
          <TextField
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
        >
          {edit ? 'Зберегти' : 'Редагувати'}
        </Button>
        <Button
          className="task-delete"
          onClick={() => {
            dispatch({
              type: 'todo/deleteTodoSaga',
              payload: props.task.id,
            });
          }}
        >
          Видалити
        </Button>
      </div>
    </>
  );
}

export default Task;
