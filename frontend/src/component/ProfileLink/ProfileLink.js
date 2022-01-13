import signIn from '../../common/img/signIn.svg';
import './ProfileLink.scss';

const ProfileLink = () => (
  <a className="profLink" href="/profile">
    <img alt="signIn" src={signIn} />
  </a>
);

export default ProfileLink;
