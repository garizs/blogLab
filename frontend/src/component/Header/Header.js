import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';
import SignIn from '../SignIn/SignIn';
import './Header.scss';

const Header = ({ statusAuthorization, setActive, logOut }) => {
  const Button = () => {
    return <button onClick={logOut}>выход</button>;
  };
  return (
    <div className="header">
      <Logo />
      <Nav />
      {statusAuthorization === 200 ? <Button /> : <SignIn setActive={setActive} />}
    </div>
  );
};

export default Header;
