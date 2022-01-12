import axios from 'axios';

const GET_PROFILE = 'GET_PROFILE';

const defaultState = {
  profile: [],
};

// eslint-disable-next-line default-param-last
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: { ...payload },
      };
    default:
      return { ...state };
  }
};

export const getProfile = () => (dispatch) => {
  const token = JSON.parse(localStorage.getItem('token'));
  axios
    .get(`https://bloglab-backend.herokuapp.com/api/users/current_user/`, {
      headers: { Authorization: `Bearer ${token.access}` },
    })
    .then((profile) =>
      dispatch({
        type: GET_PROFILE,
        payload: profile,
      })
    );
};
