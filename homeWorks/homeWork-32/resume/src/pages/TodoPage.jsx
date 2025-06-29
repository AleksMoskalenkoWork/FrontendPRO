import Container from '@mui/material/Container';
import Form from '../components/todo/Form';
import List from '../components/todo/List';

function TodoPage() {
  return (
    <>
      <Container sx={{ padding: '8px' }}>
        <Form />
        <List />
      </Container>
    </>
  );
}

export default TodoPage;
