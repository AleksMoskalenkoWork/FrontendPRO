import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Textarea from '@mui/joy/Textarea';
import Box from '@mui/material/Box';

export default function Contentgroup() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const { swapis, status, error } = useSelector((state) => state.swapi);

  useEffect(() => {
    if (status === 'loading') {
      setValue('Loading...');
    } else if (error) {
      setValue(`Error: ${error}`);
    } else if (swapis.length) {
      setValue(JSON.stringify(swapis, null, 2));
    } else {
      setValue('');
    }
  }, [swapis, status, error]);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '500px',
          }}
        >
          <p className="content-group_header">Result:</p>
          <Textarea
            placeholder="Result must show here..."
            minRows={10}
            maxRows={10}
            value={value}
            readOnly
          ></Textarea>
          <Box sx={{ padding: '8px' }}>
            <Button
              onClick={() => {
                dispatch({ type: 'swapi/clearSwapiSaga' });
              }}
            >
              cleare
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
