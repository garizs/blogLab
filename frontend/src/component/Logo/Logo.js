import { NavLink } from 'react-router-dom';
import './Logo.scss';
import logo from '../../common/img/logo.svg';

const Logo = () => (
  <div className="logo">
    <NavLink to="/">
      <img alt="logo" src={logo} />
    </NavLink>
  </div>
);

export default Logo;
