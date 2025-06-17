import { useSelector } from 'react-redux';
import './App.css';
import TodoForm from './components/todo/Form';
import List from './components/todo/List';

function App() {
  const tasks = useSelector((state) => state.tasks);
  return (
    <>
      <TodoForm />
      <List />
      <footer>
        Total: <span>{tasks.length}</span>
      </footer>
    </>
  );
}

export default App;
