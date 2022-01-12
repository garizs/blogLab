import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';
import SignIn from '../SignIn/SignIn';
import ProfileLink from '../ProfileLink/ProfileLink';
import './Header.scss';

const Header = ({ statusAuthorization, setActive, logOut }) => {
  const Button = () => {
    return <button onClick={logOut}>выход</button>;
  };
  return (
    <div className="header">
      <div className="headerBar">
        <Logo />
        <Nav />
        {statusAuthorization === 200 ? <ProfileLink /> : <SignIn setActive={setActive} />}
        <Button />
      </div>
    </div>
  );
};

export default Header;
