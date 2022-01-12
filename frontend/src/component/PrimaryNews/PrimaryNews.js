import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadingPrimaryNews } from '../../Store/reducers/reducerPrimaryMainNews';
import './PrimaryNews.scss';

// eslint-disable-next-line no-unused-vars
const PrimaryNews = ({ primaryNews, loadingNews }) => {
  useEffect(() => {
    loadingNews();
  }, []);

  const primaryNewsDate = (date) => `${date[2]}.${date[1]}.${date[0]}`;

  return (
    <div id="primaryNews" className="primaryNews">
      {primaryNews.map((item, number) => (
        <NavLink
          key={number + 1}
          className={`primaryNewsNumber${number + 1} primaryNewsItem`}
          to={`/news/id=${item.id}`}
        >
          <div className={`primaryNewsImg`}>
            <img alt={`newsNumber=${number + 1}`} src={`${item.images[0].images}`} />
          </div>
          <div className={`primaryNewsTitle`}>
            <h1>{item.title}</h1>
          </div>
          <div className={`primaryNewsDescription`}>
            <h2>{item.text.split(/\r\n/)[0]}</h2>
          </div>
          <div className="primaryNewsDate">
            <h6>{primaryNewsDate(item.publish_date.split(/ - /)[0].split(/-/))}</h6>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default connect((data) => ({ primaryNews: data.reducerPrimaryMainNews.primaryNews }), {
  loadingNews: loadingPrimaryNews,
})(PrimaryNews);
