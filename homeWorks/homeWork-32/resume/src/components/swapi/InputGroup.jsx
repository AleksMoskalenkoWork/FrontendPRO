import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Inputgroup() {
  const dispatch = useDispatch();
  const [params, setParams] = useState('');

  return (
    <>
      <div className="home_page-wrapper">
        <h1>SwapiPage</h1>
        <div className="input-group_wrapper">
          <h1>Try it now!</h1>
          <span className="input-group_addon">https://www.swapi.tech/api/</span>
          <TextField
            type="text"
            value={params}
            onChange={(e) => setParams(e.target.value)}
            placeholder="...try people/1/, or select from below."
            className="input-group_field"
          ></TextField>
          <Button
            className="input-group_button"
            onClick={() => {
              dispatch({ type: 'swapi/fetchSwapiSaga', payload: params });
              setParams('');
            }}
          >
            request
          </Button>
        </div>
      </div>
    </>
  );
}
