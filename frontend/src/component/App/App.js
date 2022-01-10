import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Entrance from '../Entrance/Entrance';

const App = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : 'auto';
  });
  return (
    <div className="app" style={{ overflow: active ? 'hidden' : 'auto' }}>
      <Router>
        <Header checkLogIn={setActive} />
        <Main />
      </Router>
      {active ? <Entrance setActive={setActive}></Entrance> : null}
    </div>
  );
};

export default App;
