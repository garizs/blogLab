import { Route, Routes } from 'react-router-dom';
import PrimaryMain from '../PrimaryMain/PrimaryMain';
import News from '../News/News';
import Profile from '../Profile/Profile';
import Bookmark from '../Bookmark/Bookmark';
import './Main.scss';

const Main = ({ statusAuthorization }) => (
  <div className="main">
    <Routes>
      <Route exact path={'/'} element={<PrimaryMain />} />
      <Route path={'/cooking'} element={null} />
      <Route path={'/news/id=:id'} element={<News />} />
      {statusAuthorization === 200 ? <Route path={'/bookmark'} element={<Bookmark />} /> : null}
      {statusAuthorization === 200 ? <Route path={'/profile'} element={<Profile />} /> : null}
    </Routes>
  </div>
);

export default Main;
