import './App.css';
import { Formik, Form, Field } from 'formik';

function App() {
  return (
    <>
      <div className="page-container">
        <h1 className="form-title">TODO List</h1>
        <Formik initialValues={{ name: '' }}>
          <Form className="form-wrapper">
            <Field
              name="TODO Name"
              placeholder="TODO"
              className="form-input "
            />
            <button type="submit" className="form-button ">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default App;
