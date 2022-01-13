// eslint-disable-next-line no-unused-vars
import { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { getProf, changeProfile } from '../../Store/reducers/reducerProfile';
import { logOut } from '../../Store/reducers/reducerAuthorization';
import img from '../../common/img/profImg.png';
import change from '../../common/img/change.png';
import back from '../../common/img/back.png';
import './Profile.scss';

// eslint-disable-next-line no-shadow
const Prof = ({ prof, getProf, logOut, changeProfile }) => {
  const [active, setActive] = useState(false);
  // const [nameOLd, setName] = useState('');
  // const [emailOLd, setEmail] = useState('');
  // const [passwordOLd, setPassword] = useState('');

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  useEffect(() => {
    getProf();
  }, [getProf]);

  useEffect(() => {
    name.current.value = prof ? prof.username : '';
    email.current.value = prof ? prof.email : '';
    password.current.value = active ? '' : '        ';
  }, [prof, active]);

  //   useEffect(() => {
  //     setName(prof ? prof.username : '');
  //     setEmail(prof ? prof.email : '');
  //     setPassword(active ? '' : '        ');
  //   }, [prof, active]);

  return (
    <div className="prof">
      <div className="profImg">
        <img alt="profImg" src={img} />
      </div>
      <div className="profPersonal">
        <div className="profDescription">
          <h2>Личные данные</h2>
          {active ? (
            <button onClick={() => setActive(false)}>
              <img alt="change" src={back} />
            </button>
          ) : (
            <button onClick={() => setActive(true)}>
              <img alt="change" src={change} />
            </button>
          )}
        </div>
        <div className="profPersonalData">
          <div className="profName">
            <input className={`input ${active}`} ref={name} type="text" readOnly={active ? null : true} />
          </div>
          <div className="profEmail">
            <input ref={email} className={`input ${active}`} type="text" readOnly={active ? null : true} />
          </div>
          <div className="profPassword">
            <input
              className={`input ${active}`}
              ref={password}
              type={active ? 'text' : 'password'}
              readOnly={active ? null : true}
            />
          </div>
        </div>
        <div className="profLogOut">
          {active ? (
            <button
              onClick={() => {
                console.log(email.current.value);
                changeProfile(password.current.value, email.current.value);
                setActive(false);
              }}
            >
              Сохранить
            </button>
          ) : (
            <button onClick={logOut}>Выйти</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default connect((data) => ({ prof: data.reducerProfile.prof }), {
  getProf,
  logOut,
  changeProfile,
})(Prof);

// readOnly={true}
