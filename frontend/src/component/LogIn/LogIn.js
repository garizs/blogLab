import { useEffect, useState, useRef } from 'react';

import './LogIn.scss';

// eslint-disable-next-line no-unused-vars
const LogIn = ({ setStatusAuthorization, statusAuthorization, setActive, authorization, registration }) => {
  const [check, setCheck] = useState(false);

  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {});

  useEffect(() => {
    document.addEventListener('click', (e) => {
      setStatusAuthorization('');
      if (e.target.className === 'logIn') {
        setActive(false);
      }
    });
    return () => {
      document.addEventListener('click', (e) => {
        setStatusAuthorization('');
        if (e.target.className === 'logIn') {
          setActive(false);
        }
      });
    };
  });

  return (
    <div className="logIn" style={{ top: `${document.documentElement.scrollTop}px` }}>
      <div className="logInContent">
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
        <div className="error">
          {statusAuthorization === 200 && check ? null : <h2>Введен неправильный пароль или логин</h2>}
        </div>
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
                ? () => {
                    if (usernameRef.current.value.trim() && passwordRef.current.value.trim()) {
                      registration(usernameRef.current.value, emailRef.current.value, passwordRef.current.value);
                      emailRef.current.value = '';
                      usernameRef.current.value = '';
                      passwordRef.current.value = '';
                    }
                  }
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

export default LogIn;
