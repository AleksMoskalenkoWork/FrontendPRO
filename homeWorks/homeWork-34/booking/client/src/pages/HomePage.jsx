import { useFormik } from 'formik';

export default function HomePage() {
  const bookingForm = useFormik({
    initialValues: {},
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
      return errors;
    },
  });
  return <>{/* <Container></Container> */}</>;
}
