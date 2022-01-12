/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getNews, setDefault } from '../../Store/reducers/reducerNews';
import './News.scss';

// eslint-disable-next-line no-unused-vars
const News = ({ news, date, title, image, getNews, setDefault }) => {
  const [description, setDescription] = useState(null);
  const [newsNew, setNewsNew] = useState(null);

  const newsDate = (date) => `${date[2]}.${date[1]}.${date[0]}`;

  useEffect(() => {
    getNews(document.URL.match(/\d+$/)[0]);
    return setDefault();
  }, []);

  useEffect(() => {
    setDescription(news ? news.split(/\r\n/, 1) : null);
  }, [news]);

  useEffect(() => {
    setNewsNew(news ? news.replace(description, '') : '');
  }, [description]);

  return (
    <div className="news">
      <div className="newsTitle">
        <div className="newsTitleImg">{image ? <img alt="newsTitleImg" src={image} /> : null}</div>
        <div className="newsTitleText">
          <h4>{title}</h4>
        </div>
        <div className="newsTitleDiscpription">
          <h2>{description}</h2>
        </div>
        <div className="newsTitleDate">
          <h6>{date ? newsDate(date.split(/ - /)[0].split(/-/)) : null}</h6>
        </div>
      </div>
      <div
        className="newsText"
        dangerouslySetInnerHTML={{
          __html: `${newsNew}`,
        }}
      ></div>
    </div>
  );
};

export default connect(
  (data) => ({
    news: data.reducerNews.news,
    date: data.reducerNews.date,
    title: data.reducerNews.title,
    image: data.reducerNews.image,
  }),
  {
    getNews,
    setDefault,
  }
)(News);

// export default News;
