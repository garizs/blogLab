import axios from 'axios';

export const AUTHORIZATION = 'AUTHORIZATION';
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN = 'LOG_IN';
export const LOG_IN_ACCESS = 'LOG_IN_ACCESS';
export const LOG_IN_REFRESH = 'LOG_IN_REFRESH';

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
    case LOG_IN_ACCESS:
      return {
        ...state,
        status: payload,
      };
    case LOG_IN_REFRESH:
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
  try {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token && token.access) {
      axios
        .get('https://bloglab-backend.herokuapp.com/api/users/current_user/', {
          headers: { Authorization: `Bearer ${token?.access}` },
        })
        .then((res) => {
          dispatch({
            type: LOG_IN_ACCESS,
            payload: res.status,
          });
        })
        .catch((errorAccess) => {
          dispatch({
            type: LOG_IN_ACCESS,
            payload: errorAccess,
          });

          axios
            .get('https://bloglab-backend.herokuapp.com/api/token/refresh/', {
              refresh: token?.refresh,
            })
            .then((res) => {
              localStorage.setItem('token', JSON.stringify({ ...token, ...res.data }));

              dispatch({
                type: LOG_IN_REFRESH,
                payload: res.status,
              });

              logIn();
            })
            .catch((error) => {
              dispatch({
                type: LOG_IN_REFRESH,
                payload: error,
              });

              logOut();
            });
        });
    } else {
      localStorage.token = JSON.stringify({ token: null });
      dispatch({ type: LOG_OUT });
    }
  } catch {
    logIn();
  }
};
