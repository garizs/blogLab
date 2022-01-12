import { Route, Routes } from 'react-router-dom';
import PrimaryMain from '../PrimaryMain/PrimaryMain';
import News from '../News/News';
import Profile from '../Profile/Profile';
import './Main.scss';

const Ttt = () => (
  <h1>
    <h1>ЗБС</h1>
    <h1>ЗБС</h1>
    <h1>ЗБС</h1>
    <h1>ЗБС</h1>
    <h1>ЗБС</h1>
    <h1>ЗБС</h1>
    <h1>ЗБС</h1>
    <h1>ЗБС</h1>
    <h1>ЗБС</h1>
    <h1>ЗБС</h1>
    <h1>ЗБС</h1>
  </h1>
);

const Main = () => (
  <div className="main">
    <Routes>
      <Route exact path={'/'} element={<PrimaryMain />} />
      <Route path={'/cooking'} element={<Ttt></Ttt>} />
      <Route path={'/news/id=:id'} element={<News />} />
      <Route path={'/profile'} element={<Profile />} />
    </Routes>
  </div>
);

export default Main;
