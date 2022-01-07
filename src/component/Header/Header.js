import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';
import SignIn from '../SignIn/SignIn';
import './Header.scss';

const Header = () => (
  <div className="header">
    <Logo />
    <Nav />
    <SignIn />
  </div>
);

export default Header;
