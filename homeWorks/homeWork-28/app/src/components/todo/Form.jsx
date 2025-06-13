import { useFormik } from 'formik';
import { useState } from 'react';
import { useTasksDispatch } from '../../context/TodoContext';
import Button from '../core/Button';

function TodoForm() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();

  let nextId = 0;

  const todoForm = useFormik({
    initialValues: {
      taskName: '',
    },
    onSubmit: (values) => {
      setText('');
      dispatch({
        type: 'added',
        id: nextId++,
        text: values.taskName,
      });
      location.reload();
    },
    validate: (values) => {
      const errors = {};

      if (values.taskName.length < 5) {
        errors.taskName = 'Task name length must be more then 5 symbols';
      }

      return errors;
    },
  });

  return (
    <div className="page-container">
      <h1 className="form-title">TODO List</h1>
      <form className="form-wrapper" onSubmit={todoForm.handleSubmit}>
        <div className="form-input_wrapper">
          <input
            id="taskName"
            name="taskName"
            type="text"
            onChange={todoForm.handleChange}
            value={todoForm.values.taskName}
            className="form-input"
          />
          {todoForm.errors.taskName && todoForm.touched.taskName && (
            <span className="error">{todoForm.errors.taskName}</span>
          )}
        </div>

        <Button className="form-button" value="Додати" type="submit" />
      </form>
    </div>
  );
}

export default TodoForm;
