import { Route, Routes } from 'react-router-dom';
import PrimaryMain from '../PrimaryMain/PrimaryMain';
import './Main.scss';

const Main = () => (
  <div className="main">
    <Routes>
      <Route exact path={'/'} element={<PrimaryMain />} />
      <Route />
      <Route />
    </Routes>
  </div>
);

export default Main;
