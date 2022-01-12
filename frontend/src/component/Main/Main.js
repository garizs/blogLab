import { Route, Routes } from 'react-router-dom';
import PrimaryMain from '../PrimaryMain/PrimaryMain';
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

const Hhh = () => {
  const href = document.URL;
  return (
    <div>
      <h1>{href.match(/\d+$/)[0]}</h1>
      <h1>{href.match(/\d+$/)[0]}</h1>
      <h1>{href.match(/\d+$/)[0]}</h1>
      <h1>{href.match(/\d+$/)[0]}</h1>
      <h1>{href.match(/\d+$/)[0]}</h1>
      <h1>{href.match(/\d+$/)[0]}</h1>
      <h1>{href.match(/\d+$/)[0]}</h1>
      <h1>{href.match(/\d+$/)[0]}</h1>
      <h1>{href.match(/\d+$/)[0]}</h1>
      <h1>{href.match(/\d+$/)[0]}</h1>
      <h1>{href.match(/\d+$/)[0]}</h1>
    </div>
  );
};

const Main = () => (
  <div className="main">
    <Routes>
      <Route exact path={'/'} element={<PrimaryMain />} />
      <Route path={'/cooking'} element={<Ttt></Ttt>} />
      <Route path={'/news/id=:id'} element={<Hhh />} />
    </Routes>
  </div>
);

export default Main;
