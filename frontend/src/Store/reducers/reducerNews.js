import axios from 'axios';

const GET_NEWS = 'GET_NEWS';
const SET_DEFAULT = 'SET_DEFAULT';

const defaultState = {
  news: 0,
  title: [],
  image: 0,
  status: [],
};

// eslint-disable-next-line default-param-last
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_NEWS:
      return {
        ...state,
        news: payload.news,
        date: payload.date,
        title: payload.title,
        image: payload.image,
        status: payload.status,
      };
    case SET_DEFAULT:
      return {
        ...state,
        news: 0,
        title: [],
        image: 0,
        status: [],
      };
    default:
      return { ...state };
  }
};

export const getNews = (id) => (dispatch) => {
  axios.get(`https://bloglab-backend.herokuapp.com/api/posts/${id}/`).then((news) =>
    dispatch({
      type: GET_NEWS,
      payload: {
        news: news.data.text,
        date: news.data.publish_date,
        title: news.data.title,
        image: news.data.images[0].images,
        status: news.status,
      },
    })
  );
};

export const setDefault = () => (dispatch) => {
  dispatch({
    type: SET_DEFAULT,
  });
};
