import Contentgroup from '../components/swapi/ContentGroup';
import Inputgroup from '../components/swapi/InputGroup';
import Container from '@mui/material/Container';

function SwapiPage() {
  return (
    <>
      <Container sx={{ padding: '8px' }}>
        <Inputgroup />
        <Contentgroup />
      </Container>
    </>
  );
}

export default SwapiPage;
