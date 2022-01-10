import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadingPrimaryNews } from '../../Store/reducers/reducerPrimaryMainNews';

// eslint-disable-next-line no-unused-vars
const PrimaryNews = ({ primaryNews, loadingNews }) => {
  useEffect(() => {
    loadingNews();
  }, []);

  return false;
};

export default connect((data) => ({ primaryNews: data.reducerPrimaryMainNews.primaryNews }), {
  loadingNews: loadingPrimaryNews,
})(PrimaryNews);
