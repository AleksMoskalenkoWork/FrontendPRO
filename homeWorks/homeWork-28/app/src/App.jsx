import { useState } from 'react';
import './App.css';
import { Formik, Form, Field } from 'formik';
import { useTasksDispatch } from './context/TodoContext';
import Button from './components/core/Button';
import List from './components/todo/List';

function App() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();

  let nextId = 0;

  return (
    <>
      <div className="page-container">
        <h1 className="form-title">TODO List</h1>
        <Formik initialValues={{ todo: '' }}>
          <Form className="form-wrapper">
            <Field
              name="TODO Name"
              placeholder="TODO"
              className="form-input "
            />
            <Button
              className="form-button"
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
          </Form>
        </Formik>
      </div>
      <List />
    </>
  );
}

export default App;
