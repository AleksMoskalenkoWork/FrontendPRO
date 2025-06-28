import Contentgroup from '../components/swapi/ContentGroup';
import Inputgroup from '../components/swapi/InputGroup';
import Box from '@mui/material/Box';

function SwapiPage() {
  return (
    <>
      <Box sx={{ height: '100vh' }}>
        <Inputgroup />
        <Contentgroup />
      </Box>
    </>
  );
}

export default SwapiPage;
