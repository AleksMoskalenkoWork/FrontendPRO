import Container from '@mui/material/Container';
import Form from '../components/todo/Form';
import List from '../components/todo/List';
import Box from '@mui/material/Box';

function TodoPage() {
  return (
    <>
      <Box sx={{ height: '100vh' }}>
        <Container>
          <Form />
          <List />
        </Container>
      </Box>
    </>
  );
}

export default TodoPage;
