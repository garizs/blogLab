import Logo from '../../common/img/signIn.svg';
import './ProfileLink.scss';

const ProfileLink = () => {
  return (
    <a className="profileLink" href="/profile">
      <img alt="signIn" src={Logo} />
    </a>
  );
};

export default ProfileLink;
