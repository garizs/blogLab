import axios from 'axios';

const GET_BOOKMARK = 'GET_BOOKMARK';
const ADD_BOOKMARK = 'ADD_BOOKMARK';

const defaultState = {
  bookmark: [],
};

// eslint-disable-next-line default-param-last
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_BOOKMARK:
      return {
        ...state,
        bookmark: payload,
      };
    case ADD_BOOKMARK:
      return {
        ...state,
        bookmark: payload,
      };
    default:
      return { ...state };
  }
};

export const getBookmark = () => (dispatch) => {
  const token = JSON.parse(localStorage.getItem('token'));
  axios
    .get(`https://bloglab-backend.herokuapp.com/api/posts/get_favourites_posts/`, {
      headers: { Authorization: `Bearer ${token.access}` },
    })
    .then((bookmark) =>
      dispatch({
        type: GET_BOOKMARK,
        payload: bookmark,
      })
    );
};

export const addBookmark = (id) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem('token'));

  axios
    .post(
      `https://bloglab-backend.herokuapp.com/api/posts/add_remove_to_favourite/`,
      { id, action_code: 'add' },
      {
        headers: { Authorization: `Bearer ${token.access}` },
      }
    )
    .then((bookmark) =>
      dispatch({
        type: ADD_BOOKMARK,
        payload: bookmark,
      })
    );
};
