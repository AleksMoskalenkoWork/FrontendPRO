import { Box, Button, Container, Link } from '@mui/material';

function ErrorPage() {
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <h1 className="error_page-title">404 Page Not Found</h1>
          <Button href="/">Головна</Button>
        </Box>
      </Container>
    </>
  );
}

export default ErrorPage;
