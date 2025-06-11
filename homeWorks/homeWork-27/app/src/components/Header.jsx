import { Link } from 'react-router';
import ThemeToggle from './core/ThemeToggle';

function Header() {
  return (
    <>
      <header className="navbar-wrapper">
        <div>
          <span>SPA Todo</span>
        </div>

        <ul className="nav justify-content-end nav-link-wrapper">
          <ThemeToggle />
          <li className="link-wrapper">
            <Link className="nav-link link" to="/">
              Головна
            </Link>
          </li>
          <li className="link-wrapper">
            <Link className="nav-link link" to="contacts">
              Контакти
            </Link>
          </li>
          <li className="link-wrapper">
            <Link className="nav-link link" to="about">
              Про мене
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
