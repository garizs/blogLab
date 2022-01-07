import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadingPrimaryNews } from '../../Store/reducers/reducerPrimaryMainNews';

const PrimaryNews = ({ news, loadingNews }) => {
  useEffect(() => {
    loadingNews();
  }, []);
  useEffect(() => {
    console.log(news);
  });
  return false;
};

export default connect((news) => ({ primaryNews: news.reducerPrimaryMainNews.primaryNews }), {
  loadingNews: loadingPrimaryNews,
})(PrimaryNews);
