import bookmark from '../../common/img/bookmark.png';
import './BookmarkLink.scss';

const BookmarkLink = () => (
  <a className="bookmarkLink" href="/bookmark">
    <img alt="signIn" src={bookmark} />
  </a>
);

export default BookmarkLink;
