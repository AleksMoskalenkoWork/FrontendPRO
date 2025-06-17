import InputGroup from './components/InputGroup';
import ContentGroup from './components/ContentGroup';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <div className="content-wrapper">
        <Header></Header>
        <InputGroup></InputGroup>
        <ContentGroup></ContentGroup>
      </div>
    </>
  );
}

export default App;
