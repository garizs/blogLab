import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import LogIn from '../LogIn/LogIn';
import { authorization, logOut, logIn } from '../../Store/reducers/reducerAuthorization';

// eslint-disable-next-line no-shadow
const App = ({ statusAuthorization, logOut, logIn, authorization }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    logIn();
  }, []);

  useEffect(() => {
    if (statusAuthorization === 200) {
      setActive(false);
    }
  }, [statusAuthorization]);

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : 'auto';
  }, [active]);

  return (
    <div className="app">
      <Router>
        <Header statusAuthorization={statusAuthorization} setActive={setActive} logOut={logOut} />
        <Main statusAuthorization={statusAuthorization} />
        {active ? <LogIn setActive={setActive} authorization={authorization} /> : null}
      </Router>
    </div>
  );
};

export default connect((data) => ({ statusAuthorization: data.reducerAuthorization.status }), {
  authorization,
  logOut,
  logIn,
})(App);
