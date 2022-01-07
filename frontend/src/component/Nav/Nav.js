import { Link } from 'react-scroll';
import './Nav.scss';

const Nav = () => (
  <div className="nav">
    <ul>
      <li>
        <Link className="" to="" smooth={true} offset={-50} duration={1000}>
          <h2>Главная</h2>
        </Link>
      </li>
      <li>
        <Link className="" to="" smooth={true} offset={-50} duration={1000}>
          <h2>Рубрика</h2>
        </Link>
      </li>
      <li>
        <Link className="" to="" smooth={true} offset={-50} duration={1000}>
          <h2>Кураторы</h2>
        </Link>
      </li>
      <li>
        <Link className="" to="" smooth={true} offset={-50} duration={1000}>
          <h2> О Нас</h2>
        </Link>
      </li>
    </ul>
  </div>
);

export default Nav;
