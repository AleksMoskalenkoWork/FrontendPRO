import { useEffect, useState } from 'react';
import Textarea from './core/Textarea';
import { useDispatch, useSelector } from 'react-redux';
import { cleareState } from '../features/swapiSlice';
import Button from './core/Button';

function ContentGroup() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const { entities, status, error } = useSelector((state) => state.swapi);

  useEffect(() => {
    if (status === 'loading') {
      setValue('Loading...');
    } else if (error) {
      setValue(`Error: ${error}`);
    } else if (entities.length) {
      setValue(JSON.stringify(entities, null, 2));
    } else {
      setValue('');
    }
  }, [status, error, entities]);

  function handleClick() {
    dispatch(cleareState());
  }

  return (
    <>
      <div className="content-group_wrapper">
        <p className="content-group_header">Result:</p>
        <Textarea
          placeholder="Result must show here..."
          rows="10"
          className="content-group_field"
          value={value}
          defaultValue="Enter your query above to load data..."
          readOnly
        ></Textarea>
        <Button
          value={'cleare'}
          className="input-group_button"
          onClick={() => {
            dispatch(handleClick);
          }}
        ></Button>
      </div>
    </>
  );
}

export default ContentGroup;
