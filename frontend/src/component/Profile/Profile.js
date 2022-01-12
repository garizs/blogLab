import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../Store/reducers/reducerProfile';
import './Profile.scss';

// eslint-disable-next-line no-shadow
const Profile = ({ profile, getProfile }) => {
  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    console.log(profile);
  });

  return <div>asdasdasd</div>;
};

export default connect((data) => ({ profile: data.reducerProfile.profile }), {
  getProfile,
})(Profile);
