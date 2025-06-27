import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';

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
      <div className="content-group_wrapper">
        <p className="content-group_header">Result:</p>
        <TextareaAutosize
          placeholder="Result must show here..."
          //   rows="10"
          className="content-group_field"
          value={value}
          readOnly
        ></TextareaAutosize>
        <Button
          className="input-group_button"
          onClick={() => {
            dispatch({ type: 'swapi/clearSwapiSaga' });
          }}
        >
          cleare
        </Button>
      </div>
    </>
  );
}
