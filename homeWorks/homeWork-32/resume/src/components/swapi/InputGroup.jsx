import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function Inputgroup() {
  const dispatch = useDispatch();
  const [params, setParams] = useState('');

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Try it now!</h1>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ padding: '8px' }}>
            <span>https://www.swapi.tech/api/</span>
          </Box>
          <TextField
            type="text"
            value={params}
            onChange={(e) => setParams(e.target.value)}
            placeholder="...try people/1/, or select from below."
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                padding: 0,
              },
              '& .MuiOutlinedInput-input': {
                padding: '8px 12px',
              },
            }}
          ></TextField>
          <Box sx={{ padding: '8px' }}>
            <Button
              onClick={() => {
                dispatch({ type: 'swapi/fetchSwapiSaga', payload: params });
                setParams('');
              }}
            >
              request
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
