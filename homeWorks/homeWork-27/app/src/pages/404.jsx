import { Link } from 'react-router';

function ErrorPage() {
  return (
    <>
      <div className="error_page-wrapper">
        <h1>404 Page Not Found</h1>
        <div>
          <Link className="error_page-button" to="/">
            Головна
          </Link>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
