import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';
import SignIn from '../SignIn/SignIn';
import ProfileLink from '../ProfileLink/ProfileLink';
import BookmarkLink from '../BookmarkLink/BookmarkLink';
import './Header.scss';

const Header = ({ statusAuthorization, setActive }) => {
  return (
    <div className="header">
      <div className="headerBar">
        <Logo />
        <Nav />
        <div className="personalAction">
          {statusAuthorization === 200 ? <BookmarkLink /> : null}
          {statusAuthorization === 200 ? <ProfileLink /> : <SignIn setActive={setActive} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
