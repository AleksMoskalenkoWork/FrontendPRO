import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './features/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="wrapper">
        <div className="count-wrapper">
          <span className="result">{count}</span>
        </div>
        <div className="button-wrapper">
          <button className="decrement" onClick={() => dispatch(decrement())}>
            -
          </button>
          <button className="increment" onClick={() => dispatch(increment())}>
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
