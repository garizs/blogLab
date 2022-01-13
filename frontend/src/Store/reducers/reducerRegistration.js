import axios from 'axios';

const REGISTRATION = 'REGISTRATION';

const defaultState = {
  status: [],
};

// eslint-disable-next-line default-param-last
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case REGISTRATION:
      return {
        ...state,
        status: { ...payload },
      };
    default:
      return { ...state };
  }
};

export const registration = (name, email, password) => (dispatch) => {
  axios
    .post(`https://bloglab-backend.herokuapp.com/api/auth/register/`, {
      username: name,
      password,
      email,
      first_name: '',
      last_name: '',
      profile_picture: null,
    })
    .then((data) =>
      dispatch({
        type: REGISTRATION,
        payload: data,
      })
    );
};
