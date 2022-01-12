import axios from 'axios';

export const GET_PRIMARY_NEWS = 'GET_PRIMARY_NEWS';

const defaultState = {
  primaryNews: [],
};

// eslint-disable-next-line default-param-last
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_PRIMARY_NEWS:
      return {
        ...state,
        primaryNews: [...payload],
      };
    default:
      return { ...state };
  }
};

export const loadingPrimaryNews = () => (dispatch) => {
  axios.get('https://bloglab-backend.herokuapp.com/api/posts/get_main_posts/').then((news) =>
    dispatch({
      type: GET_PRIMARY_NEWS,
      payload: news.data,
    })
  );
};

// { ...payload.filter((item, i) => i < 5) }
