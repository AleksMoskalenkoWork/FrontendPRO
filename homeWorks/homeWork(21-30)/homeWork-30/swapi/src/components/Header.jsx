import Link from './core/Link';

function Header() {
  return (
    <>
      <header className="navbar-wrapper">
        <div>
          <span>React SWAPI</span>
        </div>

        <ul className="nav justify-content-end nav-link-wrapper">
          <li className="link-wrapper">
            <Link className="nav-link link" value="Home"></Link>
          </li>
          <li className="link-wrapper">
            <Link className="nav-link link" value="About"></Link>
          </li>
          <li className="link-wrapper">
            <Link className="nav-link link" value="Documentation"></Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
