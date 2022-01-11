import axios from 'axios';

export const AUTHORIZATION = 'AUTHORIZATION';
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN = 'LOG_IN';

const defaultState = {
  status: [],
};

// eslint-disable-next-line default-param-last
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case AUTHORIZATION:
      return {
        ...state,
        status: payload,
      };
    case LOG_IN:
      return {
        ...state,
        status: payload,
      };
    case LOG_OUT:
      return {
        ...state,
        status: [],
      };
    default:
      return { ...state };
  }
};

export const authorization = (username, password) => (dispatch) => {
  axios
    .post('https://bloglab-backend.herokuapp.com/api/token/', { username, password })
    .then((res) => {
      localStorage.setItem('token', JSON.stringify(res.data));
      dispatch({
        type: AUTHORIZATION,
        payload: res.status,
      });
    })
    .catch((error) =>
      dispatch({
        type: AUTHORIZATION,
        payload: error.response.status,
      })
    );
};

export const logOut = () => (dispatch) => {
  localStorage.token = JSON.stringify({ token: null });
  dispatch({ type: LOG_OUT });
};

export const logIn = () => (dispatch) => {
  const token = JSON.parse(localStorage.getItem('token'));
  axios
    .get('https://bloglab-backend.herokuapp.com/api/users/current_user/', {
      headers: { Authorization: `Bearer ${token.access}` },
    })
    .then((res) => {
      dispatch({
        type: LOG_IN,
        payload: res.status,
      });
    })
    .catch((error) =>
      dispatch({
        type: LOG_IN,
        payload: error,
      })
    );
};
