import { Link } from 'react-scroll';
import './Nav.scss';

const Nav = () => (
  <div className="nav">
    <ul>
      <li>
        <Link to="" smooth={true} offset={-50} duration={1000}>
          <h2>Главная</h2>
        </Link>
      </li>
      <li>
        <Link to="primaryCategory" smooth={true} offset={-100} duration={1000}>
          <h2>Рубрика</h2>
        </Link>
      </li>
      <li>
        <Link to="primaryCurator" smooth={true} offset={-140} duration={1000}>
          <h2>Кураторы</h2>
        </Link>
      </li>
      <li>
        <Link to="" smooth={true} offset={-50} duration={1000}>
          <h2> О Нас</h2>
        </Link>
      </li>
    </ul>
  </div>
);

export default Nav;
