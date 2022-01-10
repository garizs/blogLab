import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';
import SignIn from '../SignIn/SignIn';
import './Header.scss';

const Header = ({ checkLogIn }) => (
  <div className="header">
    <Logo />
    <Nav />
    <SignIn checkLogIn={checkLogIn} />
  </div>
);

export default Header;
