import axios from 'axios';

const GET_PROF = 'GET_PROF';
const CHANGE_PROF = 'CHANGE_PROF';
const LOG_IN_REFRESH = 'LOG_IN_REFRESH';
const LOG_OUT = 'LOG_OUT';
const ERROR_PROF = 'ERROR_PROF';

const defaultState = {
  prof: '',
  data: {},
  status: '',
};

// eslint-disable-next-line default-param-last
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_PROF:
      return {
        ...state,
        prof: { ...payload.prof },
        data: { ...payload },
      };
    case CHANGE_PROF:
      return {
        ...state,
        prof: { ...state.prof, email: payload.email },
        data: { ...payload },
        status: payload.status,
      };
    case LOG_IN_REFRESH:
      return {
        ...state,
        data: payload,
      };
    case LOG_OUT:
      return {
        ...state,
        prof: '',
        data: payload,
      };
    default:
      return { ...state };
  }
};

export const getProf = () => (dispatch) => {
  const token = JSON.parse(localStorage.getItem('token'));
  axios
    .get(`https://bloglab-backend.herokuapp.com/api/users/current_user/`, {
      headers: { Authorization: `Bearer ${token.access}` },
    })
    .then((prof) =>
      dispatch({
        type: GET_PROF,
        payload: { prof: prof.data, data: prof },
      })
    );
};

export const changeProfile = (password, email) => (dispatch) => {
  const funlogOut = () => {
    localStorage.token = JSON.stringify({ token: null });

    dispatch({ type: LOG_OUT });
  };

  // eslint-disable-next-line no-unused-vars
  const funRefresh = (token) => {
    axios
      .post('https://bloglab-backend.herokuapp.com/api/token/refresh/', {
        refresh: token.refresh,
      })
      .then((res) => {
        localStorage.setItem('token', JSON.stringify({ ...token, ...res.data }));

        dispatch({
          type: LOG_IN_REFRESH,
          payload: res,
        });

        changeProfile(password, email);
      })
      .catch((error) => {
        dispatch({
          type: LOG_IN_REFRESH,
          payload: { error, token },
        });

        funlogOut();
      });
  };

  const token = JSON.parse(localStorage.getItem('token'));
  axios
    .post(
      `https://bloglab-backend.herokuapp.com/api/users/change_user/`,
      { password, first_name: '', last_name: '', email, profile_picture: '' },
      {
        headers: { Authorization: `Bearer ${token.access}` },
      }
    )
    .then((data) =>
      dispatch({
        type: CHANGE_PROF,
        payload: { email, data, status: data.status },
      })
    )
    .catch((error) => {
      dispatch({
        type: ERROR_PROF,
        payload: { error, email, password },
        // funRefresh(token);
      });
    });
};
