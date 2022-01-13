import axios from 'axios';

export const AUTHORIZATION = 'AUTHORIZATION';
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN = 'LOG_IN';
export const LOG_IN_ACCESS = 'LOG_IN_ACCESS';
export const LOG_IN_REFRESH = 'LOG_IN_REFRESH';
const GET_PROFILE = 'GET_PROFILE';

const defaultState = {
  status: [],
  profile: '',
  data: '',
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
    case GET_PROFILE:
      return {
        ...state,
        profile: { ...payload.profile },
        data: { ...payload },
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

  const token = JSON.parse(localStorage.getItem('token'));

  axios
    .get(`https://bloglab-backend.herokuapp.com/api/users/current_user/`, {
      headers: { Authorization: `Bearer ${token.access}` },
    })
    .then((profile) =>
      dispatch({
        type: GET_PROFILE,
        payload: { profile: profile.data, data: profile },
      })
    );
};

export const logOut = () => (dispatch) => {
  localStorage.token = JSON.stringify({ token: null });

  dispatch({ type: LOG_OUT });

  window.location.reload();

  document.location.href = document.location.host;
};

export const logIn = () => (dispatch) => {
  const funlogOut = () => {
    localStorage.token = JSON.stringify({ token: null });

    dispatch({ type: LOG_OUT });
  };

  const funLogIn = (token) => {
    axios
      .get('https://bloglab-backend.herokuapp.com/api/users/current_user/', {
        headers: { Authorization: `Bearer ${token.access}` },
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
        // eslint-disable-next-line no-use-before-define
        funRefresh(token);
      });
  };

  const funRefresh = (token) => {
    axios
      .post('https://bloglab-backend.herokuapp.com/api/token/refresh/', {
        refresh: token.refresh,
      })
      .then((res) => {
        localStorage.setItem('token', JSON.stringify({ ...token, ...res.data }));

        dispatch({
          type: LOG_IN_REFRESH,
          payload: res.status,
        });

        funLogIn({ ...token, ...res.data });
      })
      .catch((error) => {
        dispatch({
          type: LOG_IN_REFRESH,
          payload: { error, token },
        });

        funlogOut();
      });
  };

  try {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token && token.access) {
      funLogIn(token);
    } else if (token && token.refresh) {
      funRefresh(token);
    } else {
      funlogOut();
      return;
    }
    axios
      .get(`https://bloglab-backend.herokuapp.com/api/users/current_user/`, {
        headers: { Authorization: `Bearer ${token.access}` },
      })
      .then((profile) =>
        dispatch({
          type: GET_PROFILE,
          payload: { profile: profile.data, data: profile },
        })
      );
  } catch {
    funlogOut();
  }
};
