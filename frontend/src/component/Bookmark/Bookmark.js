import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBookmark, addBookmark } from '../../Store/reducers/reducerBookmark';

// eslint-disable-next-line no-shadow
const Bookmark = ({ bookmark, getBookmark, addBookmark }) => {
  useEffect(() => {
    getBookmark();
    addBookmark(1);
  }, []);

  useEffect(() => {
    console.log(bookmark);
  });
  return (
    <div className="bookmark">
      <h1>bookmarkbookmarkbookmark</h1>
    </div>
  );
};

export default connect((data) => ({ bookmark: data.reducerBookmark.bookmark }), {
  getBookmark,
  addBookmark,
})(Bookmark);
