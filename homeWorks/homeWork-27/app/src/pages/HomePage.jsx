import Form from '../components/todo/Form';
import List from '../components/todo/List';

function HomePage() {
  return (
    <>
      <div className="home_page-wrapper">
        <Form />
        <List />
      </div>
    </>
  );
}

export default HomePage;
