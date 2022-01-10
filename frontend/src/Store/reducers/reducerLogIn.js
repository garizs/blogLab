import axios from 'axios';

export const GET_TOKEN = 'GET_TOKEN';

const defaultState = {
  token: [],
};

// eslint-disable-next-line default-param-last
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_TOKEN:
      return {
        ...state,
        token: { ...payload },
      };
    default:
      return { ...state };
  }
};

export const logIn = () => (dispatch) => {
  axios
    .post('https://bloglab-backend.herokuapp.com/api/token/', { username: 'rar', password: 'qw12AS12' })
    .then((token) =>
      dispatch({
        type: GET_TOKEN,
        payload: token,
      })
    );
};
