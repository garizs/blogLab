import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../Store/reducers/reducerProfile';
import './Profile.scss';

// eslint-disable-next-line no-shadow
const Profile = ({ profile, getProfile }) => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  useEffect(() => {
    name.current.value = profile ? profile.username : '';
    email.current.value = profile ? profile.email : '';
    password.current.value = '........';
    console.log('+');
  });

  useEffect(() => {
    console.log(profile);
  });

  return (
    <div className="profile">
      <div className="profileDescription">
        <h2>Личные данные</h2>
        <div className="Button"></div>
      </div>
      <div className="profilePersonalData">
        <div className="profileName">
          <input ref={name} readonly="readonly" />
        </div>
        <div className="profileEmil">
          <input ref={email} readonly="readonly" />
        </div>
        <div className="profilePassword">
          <input type="password" ref={password} readonly="readonly" />
        </div>
      </div>
      <div className="profileLogOut">
        <button>Выйти</button>
      </div>
    </div>
  );
};

export default connect((data) => ({ profile: data.reducerProfile.profile }), {
  getProfile,
})(Profile);
