import Input from './core/Input';
import Button from './core/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSwapi } from '../features/middleware/fetchSwapi';

function InputGroup() {
  const [params, setParams] = useState('');

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(fetchSwapi(params));
    setParams('');
  }

  return (
    <>
      <div className="input-group_wrapper">
        <h1>Try it now!</h1>
        <span className="input-group_addon">https://www.swapi.tech/api/</span>
        <Input
          type="text"
          value={params}
          onChange={(e) => setParams(e.target.value)}
          placeholder="...try people/1/, or select from below."
          className="input-group_field"
        ></Input>
        <Button
          value="request"
          className="input-group_button"
          onClick={() => {
            dispatch(handleClick);
          }}
        ></Button>
      </div>
    </>
  );
}

export default InputGroup;
