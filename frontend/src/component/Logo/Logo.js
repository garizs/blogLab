import { NavLink } from 'react-router-dom';
import './Logo.scss';

const Logo = () => (
  <div className="logo">
    <NavLink to="/">
      <img alt="logo" src="./img/logo.svg" />
    </NavLink>
  </div>
);

export default Logo;
