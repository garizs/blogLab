import { useEffect, useState, useRef } from 'react';

import './Entrance.scss';

// eslint-disable-next-line no-unused-vars
const Entrance = ({ setActive, authorization }) => {
  const [check, setCheck] = useState(false);

  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (e.target.className === 'entrance') {
        setActive(false);
      }
    });
    return () => {
      document.addEventListener('click', (e) => {
        if (e.target.className === 'entrance') {
          setActive(false);
        }
      });
    };
  });

  return (
    <div className="entrance" style={{ top: `${document.documentElement.scrollTop}px` }}>
      <div className="logIn">
        <div className="logIn_name">{check ? <h1>Регистрация</h1> : <h1>Авторизация</h1>}</div>
        {check ? <input ref={emailRef} type="email" placeholder="электронная почта" /> : null}
        <input ref={usernameRef} type="text" placeholder="логин" />
        <input
          ref={passwordRef}
          type="password"
          placeholder="пароль"
          onKeyPress={(e) => {
            if (e.code === 'Enter' && usernameRef.current.value.trim() && passwordRef.current.value.trim()) {
              authorization(usernameRef.current.value, passwordRef.current.value);
              usernameRef.current.value = '';
              passwordRef.current.value = '';
            }
          }}
        />
        {check ? null : (
          <div className="logIn_description">
            <h2>
              Авторизируйтесь или совершите <button onClick={() => setCheck(true)}>регистрацию</button> на нашем сайте
            </h2>
          </div>
        )}
        <div className="logIn_button">
          <button
            onClick={
              check
                ? () => {}
                : () => {
                    if (usernameRef.current.value.trim() && passwordRef.current.value.trim()) {
                      authorization(usernameRef.current.value, passwordRef.current.value);
                      usernameRef.current.value = '';
                      passwordRef.current.value = '';
                    }
                  }
            }
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Entrance;
